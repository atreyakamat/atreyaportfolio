import { Reveal } from "@atreya/ui/Reveal";
import { pastTalks } from "@/data/speak";

/** Archive of other talks. Hidden until pastTalks in data/speak.ts has entries. */
export function MoreTalks() {
  if (pastTalks.length === 0) return null;
  return (
    <section id="talks" aria-labelledby="talks-title" className="bg-cobalt-950 px-5 pb-28 md:px-10">
      <div className="mx-auto max-w-[96rem]">
        <h2 id="talks-title" className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemonade">
          More talks
        </h2>
        <ul className="mt-6 border-t border-white/15">
          {pastTalks.map((t, i) => (
            <li key={t.title + t.event} className="border-b border-white/15">
              <Reveal delay={i * 0.04} y={14}>
                <div className="grid gap-2 py-6 md:grid-cols-[8rem_1.6fr_1fr_auto] md:items-baseline md:gap-8">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-cobalt-300">{t.when}</span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">{t.title}</h3>
                  <span className="text-cobalt-300">
                    {t.event} · {t.place}
                  </span>
                  <span className="flex gap-4 font-mono text-xs uppercase tracking-[0.16em]">
                    {t.slidesUrl && (
                      <a href={t.slidesUrl} target="_blank" rel="noopener noreferrer" className="text-lemonade hover:underline">
                        Slides ↗
                      </a>
                    )}
                    {t.videoUrl && (
                      <a href={t.videoUrl} target="_blank" rel="noopener noreferrer" className="text-lemonade hover:underline">
                        Video ↗
                      </a>
                    )}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
