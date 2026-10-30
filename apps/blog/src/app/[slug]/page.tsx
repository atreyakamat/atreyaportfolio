import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Toc } from "@/components/Toc";
import { Subscribe } from "@/components/Subscribe";
import { formatDate } from "@/data/posts";
import { site } from "@/data/site";
import { breadcrumbLd, faqLd, graph, postLd } from "@/lib/jsonld";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { categoryOf } from "@/data/categories";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `/${post.slug}/`;
  return {
    title: { absolute: `${post.title} | ${site.name}` },
    description: post.description,
    alternates: { canonical: url, types: { "application/rss+xml": [{ url: "/feed.xml", title: `${site.name} — blog` }] } },
    keywords: post.tags,
    authors: [{ name: site.author, url: site.mainSite }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      locale: site.locale,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.author],
      tags: post.tags,
      section: post.categoryLabel,
      images: [{ url: post.ogImage, width: 1200, height: 630, alt: post.coverAlt ?? post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.ogImage] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === post.slug);
  const newer = all[i - 1];
  const older = all[i + 1];
  const cat = categoryOf(post.category);
  const more = all.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graph(
            postLd(post),
            faqLd(post.faq),
            breadcrumbLd([
              { name: "Blog", url: `${site.url}/` },
              { name: cat.label, url: `${site.url}/topics/${cat.slug}/` },
              { name: post.title, url: `${site.url}/${post.slug}/` },
            ]),
          ),
        }}
      />

      <article className="mx-auto max-w-6xl px-5 pt-12 md:px-8 md:pt-16">
        <header className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
            <Link href="/" className="hover:text-link">
              Blog
            </Link>
            <span aria-hidden className="px-2">/</span>
            <Link href={`/topics/${cat.slug}/`} className="hover:text-link">
              {cat.label}
            </Link>
          </nav>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.0] tracking-[-0.035em] md:text-6xl">{post.title}</h1>
          {post.description && <p className="mt-6 font-serif text-2xl italic leading-snug text-muted md:text-3xl">{post.description}</p>}

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-rule py-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
            <span>{site.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
            {post.updated && post.updated !== post.date && (
              <>
                <span aria-hidden>·</span>
                <span>Updated {formatDate(post.updated)}</span>
              </>
            )}
          </div>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div className="mx-auto w-full max-w-3xl lg:mx-0">
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

            {post.faq.length > 0 && (
              <section aria-labelledby="faq-title" className="mt-16 border-t border-rule pt-10">
                <h2 id="faq-title" className="text-2xl font-bold tracking-[-0.02em]">
                  Questions people ask
                </h2>
                <dl className="mt-6 space-y-6">
                  {post.faq.map((f) => (
                    <div key={f.q} className="rounded-2xl border border-rule bg-card p-6">
                      <dt className="font-bold">{f.q}</dt>
                      <dd className="mt-2 leading-relaxed text-muted">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {post.tags.length > 0 && (
              <ul className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t} className="rounded-full border border-rule px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {post.service && (
              <aside className="mt-12 rounded-[1.5rem] border border-rule bg-card p-7">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Want this done for you?</p>
                <p className="mt-3 text-xl font-bold leading-snug">
                  I do this work in Goa:{" "}
                  <a href={post.service.href} className="text-link underline underline-offset-4">
                    {post.service.label}
                  </a>
                  .
                </p>
              </aside>
            )}

            <nav aria-label="More posts" className="mt-14 grid gap-3 border-t border-rule pt-8 sm:grid-cols-2">
              {older ? (
                <Link href={`/${older.slug}/`} className="group rounded-2xl border border-rule p-5 transition-colors hover:border-link">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">← Older</span>
                  <span className="mt-2 block font-bold leading-snug transition-colors group-hover:text-link">{older.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {newer && (
                <Link href={`/${newer.slug}/`} className="group rounded-2xl border border-rule p-5 text-right transition-colors hover:border-link">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">Newer →</span>
                  <span className="mt-2 block font-bold leading-snug transition-colors group-hover:text-link">{newer.title}</span>
                </Link>
              )}
            </nav>
          </div>

          <aside className="hidden lg:block">
            <Toc headings={post.headings} />
          </aside>
        </div>
      </article>

      {more.length > 0 && (
        <section aria-labelledby="more-title" className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
          <h2 id="more-title" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            More in {cat.label}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {more.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="group rounded-[1.25rem] border border-rule bg-card p-6 transition-colors hover:border-link">
                <p className="text-xl font-bold leading-snug tracking-[-0.02em] transition-colors group-hover:text-link">{p.title}</p>
                <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8">
        <Subscribe compact />
      </section>
    </>
  );
}
