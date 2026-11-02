import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "All posts",
  description: "Everything published on atreyakamat.dev/blog: build logs, Goa business advice, tools and notes.",
  alternates: { canonical: `${site.url}/archive/` },
};

export default function ArchivePage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">All posts</h1>
      <p className="mt-4 text-lg text-muted">
        {posts.length} post{posts.length === 1 ? "" : "s"}. Filter by topic or search the titles.
      </p>
      <div className="mt-12">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
