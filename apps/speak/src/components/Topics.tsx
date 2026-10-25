import { Reveal } from "@atreya/ui/Reveal";
import { SpotlightCard } from "@atreya/ui/Spotlight";
import { TileLabel } from "@atreya/ui/Tile";
import { CobaltHeader } from "@/components/CobaltHeader";
import { topics } from "@/data/speak";

/** Bento of topics available to book (offers, not past events). */
export function Topics() {
  return (
    <section id="topics" aria-labelledby="topics-title" className="bg-cobalt-500 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <CobaltHeader
          index="02"
          label="Topics"
          meta="Available to book"
          id="topics-title"
          title={
            <>
              Five things I can talk about <span className="font-serif font-normal italic text-lemonade">for an hour</span>.
            </>
          }
          intro="Each one comes from work I do every week, so the examples are real and the demos are live. Pick one, or mix two for your audience."
        />

        <ul className="mt-16 grid gap-3 md:grid-cols-6">
          {topics.map((t, i) => (
            <li key={t.code} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col gap-6 p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <TileLabel className="text-lemonade">{t.code}</TileLabel>
                      <TileLabel className="text-navy-300">{t.audience}</TileLabel>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">{t.title}</h3>
                      <p className="mt-3 leading-relaxed text-navy-100">{t.desc}</p>
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {t.points.map((p) => (
                        <li key={p} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-white">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
