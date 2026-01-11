# Betsept

Simple web app for a numeric trivia game inspired by Gambit 7.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Mode reseau (Vercel KV)

Le mode reseau utilise Vercel KV pour stocker les parties.

Variables d'environnement requises (Vercel ou en local):

- KV_URL
- KV_REST_API_URL
- KV_REST_API_TOKEN
- KV_REST_API_READ_ONLY_TOKEN

Une fois configure, choisissez "Reseau" dans l'interface pour creer ou rejoindre une partie.
Les parties reseau sont supprimees automatiquement apres 7 manches.
