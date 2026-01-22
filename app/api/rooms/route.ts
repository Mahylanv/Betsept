import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { QUESTION_BANK, type Question } from "../../lib/questions";

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

type OnlineRoom = {
  code: string;
  hostId: string;
  phase: "lobby" | "answer" | "bet" | "score" | "over";
  round: number;
  question: Question | null;
  questionDeck: string[];
  players: OnlinePlayer[];
  answerDeadline: number | null;
  betDeadline: number | null;
  lastResult: null;
  createdAt: number;
  updatedAt: number;
};

const ROOM_TTL_SECONDS = 60 * 60 * 6;

const makeId = () => Math.random().toString(36).slice(2, 10);

const makeCode = () =>
  Math.random().toString(36).slice(2, 6).toUpperCase();

const roomKey = (code: string) => `room:${code}`;
const shuffleQuestionIds = () =>
  QUESTION_BANK.map((question) => question.id).sort(() => Math.random() - 0.5);

const createUniqueCode = async () => {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const code = makeCode();
    const existing = await kv.get(roomKey(code));
    if (!existing) {
      return code;
    }
  }
  return null;
};

export async function POST(request: Request) {
  const body = await request.json();
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  if (!name) {
    return NextResponse.json({ error: "Nom requis." }, { status: 400 });
  }

  const code = await createUniqueCode();
  if (!code) {
    return NextResponse.json(
      { error: "Impossible de creer un code pour la partie." },
      { status: 500 }
    );
  }

  const playerId = makeId();
  const now = Date.now();
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

  const room: OnlineRoom = {
    code,
    hostId: playerId,
    phase: "lobby",
    round: 1,
    question: null,
    questionDeck: shuffleQuestionIds(),
    players: [player],
    answerDeadline: null,
    betDeadline: null,
    lastResult: null,
    createdAt: now,
    updatedAt: now
  };

  await kv.set(roomKey(code), room, { ex: ROOM_TTL_SECONDS });
  return NextResponse.json({ room, playerId });
}
