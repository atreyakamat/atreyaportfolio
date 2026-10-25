import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-navy/75">404</p>
        <h1 className="mt-4 font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-ink-navy md:text-9xl">
          Page not <span className="marker font-serif font-normal italic" style={{ backgroundSize: "100% 60%" }}>found</span>.
        </h1>
        <Link href="/" className="mt-10 inline-block rounded-full bg-ink-navy px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-marker">
          Back to teach
        </Link>
      </div>
    </section>
  );
}
