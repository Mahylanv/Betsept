export type Question = {
  id: string;
  prompt: string;
  answer: number;
  unit?: string;
};

export const QUESTION_BANK: Question[] = [
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

export const DEFAULT_QUESTION = QUESTION_BANK[0];
