# atreyakamat.dev — Application Architecture

## 1. Architecture Philosophy

The root portfolio should remain a lightweight independent application.

It acts as the gateway into a larger personal ecosystem.

Do NOT create a monolithic platform containing every future service.

---

# 2. Ecosystem Architecture

                         atreyakamat.dev
                         PERSONAL HUB
                              │
          ┌───────────┬───────┼────────┬────────────┐
          │           │       │        │            │
          ▼           ▼       ▼        ▼            ▼
        BUILD       CREATE   TEACH    SPEAK      EXPERIMENT
          │           │       │        │            │
          ▼           ▼       ▼        ▼            ▼
       work.*       studio.* learn.* speaking.*    lab.*

Each specialised domain may have:

different users
different conversion goals
different content
different functionality
different deployment lifecycle

Therefore each should be allowed to evolve independently.

---

# 3. Root Application

Recommended structure:

src/
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── HeroPortrait.tsx
│   │
│   ├── identity/
│   │   └── IdentityMarquee.tsx
│   │
│   ├── about/
│   │   └── AboutPreview.tsx
│   │
│   ├── disciplines/
│   │   ├── Disciplines.tsx
│   │   └── DisciplineItem.tsx
│   │
│   ├── work/
│   │   ├── SelectedWork.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectMedia.tsx
│   │
│   ├── experience/
│   │   └── Experience.tsx
│   │
│   ├── currently/
│   │   └── Currently.tsx
│   │
│   ├── ecosystem/
│   │   ├── Ecosystem.tsx
│   │   └── EcosystemLink.tsx
│   │
│   └── contact/
│       └── Contact.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── WorkPage.tsx
│   ├── ProjectPage.tsx
│   ├── AboutPage.tsx
│   └── ResumePage.tsx
│
├── data/
│   ├── profile.ts
│   ├── disciplines.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── currently.ts
│   └── ecosystem.ts
│
├── hooks/
│   ├── useReducedMotion.ts
│   └── useAnalytics.ts
│
├── lib/
│   ├── analytics.ts
│   ├── seo.ts
│   └── utils.ts
│
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── typography.css
│
└── assets/
    ├── portraits/
    ├── projects/
    ├── speaking/
    └── creative/

---

# 4. Data Architecture

UI must NOT contain hard-coded portfolio content.

Example:

export interface Discipline {
  id: "build" | "create" | "teach" | "speak" | "experiment";
  title: string;
  description: string;
  href?: string;
  enabled: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  discipline: Discipline["id"];
  year: number | string;
  summary?: string;
  image: string;
  featured: boolean;
  externalUrl?: string;
}

This allows content to evolve without rebuilding component structure.

---

# 5. Component Principles

Components should be:

small
composable
accessible
content-independent

Avoid creating abstractions before they are necessary.

Do NOT create one enormous Homepage component.

Do NOT create a universal "Card" abstraction that forces all visual
content into identical boxes.

Editorial variation is intentional.

---

# 6. Animation Architecture

Motion belongs at component level.

Global motion tokens define:

duration
easing
distance

Components decide how those tokens are applied.

`prefers-reduced-motion` must disable non-essential animation.

No animation may block navigation or content access.

---

# 7. Asset Architecture

Images grouped semantically.

Do not place every asset into one `/images` directory.

Use descriptive filenames.

Example:

assets/
  portraits/
    hero-portrait.webp
    candid-working.webp

  projects/
    pulsewatch/
      cover.webp
      dashboard.webp

    stixnvibes/
      cover.webp
      stickers.webp

  speaking/
    event-01.webp

---

# 8. Subdomain Architecture

Future subdomains should be independent deployable applications.

Example:

atreyakamat.dev
→ personal hub

work.atreyakamat.dev
→ engineering/product portfolio

studio.atreyakamat.dev
→ creative business

learn.atreyakamat.dev
→ education platform

speaking.atreyakamat.dev
→ speaking profile

lab.atreyakamat.dev
→ experiments

They MAY eventually share:

design tokens
analytics conventions
identity assets
shared packages

But they should NOT share runtime dependencies unless justified.

---

# 9. Future Monorepo Option

Only introduce a monorepo when multiple subdomains actually exist.

Possible future structure:

apps/
  home/
  work/
  studio/
  learn/
  speaking/
  lab/

packages/
  brand/
  ui/
  analytics/
  config/

Do NOT migrate to this architecture prematurely.

---

# 10. Security

The V1 root website contains no sensitive backend functionality.

Requirements:

HTTPS
secure external links
dependency updates
no secrets committed
environment variables for analytics/configuration
appropriate CSP where deployment permits

No backend should be introduced merely for a contact form.

---

# 11. Architectural Rule

When choosing between:

A clever abstraction

and

A simple implementation that is easy to maintain

choose the simple implementation.

atreyakamat.dev should remain the simplest property in the entire
Atreya ecosystem.