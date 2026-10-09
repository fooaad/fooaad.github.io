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
- `src/assets/pale-blue-dot.webp`: homepage image, a tall crop centered on Earth from NASA's Pale Blue Dot Revisited (PIA23645, NASA/JPL-Caltech, credited in the footer). Only at 1100px+, full height, uncropped, edges masked to fade into the page; light mode shows a warm grayscale negative via CSS filter (ink-print look). A ring marks Earth via `earth` (x/y %) in `index.astro`: update it if the crop changes
- `src/styles/global.css`: all global styles; colors are CSS variables with a `[data-theme='dark']` override
- `.github/workflows/deploy.yml`: builds and deploys on push to `main`

## Conventions

- Keep it minimal: plain CSS, no UI framework, no client JS beyond the theme toggle.
- Import `z` from `astro/zod` (the `astro:content` export is deprecated).
- `public/cv.pdf` is git-ignored because the private CV has a phone number. Commit only a public version.
