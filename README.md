# Atreya Kamat — web ecosystem

One npm-workspaces monorepo for four sites that share a brand and a component library.

| App | Domain | Palette | What it is |
| --- | --- | --- | --- |
| `apps/dev` | [atreyakamat.dev](https://atreyakamat.dev) | Midnight Citrus (navy + lemon) | Freelance product engineering, Goa services, proof of work |
| `apps/teach` | teach.atreyakamat.dev | Sunlit Ink (paper + ink + lemon marker) | Tuition and workshops |
| `apps/speak` | speak.atreyakamat.dev | Cobalt Lemonade (cobalt + lemonade) | Talks and booking |
| `apps/create` | create.atreyakamat.dev | Acid Duotone (black + acid lemon) | Brand, stickers, creative coding, reels |

Shared packages:

- `packages/brand`: colour tokens (`tokens.css`), motion constants, the AK monogram.
- `packages/ui`: shared interactive components (bento tiles, spec-sheet section headers, reveals, tilt card, spotlight card, number ticker, scroll-lit text, ecosystem switcher, smooth-scroll provider).

Stack: Next.js (static export), TypeScript, Tailwind CSS 4, Framer Motion, Lenis. Fonts are self-hosted with `@fontsource`.

## Commands

```bash
npm install            # once, at the repo root
npm run dev            # atreyakamat.dev on localhost:3000
npm run dev:teach      # or dev:speak, dev:create
npm run build          # dev site → apps/dev/out
npm run build:teach    # or build:speak, build:create, build:all
npm run lint           # all workspaces
```

## Deployment (Netlify, one site per app)

- **atreyakamat.dev:** the root `netlify.toml` builds `apps/dev` and publishes `apps/dev/out`. Leave the base directory empty in the Netlify UI.
- **teach / speak / create:** create a new Netlify site from this repo. Set the base directory to `apps/<name>`, and Netlify reads `apps/<name>/netlify.toml` (build `npm run build`, publish `out`). Then add the custom domain `<name>.atreyakamat.dev`.

## Content rules

- Content lives in each app's `src/data/` files.
- A URL that is not confirmed stays `null`. Never link a private repo.
- No metrics, clients, testimonials, dates or results without evidence.
- Lemon is never text on a light background (contrast about 1.1:1). On light surfaces it is a fill or a highlighter.

## Legacy

The previous Vite site lives in `legacy/vite-site` for reference (`npm run legacy:build`).
