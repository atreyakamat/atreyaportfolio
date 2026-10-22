import { Reveal } from "@/components/Reveal";
import { capabilityGroups } from "@/data/portfolio";

/** Flipped section: lemon background, navy text, to show the second tone. */
export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="bg-lemon-400 px-5 py-28 text-navy-950 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-800">Capabilities</p>
          <h2 id="capabilities-title" className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-8xl">
            Three areas, one <span className="font-serif font-normal italic">toolkit</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {capabilityGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="border-t-2 border-navy-950 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-800">{g.kicker}</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">{g.title}</h3>
                <p className="mt-3 text-navy-800">{g.desc}</p>
                <ul className="mt-6 space-y-2 font-mono text-sm">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
