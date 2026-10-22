import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-lemon-400">404</p>
        <h1 className="mt-4 font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-paper md:text-9xl">
          Nothing <span className="font-serif font-normal italic text-lemon-400">here</span>.
        </h1>
        <Link href="/" className="mt-10 inline-block rounded-full bg-lemon-400 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 hover:bg-lemon-300">
          Back home
        </Link>
      </div>
    </section>
  );
}
