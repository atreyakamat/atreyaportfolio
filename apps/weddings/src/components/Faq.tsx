import { faqs } from "@/data/site";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-tide-950 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sand">05 · Questions</p>
          <h2 id="faq-title" className="mt-5 font-display text-5xl leading-[0.95] text-salt md:text-6xl">
            Before you <em className="text-sun-400">ask.</em>
          </h2>
        </div>
        <div className="border-t border-salt/15 lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-salt/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-2xl text-salt transition-colors hover:text-sun-400 md:text-3xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="shrink-0 text-2xl text-sun-400 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-lg leading-relaxed text-salt/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
