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
  },
  {
    id: "pt-hydrogen-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Hydrogen (H) ?",
    answer: 1
  },
  {
    id: "pt-hydrogen-fusion-k",
    prompt: "Quel est le point de fusion de l'element Hydrogen (H) (en kelvins, arrondi) ?",
    answer: 14,
    unit: "K"
  },
  {
    id: "pt-hydrogen-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Hydrogen (H) (en kelvins, arrondi) ?",
    answer: 20,
    unit: "K"
  },
  {
    id: "pt-hydrogen-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Hydrogen (H) (arrondie a 3 decimales) ?",
    answer: 1.007,
    unit: "u"
  },
  {
    id: "pt-hydrogen-annee-decouverte",
    prompt: "En quelle annee l'element Hydrogen (H) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1766,
    unit: "annee"
  },
  {
    id: "pt-hydrogen-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Hydrogen (H) ?",
    answer: 1,
    unit: "couches"
  },
  {
    id: "pt-hydrogen-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Hydrogen (H) (valeur usuelle) ?",
    answer: 1,
    unit: "electrons"
  },
  {
    id: "pt-hydrogen-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Hydrogen (H) ?",
    answer: 1,
    unit: "periode"
  },
  {
    id: "pt-hydrogen-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Hydrogen (H) ?",
    answer: 1,
    unit: "groupe"
  },
  {
    id: "pt-helium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Helium (He) ?",
    answer: 2
  },
  {
    id: "pt-helium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Helium (He) (en kelvins, arrondi) ?",
    answer: 4,
    unit: "K"
  },
  {
    id: "pt-helium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Helium (He) (arrondie a 3 decimales) ?",
    answer: 4.002,
    unit: "u"
  },
  {
    id: "pt-helium-annee-decouverte",
    prompt: "En quelle annee l'element Helium (He) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1868,
    unit: "annee"
  },
  {
    id: "pt-helium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Helium (He) ?",
    answer: 1,
    unit: "couches"
  },
  {
    id: "pt-helium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Helium (He) ?",
    answer: 1,
    unit: "periode"
  },
  {
    id: "pt-helium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Helium (He) ?",
    answer: 18,
    unit: "groupe"
  },
  {
    id: "pt-lithium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Lithium (Li) ?",
    answer: 3
  },
  {
    id: "pt-lithium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Lithium (Li) (en kelvins, arrondi) ?",
    answer: 454,
    unit: "K"
  },
  {
    id: "pt-lithium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Lithium (Li) (en kelvins, arrondi) ?",
    answer: 1615,
    unit: "K"
  },
  {
    id: "pt-lithium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Lithium (Li) (arrondie a 3 decimales) ?",
    answer: 6.941,
    unit: "u"
  },
  {
    id: "pt-lithium-annee-decouverte",
    prompt: "En quelle annee l'element Lithium (Li) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1817,
    unit: "annee"
  },
  {
    id: "pt-lithium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Lithium (Li) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-lithium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Lithium (Li) (valeur usuelle) ?",
    answer: 1,
    unit: "electrons"
  },
  {
    id: "pt-lithium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Lithium (Li) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-lithium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Lithium (Li) ?",
    answer: 1,
    unit: "groupe"
  },
  {
    id: "pt-beryllium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Beryllium (Be) ?",
    answer: 4
  },
  {
    id: "pt-beryllium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Beryllium (Be) (en kelvins, arrondi) ?",
    answer: 1560,
    unit: "K"
  },
  {
    id: "pt-beryllium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Beryllium (Be) (en kelvins, arrondi) ?",
    answer: 2742,
    unit: "K"
  },
  {
    id: "pt-beryllium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Beryllium (Be) (arrondie a 3 decimales) ?",
    answer: 9.012,
    unit: "u"
  },
  {
    id: "pt-beryllium-annee-decouverte",
    prompt: "En quelle annee l'element Beryllium (Be) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1798,
    unit: "annee"
  },
  {
    id: "pt-beryllium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Beryllium (Be) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-beryllium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Beryllium (Be) (valeur usuelle) ?",
    answer: 2,
    unit: "electrons"
  },
  {
    id: "pt-beryllium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Beryllium (Be) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-beryllium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Beryllium (Be) ?",
    answer: 2,
    unit: "groupe"
  },
  {
    id: "pt-boron-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Boron (B) ?",
    answer: 5
  },
  {
    id: "pt-boron-fusion-k",
    prompt: "Quel est le point de fusion de l'element Boron (B) (en kelvins, arrondi) ?",
    answer: 2573,
    unit: "K"
  },
  {
    id: "pt-boron-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Boron (B) (en kelvins, arrondi) ?",
    answer: 4200,
    unit: "K"
  },
  {
    id: "pt-boron-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Boron (B) (arrondie a 3 decimales) ?",
    answer: 10.811,
    unit: "u"
  },
  {
    id: "pt-boron-annee-decouverte",
    prompt: "En quelle annee l'element Boron (B) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1808,
    unit: "annee"
  },
  {
    id: "pt-boron-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Boron (B) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-boron-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Boron (B) (valeur usuelle) ?",
    answer: 3,
    unit: "electrons"
  },
  {
    id: "pt-boron-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Boron (B) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-boron-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Boron (B) ?",
    answer: 13,
    unit: "groupe"
  },
  {
    id: "pt-carbon-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Carbon (C) ?",
    answer: 6
  },
  {
    id: "pt-carbon-fusion-k",
    prompt: "Quel est le point de fusion de l'element Carbon (C) (en kelvins, arrondi) ?",
    answer: 3948,
    unit: "K"
  },
  {
    id: "pt-carbon-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Carbon (C) (en kelvins, arrondi) ?",
    answer: 4300,
    unit: "K"
  },
  {
    id: "pt-carbon-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Carbon (C) (arrondie a 3 decimales) ?",
    answer: 12.011,
    unit: "u"
  },
  {
    id: "pt-carbon-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Carbon (C) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-carbon-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Carbon (C) (valeur usuelle) ?",
    answer: 4,
    unit: "electrons"
  },
  {
    id: "pt-carbon-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Carbon (C) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-carbon-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Carbon (C) ?",
    answer: 14,
    unit: "groupe"
  },
  {
    id: "pt-nitrogen-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Nitrogen (N) ?",
    answer: 7
  },
  {
    id: "pt-nitrogen-fusion-k",
    prompt: "Quel est le point de fusion de l'element Nitrogen (N) (en kelvins, arrondi) ?",
    answer: 63,
    unit: "K"
  },
  {
    id: "pt-nitrogen-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Nitrogen (N) (en kelvins, arrondi) ?",
    answer: 77,
    unit: "K"
  },
  {
    id: "pt-nitrogen-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Nitrogen (N) (arrondie a 3 decimales) ?",
    answer: 14.007,
    unit: "u"
  },
  {
    id: "pt-nitrogen-annee-decouverte",
    prompt: "En quelle annee l'element Nitrogen (N) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1772,
    unit: "annee"
  },
  {
    id: "pt-nitrogen-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Nitrogen (N) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-nitrogen-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Nitrogen (N) (valeur usuelle) ?",
    answer: 5,
    unit: "electrons"
  },
  {
    id: "pt-nitrogen-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Nitrogen (N) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-nitrogen-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Nitrogen (N) ?",
    answer: 15,
    unit: "groupe"
  },
  {
    id: "pt-oxygen-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Oxygen (O) ?",
    answer: 8
  },
  {
    id: "pt-oxygen-fusion-k",
    prompt: "Quel est le point de fusion de l'element Oxygen (O) (en kelvins, arrondi) ?",
    answer: 50,
    unit: "K"
  },
  {
    id: "pt-oxygen-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Oxygen (O) (en kelvins, arrondi) ?",
    answer: 90,
    unit: "K"
  },
  {
    id: "pt-oxygen-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Oxygen (O) (arrondie a 3 decimales) ?",
    answer: 15.999,
    unit: "u"
  },
  {
    id: "pt-oxygen-annee-decouverte",
    prompt: "En quelle annee l'element Oxygen (O) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1774,
    unit: "annee"
  },
  {
    id: "pt-oxygen-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Oxygen (O) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-oxygen-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Oxygen (O) (valeur usuelle) ?",
    answer: 6,
    unit: "electrons"
  },
  {
    id: "pt-oxygen-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Oxygen (O) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-oxygen-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Oxygen (O) ?",
    answer: 16,
    unit: "groupe"
  },
  {
    id: "pt-fluorine-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Fluorine (F) ?",
    answer: 9
  },
  {
    id: "pt-fluorine-fusion-k",
    prompt: "Quel est le point de fusion de l'element Fluorine (F) (en kelvins, arrondi) ?",
    answer: 54,
    unit: "K"
  },
  {
    id: "pt-fluorine-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Fluorine (F) (en kelvins, arrondi) ?",
    answer: 85,
    unit: "K"
  },
  {
    id: "pt-fluorine-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Fluorine (F) (arrondie a 3 decimales) ?",
    answer: 18.998,
    unit: "u"
  },
  {
    id: "pt-fluorine-annee-decouverte",
    prompt: "En quelle annee l'element Fluorine (F) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1886,
    unit: "annee"
  },
  {
    id: "pt-fluorine-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Fluorine (F) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-fluorine-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Fluorine (F) (valeur usuelle) ?",
    answer: 7,
    unit: "electrons"
  },
  {
    id: "pt-fluorine-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Fluorine (F) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-fluorine-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Fluorine (F) ?",
    answer: 17,
    unit: "groupe"
  },
  {
    id: "pt-neon-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Neon (Ne) ?",
    answer: 10
  },
  {
    id: "pt-neon-fusion-k",
    prompt: "Quel est le point de fusion de l'element Neon (Ne) (en kelvins, arrondi) ?",
    answer: 25,
    unit: "K"
  },
  {
    id: "pt-neon-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Neon (Ne) (en kelvins, arrondi) ?",
    answer: 27,
    unit: "K"
  },
  {
    id: "pt-neon-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Neon (Ne) (arrondie a 3 decimales) ?",
    answer: 20.18,
    unit: "u"
  },
  {
    id: "pt-neon-annee-decouverte",
    prompt: "En quelle annee l'element Neon (Ne) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1898,
    unit: "annee"
  },
  {
    id: "pt-neon-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Neon (Ne) ?",
    answer: 2,
    unit: "couches"
  },
  {
    id: "pt-neon-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Neon (Ne) (valeur usuelle) ?",
    answer: 8,
    unit: "electrons"
  },
  {
    id: "pt-neon-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Neon (Ne) ?",
    answer: 2,
    unit: "periode"
  },
  {
    id: "pt-neon-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Neon (Ne) ?",
    answer: 18,
    unit: "groupe"
  },
  {
    id: "pt-sodium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Sodium (Na) ?",
    answer: 11
  },
  {
    id: "pt-sodium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Sodium (Na) (en kelvins, arrondi) ?",
    answer: 371,
    unit: "K"
  },
  {
    id: "pt-sodium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Sodium (Na) (en kelvins, arrondi) ?",
    answer: 1156,
    unit: "K"
  },
  {
    id: "pt-sodium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Sodium (Na) (arrondie a 3 decimales) ?",
    answer: 22.99,
    unit: "u"
  },
  {
    id: "pt-sodium-annee-decouverte",
    prompt: "En quelle annee l'element Sodium (Na) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1807,
    unit: "annee"
  },
  {
    id: "pt-sodium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Sodium (Na) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-sodium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Sodium (Na) (valeur usuelle) ?",
    answer: 1,
    unit: "electrons"
  },
  {
    id: "pt-sodium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Sodium (Na) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-sodium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Sodium (Na) ?",
    answer: 1,
    unit: "groupe"
  },
  {
    id: "pt-magnesium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Magnesium (Mg) ?",
    answer: 12
  },
  {
    id: "pt-magnesium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Magnesium (Mg) (en kelvins, arrondi) ?",
    answer: 923,
    unit: "K"
  },
  {
    id: "pt-magnesium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Magnesium (Mg) (en kelvins, arrondi) ?",
    answer: 1363,
    unit: "K"
  },
  {
    id: "pt-magnesium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Magnesium (Mg) (arrondie a 3 decimales) ?",
    answer: 24.305,
    unit: "u"
  },
  {
    id: "pt-magnesium-annee-decouverte",
    prompt: "En quelle annee l'element Magnesium (Mg) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1755,
    unit: "annee"
  },
  {
    id: "pt-magnesium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Magnesium (Mg) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-magnesium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Magnesium (Mg) (valeur usuelle) ?",
    answer: 2,
    unit: "electrons"
  },
  {
    id: "pt-magnesium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Magnesium (Mg) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-magnesium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Magnesium (Mg) ?",
    answer: 2,
    unit: "groupe"
  },
  {
    id: "pt-aluminum-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Aluminum (Al) ?",
    answer: 13
  },
  {
    id: "pt-aluminum-fusion-k",
    prompt: "Quel est le point de fusion de l'element Aluminum (Al) (en kelvins, arrondi) ?",
    answer: 933,
    unit: "K"
  },
  {
    id: "pt-aluminum-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Aluminum (Al) (en kelvins, arrondi) ?",
    answer: 2792,
    unit: "K"
  },
  {
    id: "pt-aluminum-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Aluminum (Al) (arrondie a 3 decimales) ?",
    answer: 26.982,
    unit: "u"
  },
  {
    id: "pt-aluminum-annee-decouverte",
    prompt: "En quelle annee l'element Aluminum (Al) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1827,
    unit: "annee"
  },
  {
    id: "pt-aluminum-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Aluminum (Al) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-aluminum-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Aluminum (Al) (valeur usuelle) ?",
    answer: 3,
    unit: "electrons"
  },
  {
    id: "pt-aluminum-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Aluminum (Al) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-aluminum-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Aluminum (Al) ?",
    answer: 13,
    unit: "groupe"
  },
  {
    id: "pt-silicon-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Silicon (Si) ?",
    answer: 14
  },
  {
    id: "pt-silicon-fusion-k",
    prompt: "Quel est le point de fusion de l'element Silicon (Si) (en kelvins, arrondi) ?",
    answer: 1683,
    unit: "K"
  },
  {
    id: "pt-silicon-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Silicon (Si) (en kelvins, arrondi) ?",
    answer: 3538,
    unit: "K"
  },
  {
    id: "pt-silicon-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Silicon (Si) (arrondie a 3 decimales) ?",
    answer: 28.086,
    unit: "u"
  },
  {
    id: "pt-silicon-annee-decouverte",
    prompt: "En quelle annee l'element Silicon (Si) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1824,
    unit: "annee"
  },
  {
    id: "pt-silicon-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Silicon (Si) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-silicon-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Silicon (Si) (valeur usuelle) ?",
    answer: 4,
    unit: "electrons"
  },
  {
    id: "pt-silicon-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Silicon (Si) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-silicon-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Silicon (Si) ?",
    answer: 14,
    unit: "groupe"
  },
  {
    id: "pt-phosphorus-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Phosphorus (P) ?",
    answer: 15
  },
  {
    id: "pt-phosphorus-fusion-k",
    prompt: "Quel est le point de fusion de l'element Phosphorus (P) (en kelvins, arrondi) ?",
    answer: 317,
    unit: "K"
  },
  {
    id: "pt-phosphorus-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Phosphorus (P) (en kelvins, arrondi) ?",
    answer: 553,
    unit: "K"
  },
  {
    id: "pt-phosphorus-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Phosphorus (P) (arrondie a 3 decimales) ?",
    answer: 30.974,
    unit: "u"
  },
  {
    id: "pt-phosphorus-annee-decouverte",
    prompt: "En quelle annee l'element Phosphorus (P) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1669,
    unit: "annee"
  },
  {
    id: "pt-phosphorus-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Phosphorus (P) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-phosphorus-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Phosphorus (P) (valeur usuelle) ?",
    answer: 5,
    unit: "electrons"
  },
  {
    id: "pt-phosphorus-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Phosphorus (P) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-phosphorus-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Phosphorus (P) ?",
    answer: 15,
    unit: "groupe"
  },
  {
    id: "pt-sulfur-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Sulfur (S) ?",
    answer: 16
  },
  {
    id: "pt-sulfur-fusion-k",
    prompt: "Quel est le point de fusion de l'element Sulfur (S) (en kelvins, arrondi) ?",
    answer: 389,
    unit: "K"
  },
  {
    id: "pt-sulfur-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Sulfur (S) (en kelvins, arrondi) ?",
    answer: 718,
    unit: "K"
  },
  {
    id: "pt-sulfur-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Sulfur (S) (arrondie a 3 decimales) ?",
    answer: 32.065,
    unit: "u"
  },
  {
    id: "pt-sulfur-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Sulfur (S) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-sulfur-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Sulfur (S) (valeur usuelle) ?",
    answer: 6,
    unit: "electrons"
  },
  {
    id: "pt-sulfur-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Sulfur (S) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-sulfur-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Sulfur (S) ?",
    answer: 16,
    unit: "groupe"
  },
  {
    id: "pt-chlorine-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Chlorine (Cl) ?",
    answer: 17
  },
  {
    id: "pt-chlorine-fusion-k",
    prompt: "Quel est le point de fusion de l'element Chlorine (Cl) (en kelvins, arrondi) ?",
    answer: 172,
    unit: "K"
  },
  {
    id: "pt-chlorine-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Chlorine (Cl) (en kelvins, arrondi) ?",
    answer: 239,
    unit: "K"
  },
  {
    id: "pt-chlorine-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Chlorine (Cl) (arrondie a 3 decimales) ?",
    answer: 35.453,
    unit: "u"
  },
  {
    id: "pt-chlorine-annee-decouverte",
    prompt: "En quelle annee l'element Chlorine (Cl) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1774,
    unit: "annee"
  },
  {
    id: "pt-chlorine-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Chlorine (Cl) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-chlorine-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Chlorine (Cl) (valeur usuelle) ?",
    answer: 7,
    unit: "electrons"
  },
  {
    id: "pt-chlorine-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Chlorine (Cl) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-chlorine-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Chlorine (Cl) ?",
    answer: 17,
    unit: "groupe"
  },
  {
    id: "pt-argon-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Argon (Ar) ?",
    answer: 18
  },
  {
    id: "pt-argon-fusion-k",
    prompt: "Quel est le point de fusion de l'element Argon (Ar) (en kelvins, arrondi) ?",
    answer: 84,
    unit: "K"
  },
  {
    id: "pt-argon-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Argon (Ar) (en kelvins, arrondi) ?",
    answer: 87,
    unit: "K"
  },
  {
    id: "pt-argon-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Argon (Ar) (arrondie a 3 decimales) ?",
    answer: 39.948,
    unit: "u"
  },
  {
    id: "pt-argon-annee-decouverte",
    prompt: "En quelle annee l'element Argon (Ar) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1894,
    unit: "annee"
  },
  {
    id: "pt-argon-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Argon (Ar) ?",
    answer: 3,
    unit: "couches"
  },
  {
    id: "pt-argon-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Argon (Ar) (valeur usuelle) ?",
    answer: 8,
    unit: "electrons"
  },
  {
    id: "pt-argon-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Argon (Ar) ?",
    answer: 3,
    unit: "periode"
  },
  {
    id: "pt-argon-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Argon (Ar) ?",
    answer: 18,
    unit: "groupe"
  },
  {
    id: "pt-potassium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Potassium (K) ?",
    answer: 19
  },
  {
    id: "pt-potassium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Potassium (K) (en kelvins, arrondi) ?",
    answer: 336,
    unit: "K"
  },
  {
    id: "pt-potassium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Potassium (K) (en kelvins, arrondi) ?",
    answer: 1032,
    unit: "K"
  },
  {
    id: "pt-potassium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Potassium (K) (arrondie a 3 decimales) ?",
    answer: 39.098,
    unit: "u"
  },
  {
    id: "pt-potassium-annee-decouverte",
    prompt: "En quelle annee l'element Potassium (K) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1807,
    unit: "annee"
  },
  {
    id: "pt-potassium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Potassium (K) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-potassium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Potassium (K) (valeur usuelle) ?",
    answer: 1,
    unit: "electrons"
  },
  {
    id: "pt-potassium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Potassium (K) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-potassium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Potassium (K) ?",
    answer: 1,
    unit: "groupe"
  },
  {
    id: "pt-calcium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Calcium (Ca) ?",
    answer: 20
  },
  {
    id: "pt-calcium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Calcium (Ca) (en kelvins, arrondi) ?",
    answer: 1112,
    unit: "K"
  },
  {
    id: "pt-calcium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Calcium (Ca) (en kelvins, arrondi) ?",
    answer: 1757,
    unit: "K"
  },
  {
    id: "pt-calcium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Calcium (Ca) (arrondie a 3 decimales) ?",
    answer: 40.078,
    unit: "u"
  },
  {
    id: "pt-calcium-annee-decouverte",
    prompt: "En quelle annee l'element Calcium (Ca) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1808,
    unit: "annee"
  },
  {
    id: "pt-calcium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Calcium (Ca) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-calcium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Calcium (Ca) (valeur usuelle) ?",
    answer: 2,
    unit: "electrons"
  },
  {
    id: "pt-calcium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Calcium (Ca) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-calcium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Calcium (Ca) ?",
    answer: 2,
    unit: "groupe"
  },
  {
    id: "pt-scandium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Scandium (Sc) ?",
    answer: 21
  },
  {
    id: "pt-scandium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Scandium (Sc) (en kelvins, arrondi) ?",
    answer: 1812,
    unit: "K"
  },
  {
    id: "pt-scandium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Scandium (Sc) (en kelvins, arrondi) ?",
    answer: 3109,
    unit: "K"
  },
  {
    id: "pt-scandium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Scandium (Sc) (arrondie a 3 decimales) ?",
    answer: 44.956,
    unit: "u"
  },
  {
    id: "pt-scandium-annee-decouverte",
    prompt: "En quelle annee l'element Scandium (Sc) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1878,
    unit: "annee"
  },
  {
    id: "pt-scandium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Scandium (Sc) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-scandium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Scandium (Sc) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-scandium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Scandium (Sc) ?",
    answer: 3,
    unit: "groupe"
  },
  {
    id: "pt-titanium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Titanium (Ti) ?",
    answer: 22
  },
  {
    id: "pt-titanium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Titanium (Ti) (en kelvins, arrondi) ?",
    answer: 1933,
    unit: "K"
  },
  {
    id: "pt-titanium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Titanium (Ti) (en kelvins, arrondi) ?",
    answer: 3560,
    unit: "K"
  },
  {
    id: "pt-titanium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Titanium (Ti) (arrondie a 3 decimales) ?",
    answer: 47.867,
    unit: "u"
  },
  {
    id: "pt-titanium-annee-decouverte",
    prompt: "En quelle annee l'element Titanium (Ti) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1791,
    unit: "annee"
  },
  {
    id: "pt-titanium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Titanium (Ti) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-titanium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Titanium (Ti) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-titanium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Titanium (Ti) ?",
    answer: 4,
    unit: "groupe"
  },
  {
    id: "pt-vanadium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Vanadium (V) ?",
    answer: 23
  },
  {
    id: "pt-vanadium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Vanadium (V) (en kelvins, arrondi) ?",
    answer: 2175,
    unit: "K"
  },
  {
    id: "pt-vanadium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Vanadium (V) (en kelvins, arrondi) ?",
    answer: 3680,
    unit: "K"
  },
  {
    id: "pt-vanadium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Vanadium (V) (arrondie a 3 decimales) ?",
    answer: 50.942,
    unit: "u"
  },
  {
    id: "pt-vanadium-annee-decouverte",
    prompt: "En quelle annee l'element Vanadium (V) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1801,
    unit: "annee"
  },
  {
    id: "pt-vanadium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Vanadium (V) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-vanadium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Vanadium (V) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-vanadium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Vanadium (V) ?",
    answer: 5,
    unit: "groupe"
  },
  {
    id: "pt-chromium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Chromium (Cr) ?",
    answer: 24
  },
  {
    id: "pt-chromium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Chromium (Cr) (en kelvins, arrondi) ?",
    answer: 2130,
    unit: "K"
  },
  {
    id: "pt-chromium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Chromium (Cr) (en kelvins, arrondi) ?",
    answer: 2944,
    unit: "K"
  },
  {
    id: "pt-chromium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Chromium (Cr) (arrondie a 3 decimales) ?",
    answer: 51.996,
    unit: "u"
  },
  {
    id: "pt-chromium-annee-decouverte",
    prompt: "En quelle annee l'element Chromium (Cr) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1797,
    unit: "annee"
  },
  {
    id: "pt-chromium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Chromium (Cr) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-chromium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Chromium (Cr) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-chromium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Chromium (Cr) ?",
    answer: 6,
    unit: "groupe"
  },
  {
    id: "pt-manganese-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Manganese (Mn) ?",
    answer: 25
  },
  {
    id: "pt-manganese-fusion-k",
    prompt: "Quel est le point de fusion de l'element Manganese (Mn) (en kelvins, arrondi) ?",
    answer: 1519,
    unit: "K"
  },
  {
    id: "pt-manganese-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Manganese (Mn) (en kelvins, arrondi) ?",
    answer: 2334,
    unit: "K"
  },
  {
    id: "pt-manganese-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Manganese (Mn) (arrondie a 3 decimales) ?",
    answer: 54.938,
    unit: "u"
  },
  {
    id: "pt-manganese-annee-decouverte",
    prompt: "En quelle annee l'element Manganese (Mn) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1774,
    unit: "annee"
  },
  {
    id: "pt-manganese-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Manganese (Mn) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-manganese-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Manganese (Mn) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-manganese-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Manganese (Mn) ?",
    answer: 7,
    unit: "groupe"
  },
  {
    id: "pt-iron-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Iron (Fe) ?",
    answer: 26
  },
  {
    id: "pt-iron-fusion-k",
    prompt: "Quel est le point de fusion de l'element Iron (Fe) (en kelvins, arrondi) ?",
    answer: 1808,
    unit: "K"
  },
  {
    id: "pt-iron-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Iron (Fe) (en kelvins, arrondi) ?",
    answer: 3134,
    unit: "K"
  },
  {
    id: "pt-iron-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Iron (Fe) (arrondie a 3 decimales) ?",
    answer: 55.845,
    unit: "u"
  },
  {
    id: "pt-iron-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Iron (Fe) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-iron-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Iron (Fe) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-iron-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Iron (Fe) ?",
    answer: 8,
    unit: "groupe"
  },
  {
    id: "pt-cobalt-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Cobalt (Co) ?",
    answer: 27
  },
  {
    id: "pt-cobalt-fusion-k",
    prompt: "Quel est le point de fusion de l'element Cobalt (Co) (en kelvins, arrondi) ?",
    answer: 1768,
    unit: "K"
  },
  {
    id: "pt-cobalt-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Cobalt (Co) (en kelvins, arrondi) ?",
    answer: 3200,
    unit: "K"
  },
  {
    id: "pt-cobalt-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Cobalt (Co) (arrondie a 3 decimales) ?",
    answer: 58.933,
    unit: "u"
  },
  {
    id: "pt-cobalt-annee-decouverte",
    prompt: "En quelle annee l'element Cobalt (Co) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1735,
    unit: "annee"
  },
  {
    id: "pt-cobalt-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Cobalt (Co) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-cobalt-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Cobalt (Co) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-cobalt-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Cobalt (Co) ?",
    answer: 9,
    unit: "groupe"
  },
  {
    id: "pt-nickel-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Nickel (Ni) ?",
    answer: 28
  },
  {
    id: "pt-nickel-fusion-k",
    prompt: "Quel est le point de fusion de l'element Nickel (Ni) (en kelvins, arrondi) ?",
    answer: 1726,
    unit: "K"
  },
  {
    id: "pt-nickel-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Nickel (Ni) (en kelvins, arrondi) ?",
    answer: 3186,
    unit: "K"
  },
  {
    id: "pt-nickel-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Nickel (Ni) (arrondie a 3 decimales) ?",
    answer: 58.693,
    unit: "u"
  },
  {
    id: "pt-nickel-annee-decouverte",
    prompt: "En quelle annee l'element Nickel (Ni) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1751,
    unit: "annee"
  },
  {
    id: "pt-nickel-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Nickel (Ni) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-nickel-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Nickel (Ni) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-nickel-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Nickel (Ni) ?",
    answer: 10,
    unit: "groupe"
  },
  {
    id: "pt-copper-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Copper (Cu) ?",
    answer: 29
  },
  {
    id: "pt-copper-fusion-k",
    prompt: "Quel est le point de fusion de l'element Copper (Cu) (en kelvins, arrondi) ?",
    answer: 1358,
    unit: "K"
  },
  {
    id: "pt-copper-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Copper (Cu) (en kelvins, arrondi) ?",
    answer: 2835,
    unit: "K"
  },
  {
    id: "pt-copper-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Copper (Cu) (arrondie a 3 decimales) ?",
    answer: 63.546,
    unit: "u"
  },
  {
    id: "pt-copper-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Copper (Cu) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-copper-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Copper (Cu) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-copper-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Copper (Cu) ?",
    answer: 11,
    unit: "groupe"
  },
  {
    id: "pt-zinc-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Zinc (Zn) ?",
    answer: 30
  },
  {
    id: "pt-zinc-fusion-k",
    prompt: "Quel est le point de fusion de l'element Zinc (Zn) (en kelvins, arrondi) ?",
    answer: 693,
    unit: "K"
  },
  {
    id: "pt-zinc-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Zinc (Zn) (en kelvins, arrondi) ?",
    answer: 1180,
    unit: "K"
  },
  {
    id: "pt-zinc-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Zinc (Zn) (arrondie a 3 decimales) ?",
    answer: 65.38,
    unit: "u"
  },
  {
    id: "pt-zinc-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Zinc (Zn) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-zinc-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Zinc (Zn) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-zinc-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Zinc (Zn) ?",
    answer: 12,
    unit: "groupe"
  },
  {
    id: "pt-gallium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Gallium (Ga) ?",
    answer: 31
  },
  {
    id: "pt-gallium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Gallium (Ga) (en kelvins, arrondi) ?",
    answer: 303,
    unit: "K"
  },
  {
    id: "pt-gallium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Gallium (Ga) (en kelvins, arrondi) ?",
    answer: 2477,
    unit: "K"
  },
  {
    id: "pt-gallium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Gallium (Ga) (arrondie a 3 decimales) ?",
    answer: 69.723,
    unit: "u"
  },
  {
    id: "pt-gallium-annee-decouverte",
    prompt: "En quelle annee l'element Gallium (Ga) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1875,
    unit: "annee"
  },
  {
    id: "pt-gallium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Gallium (Ga) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-gallium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Gallium (Ga) (valeur usuelle) ?",
    answer: 3,
    unit: "electrons"
  },
  {
    id: "pt-gallium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Gallium (Ga) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-gallium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Gallium (Ga) ?",
    answer: 13,
    unit: "groupe"
  },
  {
    id: "pt-germanium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Germanium (Ge) ?",
    answer: 32
  },
  {
    id: "pt-germanium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Germanium (Ge) (en kelvins, arrondi) ?",
    answer: 1211,
    unit: "K"
  },
  {
    id: "pt-germanium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Germanium (Ge) (en kelvins, arrondi) ?",
    answer: 3106,
    unit: "K"
  },
  {
    id: "pt-germanium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Germanium (Ge) (arrondie a 3 decimales) ?",
    answer: 72.64,
    unit: "u"
  },
  {
    id: "pt-germanium-annee-decouverte",
    prompt: "En quelle annee l'element Germanium (Ge) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1886,
    unit: "annee"
  },
  {
    id: "pt-germanium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Germanium (Ge) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-germanium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Germanium (Ge) (valeur usuelle) ?",
    answer: 4,
    unit: "electrons"
  },
  {
    id: "pt-germanium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Germanium (Ge) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-germanium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Germanium (Ge) ?",
    answer: 14,
    unit: "groupe"
  },
  {
    id: "pt-arsenic-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Arsenic (As) ?",
    answer: 33
  },
  {
    id: "pt-arsenic-fusion-k",
    prompt: "Quel est le point de fusion de l'element Arsenic (As) (en kelvins, arrondi) ?",
    answer: 1090,
    unit: "K"
  },
  {
    id: "pt-arsenic-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Arsenic (As) (en kelvins, arrondi) ?",
    answer: 887,
    unit: "K"
  },
  {
    id: "pt-arsenic-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Arsenic (As) (arrondie a 3 decimales) ?",
    answer: 74.922,
    unit: "u"
  },
  {
    id: "pt-arsenic-annee-decouverte",
    prompt: "En quelle annee l'element Arsenic (As) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1250,
    unit: "annee"
  },
  {
    id: "pt-arsenic-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Arsenic (As) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-arsenic-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Arsenic (As) (valeur usuelle) ?",
    answer: 5,
    unit: "electrons"
  },
  {
    id: "pt-arsenic-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Arsenic (As) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-arsenic-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Arsenic (As) ?",
    answer: 15,
    unit: "groupe"
  },
  {
    id: "pt-selenium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Selenium (Se) ?",
    answer: 34
  },
  {
    id: "pt-selenium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Selenium (Se) (en kelvins, arrondi) ?",
    answer: 494,
    unit: "K"
  },
  {
    id: "pt-selenium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Selenium (Se) (en kelvins, arrondi) ?",
    answer: 958,
    unit: "K"
  },
  {
    id: "pt-selenium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Selenium (Se) (arrondie a 3 decimales) ?",
    answer: 78.96,
    unit: "u"
  },
  {
    id: "pt-selenium-annee-decouverte",
    prompt: "En quelle annee l'element Selenium (Se) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1817,
    unit: "annee"
  },
  {
    id: "pt-selenium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Selenium (Se) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-selenium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Selenium (Se) (valeur usuelle) ?",
    answer: 6,
    unit: "electrons"
  },
  {
    id: "pt-selenium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Selenium (Se) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-selenium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Selenium (Se) ?",
    answer: 16,
    unit: "groupe"
  },
  {
    id: "pt-bromine-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Bromine (Br) ?",
    answer: 35
  },
  {
    id: "pt-bromine-fusion-k",
    prompt: "Quel est le point de fusion de l'element Bromine (Br) (en kelvins, arrondi) ?",
    answer: 266,
    unit: "K"
  },
  {
    id: "pt-bromine-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Bromine (Br) (en kelvins, arrondi) ?",
    answer: 332,
    unit: "K"
  },
  {
    id: "pt-bromine-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Bromine (Br) (arrondie a 3 decimales) ?",
    answer: 79.904,
    unit: "u"
  },
  {
    id: "pt-bromine-annee-decouverte",
    prompt: "En quelle annee l'element Bromine (Br) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1826,
    unit: "annee"
  },
  {
    id: "pt-bromine-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Bromine (Br) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-bromine-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Bromine (Br) (valeur usuelle) ?",
    answer: 7,
    unit: "electrons"
  },
  {
    id: "pt-bromine-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Bromine (Br) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-bromine-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Bromine (Br) ?",
    answer: 17,
    unit: "groupe"
  },
  {
    id: "pt-krypton-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Krypton (Kr) ?",
    answer: 36
  },
  {
    id: "pt-krypton-fusion-k",
    prompt: "Quel est le point de fusion de l'element Krypton (Kr) (en kelvins, arrondi) ?",
    answer: 116,
    unit: "K"
  },
  {
    id: "pt-krypton-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Krypton (Kr) (en kelvins, arrondi) ?",
    answer: 120,
    unit: "K"
  },
  {
    id: "pt-krypton-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Krypton (Kr) (arrondie a 3 decimales) ?",
    answer: 83.798,
    unit: "u"
  },
  {
    id: "pt-krypton-annee-decouverte",
    prompt: "En quelle annee l'element Krypton (Kr) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1898,
    unit: "annee"
  },
  {
    id: "pt-krypton-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Krypton (Kr) ?",
    answer: 4,
    unit: "couches"
  },
  {
    id: "pt-krypton-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Krypton (Kr) (valeur usuelle) ?",
    answer: 8,
    unit: "electrons"
  },
  {
    id: "pt-krypton-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Krypton (Kr) ?",
    answer: 4,
    unit: "periode"
  },
  {
    id: "pt-krypton-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Krypton (Kr) ?",
    answer: 18,
    unit: "groupe"
  },
  {
    id: "pt-rubidium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Rubidium (Rb) ?",
    answer: 37
  },
  {
    id: "pt-rubidium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Rubidium (Rb) (en kelvins, arrondi) ?",
    answer: 313,
    unit: "K"
  },
  {
    id: "pt-rubidium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Rubidium (Rb) (en kelvins, arrondi) ?",
    answer: 961,
    unit: "K"
  },
  {
    id: "pt-rubidium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Rubidium (Rb) (arrondie a 3 decimales) ?",
    answer: 85.468,
    unit: "u"
  },
  {
    id: "pt-rubidium-annee-decouverte",
    prompt: "En quelle annee l'element Rubidium (Rb) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1861,
    unit: "annee"
  },
  {
    id: "pt-rubidium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Rubidium (Rb) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-rubidium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Rubidium (Rb) (valeur usuelle) ?",
    answer: 1,
    unit: "electrons"
  },
  {
    id: "pt-rubidium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Rubidium (Rb) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-rubidium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Rubidium (Rb) ?",
    answer: 1,
    unit: "groupe"
  },
  {
    id: "pt-strontium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Strontium (Sr) ?",
    answer: 38
  },
  {
    id: "pt-strontium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Strontium (Sr) (en kelvins, arrondi) ?",
    answer: 1042,
    unit: "K"
  },
  {
    id: "pt-strontium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Strontium (Sr) (en kelvins, arrondi) ?",
    answer: 1655,
    unit: "K"
  },
  {
    id: "pt-strontium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Strontium (Sr) (arrondie a 3 decimales) ?",
    answer: 87.62,
    unit: "u"
  },
  {
    id: "pt-strontium-annee-decouverte",
    prompt: "En quelle annee l'element Strontium (Sr) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1808,
    unit: "annee"
  },
  {
    id: "pt-strontium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Strontium (Sr) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-strontium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Strontium (Sr) (valeur usuelle) ?",
    answer: 2,
    unit: "electrons"
  },
  {
    id: "pt-strontium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Strontium (Sr) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-strontium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Strontium (Sr) ?",
    answer: 2,
    unit: "groupe"
  },
  {
    id: "pt-yttrium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Yttrium (Y) ?",
    answer: 39
  },
  {
    id: "pt-yttrium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Yttrium (Y) (en kelvins, arrondi) ?",
    answer: 1799,
    unit: "K"
  },
  {
    id: "pt-yttrium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Yttrium (Y) (en kelvins, arrondi) ?",
    answer: 3609,
    unit: "K"
  },
  {
    id: "pt-yttrium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Yttrium (Y) (arrondie a 3 decimales) ?",
    answer: 88.906,
    unit: "u"
  },
  {
    id: "pt-yttrium-annee-decouverte",
    prompt: "En quelle annee l'element Yttrium (Y) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1794,
    unit: "annee"
  },
  {
    id: "pt-yttrium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Yttrium (Y) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-yttrium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Yttrium (Y) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-yttrium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Yttrium (Y) ?",
    answer: 3,
    unit: "groupe"
  },
  {
    id: "pt-zirconium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Zirconium (Zr) ?",
    answer: 40
  },
  {
    id: "pt-zirconium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Zirconium (Zr) (en kelvins, arrondi) ?",
    answer: 2125,
    unit: "K"
  },
  {
    id: "pt-zirconium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Zirconium (Zr) (en kelvins, arrondi) ?",
    answer: 4682,
    unit: "K"
  },
  {
    id: "pt-zirconium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Zirconium (Zr) (arrondie a 3 decimales) ?",
    answer: 91.224,
    unit: "u"
  },
  {
    id: "pt-zirconium-annee-decouverte",
    prompt: "En quelle annee l'element Zirconium (Zr) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1789,
    unit: "annee"
  },
  {
    id: "pt-zirconium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Zirconium (Zr) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-zirconium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Zirconium (Zr) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-zirconium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Zirconium (Zr) ?",
    answer: 4,
    unit: "groupe"
  },
  {
    id: "pt-niobium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Niobium (Nb) ?",
    answer: 41
  },
  {
    id: "pt-niobium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Niobium (Nb) (en kelvins, arrondi) ?",
    answer: 2741,
    unit: "K"
  },
  {
    id: "pt-niobium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Niobium (Nb) (en kelvins, arrondi) ?",
    answer: 5017,
    unit: "K"
  },
  {
    id: "pt-niobium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Niobium (Nb) (arrondie a 3 decimales) ?",
    answer: 92.906,
    unit: "u"
  },
  {
    id: "pt-niobium-annee-decouverte",
    prompt: "En quelle annee l'element Niobium (Nb) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1801,
    unit: "annee"
  },
  {
    id: "pt-niobium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Niobium (Nb) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-niobium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Niobium (Nb) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-niobium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Niobium (Nb) ?",
    answer: 5,
    unit: "groupe"
  },
  {
    id: "pt-molybdenum-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Molybdenum (Mo) ?",
    answer: 42
  },
  {
    id: "pt-molybdenum-fusion-k",
    prompt: "Quel est le point de fusion de l'element Molybdenum (Mo) (en kelvins, arrondi) ?",
    answer: 2890,
    unit: "K"
  },
  {
    id: "pt-molybdenum-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Molybdenum (Mo) (en kelvins, arrondi) ?",
    answer: 4912,
    unit: "K"
  },
  {
    id: "pt-molybdenum-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Molybdenum (Mo) (arrondie a 3 decimales) ?",
    answer: 95.96,
    unit: "u"
  },
  {
    id: "pt-molybdenum-annee-decouverte",
    prompt: "En quelle annee l'element Molybdenum (Mo) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1778,
    unit: "annee"
  },
  {
    id: "pt-molybdenum-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Molybdenum (Mo) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-molybdenum-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Molybdenum (Mo) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-molybdenum-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Molybdenum (Mo) ?",
    answer: 6,
    unit: "groupe"
  },
  {
    id: "pt-technetium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Technetium (Tc) ?",
    answer: 43
  },
  {
    id: "pt-technetium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Technetium (Tc) (en kelvins, arrondi) ?",
    answer: 2473,
    unit: "K"
  },
  {
    id: "pt-technetium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Technetium (Tc) (en kelvins, arrondi) ?",
    answer: 5150,
    unit: "K"
  },
  {
    id: "pt-technetium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Technetium (Tc) (arrondie a 3 decimales) ?",
    answer: 98,
    unit: "u"
  },
  {
    id: "pt-technetium-annee-decouverte",
    prompt: "En quelle annee l'element Technetium (Tc) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1937,
    unit: "annee"
  },
  {
    id: "pt-technetium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Technetium (Tc) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-technetium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Technetium (Tc) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-technetium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Technetium (Tc) ?",
    answer: 7,
    unit: "groupe"
  },
  {
    id: "pt-ruthenium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Ruthenium (Ru) ?",
    answer: 44
  },
  {
    id: "pt-ruthenium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Ruthenium (Ru) (en kelvins, arrondi) ?",
    answer: 2523,
    unit: "K"
  },
  {
    id: "pt-ruthenium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Ruthenium (Ru) (en kelvins, arrondi) ?",
    answer: 4423,
    unit: "K"
  },
  {
    id: "pt-ruthenium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Ruthenium (Ru) (arrondie a 3 decimales) ?",
    answer: 101.07,
    unit: "u"
  },
  {
    id: "pt-ruthenium-annee-decouverte",
    prompt: "En quelle annee l'element Ruthenium (Ru) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1844,
    unit: "annee"
  },
  {
    id: "pt-ruthenium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Ruthenium (Ru) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-ruthenium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Ruthenium (Ru) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-ruthenium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Ruthenium (Ru) ?",
    answer: 8,
    unit: "groupe"
  },
  {
    id: "pt-rhodium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Rhodium (Rh) ?",
    answer: 45
  },
  {
    id: "pt-rhodium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Rhodium (Rh) (en kelvins, arrondi) ?",
    answer: 2239,
    unit: "K"
  },
  {
    id: "pt-rhodium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Rhodium (Rh) (en kelvins, arrondi) ?",
    answer: 3968,
    unit: "K"
  },
  {
    id: "pt-rhodium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Rhodium (Rh) (arrondie a 3 decimales) ?",
    answer: 102.906,
    unit: "u"
  },
  {
    id: "pt-rhodium-annee-decouverte",
    prompt: "En quelle annee l'element Rhodium (Rh) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1803,
    unit: "annee"
  },
  {
    id: "pt-rhodium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Rhodium (Rh) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-rhodium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Rhodium (Rh) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-rhodium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Rhodium (Rh) ?",
    answer: 9,
    unit: "groupe"
  },
  {
    id: "pt-palladium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Palladium (Pd) ?",
    answer: 46
  },
  {
    id: "pt-palladium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Palladium (Pd) (en kelvins, arrondi) ?",
    answer: 1825,
    unit: "K"
  },
  {
    id: "pt-palladium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Palladium (Pd) (en kelvins, arrondi) ?",
    answer: 3236,
    unit: "K"
  },
  {
    id: "pt-palladium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Palladium (Pd) (arrondie a 3 decimales) ?",
    answer: 106.42,
    unit: "u"
  },
  {
    id: "pt-palladium-annee-decouverte",
    prompt: "En quelle annee l'element Palladium (Pd) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1803,
    unit: "annee"
  },
  {
    id: "pt-palladium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Palladium (Pd) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-palladium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Palladium (Pd) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-palladium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Palladium (Pd) ?",
    answer: 10,
    unit: "groupe"
  },
  {
    id: "pt-silver-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Silver (Ag) ?",
    answer: 47
  },
  {
    id: "pt-silver-fusion-k",
    prompt: "Quel est le point de fusion de l'element Silver (Ag) (en kelvins, arrondi) ?",
    answer: 1234,
    unit: "K"
  },
  {
    id: "pt-silver-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Silver (Ag) (en kelvins, arrondi) ?",
    answer: 2435,
    unit: "K"
  },
  {
    id: "pt-silver-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Silver (Ag) (arrondie a 3 decimales) ?",
    answer: 107.868,
    unit: "u"
  },
  {
    id: "pt-silver-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Silver (Ag) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-silver-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Silver (Ag) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-silver-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Silver (Ag) ?",
    answer: 11,
    unit: "groupe"
  },
  {
    id: "pt-cadmium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Cadmium (Cd) ?",
    answer: 48
  },
  {
    id: "pt-cadmium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Cadmium (Cd) (en kelvins, arrondi) ?",
    answer: 594,
    unit: "K"
  },
  {
    id: "pt-cadmium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Cadmium (Cd) (en kelvins, arrondi) ?",
    answer: 1040,
    unit: "K"
  },
  {
    id: "pt-cadmium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Cadmium (Cd) (arrondie a 3 decimales) ?",
    answer: 112.411,
    unit: "u"
  },
  {
    id: "pt-cadmium-annee-decouverte",
    prompt: "En quelle annee l'element Cadmium (Cd) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1817,
    unit: "annee"
  },
  {
    id: "pt-cadmium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Cadmium (Cd) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-cadmium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Cadmium (Cd) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-cadmium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Cadmium (Cd) ?",
    answer: 12,
    unit: "groupe"
  },
  {
    id: "pt-indium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Indium (In) ?",
    answer: 49
  },
  {
    id: "pt-indium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Indium (In) (en kelvins, arrondi) ?",
    answer: 430,
    unit: "K"
  },
  {
    id: "pt-indium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Indium (In) (en kelvins, arrondi) ?",
    answer: 2345,
    unit: "K"
  },
  {
    id: "pt-indium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Indium (In) (arrondie a 3 decimales) ?",
    answer: 114.818,
    unit: "u"
  },
  {
    id: "pt-indium-annee-decouverte",
    prompt: "En quelle annee l'element Indium (In) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1863,
    unit: "annee"
  },
  {
    id: "pt-indium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Indium (In) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-indium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Indium (In) (valeur usuelle) ?",
    answer: 3,
    unit: "electrons"
  },
  {
    id: "pt-indium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Indium (In) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-indium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Indium (In) ?",
    answer: 13,
    unit: "groupe"
  },
  {
    id: "pt-tin-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Tin (Sn) ?",
    answer: 50
  },
  {
    id: "pt-tin-fusion-k",
    prompt: "Quel est le point de fusion de l'element Tin (Sn) (en kelvins, arrondi) ?",
    answer: 505,
    unit: "K"
  },
  {
    id: "pt-tin-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Tin (Sn) (en kelvins, arrondi) ?",
    answer: 2875,
    unit: "K"
  },
  {
    id: "pt-tin-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Tin (Sn) (arrondie a 3 decimales) ?",
    answer: 118.71,
    unit: "u"
  },
  {
    id: "pt-tin-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Tin (Sn) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-tin-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Tin (Sn) (valeur usuelle) ?",
    answer: 4,
    unit: "electrons"
  },
  {
    id: "pt-tin-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Tin (Sn) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-tin-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Tin (Sn) ?",
    answer: 14,
    unit: "groupe"
  },
  {
    id: "pt-antimony-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Antimony (Sb) ?",
    answer: 51
  },
  {
    id: "pt-antimony-fusion-k",
    prompt: "Quel est le point de fusion de l'element Antimony (Sb) (en kelvins, arrondi) ?",
    answer: 904,
    unit: "K"
  },
  {
    id: "pt-antimony-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Antimony (Sb) (en kelvins, arrondi) ?",
    answer: 1860,
    unit: "K"
  },
  {
    id: "pt-antimony-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Antimony (Sb) (arrondie a 3 decimales) ?",
    answer: 121.76,
    unit: "u"
  },
  {
    id: "pt-antimony-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Antimony (Sb) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-antimony-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Antimony (Sb) (valeur usuelle) ?",
    answer: 5,
    unit: "electrons"
  },
  {
    id: "pt-antimony-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Antimony (Sb) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-antimony-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Antimony (Sb) ?",
    answer: 15,
    unit: "groupe"
  },
  {
    id: "pt-tellurium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Tellurium (Te) ?",
    answer: 52
  },
  {
    id: "pt-tellurium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Tellurium (Te) (en kelvins, arrondi) ?",
    answer: 723,
    unit: "K"
  },
  {
    id: "pt-tellurium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Tellurium (Te) (en kelvins, arrondi) ?",
    answer: 1261,
    unit: "K"
  },
  {
    id: "pt-tellurium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Tellurium (Te) (arrondie a 3 decimales) ?",
    answer: 127.6,
    unit: "u"
  },
  {
    id: "pt-tellurium-annee-decouverte",
    prompt: "En quelle annee l'element Tellurium (Te) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1782,
    unit: "annee"
  },
  {
    id: "pt-tellurium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Tellurium (Te) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-tellurium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Tellurium (Te) (valeur usuelle) ?",
    answer: 6,
    unit: "electrons"
  },
  {
    id: "pt-tellurium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Tellurium (Te) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-tellurium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Tellurium (Te) ?",
    answer: 16,
    unit: "groupe"
  },
  {
    id: "pt-iodine-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Iodine (I) ?",
    answer: 53
  },
  {
    id: "pt-iodine-fusion-k",
    prompt: "Quel est le point de fusion de l'element Iodine (I) (en kelvins, arrondi) ?",
    answer: 387,
    unit: "K"
  },
  {
    id: "pt-iodine-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Iodine (I) (en kelvins, arrondi) ?",
    answer: 457,
    unit: "K"
  },
  {
    id: "pt-iodine-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Iodine (I) (arrondie a 3 decimales) ?",
    answer: 126.904,
    unit: "u"
  },
  {
    id: "pt-iodine-annee-decouverte",
    prompt: "En quelle annee l'element Iodine (I) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1811,
    unit: "annee"
  },
  {
    id: "pt-iodine-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Iodine (I) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-iodine-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Iodine (I) (valeur usuelle) ?",
    answer: 7,
    unit: "electrons"
  },
  {
    id: "pt-iodine-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Iodine (I) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-iodine-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Iodine (I) ?",
    answer: 17,
    unit: "groupe"
  },
  {
    id: "pt-xenon-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Xenon (Xe) ?",
    answer: 54
  },
  {
    id: "pt-xenon-fusion-k",
    prompt: "Quel est le point de fusion de l'element Xenon (Xe) (en kelvins, arrondi) ?",
    answer: 161,
    unit: "K"
  },
  {
    id: "pt-xenon-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Xenon (Xe) (en kelvins, arrondi) ?",
    answer: 165,
    unit: "K"
  },
  {
    id: "pt-xenon-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Xenon (Xe) (arrondie a 3 decimales) ?",
    answer: 131.293,
    unit: "u"
  },
  {
    id: "pt-xenon-annee-decouverte",
    prompt: "En quelle annee l'element Xenon (Xe) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1898,
    unit: "annee"
  },
  {
    id: "pt-xenon-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Xenon (Xe) ?",
    answer: 5,
    unit: "couches"
  },
  {
    id: "pt-xenon-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Xenon (Xe) (valeur usuelle) ?",
    answer: 8,
    unit: "electrons"
  },
  {
    id: "pt-xenon-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Xenon (Xe) ?",
    answer: 5,
    unit: "periode"
  },
  {
    id: "pt-xenon-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Xenon (Xe) ?",
    answer: 18,
    unit: "groupe"
  },
  {
    id: "pt-cesium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Cesium (Cs) ?",
    answer: 55
  },
  {
    id: "pt-cesium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Cesium (Cs) (en kelvins, arrondi) ?",
    answer: 302,
    unit: "K"
  },
  {
    id: "pt-cesium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Cesium (Cs) (en kelvins, arrondi) ?",
    answer: 944,
    unit: "K"
  },
  {
    id: "pt-cesium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Cesium (Cs) (arrondie a 3 decimales) ?",
    answer: 132.905,
    unit: "u"
  },
  {
    id: "pt-cesium-annee-decouverte",
    prompt: "En quelle annee l'element Cesium (Cs) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1860,
    unit: "annee"
  },
  {
    id: "pt-cesium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Cesium (Cs) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-cesium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Cesium (Cs) (valeur usuelle) ?",
    answer: 1,
    unit: "electrons"
  },
  {
    id: "pt-cesium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Cesium (Cs) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-cesium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Cesium (Cs) ?",
    answer: 1,
    unit: "groupe"
  },
  {
    id: "pt-barium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Barium (Ba) ?",
    answer: 56
  },
  {
    id: "pt-barium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Barium (Ba) (en kelvins, arrondi) ?",
    answer: 1002,
    unit: "K"
  },
  {
    id: "pt-barium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Barium (Ba) (en kelvins, arrondi) ?",
    answer: 2170,
    unit: "K"
  },
  {
    id: "pt-barium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Barium (Ba) (arrondie a 3 decimales) ?",
    answer: 137.327,
    unit: "u"
  },
  {
    id: "pt-barium-annee-decouverte",
    prompt: "En quelle annee l'element Barium (Ba) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1808,
    unit: "annee"
  },
  {
    id: "pt-barium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Barium (Ba) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-barium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Barium (Ba) (valeur usuelle) ?",
    answer: 2,
    unit: "electrons"
  },
  {
    id: "pt-barium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Barium (Ba) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-barium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Barium (Ba) ?",
    answer: 2,
    unit: "groupe"
  },
  {
    id: "pt-lanthanum-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Lanthanum (La) ?",
    answer: 57
  },
  {
    id: "pt-lanthanum-fusion-k",
    prompt: "Quel est le point de fusion de l'element Lanthanum (La) (en kelvins, arrondi) ?",
    answer: 1193,
    unit: "K"
  },
  {
    id: "pt-lanthanum-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Lanthanum (La) (en kelvins, arrondi) ?",
    answer: 3737,
    unit: "K"
  },
  {
    id: "pt-lanthanum-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Lanthanum (La) (arrondie a 3 decimales) ?",
    answer: 138.905,
    unit: "u"
  },
  {
    id: "pt-lanthanum-annee-decouverte",
    prompt: "En quelle annee l'element Lanthanum (La) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1839,
    unit: "annee"
  },
  {
    id: "pt-lanthanum-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Lanthanum (La) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-lanthanum-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Lanthanum (La) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-lanthanum-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Lanthanum (La) ?",
    answer: 3,
    unit: "groupe"
  },
  {
    id: "pt-cerium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Cerium (Ce) ?",
    answer: 58
  },
  {
    id: "pt-cerium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Cerium (Ce) (en kelvins, arrondi) ?",
    answer: 1071,
    unit: "K"
  },
  {
    id: "pt-cerium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Cerium (Ce) (en kelvins, arrondi) ?",
    answer: 3716,
    unit: "K"
  },
  {
    id: "pt-cerium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Cerium (Ce) (arrondie a 3 decimales) ?",
    answer: 140.116,
    unit: "u"
  },
  {
    id: "pt-cerium-annee-decouverte",
    prompt: "En quelle annee l'element Cerium (Ce) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1803,
    unit: "annee"
  },
  {
    id: "pt-cerium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Cerium (Ce) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-cerium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Cerium (Ce) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-praseodymium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Praseodymium (Pr) ?",
    answer: 59
  },
  {
    id: "pt-praseodymium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Praseodymium (Pr) (en kelvins, arrondi) ?",
    answer: 1204,
    unit: "K"
  },
  {
    id: "pt-praseodymium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Praseodymium (Pr) (en kelvins, arrondi) ?",
    answer: 3793,
    unit: "K"
  },
  {
    id: "pt-praseodymium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Praseodymium (Pr) (arrondie a 3 decimales) ?",
    answer: 140.908,
    unit: "u"
  },
  {
    id: "pt-praseodymium-annee-decouverte",
    prompt: "En quelle annee l'element Praseodymium (Pr) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1885,
    unit: "annee"
  },
  {
    id: "pt-praseodymium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Praseodymium (Pr) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-praseodymium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Praseodymium (Pr) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-neodymium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Neodymium (Nd) ?",
    answer: 60
  },
  {
    id: "pt-neodymium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Neodymium (Nd) (en kelvins, arrondi) ?",
    answer: 1289,
    unit: "K"
  },
  {
    id: "pt-neodymium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Neodymium (Nd) (en kelvins, arrondi) ?",
    answer: 3347,
    unit: "K"
  },
  {
    id: "pt-neodymium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Neodymium (Nd) (arrondie a 3 decimales) ?",
    answer: 144.242,
    unit: "u"
  },
  {
    id: "pt-neodymium-annee-decouverte",
    prompt: "En quelle annee l'element Neodymium (Nd) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1885,
    unit: "annee"
  },
  {
    id: "pt-neodymium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Neodymium (Nd) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-neodymium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Neodymium (Nd) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-promethium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Promethium (Pm) ?",
    answer: 61
  },
  {
    id: "pt-promethium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Promethium (Pm) (en kelvins, arrondi) ?",
    answer: 1204,
    unit: "K"
  },
  {
    id: "pt-promethium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Promethium (Pm) (en kelvins, arrondi) ?",
    answer: 3273,
    unit: "K"
  },
  {
    id: "pt-promethium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Promethium (Pm) (arrondie a 3 decimales) ?",
    answer: 145,
    unit: "u"
  },
  {
    id: "pt-promethium-annee-decouverte",
    prompt: "En quelle annee l'element Promethium (Pm) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1945,
    unit: "annee"
  },
  {
    id: "pt-promethium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Promethium (Pm) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-promethium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Promethium (Pm) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-samarium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Samarium (Sm) ?",
    answer: 62
  },
  {
    id: "pt-samarium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Samarium (Sm) (en kelvins, arrondi) ?",
    answer: 1345,
    unit: "K"
  },
  {
    id: "pt-samarium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Samarium (Sm) (en kelvins, arrondi) ?",
    answer: 2067,
    unit: "K"
  },
  {
    id: "pt-samarium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Samarium (Sm) (arrondie a 3 decimales) ?",
    answer: 150.36,
    unit: "u"
  },
  {
    id: "pt-samarium-annee-decouverte",
    prompt: "En quelle annee l'element Samarium (Sm) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1879,
    unit: "annee"
  },
  {
    id: "pt-samarium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Samarium (Sm) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-samarium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Samarium (Sm) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-europium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Europium (Eu) ?",
    answer: 63
  },
  {
    id: "pt-europium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Europium (Eu) (en kelvins, arrondi) ?",
    answer: 1095,
    unit: "K"
  },
  {
    id: "pt-europium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Europium (Eu) (en kelvins, arrondi) ?",
    answer: 1802,
    unit: "K"
  },
  {
    id: "pt-europium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Europium (Eu) (arrondie a 3 decimales) ?",
    answer: 151.964,
    unit: "u"
  },
  {
    id: "pt-europium-annee-decouverte",
    prompt: "En quelle annee l'element Europium (Eu) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1901,
    unit: "annee"
  },
  {
    id: "pt-europium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Europium (Eu) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-europium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Europium (Eu) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-gadolinium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Gadolinium (Gd) ?",
    answer: 64
  },
  {
    id: "pt-gadolinium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Gadolinium (Gd) (en kelvins, arrondi) ?",
    answer: 1585,
    unit: "K"
  },
  {
    id: "pt-gadolinium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Gadolinium (Gd) (en kelvins, arrondi) ?",
    answer: 3546,
    unit: "K"
  },
  {
    id: "pt-gadolinium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Gadolinium (Gd) (arrondie a 3 decimales) ?",
    answer: 157.25,
    unit: "u"
  },
  {
    id: "pt-gadolinium-annee-decouverte",
    prompt: "En quelle annee l'element Gadolinium (Gd) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1880,
    unit: "annee"
  },
  {
    id: "pt-gadolinium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Gadolinium (Gd) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-gadolinium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Gadolinium (Gd) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-terbium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Terbium (Tb) ?",
    answer: 65
  },
  {
    id: "pt-terbium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Terbium (Tb) (en kelvins, arrondi) ?",
    answer: 1630,
    unit: "K"
  },
  {
    id: "pt-terbium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Terbium (Tb) (en kelvins, arrondi) ?",
    answer: 3503,
    unit: "K"
  },
  {
    id: "pt-terbium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Terbium (Tb) (arrondie a 3 decimales) ?",
    answer: 158.925,
    unit: "u"
  },
  {
    id: "pt-terbium-annee-decouverte",
    prompt: "En quelle annee l'element Terbium (Tb) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1843,
    unit: "annee"
  },
  {
    id: "pt-terbium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Terbium (Tb) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-terbium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Terbium (Tb) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-dysprosium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Dysprosium (Dy) ?",
    answer: 66
  },
  {
    id: "pt-dysprosium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Dysprosium (Dy) (en kelvins, arrondi) ?",
    answer: 1680,
    unit: "K"
  },
  {
    id: "pt-dysprosium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Dysprosium (Dy) (en kelvins, arrondi) ?",
    answer: 2840,
    unit: "K"
  },
  {
    id: "pt-dysprosium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Dysprosium (Dy) (arrondie a 3 decimales) ?",
    answer: 162.5,
    unit: "u"
  },
  {
    id: "pt-dysprosium-annee-decouverte",
    prompt: "En quelle annee l'element Dysprosium (Dy) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1886,
    unit: "annee"
  },
  {
    id: "pt-dysprosium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Dysprosium (Dy) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-dysprosium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Dysprosium (Dy) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-holmium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Holmium (Ho) ?",
    answer: 67
  },
  {
    id: "pt-holmium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Holmium (Ho) (en kelvins, arrondi) ?",
    answer: 1743,
    unit: "K"
  },
  {
    id: "pt-holmium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Holmium (Ho) (en kelvins, arrondi) ?",
    answer: 2993,
    unit: "K"
  },
  {
    id: "pt-holmium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Holmium (Ho) (arrondie a 3 decimales) ?",
    answer: 164.93,
    unit: "u"
  },
  {
    id: "pt-holmium-annee-decouverte",
    prompt: "En quelle annee l'element Holmium (Ho) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1878,
    unit: "annee"
  },
  {
    id: "pt-holmium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Holmium (Ho) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-holmium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Holmium (Ho) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-erbium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Erbium (Er) ?",
    answer: 68
  },
  {
    id: "pt-erbium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Erbium (Er) (en kelvins, arrondi) ?",
    answer: 1795,
    unit: "K"
  },
  {
    id: "pt-erbium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Erbium (Er) (en kelvins, arrondi) ?",
    answer: 3503,
    unit: "K"
  },
  {
    id: "pt-erbium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Erbium (Er) (arrondie a 3 decimales) ?",
    answer: 167.259,
    unit: "u"
  },
  {
    id: "pt-erbium-annee-decouverte",
    prompt: "En quelle annee l'element Erbium (Er) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1843,
    unit: "annee"
  },
  {
    id: "pt-erbium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Erbium (Er) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-erbium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Erbium (Er) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-thulium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Thulium (Tm) ?",
    answer: 69
  },
  {
    id: "pt-thulium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Thulium (Tm) (en kelvins, arrondi) ?",
    answer: 1818,
    unit: "K"
  },
  {
    id: "pt-thulium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Thulium (Tm) (en kelvins, arrondi) ?",
    answer: 2223,
    unit: "K"
  },
  {
    id: "pt-thulium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Thulium (Tm) (arrondie a 3 decimales) ?",
    answer: 168.934,
    unit: "u"
  },
  {
    id: "pt-thulium-annee-decouverte",
    prompt: "En quelle annee l'element Thulium (Tm) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1879,
    unit: "annee"
  },
  {
    id: "pt-thulium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Thulium (Tm) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-thulium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Thulium (Tm) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-ytterbium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Ytterbium (Yb) ?",
    answer: 70
  },
  {
    id: "pt-ytterbium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Ytterbium (Yb) (en kelvins, arrondi) ?",
    answer: 1097,
    unit: "K"
  },
  {
    id: "pt-ytterbium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Ytterbium (Yb) (en kelvins, arrondi) ?",
    answer: 1469,
    unit: "K"
  },
  {
    id: "pt-ytterbium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Ytterbium (Yb) (arrondie a 3 decimales) ?",
    answer: 173.054,
    unit: "u"
  },
  {
    id: "pt-ytterbium-annee-decouverte",
    prompt: "En quelle annee l'element Ytterbium (Yb) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1878,
    unit: "annee"
  },
  {
    id: "pt-ytterbium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Ytterbium (Yb) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-ytterbium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Ytterbium (Yb) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-lutetium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Lutetium (Lu) ?",
    answer: 71
  },
  {
    id: "pt-lutetium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Lutetium (Lu) (en kelvins, arrondi) ?",
    answer: 1936,
    unit: "K"
  },
  {
    id: "pt-lutetium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Lutetium (Lu) (en kelvins, arrondi) ?",
    answer: 3675,
    unit: "K"
  },
  {
    id: "pt-lutetium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Lutetium (Lu) (arrondie a 3 decimales) ?",
    answer: 174.967,
    unit: "u"
  },
  {
    id: "pt-lutetium-annee-decouverte",
    prompt: "En quelle annee l'element Lutetium (Lu) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1907,
    unit: "annee"
  },
  {
    id: "pt-lutetium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Lutetium (Lu) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-lutetium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Lutetium (Lu) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-hafnium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Hafnium (Hf) ?",
    answer: 72
  },
  {
    id: "pt-hafnium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Hafnium (Hf) (en kelvins, arrondi) ?",
    answer: 2500,
    unit: "K"
  },
  {
    id: "pt-hafnium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Hafnium (Hf) (en kelvins, arrondi) ?",
    answer: 4876,
    unit: "K"
  },
  {
    id: "pt-hafnium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Hafnium (Hf) (arrondie a 3 decimales) ?",
    answer: 178.49,
    unit: "u"
  },
  {
    id: "pt-hafnium-annee-decouverte",
    prompt: "En quelle annee l'element Hafnium (Hf) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1923,
    unit: "annee"
  },
  {
    id: "pt-hafnium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Hafnium (Hf) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-hafnium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Hafnium (Hf) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-hafnium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Hafnium (Hf) ?",
    answer: 4,
    unit: "groupe"
  },
  {
    id: "pt-tantalum-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Tantalum (Ta) ?",
    answer: 73
  },
  {
    id: "pt-tantalum-fusion-k",
    prompt: "Quel est le point de fusion de l'element Tantalum (Ta) (en kelvins, arrondi) ?",
    answer: 3269,
    unit: "K"
  },
  {
    id: "pt-tantalum-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Tantalum (Ta) (en kelvins, arrondi) ?",
    answer: 5731,
    unit: "K"
  },
  {
    id: "pt-tantalum-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Tantalum (Ta) (arrondie a 3 decimales) ?",
    answer: 180.948,
    unit: "u"
  },
  {
    id: "pt-tantalum-annee-decouverte",
    prompt: "En quelle annee l'element Tantalum (Ta) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1801,
    unit: "annee"
  },
  {
    id: "pt-tantalum-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Tantalum (Ta) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-tantalum-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Tantalum (Ta) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-tantalum-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Tantalum (Ta) ?",
    answer: 5,
    unit: "groupe"
  },
  {
    id: "pt-wolfram-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Wolfram (W) ?",
    answer: 74
  },
  {
    id: "pt-wolfram-fusion-k",
    prompt: "Quel est le point de fusion de l'element Wolfram (W) (en kelvins, arrondi) ?",
    answer: 3680,
    unit: "K"
  },
  {
    id: "pt-wolfram-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Wolfram (W) (en kelvins, arrondi) ?",
    answer: 5828,
    unit: "K"
  },
  {
    id: "pt-wolfram-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Wolfram (W) (arrondie a 3 decimales) ?",
    answer: 183.84,
    unit: "u"
  },
  {
    id: "pt-wolfram-annee-decouverte",
    prompt: "En quelle annee l'element Wolfram (W) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1783,
    unit: "annee"
  },
  {
    id: "pt-wolfram-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Wolfram (W) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-wolfram-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Wolfram (W) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-wolfram-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Wolfram (W) ?",
    answer: 6,
    unit: "groupe"
  },
  {
    id: "pt-rhenium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Rhenium (Re) ?",
    answer: 75
  },
  {
    id: "pt-rhenium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Rhenium (Re) (en kelvins, arrondi) ?",
    answer: 3453,
    unit: "K"
  },
  {
    id: "pt-rhenium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Rhenium (Re) (en kelvins, arrondi) ?",
    answer: 5869,
    unit: "K"
  },
  {
    id: "pt-rhenium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Rhenium (Re) (arrondie a 3 decimales) ?",
    answer: 186.207,
    unit: "u"
  },
  {
    id: "pt-rhenium-annee-decouverte",
    prompt: "En quelle annee l'element Rhenium (Re) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1925,
    unit: "annee"
  },
  {
    id: "pt-rhenium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Rhenium (Re) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-rhenium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Rhenium (Re) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-rhenium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Rhenium (Re) ?",
    answer: 7,
    unit: "groupe"
  },
  {
    id: "pt-osmium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Osmium (Os) ?",
    answer: 76
  },
  {
    id: "pt-osmium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Osmium (Os) (en kelvins, arrondi) ?",
    answer: 3300,
    unit: "K"
  },
  {
    id: "pt-osmium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Osmium (Os) (en kelvins, arrondi) ?",
    answer: 5285,
    unit: "K"
  },
  {
    id: "pt-osmium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Osmium (Os) (arrondie a 3 decimales) ?",
    answer: 190.23,
    unit: "u"
  },
  {
    id: "pt-osmium-annee-decouverte",
    prompt: "En quelle annee l'element Osmium (Os) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1803,
    unit: "annee"
  },
  {
    id: "pt-osmium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Osmium (Os) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-osmium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Osmium (Os) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-osmium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Osmium (Os) ?",
    answer: 8,
    unit: "groupe"
  },
  {
    id: "pt-iridium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Iridium (Ir) ?",
    answer: 77
  },
  {
    id: "pt-iridium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Iridium (Ir) (en kelvins, arrondi) ?",
    answer: 2716,
    unit: "K"
  },
  {
    id: "pt-iridium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Iridium (Ir) (en kelvins, arrondi) ?",
    answer: 4701,
    unit: "K"
  },
  {
    id: "pt-iridium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Iridium (Ir) (arrondie a 3 decimales) ?",
    answer: 192.217,
    unit: "u"
  },
  {
    id: "pt-iridium-annee-decouverte",
    prompt: "En quelle annee l'element Iridium (Ir) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1804,
    unit: "annee"
  },
  {
    id: "pt-iridium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Iridium (Ir) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-iridium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Iridium (Ir) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-iridium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Iridium (Ir) ?",
    answer: 9,
    unit: "groupe"
  },
  {
    id: "pt-platinum-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Platinum (Pt) ?",
    answer: 78
  },
  {
    id: "pt-platinum-fusion-k",
    prompt: "Quel est le point de fusion de l'element Platinum (Pt) (en kelvins, arrondi) ?",
    answer: 2045,
    unit: "K"
  },
  {
    id: "pt-platinum-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Platinum (Pt) (en kelvins, arrondi) ?",
    answer: 4098,
    unit: "K"
  },
  {
    id: "pt-platinum-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Platinum (Pt) (arrondie a 3 decimales) ?",
    answer: 195.084,
    unit: "u"
  },
  {
    id: "pt-platinum-annee-decouverte",
    prompt: "En quelle annee l'element Platinum (Pt) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1735,
    unit: "annee"
  },
  {
    id: "pt-platinum-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Platinum (Pt) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-platinum-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Platinum (Pt) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-platinum-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Platinum (Pt) ?",
    answer: 10,
    unit: "groupe"
  },
  {
    id: "pt-gold-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Gold (Au) ?",
    answer: 79
  },
  {
    id: "pt-gold-fusion-k",
    prompt: "Quel est le point de fusion de l'element Gold (Au) (en kelvins, arrondi) ?",
    answer: 1338,
    unit: "K"
  },
  {
    id: "pt-gold-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Gold (Au) (en kelvins, arrondi) ?",
    answer: 3129,
    unit: "K"
  },
  {
    id: "pt-gold-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Gold (Au) (arrondie a 3 decimales) ?",
    answer: 196.967,
    unit: "u"
  },
  {
    id: "pt-gold-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Gold (Au) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-gold-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Gold (Au) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-gold-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Gold (Au) ?",
    answer: 11,
    unit: "groupe"
  },
  {
    id: "pt-mercury-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Mercury (Hg) ?",
    answer: 80
  },
  {
    id: "pt-mercury-fusion-k",
    prompt: "Quel est le point de fusion de l'element Mercury (Hg) (en kelvins, arrondi) ?",
    answer: 234,
    unit: "K"
  },
  {
    id: "pt-mercury-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Mercury (Hg) (en kelvins, arrondi) ?",
    answer: 630,
    unit: "K"
  },
  {
    id: "pt-mercury-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Mercury (Hg) (arrondie a 3 decimales) ?",
    answer: 200.59,
    unit: "u"
  },
  {
    id: "pt-mercury-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Mercury (Hg) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-mercury-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Mercury (Hg) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-mercury-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Mercury (Hg) ?",
    answer: 12,
    unit: "groupe"
  },
  {
    id: "pt-thallium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Thallium (Tl) ?",
    answer: 81
  },
  {
    id: "pt-thallium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Thallium (Tl) (en kelvins, arrondi) ?",
    answer: 577,
    unit: "K"
  },
  {
    id: "pt-thallium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Thallium (Tl) (en kelvins, arrondi) ?",
    answer: 1746,
    unit: "K"
  },
  {
    id: "pt-thallium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Thallium (Tl) (arrondie a 3 decimales) ?",
    answer: 204.383,
    unit: "u"
  },
  {
    id: "pt-thallium-annee-decouverte",
    prompt: "En quelle annee l'element Thallium (Tl) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1861,
    unit: "annee"
  },
  {
    id: "pt-thallium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Thallium (Tl) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-thallium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Thallium (Tl) (valeur usuelle) ?",
    answer: 3,
    unit: "electrons"
  },
  {
    id: "pt-thallium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Thallium (Tl) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-thallium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Thallium (Tl) ?",
    answer: 13,
    unit: "groupe"
  },
  {
    id: "pt-lead-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Lead (Pb) ?",
    answer: 82
  },
  {
    id: "pt-lead-fusion-k",
    prompt: "Quel est le point de fusion de l'element Lead (Pb) (en kelvins, arrondi) ?",
    answer: 601,
    unit: "K"
  },
  {
    id: "pt-lead-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Lead (Pb) (en kelvins, arrondi) ?",
    answer: 2022,
    unit: "K"
  },
  {
    id: "pt-lead-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Lead (Pb) (arrondie a 3 decimales) ?",
    answer: 207.2,
    unit: "u"
  },
  {
    id: "pt-lead-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Lead (Pb) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-lead-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Lead (Pb) (valeur usuelle) ?",
    answer: 4,
    unit: "electrons"
  },
  {
    id: "pt-lead-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Lead (Pb) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-lead-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Lead (Pb) ?",
    answer: 14,
    unit: "groupe"
  },
  {
    id: "pt-bismuth-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Bismuth (Bi) ?",
    answer: 83
  },
  {
    id: "pt-bismuth-fusion-k",
    prompt: "Quel est le point de fusion de l'element Bismuth (Bi) (en kelvins, arrondi) ?",
    answer: 545,
    unit: "K"
  },
  {
    id: "pt-bismuth-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Bismuth (Bi) (en kelvins, arrondi) ?",
    answer: 1837,
    unit: "K"
  },
  {
    id: "pt-bismuth-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Bismuth (Bi) (arrondie a 3 decimales) ?",
    answer: 208.98,
    unit: "u"
  },
  {
    id: "pt-bismuth-annee-decouverte",
    prompt: "En quelle annee l'element Bismuth (Bi) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1753,
    unit: "annee"
  },
  {
    id: "pt-bismuth-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Bismuth (Bi) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-bismuth-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Bismuth (Bi) (valeur usuelle) ?",
    answer: 5,
    unit: "electrons"
  },
  {
    id: "pt-bismuth-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Bismuth (Bi) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-bismuth-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Bismuth (Bi) ?",
    answer: 15,
    unit: "groupe"
  },
  {
    id: "pt-polonium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Polonium (Po) ?",
    answer: 84
  },
  {
    id: "pt-polonium-fusion-k",
    prompt: "Quel est le point de fusion de l'element Polonium (Po) (en kelvins, arrondi) ?",
    answer: 527,
    unit: "K"
  },
  {
    id: "pt-polonium-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Polonium (Po) (en kelvins, arrondi) ?",
    answer: 1235,
    unit: "K"
  },
  {
    id: "pt-polonium-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Polonium (Po) (arrondie a 3 decimales) ?",
    answer: 210,
    unit: "u"
  },
  {
    id: "pt-polonium-annee-decouverte",
    prompt: "En quelle annee l'element Polonium (Po) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1898,
    unit: "annee"
  },
  {
    id: "pt-polonium-couches-electroniques",
    prompt: "Combien de couches electroniques a l'element Polonium (Po) ?",
    answer: 6,
    unit: "couches"
  },
  {
    id: "pt-polonium-valence-electrons",
    prompt: "Combien d'electrons de valence a l'element Polonium (Po) (valeur usuelle) ?",
    answer: 6,
    unit: "electrons"
  },
  {
    id: "pt-polonium-periode",
    prompt: "Dans quelle periode du tableau periodique se trouve l'element Polonium (Po) ?",
    answer: 6,
    unit: "periode"
  },
  {
    id: "pt-polonium-groupe",
    prompt: "Dans quel groupe du tableau periodique se trouve l'element Polonium (Po) ?",
    answer: 16,
    unit: "groupe"
  },
  {
    id: "pt-astatine-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Astatine (At) ?",
    answer: 85
  },
  {
    id: "pt-astatine-fusion-k",
    prompt: "Quel est le point de fusion de l'element Astatine (At) (en kelvins, arrondi) ?",
    answer: 575,
    unit: "K"
  },
  {
    id: "pt-astatine-ebullition-k",
    prompt: "Quel est le point d'ebullition de l'element Astatine (At) (en kelvins, arrondi) ?",
    answer: 610,
    unit: "K"
  },
  {
    id: "pt-astatine-masse-atomique",
    prompt: "Quelle est la masse atomique de l'element Astatine (At) (arrondie a 3 decimales) ?",
    answer: 210,
    unit: "u"
  },
  {
    id: "pt-astatine-annee-decouverte",
    prompt: "En quelle annee l'element Astatine (At) a-t-il ete isole ou decrit (selon les references) ?",
    answer: 1940,
    unit: "annee"
  }
];

export const DEFAULT_QUESTION = QUESTION_BANK[0];