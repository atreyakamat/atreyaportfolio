import { EcosystemNav } from "@atreya/ui/EcosystemNav";
import { site } from "@/data/create";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-acid bg-ink px-5 pt-14 md:px-10">
      <div className="mx-auto flex max-w-[96rem] flex-wrap items-start justify-between gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
        <div className="space-y-3">
          <p className="text-acid">Atreya Kamat · create</p>
          <p>Made in Goa</p>
          <a href={`mailto:${site.email}`} className="block normal-case tracking-normal text-paper hover:text-acid">
            {site.email}
          </a>
        </div>
        <div className="space-y-3">
          <p className="text-acid">Elsewhere</p>
          <a href="https://stixnvibes.com" target="_blank" rel="noopener noreferrer" className="block hover:text-acid">Stix N Vibes ↗</a>
          <a href="https://instagram.com/stixnvibes" target="_blank" rel="noopener noreferrer" className="block hover:text-acid">@stixnvibes ↗</a>
          <a href="https://github.com/atreyakamat" target="_blank" rel="noopener noreferrer" className="block hover:text-acid">GitHub ↗</a>
        </div>
        <div className="space-y-3">
          <p className="text-acid">All sites</p>
          <EcosystemNav current="create" />
        </div>
      </div>
      <p
        aria-hidden
        className="mx-auto mt-14 max-w-[96rem] select-none whitespace-nowrap font-display text-[26.5vw] font-extrabold leading-[0.74] tracking-[-0.07em] text-acid [@media(min-width:96rem)]:text-[25.5rem]"
      >
        CREATE
      </p>
      <div className="mx-auto flex max-w-[96rem] flex-wrap justify-between gap-3 border-t border-paper/15 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/45">
        <span>© {new Date().getFullYear()} Atreya Kamat</span>
        <span>Sticker art © Stix N Vibes</span>
      </div>
    </footer>
  );
}
