import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { SpotlightCard } from "@atreya/ui/Spotlight";
import { TileLabel } from "@atreya/ui/Tile";
import { caseStudies } from "@/data/caseStudies";

/** Home-page teaser: one card per case study, linking to /work/<slug>/. */
export function CaseStudies({ index = "—" }: { index?: string }) {
  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index={index}
          label="Case studies"
          meta={`${caseStudies.length} stories`}
          id="case-studies-title"
          title={
            <>
              The problem, the build, <span className="font-serif font-normal italic text-lemon-400">what changed</span>.
            </>
          }
          intro="Full write-ups of real projects: why they were built, how, and what is different now."
        />
        <ul className="mt-16 grid gap-3 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link href={`/work/${c.slug}/`} className="group block h-full">
                  <SpotlightCard className="h-full">
                    <div className="flex h-full flex-col gap-6 p-4 md:p-5">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-navy-950">
                        {c.images[0] ? (
                          <Image
                            src={c.images[0].src}
                            alt={c.images[0].alt}
                            fill
                            sizes="(min-width: 768px) 46vw, 92vw"
                            className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div aria-hidden className="absolute inset-0 flex flex-wrap content-center items-center justify-center gap-2 p-6">
                            {(c.flow ?? []).map((step, j, all) => (
                              <span key={step} className="flex items-center gap-2">
                                <span
                                  className={
                                    j === all.length - 1
                                      ? "rounded-full bg-lemon-400 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-navy-950"
                                      : "rounded-full border border-white/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper"
                                  }
                                >
                                  {step}
                                </span>
                                {j < all.length - 1 && <span className="text-lemon-400">→</span>}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-3 px-1">
                        <TileLabel className="text-navy-300">{c.kind}</TileLabel>
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy-300">{c.location}</span>
                      </div>
                      <div className="flex-1 px-1">
                        <h3 className="font-display text-3xl font-bold tracking-tight text-paper">{c.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-navy-300">{c.summary}</p>
                      </div>
                      <span className="mx-1 font-mono text-xs uppercase tracking-[0.18em] text-lemon-400">
                        Read the case study <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
