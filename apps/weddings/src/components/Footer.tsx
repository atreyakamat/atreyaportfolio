import { Mark } from "@/components/Mark";
import { site } from "@/data/site";
import { defaultWa } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-tide-950 px-5 pt-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-salt/10 pt-12 text-sm md:grid-cols-3">
        <div className="space-y-3">
          <Mark size={40} className="text-salt" />
          <p className="max-w-xs leading-relaxed text-tide-300">Vertical wedding reels for destination and local Goan weddings, and reel editing for videographers.</p>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sun-400">Say hello</p>
          <a href={defaultWa} target="_blank" rel="noopener noreferrer" className="block text-salt hover:text-sun-400">
            WhatsApp {site.whatsappDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="block text-salt hover:text-sun-400">
            {site.email}
          </a>
          {site.instagram && (
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block text-salt hover:text-sun-400">
              Instagram ↗
            </a>
          )}
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sun-400">Studio</p>
          <p className="text-tide-300">Based in Goa, India</p>
          <p className="text-tide-300">
            A studio by{" "}
            <a href={site.founder.url} className="text-salt underline decoration-sun-400/60 underline-offset-4 hover:text-sun-400">
              {site.founder.name}
            </a>
          </p>
        </div>
      </div>
      <p
        aria-hidden
        data-word="Saltwater"
        className="mx-auto mt-14 max-w-7xl select-none whitespace-nowrap font-display text-[24vw] italic leading-[0.8] tracking-[-0.04em] text-tide-800 before:content-[attr(data-word)] md:text-[20vw] [@media(min-width:80rem)]:text-[16rem]"
      />
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-salt/10 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-tide-300">
        <span>© {year} Saltwater Studios</span>
        <span>Wedding reels · Goa</span>
      </div>
    </footer>
  );
}
