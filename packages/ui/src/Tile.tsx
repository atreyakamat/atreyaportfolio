import clsx from "clsx";
import type { ReactNode } from "react";

/** Blueprint corner ticks, drawn at each corner of a tile. */
export function CornerTicks({ className }: { className?: string }) {
  const base = "pointer-events-none absolute h-2.5 w-2.5 border-current";
  return (
    <span aria-hidden className={clsx("pointer-events-none absolute inset-0 text-lemon-400/60", className)}>
      <span className={clsx(base, "left-2 top-2 border-l border-t")} />
      <span className={clsx(base, "right-2 top-2 border-r border-t")} />
      <span className={clsx(base, "bottom-2 left-2 border-b border-l")} />
      <span className={clsx(base, "bottom-2 right-2 border-b border-r")} />
    </span>
  );
}

/** A bento tile: rounded panel, hairline border, optional corner ticks. */
export function Tile({
  children,
  className,
  tone = "dark",
  ticks = false,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "lemon" | "deep";
  ticks?: boolean;
  as?: "div" | "li" | "article";
}) {
  return (
    <As
      className={clsx(
        "relative overflow-hidden rounded-[1.5rem]",
        tone === "dark" && "border border-white/10 bg-navy-900/80 text-paper",
        tone === "deep" && "border border-white/10 bg-navy-950 text-paper",
        tone === "lemon" && "bg-lemon-400 text-navy-950",
        className,
      )}
    >
      {ticks && <CornerTicks className={tone === "lemon" ? "text-navy-950/40" : undefined} />}
      {children}
    </As>
  );
}

/** Small mono label with a status dot, used at the top of tiles. */
export function TileLabel({ children, dot, className }: { children: ReactNode; dot?: boolean; className?: string }) {
  return (
    <p className={clsx("flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em]", className)}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </p>
  );
}
