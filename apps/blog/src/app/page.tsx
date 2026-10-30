import Link from "next/link";
import { FeaturedCard, PostCard } from "@/components/PostCard";
import { Subscribe } from "@/components/Subscribe";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { CATEGORIES } from "@/data/categories";
import { blogLd, graph } from "@/lib/jsonld";

export default function HomePage() {
  const lead = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== lead?.slug);
  const recent = rest.slice(0, 4);
  const counts = new Map<string, number>();
  for (const p of posts) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: graph(blogLd) }} />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <p style={{ ["--d" as string]: "0.05s" }} className="rise-in font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          blog.atreyakamat.dev
        </p>
        <h1
          style={{ ["--d" as string]: "0.12s" }}
          className="rise-in mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-7xl"
        >
          Building software in Goa, <span className="block font-serif font-normal italic tracking-[-0.01em] md:inline">and writing it down.</span>
        </h1>
        <p style={{ ["--d" as string]: "0.2s" }} className="rise-in mt-7 max-w-2xl text-xl leading-relaxed text-muted">
          Build logs from real projects, straight advice for businesses here, tools worth your time, and the odd note about
          whatever I&rsquo;m thinking about.
        </p>
      </section>

      {lead && (
        <section aria-labelledby="latest-title" className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 id="latest-title" className="sr-only">
            Latest post
          </h2>
          <FeaturedCard post={lead} />
        </section>
      )}

      <section aria-labelledby="topics-title" className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <h2 id="topics-title" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          What I write about
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/topics/${c.slug}/`}
              className="group rounded-[1.25rem] border border-rule bg-card p-6 transition-colors hover:border-link"
            >
              <p className="text-xl font-bold tracking-[-0.02em] transition-colors group-hover:text-link">{c.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.blurb}</p>
              <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
                {counts.get(c.slug) ?? 0} post{(counts.get(c.slug) ?? 0) === 1 ? "" : "s"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {recent.length > 0 && (
        <section aria-labelledby="recent-title" className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
          <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-5">
            <h2 id="recent-title" className="text-2xl font-bold tracking-[-0.02em]">
              More posts
            </h2>
            <Link href="/archive/" className="font-mono text-[11px] uppercase tracking-[0.16em] text-link hover:underline">
              All {posts.length} →
            </Link>
          </div>
          <div className="mt-2">
            {recent.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="rounded-[1.5rem] border border-dashed border-rule p-10 text-center">
            <p className="text-xl font-bold">Nothing published yet.</p>
            <p className="mt-2 text-muted">
              Write the first post in <code className="font-mono text-[0.9em]">/admin</code>, or add a markdown file to{" "}
              <code className="font-mono text-[0.9em]">content/posts</code>.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <Subscribe />
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-6 md:px-8">
        <p className="text-center text-[15px] text-muted">
          Need something built?{" "}
          <a href={site.mainSite} className="text-link underline underline-offset-4">
            atreyakamat.dev
          </a>{" "}
          is where I take on work.
        </p>
      </section>
    </>
  );
}
