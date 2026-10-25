"use client";

import clsx from "clsx";
import type { PointerEvent, ReactNode } from "react";

/**
 * Card with a cursor-following lemon glow on its border and surface
 * (the "spotlight card" pattern). Pure CSS variables, no re-renders.
 */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onPointerMove={onMove}
      className={clsx(
        "group/spot relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-px",
        className,
      )}
      style={{ ["--sx" as string]: "50%", ["--sy" as string]: "0%" }}
    >
      {/* border glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(360px circle at var(--sx) var(--sy), rgba(244,255,92,0.55), transparent 45%)" }}
      />
      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-navy-900">
        {/* surface glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
          style={{ background: "radial-gradient(420px circle at var(--sx) var(--sy), rgba(244,255,92,0.08), transparent 60%)" }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}
