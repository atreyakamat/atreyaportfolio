import Link from "next/link";
import { Monogram } from "@atreya/brand/monogram";
import { LocalClock } from "@/components/system/LocalClock";
import { personalInfo } from "@/data/portfolio";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 pt-16 md:px-10">
      <div className="mx-auto grid max-w-[96rem] gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300 md:grid-cols-4">
        <div className="space-y-3">
          <span className="block text-paper"><Monogram size={34} /></span>
          <p>Freelance product engineer</p>
          <p>
            Goa · <LocalClock className="tabular-nums text-paper" /> IST
          </p>
        </div>
        <nav aria-label="Services" className="space-y-3">
          <p className="text-lemon-400">Services</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="block transition-colors hover:text-lemon-400">
              {s.name}
            </Link>
          ))}
        </nav>
        <nav aria-label="Site" className="space-y-3">
          <p className="text-lemon-400">Index</p>
          {[
            ["System", "/#system"],
            ["Work", "/#work"],
            ["Experience", "/#experience"],
            ["FAQ", "/#faq"],
          ].map(([l, h]) => (
            <Link key={h} href={h} className="block transition-colors hover:text-lemon-400">
              {l}
            </Link>
          ))}
        </nav>
        <div className="space-y-3">
          <p className="text-lemon-400">Elsewhere</p>
          <a href={`mailto:${personalInfo.email}`} className="block normal-case tracking-normal text-paper hover:text-lemon-400">
            {personalInfo.email}
          </a>
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-lemon-400">
            GitHub ↗
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-lemon-400">
            LinkedIn ↗
          </a>
          <a href={personalInfo.resumeUrl} download="atreya_kamat_resume.pdf" className="block hover:text-lemon-400">
            Resume ↓
          </a>
        </div>
      </div>

      <p
        aria-hidden
        className="mx-auto mt-16 max-w-[96rem] select-none whitespace-nowrap font-display text-[17.5vw] font-extrabold leading-[0.78] tracking-[-0.06em] text-navy-800/90 md:text-[15.5vw] [@media(min-width:96rem)]:text-[14.6rem]"
      >
        ATREYA<span className="text-lemon-400">.</span>
      </p>
      <div className="mx-auto flex max-w-[96rem] flex-wrap justify-between gap-3 border-t border-white/10 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-navy-500">
        <span>© {new Date().getFullYear()} Atreya Kamat</span>
        <span>Built with Next.js · Hosted on Netlify</span>
      </div>
    </footer>
  );
}
