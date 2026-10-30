/** One place for the things that appear in metadata, the footer and the feed. */
export const site = {
  url: "https://blog.atreyakamat.dev",
  mainSite: "https://atreyakamat.dev",
  name: "Atreya Kamat",
  title: "Atreya Kamat — notes, build logs and tools",
  tagline: "Building software in Goa, and writing down what I learn.",
  description:
    "Build logs, practical advice for Goa businesses, tools worth your time, and whatever else I feel like writing. By Atreya Kamat, freelance product engineer in Goa.",
  author: "Atreya Kamat",
  email: "atkamat1204@gmail.com",
  instagram: "https://www.instagram.com/atreya.mp4/",
  github: "https://github.com/atreyakamat",
  linkedin: "https://linkedin.com/in/atreya-kamat",
  locale: "en_IN",
} as const;

export const sites = [
  { label: "dev", href: "https://atreyakamat.dev", blurb: "Software & systems" },
  { label: "blog", href: "https://blog.atreyakamat.dev", blurb: "Writing", current: true },
  { label: "teach", href: "https://teach.atreyakamat.dev", blurb: "Tuition & workshops" },
  { label: "speak", href: "https://speak.atreyakamat.dev", blurb: "Talks" },
  { label: "create", href: "https://create.atreyakamat.dev", blurb: "Creator work" },
] as const;
