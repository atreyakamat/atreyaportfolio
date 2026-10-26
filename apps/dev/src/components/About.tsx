import { LanyardBadge } from "@/components/LanyardBadge";
import { Reveal } from "@atreya/ui/Reveal";
import { NumberTicker } from "@atreya/ui/NumberTicker";
import { ScrollReveal } from "@atreya/ui/ScrollReveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { aboutManifesto, allProjects, educationEntries, experienceEntries, talksGiven } from "@/data/portfolio";

const stats = [
  { value: allProjects.length, suffix: "+", label: "Systems in this portfolio" },
  { value: experienceEntries.length, suffix: "", label: "Roles across product, platform & AI" },
  { value: talksGiven, suffix: "+", label: "Talks given" },
];

/** "The builder": swinging lanyard ID card, scroll-lit manifesto, live counters, credentials. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="05"
          label="The builder"
          meta="You talk to me"
          id="about-title"
          title={
            <>
              One person. <span className="font-serif font-normal italic text-lemon-400">Fully accountable.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ID card on a lanyard */}
          <Reveal className="lg:col-span-5">
            <LanyardBadge />
          </Reveal>

          <div className="flex flex-col gap-12 lg:col-span-7">
            <ScrollReveal
              text={aboutManifesto}
              className="font-display text-3xl font-semibold leading-[1.18] tracking-tight text-paper md:text-[2.6rem]"
            />

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[1.25rem] border border-white/10 bg-navy-900/80 p-5">
                  <NumberTicker value={s.value} suffix={s.suffix} className="block font-display text-6xl font-extrabold tracking-tight text-lemon-400" />
                  <p className="mt-2 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.16em] text-navy-300">{s.label}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-navy-300">Trained & worked at</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {experienceEntries.map((e) => (
                  <li key={e.company} className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper">
                    {e.company} <span className="text-navy-300">· {e.role}</span>
                  </li>
                ))}
                {educationEntries.map((ed) => (
                  <li key={ed.degree} className="rounded-full border border-lemon-400/40 px-4 py-2 text-sm text-paper">
                    {ed.degree}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
