import type { ReactNode } from "react";
import { Reveal } from "@atreya/ui/Reveal";
import { Scramble } from "@atreya/ui/Scramble";

/**
 * Spec-sheet section header for bright cobalt sections (white + lemonade).
 * Same anatomy as the shared SectionHeader, re-coloured for cobalt-500.
 */
export function CobaltHeader({
  index,
  label,
  meta,
  title,
  intro,
  id,
}: {
  index: string;
  label: string;
  meta?: string;
  title: ReactNode;
  intro?: ReactNode;
  id: string;
}) {
  return (
    <header>
      <div className="flex items-center gap-4 border-b border-white/25 pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
        <span className="text-lemonade">§{index}</span>
        <Scramble text={label} className="text-white" />
        <span aria-hidden className="h-px flex-1 border-t border-dashed border-white/30" />
        {meta && <span className="hidden sm:inline">{meta}</span>}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2 id={id} className="font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.035em] text-white md:text-7xl xl:text-8xl">
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="max-w-md text-lg leading-relaxed text-white/85">{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
