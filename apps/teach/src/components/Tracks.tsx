import clsx from "clsx";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks, TileLabel } from "@atreya/ui/Tile";
import { Marker } from "@/components/Marker";
import { tracks } from "@/data/teach";

export function Tracks() {
  return (
    <section id="tracks" aria-labelledby="tracks-title" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="light"
          index="01"
          label="Tracks"
          meta="Class 8 → college → any age"
          id="tracks-title"
          title={
            <>
              Four ways <Marker><span className="font-serif font-normal italic">in</span></Marker>.
            </>
          }
          intro="Pick the one closest to where you are. Every track starts with a first session to find your level, then a plan made for you."
        />

        <ul className="mt-14 grid gap-3 md:grid-cols-2">
          {tracks.map((t, i) => {
            const dark = t.slug === "ai-tools-workshops";
            return (
              <li key={t.slug} id={t.slug} className="scroll-mt-28">
                <Reveal delay={(i % 2) * 0.08} className="h-full">
                  <article
                    className={clsx(
                      "group relative flex h-full flex-col gap-6 overflow-hidden rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-1 md:p-9",
                      dark ? "bg-ink-navy text-paper" : "bg-white/75 text-ink-navy ring-1 ring-ink-navy/10",
                    )}
                  >
                    <CornerTicks className={dark ? "text-marker/50" : "text-ink-navy/25"} />
                    <div className="flex items-center justify-between">
                      <TileLabel className={dark ? "text-marker" : "text-ink-navy/75"}>{t.code}</TileLabel>
                      <span
                        className={clsx(
                          "rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
                          dark ? "bg-marker text-ink-navy" : "bg-ink-navy/[0.06] text-ink-navy",
                        )}
                      >
                        {t.format}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{t.name}</h3>
                      <p className={clsx("mt-3 max-w-lg text-[17px] leading-relaxed", dark ? "text-navy-100/80" : "text-ink-navy/70")}>{t.forWho}</p>
                    </div>
                    <div className="flex-1">
                      <p className={clsx("font-mono text-[10.5px] uppercase tracking-[0.2em]", dark ? "text-navy-300" : "text-ink-navy/75")}>
                        You&rsquo;ll learn
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {t.learn.map((l) => (
                          <li key={l} className="flex gap-3 text-[15px] leading-snug">
                            <span
                              aria-hidden
                              className={clsx(
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                                dark ? "bg-marker text-ink-navy" : "bg-marker text-ink-navy",
                              )}
                            >
                              ✓
                            </span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {t.note && (
                      <p className={clsx("border-t pt-4 text-sm", dark ? "border-white/15 text-navy-100/80" : "border-ink-navy/10")}>
                        {t.note.text}{" "}
                        <a href={t.note.href} className={clsx("underline underline-offset-4", dark ? "text-marker" : "")}>
                          {t.note.label} ↗
                        </a>
                      </p>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
