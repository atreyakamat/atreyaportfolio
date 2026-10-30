import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { site, sites } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-serif text-3xl italic leading-tight">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
            Written by {site.author}, freelance product engineer in Goa. If something here is useful and you want it built for you,{" "}
            <a href={site.mainSite} className="text-link underline underline-offset-4">
              start a project
            </a>
            .
          </p>
        </div>

        <nav aria-label="Topics">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Topics</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/topics/${c.slug}/`} className="transition-colors hover:text-link">
                  {c.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/archive/" className="transition-colors hover:text-link">
                All posts
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Elsewhere">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Elsewhere</p>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {sites
              .filter((s) => !("current" in s && s.current))
              .map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="transition-colors hover:text-link">
                    {s.label}.atreyakamat.dev <span className="text-muted">· {s.blurb}</span>
                  </a>
                </li>
              ))}
            <li>
              <a href="/feed.xml" className="transition-colors hover:text-link">
                RSS feed
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted md:px-8">
          <span>© {new Date().getFullYear()} {site.author} · Goa, India</span>
          <span className="flex gap-4">
            <a href={site.instagram} className="hover:text-link" target="_blank" rel="noopener noreferrer me">Instagram</a>
            <a href={site.github} className="hover:text-link" target="_blank" rel="noopener noreferrer me">GitHub</a>
            <a href={site.linkedin} className="hover:text-link" target="_blank" rel="noopener noreferrer me">LinkedIn</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
