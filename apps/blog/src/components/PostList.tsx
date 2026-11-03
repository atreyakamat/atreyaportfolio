"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { PostCard } from "@/components/PostCard";
import type { PostMeta } from "@/data/posts";
import { CATEGORIES } from "@/data/categories";

/**
 * The archive list: type to filter, or pick a topic. Everything happens in the
 * browser over the prebuilt index, so there is no request and no spinner.
 */
export function PostList({ posts, showFilters = true }: { posts: PostMeta[]; showFilters?: boolean }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const used = useMemo(() => new Set(posts.map((p) => p.category)), [posts]);
  const tabs = useMemo(() => [{ slug: "all", label: "Everything" }, ...CATEGORIES.filter((c) => used.has(c.slug))], [used]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return posts.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (!needle) return true;
      return `${p.title} ${p.description} ${p.tags.join(" ")} ${p.categoryLabel}`.toLowerCase().includes(needle);
    });
  }, [posts, q, cat]);

  return (
    <div>
      {showFilters && (
        <div className="flex flex-col gap-5 border-b border-rule pb-7 md:flex-row md:items-center md:justify-between">
          <div role="tablist" aria-label="Filter by topic" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.slug}
                role="tab"
                aria-selected={cat === t.slug}
                onClick={() => setCat(t.slug)}
                className={clsx(
                  "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                  cat === t.slug ? "border-ink bg-ink text-page" : "border-rule text-muted hover:border-link hover:text-link",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative md:w-64">
            <label htmlFor="post-search" className="sr-only">
              Search posts
            </label>
            <input
              id="post-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search…"
              className="w-full rounded-full border border-rule bg-card py-2.5 pl-10 pr-4 text-[15px] text-ink placeholder:text-muted focus:border-link focus:outline-none"
            />
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </div>
        </div>
      )}

      <div aria-live="polite">
        {results.length === 0 ? (
          <p className="py-16 text-center text-muted">
            Nothing matches {q.trim() ? <strong className="text-ink">“{q.trim()}”</strong> : "that topic"} yet.
          </p>
        ) : (
          <div className="mt-2">
            {results.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
