import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col justify-center px-5 md:px-10">
      <div className="mx-auto w-full max-w-[96rem]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid">404</p>
        <h1 className="mt-4 font-display text-7xl font-extrabold leading-[0.85] tracking-tight text-paper md:text-[10rem]">
          Peeled <span className="font-serif font-normal italic text-acid">off.</span>
        </h1>
        <Link href="/" className="mt-10 inline-block bg-acid px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink">
          Back to atreya.mp4
        </Link>
      </div>
    </section>
  );
}
