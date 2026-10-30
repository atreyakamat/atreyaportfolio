import type { Metadata } from "next";
import { Subscribe } from "@/components/Subscribe";
import { site } from "@/data/site";
import { CATEGORIES } from "@/data/categories";

export const metadata: Metadata = {
  title: "About this blog",
  description: `Who writes blog.atreyakamat.dev, what goes on it, and how to get in touch. By ${site.author}, product engineer in Goa.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">About this blog</h1>

      <div className="prose mt-10">
        <p>
          I&rsquo;m Atreya Kamat. I build websites, internal tools and automations for businesses in Goa, and I make short
          tech videos as @atreya.mp4. This is where the longer thinking goes.
        </p>
        <h2>What ends up here</h2>
        <ul>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <strong>{c.label}.</strong> {c.blurb}
            </li>
          ))}
        </ul>
        <h2>How I write</h2>
        <p>
          No invented numbers, no fake case studies, and no advice I haven&rsquo;t actually followed. If a post is about a
          project, it&rsquo;s a project that exists. If I got something wrong, I update the post and say so at the top.
        </p>
        <h2>Reaching me</h2>
        <p>
          Email me at <a href={`mailto:${site.email}`}>{site.email}</a>, or find me on{" "}
          <a href={site.instagram}>Instagram</a>, <a href={site.github}>GitHub</a> and <a href={site.linkedin}>LinkedIn</a>.
          If you want something built, <a href={site.mainSite}>atreyakamat.dev</a> is the place to start.
        </p>
        <p>
          Posts are also available as an <a href="/feed.xml">RSS feed</a>.
        </p>
      </div>

      <div className="mt-14">
        <Subscribe compact />
      </div>
    </section>
  );
}
