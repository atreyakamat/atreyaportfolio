import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { TileLabel } from "@atreya/ui/Tile";
import { Marker } from "@/components/Marker";
import { formats, steps } from "@/data/teach";

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="ruled border-y border-ink-navy/10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="light"
          index="02"
          label="How classes work"
          meta="In person · Goa"
          id="how-title"
          title={
            <>
              Your pace, <Marker><span className="font-serif font-normal italic">your problems</span></Marker>.
            </>
          }
          intro="Two formats, one approach: understand first, then practise on real problems until it sticks."
        />

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {formats.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <div className="h-full rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-ink-navy/10 md:p-9">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink-navy">{f.name}</h3>
                  <TileLabel className="rounded-full bg-marker px-3 py-1 text-ink-navy">{f.tag}</TileLabel>
                </div>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[16px] text-ink-navy/80">
                      <span aria-hidden className="text-ink-navy">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <ol className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-ink-navy/20 md:block" />
          {steps.map((s, i) => (
            <li key={s.code} className="relative">
              <Reveal delay={i * 0.1}>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink-navy font-mono text-sm text-marker ring-8 ring-sunlit">
                  {s.code}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-navy">{s.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-ink-navy/70">{s.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
