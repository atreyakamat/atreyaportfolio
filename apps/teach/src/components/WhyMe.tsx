import { NumberTicker } from "@atreya/ui/NumberTicker";
import { Reveal } from "@atreya/ui/Reveal";
import { ScrollReveal } from "@atreya/ui/ScrollReveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { Marker } from "@/components/Marker";
import { credentials, teachingManifesto, tracks } from "@/data/teach";

const stats = [
  { value: credentials.roles.length, suffix: "", label: "Industry roles & internships" },
  { value: credentials.systemsBuilt, suffix: "+", label: "Systems built & shipped" },
  { value: tracks.length, suffix: "", label: "Tracks, from Class 8 to college" },
];

export function WhyMe() {
  return (
    <section id="why" aria-labelledby="why-title" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="light"
          index="04"
          label="Why learn from me"
          meta="Working engineer"
          id="why-title"
          title={
            <>
              Taught by someone who <Marker><span className="font-serif font-normal italic">does it daily</span></Marker>.
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScrollReveal
              text={teachingManifesto}
              from={0.62}
              className="font-display text-3xl font-semibold leading-[1.2] tracking-tight text-ink-navy md:text-[2.5rem]"
            />
            <a
              href="https://atreyakamat.dev"
              className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-navy underline decoration-marker decoration-4 underline-offset-4"
            >
              See what I build at atreyakamat.dev ↗
            </a>
          </div>

          <div className="space-y-3 lg:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[1.25rem] bg-ink-navy p-4 text-paper md:p-5">
                  <NumberTicker value={s.value} suffix={s.suffix} className="block font-display text-5xl font-extrabold tracking-tight text-marker" />
                  <p className="mt-2 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.14em] text-navy-300">{s.label}</p>
                </div>
              ))}
            </div>
            <Reveal className="rounded-[1.25rem] bg-white/80 p-6 ring-1 ring-ink-navy/10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-navy/75">Worked & trained at</p>
              <ul className="mt-4 divide-y divide-ink-navy/10">
                {credentials.roles.map((r) => (
                  <li key={r.company} className="flex items-baseline justify-between gap-4 py-2.5">
                    <span className="font-display text-lg font-bold text-ink-navy">{r.company}</span>
                    <span className="text-right text-sm text-ink-navy/65">{r.role}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {credentials.degrees.map((d) => (
                  <li key={d} className="rounded-full bg-marker px-3 py-1.5 text-sm text-ink-navy">
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
