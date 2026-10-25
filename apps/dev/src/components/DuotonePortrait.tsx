"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

/**
 * Navy and lemon duotone portrait. The true-colour photo is revealed
 * through a soft circle that follows the cursor.
 */
export function DuotonePortrait({
  name,
  location,
  fill = false,
}: {
  name: string;
  location: string;
  /** Fill the parent (bento tile) instead of a fixed 3:4 frame. */
  fill?: boolean;
}) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--py", `${e.clientY - r.top}px`);
  };

  return (
    <figure className={fill ? "flex h-full w-full flex-col" : "w-full max-w-sm"}>
      {/* Maps luminance to navy (dark) and lemon (light). */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id="duotone-lemon" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.027 0.957" />
            <feFuncG type="table" tableValues="0.043 1" />
            <feFuncB type="table" tableValues="0.122 0.361" />
          </feComponentTransfer>
        </filter>
      </svg>

      <div
        onPointerMove={onMove}
        className={
          fill
            ? "group relative min-h-[26rem] flex-1 overflow-hidden rounded-[1.1rem] bg-navy-800"
            : "group relative aspect-[3/4] overflow-hidden rounded-sm bg-navy-800 ring-1 ring-white/10"
        }
        style={{ ["--px" as string]: "50%", ["--py" as string]: "40%" }}
      >
        <Image
          src="/atreyapfp.webp"
          alt={`Portrait of ${name}`}
          width={1086}
          height={1448}
          priority
          sizes="(min-width: 1024px) 24rem, 80vw"
          className="h-full w-full object-cover"
          style={{ filter: "url(#duotone-lemon)" }}
        />
        <Image
          src="/atreyapfp.webp"
          alt=""
          aria-hidden
          width={1086}
          height={1448}
          sizes="(min-width: 1024px) 24rem, 80vw"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            maskImage: "radial-gradient(circle 120px at var(--px) var(--py), black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle 120px at var(--px) var(--py), black 0%, transparent 100%)",
          }}
        />
      </div>
      <figcaption className="mt-3 flex px-1 justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-navy-300">
        <span className="text-paper">{name}</span>
        <span>{location}</span>
      </figcaption>
    </figure>
  );
}
