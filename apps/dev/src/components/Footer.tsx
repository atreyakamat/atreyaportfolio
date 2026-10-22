import { Monogram } from "@atreya/brand/monogram";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300">
        <span className="flex items-center gap-3 text-paper">
          <Monogram size={28} />
          {personalInfo.name}
        </span>
        <span>{personalInfo.location}</span>
        <span>© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  );
}
