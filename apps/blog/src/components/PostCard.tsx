import Link from "next/link";
import clsx from "clsx";
import type { PostMeta } from "@/data/posts";
import { formatDateShort } from "@/data/posts";

/** Small meta line: category · date · reading time. */
export function PostMetaLine({ post, className }: { post: PostMeta; className?: string }) {
  return (
    <p className={clsx("flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted", className)}>
      <span className="text-link">{post.categoryLabel}</span>
      <span aria-hidden>·</span>
      <time dateTime={post.date}>{formatDateShort(post.date)}</time>
      <span aria-hidden>·</span>
      <span>{post.readingMinutes} min read</span>
    </p>
  );
}

/** The lead story: bigger type, description always shown. */
export function FeaturedCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-rule bg-card p-7 transition-colors hover:border-link md:p-10">
      <PostMetaLine post={post} />
      <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
        <Link href={`/${post.slug}/`} className="after:absolute after:inset-0 after:content-['']">
          {post.title}
        </Link>
      </h2>
      {post.description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{post.description}</p>}
      <span aria-hidden className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-link">
        Read it <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
      </span>
    </article>
  );
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative flex flex-col gap-3 border-b border-rule py-7 first:pt-0">
      <PostMetaLine post={post} />
      <h3 className="text-2xl font-bold leading-tight tracking-[-0.02em] md:text-[1.75rem]">
        <Link href={`/${post.slug}/`} className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-link">
          {post.title}
        </Link>
      </h3>
      {post.description && <p className="max-w-2xl leading-relaxed text-muted">{post.description}</p>}
    </article>
  );
}
