export type Question = {
  id: string;
  prompt: string;
  answer: number;
  unit?: string;
};

export const QUESTION_BANK: Question[] = [
  {
    id: "tour-eiffel",
    prompt: "En quelle année la tour Eiffel a-t-elle ete inauguree ?",
    answer: 1889,
    unit: "année"
  },
  {
    id: "marathon",
    prompt: "Quelle est la longueur officielle d'un marathon ?",
    answer: 42195,
    unit: "metres"
  },
  {
    id: "apollo-11",
    prompt: "En quelle année Apollo 11 a-t-il atterri sur la Lune ?",
    answer: 1969,
    unit: "année"
  },
  {
    id: "mur-berlin",
    prompt: "En quelle année est tombé le mur de Berlin ?",
    answer: 1989,
    unit: "année"
  },
  {
    id: "terre-lune",
    prompt: "Quelle est la distance moyenne Terre-Lune ?",
    answer: 384400,
    unit: "km"
  },
  {
    id: "finale-1930",
    prompt: "En quelle année a eu lieu la premiere Coupe du Monde de football ?",
    answer: 1930,
    unit: "année"
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
    prompt: "En quelle année l'Empire romain d'Occident est-il traditionnellement tombé ?",
    answer: 476,
    unit: "année"
  },
  {
    id: "culture-rome-fondation",
    prompt: "En quelle année traditionnelle la ville de Rome est-elle fondee ?",
    answer: -753,
    unit: "année"
  },
  {
    id: "culture-charlemagne-sacre",
    prompt: "En quelle année Charlemagne a-t-il ete sacre empereur ?",
    answer: 800,
    unit: "année"
  },
  {
    id: "culture-hastings",
    prompt: "En quelle année a eu lieu la bataille d'Hastings ?",
    answer: 1066,
    unit: "année"
  },
  {
    id: "culture-magna-carta",
    prompt: "En quelle année la Magna Carta a-t-elle été scellée ?",
    answer: 1215,
    unit: "année"
  },
  {
    id: "culture-constantinople",
    prompt: "En quelle année Constantinople est-elle tombée ?",
    answer: 1453,
    unit: "année"
  },
  {
    id: "culture-imprimerie-gutenberg",
    prompt: "En quelle année approximative Gutenberg met-il au point l'imprimerie a caracteres mobiles ?",
    answer: 1450,
    unit: "année"
  },
  {
    id: "culture-decouverte-amerique",
    prompt: "En quelle année Christophe Colomb atteint-il les Ameriques ?",
    answer: 1492,
    unit: "année"
  },
  {
    id: "culture-reforme-luther",
    prompt: "En quelle année Luther affiche-t-il ses 95 theses ?",
    answer: 1517,
    unit: "année"
  },
  {
    id: "date-vercingetorix",
    prompt: "En quelle année Vercingetorix a-t-il ete vaincu ?",
    answer: 52,
    unit: "année"
  },
  {
    id: "date-odoacre",
    prompt: "En quelle année Odoacre a-t-il depose le dernier empereur romain d'Occident ?",
    answer: 476,
    unit: "année"
  },
  {
    id: "date-ecole-obligatoire-france",
    prompt: "En quelle année l'ecole obligatoire a-t-elle ete instauree en France ?",
    answer: 1882,
    unit: "année"
  },
  {
    id: "date-j'accuse-zola",
    prompt: "En quelle année Zola publie-t-il 'J'accuse' ?",
    answer: 1898,
    unit: "année"
  },
  {
    id: "culture-armada",
    prompt: "En quelle année l'Invincible Armada est-elle vaincue ?",
    answer: 1588,
    unit: "année"
  },
  {
    id: "culture-revolution-francaise",
    prompt: "En quelle année debute la Revolution francaise ?",
    answer: 1789,
    unit: "année"
  },
  {
    id: "culture-prise-bastille",
    prompt: "En quelle année la prise de la Bastille a-t-elle eu lieu ?",
    answer: 1789,
    unit: "année"
  },
  {
    id: "culture-ddhc",
    prompt: "En quelle année la Declaration des droits de l'homme et du citoyen est-elle adoptee ?",
    answer: 1789,
    unit: "année"
  },
  {
    id: "culture-napoleon-empereur",
    prompt: "En quelle année Napoleon Ier devient-il empereur ?",
    answer: 1804,
    unit: "année"
  },
  {
    id: "culture-abolition-esclavage-fr",
    prompt: "En quelle année l'esclavage est-il aboli en France (deuxieme abolition) ?",
    answer: 1848,
    unit: "année"
  },
  {
    id: "culture-guerre-14-18-debut",
    prompt: "En quelle année debute la Premiere Guerre mondiale ?",
    answer: 1914,
    unit: "année"
  },
  {
    id: "culture-guerre-14-18-fin",
    prompt: "En quelle année se termine la Premiere Guerre mondiale ?",
    answer: 1918,
    unit: "année"
  },
  {
    id: "culture-guerre-39-45-debut",
    prompt: "En quelle année debute la Seconde Guerre mondiale ?",
    answer: 1939,
    unit: "année"
  },
  {
    id: "culture-guerre-39-45-fin",
    prompt: "En quelle année se termine la Seconde Guerre mondiale ?",
    answer: 1945,
    unit: "année"
  },
  {
    id: "culture-onu",
    prompt: "En quelle année l'ONU est-elle fondee ?",
    answer: 1945,
    unit: "année"
  },
  {
    id: "superficie-mongol-empire",
    prompt: "Quelle etait la superficie maximale de l'Empire mongol ?",
    answer: 33,
    unit: "millions km2"
  },
  {
    id: "culture-premiers-jo-modernes",
    prompt: "En quelle année ont lieu les premiers Jeux olympiques modernes ?",
    answer: 1896,
    unit: "année"
  },
  {
    id: "culture-1er-homme-lune",
    prompt: "En quelle année l'homme marche-t-il pour la premiere fois sur la Lune ?",
    answer: 1969,
    unit: "année"
  },
  {
    id: "culture-ue-maastricht",
    prompt: "En quelle année le traité de Maastricht est-il signé ?",
    answer: 1992,
    unit: "année"
  },
  {
    id: "culture-euro-circulation",
    prompt: "En quelle année l'euro entre-t-il en circulation fiduciaire ?",
    answer: 2002,
    unit: "année"
  },
  {
    id: "culture-declaration-indep-us",
    prompt: "En quelle année la declaration d'independance des Etats-Unis est-elle adoptee ?",
    answer: 1776,
    unit: "année"
  },
  {
    id: "culture-constitution-us",
    prompt: "En quelle année la Constitution des Etats-Unis est-elle adoptee ?",
    answer: 1787,
    unit: "année"
  },
  {
    id: "culture-revolution-russe",
    prompt: "En quelle année a lieu la Revolution russe d'Octobre ?",
    answer: 1917,
    unit: "année"
  },
  {
    id: "culture-premiere-republique-fr",
    prompt: "En quelle année est proclamee la Premiere Republique francaise ?",
    answer: 1792,
    unit: "année"
  },
  {
    id: "culture-abolition-monarchie-fr",
    prompt: "En quelle année la monarchie est-elle abolie en France ?",
    answer: 1792,
    unit: "année"
  },
  {
    id: "culture-traites-rome",
    prompt: "En quelle année les traites de Rome sont-ils signes ?",
    answer: 1957,
    unit: "année"
  },
  {
    id: "culture-fin-guerre-froide",
    prompt: "En quelle année l'URSS est-elle dissoute ?",
    answer: 1991,
    unit: "année"
  },
  {
    id: "culture-canal-suez",
    prompt: "En quelle année le canal de Suez est-il inaugure ?",
    answer: 1869,
    unit: "année"
  },
  {
    id: "culture-canal-panama",
    prompt: "En quelle année le canal de Panama est-il inaugure ?",
    answer: 1914,
    unit: "année"
  },
  {
    id: "culture-tour-pise",
    prompt: "En quelle année la construction de la tour de Pise commence-t-elle ?",
    answer: 1173,
    unit: "année"
  },
  {
    id: "culture-louvre-musee",
    prompt: "En quelle année le musee du Louvre ouvre-t-il ?",
    answer: 1793,
    unit: "année"
  },
  {
    id: "culture-universite-bologne",
    prompt: "En quelle année traditionnelle l'universite de Bologne est-elle fondee ?",
    answer: 1088,
    unit: "année"
  },
  {
    id: "culture-bastille",
    prompt: "En quelle année la Bastille est-elle prise ?",
    answer: 1789,
    unit: "année"
  },
  {
    id: "culture-trafalgar",
    prompt: "En quelle année a lieu la bataille de Trafalgar ?",
    answer: 1805,
    unit: "année"
  },
  {
    id: "culture-waterloo",
    prompt: "En quelle année a lieu la bataille de Waterloo ?",
    answer: 1815,
    unit: "année"
  },
  {
    id: "culture-independance-algerie",
    prompt: "En quelle année l'Algerie devient-elle independante ?",
    answer: 1962,
    unit: "année"
  },
  {
    id: "culture-berlin-airlift",
    prompt: "En quelle année debute le pont aerien de Berlin ?",
    answer: 1948,
    unit: "année"
  },
  {
    id: "culture-premier-transistor",
    prompt: "En quelle année le transistor est-il inventé ?",
    answer: 1947,
    unit: "année"
  },
  {
    id: "culture-telephone-bell",
    prompt: "En quelle année Alexander Graham Bell dépose-t-il le brevet du téléphone ?",
    answer: 1876,
    unit: "année"
  },
  {
    id: "culture-ampoule-edison",
    prompt: "En quelle année Edison dépose-t-il un brevet pour l'ampoule à incandescence ?",
    answer: 1879,
    unit: "année"
  },
  {
    id: "culture-premier-avion-wright",
    prompt: "En quelle année a lieu le premier vol motorisé des frères Wright ?",
    answer: 1903,
    unit: "année"
  },
  {
    id: "culture-titanic",
    prompt: "En quelle année le Titanic coule-t-il ?",
    answer: 1912,
    unit: "année"
  },
  {
    id: "culture-année-bicentenaire-us",
    prompt: "En quelle année a eu lieu le bicentenaire des Etats-Unis ?",
    answer: 1976,
    unit: "année"
  },
  {
    id: "nombre-film-christopher-nolan",
    prompt: "Combien de films Christopher Nolan a-t-il réalisés ?",
    answer: 11,
    unit: "nombre total"
  },
  {
    id: "culture-16e-amendement-us",
    prompt: "En quelle année le 16e amendement US est-il ratifié ?",
    answer: 1913,
    unit: "année"
  },
  {
    id: "culture-1re-revolution-industrielle",
    prompt: "En quelle année approximative débute la première Révolution industrielle ?",
    answer: 1760,
    unit: "année"
  },
  {
    id: "culture-fin-moyen-age",
    prompt: "En quelle année survient la chute de Constantinople ?",
    answer: 1453,
    unit: "année"
  },
  {
    id: "culture-debut-renaissance",
    prompt: "En quelle année approximative débute la Renaissance en Italie ?",
    answer: 1400,
    unit: "année"
  },
  {
    id: "culture-premier-roman-astro",
    prompt: "En quelle année Sputnik 1 est-il lancé ?",
    answer: 1957,
    unit: "année"
  },
  {
    id: "culture-premier-homme-espace",
    prompt: "En quelle année Youri Gagarine devient-il le premier homme dans l'espace ?",
    answer: 1961,
    unit: "année"
  },
  {
    id: "culture-attaque-pearl-harbor",
    prompt: "En quelle année l'attaque de Pearl Harbor a-t-elle lieu ?",
    answer: 1941,
    unit: "année"
  },
  {
    id: "culture-fin-apartheid",
    prompt: "En quelle année Nelson Mandela devient-il président de l'Afrique du Sud ?",
    answer: 1994,
    unit: "année"
  },
  {
    id: "culture-premier-ipad",
    prompt: "En quelle année le premier iPad est-il lancé ?",
    answer: 2010,
    unit: "année"
  },
  {
    id: "culture-bombe-hiroshima",
    prompt: "Quelle est la puissance approximative de la bombe d'Hiroshima (Little Boy) en kilotonnes de TNT ?",
    answer: 15,
    unit: "kt"
  },
  {
    id: "culture-tour-eiffel-hauteur",
    prompt: "Quelle est la hauteur historique de la tour Eiffel (sans antennes modernes) ?",
    answer: 300,
    unit: "mètres"
  },
  {
    id: "culture-mona-lisa",
    prompt: "En quelle année la Joconde est-elle peinte ?",
    answer: 1503,
    unit: "année"
  },
  {
    id: "culture-impression-soleil-levant",
    prompt: "En quelle année Monet peint-il 'Impression, soleil levant' ?",
    answer: 1872,
    unit: "année"
  },
  {
    id: "culture-cine-1er-film",
    prompt: "En quelle année a lieu la première projection publique des frères Lumière ?",
    answer: 1895,
    unit: "année"
  },
  {
    id: "culture-premier-oscar",
    prompt: "En quelle année a lieu la première cérémonie des Oscars ?",
    answer: 1929,
    unit: "année"
  },
  {
    id: "culture-facebook-lancément",
    prompt: "En quelle année Facebook est-il lancé ?",
    answer: 2004,
    unit: "année"
  },
  {
    id: "culture-wikipedia-lancément",
    prompt: "En quelle année Wikipedia est-elle lancée ?",
    answer: 2001,
    unit: "année"
  },
  {
    id: "culture-google-fonde",
    prompt: "En quelle année Google est-il fondé ?",
    answer: 1998,
    unit: "année"
  },
  {
    id: "culture-apple-fonde",
    prompt: "En quelle année Apple est-elle fondée ?",
    answer: 1976,
    unit: "année"
  },
  {
    id: "culture-microprocesseur-4004",
    prompt: "En quelle année l'Intel 4004 (premier microprocesseur) est-il lancé ?",
    answer: 1971,
    unit: "année"
  },
  {
    id: "culture-premiere-missile",
    prompt: "En quelle année Apollo 13 est-il lancé ?",
    answer: 1970,
    unit: "année"
  },
  {
    id: "culture-berlin-jo",
    prompt: "En quelle année ont lieu les JO de Berlin ?",
    answer: 1936,
    unit: "année"
  },
  {
    id: "culture-vitesse-lumiere",
    prompt: "Quelle est la vitesse de la lumière dans le vide ?",
    answer: 300000,
    unit: "km/s"
  },
  {
    id: "culture-age-univers",
    prompt: "Quel est l'age approximatif de l'Univers ?",
    answer: 13.8,
    unit: "milliards d'années"
  },
  {
    id: "culture-age-terre",
    prompt: "Quel est l'age approximatif de la Terre  ?",
    answer: 4.5,
    unit: "milliards d'années"
  },
  {
    id: "nombre-page-don-quichotte",
    prompt: "Quel est le nombre de pages du Don Quichotte ?",
    answer: 1260,
    unit: "pages"
  },
  {
    id: "age-mort-michael-jackson",
    prompt: "Quel est l'âge de Michael Jackson au moment de sa mort ?",
    answer: 50,
    unit: "année"
  },
  {
    id: "age-mort-bob-marley",
    prompt: "Quel est l'âge de Bob Marley au moment de sa mort ?",
    answer: 36,
    unit: "année"
  },
  {
    id: "taille-moyenne-diplodocus",
    prompt: "Quelle est la taille moyenne d'un diplodocus ?",
    answer: 25,
    unit: "mètres"
  },
  {
    id: "poids-moyen-trex",
    prompt: "Quel est le poids moyen d'un Tyrannosaurus rex ?",
    answer: 8000,
    unit: "kg"
  },
  {
    id: "nombre-medailles-france-jo-tokyo-2020",
    prompt: "Quel est le nombre de médailles remportées par la France aux JO de Tokyo 2020 ?",
    answer: 33,
    unit: "médailles"
  },
  {
    id: "culture-son-vitesse",
    prompt: "Quelle est la vitesse du son dans l'air ?",
    answer: 343,
    unit: "m/s"
  },
  {
    id: "culture-shakespeare-songs",
    prompt: "En quelle année Shakespeare nait-il ?",
    answer: 1564,
    unit: "année"
  },
  {
    id: "culture-mort-newton",
    prompt: "En quelle année Isaac Newton meurt-il ?",
    answer: 1727,
    unit: "année"
  },
  {
    id: "culture-mort-einstein",
    prompt: "En quelle année Albert Einstein meurt-il ?",
    answer: 1955,
    unit: "année"
  },
  {
    id: "culture-mort-curie",
    prompt: "En quelle année Marie Curie meurt-elle ?",
    answer: 1934,
    unit: "année"
  },
  {
    id: "culture-naissance-darwin",
    prompt: "En quelle année Charles Darwin nait-il ?",
    answer: 1809,
    unit: "année"
  },
  {
    id: "decalee-humain-litres-sang",
    prompt: "Quel est le volume de sang d'un adulte ?",
    answer: 5,
    unit: "litres"
  },
  {
    id: "decalee-cameleon-langue",
    prompt: "La langue d'un camaleon peut mesurer environ combien de fois la longueur de son corps ?",
    answer: 2,
    unit: "fois"
  },
  {
    id: "decalee-eclair-vitesse",
    prompt: "Quelle est la temperature approximative d'un eclair ?",
    answer: 30000,
    unit: "°C"
  },
  {
    id: "distance-psg-om",
    prompt: "Quelle est la distance entre le Parc des princes et le Vélodrome ?",
    answer: 665,
    unit: "km"
  },
  {
    id: "gwr-most-shots-on-goal-both-teams-nhl-postseason-game",
    prompt: "Quel est le record du plus grand nombre de tirs cadrés (les deux équipes) dans un match de playoffs de NHL ?",
    answer: 151,
    unit: "nombre total"
  },
  {
    id: "gwr-highest-restaurant-in-a-building",
    prompt: "Quel est le record du restaurant situé le plus haut dans un bâtiment ?",
    answer: 556.36,
    unit: "mètres"
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
    id: "gwr-most-consecutive-olympic-swimming-gold-medals-in-the-same-event-female",
    prompt: "Quel est le record du plus grand nombre de médailles d’or olympiques consécutives en natation sur la même épreuve (femme) ?",
    answer: 4,
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
    id: "gwr-largest-indoor-artificial-wave",
    prompt: "Quel est le record de la plus grande vague artificielle en intérieur ?",
    answer: 3.2,
    unit: "mètres"
  },
  {
    id: "nombre-pandas-asiatiques-vivants",
    prompt: "Combien de pandas asiatiques vivants y a-t-il dans le monde ?",
    answer: 1864,
    unit: "nombre total"
  },
  {
    id: "nombre-flight-daily-commercial-flights",
    prompt: "Combien de vols commerciaux ont lieu chaque jour dans le monde ?",
    answer: 100000,
    unit: "nombre total"
  },
  {
    id: "nombre-french-kings",
    prompt: "Combien de rois français ont régné ?",
    answer: 32,
    unit: "nombre total"
  },
  {
    id: "nombre-pyramides-egypte",
    prompt: "Combien de pyramides y a-t-il en Égypte ?",
    answer: 138,
    unit: "nombre total"
  },
  {
    id: "nombre-november-11-attacks",
    prompt: "Combien de personnes ont été tuées lors des attaques du 11 septembre ?",
    answer: 2977,
    unit: "nombre total"
  },
  {
    id: "nombre-maracana-stadium-capacity",
    prompt: "Quelle est la capacité du stade Maracana ?",
    answer: 78838,
    unit: "nombre total"
  },
  {
    id: "nombre-arbres-monde",
    prompt: "Combien d'arbres y a-t-il dans le monde ?",
    answer: 3000,
    unit: "milliards"
  },
  {
    id: "spiciest-pepper-world",
    prompt: "Quel est la puissance du piment le plus épicé du monde ?",
    answer: 3.18,
    unit: "millions d'unités Scoville"
  },
  {
    id: "nombre-entree-asterix-mission-cleopatre",
    prompt: "Combien d'entrées le film Astérix : Mission Cléopâtre a-t-il eu au box-office ?",
    answer: 14.5,
    unit: "millions d'entrées"
  },
  {
    id: "size-amazon-river",
    prompt: "Quelle est la taille de la rivière Amazone ?",
    answer: 6992,
    unit: "kilomètres"
  },
  {
    id: "size-k2",
    prompt: "A combien culmine le K2 ?",
    answer: 8611,
    unit: "mètres"
  },
  {
    id: "nemo-point-first-land-distance",
    prompt: "Quelle est la distance entre le point Nemo et la terre la plus proche ?",
    answer: 2688,
    unit: "kilomètres"
  },
  {
    id: "size-nil-river",
    prompt: "Quelle est la taille de la rivière Nil ?",
    answer: 6650,
    unit: "kilomètres"
  },
  {
    id: "size-christ-redempteur-statue",
    prompt: "Quelle est la taille de la statue du Christ Rédempteur ?",
    answer: 30,
    unit: "mètres"
  },
  {
    id: "number-different-species-of-birds-bresil",
    prompt: "Combien d'espèces d'oiseaux différentes y a-t-il au Brésil ?",
    answer: 1800,
    unit: "nombre total"
  },
  {
    id: "number-litters-ocean",
    prompt: "Combien de litres d'eau y a-t-il dans les océans ?",
    answer: 1338,
    unit: "millions de kilomètres cubes"
  },
  {
    id: "decibels-loudest-sound",
    prompt: "Quel est le niveau sonore du son le plus fort jamais enregistré ?",
    answer: 194,
    unit: "décibels"
  },
  {
    id: "decibels-f1-engine",
    prompt: "Quel est le niveau sonore d'un moteur de Formule 1 ?",
    answer: 150,
    unit: "décibels"
  },
  {
    id: "tons-plastic-produced-yearly",
    prompt: "Combien de tonnes de plastique sont produites chaque année dans le monde ?",
    answer: 300,
    unit: "millions de tonnes"
  },
  {
    id: "tons-ocean-plastic",
    prompt: "Combien de tonnes de plastique se trouvent dans les océans ?",
    answer: 150,
    unit: "millions de tonnes"
  },
  {
    id: "highest-temperature-recorded-on-earth",
    prompt: "Quelle est la température la plus élevée jamais enregistrée sur Terre ?",
    answer: 56.7,
    unit: "degrés Celsius"
  },
  {
    id: "low-temperature-recorded-on-earth",
    prompt: "Quelle est la température la plus basse jamais enregistrée sur Terre ?",
    answer: -89.2,
    unit: "degrés Celsius"
  },
  {
    id: "deepest-point-on-earth",
    prompt: "Quel est le point le plus profond de la Terre ?",
    answer: 10994,
    unit: "mètres"
  },
  {
    id: "gwr-heaviest-weight-supported-with-the-mouth-on-parallel-bars",
    prompt: "Quel est le record du poids le plus lourd soutenu avec la bouche sur barres parallèles ?",
    answer: 90.3,
    unit: "kilogrammes"
  },
  {
    id: "gwr-highest-altitude-skydiving-with-a-banner-flag",
    prompt: "Quel est le record du saut en parachute à la plus haute altitude ?",
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
    prompt: "Quel est le record du plus grand nombre de pompes en une heure avec un sac de 18kg ?",
    answer: 1240,
    unit: "nombre total"
  },
  {
    id: "gwr-heaviest-weight-lifted-by-tongue",
    prompt: "Quel est le record du poids le plus lourd soulevé avec la langue ?",
    answer: 13,
    unit: "kilogrammes"
  },
  {
    id: "gwr-most-winter-paralympics-cross-country-skiing-gold-medals-male",
    prompt: "Quel est le record du plus grand nombre de médailles d’or en ski de fond aux Jeux paralympiques d’hiver (homme) ?",
    answer: 16,
    unit: "nombre total"
  },
  {
    id: "gwr-most-pull-ups-from-a-helicopter-in-one-minute",
    prompt: "Quel est le record du plus grand nombre de tractions depuis un hélicoptère en une minute ?",
    answer: 32,
    unit: "nombre total"
  },
  {
    id: "gwr-longest-cucumber",
    prompt: "Quel est le record du concombre le plus long ?",
    answer: 113.4,
    unit: "centimètres"
  },
  {
    id: "but-pele-goals",
    prompt: "Quel est le record du plus grand nombre de buts marqués par Pelé ?",
    answer: 1281,
    unit: "nombre total"
  },
  {
    id: "highest-scoring-rugby-game",
    prompt: "Quel est le record du plus grand nombre de points marqués dans un match de rugby ?",
    answer: 149,
    unit: "nombre total"
  },
  {
    id: "highest-scoring-nba-game",
    prompt: "Quel est le record du plus grand nombre de points marqués dans un match de la NBA ?",
    answer: 186,
    unit: "nombre total"
  },
  {
    id: "longest-tennis-game",
    prompt: "Quel est le record du plus long match de tennis ?",
    answer: 11,
    unit: "heures"
  },
  {
    id: "highest-paint-price",
    prompt: "Quel est le record du prix le plus élevé payé pour une peinture ?",
    answer: 450.3,
    unit: "millions de dollars"
  },
  {
    id: "highest-jewelry-price",
    prompt: "Quel est le record du prix le plus élevé payé pour un bijou ?",
    answer: 200,
    unit: "millions de dollars"
  },
  {
    id: "number-asian-countries",
    prompt: "Quel est le nombre de pays asiatiques ?",
    answer: 49,
    unit: "nombre total"
  },
  {
    id: "number-european-union-countries",
    prompt: "Quel est le nombre de pays de l'Union européenne ?",
    answer: 27,
    unit: "nombre total"
  },
  {
    id: "number-ww2-countries",
    prompt: "Quel est le nombre de pays ayant participé à la Seconde Guerre mondiale ?",
    answer: 61,
    unit: "nombre total"
  },
  {
    id: "fastest-minecraft-player-to-reach-the-end",
    prompt: "Quel est le temps record pour un joueur de Minecraft pour atteindre la fin ?",
    answer: 8,
    unit: "minutes"
  },
  {
    id: "number-sold-bibles",
    prompt: "Quel est le nombre de bibles vendues dans le monde ?",
    answer: 5000000000,
    unit: "nombre total"
  },
  {
    id: "number-jew-dead-dachau",
    prompt: "Quel est le nombre de Juifs morts à Dachau ?",
    answer: 31000,
    unit: "nombre total"
  },
  {
    id: "population-iceland",
    prompt: "Quelle est la population de l'Islande ?",
    answer: 366000,
    unit: "nombre total"
  },
  {
    id: "population-jordanie",
    prompt: "Quelle est la population de la Jordanie ?",
    answer: 1020000,
    unit: "nombre total"
  },
  {
    id: "end-slave-date",
    prompt: "Quelle est la date de la fin de l'esclavage aux États-Unis ?",
    answer: 1865,
    unit: "année"
  },
  {
    id: "jfk-assassination-date",
    prompt: "Quelle est la date de l'assassinat de John F. Kennedy ?",
    answer: 1963,
    unit: "année"
  },
  {
    id: "etat-eglise-separation-date",
    prompt: "Quelle est la date de la séparation de l'Église et de l'État en France ?",
    answer: 1905,
    unit: "année"
  },
  {
    id: "imprimerie-invention-date",
    prompt: "Quelle est la date de l'invention de l'imprimerie ?",
    answer: 1440,
    unit: "année"
  },
  {
    id: "mandela-release-date",
    prompt: "Quelle est la date de la libération de Nelson Mandela ?",
    answer: 1990,
    unit: "année"
  },
  {
    id: "first-cricket-match-date",
    prompt: "Quelle est la date du premier match de cricket ?",
    answer: 1844,
    unit: "année"
  },
  {
    id: "first-nba-game-date",
    prompt: "Quelle est la date du premier match de la NBA ?",
    answer: 1946,
    unit: "année"
  },
  {
    id: "highest-hot-dog-eaten-in-10-minutes",
    prompt: "Quel est le record du plus grand nombre de hot-dogs mangés en 10 minutes ?",
    answer: 76,
    unit: "nombre total"
  },
  {
    id: "tallest-man-ever",
    prompt: "Quel est le record du plus grand homme jamais enregistré ?",
    answer: 272,
    unit: "centimètres"
  },
  {
    id: "heaviest-man-ever",
    prompt: "Quel est le record du plus lourd homme jamais enregistré ?",
    answer: 635,
    unit: "kilogrammes"
  },
  {
    id: "highest-record-box-office-gross-for-a-film",
    prompt: "Quel est le record du plus grand box-office pour un film ?",
    answer: 2790,
    unit: "millions de dollars"
  },
  {
    id: "highest-grossing-video-game-franchise",
    prompt: "Quel est le record de la franchise de jeux vidéo la plus lucrative ?",
    answer: 300,
    unit: "millions de dollars"
  },
  {
    id: "biggest-snake-ever-recorded",
    prompt: "Quel est le record du plus grand serpent jamais enregistré ?",
    answer: 9.75,
    unit: "mètres"
  },
  {
    id: "biggest-fish-ever-recorded",
    prompt: "Quel est le record du plus grand poisson jamais enregistré ?",
    answer: 5.5,
    unit: "mètres"
  },
  {
    id: "biggest-bird-ever-recorded",
    prompt: "Quel est le record du plus grand oiseau jamais enregistré ?",
    answer: 2.7,
    unit: "mètres"
  },
  {
    id: "biggest-tree-ever-recorded",
    prompt: "Quel est le record du plus grand arbre jamais enregistré ?",
    answer: 115.55,
    unit: "mètres"
  },
  {
    id: "fastest-car-ever-recorded",
    prompt: "Quel est le record de la voiture la plus rapide jamais enregistrée ?",
    answer: 490.48,
    unit: "km/h"
  },
  {
    id: "fastest-train-ever-recorded",
    prompt: "Quel est le record du train le plus rapide jamais enregistré ?",
    answer: 574.8,
    unit: "km/h"
  },
  {
    id: "fastest-man-ever-recorded",
    prompt: "Quel est le record de l'homme le plus rapide jamais enregistré ?",
    answer: 44.72,
    unit: "km/h"
  },
  {
    id: "oldest-person-ever-recorded",
    prompt: "Quel est le record de la personne la plus âgée jamais enregistrée ?",
    answer: 122,
    unit: "années"
  },
  {
    id: "number-daily-emails-sent",
    prompt: "Quel est le record du nombre d'emails envoyés en une journée ?",
    answer: 306,
    unit: "millions"
  },
  {
    id: "highest-peak-players-fortnite",
    prompt: "Quel est le record du nombre de joueurs simultanés sur Fortnite ?",
    answer: 10.8,
    unit: "millions"
  },
  {
    id: "longest-distance-swum-underwater-with-one-breath-with-fins-la1",
    prompt: "Quel est le record de la plus longue distance nagée sous l’eau en apnée avec palmes ?",
    answer: 76.7,
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
    id: "gwr-highest-score-in-figure-skating-short-programme-men",
    prompt: "Quel est le record du score le plus élevé en programme court de patinage artistique (hommes) ?",
    answer: 113.97,
    unit: "nombre total"
  },
  {
    id: "gwr-most-streamed-album-on-spotify-in-24-hours",
    prompt: "Quel est le record de l’album le plus streamé sur Spotify en 24 heures ?",
    answer: 313.7,
    unit: "millions de streams"
  },
  {
    id: "gwr-most-blood-plasma-donated-male",
    prompt: "Quel est le record du plus grand volume de plasma sanguin donné (homme) ?",
    answer: 1064.568,
    unit: "litres"
  },
  {
    id: "usa-superficie",
    prompt: "Quel est le record de la superficie des États-Unis ?",
    answer: 9372610,
    unit: "km²"
  },
  {
    id: "moon-rayon",
    prompt: "Quel est le record du rayon de la Lune ?",
    answer: 1737.4,
    unit: "km"
  },
  {
    id: "mars-temperature",
    prompt: "Quel est la température sur Mars ?",
    answer: -63,
    unit: "°C"
  },
  {
    id: "gwr-longest-distance-swum-underwater-with-one-breath-with-fins-la1",
    prompt: "Quel est le record de la plus longue distance nagée sous l’eau en apnée avec palmes (LA1) ?",
    answer: 76.7,
    unit: "mètres"
  },
  {
    id: "gwr-most-expensive-cognac-sold-in-a-private-sale",
    prompt: "Quel est le record du cognac le plus cher vendu lors d’une vente privée ?",
    answer: 1.7,
    unit: "millions de livres sterling"
  },
  {
    id: "gwr-most-pool-balls-potted-off-the-break",
    prompt: "Quel est le record du plus grand nombre de billes de billard empochées dès la casse ?",
    answer: 6,
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
    id: "gwr-most-consecutive-wins-by-a-team-in-the-fa-women-s-super-league",
    prompt: "Quel est le record du plus grand nombre de victoires consécutives par une équipe en FA Women’s Super League ?",
    answer: 14,
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
    id: "gwr-most-appearances-in-the-rugby-union-english-premiership",
    prompt: "Quel est le record du plus grand nombre d’apparitions en Premiership anglaise de rugby à XV ?",
    answer: 318,
    unit: "nombre total"
  },
  {
    id: "gwr-heaviest-combined-weight-throwing-people-over-a-bar-in-three-minutes-male",
    prompt: "Quel est le record du poids total le plus élevé (cumulé) en projetant des personnes par-dessus une barre en trois minutes (homme) ?",
    answer: 1203.6,
    unit: "kilogrammes"
  },
  {
    id: "gwr-most-handball-goals-at-a-single-olympic-games-male",
    prompt: "Quel est le record du plus grand nombre de buts de handball marqués lors d’une seule édition des Jeux olympiques (homme) ?",
    answer: 61,
    unit: "nombre total"
  },
  {
    id: "gwr-most-football-soccer-penalties-taken-in-one-hour-la1",
    prompt: "Quel est le record du plus grand nombre de penalties tirés au football en une heure (LA1) ?",
    answer: 356,
    unit: "nombre total"
  },
  {
    id: "gwr-most-subscribers-for-an-entertainment-channel-on-youtube",
    prompt: "Quel est le record du plus grand nombre d’abonnés pour une chaîne YouTube de divertissement ?",
    answer: 146,
    unit: "millions d’abonnés"
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
    id: "gwr-largest-collection-of-kansas-city-chiefs-memorabilia",
    prompt: "Quel est le record de la plus grande collection de souvenirs des Kansas City Chiefs ?",
    answer: 1110,
    unit: "nombre total"
  },
  {
    id: "gwr-greatest-distance-on-an-electric-motor-scooter-in-24-hours-individual",
    prompt: "Quel est le record de la plus grande distance parcourue en trottinette électrique en 24 heures ?",
    answer: 1158.72,
    unit: "kilomètres"
  },
  {
    id: "gwr-most-people-performing-the-wheel-pose-simultaneously-yoga",
    prompt: "Quel est le record du plus grand nombre de personnes réalisant simultanément la posture de la roue (yoga) ?",
    answer: 351,
    unit: "nombre de personnes"
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
    id: "gwr-largest-tongue-circumference-female",
    prompt: "Quel est le record du plus grand tour de langue (femme) ?",
    answer: 13.83,
    unit: "centimètres"
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
    id: "gwr-most-360-degree-spins-while-hanging-upside-down-from-aerial-straps-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de rotations à 360° en étant suspendu la tête en bas à des sangles aériennes en une minute (homme) ?",
    answer: 164,
    unit: "nombre total"
  },
  {
    id: "gwr-largest-paddle-board-yoga-class",
    prompt: "Quel est le record du plus grand cours de yoga sur paddle ?",
    answer: 305,
    unit: "nombre de personnes"
  },
  {
    id: "gwr-largest-mexican-folk-dance",
    prompt: "Quel est le record de la plus grande danse folklorique mexicaine ?",
    answer: 1095,
    unit: "nombre de personnes"
  },
  {
    id: "longest-flight-duration-by-a-commercial-aircraft",
    prompt: "Quel est le record de la plus longue durée de vol par un avion commercial ?",
    answer: 18.5,
    unit: "heures"
  },
  {
    id: "longest-train-line",
    prompt: "Quel est le record de la plus longue ligne de train au monde ?",
    answer: 7750,
    unit: "kilomètres"
  },
  {
    id: "heaviest-lift-ever-recorded",
    prompt: "Quel est le record de la plus grande charge jamais soulevée ?",
    answer: 6400,
    unit: "tonnes"
  },
  {
    id: "gwr-most-lateral-bench-hop-overs-in-one-minute-male",
    prompt: "Quel est le record du plus grand nombre de sauts latéraux par-dessus un banc en une minute (homme) ?",
    answer: 111,
    unit: "nombre total"
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
    id: "longest-tunnel",
    prompt: "Quel est le record du plus long tunnel ?",
    answer: 57.1,
    unit: "km"
  },
  {
    id: "longest-reign-of-a-french-king",
    prompt: "Quel est le record du plus long règne d'un roi français ?",
    answer: 72,
    unit: "années"
  },
  {
    id: "taille-moyenne-homme",
    prompt: "Quel est le record de la taille moyenne d'un homme ?",
    answer: 175.26,
    unit: "cm"
  },
  {
    id: "taille-moyenne-girafe",
    prompt: "Quel est le record de la taille moyenne d'une girafe ?",
    answer: 487.64,
    unit: "cm"
  },
];

export const DEFAULT_QUESTION = QUESTION_BANK[0];