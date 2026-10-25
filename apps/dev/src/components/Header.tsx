import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Services", href: "/#services" },
  { label: "System", href: "/#system" },
  { label: "Work", href: "/#work" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-navy-950/85 px-5 py-4 backdrop-blur-md md:px-10">
      <Link href="/" aria-label="Atreya Kamat, home" className="text-paper transition-colors hover:text-lemon-400">
        <Monogram size={36} />
      </Link>

      <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-mono text-xs uppercase tracking-[0.18em] text-navy-300 transition-colors hover:text-lemon-400"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300 lg:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lemon-400 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lemon-400" />
          </span>
          {personalInfo.statusShort}
        </span>
        <Link
          href="/#contact"
          className="rounded-full border border-lemon-400 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-lemon-400 transition-colors hover:bg-lemon-400 hover:text-navy-950"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
