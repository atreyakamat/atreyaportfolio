import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { EcosystemNav } from "@atreya/ui/EcosystemNav";

const links = [
  { label: "Tracks", href: "/#tracks" },
  { label: "How it works", href: "/#how" },
  { label: "Lesson", href: "/#lesson" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 border-b border-ink-navy/10 bg-sunlit/85 px-5 py-3.5 backdrop-blur-md md:px-10">
      <div className="flex items-center gap-5">
        <Link href="/" aria-label="Atreya Kamat teach, home" className="text-ink-navy">
          <Monogram size={34} accent="var(--color-ink-navy)" />
        </Link>
        <EcosystemNav current="teach" tone="light" className="hidden lg:flex" />
      </div>

      <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-navy/70 transition-colors hover:text-ink-navy"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/#enquire"
        className="rounded-full bg-ink-navy px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-marker transition-transform hover:-translate-y-0.5"
      >
        Book a session
      </Link>
    </header>
  );
}
