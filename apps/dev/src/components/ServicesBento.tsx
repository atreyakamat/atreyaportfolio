import Link from "next/link";
import clsx from "clsx";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { CornerTicks, TileLabel } from "@/components/system/Tile";
import { goaAreas, services, type Service } from "@/data/services";

const stack = ["Next.js", "React", "TypeScript", "Tailwind", "Python", "Flask", "PostgreSQL", "Supabase", "Docker", "Ollama", "TensorFlow", "Netlify"];

/* ── Illustrative micro-UIs (decorative, aria-hidden) ── */

function BrowserMock() {
  const bars = [38, 52, 44, 66, 58, 81, 92];
  return (
    <div aria-hidden className="rounded-xl border border-white/10 bg-navy-950/90 p-3">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-navy-700" />
        <span className="h-2 w-2 rounded-full bg-navy-700" />
        <span className="h-2 w-2 rounded-full bg-navy-700" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-navy-800 px-3 font-mono text-[9px] leading-4 text-navy-300">yourbusiness.in</span>
      </div>
      <div className="mt-4 grid grid-cols-[1.2fr_1fr] gap-4">
        <div className="space-y-2">
          <div className="h-3 w-4/5 rounded bg-paper/80" />
          <div className="h-3 w-3/5 rounded bg-paper/80" />
          <div className="h-2 w-full rounded bg-navy-700" />
          <div className="h-2 w-4/5 rounded bg-navy-700" />
          <div className="mt-3 inline-flex h-6 w-24 items-center justify-center rounded-full bg-lemon-400 font-mono text-[8px] font-bold uppercase text-navy-950">
            Enquire →
          </div>
        </div>
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-navy-300">Enquiries / wk</p>
          <div className="mt-2 flex h-20 items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className={clsx("bar-grow block flex-1 rounded-sm", i === bars.length - 1 ? "bg-lemon-400" : "bg-navy-500")}
                style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TableMock() {
  const rows = [
    ["#1042", "Stock · Panaji", "OK"],
    ["#1043", "Order · Mapusa", "SYNC"],
    ["#1044", "Lead · Margao", "NEW"],
    ["#1045", "Stock · Ponda", "LOW"],
  ];
  return (
    <div aria-hidden className="overflow-hidden rounded-xl border border-white/10 bg-navy-950/90 font-mono text-[10px]">
      {rows.map(([id, what, st], i) => (
        <div key={id} className={clsx("flex items-center justify-between px-3 py-2.5", i > 0 && "border-t border-white/5")}>
          <span className="text-navy-300">{id}</span>
          <span className="text-paper">{what}</span>
          <span
            className={clsx(
              "rounded-full px-2 py-0.5 text-[8.5px] font-bold",
              st === "LOW" ? "bg-lemon-400 text-navy-950" : st === "NEW" ? "border border-lemon-400 text-lemon-400" : "bg-navy-800 text-navy-100",
            )}
          >
            {st}
          </span>
        </div>
      ))}
    </div>
  );
}

function DocMock() {
  return (
    <div aria-hidden className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-paper/95 p-3">
        <span className="scan absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent via-lemon-400/70 to-transparent" />
        <div className="space-y-1.5">
          <div className="h-2 w-1/2 rounded bg-navy-950/70" />
          {[90, 70, 80, 60, 75, 50].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-navy-950/20" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
      <span className="font-mono text-lemon-400">→</span>
      <div className="space-y-1.5 rounded-xl border border-white/10 bg-navy-950/90 p-3 font-mono text-[9.5px]">
        <p><span className="text-navy-300">vendor:</span> <span className="text-paper">&quot;…&quot;</span></p>
        <p><span className="text-navy-300">total:</span> <span className="text-lemon-400">₹ ——</span></p>
        <p><span className="text-navy-300">due:</span> <span className="text-paper">——</span><span className="caret text-lemon-400">▍</span></p>
      </div>
    </div>
  );
}

const mocks: Record<string, () => React.JSX.Element> = {
  "website-development-goa": BrowserMock,
  "custom-software-development-goa": TableMock,
  "ai-automation-goa": DocMock,
};

function ServiceTile({ s, className, delay }: { s: Service; className?: string; delay: number }) {
  const Mock = mocks[s.slug];
  return (
    <Reveal delay={delay} className={className}>
      <Link
        href={`/services/${s.slug}/`}
        className="group relative flex h-full flex-col gap-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-6 transition-colors duration-500 hover:border-lemon-400/60 md:p-8"
      >
        <CornerTicks className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="flex items-center justify-between">
          <TileLabel className="text-lemon-400">{s.code}</TileLabel>
          <span aria-hidden className="font-mono text-lg text-navy-300 transition-all duration-500 group-hover:-rotate-45 group-hover:text-lemon-400">
            →
          </span>
        </div>
        <div className="flex-1">{Mock && <Mock />}</div>
        <div>
          <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-paper md:text-4xl">{s.name}</h3>
          <p className="mt-3 max-w-md leading-relaxed text-navy-300">{s.short}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServicesBento() {
  return (
    <section id="services" aria-labelledby="services-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="01"
          label="Services"
          meta="Goa · remote"
          id="services-title"
          title={
            <>
              Software for Goa businesses <span className="font-serif font-normal italic text-lemon-400">that mean business</span>.
            </>
          }
          intro="Three ways I help: a website that brings in enquiries, software that runs the operation, and automation that kills the copy-paste."
        />

        <div className="mt-16 grid gap-3 lg:grid-cols-12">
          <ServiceTile s={services[0]} className="lg:col-span-7" delay={0} />
          <ServiceTile s={services[1]} className="lg:col-span-5" delay={0.08} />
          <ServiceTile s={services[2]} className="lg:col-span-5" delay={0.16} />

          <Reveal delay={0.2} className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-8 rounded-[1.5rem] border border-white/10 bg-navy-950 p-6 md:p-8">
              <TileLabel dot className="text-lemon-400">
                Serving all of Goa
              </TileLabel>
              <ul className="flex flex-wrap gap-2">
                {goaAreas.map((a) => (
                  <li key={a} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-navy-300">North Goa, South Goa, and clients outside Goa remotely.</p>
            </div>
          </Reveal>

          <Reveal delay={0.26} className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-8 rounded-[1.5rem] bg-lemon-400 p-6 text-navy-950 md:p-8">
              <TileLabel>Toolkit</TileLabel>
              <ul className="flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <li key={t} className="rounded-md bg-navy-950/10 px-2 py-1 font-mono text-[11px]">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="font-display text-xl font-bold leading-tight">Modern, boring-in-a-good-way tech.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
