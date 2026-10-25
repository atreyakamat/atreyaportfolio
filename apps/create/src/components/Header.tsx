import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { EcosystemNav } from "@atreya/ui/EcosystemNav";

const links = [
  { label: "Stix", href: "/#stix" },
  { label: "Code", href: "/#code" },
  { label: "Web", href: "/#web" },
  { label: "Reels", href: "/#reels" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 border-b-2 border-acid bg-ink/90 px-5 py-3.5 backdrop-blur-md md:px-10">
      <div className="flex items-center gap-5">
        <Link href="/" aria-label="create, home" className="text-paper transition-colors hover:text-acid">
          <Monogram size={34} accent="#DFFF00" />
        </Link>
        <EcosystemNav current="create" className="hidden lg:flex" />
      </div>

      <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-acid">
            {l.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/#commission"
        className="bg-acid px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-transform hover:-translate-y-0.5"
      >
        Commission
      </Link>
    </header>
  );
}
