import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { SpotlightCard } from "@atreya/ui/Spotlight";
import { Reveal } from "@atreya/ui/Reveal";
import { formatDate } from "@/data/posts";
import { getAllPosts } from "@/lib/markdown";
import { personalInfo } from "@/data/portfolio";

const title = "Blog: websites, software & automation for Goa businesses";
const description =
  "Plain-language guides on website costs, outgrowing spreadsheets, and custom vs off-the-shelf software, written by Atreya Kamat, a software engineer in Goa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/", types: { "application/rss+xml": [{ url: "/feed.xml", title: "Atreya Kamat — Blog" }] } },
  openGraph: {
    type: "website",
    url: "/blog/",
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Atreya Kamat blog" }],
  },
};

const posts = getAllPosts();
const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Atreya Kamat — Blog",
  url: `${personalInfo.siteUrl}/blog/`,
  author: { "@id": `${personalInfo.siteUrl}/#person` },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${personalInfo.siteUrl}/blog/${p.slug}/`,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
  })),
};

export default function BlogIndex() {
  return (
    <section className="px-5 pb-28 pt-32 md:px-10 md:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="B"
          label="Field notes"
          meta={`${posts.length} articles`}
          id="blog-title"
          title={
            <>
              Straight answers for <span className="font-serif font-normal italic text-lemon-400">Goa businesses</span>.
            </>
          }
          intro="Guides I wish more owners had before they hired a developer: what things cost, when to build, and when not to."
        />

        {allTags.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">Topics</span>
            {allTags.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper">
                {t}
              </span>
            ))}
            <a href="/feed.xml" className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-lemon-400 hover:underline">
              RSS feed
            </a>
          </div>
        )}

        <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <SpotlightCard className="h-full">
                  <Link href={`/blog/${p.slug}/`} className="flex h-full flex-col gap-8 p-7 md:p-8">
                    <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-navy-300">
                      <span className="text-lemon-400">{p.kicker}</span>
                      <span>{p.readingMinutes} min read</span>
                    </div>
                    <h2 className="flex-1 font-display text-3xl font-bold leading-tight tracking-tight text-paper">{p.title}</h2>
                    <p className="text-[15px] leading-relaxed text-navy-300">{p.description}</p>
                    {p.tags.length > 0 && (
                      <ul aria-label="Tags" className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <li key={t} className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-navy-300">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-[0.18em]">
                      <time dateTime={p.date} className="text-navy-300">
                        {formatDate(p.date)}
                      </time>
                      <span className="text-lemon-400">Read →</span>
                    </div>
                  </Link>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
