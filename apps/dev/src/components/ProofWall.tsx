import Image from "next/image";
import clsx from "clsx";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { SpotlightCard } from "@atreya/ui/Spotlight";
import { TileLabel } from "@atreya/ui/Tile";
import { proofItems, type ProofItem } from "@/data/portfolio";

const STATUS_STYLE: Record<ProofItem["status"], string> = {
  Live: "bg-lemon-400 text-navy-950",
  Pilot: "border border-lemon-400 text-lemon-400",
  Waitlist: "border border-lemon-400 text-lemon-400",
  Built: "bg-navy-700 text-paper",
  Internal: "bg-navy-700 text-paper",
  "In progress": "border border-white/30 text-paper",
};

/* Decorative micro-UIs for builds without a public screenshot */
function Visual({ item }: { item: ProofItem }) {
  if (item.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
        <Image
          src={item.image}
          alt={`${item.name} website, home screen`}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover/spot:scale-[1.04]"
        />
      </div>
    );
  }
  const base = "relative flex aspect-[16/10] flex-col justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-navy-950 p-5 font-mono text-[11px]";
  if (item.name === "SlotBack")
    return (
      <div aria-hidden className={base}>
        {[["10:00", "Booked"], ["11:30", "Cancelled → offered"], ["11:31", "Claimed by waitlist"], ["13:00", "Booked"]].map(([t, s], i) => (
          <div key={t} className="flex items-center gap-3">
            <span className="w-10 text-navy-300">{t}</span>
            <span className={clsx("flex-1 rounded-md px-3 py-1.5", i === 2 ? "bg-lemon-400 font-bold text-navy-950" : i === 1 ? "border border-dashed border-lemon-400/60 text-lemon-400" : "bg-navy-800 text-paper")}>{s}</span>
          </div>
        ))}
      </div>
    );
  if (item.name === "InWoice")
    return (
      <div aria-hidden className={base}>
        <div className="flex justify-between text-paper"><span>INV-0142</span><span className="text-lemon-400">PAID</span></div>
        {[["Taxable value", "₹ ——"], ["CGST 9%", "₹ ——"], ["SGST 9%", "₹ ——"]].map(([k, v]) => (
          <div key={k} className="flex justify-between border-t border-white/5 pt-2 text-navy-300"><span>{k}</span><span>{v}</span></div>
        ))}
        <div className="flex justify-between border-t border-white/20 pt-2 font-bold text-paper"><span>Total</span><span>₹ ——</span></div>
      </div>
    );
  return (
    <div aria-hidden className={base}>
      {[["Cables", 82], ["Reagents", 18], ["Gloves", 64], ["Tubes", 41]].map(([k, v]) => (
        <div key={k} className="flex items-center gap-3">
          <span className="w-16 text-navy-300">{k}</span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-navy-800">
            <span className={clsx("bar-grow block h-full rounded-full", (v as number) < 25 ? "bg-lemon-400" : "bg-navy-500")} style={{ width: `${v}%`, transformOrigin: "left" }} />
          </span>
          {(v as number) < 25 && <span className="text-lemon-400">LOW</span>}
        </div>
      ))}
    </div>
  );
}

export function ProofWall() {
  return (
    <section id="proof" aria-labelledby="proof-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="03"
          label="Proof of work"
          meta={`${proofItems.length} real builds`}
          id="proof-title"
          title={
            <>
              Don&rsquo;t take my word. <span className="font-serif font-normal italic text-lemon-400">Click around.</span>
            </>
          }
          intro="Live sites, products with real users and waitlists, and tools teams run on. Every one designed and built by me."
        />

        <ul className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {proofItems.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col gap-5 p-4 md:p-5">
                    <Visual item={item} />
                    <div className="flex items-center justify-between gap-3 px-1">
                      <TileLabel className="text-navy-300">{item.kind}</TileLabel>
                      <span className={clsx("shrink-0 rounded-full px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em]", STATUS_STYLE[item.status])}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex-1 px-1">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-paper">{item.name}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-navy-300">{item.desc}</p>
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-1 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-lemon-400 underline-offset-4 hover:underline"
                      >
                        Visit live site <span aria-hidden>↗</span>
                      </a>
                    )}
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
