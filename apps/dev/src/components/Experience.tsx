import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { educationEntries, experienceEntries } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="05"
          label="Experience log"
          meta="Since 2024"
          id="experience-title"
          title={
            <>
              Where I&rsquo;ve <span className="font-serif font-normal italic text-lemon-400">worked</span>.
            </>
          }
          intro="Production platforms, monitoring, AI and ML. The habits behind every client build came from here."
        />

        <ul className="mt-16 border-t border-white/10">
          {experienceEntries.map((e, i) => (
            <li key={`${e.company}-${e.period}`} className="border-b border-white/10">
              <Reveal delay={i * 0.06} y={20}>
                <div className="grid gap-3 py-8 md:grid-cols-[14rem_1fr_1.3fr] md:gap-10">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-navy-300">{e.period}</span>
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-paper">{e.company}</h3>
                    <p className={e.isAccentRole ? "mt-1 font-mono text-xs uppercase tracking-[0.18em] text-lemon-400" : "mt-1 font-mono text-xs uppercase tracking-[0.18em] text-navy-300"}>
                      {e.role}
                    </p>
                  </div>
                  <p className="leading-relaxed text-navy-300">{e.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16 grid gap-8 md:grid-cols-2">
          {educationEntries.map((ed) => (
            <div key={ed.degree} className="rounded-2xl border border-white/10 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-300">{ed.period}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-paper">{ed.degree}</h3>
              <p className="mt-1 text-navy-300">{ed.institution}</p>
              {ed.specialization && (
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-lemon-400">{ed.specialization}</p>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
