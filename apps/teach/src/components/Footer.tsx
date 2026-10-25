import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { EcosystemNav } from "@atreya/ui/EcosystemNav";
import { site, tracks } from "@/data/teach";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-navy/10 px-5 pt-16 md:px-10">
      <div className="mx-auto grid max-w-[96rem] gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-navy/70 md:grid-cols-4">
        <div className="space-y-3">
          <span className="block text-ink-navy">
            <Monogram size={34} accent="var(--color-ink-navy)" />
          </span>
          <p>Tuition & workshops</p>
          <p>In person · Goa</p>
        </div>
        <nav aria-label="Tracks" className="space-y-3">
          <p className="text-ink-navy">Tracks</p>
          {tracks.map((t) => (
            <Link key={t.slug} href={`/#${t.slug}`} className="block transition-colors hover:text-ink-navy">
              {t.name}
            </Link>
          ))}
        </nav>
        <div className="space-y-3">
          <p className="text-ink-navy">Elsewhere</p>
          <a href="https://atreyakamat.dev" className="block hover:text-ink-navy">
            Software work ↗
          </a>
          <a href="https://speak.atreyakamat.dev" className="block hover:text-ink-navy">
            Talks ↗
          </a>
          <a href="https://create.atreyakamat.dev" className="block hover:text-ink-navy">
            Creative work ↗
          </a>
        </div>
        <div className="space-y-3">
          <p className="text-ink-navy">Contact</p>
          <a href={`mailto:${site.email}`} className="block normal-case tracking-normal text-ink-navy hover:underline">
            {site.email}
          </a>
          <EcosystemNav current="teach" tone="light" className="-ml-2.5 flex-wrap" />
        </div>
      </div>

      <p
        aria-hidden
        data-word="teach"
        className="mx-auto mt-14 max-w-[96rem] select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-[0.78] tracking-[-0.06em] text-ink-navy/[0.07] before:content-[attr(data-word)] after:text-ink-navy/20 after:content-['.'] md:text-[21vw] [@media(min-width:96rem)]:text-[20rem]"
      >
      </p>
      <div className="mx-auto flex max-w-[96rem] flex-wrap justify-between gap-3 border-t border-ink-navy/10 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-navy/75">
        <span>© {new Date().getFullYear()} Atreya Kamat</span>
        <span>teach.atreyakamat.dev</span>
      </div>
    </footer>
  );
}
