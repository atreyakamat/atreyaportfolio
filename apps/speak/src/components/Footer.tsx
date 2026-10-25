import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { EcosystemNav } from "@atreya/ui/EcosystemNav";
import { LocalClock } from "@atreya/ui/LocalClock";
import { site } from "@/data/speak";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-cobalt-950 px-5 pt-16 md:px-10">
      <div className="mx-auto grid max-w-[96rem] gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt-300 md:grid-cols-4">
        <div className="space-y-3">
          <span className="block text-white">
            <Monogram size={34} accent="var(--color-lemonade)" />
          </span>
          <p>Talks &amp; workshops</p>
          <p>
            Goa · <LocalClock className="tabular-nums text-white" /> IST
          </p>
        </div>
        <nav aria-label="Speak" className="space-y-3">
          <p className="text-lemonade">Speak</p>
          {[
            ["Workshop", "/#workshop"],
            ["Topics", "/#topics"],
            ["Formats", "/#formats"],
            ["Speaker kit", "/#kit"],
            ["Book a talk", "/#book"],
          ].map(([l, h]) => (
            <Link key={h} href={h} className="block transition-colors hover:text-lemonade">
              {l}
            </Link>
          ))}
        </nav>
        <div className="space-y-3">
          <p className="text-lemonade">Atreya Kamat</p>
          <a href={site.devUrl} className="block transition-colors hover:text-lemonade">
            Software &amp; systems ↗
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-lemonade">
            LinkedIn ↗
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="block hover:text-lemonade">
            GitHub ↗
          </a>
        </div>
        <div className="space-y-3">
          <p className="text-lemonade">Contact</p>
          <a href={`mailto:${site.email}`} className="block normal-case tracking-normal text-white hover:text-lemonade">
            {site.email}
          </a>
          <EcosystemNav current="speak" className="flex-wrap pt-2" />
        </div>
      </div>

      <p
        aria-hidden
        data-word="SPEAK"
        className="mx-auto mt-16 max-w-[96rem] select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-[0.78] tracking-[-0.06em] text-cobalt-900 before:content-[attr(data-word)] after:text-lemonade after:content-['.'] md:text-[21vw] [@media(min-width:96rem)]:text-[20rem]"
      >
      </p>
      <div className="mx-auto flex max-w-[96rem] flex-wrap justify-between gap-3 border-t border-white/10 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-cobalt-300">
        <span>© {new Date().getFullYear()} Atreya Kamat</span>
        <span>speak.atreyakamat.dev</span>
      </div>
    </footer>
  );
}
