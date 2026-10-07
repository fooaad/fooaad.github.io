# portfolio

Content site built with Astro + TypeScript.

## Commands

- `npm run dev` — dev server on http://localhost:4321 (also the `dev` entry in `.claude/launch.json`)
- `npm run build` — build the static site into `dist/`; run it before calling a change done
- `npm run preview` — serve the built `dist/` locally

## Layout

- `src/pages/` — file-based routes (`index.astro` is `/`)
- `src/components/`, `src/layouts/` — reusable `.astro` pieces
- `public/` — static files served as-is at `/`

## Environment variables

- Real values go in `.env.local` (git-ignored). List every variable in `.env.example`.
- Only `PUBLIC_`-prefixed variables reach the browser, and anything in the browser is public. Never put secrets in them.
