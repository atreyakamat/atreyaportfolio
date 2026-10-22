# Atreya Kamat — Developer Portfolio

Source for [atreyakamat.dev](https://atreyakamat.dev), the primary software-engineering profile of Atreya Kamat.

## Stack

- React 19, TypeScript, Vite
- Tailwind CSS 4, Framer Motion
- React Router (route-level lazy loading)
- Hosted on Netlify

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run lint      # ESLint
npm run build     # type-check and production build into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  components/   Reusable UI sections (Hero, Projects, Experience, ...)
  pages/        Route components (home, projects, project detail, ...)
  data/         portfolioData.ts — single source of truth for all content
  assets/       Bundled images
public/         Static files: resume PDF, project images, favicons,
                robots.txt, sitemap.xml, _redirects
```

## Content rules

- All copy, projects, links and experience live in `src/data/portfolioData.ts`.
- A project URL that is not confirmed stays `null`. Never substitute a generic GitHub link.
- Do not add metrics, clients or results that are not backed by evidence.

## Deployment

Netlify builds with `npm run build` and publishes `dist/`. `public/_redirects` rewrites all routes to `index.html` for client-side routing.

## Roadmap

A redesigned v2 is planned as a Next.js monorepo covering `atreyakamat.dev`, `teach.atreyakamat.dev`, `create.atreyakamat.dev` and `speak.atreyakamat.dev`. Work happens on feature branches via draft pull requests.
