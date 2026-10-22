import { Reveal } from "@/components/Reveal";
import { offers } from "@/data/portfolio";

export function Offers() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-white/10 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">Work with me</p>
          <h2 id="services-title" className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-paper md:text-8xl">
            Three ways I{" "}
            <span className="font-serif font-normal italic text-lemon-400">earn my keep</span>.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {offers.map((o, i) => (
            <li key={o.tag} className="group bg-navy-950 transition-colors hover:bg-lemon-400">
              <Reveal delay={i * 0.1} className="flex h-full flex-col p-8 md:p-10">
                <span className="font-mono text-xs text-lemon-400 transition-colors group-hover:text-navy-950">{o.tag}</span>
                <h3 className="mt-8 font-display text-3xl font-bold leading-tight tracking-tight text-paper transition-colors group-hover:text-navy-950">{o.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-navy-300 transition-colors group-hover:text-navy-900">{o.desc}</p>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300 transition-colors group-hover:text-navy-950">For: {o.for}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
