import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import type { Faq as FaqItem } from "@/data/services";

/** Accessible FAQ using native <details>. Pair with FAQPage JSON-LD on the page. */
export function Faq({ items, index = "06", title }: { items: FaqItem[]; index?: string; title?: React.ReactNode }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index={index}
          label="Questions"
          meta={`${items.length} answers`}
          id="faq-title"
          title={
            title ?? (
              <>
                Good questions, <span className="font-serif font-normal italic text-lemon-400">straight answers</span>.
              </>
            )
          }
        />
        <div className="mt-14 border-t border-white/10">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={16}>
              <details className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-display text-xl font-bold tracking-tight text-paper transition-colors hover:text-lemon-400 md:text-3xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="shrink-0 font-mono text-2xl text-lemon-400 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-8 text-lg leading-relaxed text-navy-300">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
