import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-20 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">
        This page <span className="font-serif font-normal italic">doesn&rsquo;t exist.</span>
      </h1>
      <p className="mt-5 max-w-lg text-lg text-muted">It may have moved, or the link may be wrong. The writing is all still here.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-page transition-opacity hover:opacity-85">
          Latest posts
        </Link>
        <Link href="/archive/" className="rounded-full border border-rule px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-link hover:text-link">
          All posts
        </Link>
      </div>
    </section>
  );
}
