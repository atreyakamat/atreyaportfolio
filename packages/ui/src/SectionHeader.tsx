import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Scramble } from "./Scramble";

/**
 * Spec-sheet section header: a rule line with index, label and a meta tag,
 * then the display title.
 */
export function SectionHeader({
  index,
  label,
  meta,
  title,
  intro,
  id,
  tone = "dark",
}: {
  index: string;
  label: string;
  meta?: string;
  title: ReactNode;
  intro?: ReactNode;
  id: string;
  tone?: "dark" | "lemon" | "light";
}) {
  // "lemon" = navy text on a lemon section; "light" = ink on paper with a lemon marker.
  const lemon = tone === "lemon" || tone === "light";
  return (
    <header>
      <div
        className={clsx(
          "flex items-center gap-4 border-b pb-4 font-mono text-[11px] uppercase tracking-[0.2em]",
          lemon ? "border-navy-950/25 text-navy-800" : "border-white/10 text-navy-300",
        )}
      >
        <span className={lemon ? "text-navy-950" : "text-lemon-400"}>§{index}</span>
        <Scramble text={label} className={lemon ? "text-navy-950" : "text-paper"} />
        <span aria-hidden className={clsx("h-px flex-1 border-t border-dashed", lemon ? "border-navy-950/25" : "border-white/15")} />
        {meta && <span className="hidden sm:inline">{meta}</span>}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <h2
            id={id}
            className={clsx(
              "font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.035em] md:text-7xl xl:text-8xl",
              lemon ? "text-navy-950" : "text-paper",
            )}
          >
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className={clsx("max-w-md text-lg leading-relaxed", lemon ? "text-navy-800" : "text-navy-300")}>{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
