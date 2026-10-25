/**
 * Client-safe blog metadata (no fs, no post bodies).
 *
 * Source of truth: markdown files in content/posts/*.md (edit them in /admin or
 * by hand). `npm run build` runs scripts/build-posts-index.mjs first, which
 * regenerates posts.index.json. Blog pages read full posts via @/lib/markdown.
 */
import type { PostMeta } from "@/lib/markdown";
import index from "./posts.index.json";

export type { PostMeta } from "@/lib/markdown";

export const posts: PostMeta[] = index as PostMeta[];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const readingMinutes = (p: { readingMinutes: number }) => p.readingMinutes;

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
