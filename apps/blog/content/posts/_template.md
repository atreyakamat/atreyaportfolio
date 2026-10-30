---
title: "Draft: the shape of a post"
description: "A starting point you can duplicate. Delete this file once you have your own rhythm."
slug: template
date: 2026-10-30
category: notes
tags:
  - meta
draft: true
---
The first paragraph is the standfirst: it is set larger and greyer, so use it to say what the reader will get and why it is worth their time. One or two sentences.

## Use level-two headings for sections {#sections}

Every `## ` heading becomes an entry in the contents list on the right, and gets its own link. Add `{#custom-id}` at the end of a heading if you want to control that link.

Normal paragraphs go here. **Bold** for emphasis, `inline code` for commands and file names, and links to [the main site](https://atreyakamat.dev) or anywhere else.

- Bullets for parallel points
- Keep them short
- Three to five is usually plenty

> **A callout**
> Quote blocks are set in the serif with a lemon edge. Use one per post at most, for the thing you would say out loud.

## Things worth knowing

1. Numbered lists for steps in order.
2. Tables work, and scroll sideways on phones if they are wide.
3. Code blocks are dark in both themes.

```bash
npm run dev:blog
```

Set `draft: false` when it is ready. Until then this file is skipped entirely by the build.
