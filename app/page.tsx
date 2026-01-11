"use client";

import { useEffect, useMemo, useState } from "react";

type Phase = "setup" | "answer" | "reveal" | "bet" | "score";

type Question = {
  id: string;
  prompt: string;
  answer: number;
  unit?: string;
};

type Player = {
  id: string;
  name: string;
  score: number;
  answer: number | null;
  votes: string[];
  gambitActive: boolean;
  gambitTarget: string;
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

const MAX_PLAYERS = 7;
const GAMBIT_MULTIPLIER = 7;

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

const SLOT_BY_ID = new Map(
  [BELOW_SLOT, ...ANSWER_SLOTS].map((slot) => [slot.id, slot])
);

const QUESTION_BANK: Question[] = [
  {
    id: "tour-eiffel",
    prompt: "En quelle annee la tour Eiffel a-t-elle ete inauguree ?",
    answer: 1889,
    unit: "annee"
  },
  {
    id: "marathon",
    prompt: "Quelle est la longueur officielle d'un marathon ?",
    answer: 42195,
    unit: "metres"
  },
  {
    id: "apollo-11",
    prompt: "En quelle annee Apollo 11 a-t-il atterri sur la Lune ?",
    answer: 1969,
    unit: "annee"
  },
  {
    id: "piano",
    prompt: "Combien de touches compte un piano standard ?",
    answer: 88,
    unit: "touches"
  },
  {
    id: "os-humains",
    prompt: "Combien d'os compte le corps humain adulte ?",
    answer: 206,
    unit: "os"
  },
  {
    id: "mur-berlin",
    prompt: "En quelle annee est tombee la chute du mur de Berlin ?",
    answer: 1989,
    unit: "annee"
  },
  {
    id: "ue",
    prompt: "Combien de pays composent l'Union europeenne en 2024 ?",
    answer: 27,
    unit: "pays"
  },
  {
    id: "terre-lune",
    prompt: "Quelle est la distance moyenne Terre-Lune ?",
    answer: 384400,
    unit: "km"
  },
  {
    id: "minutes-journee",
    prompt: "Combien de minutes compte une journee complete ?",
    answer: 1440,
    unit: "minutes"
  },
  {
    id: "finale-1930",
    prompt: "En quelle annee a eu lieu la premiere Coupe du Monde de football ?",
    answer: 1930,
    unit: "annee"
  }
];

const DEFAULT_QUESTION = QUESTION_BANK[0];

const phaseLabels: Record<Phase, string> = {
  setup: "Preparation",
  answer: "Reponses",
  reveal: "Plateau",
  bet: "Votes",
  score: "Scores"
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

const getSlotName = (tier: string) => {
  switch (tier) {
    case "blue":
      return "Case bleue";
    case "green":
      return "Case verte";
    case "yellow":
      return "Case jaune";
    case "orange":
      return "Case orange";
    case "below":
      return "Sous toutes les reponses";
    default:
      return "Case";
  }
};

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [players, setPlayers] = useState<Player[]>([]);
  const [round, setRound] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [nextQuestion, setNextQuestion] = useState<Question>(DEFAULT_QUESTION);
  const [questionMode, setQuestionMode] = useState<"bank" | "custom">("bank");
  const [customQuestion, setCustomQuestion] = useState({
    prompt: "",
    answer: "",
    unit: ""
  });
  const [newPlayerName, setNewPlayerName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [lastRound, setLastRound] = useState<RoundResult | null>(null);
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);

  useEffect(() => {
    if (players.length === 0) {
      return;
    }
    if (currentVoterIndex >= players.length) {
      setCurrentVoterIndex(0);
    }
  }, [currentVoterIndex, players.length]);

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

  const activeSlotIndexes = useMemo(
    () => getActiveSlotIndexes(answerGroups.length),
    [answerGroups.length]
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

  const boardSlotsForDisplay = useMemo(() => {
    return [...ANSWER_SLOTS].slice().reverse().concat(BELOW_SLOT);
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

  const canEditPlayers = phase === "setup";
  const canStartRound =
    players.length >= 2 &&
    players.length <= MAX_PLAYERS &&
    nextQuestion.prompt.trim().length > 0;

  const drawRandomQuestion = () => {
    const next = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)];
    setNextQuestion(next);
  };

  const applyCustomQuestion = () => {
    const trimmedPrompt = customQuestion.prompt.trim();
    const parsedAnswer = Number.parseInt(customQuestion.answer, 10);
    if (!trimmedPrompt || Number.isNaN(parsedAnswer)) {
      setError("La question personnalisee doit avoir un texte et une reponse entiere.");
      return;
    }
    setNextQuestion({
      id: `custom-${makeId()}`,
      prompt: trimmedPrompt,
      answer: parsedAnswer,
      unit: customQuestion.unit.trim() || undefined
    });
    setError(null);
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
        gambitTarget: ""
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
    setPlayers((prev) =>
      prev.map((player) => ({
        ...player,
        answer: null,
        votes: ["", ""],
        gambitActive: false,
        gambitTarget: ""
      }))
    );
    setCurrentQuestion(nextQuestion);
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
    setPhase("reveal");
    setError(null);
  };

  const proceedToBet = () => {
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
        gambitTarget: ""
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
      return `${getSlotName(slot.tier)} (vide)`;
    }
    const playersLabel = assignment.players.map((player) => player.name).join(", ");
    return `${getSlotName(slot.tier)}: ${assignment.value} ${unit ?? ""} (${playersLabel})`;
  };

  const leaderBoard = [...players].sort((a, b) => b.score - a.score);

  return (
    <main>
      <header>
        <h1>Gambit7 Digital</h1>
        <p>
          Jeu de culture generale a reponses numeriques. Classement des reponses,
          votes sur le plateau, et jeton Gambit 7 pour tenter le tout pour le tout.
        </p>
      </header>

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
              <div className="grid two">
                <button
                  className={questionMode === "bank" ? "" : "secondary"}
                  onClick={() => setQuestionMode("bank")}
                >
                  Banque
                </button>
                <button
                  className={questionMode === "custom" ? "" : "secondary"}
                  onClick={() => setQuestionMode("custom")}
                >
                  Personnalisee
                </button>
              </div>

              {questionMode === "bank" ? (
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
              ) : (
                <div className="grid custom-input">
                  <input
                    type="text"
                    placeholder="Texte de la question"
                    value={customQuestion.prompt}
                    onChange={(event) =>
                      setCustomQuestion((prev) => ({
                        ...prev,
                        prompt: event.target.value
                      }))
                    }
                  />
                  <input
                    type="number"
                    placeholder="Reponse (entier)"
                    value={customQuestion.answer}
                    onChange={(event) =>
                      setCustomQuestion((prev) => ({
                        ...prev,
                        answer: event.target.value
                      }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="Unite (optionnel)"
                    value={customQuestion.unit}
                    onChange={(event) =>
                      setCustomQuestion((prev) => ({
                        ...prev,
                        unit: event.target.value
                      }))
                    }
                  />
                  <button className="secondary" onClick={applyCustomQuestion}>
                    Utiliser cette question
                  </button>
                  <p>
                    <strong>Question selectionnee:</strong> {nextQuestion.prompt}
                  </p>
                </div>
              )}

              <div className="grid">
                <p className="badge">Bareme du plateau</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Case</th>
                      <th>Unique</th>
                      <th>Plusieurs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sous toutes</td>
                      <td>15</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Orange</td>
                      <td>12</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Jaune</td>
                      <td>9</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Verte</td>
                      <td>6</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Bleue</td>
                      <td>3</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="card row">
          <h2>Scores</h2>
          {leaderBoard.length === 0 ? (
            <p>Ajoutez des joueurs pour lancer la partie.</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Joueur</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {leaderBoard.map((player) => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td className="highlight">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="footer-actions">
            <button className="ghost" onClick={resetGame}>
              Reinitialiser la partie
            </button>
          </div>
        </div>
      </section>

      <section className="card row">
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

      {phase === "reveal" && (
        <section className="card row">
          <h2>Plateau des reponses</h2>
          <p>
            Les reponses sont placees depuis le centre, avec le meme nombre au-dessus
            et en dessous. Les doublons restent sur la meme case.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Points (U/M)</th>
                <th>Reponse</th>
                <th>Joueurs</th>
              </tr>
            </thead>
            <tbody>
              {boardSlotsForDisplay.map((slot) => {
                const assignment =
                  slot.slotIndex === null
                    ? null
                    : answerAssignments[slot.slotIndex];
                const positionLabel =
                  slot.slotIndex === null
                    ? ""
                    : slot.slotIndex === 3
                    ? "Centre"
                    : slot.slotIndex < 3
                    ? "Bas"
                    : "Haut";
                return (
                  <tr key={`reveal-${slot.id}`}>
                    <td>
                      {slot.slotIndex === null
                        ? "Sous toutes"
                        : `${getSlotName(slot.tier)} (${positionLabel})`}
                    </td>
                    <td>
                      {slot.slotIndex === null
                        ? slot.pointsShared
                        : `${slot.pointsUnique}/${slot.pointsShared}`}
                    </td>
                    <td>
                      {slot.slotIndex === null
                        ? "Si tout est au-dessus"
                        : assignment
                        ? `${assignment.value} ${currentQuestion?.unit ?? ""}`
                        : "-"}
                    </td>
                    <td>
                      {assignment
                        ? assignment.players.map((player) => player.name).join(", ")
                        : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="footer-actions">
            <button onClick={proceedToBet}>Passer aux votes</button>
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
              const positionLabel =
                slot.slotIndex === null
                  ? "Sous toutes"
                  : slot.slotIndex === 3
                  ? "Centre"
                  : slot.slotIndex < 3
                  ? "Bas"
                  : "Haut";
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
                    <span className="slot-index">
                      {slot.slotIndex === null
                        ? "Sous toutes"
                        : `${getSlotName(slot.tier)} (${positionLabel})`}
                    </span>
                    <span className="slot-value">
                      {slot.slotIndex === null
                        ? slot.pointsShared
                        : `${slot.pointsUnique}/${slot.pointsShared}`}
                    </span>
                  </div>
                  <div className="slot-label">
                    {slot.slotIndex === null
                      ? "Si toutes les reponses sont au-dessus."
                      : assignment
                      ? `${assignment.value} ${currentQuestion?.unit ?? ""}`
                      : "Aucune reponse"}
                  </div>
                  {assignment && (
                    <div className="slot-meta">
                      {assignment.players.map((player) => player.name).join(", ")}
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
          <p>
            Reponse exacte: <span className="highlight">{lastRound.question.answer}</span>{" "}
            {lastRound.question.unit ?? ""}
          </p>
          <p>
            Reponse gagnante: {lastRound.winning.below
              ? "Sous toutes les reponses"
              : lastRound.winning.answerValue}
          </p>
          <table className="table">
            <thead>
              <tr>
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
              {lastRound.ordered.map((player) => (
                <tr key={player.id}>
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
          <div className="footer-actions">
            <button onClick={nextRound}>Manche suivante</button>
          </div>
        </section>
      )}

      {error && <div className="error">{error}</div>}

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
        </p>
      </section>

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
    </main>
  );
}
