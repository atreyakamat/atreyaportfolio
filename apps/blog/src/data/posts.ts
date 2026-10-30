/**
 * Client-safe post metadata (no fs, no post bodies).
 *
 * Source of truth: markdown in content/posts/*.md (edit in /admin or by hand).
 * `npm run build` runs scripts/build-posts-index.mjs first, which regenerates
 * posts.index.json. Post pages read full posts via @/lib/markdown.
 */
import type { PostMeta } from "@/lib/markdown";
import index from "./posts.index.json";

export type { PostMeta } from "@/lib/markdown";

export const posts: PostMeta[] = index as PostMeta[];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const formatDateShort = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
