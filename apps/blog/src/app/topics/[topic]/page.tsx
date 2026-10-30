import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostList } from "@/components/PostList";
import { Subscribe } from "@/components/Subscribe";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { breadcrumbLd, graph } from "@/lib/jsonld";
import { CATEGORIES, type CategorySlug } from "@/data/categories";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ topic: c.slug }));
}

type Props = { params: Promise<{ topic: string }> };

const find = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const cat = find(topic);
  if (!cat) return {};
  return {
    title: cat.label,
    description: `${cat.blurb} Posts on ${cat.label.toLowerCase()} by ${site.author}.`,
    alternates: { canonical: `/topics/${cat.slug}/` },
  };
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params;
  const cat = find(topic);
  if (!cat) notFound();

  const list = posts.filter((p) => p.category === (cat.slug as CategorySlug));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graph(
            breadcrumbLd([
              { name: "Blog", url: `${site.url}/` },
              { name: cat.label, url: `${site.url}/topics/${cat.slug}/` },
            ]),
          ),
        }}
      />
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Topic</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">{cat.label}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{cat.blurb}</p>

        <div className="mt-12">
          {list.length ? (
            <PostList posts={list} showFilters={false} />
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-rule p-10 text-center">
              <p className="text-xl font-bold">Nothing here yet.</p>
              <p className="mt-2 text-muted">This topic is waiting for its first post.</p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <Subscribe compact />
        </div>
      </section>
    </>
  );
}
