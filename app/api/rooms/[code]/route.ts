import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { QUESTION_BANK, type Question } from "../../../lib/questions";

type OnlinePhase = "lobby" | "answer" | "bet" | "score" | "over";

type OnlinePlayer = {
  id: string;
  name: string;
  score: number;
  answer: number | null;
  votes: string[];
  gambitActive: boolean;
  gambitTarget: string;
  ready: boolean;
  readyNext: boolean;
  joinedAt: number;
};

type RankedPlayer = {
  id: string;
  name: string;
  answer: number;
};

type GambitOutcome = {
  used: boolean;
  target: string;
  success: boolean;
};

type RoundResult = {
  question: Question;
  ordered: RankedPlayer[];
  answerPoints: Record<string, number>;
  votePoints: Record<string, number>;
  roundPoints: Record<string, number>;
  finalScores: Record<string, number>;
  gambit: Record<string, GambitOutcome>;
  winning: {
    below: boolean;
    answerValue: number | null;
    slotId: string | null;
    winnerIds: string[];
  };
  votes: Record<string, string[]>;
};

type OnlineRoom = {
  code: string;
  hostId: string;
  phase: OnlinePhase;
  round: number;
  question: Question | null;
  questionDeck: string[];
  players: OnlinePlayer[];
  answerDeadline: number | null;
  betDeadline: number | null;
  lastResult: RoundResult | null;
  createdAt: number;
  updatedAt: number;
};

const MAX_PLAYERS = 7;
const MAX_ROUNDS = 7;
const GAMBIT_MULTIPLIER = 7;
const ANSWER_DURATION_MS = 20_000;
const BET_DURATION_MS = 20_000;
const ROOM_TTL_SECONDS = 60 * 60 * 6;
const FINAL_ROOM_TTL_SECONDS = 60 * 15;

const BELOW_SLOT = {
  id: "below",
  tier: "below",
  pointsUnique: 15,
  pointsShared: 15,
  slotIndex: null
} as const;

const ANSWER_SLOTS = [
  {
    id: "slot-0",
    tier: "orange",
    pointsUnique: 12,
    pointsShared: 8,
    slotIndex: 0
  },
  {
    id: "slot-1",
    tier: "yellow",
    pointsUnique: 9,
    pointsShared: 6,
    slotIndex: 1
  },
  {
    id: "slot-2",
    tier: "green",
    pointsUnique: 6,
    pointsShared: 4,
    slotIndex: 2
  },
  {
    id: "slot-3",
    tier: "blue",
    pointsUnique: 3,
    pointsShared: 2,
    slotIndex: 3
  },
  {
    id: "slot-4",
    tier: "green",
    pointsUnique: 6,
    pointsShared: 4,
    slotIndex: 4
  },
  {
    id: "slot-5",
    tier: "yellow",
    pointsUnique: 9,
    pointsShared: 6,
    slotIndex: 5
  },
  {
    id: "slot-6",
    tier: "orange",
    pointsUnique: 12,
    pointsShared: 8,
    slotIndex: 6
  }
] as const;

type BoardSlot = (typeof ANSWER_SLOTS)[number] | typeof BELOW_SLOT;

const SLOT_BY_ID: Map<string, BoardSlot> = new Map(
  [BELOW_SLOT, ...ANSWER_SLOTS].map((slot) => [slot.id, slot])
);

const VALID_SLOT_IDS = new Set([BELOW_SLOT.id, ...ANSWER_SLOTS.map((slot) => slot.id)]);

const makeId = () => Math.random().toString(36).slice(2, 10);
const roomKey = (code: string) => `room:${code}`;

const QUESTION_BY_ID = new Map(QUESTION_BANK.map((question) => [question.id, question]));

const shuffleQuestionIds = () =>
  QUESTION_BANK.map((question) => question.id).sort(() => Math.random() - 0.5);

const drawFromDeck = (deck: string[]) => {
  const nextDeck = deck.length ? [...deck] : shuffleQuestionIds();
  const nextId = nextDeck.shift();
  const question = (nextId && QUESTION_BY_ID.get(nextId)) ?? QUESTION_BANK[0];
  return { question, deck: nextDeck };
};

const isPlayerDone = (player: OnlinePlayer) => {
  if (player.gambitActive) {
    return !!player.gambitTarget;
  }
  return player.votes.filter((vote) => vote).length >= 2;
};

const getActiveSlotIndexes = (count: number) => {
  const indexes: number[] = [];
  let remaining = count;
  if (remaining <= 0) {
    return indexes;
  }
  if (remaining % 2 === 1) {
    indexes.push(3);
    remaining -= 1;
  }
  const rings = [
    [2, 4],
    [1, 5],
    [0, 6]
  ];
  for (const ring of rings) {
    if (remaining <= 0) {
      break;
    }
    indexes.push(...ring);
    remaining -= 2;
  }
  return indexes.sort((a, b) => a - b);
};

const getSlotPoints = (slotId: string, unique: boolean) => {
  const slot = SLOT_BY_ID.get(slotId);
  if (!slot) {
    return 0;
  }
  return unique ? slot.pointsUnique : slot.pointsShared;
};

const computeWinning = (question: Question, ordered: RankedPlayer[]) => {
  const underOrEqual = ordered.filter((player) => player.answer <= question.answer);
  if (underOrEqual.length === 0) {
    return { below: true, answerValue: null, winnerIds: new Set<string>() };
  }
  const winningValue = underOrEqual[underOrEqual.length - 1].answer;
  const winners = ordered.filter((player) => player.answer === winningValue);
  return {
    below: false,
    answerValue: winningValue,
    winnerIds: new Set(winners.map((player) => player.id))
  };
};

const startRound = (room: OnlineRoom, now: number, nextRound: number) => {
  const { question, deck } = drawFromDeck(room.questionDeck ?? []);
  return {
    ...room,
    phase: "answer" as OnlinePhase,
    round: nextRound,
    question,
    questionDeck: deck,
    answerDeadline: now + ANSWER_DURATION_MS,
    betDeadline: null,
    lastResult: null,
    players: room.players.map((player) => ({
      ...player,
      answer: null,
      votes: ["", ""],
      gambitActive: false,
      gambitTarget: "",
      ready: false,
      readyNext: false
    })),
    updatedAt: now
  };
};

const startBetPhase = (room: OnlineRoom, now: number) => ({
  ...room,
  phase: "bet" as OnlinePhase,
  answerDeadline: null,
  betDeadline: now + BET_DURATION_MS,
  updatedAt: now
});

const scoreRound = (room: OnlineRoom, now: number) => {
  if (!room.question) {
    return { ...room, phase: "score" as OnlinePhase, updatedAt: now };
  }

  const ordered = room.players
    .filter((player) => player.answer !== null)
    .map((player) => ({
      id: player.id,
      name: player.name,
      answer: player.answer as number
    }))
    .sort((a, b) => {
      if (a.answer !== b.answer) {
        return a.answer - b.answer;
      }
      return a.name.localeCompare(b.name);
    });

  const answerGroups = new Map<number, OnlinePlayer[]>();
  room.players.forEach((player) => {
    if (player.answer === null) {
      return;
    }
    const list = answerGroups.get(player.answer) ?? [];
    list.push(player);
    answerGroups.set(player.answer, list);
  });

  const groupedEntries = Array.from(answerGroups.entries()).sort((a, b) => a[0] - b[0]);
  const activeSlotIndexes = getActiveSlotIndexes(groupedEntries.length);

  const answerAssignments: Record<number, { value: number; players: OnlinePlayer[] }> =
    {};
  activeSlotIndexes.forEach((slotIndex, index) => {
    const entry = groupedEntries[index];
    if (!entry) {
      return;
    }
    answerAssignments[slotIndex] = { value: entry[0], players: entry[1] };
  });

  const slotIdByAnswerValue = new Map<number, string>();
  Object.entries(answerAssignments).forEach(([slotIndex, assignment]) => {
    const slot = ANSWER_SLOTS[Number(slotIndex)];
    if (slot) {
      slotIdByAnswerValue.set(assignment.value, slot.id);
    }
  });

  const winning = computeWinning(room.question, ordered);
  const winningSlotId = winning.below
    ? BELOW_SLOT.id
    : winning.answerValue !== null
    ? slotIdByAnswerValue.get(winning.answerValue) ?? null
    : null;

  const slotVoters: Record<string, Set<string>> = {};
  room.players.forEach((player) => {
    if (player.gambitActive) {
      if (!player.gambitTarget) {
        return;
      }
      if (!slotVoters[player.gambitTarget]) {
        slotVoters[player.gambitTarget] = new Set();
      }
      slotVoters[player.gambitTarget].add(player.id);
      return;
    }
    player.votes.forEach((vote) => {
      if (!vote) {
        return;
      }
      if (!slotVoters[vote]) {
        slotVoters[vote] = new Set();
      }
      slotVoters[vote].add(player.id);
    });
  });

  const winningAnswerPoints =
    !winning.below && winningSlotId ? getSlotPoints(winningSlotId, false) : 0;

  const uniqueWinner =
    winningSlotId && slotVoters[winningSlotId]
      ? slotVoters[winningSlotId].size === 1
      : false;

  const answerPoints: Record<string, number> = {};
  const votePoints: Record<string, number> = {};
  const roundPoints: Record<string, number> = {};
  const finalScores: Record<string, number> = {};
  const gambitOutcome: Record<string, GambitOutcome> = {};
  const votesSnapshot: Record<string, string[]> = {};

  room.players.forEach((player) => {
    const winningTarget = player.gambitActive
      ? winningSlotId === player.gambitTarget && !!player.gambitTarget
      : false;
    let voteGain = 0;
    if (player.gambitActive) {
      voteGain =
        player.gambitTarget && winningTarget
          ? getSlotPoints(player.gambitTarget, uniqueWinner)
          : 0;
    } else {
      player.votes.forEach((vote) => {
        if (vote && winningSlotId && vote === winningSlotId) {
          voteGain += getSlotPoints(vote, uniqueWinner);
        }
      });
    }

    answerPoints[player.id] =
      !winning.below && winning.winnerIds.has(player.id)
        ? winningAnswerPoints
        : 0;
    votePoints[player.id] = voteGain;
    roundPoints[player.id] = (answerPoints[player.id] ?? 0) + voteGain;

    const gambitSuccess = player.gambitActive && winningTarget;
    gambitOutcome[player.id] = {
      used: player.gambitActive,
      target: player.gambitTarget,
      success: gambitSuccess
    };

    const roundTotal = player.gambitActive
      ? gambitSuccess
        ? (roundPoints[player.id] ?? 0) * GAMBIT_MULTIPLIER
        : 0
      : roundPoints[player.id] ?? 0;
    finalScores[player.id] = player.score + roundTotal;

    votesSnapshot[player.id] = [...player.votes];
  });

  const updatedPlayers = room.players.map((player) => ({
    ...player,
    score: finalScores[player.id] ?? player.score,
    gambitActive: false,
    gambitTarget: "",
    readyNext: false
  }));

  const lastResult: RoundResult = {
    question: room.question,
    ordered,
    answerPoints,
    votePoints,
    roundPoints,
    finalScores,
    gambit: gambitOutcome,
    winning: {
      below: winning.below,
      answerValue: winning.answerValue,
      slotId: winningSlotId,
      winnerIds: Array.from(winning.winnerIds)
    },
    votes: votesSnapshot
  };

  return {
    ...room,
    phase: "score" as OnlinePhase,
    betDeadline: null,
    answerDeadline: null,
    players: updatedPlayers,
    lastResult,
    updatedAt: now
  };
};

const advanceRoom = (room: OnlineRoom, now: number) => {
  let updatedRoom = room;
  let ttlOverride: number | null = null;
  let changed = false;

  if (updatedRoom.phase === "lobby") {
    const allReady =
      updatedRoom.players.length >= 2 &&
      updatedRoom.players.every((player) => player.ready);
    if (allReady) {
      updatedRoom = startRound(updatedRoom, now, 1);
      changed = true;
    }
  }

  if (updatedRoom.phase === "answer") {
    const allAnswered =
      updatedRoom.players.length > 0 &&
      updatedRoom.players.every((player) => player.answer !== null);
    const timeUp =
      updatedRoom.answerDeadline !== null && now >= updatedRoom.answerDeadline;
    if (allAnswered || timeUp) {
      updatedRoom = startBetPhase(updatedRoom, now);
      changed = true;
    }
  }

  if (updatedRoom.phase === "bet") {
    const allBetsDone =
      updatedRoom.players.length > 0 &&
      updatedRoom.players.every((player) => isPlayerDone(player));
    const timeUp =
      updatedRoom.betDeadline !== null && now >= updatedRoom.betDeadline;
    if (allBetsDone || timeUp) {
      updatedRoom = scoreRound(updatedRoom, now);
      changed = true;
    }
  }

  if (updatedRoom.phase === "score") {
    const allReadyNext =
      updatedRoom.players.length > 0 &&
      updatedRoom.players.every((player) => player.readyNext);
    if (allReadyNext) {
      if (updatedRoom.round >= MAX_ROUNDS) {
        updatedRoom = {
          ...updatedRoom,
          phase: "over",
          answerDeadline: null,
          betDeadline: null,
          updatedAt: now
        };
        ttlOverride = FINAL_ROOM_TTL_SECONDS;
        changed = true;
      } else {
        updatedRoom = startRound(updatedRoom, now, updatedRoom.round + 1);
        changed = true;
      }
    }
  }

  return { room: updatedRoom, changed, ttlOverride };
};

const parsePlayerId = (body: unknown) =>
  typeof (body as { playerId?: string })?.playerId === "string"
    ? (body as { playerId?: string }).playerId
    : "";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code?.toUpperCase();
  if (!code) {
    return NextResponse.json({ error: "Code manquant." }, { status: 400 });
  }

  const room = await kv.get<OnlineRoom>(roomKey(code));
  if (!room) {
    return NextResponse.json({ error: "Partie introuvable." }, { status: 404 });
  }

  const now = Date.now();
  const { room: updatedRoom, changed, ttlOverride } = advanceRoom(room, now);
  if (changed) {
    await kv.set(roomKey(code), updatedRoom, {
      ex: ttlOverride ?? ROOM_TTL_SECONDS
    });
  }

  return NextResponse.json({ room: updatedRoom });
}

export async function POST(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code?.toUpperCase();
  if (!code) {
    return NextResponse.json({ error: "Code manquant." }, { status: 400 });
  }

  const body = await request.json();
  const action = typeof body?.action === "string" ? body.action : "";

  const room = await kv.get<OnlineRoom>(roomKey(code));
  if (!room) {
    return NextResponse.json({ error: "Partie introuvable." }, { status: 404 });
  }

  const now = Date.now();

  if (action === "join") {
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    if (!name) {
      return NextResponse.json({ error: "Nom requis." }, { status: 400 });
    }
    if (room.phase !== "lobby") {
      return NextResponse.json(
        { error: "La partie a deja commence." },
        { status: 400 }
      );
    }
    if (room.players.length >= MAX_PLAYERS) {
      return NextResponse.json(
        { error: "La partie est complete." },
        { status: 400 }
      );
    }
    const playerId = makeId();
    const player: OnlinePlayer = {
      id: playerId,
      name,
      score: 0,
      answer: null,
      votes: ["", ""],
      gambitActive: false,
      gambitTarget: "",
      ready: false,
      readyNext: false,
      joinedAt: now
    };
    const updatedRoom = {
      ...room,
      players: [...room.players, player],
      updatedAt: now
    };
    await kv.set(roomKey(code), updatedRoom, { ex: ROOM_TTL_SECONDS });
    return NextResponse.json({ room: updatedRoom, playerId });
  }

  const { room: advancedRoom } = advanceRoom(room, now);
  if (advancedRoom.phase === "over") {
    return NextResponse.json({ room: advancedRoom });
  }

  const playerId = parsePlayerId(body);
  if (!playerId) {
    return NextResponse.json({ error: "Player manquant." }, { status: 400 });
  }

  const playerIndex = advancedRoom.players.findIndex(
    (player) => player.id === playerId
  );
  if (playerIndex === -1) {
    return NextResponse.json({ error: "Player introuvable." }, { status: 404 });
  }

  const updatedPlayers = advancedRoom.players.slice();
  const player = { ...updatedPlayers[playerIndex] };

  switch (action) {
    case "ready": {
      if (advancedRoom.phase !== "lobby") {
        return NextResponse.json(
          { error: "La partie n'est plus en lobby." },
          { status: 400 }
        );
      }
      player.ready = !!body?.ready;
      break;
    }
    case "answer": {
      if (advancedRoom.phase !== "answer") {
        return NextResponse.json(
          { error: "La phase de reponse est terminee." },
          { status: 400 }
        );
      }
      const answer =
        body?.answer === "" || body?.answer === null || body?.answer === undefined
          ? null
          : Number.parseInt(String(body?.answer), 10);
      player.answer = Number.isFinite(answer) ? answer : null;
      break;
    }
    case "toggleGambit": {
      if (advancedRoom.phase !== "bet") {
        return NextResponse.json(
          { error: "Les votes ne sont pas ouverts." },
          { status: 400 }
        );
      }
      const gambitActive = !!body?.gambitActive;
      player.gambitActive = gambitActive;
      player.gambitTarget = gambitActive ? "" : player.gambitTarget;
      player.votes = gambitActive ? ["", ""] : player.votes;
      break;
    }
    case "placeToken": {
      if (advancedRoom.phase !== "bet") {
        return NextResponse.json(
          { error: "Les votes ne sont pas ouverts." },
          { status: 400 }
        );
      }
      const targetId = typeof body?.targetId === "string" ? body.targetId : "";
      if (!targetId || !VALID_SLOT_IDS.has(targetId)) {
        return NextResponse.json(
          { error: "Case invalide." },
          { status: 400 }
        );
      }
      if (player.gambitActive) {
        player.gambitTarget = targetId;
      } else {
        const votes = player.votes.length ? [...player.votes] : ["", ""];
        const emptyIndex = votes.findIndex((vote) => !vote);
        if (emptyIndex === -1) {
          votes[votes.length - 1] = targetId;
        } else {
          votes[emptyIndex] = targetId;
        }
        player.votes = votes;
      }
      break;
    }
    case "clearToken": {
      if (advancedRoom.phase !== "bet") {
        return NextResponse.json(
          { error: "Les votes ne sont pas ouverts." },
          { status: 400 }
        );
      }
      if (player.gambitActive) {
        player.gambitTarget = "";
      } else {
        const votes = player.votes.length ? [...player.votes] : ["", ""];
        for (let index = votes.length - 1; index >= 0; index -= 1) {
          if (votes[index]) {
            votes[index] = "";
            break;
          }
        }
        player.votes = votes;
      }
      break;
    }
    case "readyNext": {
      if (advancedRoom.phase !== "score") {
        return NextResponse.json(
          { error: "La manche n'est pas terminee." },
          { status: 400 }
        );
      }
      player.readyNext = !!body?.ready;
      break;
    }
    default:
      return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
  }

  updatedPlayers[playerIndex] = player;
  const updatedRoom = {
    ...advancedRoom,
    players: updatedPlayers,
    updatedAt: now
  };
  const { room: finalRoom, ttlOverride } = advanceRoom(updatedRoom, now);

  await kv.set(roomKey(code), finalRoom, {
    ex: ttlOverride ?? ROOM_TTL_SECONDS
  });

  return NextResponse.json({ room: finalRoom });
}
