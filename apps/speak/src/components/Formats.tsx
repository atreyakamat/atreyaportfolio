import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { formats } from "@/data/speak";

/** Lemonade flip section: the four session formats. */
export function Formats() {
  return (
    <section id="formats" aria-labelledby="formats-title" className="bg-lemonade px-5 py-28 text-cobalt-950 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="lemon"
          index="03"
          label="Formats"
          meta="In Goa · online anywhere"
          id="formats-title"
          title={
            <>
              Stage, classroom <span className="font-serif font-normal italic">or laptop-open</span>.
            </>
          }
          intro="Same practical approach in every format: fewer slides, more doing, and examples people can take back to work or class."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-cobalt-950/20 bg-cobalt-950/20 md:grid-cols-2 lg:grid-cols-4">
          {formats.map((f, i) => (
            <li key={f.title} className="group bg-lemonade transition-colors duration-500 hover:bg-cobalt-500">
              <Reveal delay={i * 0.08} className="flex h-full min-h-[18rem] flex-col p-7 md:p-9">
                <span className="font-mono text-[11px] tracking-[0.2em] text-cobalt-700 transition-colors group-hover:text-lemonade">
                  F/0{i + 1}
                </span>
                <h3 className="mt-auto font-display text-3xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-white">
                  {f.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cobalt-900 transition-colors group-hover:text-white/90">{f.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
