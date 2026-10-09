# portfolio

Fuad's personal site, built with Astro + TypeScript. Static output, no backend. Deployed to GitHub Pages at https://fooaad.github.io.

## Commands

- `npm run dev`: dev server on http://localhost:4321 (also the `portfolio` entry in `~/Developer/.claude/launch.json`)
- `npm run build`: type-check (`astro check`) and build into `dist/`; run it before calling a change done
- `npm run preview`: serve the built `dist/` locally

## Where things live

- `src/data/site.ts`: all homepage text (intro, work, research, links). Content changes go here, not in markup.
- `src/content/writing/*.md`: blog posts, one file per post at `/writing/<file-name>/`. Schema in `src/content.config.ts`. `draft: true` posts show in dev only.
- `src/pages/`: routes (`index.astro`, `writing/[id].astro`, `rss.xml.ts`, `404.astro`)
- `src/layouts/Base.astro`: `<head>`, meta tags, theme bootstrap; an optional `slot="aside"` becomes a second column at ≥1100px
- `src/assets/pale-blue-dot-{light,dark}.webp`: homepage illustration after Voyager's Pale Blue Dot, one per theme (ChatGPT-generated, upscaled 2x with Upscayl, backgrounds knocked out to transparency so only the beam and Earth show). Only at 1100px+, full window height, uncropped. Earth's position per image lives in the `art` array in `index.astro`; it drives the ring
- `src/styles/global.css`: all global styles; colors are CSS variables with a `[data-theme='dark']` override
- `.github/workflows/deploy.yml`: builds and deploys on push to `main`

## Conventions

- Keep it minimal: plain CSS, no UI framework, no client JS beyond the theme toggle.
- Import `z` from `astro/zod` (the `astro:content` export is deprecated).
- `public/cv.pdf` is git-ignored because the private CV has a phone number. Commit only a public version.
