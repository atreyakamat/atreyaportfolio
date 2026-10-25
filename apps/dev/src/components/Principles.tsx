import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { principles } from "@/data/portfolio";

/** Lemon flip section: the operating principles behind every project. */
export function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-title" className="bg-lemon-400 px-5 py-28 text-navy-950 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="lemon"
          index="06"
          label="Operating principles"
          meta="Non-negotiable"
          id="principles-title"
          title={
            <>
              Six rules I <span className="font-serif font-normal italic">don&rsquo;t break</span>.
            </>
          }
          intro="People don't want another website. They want something that works on Monday morning. These rules are how I make sure it does."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-navy-950/20 bg-navy-950/20 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <li key={p.code} className="group bg-lemon-400 transition-colors duration-500 hover:bg-navy-950">
              <Reveal delay={(i % 3) * 0.08} className="flex h-full flex-col p-7 md:p-9">
                <span className="font-mono text-[11px] tracking-[0.2em] text-navy-800 transition-colors group-hover:text-lemon-400">{p.code}</span>
                <h3 className="mt-10 font-display text-3xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-paper">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-navy-800 transition-colors group-hover:text-navy-300">{p.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
