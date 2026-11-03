/**
 * Writes src/data/posts.index.json: the client-safe list of published posts
 * (no body HTML), used by the index page's search and filter. Runs before
 * `next build` (prebuild). Post pages read the markdown directly via
 * src/lib/markdown.ts.
 *
 * Usage: node scripts/build-posts-index.mjs   (from apps/blog or the repo root)
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(here, "..");
process.chdir(appDir);

// Node 22.18+ strips TypeScript types natively, so we can reuse the real loader.
const { getAllPosts, toMeta } = await import("../src/lib/markdown.ts");

const index = getAllPosts().map(toMeta);
const out = path.join(appDir, "src", "data", "posts.index.json");
writeFileSync(out, JSON.stringify(index, null, 2) + "\n");
console.log(`posts.index.json: ${index.length} published post(s)`);
