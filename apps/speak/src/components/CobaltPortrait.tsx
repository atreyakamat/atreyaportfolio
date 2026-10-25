"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

/**
 * Portrait mapped to deep cobalt (shadows) and lemonade (highlights).
 * True colour shows through a soft circle that follows the cursor.
 */
export function CobaltPortrait({ priority = false, className }: { priority?: boolean; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--py", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-[1.25rem] bg-cobalt-900 ${className ?? ""}`}
      style={{ ["--px" as string]: "50%", ["--py" as string]: "40%" }}
    >
      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id="duotone-cobalt" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.024 1" />
            <feFuncG type="table" tableValues="0.067 0.96" />
            <feFuncB type="table" tableValues="0.29 0.6" />
          </feComponentTransfer>
        </filter>
      </svg>
      <Image
        src="/atreyapfp.webp"
        alt="Portrait of Atreya Kamat"
        width={1086}
        height={1448}
        priority={priority}
        sizes="(min-width: 1024px) 30rem, 90vw"
        className="h-full w-full object-cover"
        style={{ filter: "url(#duotone-cobalt)" }}
      />
      <Image
        src="/atreyapfp.webp"
        alt=""
        aria-hidden
        width={1086}
        height={1448}
        sizes="(min-width: 1024px) 30rem, 90vw"
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          maskImage: "radial-gradient(circle 120px at var(--px) var(--py), black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle 120px at var(--px) var(--py), black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
