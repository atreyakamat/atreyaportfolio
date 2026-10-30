/**
 * The four things Atreya writes about. A post picks one.
 * Client-safe: no fs, so the index page's filter can import it.
 */
export const CATEGORIES = [
  { slug: "build-log", label: "Build log", blurb: "What I shipped, how it works, what broke." },
  { slug: "goa-business", label: "Goa business", blurb: "Websites, software and getting found, for businesses here." },
  { slug: "tools", label: "Tools", blurb: "Linux, free software and AI tools worth your time." },
  { slug: "notes", label: "Notes", blurb: "Shorter thoughts. Whatever I feel like." },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as CategorySlug[];
export const categoryOf = (slug: CategorySlug) => CATEGORIES.find((c) => c.slug === slug)!;
