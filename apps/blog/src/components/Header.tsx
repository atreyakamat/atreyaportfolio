import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { CATEGORIES } from "@/data/categories";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-page/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-ink transition-opacity hover:opacity-70">
          <Monogram className="h-6 w-6" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
            Atreya<span className="text-muted"> / blog</span>
          </span>
        </Link>

        <nav aria-label="Topics" className="hidden items-center gap-1 lg:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/topics/${c.slug}/`}
              className="rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:bg-card hover:text-ink"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.mainSite}
            className="rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-page transition-opacity hover:opacity-85"
          >
            Hire me<span className="hidden sm:inline"> →</span>
          </a>
        </div>
      </div>
    </header>
  );
}
