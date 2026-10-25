import { DuotonePortrait } from "@/components/DuotonePortrait";
import { Reveal } from "@atreya/ui/Reveal";
import { NumberTicker } from "@atreya/ui/NumberTicker";
import { ScrollReveal } from "@atreya/ui/ScrollReveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { TiltCard } from "@atreya/ui/TiltCard";
import { TileLabel } from "@atreya/ui/Tile";
import { aboutManifesto, allProjects, educationEntries, experienceEntries, personalInfo, talksGiven } from "@/data/portfolio";

const stats = [
  { value: allProjects.length, suffix: "+", label: "Systems in this portfolio" },
  { value: experienceEntries.length, suffix: "", label: "Roles across product, platform & AI" },
  { value: talksGiven, suffix: "+", label: "Talks given" },
];

/** "The builder": tilting ID-card portrait, scroll-lit manifesto, live counters, credentials. */
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
          {/* ID card */}
          <Reveal className="lg:col-span-5">
            <TiltCard className="mx-auto max-w-md rounded-[1.75rem]">
              <div className="rounded-[1.75rem] border border-white/15 bg-navy-900 p-3 shadow-[0_40px_120px_-40px_rgba(244,255,92,0.25)]">
                <div className="flex items-center justify-between px-2 pb-3 pt-1">
                  <TileLabel dot className="text-lemon-400">
                    ID · AK-01
                  </TileLabel>
                  <TileLabel className="text-navy-300">Goa, IN</TileLabel>
                </div>
                <div className="h-[30rem]">
                  <DuotonePortrait fill name={personalInfo.name} location="Hover to see me" />
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 font-mono text-[10.5px] uppercase tracking-[0.16em]">
                  {[
                    ["Role", "Product engineer"],
                    ["Base", "Goa, India"],
                    ["Degree", "B.E. + Honours AI/ML"],
                    ["Status", "Taking projects"],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-navy-950 p-3">
                      <dt className="text-navy-300">{k}</dt>
                      <dd className={k === "Status" ? "mt-1 text-lemon-400" : "mt-1 text-paper"}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </TiltCard>
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
