import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { EcosystemNav } from "@atreya/ui/EcosystemNav";

const links = [
  { label: "Workshop", href: "/#workshop" },
  { label: "Topics", href: "/#topics" },
  { label: "Formats", href: "/#formats" },
  { label: "Speaker kit", href: "/#kit" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 border-b border-white/10 bg-cobalt-950/85 px-5 py-4 backdrop-blur-md md:px-10">
      <Link href="/" aria-label="Atreya Kamat Speaks, home" className="flex items-center gap-3 text-white transition-colors hover:text-lemonade">
        <Monogram size={34} accent="var(--color-lemonade)" />
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] sm:inline">/ speak</span>
      </Link>

      <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-[0.18em] text-cobalt-300 transition-colors hover:text-lemonade">
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <EcosystemNav current="speak" className="hidden xl:flex" />
        <Link
          href="/#book"
          className="rounded-full bg-lemonade px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-950 transition-colors hover:bg-white"
        >
          Book a talk
        </Link>
      </div>
    </header>
  );
}
