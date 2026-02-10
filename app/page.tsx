"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_QUESTION, QUESTION_BANK, type Question } from "./lib/questions";

type Phase = "setup" | "answer" | "bet" | "score";

type Player = {
  id: string;
  name: string;
  score: number;
  answer: number | null;
  answerDraft?: string;
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

const STORAGE_KEY = "betsept.local.v1";

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
  const [activeTab, setActiveTab] = useState<"game" | "scores" | "rules">(
    "game"
  );
  const [mode, setMode] = useState<"local" | "online">("local");
  const [onlineRoom, setOnlineRoom] = useState<OnlineRoom | null>(null);
  const [onlinePlayerId, setOnlinePlayerId] = useState<string | null>(null);
  const [onlineName, setOnlineName] = useState("");
  const [onlineAnswerDraft, setOnlineAnswerDraft] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [onlineError, setOnlineError] = useState<string | null>(null);
  const [onlineLoading, setOnlineLoading] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Ignore registration errors.
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone;
    if (isIOS && isStandalone) {
      document.body.classList.add("ios-standalone");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }
    try {
      const data = JSON.parse(raw) as {
        version?: number;
        mode?: "local" | "online";
        phase?: Phase;
        players?: Player[];
        round?: number;
        currentQuestion?: Question | null;
        questionDeck?: Question[];
        lastRound?: RoundResult | null;
        currentVoterIndex?: number;
      };
      if (data?.version !== 1 || data.mode !== "local") {
        return;
      }
      setMode("local");
      setPhase(data.phase ?? "setup");
      setPlayers(Array.isArray(data.players) ? data.players : []);
      setRound(typeof data.round === "number" ? data.round : 1);
      setCurrentQuestion(data.currentQuestion ?? null);
      setQuestionDeck(
        Array.isArray(data.questionDeck)
          ? data.questionDeck
          : shuffleQuestions(QUESTION_BANK)
      );
      setLastRound(data.lastRound ?? null);
      setCurrentVoterIndex(
        typeof data.currentVoterIndex === "number" ? data.currentVoterIndex : 0
      );
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || mode !== "local" || typeof window === "undefined") {
      return;
    }
    const payload = {
      version: 1,
      mode: "local",
      phase,
      players,
      round,
      currentQuestion,
      questionDeck,
      lastRound,
      currentVoterIndex
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [
    mode,
    phase,
    players,
    round,
    currentQuestion,
    questionDeck,
    lastRound,
    currentVoterIndex
  ]);

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

  const canEditPlayers = phase === "setup" && round === 1;
  const canStartRound =
    players.length >= 2 &&
    players.length <= MAX_PLAYERS &&
    nextQuestion.prompt.trim().length > 0;
  const maxPlayersMessage = `Le jeu se joue jusqu'a ${MAX_PLAYERS} joueurs.`;
  const maxPlayersError = error === maxPlayersMessage;
  const gameStarted = round > 1 || phase !== "setup";
  const phaseSteps: Phase[] = gameStarted
    ? ["answer", "bet", "score"]
    : ["setup", "answer", "bet", "score"];

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

  const shareGame = async () => {
    if (typeof window === "undefined") {
      return;
    }
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "BetSept",
          text: "Rejoins-moi pour une partie de BetSept !",
          url
        });
        return;
      }
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        return;
      }
      window.prompt("Copier le lien :", url);
    } catch {
      // Ignore share errors.
    }
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
      setError(maxPlayersMessage);
      return;
    }
    setPlayers((prev) => [
      ...prev,
      {
        id: makeId(),
        name: trimmed,
        score: 0,
        answer: null,
        answerDraft: "",
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

  const parseNumericInput = (value: string) => {
    const normalized = value.trim().replace(/\s/g, "").replace(",", ".");
    if (!normalized) {
      return null;
    }
    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  };

  const updateAnswer = (id: string, value: string) => {
    setPlayers((prev) =>
      prev.map((player) => {
        if (player.id !== id) {
          return player;
        }
        return {
          ...player,
          answerDraft: value,
          answer: parseNumericInput(value)
        };
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

  const startRound = (advanceRound = false) => {
    if (!canStartRound) {
      setError("Ajoutez au moins deux joueurs et choisissez une question.");
      return;
    }
    if (advanceRound) {
      setRound((prev) => prev + 1);
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
        answerDraft: "",
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
      setError("Chaque joueur doit placer ses 2 jetons ou son Gambit avant de révéler.");
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
    startRound(true);
  };

  const resetGame = () => {
    setPlayers((prev) =>
      prev.map((player) => ({
        ...player,
        score: 0,
        answer: null,
        answerDraft: "",
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

  const confirmResetGame = () => {
    if (window.confirm("Etes vous sur de vouloir quitter la partie en cours ?")) {
      resetGame();
    }
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
      return "Sous toutes les réponses";
    }
    const assignment = answerAssignments[slot.slotIndex];
    if (!assignment) {
      return `${getSlotPositionLabel(slot.slotIndex)} (vide)`;
    }
    const playersLabel = assignment.players.map((player) => player.name).join(", ");
    return `${getSlotPositionLabel(slot.slotIndex)} ${assignment.value} ${
      unit ?? ""
    } (${playersLabel})`;
  };

  return (
    <main>
      <header className="app-header">
        <div className="brand">
          <div className="logo-wrap">
            <img className="logo" src="/BetSept.png" alt="BetSept" />
          </div>
          <div className="brand-text">
            <span className="brand-kicker">Jeu de plateau de reflexion</span>
            <h1>BetSept</h1>
            <span className="brand-subtitle">Pariez, bluffez, gagnez !</span>
          </div>
        </div>
        {/* <div className="header-meta">
          <span className="badge badge-soft">Jusqu&apos;a 7 joueurs</span>
          <span className="badge badge-soft">7 manches</span>
        </div> */}
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
          className={`tab-button ${activeTab === "scores" ? "active" : ""}`}
          onClick={() => setActiveTab("scores")}
        >
          Scores
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
          {((mode === "local" && phase === "setup" && round === 1) ||
            (mode === "online" && !onlineRoom)) && (
            <section className="card panel-group">
              <div className="panel-section panel-block">
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
                  <button
                    type="button"
                    className="share-button"
                    onClick={shareGame}
                    aria-label="Partager le site"
                    title="Partager"
                  >
                    <svg
                      className="share-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        cx="18"
                        cy="5"
                        r="3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="6"
                        cy="12"
                        r="3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="18"
                        cy="19"
                        r="3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8.7 11l6.6-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.7 13l6.6 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                {mode === "online" && (
                  <p>
                    Chaque joueur joue sur son appareil via un code de partie partage.
                  </p>
                )}
              </div>
            </section>
          )}

          {mode === "local" ? (
            <>
              <section className="card panel-group">
                <div className="panel-section panel-block">
                  <div className="phase">
                    {phaseSteps.map((step) => (
                      <span key={step} className={phase === step ? "active" : ""}>
                        {phaseLabels[step]}
                      </span>
                    ))}
                  </div>
                  <div className="panel-split">
                    <div className="panel-block">
                      <h2>Manche {round}</h2>
                      {phase === "setup" ? (
                        <div className="grid">
                          <div className="grid">
                            <p>
                              <strong>{nextQuestion.prompt}</strong>
                              {nextQuestion.unit && (
                                <>
                                  <br />
                                  <span className="unit-hint">
                                    (en {nextQuestion.unit})
                                  </span>
                                </>
                              )}
                            </p>
                            <div className="footer-actions">
                              <button
                                className="secondary"
                                onClick={drawRandomQuestion}
                              >
                                Tirer une autre question
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : currentQuestion ? (
                        <div>
                          <p>
                            {currentQuestion.prompt} <br />
                            {currentQuestion.unit && (
                              <>
                                <span className="unit-hint">
                                  (en {currentQuestion.unit})
                                </span>
                              </>
                            )}
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <div className="panel-block">
                      <h2>Joueurs</h2>
                      {canEditPlayers && (
                        <div className="player-row actions">
                          <input
                            type="text"
                            placeholder="Nouveau joueur"
                            value={newPlayerName}
                            onChange={(event) =>
                              setNewPlayerName(event.target.value)
                            }
                          />
                          {maxPlayersError && (
                            <div className="error inline">{maxPlayersMessage}</div>
                          )}
                          <div className="player-actions split">
                            <div className="left-actions">
                              <button onClick={addPlayer}>Ajouter</button>
                            </div>
                            {phase === "setup" && (
                              <div className="right-actions">
                                <button
                                  className="button-alt"
                                onClick={() => startRound()}
                                disabled={!canStartRound}
                              >
                                Demarrer la manche
                              </button>
                            </div>
                          )}
                          </div>
                        </div>
                      )}
                      {players.length > MAX_PLAYERS && (
                        <div className="error">
                          Trop de joueurs.
                        </div>
                      )}
                      {players.length === 0 && <p>Aucun joueur pour le moment.</p>}
                      <div className="player-list">
                        {players.map((player) => (
                          <div
                            className={`player-row ${
                              phase === "bet" && activeVoter?.id === player.id
                                ? "is-active"
                                : ""
                            }`}
                            key={player.id}
                          >
                            <div className="player-identity">
                              {canEditPlayers && (
                                <button
                                  type="button"
                                  className="icon-button"
                                  aria-label="Retirer"
                                  title="Retirer"
                                  onClick={() => removePlayer(player.id)}
                                >
                                  <span
                                    className="icon-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                              )}
                              <input
                                type="text"
                                value={player.name}
                                disabled={!canEditPlayers}
                                onChange={(event) =>
                                  updatePlayerName(player.id, event.target.value)
                                }
                              />
                            </div>
                            {phase === "answer" && (
                              <input
                                type="text"
                                inputMode="decimal"
                                pattern="[-]?[0-9]*[.,]?[0-9]*"
                                placeholder="Reponse"
                                value={player.answerDraft ?? player.answer ?? ""}
                                onChange={(event) =>
                                  updateAnswer(player.id, event.target.value)
                                }
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      {phase === "setup" && !canEditPlayers && (
                        <div className="footer-actions split">
                          <div className="right-actions">
                            <button
                              className="button-alt"
                              onClick={() => startRound()}
                              disabled={!canStartRound}
                            >
                              Demarrer la manche
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {phase === "answer" && (
                    <div className="footer-actions">
                      <button onClick={lockAnswers}>Verrouiller les reponses</button>
                    </div>
                  )}
                </div>
              </section>

              {phase === "bet" && (
                <section className="card panel-group">
                  <div className="panel-section panel-block">
                    <h2>Votes</h2>
                    <p>
                      Chacun son tour, cliquez sur une case du plateau pour poser vos
                      2 jetons ou le jeton Joker (utilisable a chaque manche).
                    </p>
                    <div>
                      <div className="bet-turn-info" />
                      <div className="footer-actions">
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
                          className={activeVoter?.gambitActive ? "" : "secondary"}
                          disabled={!activeVoter}
                          onClick={() =>
                            activeVoter &&
                            toggleGambit(activeVoter.id, !activeVoter.gambitActive)
                          }
                        >
                          {activeVoter?.gambitActive
                            ? "Annuler Joker"
                            : "Utiliser Joker"}
                        </button>
                      </div>
                    </div>
                    <div className="bet-board">
                      {boardSlotsForDisplay.map((slot) => {
                        const tokens = tokensByTarget[slot.id] ?? [];
                        const assignment =
                          slot.slotIndex === null
                            ? null
                            : answerAssignments[slot.slotIndex];
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
                                    <span
                                      className="player-icon"
                                      aria-hidden="true"
                                    />
                                    <span className="slot-points-value">
                                      {slot.pointsShared}
                                    </span>
                                  </span>
                                ) : (
                                  <>
                                    <span className="slot-points-row">
                                      <span
                                        className="player-icon"
                                        aria-hidden="true"
                                      />
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
                                  ? `${assignment.value} ${
                                      currentQuestion?.unit ?? ""
                                    }`
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
                                      token.playerId === activeVoter?.id
                                        ? "active"
                                        : ""
                                    }`}
                                    title={`${token.label}${
                                      token.type === "gambit"
                                        ? " (Joker)"
                                        : ""
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
                    {players.length > 0 && (
                      <p className="badge">
                        {completedVoters}/{players.length} joueurs ont voté
                      </p>
                    )}
                    <button
                      onClick={allVotesPlaced ? lockBetsAndScore : advanceToNextVoter}
                      disabled={!activeVoter || !activeVoterDone}
                    >
                      {allVotesPlaced ? "Révéler la réponse" : "Joueur suivant"}
                    </button>
                  </div>
                </div>
                  <div className="panel-section panel-block">
                    <h2>Votes posés</h2>
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
                            className={
                              player.id === activeVoter?.id ? "is-active" : ""
                            }
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
                                ? formatTarget(
                                    player.gambitTarget,
                                    currentQuestion?.unit
                                  )
                                : "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

              {error && !maxPlayersError && <div className="error">{error}</div>}
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
              <section className="card panel-group">
                <div className="panel-section panel-block">
                  <div className="room-header">
                    <h2>Manche {onlineRound} / 7</h2>
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
                  {onlineQuestion ? (
                    <div>
                      <p>
                        {onlineQuestion.prompt} <br />
                        {onlineQuestion.unit && (
                          <>
                            <span className="unit-hint">
                              (en {onlineQuestion.unit})
                            </span>
                            <br />
                          </>
                        )}
                      </p>
                    </div>
                  ) : (
                    <p className="badge">En attente du lancement...</p>
                  )}
                </div>
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
                      type="text"
                      inputMode="decimal"
                      pattern="[-]?[0-9]*[.,]?[0-9]*"
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
                    Placez vos 2 jetons ou votre Joker avant la fin du timer.
                  </p>
                  {betTimeLeft !== null && (
                    <div className="countdown">
                      Temps restant: {betTimeLeft}s
                    </div>
                  )}
                  <div>
                    <div className="bet-turn-info">
                      <p className="badge">
                        {onlineSelf ? `Vous: ${onlineSelf.name}` : "Joueur"}
                      </p>
                      <p>
                        {onlineSelf
                          ? onlineSelf.gambitActive
                            ? onlineSelf.gambitTarget
                              ? "Joker placé."
                              : "Cliquez sur une case pour poser le Joker."
                            : onlineSelfTokenCount >= onlineSelfTokenLimit
                            ? "Deux jetons posés."
                            : `Cliquez pour poser le jeton ${
                                onlineSelfTokenCount + 1
                              } / ${onlineSelfTokenLimit}.`
                          : "En attente du joueur."}
                      </p>
                      <p className="badge">
                        {onlinePlayers.filter(isPlayerDone).length}/
                        {onlinePlayers.length} joueurs ont voté
                      </p>
                    </div>
                    <div className="footer-actions">
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
                      <button
                        className={onlineSelf?.gambitActive ? "" : "secondary"}
                        disabled={!onlineSelf}
                        onClick={() =>
                          onlineSelf &&
                          toggleOnlineGambit(!onlineSelf.gambitActive)
                        }
                      >
                        {onlineSelf?.gambitActive
                          ? "Annuler Joker"
                          : "Utiliser Joker"}
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
                                    token.type === "gambit" ? " (Joker)" : ""
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
                      <span className="badge">Tous les votes sont posés.</span>
                    )}
                  </div>
                </section>
              )}

              {onlinePhase === "score" && onlineLastResult && (
                <section className="card row result-card">
                  <h2>Resultats de la manche</h2>
                  <div className="result-summary">
                    <div className="result-pill">
                      <span className="result-label">Réponse exacte</span>
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
      ) : activeTab === "scores" ? (
        <>
          {mode === "local" ? (
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
              <div className="footer-actions">
                <button
                  className="ghost reset-button"
                  onClick={confirmResetGame}
                >
                  Reinitialiser la partie
                </button>
              </div>
            </section>
          ) : onlineRoom ? (
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
                                  width: `${
                                    (player.score / onlineMaxScore) * 100
                                  }%`
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
          ) : (
            <section className="card row">
              <h2>Tableau des scores</h2>
              <p>
                Creez ou rejoignez une partie reseau pour afficher les scores.
              </p>
            </section>
          )}
        </>
      ) : (
        <section className="card row rules">
          <h2>Regles</h2>
          <p className="rules-intro">
            Objectif : trouver la reponse la plus proche sans jamais depasser la
            valeur exacte.
          </p>
          <ul className="rules-list">
            <li>Chaque joueur propose une reponse numerique.</li>
            <li>
              Les reponses identiques comptent pour une seule case sur le plateau.
              Elles sont placees depuis le centre, avec autant de reponses au-dessus
              qu'en dessous.
            </li>
            <li>
              La reponse gagnante est la plus proche sans depasser. Si toutes les
              reponses sont au-dessus, la case "Sous toutes" gagne.
            </li>
            <li>
              Bareme (unique / plusieurs) : bleue 3/2, verte 6/4, jaune 9/6,
              orange 12/8. La case "Sous toutes" vaut 15 points.
            </li>
            <li>
              Chaque manche, chaque joueur pose 2 jetons de vote ou un jeton
              Joker.
            </li>
            <li>
              Le joueur dont la reponse gagne marque le bareme "plusieurs" de sa
              case.
            </li>
            <li>
              Joker : si la case choisie gagne, les points de manche sont
              multiplies par 7, sinon 0.
            </li>
            <li>
              Mode reseau : tout le monde doit etre pret pour demarrer. Vous avez
              20 s pour repondre et 20 s pour voter.
            </li>
            <li>
              Mode reseau : tout le monde doit etre pret pour passer a la manche
              suivante. La partie se termine apres 7 manches.
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}
