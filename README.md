# portfolio

Source for https://fooaad.github.io, built with Astro.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build into dist/
```

## Edit content

- Homepage text: `src/data/site.ts`
- Posts: `src/content/writing/`

## Write a post (from your phone too)

Add a file to `src/content/writing/`, for example `my-first-post.md`:

```md
---
title: My first post
date: 2026-10-07
description: One line about it.
---

Write in markdown here.
```

Commit to `main` (the GitHub mobile app works) and the site redeploys in about a minute. Add `draft: true` to keep a post unpublished.

## Deploy

Every push to `main` builds and publishes via `.github/workflows/deploy.yml`.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
