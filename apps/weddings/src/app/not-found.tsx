import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-sun-400">404 · Lost at sea</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] text-salt md:text-8xl">
          This page <em className="text-sun-400">drifted off.</em>
        </h1>
        <Link href="/" className="mt-10 inline-block rounded-full bg-salt px-7 py-4 text-sm font-semibold text-tide-950">
          Back to shore
        </Link>
      </div>
    </section>
  );
}
