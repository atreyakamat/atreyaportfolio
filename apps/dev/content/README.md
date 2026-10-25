# Blog content

Posts live in `content/posts/*.md`: one markdown file per article, with frontmatter at the top.
The site builds them into `atreyakamat.dev/blog/<slug>/`, the blog index, the sitemap and the RSS feed (`/feed.xml`).

## Writing a post

**Option A: the admin (recommended)**
1. Go to **https://atreyakamat.dev/admin/** and log in with GitHub.
2. Posts → New Post. Fill in the fields; the hints explain each one.
3. **Save** keeps it as a draft (a pull request). **Publish** merges it to `main`, and Netlify rebuilds the site in about a minute.

**Option B: by hand**
Add `content/posts/my-post.md`:

```md
---
title: "Villa websites that get direct bookings in Goa"
description: "Why villa owners lose margin to OTAs, and what a direct-booking website needs to win guests back. 120–155 characters."
slug: villa-website-goa
date: 2026-11-01
tags: [websites, hospitality]
service: website-development-goa   # or custom-software-development-goa | ai-automation-goa | none
draft: false
faq:
  - q: "Can guests book and pay on the site?"
    a: "Yes…"
---

Intro paragraph.

## First section {#optional-custom-anchor}

Text, **bold**, [links](/services/website-development-goa/), lists, tables, images (`/uploads/…`).
```

Then commit to `main`. `npm run build` regenerates `src/data/posts.index.json` (the ⌘K search list) automatically.

## SEO checklist for every post

- **Title:** under 60 characters, main phrase first ("… in Goa" when it fits).
- **Description:** 120–155 characters, says what the reader gets.
- **Slug:** short, lowercase and hyphenated. Never change it after publishing.
- **Headings:** one idea per `## heading`. They become the "On this page" list.
- **Links:** link the matching service page at least once, plus one other post if relevant.
- **Images:** add alt text, and keep files in `/uploads`. A 1200×630 cover doubles as the share image.
- **FAQ:** add 2–4 real questions people ask. They show as a Questions section and as FAQ rich results.
- **Updates:** when you meaningfully update a post, set **Last updated**.

## One-time setup (lets /admin log in)

1. **Create a GitHub OAuth App:** GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
   - Application name: `atreyakamat.dev blog`
   - Homepage URL: `https://atreyakamat.dev`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Then generate a client secret.
2. **Install the provider on Netlify:** Netlify → **atreyakamat** project → **Project configuration → Access & security → OAuth** → **Install provider** → GitHub, and paste the Client ID and Client Secret.
3. **Log in:** open `https://atreyakamat.dev/admin/` and click **Login with GitHub**.

Only GitHub accounts with write access to `atreyakamat/atreyaportfolio` can publish.
