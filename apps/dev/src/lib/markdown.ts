/**
 * Server-only blog loader: reads apps/dev/content/posts/*.md at build time.
 * Used by the blog pages, sitemap and RSS feed, and by
 * scripts/build-posts-index.mjs to write the lightweight client index
 * (src/data/posts.index.json) that the ⌘K palette imports.
 *
 * Keep this file free of "@/..." imports so plain Node can run it.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";

export type ServiceSlug = "website-development-goa" | "custom-software-development-goa" | "ai-automation-goa";

export const SERVICE_LINKS: Record<ServiceSlug, { label: string; href: string }> = {
  "website-development-goa": { label: "Website development in Goa", href: "/services/website-development-goa/" },
  "custom-software-development-goa": { label: "Custom software in Goa", href: "/services/custom-software-development-goa/" },
  "ai-automation-goa": { label: "AI & automation in Goa", href: "/services/ai-automation-goa/" },
};

export interface PostFaq {
  q: string;
  a: string;
}

/** Metadata only: safe to ship to the client (via posts.index.json). */
export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated: string | null;
  tags: string[];
  kicker: string;
  service: { slug: ServiceSlug; label: string; href: string } | null;
  related: { label: string; href: string }[];
  cover: string | null;
  coverAlt: string | null;
  /** Share image: cover, else /og/blog-<slug>.png if it exists, else the site card. */
  ogImage: string;
  readingMinutes: number;
  words: number;
}

export interface Post extends PostMeta {
  html: string;
  headings: { id: string; text: string }[];
  faq: PostFaq[];
}

/** apps/dev, whether called from Next (cwd = apps/dev) or from the repo root. */
export function appDir(): string {
  const cwd = process.cwd();
  return fs.existsSync(path.join(cwd, "content", "posts")) ? cwd : path.join(cwd, "apps", "dev");
}

const toISODate = (v: unknown): string | null => {
  if (!v) return null;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  const s = String(v).trim();
  return /^\d{4}-\d{2}-\d{2}/.test(s) ? s.slice(0, 10) : null;
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);

const plain = (s: string) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

/** Markdown → HTML with stable heading ids ({#custom-id} supported), safe external links and lazy images. */
function render(markdown: string): { html: string; headings: { id: string; text: string }[] } {
  const headings: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const marked = new Marked({ gfm: true });

  marked.use({
    walkTokens(token) {
      if (token.type !== "heading") return;
      const t = token as Tokens.Heading & { customId?: string };
      const m = t.text.match(/\s*\{#([A-Za-z0-9_-]+)\}\s*$/);
      if (m) {
        t.customId = m[1];
        t.text = t.text.slice(0, m.index);
        const last = t.tokens?.[t.tokens.length - 1] as Tokens.Text | undefined;
        if (last && "text" in last) {
          last.text = last.text.replace(/\s*\{#[A-Za-z0-9_-]+\}\s*$/, "");
          if ("raw" in last) last.raw = last.raw.replace(/\s*\{#[A-Za-z0-9_-]+\}\s*$/, "");
        }
      }
    },
    renderer: {
      heading(token) {
        const t = token as Tokens.Heading & { customId?: string };
        const inner = this.parser.parseInline(t.tokens);
        let id = t.customId ?? (slugify(plain(inner)) || `section-${headings.length + 1}`);
        while (used.has(id)) id = `${id}-x`;
        used.add(id);
        if (t.depth === 2) headings.push({ id, text: plain(inner) });
        return `<h${t.depth} id="${id}">${inner}</h${t.depth}>\n`;
      },
      link(token) {
        const inner = this.parser.parseInline(token.tokens);
        const href = token.href;
        const external = /^https?:\/\//.test(href) && !/^https?:\/\/([a-z0-9-]+\.)*atreyakamat\.dev/.test(href);
        const title = token.title ? ` title="${token.title}"` : "";
        return external
          ? `<a href="${href}"${title} target="_blank" rel="noopener noreferrer">${inner}</a>`
          : `<a href="${href}"${title}>${inner}</a>`;
      },
      image(token) {
        const title = token.title ? ` title="${token.title}"` : "";
        return `<img src="${token.href}" alt="${token.text.replace(/"/g, "&quot;")}"${title} loading="lazy" decoding="async" />`;
      },
      table(token) {
        // Default table markup, wrapped so wide tables scroll instead of breaking the layout.
        const head = token.header.map((c) => `<th${c.align ? ` style="text-align:${c.align}"` : ""}>${this.parser.parseInline(c.tokens)}</th>`).join("");
        const rows = token.rows
          .map((r) => `<tr>${r.map((c) => `<td${c.align ? ` style="text-align:${c.align}"` : ""}>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`)
          .join("");
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
      },
    },
  });

  const html = marked.parse(markdown, { async: false }) as string;
  return { html, headings };
}

const SERVICES = Object.keys(SERVICE_LINKS) as ServiceSlug[];

function load(dir: string, file: string): Post | null {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(raw);
  if (data.draft === true) return null;

  const slug = String(data.slug || file.replace(/\.md$/, "")).trim();
  const date = toISODate(data.date);
  if (!data.title || !date) {
    throw new Error(`Post ${file}: "title" and "date" (YYYY-MM-DD) are required.`);
  }
  const tags: string[] = Array.isArray(data.tags) ? data.tags.map((t: unknown) => String(t).trim()).filter(Boolean) : [];
  const svc = SERVICES.includes(data.service) ? (data.service as ServiceSlug) : null;
  const words = content.split(/\s+/).filter(Boolean).length;
  const { html, headings } = render(content);

  const cover = data.cover ? String(data.cover) : null;
  const ogFile = path.join(appDir(), "public", "og", `blog-${slug}.png`);
  const ogImage = cover ?? (fs.existsSync(ogFile) ? `/og/blog-${slug}.png` : "/og/home.png");

  return {
    slug,
    title: String(data.title),
    description: String(data.description ?? ""),
    date,
    updated: toISODate(data.updated),
    tags,
    kicker: data.kicker ? String(data.kicker) : tags.map((t) => t[0].toUpperCase() + t.slice(1)).join(" · ") || "Article",
    service: svc ? { slug: svc, ...SERVICE_LINKS[svc] } : null,
    related: Array.isArray(data.related)
      ? data.related.filter((r: { label?: string; href?: string }) => r?.label && r?.href).map((r: { label: string; href: string }) => ({ label: r.label, href: r.href }))
      : [],
    cover,
    coverAlt: data.coverAlt ? String(data.coverAlt) : null,
    ogImage,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    words,
    html,
    headings,
    faq: Array.isArray(data.faq)
      ? data.faq.filter((f: { q?: string; a?: string }) => f?.q && f?.a).map((f: { q: string; a: string }) => ({ q: String(f.q), a: String(f.a) }))
      : [],
  };
}

let cache: Post[] | null = null;

/** All published posts, newest first. */
export function getAllPosts(): Post[] {
  if (cache) return cache;
  const dir = path.join(appDir(), "content", "posts");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")) : [];
  cache = files
    .map((f) => load(dir, f))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : b.date.localeCompare(a.date)));
  const seen = new Set<string>();
  for (const p of cache) {
    if (seen.has(p.slug)) throw new Error(`Duplicate post slug: ${p.slug}`);
    seen.add(p.slug);
  }
  return cache;
}

export const getPostBySlug = (slug: string) => getAllPosts().find((p) => p.slug === slug);

/** Strip content fields, leaving the client-safe metadata. */
export function toMeta(p: Post): PostMeta {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { html, headings, faq, ...meta } = p;
  return meta;
}
