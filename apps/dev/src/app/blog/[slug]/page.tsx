import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CornerTicks, TileLabel } from "@atreya/ui/Tile";
import { PostBody } from "@/components/blog/PostBody";
import { personalInfo } from "@/data/portfolio";
import { formatDate } from "@/data/posts";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}/`;
  const image = post.ogImage;
  return {
    title: { absolute: `${post.title} | Atreya Kamat` },
    description: post.description,
    alternates: { canonical: url, types: { "application/rss+xml": [{ url: "/feed.xml", title: "Atreya Kamat — Blog" }] } },
    keywords: post.tags,
    authors: [{ name: "Atreya Kamat", url: personalInfo.siteUrl }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      locale: "en_IN",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: ["Atreya Kamat"],
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.coverAlt ?? post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const site = personalInfo.siteUrl;
  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === post.slug);
  const prev = all[index - 1];
  const next = all[index + 1];
  const toc = post.headings;
  const abs = (u: string) => (u.startsWith("http") ? u : `${site}${u}`);

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: "en-IN",
        wordCount: post.words,
        keywords: post.tags.join(", "),
        url: `${site}/blog/${post.slug}/`,
        mainEntityOfPage: `${site}/blog/${post.slug}/`,
        image: abs(post.ogImage),
        author: { "@type": "Person", "@id": `${site}/#person`, name: "Atreya Kamat", url: site },
        publisher: { "@type": "Person", "@id": `${site}/#person`, name: "Atreya Kamat" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${site}/blog/${post.slug}/` },
        ],
      },
      ...(post.faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ]
        : []),
    ],
  };

  const mail = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Question after reading: ${post.title}`)}`;

  return (
    <article className="px-5 pb-28 pt-32 md:px-10 md:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="mx-auto max-w-[96rem]">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">
          <Link href="/" className="hover:text-lemon-400">Home</Link> <span aria-hidden>/</span>{" "}
          <Link href="/blog/" className="hover:text-lemon-400">Blog</Link> <span aria-hidden>/</span>{" "}
          <span className="text-lemon-400">{post.kicker}</span>
        </nav>

        <header className="mt-10 max-w-5xl">
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-navy-300">{post.description}</p>
          {post.tags.length > 0 && (
            <ul aria-label="Tags" className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-navy-300">
                  {t}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300">
            <span className="text-paper">Atreya Kamat</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.updated && post.updated !== post.date && (
              <span>
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
            )}
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <TileLabel className="text-lemon-400">On this page</TileLabel>
              <ol className="mt-4 space-y-2.5 border-l border-white/10">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-navy-300 transition-colors hover:border-lemon-400 hover:text-paper">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="max-w-[68ch] lg:col-span-7">
            {post.cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.cover} alt={post.coverAlt ?? ""} className="mb-10 h-auto w-full rounded-[1.5rem] border border-white/10" />
            )}
            <PostBody html={post.html} />

            {post.faq.length > 0 && (
              <section aria-labelledby="post-faq" className="mt-14 border-t border-white/10 pt-10">
                <h2 id="post-faq" className="font-display text-3xl font-extrabold tracking-tight text-paper">Questions</h2>
                <div className="mt-6 border-t border-white/10">
                  {post.faq.map((f) => (
                    <details key={f.q} className="group border-b border-white/10">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-xl font-bold text-paper hover:text-lemon-400 [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span aria-hidden className="font-mono text-xl text-lemon-400 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="pb-6 leading-relaxed text-navy-300">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <div className="relative mt-16 overflow-hidden rounded-[1.5rem] bg-lemon-400 p-7 text-navy-950 md:p-9">
              <TileLabel dot>Taking on projects in Goa</TileLabel>
              <p className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight">Want this done properly for your business?</p>
              <p className="mt-3 text-navy-800">Send two lines: what is not working, and who it is for. I reply personally with a plan and a clear quote.</p>
              <div className="mt-7 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.16em]">
                <Link href="/#contact" className="rounded-full bg-navy-950 px-6 py-3.5 font-semibold text-lemon-400 transition-colors hover:bg-navy-800">
                  Start a project →
                </Link>
                {post.service && (
                  <Link href={post.service.href} className="rounded-full border border-navy-950/40 px-6 py-3.5 text-navy-950 transition-colors hover:border-navy-950">
                    {post.service.label}
                  </Link>
                )}
                {post.related.map((r) => (
                  <Link key={r.href} href={r.href} className="rounded-full border border-navy-950/40 px-6 py-3.5 text-navy-950 transition-colors hover:border-navy-950">
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-navy-300">
              Question about this article?{" "}
              <a href={mail} className="text-lemon-400 underline-offset-4 hover:underline">
                Email me
              </a>
              .
            </p>
          </div>
        </div>

        <nav aria-label="More articles" className="mt-20 grid gap-3 md:grid-cols-2">
          {[prev, next].map((p, i) =>
            p ? (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}/`}
                className={`group relative flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-7 transition-colors hover:border-lemon-400/60 ${i === 1 ? "md:col-start-2 md:text-right" : ""}`}
              >
                <CornerTicks className="opacity-0 transition-opacity group-hover:opacity-100" />
                <TileLabel className={`text-lemon-400 ${i === 1 ? "md:justify-end" : ""}`}>{i === 0 ? "← Previous" : "Next →"}</TileLabel>
                <span className="font-display text-2xl font-bold leading-tight tracking-tight text-paper">{p.title}</span>
              </Link>
            ) : (
              <Link
                key={`all-${i}`}
                href="/blog/"
                className={`group relative flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-navy-950 p-7 transition-colors hover:border-lemon-400/60 ${i === 1 ? "md:col-start-2 md:text-right" : ""}`}
              >
                <TileLabel className={`text-lemon-400 ${i === 1 ? "md:justify-end" : ""}`}>All articles</TileLabel>
                <span className="font-display text-2xl font-bold leading-tight tracking-tight text-paper">Back to the blog</span>
              </Link>
            ),
          )}
        </nav>
      </div>
    </article>
  );
}
