"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_QUESTION, QUESTION_BANK, type Question } from "./lib/questions";

type Phase = "setup" | "answer" | "bet" | "score";

type Player = {
  id: string;
  name: string;
  score: number;
  answer: number | null;
  votes: string[];
  gambitActive: boolean;
  gambitTarget: string;
  ready: boolean;
  readyNext: boolean;
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

type OnlinePhase = "lobby" | "answer" | "bet" | "score" | "over";

type OnlinePlayer = Player & {
  joinedAt: number;
};

type OnlineRoom = {
  code: string;
  hostId: string;
  phase: OnlinePhase;
  round: number;
  question: Question | null;
  questionDeck?: string[];
  players: OnlinePlayer[];
  answerDeadline: number | null;
  betDeadline: number | null;
  lastResult: RoundResult | null;
  createdAt: number;
  updatedAt: number;
};

const MAX_PLAYERS = 7;
const GAMBIT_MULTIPLIER = 7;
const shuffleQuestions = (questions: Question[]) =>
  [...questions].sort(() => Math.random() - 0.5);

const BELOW_SLOT = {
  id: "below",
  label: "Sous toutes les reponses",
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
type SlotId = BoardSlot["id"];

const SLOT_BY_ID: Map<string, BoardSlot> = new Map(
  [BELOW_SLOT, ...ANSWER_SLOTS].map((slot) => [slot.id, slot])
);

const phaseLabels: Record<Phase, string> = {
  setup: "Preparation",
  answer: "Reponses",
  bet: "Votes",
  score: "Scores"
};

const onlinePhaseLabels: Record<OnlinePhase, string> = {
  lobby: "Lobby",
  answer: "Reponses",
  bet: "Votes",
  score: "Scores",
  over: "Termine"
};

const makeId = () => Math.random().toString(36).slice(2, 10);

const getPlayerInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const initials = parts.map((part) => part[0] ?? "").join("");
  return initials.slice(0, 2).toUpperCase();
};

const isPlayerDone = (player: Player) => {
  if (player.gambitActive) {
    return !!player.gambitTarget;
  }
  return player.votes.filter((vote) => vote).length >= 2;
};

const findNextVoterIndex = (startIndex: number, list: Player[]) => {
  if (list.length === 0) {
    return 0;
  }
  for (let offset = 1; offset <= list.length; offset += 1) {
    const index = (startIndex + offset) % list.length;
    if (!isPlayerDone(list[index])) {
      return index;
    }
  }
  return startIndex;
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

const getSlotPositionLabel = (slotIndex: number | null) => {
  if (slotIndex === null) {
    return "Sous toutes";
  }
  return "";
};

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [players, setPlayers] = useState<Player[]>([]);
  const [round, setRound] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionDeck, setQuestionDeck] = useState<Question[]>(() =>
    shuffleQuestions(QUESTION_BANK)
  );
  const nextQuestion = questionDeck[0] ?? DEFAULT_QUESTION;
  const [newPlayerName, setNewPlayerName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [lastRound, setLastRound] = useState<RoundResult | null>(null);
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"game" | "rules">("game");
  const [mode, setMode] = useState<"local" | "online">("local");
  const [onlineRoom, setOnlineRoom] = useState<OnlineRoom | null>(null);
  const [onlinePlayerId, setOnlinePlayerId] = useState<string | null>(null);
  const [onlineName, setOnlineName] = useState("");
  const [onlineAnswerDraft, setOnlineAnswerDraft] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [onlineError, setOnlineError] = useState<string | null>(null);
  const [onlineLoading, setOnlineLoading] = useState(false);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (players.length === 0) {
      return;
    }
    if (currentVoterIndex >= players.length) {
      setCurrentVoterIndex(0);
    }
  }, [currentVoterIndex, players.length]);

  useEffect(() => {
    setOnlineError(null);
  }, [mode]);

  useEffect(() => {
    if (mode !== "online" || !onlineRoom?.code) {
      return;
    }
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [mode, onlineRoom?.code]);

  useEffect(() => {
    if (mode !== "online" || !onlineRoom?.code) {
      return;
    }
    let active = true;
    const pollRoom = async () => {
      try {
        const response = await fetch(`/api/rooms/${onlineRoom.code}`, {
          cache: "no-store"
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error ?? "Erreur reseau.");
        }
        if (active) {
          setOnlineRoom(data.room);
        }
      } catch (pollError) {
        if (active) {
          setOnlineError(
            pollError instanceof Error ? pollError.message : "Erreur reseau."
          );
        }
      }
    };
    pollRoom();
    const interval = window.setInterval(pollRoom, 2000);
    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [mode, onlineRoom?.code]);

  const orderedByAnswer = useMemo(() => {
    if (!currentQuestion) {
      return [] as RankedPlayer[];
    }
    return players
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
  }, [players, currentQuestion]);

  const answerGroups = useMemo(() => {
    const map = new Map<number, Player[]>();
    players.forEach((player) => {
      if (player.answer === null) {
        return;
      }
      const list = map.get(player.answer) ?? [];
      list.push(player);
      map.set(player.answer, list);
    });
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [players]);

  const onlinePlayers = useMemo(
    () => onlineRoom?.players ?? [],
    [onlineRoom]
  );
  const onlineSelf = useMemo(
    () => onlinePlayers.find((player) => player.id === onlinePlayerId) ?? null,
    [onlinePlayers, onlinePlayerId]
  );

  const activeSlotIndexes = useMemo(
    () => getActiveSlotIndexes(answerGroups.length),
    [answerGroups.length]
  );

  const onlineAnswerGroups = useMemo(() => {
    const map = new Map<number, OnlinePlayer[]>();
    onlinePlayers.forEach((player) => {
      if (player.answer === null) {
        return;
      }
      const list = map.get(player.answer) ?? [];
      list.push(player);
      map.set(player.answer, list);
    });
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [onlinePlayers]);

  const onlineActiveSlotIndexes = useMemo(
    () => getActiveSlotIndexes(onlineAnswerGroups.length),
    [onlineAnswerGroups.length]
  );

  const answerAssignments = useMemo(() => {
    const assignments: Record<number, { value: number; players: Player[] }> = {};
    activeSlotIndexes.forEach((slotIndex, index) => {
      const entry = answerGroups[index];
      if (!entry) {
        return;
      }
      assignments[slotIndex] = { value: entry[0], players: entry[1] };
    });
    return assignments;
  }, [activeSlotIndexes, answerGroups]);

  const onlineAnswerAssignments = useMemo(() => {
    const assignments: Record<number, { value: number; players: OnlinePlayer[] }> =
      {};
    onlineActiveSlotIndexes.forEach((slotIndex, index) => {
      const entry = onlineAnswerGroups[index];
      if (!entry) {
        return;
      }
      assignments[slotIndex] = { value: entry[0], players: entry[1] };
    });
    return assignments;
  }, [onlineActiveSlotIndexes, onlineAnswerGroups]);

  const slotIdByAnswerValue = useMemo(() => {
    const map = new Map<number, string>();
    Object.entries(answerAssignments).forEach(([slotIndex, assignment]) => {
      const slot = ANSWER_SLOTS[Number(slotIndex)];
      if (slot) {
        map.set(assignment.value, slot.id);
      }
    });
    return map;
  }, [answerAssignments]);

  const boardSlotsForDisplay = useMemo<BoardSlot[]>(() => {
    const slots: BoardSlot[] = [...ANSWER_SLOTS].slice().reverse();
    slots.push(BELOW_SLOT);
    return slots;
  }, []);

  const tokensByTarget = useMemo(() => {
    const map: Record<
      string,
      { key: string; label: string; type: "vote" | "gambit"; playerId: string }[]
    > = {};
    [BELOW_SLOT, ...ANSWER_SLOTS].forEach((slot) => {
      map[slot.id] = [];
    });
    players.forEach((player) => {
      if (player.gambitActive) {
        if (!player.gambitTarget) {
          return;
        }
        if (!map[player.gambitTarget]) {
          map[player.gambitTarget] = [];
        }
        map[player.gambitTarget].push({
          key: `${player.id}-gambit`,
          label: player.name,
          type: "gambit",
          playerId: player.id
        });
        return;
      }
      player.votes.forEach((vote, index) => {
        if (!vote) {
          return;
        }
        if (!map[vote]) {
          map[vote] = [];
        }
        map[vote].push({
          key: `${player.id}-vote-${index}`,
          label: player.name,
          type: "vote",
          playerId: player.id
        });
      });
    });
    return map;
  }, [players]);

  const onlineTokensByTarget = useMemo(() => {
    const map: Record<
      string,
      { key: string; label: string; type: "vote" | "gambit"; playerId: string }[]
    > = {};
    [BELOW_SLOT, ...ANSWER_SLOTS].forEach((slot) => {
      map[slot.id] = [];
    });
    onlinePlayers.forEach((player) => {
      if (player.gambitActive) {
        if (!player.gambitTarget) {
          return;
        }
        if (!map[player.gambitTarget]) {
          map[player.gambitTarget] = [];
        }
        map[player.gambitTarget].push({
          key: `${player.id}-gambit`,
          label: player.name,
          type: "gambit",
          playerId: player.id
        });
        return;
      }
      player.votes.forEach((vote, index) => {
        if (!vote) {
          return;
        }
        if (!map[vote]) {
          map[vote] = [];
        }
        map[vote].push({
          key: `${player.id}-vote-${index}`,
          label: player.name,
          type: "vote",
          playerId: player.id
        });
      });
    });
    return map;
  }, [onlinePlayers]);

  const activeVoter = players[currentVoterIndex] ?? null;
  const activeVoterTokenCount = activeVoter
    ? activeVoter.gambitActive
      ? activeVoter.gambitTarget
        ? 1
        : 0
      : activeVoter.votes.filter((vote) => vote).length
    : 0;
  const activeVoterTokenLimit = activeVoter?.gambitActive ? 1 : 2;
  const activeVoterDone = activeVoter ? isPlayerDone(activeVoter) : false;
  const completedVoters = players.filter(isPlayerDone).length;
  const allVotesPlaced = players.length > 0 && completedVoters === players.length;

  const onlinePhase = onlineRoom?.phase ?? "lobby";
  const onlineQuestion = onlineRoom?.question ?? null;
  const onlineLastResult = onlineRoom?.lastResult ?? null;
  const onlineRound = onlineRoom?.round ?? 1;
  const onlineReadyCount = onlinePlayers.filter((player) => player.ready).length;
  const onlineReadyNextCount = onlinePlayers.filter(
    (player) => player.readyNext
  ).length;
  const onlineAllVotesPlaced =
    onlinePlayers.length > 0 && onlinePlayers.every(isPlayerDone);
  const onlineSelfTokenCount = onlineSelf
    ? onlineSelf.gambitActive
      ? onlineSelf.gambitTarget
        ? 1
        : 0
      : onlineSelf.votes.filter((vote) => vote).length
    : 0;
  const onlineSelfTokenLimit = onlineSelf?.gambitActive ? 1 : 2;
  const answerTimeLeft =
    onlineRoom?.answerDeadline !== null && onlineRoom?.answerDeadline !== undefined
      ? Math.max(0, Math.ceil((onlineRoom.answerDeadline - now) / 1000))
      : null;
  const betTimeLeft =
    onlineRoom?.betDeadline !== null && onlineRoom?.betDeadline !== undefined
      ? Math.max(0, Math.ceil((onlineRoom.betDeadline - now) / 1000))
      : null;
  const canSendOnlineAnswer =
    !!onlineSelf && onlineAnswerDraft.trim().length > 0;

  useEffect(() => {
    if (mode !== "online") {
      return;
    }
    if (onlinePhase !== "answer") {
      setOnlineAnswerDraft("");
      return;
    }
    if (onlinePhase === "answer") {
      autoSubmitAnswerRef.current = false;
    }
    if (onlineSelf?.answer !== null && onlineSelf?.answer !== undefined) {
      setOnlineAnswerDraft(String(onlineSelf.answer));
    } else {
      setOnlineAnswerDraft("");
    }
  }, [mode, onlinePhase, onlineSelf?.answer]);

  const autoSubmitAnswerRef = useRef(false);

  useEffect(() => {
    if (mode !== "online" || onlinePhase !== "answer") {
      return;
    }
    if (answerTimeLeft !== 0) {
      return;
    }
    if (autoSubmitAnswerRef.current) {
      return;
    }
    if (!onlineSelf || onlineSelf.answer !== null) {
      return;
    }
    const trimmed = onlineAnswerDraft.trim();
    if (!trimmed) {
      return;
    }
    autoSubmitAnswerRef.current = true;
    setOnlineAnswer(trimmed);
  }, [mode, onlinePhase, answerTimeLeft, onlineSelf, onlineAnswerDraft]);

  const canEditPlayers = phase === "setup";
  const canStartRound =
    players.length >= 2 &&
    players.length <= MAX_PLAYERS &&
    nextQuestion.prompt.trim().length > 0;

  const leaderboard = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players]
  );
  const maxScore = Math.max(1, ...leaderboard.map((player) => player.score));
  const onlineLeaderboard = useMemo(
    () => [...onlinePlayers].sort((a, b) => b.score - a.score),
    [onlinePlayers]
  );
  const onlineMaxScore = Math.max(
    1,
    ...onlineLeaderboard.map((player) => player.score)
  );

  const getRankClass = (index: number) => {
    if (index === 0) {
      return "rank-1";
    }
    if (index === 1) {
      return "rank-2";
    }
    if (index === 2) {
      return "rank-3";
    }
    return "rank-default";
  };

  const getWinnerNames = (result: RoundResult) => {
    if (result.winning.below) {
      return ["Sous toutes les reponses"];
    }
    return result.ordered
      .filter((player) => result.winning.winnerIds.includes(player.id))
      .map((player) => player.name);
  };

  const drawRandomQuestion = () => {
    const nextDeck = shuffleQuestions(QUESTION_BANK);
    setQuestionDeck(nextDeck);
  };

  const requestRoom = async (path: string, payload?: Record<string, unknown>) => {
    const response = await fetch(path, {
      method: payload ? "POST" : "GET",
      headers: payload ? { "Content-Type": "application/json" } : undefined,
      body: payload ? JSON.stringify(payload) : undefined
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.error ?? "Erreur reseau.");
    }
    return data;
  };

  const createOnlineRoom = async () => {
    const trimmedName = onlineName.trim();
    if (!trimmedName) {
      setOnlineError("Entrez un nom.");
      return;
    }
    setOnlineLoading(true);
    setOnlineError(null);
    try {
      const data = await requestRoom("/api/rooms", { name: trimmedName });
      setOnlineRoom(data.room);
      setOnlinePlayerId(data.playerId);
      setJoinCode(data.room.code);
    } catch (requestError) {
      setOnlineError(
        requestError instanceof Error ? requestError.message : "Erreur reseau."
      );
    } finally {
      setOnlineLoading(false);
    }
  };

  const joinOnlineRoom = async () => {
    const trimmedName = onlineName.trim();
    const code = joinCode.trim().toUpperCase();
    if (!trimmedName || !code) {
      setOnlineError("Nom et code requis.");
      return;
    }
    setOnlineLoading(true);
    setOnlineError(null);
    try {
      const data = await requestRoom(`/api/rooms/${code}`, {
        action: "join",
        name: trimmedName
      });
      setOnlineRoom(data.room);
      setOnlinePlayerId(data.playerId);
    } catch (requestError) {
      setOnlineError(
        requestError instanceof Error ? requestError.message : "Erreur reseau."
      );
    } finally {
      setOnlineLoading(false);
    }
  };

  const leaveOnlineRoom = () => {
    setOnlineRoom(null);
    setOnlinePlayerId(null);
    setOnlineError(null);
    setOnlineAnswerDraft("");
  };

  const postRoomAction = async (payload: Record<string, unknown>) => {
    if (!onlineRoom?.code) {
      return;
    }
    try {
      const data = await requestRoom(`/api/rooms/${onlineRoom.code}`, payload);
      setOnlineRoom(data.room);
      setOnlineError(null);
    } catch (requestError) {
      setOnlineError(
        requestError instanceof Error ? requestError.message : "Erreur reseau."
      );
    }
  };

  const setOnlineReady = (ready: boolean) => {
    if (!onlinePlayerId) {
      return;
    }
    postRoomAction({ action: "ready", playerId: onlinePlayerId, ready });
  };

  const setOnlineAnswer = (value: string) => {
    if (!onlinePlayerId) {
      return;
    }
    postRoomAction({ action: "answer", playerId: onlinePlayerId, answer: value });
  };

  const toggleOnlineGambit = (active: boolean) => {
    if (!onlinePlayerId) {
      return;
    }
    postRoomAction({ action: "toggleGambit", playerId: onlinePlayerId, gambitActive: active });
  };

  const placeOnlineToken = (targetId: string) => {
    if (!onlinePlayerId) {
      return;
    }
    postRoomAction({ action: "placeToken", playerId: onlinePlayerId, targetId });
  };

  const clearOnlineToken = () => {
    if (!onlinePlayerId) {
      return;
    }
    postRoomAction({ action: "clearToken", playerId: onlinePlayerId });
  };

  const setOnlineReadyNext = (ready: boolean) => {
    if (!onlinePlayerId) {
      return;
    }
    postRoomAction({ action: "readyNext", playerId: onlinePlayerId, ready });
  };

  const addPlayer = () => {
    const trimmed = newPlayerName.trim();
    if (!trimmed) {
      return;
    }
    if (players.length >= MAX_PLAYERS) {
      setError(`Le jeu se joue jusqu'a ${MAX_PLAYERS} joueurs.`);
      return;
    }
    setPlayers((prev) => [
      ...prev,
      {
        id: makeId(),
        name: trimmed,
        score: 0,
        answer: null,
        votes: ["", ""],
        gambitActive: false,
        gambitTarget: "",
        ready: false,
        readyNext: false
      }
    ]);
    setNewPlayerName("");
  };

  const updatePlayerName = (id: string, value: string) => {
    setPlayers((prev) =>
      prev.map((player) =>
        player.id === id ? { ...player, name: value } : player
      )
    );
  };

  const removePlayer = (id: string) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const updateAnswer = (id: string, value: string) => {
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== id) {
          return player;
        }
        if (value === "") {
          return { ...player, answer: null };
        }
        return { ...player, answer: Number.parseInt(value, 10) };
      })
    );
  };

  const toggleGambit = (playerId: string, active: boolean) => {
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== playerId) {
          return player;
        }
        return {
          ...player,
          gambitActive: active,
          gambitTarget: active ? "" : player.gambitTarget,
          votes: active ? ["", ""] : player.votes
        };
      })
    );
  };

  const placeTokenForActiveVoter = (targetId: string) => {
    if (!activeVoter) {
      return;
    }
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== activeVoter.id) {
          return player;
        }
        if (player.gambitActive) {
          return { ...player, gambitTarget: targetId };
        }
        const votes = player.votes.length ? [...player.votes] : ["", ""];
        const emptyIndex = votes.findIndex((vote) => !vote);
        if (emptyIndex === -1) {
          votes[votes.length - 1] = targetId;
        } else {
          votes[emptyIndex] = targetId;
        }
        return { ...player, votes };
      })
    );
    setError(null);
  };

  const clearActiveVoterLastToken = () => {
    if (!activeVoter) {
      return;
    }
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== activeVoter.id) {
          return player;
        }
        if (player.gambitActive) {
          return { ...player, gambitTarget: "" };
        }
        const votes = player.votes.length ? [...player.votes] : ["", ""];
        for (let index = votes.length - 1; index >= 0; index -= 1) {
          if (votes[index]) {
            votes[index] = "";
            break;
          }
        }
        return { ...player, votes };
      })
    );
    setError(null);
  };

  const advanceToNextVoter = () => {
    if (!activeVoter) {
      return;
    }
    if (!isPlayerDone(activeVoter)) {
      setError("Le joueur doit poser ses jetons avant de passer.");
      return;
    }
    const nextIndex = findNextVoterIndex(currentVoterIndex, players);
    setCurrentVoterIndex(nextIndex);
    setError(null);
  };

  const startRound = () => {
    if (!canStartRound) {
      setError("Ajoutez au moins deux joueurs et choisissez une question.");
      return;
    }
    const nextDeck = questionDeck.length
      ? [...questionDeck]
      : shuffleQuestions(QUESTION_BANK);
    const selectedQuestion = nextDeck.shift() ?? DEFAULT_QUESTION;
    setQuestionDeck(nextDeck);
    setPlayers((prev) =>
      prev.map((player) => ({
        ...player,
        answer: null,
        votes: ["", ""],
        gambitActive: false,
        gambitTarget: "",
        ready: false,
        readyNext: false
      }))
    );
    setCurrentQuestion(selectedQuestion);
    setPhase("answer");
    setCurrentVoterIndex(0);
    setError(null);
  };

  const lockAnswers = () => {
    const missing = players.some((player) => player.answer === null);
    if (missing) {
      setError("Toutes les reponses doivent etre remplies avant de continuer.");
      return;
    }
    setPhase("bet");
    setCurrentVoterIndex(0);
    setError(null);
  };

  const votesAreValid = () => {
    return players.every(isPlayerDone);
  };

  const computeWinning = () => {
    if (!currentQuestion) {
      return { below: false, answerValue: null, winnerIds: new Set<string>() };
    }
    const underOrEqual = orderedByAnswer.filter(
      (player) => player.answer <= currentQuestion.answer
    );
    if (underOrEqual.length === 0) {
      return { below: true, answerValue: null, winnerIds: new Set<string>() };
    }
    const winningValue = underOrEqual[underOrEqual.length - 1].answer;
    const winners = orderedByAnswer.filter(
      (player) => player.answer === winningValue
    );
    return {
      below: false,
      answerValue: winningValue,
      winnerIds: new Set(winners.map((player) => player.id))
    };
  };
  const getSlotPoints = (slotId: string, unique: boolean) => {
    const slot = SLOT_BY_ID.get(slotId);
    if (!slot) {
      return 0;
    }
    return unique ? slot.pointsUnique : slot.pointsShared;
  };

  const isWinningTarget = (targetId: string, winningSlotId: string | null) => {
    if (!targetId || !winningSlotId) {
      return false;
    }
    return targetId === winningSlotId;
  };

  const lockBetsAndScore = () => {
    if (!currentQuestion) {
      return;
    }
    if (!votesAreValid()) {
      setError("Chaque joueur doit placer ses 2 jetons ou son Gambit avant de reveler.");
      return;
    }

    const winning = computeWinning();
    const winningSlotId = winning.below
      ? BELOW_SLOT.id
      : winning.answerValue !== null
      ? slotIdByAnswerValue.get(winning.answerValue) ?? null
      : null;
    const slotVoters: Record<string, Set<string>> = {};
    const answerPoints: Record<string, number> = {};
    const votePoints: Record<string, number> = {};
    const roundPoints: Record<string, number> = {};
    const finalScores: Record<string, number> = {};
    const gambitOutcome: Record<string, GambitOutcome> = {};
    const votesSnapshot: Record<string, string[]> = {};

    players.forEach((player) => {
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

    players.forEach((player) => {
      const winningTarget = player.gambitActive
        ? isWinningTarget(player.gambitTarget, winningSlotId)
        : false;
      let voteGain = 0;
      if (player.gambitActive) {
        voteGain =
          player.gambitTarget && winningTarget
            ? getSlotPoints(player.gambitTarget, uniqueWinner)
            : 0;
      } else {
        player.votes.forEach((vote) => {
          if (vote && isWinningTarget(vote, winningSlotId)) {
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

    setPlayers((prev) =>
      prev.map((player) => {
        const gambit = gambitOutcome[player.id];
        return {
          ...player,
          score: finalScores[player.id] ?? player.score,
          gambitActive: false,
          gambitTarget: ""
        };
      })
    );

    setLastRound({
      question: currentQuestion,
      ordered: orderedByAnswer,
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
    });

    setPhase("score");
    setError(null);
  };

  const nextRound = () => {
    setRound((prev) => prev + 1);
    setCurrentQuestion(null);
    setPhase("setup");
    setCurrentVoterIndex(0);
  };

  const resetGame = () => {
    setPlayers((prev) =>
      prev.map((player) => ({
        ...player,
        score: 0,
        answer: null,
        votes: ["", ""],
        gambitActive: false,
        gambitTarget: "",
        ready: false,
        readyNext: false
      }))
    );
    setPhase("setup");
    setRound(1);
    setCurrentQuestion(null);
    setLastRound(null);
    setCurrentVoterIndex(0);
    setError(null);
  };

  const formatTarget = (targetId: string, unit?: string) => {
    if (!targetId) {
      return "-";
    }
    const slot = SLOT_BY_ID.get(targetId);
    if (!slot) {
      return "-";
    }
    if (slot.slotIndex === null) {
      return "Sous toutes les reponses";
    }
    const assignment = answerAssignments[slot.slotIndex];
    if (!assignment) {
      return `${getSlotPositionLabel(slot.slotIndex)} (vide)`;
    }
    const playersLabel = assignment.players.map((player) => player.name).join(", ");
    return `${getSlotPositionLabel(slot.slotIndex)}: ${assignment.value} ${
      unit ?? ""
    } (${playersLabel})`;
  };

  return (
    <main>
      <header>
        <h1>Betsept</h1>
      </header>

      <nav className="tabs">
        <button
          type="button"
          className={`tab-button ${activeTab === "game" ? "active" : ""}`}
          onClick={() => setActiveTab("game")}
        >
          Partie
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === "rules" ? "active" : ""}`}
          onClick={() => setActiveTab("rules")}
        >
          Regles
        </button>
      </nav>

      {activeTab === "game" ? (
        <>
          <section className="card row">
            <h2>Mode de jeu</h2>
            <div className="mode-switch">
              <button
                type="button"
                className={`mode-button ${mode === "local" ? "active" : ""}`}
                onClick={() => setMode("local")}
              >
                Local
              </button>
              <button
                type="button"
                className={`mode-button ${mode === "online" ? "active" : ""}`}
                onClick={() => setMode("online")}
              >
                Reseau
              </button>
            </div>
            {mode === "online" && (
              <p>
                Chaque joueur joue sur son appareil via un code de partie partage.
              </p>
            )}
          </section>

          {mode === "local" ? (
            <>
              <section className="card">
            <div className="phase">
              {(Object.keys(phaseLabels) as Phase[]).map((step) => (
                <span key={step} className={phase === step ? "active" : ""}>
                  {phaseLabels[step]}
                </span>
              ))}
            </div>
              </section>

              <section className="grid two">
        <div className="card row">
          <h2>Manche {round}</h2>
          {currentQuestion ? (
            <div>
              <p className="badge">Question en cours</p>
              <p>
                {currentQuestion.prompt} <br />
                <span className="highlight">Reponse revelee en fin de manche</span>
              </p>
            </div>
          ) : (
            <p className="badge">Choisir la prochaine question</p>
          )}
          {phase === "setup" && (
            <div className="grid">
              <div className="grid">
                <p>
                  <strong>Prochaine question:</strong> {nextQuestion.prompt}
                </p>
                <div className="footer-actions">
                  <button className="secondary" onClick={drawRandomQuestion}>
                    Tirer une autre question
                  </button>
                </div>
              </div>

            </div>
          )}
          <div className="footer-actions">
            <button className="ghost reset-button" onClick={resetGame}>
              Reinitialiser la partie
            </button>
          </div>
        </div>
        <div className="card row">
          <h2>Joueurs</h2>
          {players.length === 0 && <p>Aucun joueur pour le moment.</p>}
          <div className="player-list">
            {players.map((player) => (
              <div className="player-row" key={player.id}>
                <input
                  type="text"
                  value={player.name}
                  disabled={!canEditPlayers}
                  onChange={(event) => updatePlayerName(player.id, event.target.value)}
                />
                {phase === "answer" && (
                  <input
                    type="number"
                    placeholder="Reponse"
                    value={player.answer ?? ""}
                    onChange={(event) => updateAnswer(player.id, event.target.value)}
                  />
                )}
                {phase !== "answer" && <span className="badge">Score {player.score}</span>}
                {canEditPlayers && (
                  <button className="ghost" onClick={() => removePlayer(player.id)}>
                    Retirer
                  </button>
                )}
              </div>
            ))}
          </div>
          {canEditPlayers && (
            <div className="player-row">
              <input
                type="text"
                placeholder="Nouveau joueur"
                value={newPlayerName}
                onChange={(event) => setNewPlayerName(event.target.value)}
              />
              <button onClick={addPlayer}>Ajouter</button>
            </div>
          )}
          {players.length > MAX_PLAYERS && (
            <div className="error">Trop de joueurs pour Gambit 7.</div>
          )}
        </div>
              </section>

              <section className="card row scoreboard-card">
                <div className="scoreboard-header">
                  <h2>Tableau des scores</h2>
                  <span className="badge">Manche {round}</span>
                </div>
                {leaderboard.length === 0 ? (
                  <p>Aucun score pour le moment.</p>
                ) : (
                  <table className="score-table">
                    <thead>
                      <tr>
                        <th>Rang</th>
                        <th>Joueur</th>
                        <th>Progression</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((player, index) => (
                        <tr key={`score-${player.id}`}>
                          <td>
                            <span className={`rank-badge ${getRankClass(index)}`}>
                              #{index + 1}
                            </span>
                          </td>
                          <td>{player.name}</td>
                          <td>
                            <div className="score-meter">
                              <span
                                style={{
                                  width: `${(player.score / maxScore) * 100}%`
                                }}
                              />
                            </div>
                          </td>
                          <td className="score-value">{player.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </section>

              {phase === "setup" && (
                <section className="card row">
          <h2>Lancer la manche</h2>
          <p>
            La reponse gagnante est la plus proche sans depasser la valeur exacte.
            Les votes gagnants utilisent le bareme unique/multi, la reponse gagnante
            marque le bareme "plusieurs".
          </p>
          <div className="footer-actions">
            <button onClick={startRound} disabled={!canStartRound}>
              Demarrer la manche
            </button>
          </div>
                </section>
              )}

              {phase === "answer" && (
                <section className="card row">
          <h2>Saisir les reponses</h2>
          <p>
            Chaque joueur donne un entier numerique. Les reponses seront ensuite
            classees du plus petit au plus grand sur le plateau.
          </p>
          <div className="footer-actions">
            <button onClick={lockAnswers}>Verrouiller les reponses</button>
          </div>
                </section>
              )}


              {phase === "bet" && (
                <section className="card row">
          <h2>Votes</h2>
          <p>
            Chacun son tour, cliquez sur une case du plateau pour poser vos 2 jetons
            ou le jeton Gambit 7 (utilisable a chaque manche).
          </p>
          <div className="bet-turn">
            <div className="bet-turn-info">
              <p className="badge">
                Tour de {activeVoter ? activeVoter.name : "-"}
              </p>
              <p>
                {activeVoter
                  ? activeVoter.gambitActive
                    ? activeVoter.gambitTarget
                      ? "Gambit 7 place. Vous pouvez passer au joueur suivant."
                      : "Cliquez sur une case pour placer le jeton Gambit 7."
                    : activeVoterTokenCount >= activeVoterTokenLimit
                    ? "Deux jetons poses. Vous pouvez passer au joueur suivant."
                    : `Cliquez sur une case pour poser le jeton ${
                        activeVoterTokenCount + 1
                      } / ${activeVoterTokenLimit}.`
                  : "Ajoutez des joueurs pour commencer les votes."}
              </p>
              {players.length > 0 && (
                <p className="badge">
                  {completedVoters}/{players.length} joueurs ont vote
                </p>
              )}
            </div>
            <div className="footer-actions">
              <button
                className={activeVoter?.gambitActive ? "" : "secondary"}
                disabled={!activeVoter}
                onClick={() =>
                  activeVoter &&
                  toggleGambit(activeVoter.id, !activeVoter.gambitActive)
                }
              >
                {activeVoter?.gambitActive
                  ? "Annuler Gambit 7"
                  : "Utiliser Gambit 7"}
              </button>
              <button
                className="ghost"
                disabled={
                  !activeVoter ||
                  (activeVoter.gambitActive
                    ? !activeVoter.gambitTarget
                    : !activeVoter.votes.some((vote) => vote))
                }
                onClick={clearActiveVoterLastToken}
              >
                Annuler dernier jeton
              </button>
              <button
                disabled={!activeVoter || !activeVoterDone || allVotesPlaced}
                onClick={advanceToNextVoter}
              >
                Joueur suivant
              </button>
            </div>
          </div>
          <div className="bet-board">
            {boardSlotsForDisplay.map((slot) => {
              const tokens = tokensByTarget[slot.id] ?? [];
              const assignment =
                slot.slotIndex === null ? null : answerAssignments[slot.slotIndex];
              const hasAnswer = slot.slotIndex === null || !!assignment;
              const positionLabel = getSlotPositionLabel(slot.slotIndex);
              const isSelectedByActive = activeVoter
                ? activeVoter.gambitActive
                  ? activeVoter.gambitTarget === slot.id
                  : activeVoter.votes.includes(slot.id)
                : false;
              return (
                <button
                  key={`bet-slot-${slot.id}`}
                  type="button"
                  className={`board-slot slot-${slot.tier} ${
                    isSelectedByActive ? "selected" : ""
                  }`}
                  disabled={!activeVoter || !hasAnswer}
                  onClick={() => placeTokenForActiveVoter(slot.id)}
                >
                  <div className="slot-head">
                    {positionLabel && (
                      <span className="slot-index">{positionLabel}</span>
                    )}
                    <span className="slot-points">
                      {slot.slotIndex === null ? (
                        <span className="slot-points-row">
                          <span className="player-icon" aria-hidden="true" />
                          <span className="slot-points-value">
                            {slot.pointsShared}
                          </span>
                        </span>
                      ) : (
                        <>
                          <span className="slot-points-row">
                            <span className="player-icon" aria-hidden="true" />
                            <span className="slot-points-value">
                              {slot.pointsUnique}
                            </span>
                          </span>
                          <span className="slot-points-row secondary">
                            <span className="slot-points-icons">
                              <span className="player-icon" aria-hidden="true" />
                              <span className="plus-icon" aria-hidden="true" />
                            </span>
                            <span className="slot-points-value">
                              {slot.pointsShared}
                            </span>
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="slot-answer">
                    <span className="slot-answer-value">
                      {slot.slotIndex === null
                        ? "Si toutes les reponses sont au-dessus."
                        : assignment
                        ? `${assignment.value} ${currentQuestion?.unit ?? ""}`
                        : "Aucune reponse"}
                    </span>
                  </div>
                  {assignment && (
                    <div className="slot-meta">
                      <span className="slot-meta-label">Joueur</span>
                      <span className="slot-meta-value">
                        {assignment.players.map((player) => player.name).join(", ")}
                      </span>
                    </div>
                  )}
                  <div className="slot-tokens">
                    {tokens.length === 0 ? (
                      <span className="slot-empty">Aucun jeton</span>
                    ) : (
                      tokens.map((token) => (
                        <span
                          key={token.key}
                          className={`token-chip ${token.type} ${
                            token.playerId === activeVoter?.id ? "active" : ""
                          }`}
                          title={`${token.label}${
                            token.type === "gambit" ? " (Gambit 7)" : ""
                          }`}
                        >
                          {getPlayerInitials(token.label)}
                          {token.type === "gambit" ? "7" : ""}
                        </span>
                      ))
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="footer-actions">
            <button onClick={lockBetsAndScore} disabled={!votesAreValid()}>
              Reveler et marquer
            </button>
          </div>
                </section>
              )}

              {phase === "score" && lastRound && (
                <section className="card row">
          <h2>Resultats de la manche</h2>
          <div className="result-summary">
            <div className="result-pill">
              <span className="result-label">Reponse exacte</span>
              <span className="result-value">
                {lastRound.question.answer} {lastRound.question.unit ?? ""}
              </span>
            </div>
            <div className="result-pill">
              <span className="result-label">Reponse gagnante</span>
              <span className="result-value">
                {lastRound.winning.below
                  ? "Sous toutes les reponses"
                  : `${lastRound.winning.answerValue ?? "-"} ${
                      lastRound.question.unit ?? ""
                    }`}
              </span>
            </div>
            <div className="result-pill">
              <span className="result-label">Gagnant(s)</span>
              <span className="result-value">{getWinnerNames(lastRound).join(", ")}</span>
            </div>
          </div>
          <div className="table-scroll">
            <table className="round-table">
            <thead>
              <tr>
                <th>Rang</th>
                <th>Joueur</th>
                <th>Reponse</th>
                <th>Gain reponse</th>
                <th>Gain votes</th>
                <th>Gambit</th>
                <th>Total manche</th>
                <th>Score total</th>
              </tr>
            </thead>
            <tbody>
              {lastRound.ordered.map((player, index) => (
                <tr key={player.id}>
                  <td>
                    <span className={`rank-badge ${getRankClass(index)}`}>
                      #{index + 1}
                    </span>
                  </td>
                  <td>{player.name}</td>
                  <td>
                    {player.answer} {lastRound.question.unit ?? ""}
                  </td>
                  <td>{lastRound.answerPoints[player.id] ?? 0}</td>
                  <td>{lastRound.votePoints[player.id] ?? 0}</td>
                  <td>
                    {lastRound.gambit[player.id]?.used
                      ? lastRound.gambit[player.id]?.success
                        ? "x7"
                        : "0"
                      : "-"}
                  </td>
                  <td>{lastRound.roundPoints[player.id] ?? 0}</td>
                  <td className="highlight">
                    {lastRound.finalScores[player.id] ?? 0}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
          <div className="footer-actions">
            <button onClick={nextRound}>Manche suivante</button>
          </div>
                </section>
              )}

              {error && <div className="error">{error}</div>}

              {phase === "bet" && (
                <section className="card row">
          <h2>Votes poses</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Joueur</th>
                <th>Jeton 1</th>
                <th>Jeton 2</th>
                <th>Gambit</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr
                  key={`votes-${player.id}`}
                  className={player.id === activeVoter?.id ? "is-active" : ""}
                >
                  <td>{player.name}</td>
                  <td>
                    {player.gambitActive
                      ? "-"
                      : formatTarget(player.votes[0], currentQuestion?.unit)}
                  </td>
                  <td>
                    {player.gambitActive
                      ? "-"
                      : formatTarget(player.votes[1], currentQuestion?.unit)}
                  </td>
                  <td>
                    {player.gambitActive
                      ? formatTarget(player.gambitTarget, currentQuestion?.unit)
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                </section>
              )}
            </>
      ) : (
        <>
          {!onlineRoom ? (
            <section className="card row">
              <h2>Partie reseau</h2>
              <p>
                Creez une partie ou rejoignez-en une avec un code partage.
              </p>
              <div className="grid online-form">
                <label className="form-field">
                  Nom du joueur
                  <input
                    type="text"
                    value={onlineName}
                    onChange={(event) => setOnlineName(event.target.value)}
                  />
                </label>
                <label className="form-field">
                  Code de partie
                  <input
                    type="text"
                    value={joinCode}
                    onChange={(event) => setJoinCode(event.target.value)}
                  />
                </label>
              </div>
              <div className="footer-actions">
                <button
                  onClick={createOnlineRoom}
                  disabled={onlineLoading || !onlineName.trim()}
                >
                  Creer une partie
                </button>
                <button
                  className="secondary"
                  onClick={joinOnlineRoom}
                  disabled={
                    onlineLoading || !onlineName.trim() || !joinCode.trim()
                  }
                >
                  Rejoindre
                </button>
              </div>
              {onlineError && <div className="error">{onlineError}</div>}
            </section>
          ) : (
            <>
              <section className="card">
                <div className="phase">
                  {(Object.keys(onlinePhaseLabels) as OnlinePhase[]).map(
                    (step) => (
                      <span
                        key={step}
                        className={onlinePhase === step ? "active" : ""}
                      >
                        {onlinePhaseLabels[step]}
                      </span>
                    )
                  )}
                </div>
              </section>

              <section className="grid two">
                <div className="card row">
                  <div className="room-header">
                    <h2>
                      Manche {onlineRound} / 7
                    </h2>
                    <button className="ghost" onClick={leaveOnlineRoom}>
                      Quitter
                    </button>
                  </div>
                  <div className="room-meta">
                    <span className="badge">Code {onlineRoom.code}</span>
                    <span className="badge">
                      Phase {onlinePhaseLabels[onlinePhase]}
                    </span>
                    {onlinePhase === "answer" && answerTimeLeft !== null && (
                      <span className="badge">Temps reponse {answerTimeLeft}s</span>
                    )}
                    {onlinePhase === "bet" && betTimeLeft !== null && (
                      <span className="badge">Temps votes {betTimeLeft}s</span>
                    )}
                  </div>
                  {onlineQuestion ? (
                    <div>
                      <p className="badge">Question en cours</p>
                      <p>
                        {onlineQuestion.prompt} <br />
                        <span className="highlight">
                          Reponse revelee en fin de manche
                        </span>
                      </p>
                    </div>
                  ) : (
                    <p className="badge">En attente du lancement...</p>
                  )}
                </div>
              </section>

              <section className="card row scoreboard-card">
                <div className="scoreboard-header">
                  <h2>Tableau des scores</h2>
                  <span className="badge">Manche {onlineRound}</span>
                </div>
                {onlineLeaderboard.length === 0 ? (
                  <p>Aucun score pour le moment.</p>
                ) : (
                  <table className="score-table">
                    <thead>
                      <tr>
                        <th>Rang</th>
                        <th>Joueur</th>
                        <th>Progression</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {onlineLeaderboard.map((player, index) => {
                        const isReady =
                          onlinePhase === "lobby"
                            ? player.ready
                            : onlinePhase === "score"
                            ? player.readyNext
                            : false;
                        return (
                        <tr key={`online-score-${player.id}`}>
                          <td>
                            <span className="rank-cell">
                              <span
                                className={`ready-dot ${isReady ? "active" : ""}`}
                                title={isReady ? "Pret" : "En attente"}
                              />
                              <span className={`rank-badge ${getRankClass(index)}`}>
                                #{index + 1}
                              </span>
                            </span>
                          </td>
                          <td>{player.name}</td>
                          <td>
                            <div className="score-meter">
                              <span
                                style={{
                                  width: `${(player.score / onlineMaxScore) * 100}%`
                                }}
                              />
                            </div>
                          </td>
                          <td className="score-value">{player.score}</td>
                        </tr>
                      );
                      })}
                    </tbody>
                  </table>
                )}
              </section>

              {onlinePhase === "lobby" && (
                <section className="card row">
                  <h2>Lobby</h2>
                  <p>Tout le monde doit etre pret pour lancer la partie.</p>
                  <div className="footer-actions">
                    <button
                      onClick={() => setOnlineReady(!onlineSelf?.ready)}
                      disabled={!onlineSelf}
                    >
                      {onlineSelf?.ready ? "Annuler pret" : "Je suis pret"}
                    </button>
                    <span className="badge">
                      {onlineReadyCount}/{onlinePlayers.length} prets
                    </span>
                  </div>
                </section>
              )}

              {onlinePhase === "answer" && (
                <section className="card row">
                  <h2>Repondre</h2>
                  <p>Vous avez 20 secondes pour proposer une reponse.</p>
                  {answerTimeLeft !== null && (
                    <div className="countdown">
                      Temps restant: {answerTimeLeft}s
                    </div>
                  )}
                  <div className="player-row">
                    <input
                      type="number"
                      placeholder="Votre reponse"
                      value={onlineAnswerDraft}
                      onChange={(event) => setOnlineAnswerDraft(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && canSendOnlineAnswer) {
                          setOnlineAnswer(onlineAnswerDraft);
                        }
                      }}
                      disabled={!onlineSelf}
                    />
                    <span className="badge">
                      {onlineSelf?.answer !== null ? "Envoyee" : "En attente"}
                    </span>
                  </div>
                  <div className="footer-actions">
                    <button
                      onClick={() => setOnlineAnswer(onlineAnswerDraft)}
                      disabled={!canSendOnlineAnswer}
                    >
                      Envoyer la reponse
                    </button>
                  </div>
                </section>
              )}

              {onlinePhase === "bet" && (
                <section className="card row">
                  <h2>Votes</h2>
                  <p>
                    Placez vos 2 jetons ou votre Gambit 7 avant la fin du timer.
                  </p>
                  {betTimeLeft !== null && (
                    <div className="countdown">
                      Temps restant: {betTimeLeft}s
                    </div>
                  )}
                  <div className="bet-turn">
                    <div className="bet-turn-info">
                      <p className="badge">
                        {onlineSelf ? `Vous: ${onlineSelf.name}` : "Joueur"}
                      </p>
                      <p>
                        {onlineSelf
                          ? onlineSelf.gambitActive
                            ? onlineSelf.gambitTarget
                              ? "Gambit 7 place."
                              : "Cliquez sur une case pour poser le Gambit."
                            : onlineSelfTokenCount >= onlineSelfTokenLimit
                            ? "Deux jetons poses."
                            : `Cliquez pour poser le jeton ${
                                onlineSelfTokenCount + 1
                              } / ${onlineSelfTokenLimit}.`
                          : "En attente du joueur."}
                      </p>
                      <p className="badge">
                        {onlinePlayers.filter(isPlayerDone).length}/
                        {onlinePlayers.length} joueurs ont vote
                      </p>
                    </div>
                    <div className="footer-actions">
                      <button
                        className={onlineSelf?.gambitActive ? "" : "secondary"}
                        disabled={!onlineSelf}
                        onClick={() =>
                          onlineSelf &&
                          toggleOnlineGambit(!onlineSelf.gambitActive)
                        }
                      >
                        {onlineSelf?.gambitActive
                          ? "Annuler Gambit 7"
                          : "Utiliser Gambit 7"}
                      </button>
                      <button
                        className="ghost"
                        disabled={
                          !onlineSelf ||
                          (onlineSelf.gambitActive
                            ? !onlineSelf.gambitTarget
                            : !onlineSelf.votes.some((vote) => vote))
                        }
                        onClick={clearOnlineToken}
                      >
                        Annuler dernier jeton
                      </button>
                    </div>
                  </div>
                  <div className="bet-board">
                    {boardSlotsForDisplay.map((slot) => {
                      const tokens = onlineTokensByTarget[slot.id] ?? [];
                      const assignment =
                        slot.slotIndex === null
                          ? null
                          : onlineAnswerAssignments[slot.slotIndex];
                      const hasAnswer = slot.slotIndex === null || !!assignment;
                      const positionLabel = getSlotPositionLabel(slot.slotIndex);
                      const isSelectedBySelf = onlineSelf
                        ? onlineSelf.gambitActive
                          ? onlineSelf.gambitTarget === slot.id
                          : onlineSelf.votes.includes(slot.id)
                        : false;
                      return (
                        <button
                          key={`online-bet-slot-${slot.id}`}
                          type="button"
                          className={`board-slot slot-${slot.tier} ${
                            isSelectedBySelf ? "selected" : ""
                          }`}
                          disabled={!onlineSelf || !hasAnswer}
                          onClick={() => placeOnlineToken(slot.id)}
                        >
                          <div className="slot-head">
                            {positionLabel && (
                              <span className="slot-index">{positionLabel}</span>
                            )}
                            <span className="slot-points">
                              {slot.slotIndex === null ? (
                                <span className="slot-points-row">
                                  <span className="player-icon" aria-hidden="true" />
                                  <span className="slot-points-value">
                                    {slot.pointsShared}
                                  </span>
                                </span>
                              ) : (
                                <>
                                  <span className="slot-points-row">
                                    <span className="player-icon" aria-hidden="true" />
                                    <span className="slot-points-value">
                                      {slot.pointsUnique}
                                    </span>
                                  </span>
                                  <span className="slot-points-row secondary">
                                    <span className="slot-points-icons">
                                      <span
                                        className="player-icon"
                                        aria-hidden="true"
                                      />
                                      <span
                                        className="plus-icon"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <span className="slot-points-value">
                                      {slot.pointsShared}
                                    </span>
                                  </span>
                                </>
                              )}
                            </span>
                          </div>
                          <div className="slot-answer">
                            <span className="slot-answer-value">
                              {slot.slotIndex === null
                                ? "Si toutes les reponses sont au-dessus."
                                : assignment
                                ? `${assignment.value} ${onlineQuestion?.unit ?? ""}`
                                : "Aucune reponse"}
                            </span>
                          </div>
                          {assignment && (
                            <div className="slot-meta">
                              <span className="slot-meta-label">Joueur</span>
                              <span className="slot-meta-value">
                                {assignment.players
                                  .map((player) => player.name)
                                  .join(", ")}
                              </span>
                            </div>
                          )}
                          <div className="slot-tokens">
                            {tokens.length === 0 ? (
                              <span className="slot-empty">Aucun jeton</span>
                            ) : (
                              tokens.map((token) => (
                                <span
                                  key={token.key}
                                  className={`token-chip ${token.type} ${
                                    token.playerId === onlinePlayerId
                                      ? "active"
                                      : ""
                                  }`}
                                  title={`${token.label}${
                                    token.type === "gambit" ? " (Gambit 7)" : ""
                                  }`}
                                >
                                  {getPlayerInitials(token.label)}
                                  {token.type === "gambit" ? "7" : ""}
                                </span>
                              ))
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="footer-actions">
                    {onlineAllVotesPlaced && (
                      <span className="badge">Tous les votes sont poses.</span>
                    )}
                  </div>
                </section>
              )}

              {onlinePhase === "score" && onlineLastResult && (
                <section className="card row result-card">
                  <h2>Resultats de la manche</h2>
                  <div className="result-summary">
                    <div className="result-pill">
                      <span className="result-label">Reponse exacte</span>
                      <span className="result-value">
                        {onlineLastResult.question.answer}{" "}
                        {onlineLastResult.question.unit ?? ""}
                      </span>
                    </div>
                    <div className="result-pill">
                      <span className="result-label">Reponse gagnante</span>
                      <span className="result-value">
                        {onlineLastResult.winning.below
                          ? "Sous toutes les reponses"
                          : `${onlineLastResult.winning.answerValue ?? "-"} ${
                              onlineLastResult.question.unit ?? ""
                            }`}
                      </span>
                    </div>
                    <div className="result-pill">
                      <span className="result-label">Gagnant(s)</span>
                      <span className="result-value">
                        {getWinnerNames(onlineLastResult).join(", ")}
                      </span>
                    </div>
                  </div>
                  <div className="table-scroll">
                    <table className="round-table">
                    <thead>
                      <tr>
                        <th>Rang</th>
                        <th>Joueur</th>
                        <th>Reponse</th>
                        <th>Gain reponse</th>
                        <th>Gain votes</th>
                        <th>Gambit</th>
                        <th>Total manche</th>
                        <th>Score total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {onlineLastResult.ordered.map((player, index) => (
                        <tr key={player.id}>
                          <td>
                            <span className={`rank-badge ${getRankClass(index)}`}>
                              #{index + 1}
                            </span>
                          </td>
                          <td>{player.name}</td>
                          <td>
                            {player.answer} {onlineLastResult.question.unit ?? ""}
                          </td>
                          <td>
                            {onlineLastResult.answerPoints[player.id] ?? 0}
                          </td>
                          <td>
                            {onlineLastResult.votePoints[player.id] ?? 0}
                          </td>
                          <td>
                            {onlineLastResult.gambit[player.id]?.used
                              ? onlineLastResult.gambit[player.id]?.success
                                ? "x7"
                                : "0"
                              : "-"}
                          </td>
                          <td>
                            {onlineLastResult.roundPoints[player.id] ?? 0}
                          </td>
                          <td className="highlight">
                            {onlineLastResult.finalScores[player.id] ?? 0}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    </table>
                  </div>
                  <div className="footer-actions">
                    <button
                      onClick={() => setOnlineReadyNext(!onlineSelf?.readyNext)}
                      disabled={!onlineSelf}
                    >
                      {onlineSelf?.readyNext
                        ? "Annuler pret"
                        : "Pret pour manche suivante"}
                    </button>
                    <span className="badge">
                      {onlineReadyNextCount}/{onlinePlayers.length} prets
                    </span>
                  </div>
                </section>
              )}

              {onlinePhase === "over" && (
                <section className="card row">
                  <h2>Partie terminee</h2>
                  <p>La partie reseau est terminee apres 7 manches.</p>
                </section>
              )}

              {onlineError && <div className="error">{onlineError}</div>}
            </>
          )}
        </>
      )}
    </>
  ) : (
        <section className="card row">
          <h2>Regles express</h2>
          <p>
            - Chaque joueur donne une reponse entiere.
            <br />- Les reponses identiques comptent comme une seule case pour le placement.
            <br />- Les reponses sont placees depuis le centre, avec autant au-dessus qu'en dessous.
            <br />- La reponse gagnante est la plus proche sans depasser la valeur exacte.
            <br />- Si toutes les reponses sont au-dessus, la case "Sous toutes" gagne.
            <br />- Bareme: sous toutes = 15, bleue 3/2, verte 6/4, jaune 9/6, orange 12/8 (unique / plusieurs).
            <br />- Chaque joueur pose 2 jetons de vote ou un jeton Gambit 7 a chaque manche.
            <br />- Le joueur de la reponse gagnante marque les points "plusieurs" de sa case.
            <br />- Gambit 7: si la case gagne, points de manche x7, sinon 0.
            <br />- Mode reseau: tous les joueurs se mettent pret pour lancer la partie.
            <br />- Mode reseau: 20s pour repondre, 20s pour placer ses jetons.
            <br />- Mode reseau: tout le monde doit etre pret pour passer a la manche suivante.
            <br />- Mode reseau: la partie est supprimee apres 7 manches.
          </p>
        </section>
      )}
    </main>
  );
}
