import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { faqs } from "@/data/speak";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-cobalt-950 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="06"
          label="Questions"
          meta={`${faqs.length} answers`}
          id="faq-title"
          title={
            <>
              Before you <span className="font-serif font-normal italic text-lemonade">book</span>.
            </>
          }
        />
        <div className="mt-14 border-t border-white/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={16}>
              <details className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-lemonade md:text-3xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="shrink-0 font-mono text-2xl text-lemonade transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-8 text-lg leading-relaxed text-cobalt-300">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
