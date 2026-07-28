# atreyakamat.dev — Technical Stack

## Core Principle

The root website is intentionally simple.

Do not introduce infrastructure complexity without a measurable reason.

---

## Frontend

React
TypeScript
Vite

Reason:

Existing ecosystem compatibility, excellent development speed,
simple deployment and more than enough capability for this site.

---

## Styling

Tailwind CSS OR well-structured CSS modules.

Preferred:
Tailwind CSS if already present in the repository.

Maintain design tokens through CSS variables.

---

## Motion

Framer Motion / Motion for React

Use only for:

- entrance transitions
- image reveals
- marquee
- subtle hover interactions
- page transitions

Do not introduce GSAP unless an interaction cannot reasonably be
implemented with the existing motion system.

---

## Routing

React Router

Routes initially:

/
 /work
 /work/:slug
 /about
 /resume

Contact may remain homepage anchored.

---

## Content

V1:

Typed TypeScript data files.

Example:

src/data/profile.ts
src/data/projects.ts
src/data/experience.ts
src/data/ecosystem.ts
src/data/currently.ts

Do NOT introduce a CMS for V1.

Content architecture should make migration to a CMS possible later.

---

## Images

Use:

WebP
AVIF where supported

Responsive `srcset`.

Lazy-load below-fold media.

Hero portrait should be prioritised/preloaded appropriately.

---

## Icons

Lucide React or equivalent lightweight SVG icon system.

Avoid large icon packages.

---

## SEO

Use:

semantic metadata
canonical URL
Open Graph
Twitter/X cards
JSON-LD

Structured data:

Person
WebSite
CreativeWork / SoftwareApplication where appropriate

---

## Analytics

Prefer lightweight privacy-conscious analytics.

Track meaningful conversion events only.

---

## Deployment

Recommended:

Vercel

Alternative:

Netlify

The application must remain deployment-provider agnostic where practical.

---

## DNS Architecture

Root:

atreyakamat.dev

Future:

work.atreyakamat.dev
studio.atreyakamat.dev
learn.atreyakamat.dev
speaking.atreyakamat.dev
lab.atreyakamat.dev

Each subdomain may eventually become an independent application.

Do NOT build them into the root application's routing system now.

---

## Quality

TypeScript strict mode.

ESLint.

Prettier.

Build must pass with zero TypeScript errors.

---

## Testing

V1:

Vitest
React Testing Library

Optional:
Playwright for critical navigation/interaction paths.

Test:

navigation
project routing
ecosystem links
resume link
responsive menu
reduced motion
basic accessibility

---

## Performance

Avoid:

Three.js
WebGL
large animation packages
video backgrounds
huge JavaScript bundles
unoptimised photography

Target initial JS should remain deliberately small.

---

## Browser Support

Current stable:

Chrome
Edge
Firefox
Safari

iOS Safari
Chrome Android