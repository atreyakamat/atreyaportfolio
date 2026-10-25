import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { SpotlightCard } from "@atreya/ui/Spotlight";
import { testimonials } from "@/data/testimonials";

/** Client words. Renders nothing until real quotes are added to data/testimonials.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="words" aria-labelledby="words-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="—"
          label="In their words"
          meta={`${testimonials.length} clients`}
          id="words-title"
          title={
            <>
              People I&rsquo;ve <span className="font-serif font-normal italic text-lemon-400">built for</span>.
            </>
          }
        />
        <ul className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name + t.org}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <SpotlightCard className="h-full">
                  <figure className="flex h-full flex-col justify-between gap-8 p-7">
                    <blockquote className="font-serif text-2xl leading-snug text-paper">
                      <span aria-hidden className="text-lemon-400">“</span>
                      {t.quote}
                      <span aria-hidden className="text-lemon-400">”</span>
                    </blockquote>
                    <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy-300">
                      <span className="block text-paper">{t.name}</span>
                      {t.role}, {t.url ? <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-lemon-400 hover:underline">{t.org}</a> : t.org}
                      {t.project && <span className="mt-1 block">{t.project}</span>}
                    </figcaption>
                  </figure>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
