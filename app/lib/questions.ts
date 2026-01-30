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
    id: "mur-berlin",
    prompt: "En quelle annee est tombee la chute du mur de Berlin ?",
    answer: 1989,
    unit: "annee"
  },
  {
    id: "terre-lune",
    prompt: "Quelle est la distance moyenne Terre-Lune ?",
    answer: 384400,
    unit: "km"
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
    id: "pt-helium-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Helium (He) ?",
    answer: 2
  },

  {
    id: "pt-oxygen-numero-atomique",
    prompt: "Quel est le numero atomique de l'element Oxygen (O) ?",
    answer: 8
  },
  {
    id: "culture-empire-romain-occident",
    prompt: "En quelle annee l'Empire romain d'Occident est-il traditionnellement tombe ?",
    answer: 476,
    unit: "annee"
  },
  {
    id: "culture-rome-fondation",
    prompt: "En quelle annee traditionnelle la ville de Rome est-elle fondee ?",
    answer: -753,
    unit: "annee"
  },
  {
    id: "culture-charlemagne-sacre",
    prompt: "En quelle annee Charlemagne a-t-il ete sacre empereur ?",
    answer: 800,
    unit: "annee"
  },
  {
    id: "culture-hastings",
    prompt: "En quelle annee a eu lieu la bataille d'Hastings ?",
    answer: 1066,
    unit: "annee"
  },
  {
    id: "culture-magna-carta",
    prompt: "En quelle annee la Magna Carta a-t-elle ete scellee ?",
    answer: 1215,
    unit: "annee"
  },
  {
    id: "culture-constantinople",
    prompt: "En quelle annee Constantinople est-elle tombee ?",
    answer: 1453,
    unit: "annee"
  },
  {
    id: "culture-imprimerie-gutenberg",
    prompt: "En quelle annee approximative Gutenberg met-il au point l'imprimerie a caracteres mobiles (approx.) ?",
    answer: 1450,
    unit: "annee"
  },
  {
    id: "culture-decouverte-amerique",
    prompt: "En quelle annee Christophe Colomb atteint-il les Ameriques ?",
    answer: 1492,
    unit: "annee"
  },
  {
    id: "culture-reforme-luther",
    prompt: "En quelle annee Luther affiche-t-il ses 95 theses ?",
    answer: 1517,
    unit: "annee"
  },
  {
    id: "culture-armada",
    prompt: "En quelle annee l'Invincible Armada est-elle vaincue ?",
    answer: 1588,
    unit: "annee"
  },
  {
    id: "culture-revolution-francaise",
    prompt: "En quelle annee debute la Revolution francaise ?",
    answer: 1789,
    unit: "annee"
  },
  {
    id: "culture-prise-bastille",
    prompt: "En quelle annee la prise de la Bastille a-t-elle eu lieu ?",
    answer: 1789,
    unit: "annee"
  },
  {
    id: "culture-ddhc",
    prompt: "En quelle annee la Declaration des droits de l'homme et du citoyen est-elle adoptee ?",
    answer: 1789,
    unit: "annee"
  },
  {
    id: "culture-napoleon-empereur",
    prompt: "En quelle annee Napoleon Ier devient-il empereur ?",
    answer: 1804,
    unit: "annee"
  },
  {
    id: "culture-abolition-esclavage-fr",
    prompt: "En quelle annee l'esclavage est-il aboli en France (deuxieme abolition) ?",
    answer: 1848,
    unit: "annee"
  },
  {
    id: "culture-guerre-14-18-debut",
    prompt: "En quelle annee debute la Premiere Guerre mondiale ?",
    answer: 1914,
    unit: "annee"
  },
  {
    id: "culture-guerre-14-18-fin",
    prompt: "En quelle annee se termine la Premiere Guerre mondiale ?",
    answer: 1918,
    unit: "annee"
  },
  {
    id: "culture-guerre-39-45-debut",
    prompt: "En quelle annee debute la Seconde Guerre mondiale ?",
    answer: 1939,
    unit: "annee"
  },
  {
    id: "culture-guerre-39-45-fin",
    prompt: "En quelle annee se termine la Seconde Guerre mondiale ?",
    answer: 1945,
    unit: "annee"
  },
  {
    id: "culture-onu",
    prompt: "En quelle annee l'ONU est-elle fondee ?",
    answer: 1945,
    unit: "annee"
  },
  {
    id: "culture-premiers-jo-modernes",
    prompt: "En quelle annee ont lieu les premiers Jeux olympiques modernes ?",
    answer: 1896,
    unit: "annee"
  },
  {
    id: "culture-1er-homme-lune",
    prompt: "En quelle annee l'homme marche-t-il pour la premiere fois sur la Lune ?",
    answer: 1969,
    unit: "annee"
  },
  {
    id: "culture-chute-mur-berlin",
    prompt: "En quelle annee le mur de Berlin tombe-t-il ?",
    answer: 1989,
    unit: "annee"
  },
  {
    id: "culture-ue-maastricht",
    prompt: "En quelle annee le traite de Maastricht est-il signe ?",
    answer: 1992,
    unit: "annee"
  },
  {
    id: "culture-euro-circulation",
    prompt: "En quelle annee l'euro entre-t-il en circulation fiduciaire ?",
    answer: 2002,
    unit: "annee"
  },
  {
    id: "culture-declaration-indep-us",
    prompt: "En quelle annee la declaration d'independance des Etats-Unis est-elle adoptee ?",
    answer: 1776,
    unit: "annee"
  },
  {
    id: "culture-constitution-us",
    prompt: "En quelle annee la Constitution des Etats-Unis est-elle adoptee ?",
    answer: 1787,
    unit: "annee"
  },
  {
    id: "culture-revolution-russe",
    prompt: "En quelle annee a lieu la Revolution russe d'Octobre ?",
    answer: 1917,
    unit: "annee"
  },
  {
    id: "culture-premiere-republique-fr",
    prompt: "En quelle annee est proclamee la Premiere Republique francaise ?",
    answer: 1792,
    unit: "annee"
  },
  {
    id: "culture-abolition-monarchie-fr",
    prompt: "En quelle annee la monarchie est-elle abolie en France ?",
    answer: 1792,
    unit: "annee"
  },
  {
    id: "culture-traites-rome",
    prompt: "En quelle annee les traites de Rome sont-ils signes ?",
    answer: 1957,
    unit: "annee"
  },
  {
    id: "culture-fin-guerre-froide",
    prompt: "En quelle annee l'URSS est-elle dissoute ?",
    answer: 1991,
    unit: "annee"
  },
  {
    id: "culture-canal-suez",
    prompt: "En quelle annee le canal de Suez est-il inaugure ?",
    answer: 1869,
    unit: "annee"
  },
  {
    id: "culture-canal-panama",
    prompt: "En quelle annee le canal de Panama est-il inaugure ?",
    answer: 1914,
    unit: "annee"
  },
  {
    id: "culture-tour-pise",
    prompt: "En quelle annee la construction de la tour de Pise commence-t-elle ?",
    answer: 1173,
    unit: "annee"
  },
  {
    id: "culture-louvre-musee",
    prompt: "En quelle annee le musee du Louvre ouvre-t-il ?",
    answer: 1793,
    unit: "annee"
  },
  {
    id: "culture-universite-bologne",
    prompt: "En quelle annee traditionnelle l'universite de Bologne est-elle fondee ?",
    answer: 1088,
    unit: "annee"
  },
  {
    id: "culture-bastille",
    prompt: "En quelle annee la Bastille est-elle prise ?",
    answer: 1789,
    unit: "annee"
  },
  {
    id: "culture-trafalgar",
    prompt: "En quelle annee a lieu la bataille de Trafalgar ?",
    answer: 1805,
    unit: "annee"
  },
  {
    id: "culture-waterloo",
    prompt: "En quelle annee a lieu la bataille de Waterloo ?",
    answer: 1815,
    unit: "annee"
  },
  {
    id: "culture-independance-algerie",
    prompt: "En quelle annee l'Algerie devient-elle independante ?",
    answer: 1962,
    unit: "annee"
  },
  {
    id: "culture-berlin-airlift",
    prompt: "En quelle annee debute le pont aerien de Berlin ?",
    answer: 1948,
    unit: "annee"
  },
  {
    id: "culture-premier-transistor",
    prompt: "En quelle annee le transistor est-il invente ?",
    answer: 1947,
    unit: "annee"
  },
  {
    id: "culture-telephone-bell",
    prompt: "En quelle annee Alexander Graham Bell depose-t-il le brevet du telephone ?",
    answer: 1876,
    unit: "annee"
  },
  {
    id: "culture-ampoule-edison",
    prompt: "En quelle annee Edison depose-t-il un brevet pour l'ampoule a incandescence ?",
    answer: 1879,
    unit: "annee"
  },
  {
    id: "culture-premier-avion-wright",
    prompt: "En quelle annee a lieu le premier vol motorise des freres Wright ?",
    answer: 1903,
    unit: "annee"
  },
  {
    id: "culture-titanic",
    prompt: "En quelle annee le Titanic coule-t-il ?",
    answer: 1912,
    unit: "annee"
  },
  {
    id: "culture-crash-1929",
    prompt: "En quelle annee a lieu le krach boursier de 1929 ?",
    answer: 1929,
    unit: "annee"
  },
  {
    id: "culture-annee-bicentenaire-us",
    prompt: "En quelle annee a eu lieu le bicentenaire des Etats-Unis ?",
    answer: 1976,
    unit: "annee"
  },
  {
    id: "culture-16e-amendement-us",
    prompt: "En quelle annee le 16e amendement US est-il ratifie ?",
    answer: 1913,
    unit: "annee"
  },
  {
    id: "culture-1re-revolution-industrielle",
    prompt: "En quelle annee approximative debute la premiere Revolution industrielle (approx.) ?",
    answer: 1760,
    unit: "annee"
  },
  {
    id: "culture-fin-moyen-age",
    prompt: "En quelle annee la fin du Moyen Age est-elle traditionnellement placee (chute de Constantinople) ?",
    answer: 1453,
    unit: "annee"
  },
  {
    id: "culture-debut-renaissance",
    prompt: "En quelle annee approximative debute la Renaissance en Italie (approx.) ?",
    answer: 1400,
    unit: "annee"
  },
  {
    id: "culture-premier-roman-astro",
    prompt: "En quelle annee Sputnik 1 est-il lance ?",
    answer: 1957,
    unit: "annee"
  },
  {
    id: "culture-premier-homme-espace",
    prompt: "En quelle annee Youri Gagarine devient-il le premier homme dans l'espace ?",
    answer: 1961,
    unit: "annee"
  },
  {
    id: "culture-attaque-pearl-harbor",
    prompt: "En quelle annee l'attaque de Pearl Harbor a-t-elle lieu ?",
    answer: 1941,
    unit: "annee"
  },
  {
    id: "culture-fin-apartheid",
    prompt: "En quelle annee Nelson Mandela devient-il president de l'Afrique du Sud ?",
    answer: 1994,
    unit: "annee"
  },
  {
    id: "culture-11-septembre",
    prompt: "En quelle annee ont lieu les attentats du 11 septembre ?",
    answer: 2001,
    unit: "annee"
  },
  {
    id: "culture-premier-ipad",
    prompt: "En quelle annee le premier iPad est-il lance ?",
    answer: 2010,
    unit: "annee"
  },
  {
    id: "culture-premier-iphone",
    prompt: "En quelle annee le premier iPhone est-il lance ?",
    answer: 2007,
    unit: "annee"
  },
  {
    id: "culture-y2k",
    prompt: "En quelle annee a lieu le passage a l'an 2000 ?",
    answer: 2000,
    unit: "annee"
  },
  {
    id: "culture-bombe-hiroshima",
    prompt: "Quelle est la puissance approximate de la bombe d'Hiroshima (Little Boy) en kilotonnes de TNT ?",
    answer: 15,
    unit: "kt"
  },
  {
    id: "culture-tour-eiffel-hauteur",
    prompt: "Quelle est la hauteur historique de la tour Eiffel (sans antennes modernes, approx.) ?",
    answer: 300,
    unit: "m"
  },
  {
    id: "culture-mona-lisa",
    prompt: "En quelle annee la Joconde est-elle peinte approximativement (approx.) ?",
    answer: 1503,
    unit: "annee"
  },
  {
    id: "culture-impression-soleil-levant",
    prompt: "En quelle annee Monet peint-il 'Impression, soleil levant' ?",
    answer: 1872,
    unit: "annee"
  },
  {
    id: "culture-cine-1er-film",
    prompt: "En quelle annee a lieu la premiere projection publique des freres Lumiere ?",
    answer: 1895,
    unit: "annee"
  },
  {
    id: "culture-premier-oscar",
    prompt: "En quelle annee a lieu la premiere ceremonie des Oscars ?",
    answer: 1929,
    unit: "annee"
  },
  {
    id: "culture-facebook-lancement",
    prompt: "En quelle annee Facebook est-il lance ?",
    answer: 2004,
    unit: "annee"
  },
  {
    id: "culture-wikipedia-lancement",
    prompt: "En quelle annee Wikipedia est-elle lancee ?",
    answer: 2001,
    unit: "annee"
  },
  {
    id: "culture-google-fonde",
    prompt: "En quelle annee Google est-il fonde ?",
    answer: 1998,
    unit: "annee"
  },
  {
    id: "culture-apple-fonde",
    prompt: "En quelle annee Apple est-elle fondee ?",
    answer: 1976,
    unit: "annee"
  },
  {
    id: "culture-microprocesseur-4004",
    prompt: "En quelle annee l'Intel 4004 (premier microprocesseur) est-il lance ?",
    answer: 1971,
    unit: "annee"
  },
  {
    id: "culture-premiere-missile",
    prompt: "En quelle annee Apollo 13 est-il lance ?",
    answer: 1970,
    unit: "annee"
  },
  {
    id: "culture-berlin-jo",
    prompt: "En quelle annee ont lieu les JO de Berlin ?",
    answer: 1936,
    unit: "annee"
  },
  {
    id: "culture-vitesse-lumiere",
    prompt: "Quelle est la vitesse de la lumiere dans le vide (arrondie) ?",
    answer: 300000,
    unit: "km/s"
  },
  {
    id: "culture-age-univers",
    prompt: "Quel est l'age approximatif de l'Univers (arrondi) ?",
    answer: 13800000000,
    unit: "ans"
  },
  {
    id: "culture-age-terre",
    prompt: "Quel est l'age approximatif de la Terre (arrondi) ?",
    answer: 4540000000,
    unit: "ans"
  },
  {
    id: "culture-son-vitesse",
    prompt: "Quelle est la vitesse du son dans l'air (approx. a 20C) ?",
    answer: 343,
    unit: "m/s"
  },
  {
    id: "culture-shakespeare-songs",
    prompt: "En quelle annee Shakespeare nait-il ?",
    answer: 1564,
    unit: "annee"
  },
  {
    id: "culture-mort-newton",
    prompt: "En quelle annee Isaac Newton meurt-il ?",
    answer: 1727,
    unit: "annee"
  },
  {
    id: "culture-mort-einstein",
    prompt: "En quelle annee Albert Einstein meurt-il ?",
    answer: 1955,
    unit: "annee"
  },
  {
    id: "culture-mort-curie",
    prompt: "En quelle annee Marie Curie meurt-elle ?",
    answer: 1934,
    unit: "annee"
  },
  {
    id: "culture-naissance-darwin",
    prompt: "En quelle annee Charles Darwin nait-il ?",
    answer: 1809,
    unit: "annee"
  },
  {
    id: "math-square-19",
    prompt: "Quel est le carre de 19 ?",
    answer: 361
  },
  {
    id: "math-cube-16",
    prompt: "Quel est le cube de 16 ?",
    answer: 4096
  },
  {
    id: "geo-aire-carre-12",
    prompt: "Quelle est l'aire d'un carre de cote 12 ?",
    answer: 144,
    unit: "unites2"
  },

  {
    id: "geo-perimetre-rectangle-6x8",
    prompt: "Quel est le perimetre d'un rectangle de 6 par 8 ?",
    answer: 28,
    unit: "unites"
  },
  {
    id: "decalee-humain-litres-sang",
    prompt: "Quel est le volume de sang d'un adulte (approx.) ?",
    answer: 5,
    unit: "L"
  },
  {
    id: "decalee-cameleon-langue",
    prompt: "La langue d'un camaleon peut mesurer environ combien de fois la longueur de son corps ?",
    answer: 2,
    unit: "fois"
  },
  {
    id: "decalee-eclair-vitesse",
    prompt: "Quelle est la temperature approximative d'un eclair (arrondie) ?",
    answer: 30000,
    unit: "C"
  },
  {
    id: "gwr-most-shots-on-goal-both-teams-nhl-postseason-game",
    prompt: "Quel est le record du plus grand nombre de tirs cadrés (les deux équipes) dans un match de playoffs de NHL ?",
    answer: 151,
    unit: "nombre total"
  },
  {
    id: "gwr-most-skateboard-half-cab-blunt-fakies-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de figures « half-cab blunt fakie » en skateboard en une minute ?",
    answer: 29,
    unit: "nombre total"
  },
  {
    id: "gwr-highest-restaurant-in-a-building",
    prompt: "Quel est le record du restaurant situé le plus haut dans un bâtiment ?",
    answer: 556.36,
    unit: "mètres"
  },
  {
    id: "gwr-most-tricks-performed-by-a-guinea-pig-in-30-seconds",
    prompt: "Quel est le record du plus grand nombre de tours réalisés par un cochon d’Inde en 30 secondes ?",
    answer: 10,
    unit: "nombre total"
  },
  {
    id: "gwr-most-neutral-grip-pull-ups-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de tractions en prise neutre en une minute (homme) ?",
    answer: 56,
    unit: "nombre total"
  },
  {
    id: "gwr-most-grammy-nominations-for-a-female-country-artist",
    prompt: "Quel est le record du plus grand nombre de nominations aux Grammy Awards pour une artiste country (femme) ?",
    answer: 55,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-sword-non-ceremonial",
    prompt: "Quel est le record de l’épée la plus longue (non cérémonielle) ?",
    answer: 3.77,
    unit: "mètres"
  },
  {
    id: "gwr-most-money-raised-by-a-videogame-speedrunning-event",
    prompt: "Quel est le record du plus grand montant d’argent récolté par un événement de speedrun de jeux vidéo ?",
    answer: 3416729,
    unit: "dollars US"
  },
  {
    id: "gwr-highest-heat-total-at-the-isa-para-surfing-world-championship-female",
    prompt: "Quel est le record du total de points (« heat total ») le plus élevé aux Championnats du monde ISA de para-surf (femme) ?",
    answer: 17.27,
    unit: "nombre total"
  },
  {
    id: "gwr-most-song-of-the-year-awards-won-at-the-all-africa-music-awards",
    prompt: "Quel est le record du plus grand nombre de prix « Chanson de l’année » remportés aux All Africa Music Awards ?",
    answer: 3,
    unit: "nombre total"
  },
  {
    id: "gwr-heaviest-vehicle-pulled-over-100-ft-with-the-teeth-male",
    prompt: "Quel est le record du véhicule le plus lourd tracté sur plus de 100 ft avec les dents (homme) ?",
    answer: 7225,
    unit: "kilogrammes"
  },
  {
    id: "gwr-farthest-distance-traversed-using-rings-in-one-minute-female",
    prompt: "Quel est le record de la plus grande distance parcourue avec des anneaux en une minute (femme) ?",
    answer: 38,
    unit: "mètres"
  },
  {
    id: "gwr-most-awards-won-by-a-show-at-the-national-television-awards",
    prompt: "Quel est le record du plus grand nombre de récompenses remportées par une émission aux National Television Awards ?",
    answer: 36,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-unbeaten-run-in-competitive-men-s-international-football-soccer-matches",
    prompt: "Quel est le record de la plus longue série d’invincibilité en matchs internationaux officiels de football masculin ?",
    answer: 37,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-led-illuminated-racetrack",
    prompt: "Quel est le record du plus grand circuit de course illuminé par LED ?",
    answer: 112958.27,
    unit: "m²"
  },
  {
    id: "gwr-most-consecutive-olympic-swimming-gold-medals-in-the-same-event-female",
    prompt: "Quel est le record du plus grand nombre de médailles d’or olympiques consécutives en natation sur la même épreuve (femme) ?",
    answer: 4,
    unit: "nombre total"
  },
  {
    id: "gwr-most-knee-to-feet-jumps-in-one-minute-male-aa3",
    prompt: "Quel est le record du plus grand nombre de sauts « genoux vers pieds » en une minute (homme) – AA3 ?",
    answer: 24,
    unit: "nombre total"
  },
  {
    id: "gwr-most-studio-albums-released-by-a-female-country-singer",
    prompt: "Quel est le record du plus grand nombre d’albums studio sortis par une chanteuse country ?",
    answer: 66,
    unit: "nombre total"
  },
  {
    id: "gwr-most-expensive-pokemon-trading-card-sold-at-a-private-sale",
    prompt: "Quel est le record de la carte Pokémon la plus chère vendue lors d’une vente privée ?",
    answer: 5275000,
    unit: "dollars US"
  },
  {
    id: "gwr-most-points-scored-in-a-national-rugby-league-career",
    prompt: "Quel est le record du plus grand nombre de points marqués en carrière en National Rugby League ?",
    answer: 2786,
    unit: "points"
  },
  {
    id: "gwr-most-bafta-film-awards-won-for-best-costume-design",
    prompt: "Quel est le record du plus grand nombre de BAFTA Film Awards remportés pour la meilleure création de costumes ?",
    answer: 4,
    unit: "nombre total"
  },
  {
    id: "gwr-most-brands-advertising-on-a-single-sportswear-item",
    prompt: "Quel est le record du plus grand nombre de marques faisant de la publicité sur un seul article de sport ?",
    answer: 116,
    unit: "nombre total"
  },
  {
    id: "gwr-most-weight-lifted-by-dumbbell-curls-in-one-hour",
    prompt: "Quel est le record du plus grand poids total soulevé en curls avec haltères en une heure ?",
    answer: 19395.2,
    unit: "kilogrammes"
  },
  {
    id: "gwr-largest-indoor-artificial-wave",
    prompt: "Quel est le record de la plus grande vague artificielle en intérieur ?",
    answer: 3.2,
    unit: "mètres"
  },
  {
    id: "gwr-heaviest-weight-supported-with-the-mouth-on-parallel-bars",
    prompt: "Quel est le record du poids le plus lourd soutenu avec la bouche sur barres parallèles ?",
    answer: 90.3,
    unit: "kilogrammes"
  },
  {
    id: "gwr-most-single-arm-handstands-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre d’équilibres sur une main en une minute (homme) ?",
    answer: 23,
    unit: "nombre total"
  },
  {
    id: "gwr-highest-altitude-skydiving-with-a-banner-flag",
    prompt: "Quel est le record du saut en parachute à la plus haute altitude avec une bannière / un drapeau ?",
    answer: 12933,
    unit: "mètres"
  },
  {
    id: "gwr-most-marathon-appearances-at-the-world-athletics-championships",
    prompt: "Quel est le record du plus grand nombre de participations au marathon aux Championnats du monde d’athlétisme ?",
    answer: 11,
    unit: "nombre total"
  },
  {
    id: "gwr-most-push-ups-in-one-hour-with-a-40-lb-pack",
    prompt: "Quel est le record du plus grand nombre de pompes en une heure avec un sac de 40 lb ?",
    answer: 1240,
    unit: "nombre total"
  },
  {
    id: "gwr-most-stars-projected-by-a-planetarium-projector-one-off",
    prompt: "Quel est le record du plus grand nombre d’étoiles projetées par un projecteur de planétarium (événement unique) ?",
    answer: 700000000,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-earthquake-recorded-on-another-world",
    prompt: "Quel est le record du plus grand séisme enregistré sur un autre monde ?",
    answer: 5,
    unit: "nombre total"
  },
  {
    id: "gwr-most-back-of-hand-push-ups-carrying-a-80-lb-pack-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de pompes sur le dos des mains avec un sac de 80 lb en une minute (homme) ?",
    answer: 47,
    unit: "nombre total"
  },
  {
    id: "gwr-lowest-putt-putt-miniature-golf-score-in-competition",
    prompt: "Quel est le record du score le plus bas au mini-golf (putt-putt) en compétition ?",
    answer: 18,
    unit: "nombre total"
  },
  {
    id: "gwr-most-awards-won-at-the-japan-academy-film-prize-japanese-academy-awards-in-a-single-year",
    prompt: "Quel est le record du plus grand nombre de récompenses remportées aux Japan Academy Film Prize (Japan Academy Awards) en une seule année ?",
    answer: 13,
    unit: "nombre total"
  },
  {
    id: "gwr-heaviest-weight-lifted-by-tongue",
    prompt: "Quel est le record du poids le plus lourd soulevé avec la langue ?",
    answer: 13,
    unit: "kilogrammes"
  },
  {
    id: "gwr-most-eisner-comic-award-wins-in-one-category",
    prompt: "Quel est le record du plus grand nombre de récompenses Eisner remportées dans une seule catégorie ?",
    answer: 18,
    unit: "nombre total"
  },
  {
    id: "gwr-most-winter-paralympics-cross-country-skiing-gold-medals-male",
    prompt: "Quel est le record du plus grand nombre de médailles d’or en ski de fond aux Jeux paralympiques d’hiver (homme) ?",
    answer: 16,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-underwater-photography-exhibition",
    prompt: "Quel est le record de la plus grande exposition de photographie sous-marine ?",
    answer: 150,
    unit: "nombre total"
  },
  {
    id: "gwr-farthest-basketball-hook-shot",
    prompt: "Quel est le record du tir en crochet (« hook shot ») au basket le plus lointain ?",
    answer: 25,
    unit: "mètres"
  },
  {
    id: "gwr-most-pull-ups-from-a-helicopter-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de tractions depuis un hélicoptère en une minute ?",
    answer: 32,
    unit: "nombre total"
  },
  {
    id: "gwr-most-times-sacked-in-an-nfl-career",
    prompt: "Quel est le record du plus grand nombre de fois où un joueur a été « sacké » en carrière NFL ?",
    answer: 571,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-cucumber",
    prompt: "Quel est le record du concombre le plus long ?",
    answer: 113.4,
    unit: "centimètres"
  },
  {
    id: "gwr-largest-jiaozi-gyoza-dumpling-word",
    prompt: "Quel est le record du plus grand ravioli jiaozi/gyoza ?",
    answer: 10295,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-laser-light-beam-sentence",
    prompt: "Quel est le record de la plus grande « phrase » réalisée au faisceau laser ?",
    answer: 3289.056,
    unit: "m²"
  },
  {
    id: "gwr-highest-vertical-leap-running-start",
    prompt: "Quel est le record de la détente verticale la plus haute avec élan (départ en course) ?",
    answer: 1.27,
    unit: "mètres"
  },
  {
    id: "gwr-most-goals-scored-with-the-goalkeeper-on-fifa-22",
    prompt: "Quel est le record du plus grand nombre de buts marqués avec le gardien sur FIFA 22 ?",
    answer: 31,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-pizza",
    prompt: "Quel est le record de la plus grande pizza ?",
    answer: 1296.72,
    unit: "m²"
  },
  {
    id: "gwr-most-people-exchanging-garlands-simultaneously",
    prompt: "Quel est le record du plus grand nombre de personnes échangeant des guirlandes simultanément ?",
    answer: 552,
    unit: "paires"
  },
  {
    id: "gwr-highest-score-in-figure-skating-short-programme-men",
    prompt: "Quel est le record du score le plus élevé en programme court de patinage artistique (hommes) ?",
    answer: 113.97,
    unit: "nombre total"
  },
  {
    id: "gwr-most-users-in-a-tea-video-hangout",
    prompt: "Quel est le record du plus grand nombre d’utilisateurs dans un hangout vidéo autour du thé ?",
    answer: 3475,
    unit: "nombre total"
  },
  {
    id: "gwr-most-streamed-album-on-spotify-in-24-hours",
    prompt: "Quel est le record de l’album le plus streamé sur Spotify en 24 heures ?",
    answer: 313747178,
    unit: "nombre total"
  },
  {
    id: "gwr-most-spiderman-knuckle-push-ups-with-a-80-lb-pack-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de « spiderman knuckle push-ups » avec un sac de 80 lb en une minute ?",
    answer: 33,
    unit: "nombre total"
  },
  {
    id: "gwr-most-ves-awards-won-for-outstanding-visual-effects-in-a-photoreal-feature-by-an-individual",
    prompt: "Quel est le record du plus grand nombre de VES Awards remportés pour des effets visuels exceptionnels dans un long-métrage photoréaliste (par une personne) ?",
    answer: 7,
    unit: "nombre total"
  },
  {
    id: "gwr-most-blood-plasma-donated-male",
    prompt: "Quel est le record du plus grand volume de plasma sanguin donné (homme) ?",
    answer: 1064.568,
    unit: "litres"
  },
  {
    id: "gwr-most-knuckle-push-ups-carrying-a-60-lb-pack-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de pompes sur les jointures avec un sac de 60 lb en une minute (homme) ?",
    answer: 79,
    unit: "nombre total"
  },
  {
    id: "gwr-most-wins-of-the-football-soccer-european-cup-champions-league-team",
    prompt: "Quel est le record du plus grand nombre de victoires en Coupe d’Europe / Ligue des champions (équipe) ?",
    answer: 15,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-distance-swum-underwater-with-one-breath-with-fins-la1",
    prompt: "Quel est le record de la plus longue distance nagée sous l’eau en apnée avec palmes (LA1) ?",
    answer: 76.7,
    unit: "mètres"
  },
  {
    id: "gwr-most-participants-in-a-tea-tasting-event-online-and-in-a-single-venue",
    prompt: "Quel est le record du plus grand nombre de participants à une dégustation de thé, en ligne et dans un lieu unique ?",
    answer: 290,
    unit: "nombre total"
  },
  {
    id: "gwr-most-expensive-cognac-sold-in-a-private-sale",
    prompt: "Quel est le record du cognac le plus cher vendu lors d’une vente privée ?",
    answer: 1725286,
    unit: "livres sterling"
  },
  {
    id: "gwr-most-pool-balls-potted-off-the-break",
    prompt: "Quel est le record du plus grand nombre de billes de billard empochées dès la casse ?",
    answer: 6,
    unit: "nombre total"
  },
  {
    id: "gwr-most-kills-against-cpu-bots-in-league-of-legends-using-a-mouth-operated-joystick",
    prompt: "Quel est le record du plus grand nombre d’éliminations contre des bots (CPU) sur League of Legends avec un joystick commandé par la bouche ?",
    answer: 216,
    unit: "nombre total"
  },
  {
    id: "gwr-most-awards-won-by-a-female-actor-entertainer-at-the-national-television-awards",
    prompt: "Quel est le record du plus grand nombre de récompenses remportées par une actrice / animatrice aux National Television Awards ?",
    answer: 4,
    unit: "nombre total"
  },
  {
    id: "gwr-most-tracked-flight",
    prompt: "Quel est le record du vol le plus suivi (tracked flight) ?",
    answer: 4790000,
    unit: "nombre total"
  },
  {
    id: "gwr-most-gold-medals-won-at-the-ifsc-climbing-world-cup",
    prompt: "Quel est le record du plus grand nombre de médailles d’or remportées en Coupe du monde IFSC d’escalade ?",
    answer: 37,
    unit: "nombre total"
  },
  {
    id: "gwr-smallest-wooden-spoon",
    prompt: "Quel est le record de la plus petite cuillère en bois ?",
    answer: 1.09,
    unit: "millimètres"
  },
  {
    id: "gwr-most-rotating-puzzle-cubes-solved-while-running-a-marathon",
    prompt: "Quel est le record du plus grand nombre de Rubik’s Cubes rotatifs résolus en courant un marathon ?",
    answer: 520,
    unit: "nombre total"
  },
  {
    id: "gwr-most-hops-while-spinning-a-hula-hoop-on-the-ankle-in-30-seconds",
    prompt: "Quel est le record du plus grand nombre de sauts tout en faisant tourner un hula-hoop autour de la cheville en 30 secondes ?",
    answer: 59,
    unit: "nombre total"
  },
  {
    id: "gwr-highest-transaction-volume-for-an-nft-collectible-game",
    prompt: "Quel est le record du plus grand volume de transactions pour un jeu NFT à collectionner ?",
    answer: 4039319819,
    unit: "dollars US"
  },
  {
    id: "gwr-most-caps-removed-from-the-head-with-an-excavator-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de casquettes retirées d’une tête avec une excavatrice en une minute ?",
    answer: 15,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-fish-colony",
    prompt: "Quel est le record de la plus grande colonie de poissons ?",
    answer: 240,
    unit: "km²"
  },
  {
    id: "gwr-most-one-arm-one-leg-push-ups-carrying-a-60-lb-pack-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de pompes « un bras / une jambe » avec un sac de 60 lb en une minute (homme) ?",
    answer: 15,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-shiny-pokemon-collecting-online-community-event",
    prompt: "Quel est le record du plus grand événement communautaire en ligne de collecte de Pokémon shiny ?",
    answer: 172,
    unit: "nombre total"
  },
  {
    id: "gwr-most-people-watering-plants-simultaneously-multiple-venues",
    prompt: "Quel est le record du plus grand nombre de personnes arrosant des plantes simultanément (plusieurs lieux) ?",
    answer: 1755,
    unit: "personnes"
  },
  {
    id: "gwr-largest-toy-car-number",
    prompt: "Quel est le record du plus grand nombre de voitures miniatures ?",
    answer: 2360,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-rueda-de-casino-dance",
    prompt: "Quel est le record de la plus grande danse « rueda de casino » ?",
    answer: 1585,
    unit: "personnes"
  },
  {
    id: "gwr-most-participants-in-an-online-cake-tasting-event",
    prompt: "Quel est le record du plus grand nombre de participants à une dégustation de gâteau en ligne ?",
    answer: 166,
    unit: "nombre total"
  },
  {
    id: "gwr-tallest-freestanding-structure",
    prompt: "Quel est le record de la structure autoportante la plus haute ?",
    answer: 828,
    unit: "mètres"
  },
  {
    id: "gwr-most-triple-under-crossovers-criss-cross-while-skipping-backwards-in-30-seconds",
    prompt: "Quel est le record du plus grand nombre de « triple unders crossovers (criss-cross) » en sautant à la corde à reculons en 30 secondes ?",
    answer: 43,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-bicycle-switchback-wheelie",
    prompt: "Quel est le record du plus long wheeling « switchback » à vélo ?",
    answer: 331.78,
    unit: "mètres"
  },
  {
    id: "gwr-most-consecutive-wins-by-a-team-in-the-fa-women-s-super-league",
    prompt: "Quel est le record du plus grand nombre de victoires consécutives par une équipe en FA Women’s Super League ?",
    answer: 14,
    unit: "nombre total"
  },
  {
    id: "gwr-most-school-snacks-delivered-in-a-year",
    prompt: "Quel est le record du plus grand nombre de collations scolaires livrées en un an ?",
    answer: 600426453,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-freshwater-fish-species",
    prompt: "Quel est le record de la plus grande espèce de poisson d’eau douce ?",
    answer: 300,
    unit: "kilogrammes"
  },
  {
    id: "gwr-highest-installed-solar-power-capacity-country",
    prompt: "Quel est le record de la plus grande capacité solaire installée (pays) ?",
    answer: 204700,
    unit: "mégawatt"
  },
  {
    id: "gwr-most-consecutive-jump-rope-triple-unders-male",
    prompt: "Quel est le record du plus grand nombre de « triple unders » consécutifs à la corde à sauter (homme) ?",
    answer: 1052,
    unit: "nombre total"
  },
  {
    id: "gwr-most-appearances-in-the-rugby-union-english-premiership",
    prompt: "Quel est le record du plus grand nombre d’apparitions en Premiership anglaise de rugby à XV ?",
    answer: 318,
    unit: "nombre total"
  },
  {
    id: "gwr-most-goals-scored-at-a-uefa-womens-european-championships-by-a-football-soccer-player",
    prompt: "Quel est le record du plus grand nombre de buts marqués aux Championnats d’Europe féminins de l’UEFA par une joueuse de football ?",
    answer: 6,
    unit: "nombre total"
  },
  {
    id: "gwr-heaviest-combined-weight-throwing-people-over-a-bar-in-three-minutes-male",
    prompt: "Quel est le record du poids total le plus élevé (cumulé) en projetant des personnes par-dessus une barre en trois minutes (homme) ?",
    answer: 1203.6,
    unit: "kilogrammes"
  },
  {
    id: "gwr-highest-grossing-merfolk-movie",
    prompt: "Quel est le record du film de sirènes (« merfolk ») ayant généré le plus de recettes ?",
    answer: 525018479,
    unit: "dollars US"
  },
  {
    id: "gwr-most-handball-goals-at-a-single-olympic-games-male",
    prompt: "Quel est le record du plus grand nombre de buts de handball marqués lors d’une seule édition des Jeux olympiques (homme) ?",
    answer: 61,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-lens-in-a-lighthouse-relative-to-size",
    prompt: "Quel est le record de la plus grande lentille de phare (rapportée à la taille) ?",
    answer: 26,
    unit: "pourcentage"
  },
  {
    id: "gwr-most-football-soccer-penalties-taken-in-one-hour-la1",
    prompt: "Quel est le record du plus grand nombre de penalties tirés au football en une heure (LA1) ?",
    answer: 356,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-plastic-material-sculpture-of-a-sphere-supported",
    prompt: "Quel est le record de la plus grande sculpture en plastique d’une sphère (supportée) ?",
    answer: 10.02,
    unit: "mètres"
  },
  {
    id: "gwr-most-subscribers-for-an-entertainment-channel-on-youtube",
    prompt: "Quel est le record du plus grand nombre d’abonnés pour une chaîne YouTube de divertissement ?",
    answer: 146720986,
    unit: "abonnés"
  },
  {
    id: "gwr-heaviest-brain-in-humans",
    prompt: "Quel est le record du cerveau humain le plus lourd ?",
    answer: 2850,
    unit: "grammes"
  },
  {
    id: "gwr-tallest-brussel-sprout-plant",
    prompt: "Quel est le record du plant de choux de Bruxelles le plus haut ?",
    answer: 3.35,
    unit: "mètres"
  },
  {
    id: "gwr-most-riffle-shuffles-of-a-deck-of-playing-cards-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de mélanges « à l’américaine » (riffle shuffles) d’un jeu de cartes en une minute ?",
    answer: 35,
    unit: "nombre total"
  },
  {
    id: "gwr-most-hula-hoop-rotations-around-one-knee-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de rotations de hula-hoop autour d’un genou en une minute ?",
    answer: 209,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-margin-of-victory-in-a-wnba-playoff-game",
    prompt: "Quel est le record du plus grand écart de victoire lors d’un match de playoffs WNBA ?",
    answer: 38,
    unit: "points"
  },
  {
    id: "gwr-most-no-1-albums-on-the-us-billboard-200-in-a-calendar-year-female",
    prompt: "Quel est le record du plus grand nombre d’albums n°1 au Billboard 200 (USA) sur une année civile (femme) ?",
    answer: 3,
    unit: "nombre total"
  },
  {
    id: "gwr-most-fina-swimming-world-cup-titles-male",
    prompt: "Quel est le record du plus grand nombre de titres en Coupe du monde de natation FINA (homme) ?",
    answer: 4,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-collection-of-kansas-city-chiefs-memorabilia",
    prompt: "Quel est le record de la plus grande collection de souvenirs des Kansas City Chiefs ?",
    answer: 1110,
    unit: "nombre total"
  },
  {
    id: "gwr-most-viewers-for-an-entrepreneurial-live-stream-on-a-bespoke-platform",
    prompt: "Quel est le record du plus grand nombre de spectateurs pour un live entrepreneurial sur une plateforme dédiée ?",
    answer: 33819,
    unit: "personnes"
  },
  {
    id: "gwr-most-remote-controlled-rc-fixed-wing-aircrafts-manually-flown-simultaneously",
    prompt: "Quel est le record du plus grand nombre d’avions radiocommandés (RC) à voilure fixe pilotés manuellement simultanément ?",
    answer: 2,
    unit: "nombre total"
  },
  {
    id: "gwr-most-valuable-cryptocurrency",
    prompt: "Quel est le record de la cryptomonnaie ayant la plus grande valeur (capitalisation) ?",
    answer: 816693608869,
    unit: "dollars US"
  },
  {
    id: "gwr-greatest-distance-on-an-electric-motor-scooter-in-24-hours-individual",
    prompt: "Quel est le record de la plus grande distance parcourue en trottinette électrique en 24 heures (individuel) ?",
    answer: 1158.72,
    unit: "kilomètres"
  },
  {
    id: "gwr-most-full-contact-martial-arts-kicks-on-a-treadmill-in-30-seconds",
    prompt: "Quel est le record du plus grand nombre de coups de pied d’arts martiaux en plein contact sur tapis de course en 30 secondes ?",
    answer: 91,
    unit: "nombre total"
  },
  {
    id: "gwr-most-people-performing-the-wheel-pose-simultaneously-yoga",
    prompt: "Quel est le record du plus grand nombre de personnes réalisant simultanément la posture de la roue (yoga) ?",
    answer: 351,
    unit: "personnes"
  },
  {
    id: "gwr-highest-annual-earnings-for-a-film-actor-current-year",
    prompt: "Quel est le record des gains annuels les plus élevés pour un acteur de cinéma (année en cours) ?",
    answer: 73000000,
    unit: "dollars US"
  },
  {
    id: "gwr-longest-journey-by-stand-up-paddleboard-sup",
    prompt: "Quel est le record du plus long voyage en stand up paddle (SUP) ?",
    answer: 2677.34,
    unit: "kilomètres"
  },
  {
    id: "gwr-most-winning-drives-in-fourth-quarter-or-overtime-by-an-nfl-quarterback",
    prompt: "Quel est le record du plus grand nombre de séries victorieuses (« winning drives ») dans le 4e quart-temps ou en prolongation par un quarterback NFL ?",
    answer: 55,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-doughnut-mosaic-logo",
    prompt: "Quel est le record du plus grand logo en mosaïque de donuts ?",
    answer: 83.91,
    unit: "m²"
  },
  {
    id: "gwr-most-hula-hoop-rotations-around-the-knees-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de rotations de hula-hoop autour des genoux en une minute ?",
    answer: 213,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-light-art-festival",
    prompt: "Quel est le record du plus grand festival d’art lumineux ?",
    answer: 201,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-bowling-run-up-male",
    prompt: "Quel est le record de la plus longue course d’élan (« run-up ») au cricket (homme) ?",
    answer: 24.36,
    unit: "kilomètres"
  },
  {
    id: "gwr-largest-tongue-circumference-female",
    prompt: "Quel est le record du plus grand tour de langue (femme) ?",
    answer: 13.83,
    unit: "centimètres"
  },
  {
    id: "gwr-most-wins-of-the-fiba-3x3-world-cup-men",
    prompt: "Quel est le record du plus grand nombre de victoires en Coupe du monde FIBA 3x3 (hommes) ?",
    answer: 6,
    unit: "nombre total"
  },
  {
    id: "gwr-most-nfl-postseason-touchdown-passes-in-a-career",
    prompt: "Quel est le record du plus grand nombre de passes de touchdown en playoffs NFL sur une carrière ?",
    answer: 88,
    unit: "nombre total"
  },
  {
    id: "gwr-most-tony-award-nominations-for-a-play",
    prompt: "Quel est le record du plus grand nombre de nominations aux Tony Awards pour une pièce de théâtre ?",
    answer: 13,
    unit: "nombre total"
  },
  {
    id: "gwr-heaviest-eggplant-aubergine",
    prompt: "Quel est le record de l’aubergine la plus lourde ?",
    answer: 5.078,
    unit: "kilogrammes"
  },
  {
    id: "gwr-largest-pixel-art-mural",
    prompt: "Quel est le record de la plus grande fresque en pixel art ?",
    answer: 134.23,
    unit: "m²"
  },
  {
    id: "gwr-most-wins-of-the-football-soccer-concacaf-gold-cup-by-a-team-male",
    prompt: "Quel est le record du plus grand nombre de victoires en Gold Cup CONCACAF au football par une équipe (hommes) ?",
    answer: 10,
    unit: "nombre total"
  },
  {
    id: "gwr-fastest-selling-album-in-the-us-by-a-country-artist",
    prompt: "Quel est le record de l’album le plus rapidement vendu aux États-Unis par un artiste country ?",
    answer: 1208000,
    unit: "unités vendues"
  },
  {
    id: "gwr-largest-lighthouse-lenses",
    prompt: "Quel est le record des plus grandes lentilles de phare ?",
    answer: 1330,
    unit: "millimètres"
  },
  {
    id: "gwr-most-360-degree-spins-while-hanging-upside-down-from-aerial-straps-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de rotations à 360° en étant suspendu la tête en bas à des sangles aériennes en une minute (homme) ?",
    answer: 164,
    unit: "nombre total"
  },
  {
    id: "gwr-best-selling-debut-album-in-the-uk-by-a-female-artist",
    prompt: "Quel est le record du premier album (« debut ») le plus vendu au Royaume-Uni par une artiste (femme) ?",
    answer: 3170000,
    unit: "unités vendues"
  },
  {
    id: "gwr-heaviest-bony-fish",
    prompt: "Quel est le record du poisson osseux le plus lourd ?",
    answer: 2.744,
    unit: "tonnes (métriques)"
  },
  {
    id: "gwr-most-football-soccer-passes-with-the-soles-in-30-seconds-team-of-two",
    prompt: "Quel est le record du plus grand nombre de passes au football avec les semelles en 30 secondes (équipe de deux) ?",
    answer: 33,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-paddle-board-yoga-class",
    prompt: "Quel est le record du plus grand cours de yoga sur paddle ?",
    answer: 305,
    unit: "personnes"
  },
  {
    id: "gwr-largest-mexican-folk-dance",
    prompt: "Quel est le record de la plus grande danse folklorique mexicaine ?",
    answer: 1095,
    unit: "personnes"
  },
  {
    id: "gwr-most-runs-scored-in-one-day-internationals-female",
    prompt: "Quel est le record du plus grand nombre de runs marqués en matchs internationaux d’un jour (« One Day Internationals ») (femme) ?",
    answer: 7805,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-social-media-marketing-lesson",
    prompt: "Quel est le record de la plus grande leçon de marketing sur les réseaux sociaux ?",
    answer: 2185,
    unit: "personnes"
  },
  {
    id: "gwr-largest-online-photo-album-of-oaths-pledges",
    prompt: "Quel est le record du plus grand album photo en ligne de serments / engagements ?",
    answer: 138454,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-glass-bottomed-bridge",
    prompt: "Quel est le record du plus long pont à fond de verre ?",
    answer: 526.14,
    unit: "mètres"
  },
  {
    id: "gwr-most-lateral-bench-hop-overs-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de sauts latéraux par-dessus un banc en une minute (homme) ?",
    answer: 111,
    unit: "nombre total"
  },
  {
    id: "gwr-most-powerful-rocket-lift-capacity-current",
    prompt: "Quel est le record de la capacité d’emport (« lift capacity ») la plus élevée pour une fusée (actuelle) ?",
    answer: 95000,
    unit: "kilogrammes"
  },
  {
    id: "gwr-largest-waltz",
    prompt: "Quel est le record de la plus grande valse ?",
    answer: 1598,
    unit: "paires"
  },
  {
    id: "gwr-most-consecutive-samurai-sword-juggling-catches-three-swords",
    prompt: "Quel est le record du plus grand nombre de réceptions consécutives en jonglant avec des sabres de samouraï (trois sabres) ?",
    answer: 191,
    unit: "nombre total"
  },
  {
    id: "gwr-most-cumulative-weeks-on-uk-albums-chart-group-individual-album",
    prompt: "Quel est le record du plus grand nombre cumulé de semaines dans le classement des albums au Royaume-Uni (groupe / album individuel) ?",
    answer: 828,
    unit: "nombre total"
  },
  {
    id: "gwr-most-license-plates-torn-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de plaques d’immatriculation déchirées en une minute ?",
    answer: 29,
    unit: "nombre total"
  },
  {
    id: "gwr-most-robots-dancing-simultaneously",
    prompt: "Quel est le record du plus grand nombre de robots dansant simultanément ?",
    answer: 1372,
    unit: "nombre total"
  },
  {
    id: "gwr-most-competitive-147-breaks-in-snooker",
    prompt: "Quel est le record du plus grand nombre de breaks de 147 en snooker en compétition ?",
    answer: 17,
    unit: "nombre total"
  },
  {
    id: "gwr-most-expensive-city-to-eat-in-restaurants",
    prompt: "Quel est le record de la ville la plus chère pour manger au restaurant ?",
    answer: 72.3,
    unit: "livres sterling"
  },
  {
    id: "gwr-most-participants-in-an-underwater-clean-up-in-12-hours",
    prompt: "Quel est le record du plus grand nombre de participants à un nettoyage sous-marin en 12 heures ?",
    answer: 597,
    unit: "personnes"
  },
  {
    id: "gwr-fewest-games-for-a-coach-to-win-250-nba-matches",
    prompt: "Quel est le record du plus petit nombre de matchs nécessaires à un coach pour atteindre 250 victoires NBA ?",
    answer: 250,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-deep-water-reef",
    prompt: "Quel est le record du plus grand récif d’eau profonde ?",
    answer: 100,
    unit: "km²"
  },
  {
    id: "gwr-most-consecutive-juggling-catches-3-mauls",
    prompt: "Quel est le record du plus grand nombre de réceptions consécutives en jonglage (3 massues) ?",
    answer: 122,
    unit: "nombre total"
  },
];

export const DEFAULT_QUESTION = QUESTION_BANK[0];