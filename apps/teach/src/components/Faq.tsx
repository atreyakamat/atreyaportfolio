import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { Marker } from "@/components/Marker";
import { faqs } from "@/data/teach";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="light"
          index="05"
          label="Questions"
          meta={`${faqs.length} answers`}
          id="faq-title"
          title={
            <>
              Parents ask, <Marker><span className="font-serif font-normal italic">I answer</span></Marker>.
            </>
          }
        />
        <div className="mt-12 border-t border-ink-navy/15">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={14}>
              <details className="group border-b border-ink-navy/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-bold tracking-tight text-ink-navy md:text-3xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marker font-mono text-xl transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-7 text-lg leading-relaxed text-ink-navy/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
