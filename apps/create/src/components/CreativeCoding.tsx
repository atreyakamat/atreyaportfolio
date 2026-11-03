"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks } from "@atreya/ui/Tile";
import { codeWorks } from "@/data/create";

/* Tiny seeded PRNG so a seed always draws the same piece. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const N = 8; // grid size
const S = 50; // tile size in SVG units

type Cell = { kind: number; rot: number; fill: boolean };

function makeCells(seed: number): Cell[] {
  const rnd = mulberry32(seed);
  return Array.from({ length: N * N }, () => ({
    kind: Math.floor(rnd() * 5),
    rot: Math.floor(rnd() * 4) * 90,
    fill: rnd() > 0.55,
  }));
}

function Tile({ c }: { c: Cell }) {
  const fg = c.fill ? "#0A0A0A" : "#ff6b1a";
  const bg = c.fill ? "#ff6b1a" : "#0A0A0A";
  return (
    <g transform={`rotate(${c.rot} ${S / 2} ${S / 2})`}>
      <rect width={S} height={S} fill={bg} shapeRendering="crispEdges" />
      {c.kind === 0 && <path d={`M0 0 A${S} ${S} 0 0 1 ${S} ${S} L0 ${S}Z`} fill={fg} />}
      {c.kind === 1 && <circle cx={S / 2} cy={S / 2} r={S / 4} fill={fg} />}
      {c.kind === 2 && <path d={`M0 0 L${S} 0 L0 ${S}Z`} fill={fg} />}
      {c.kind === 3 && (
        <g stroke={fg} strokeWidth={5}>
          <line x1={0} y1={S * 0.25} x2={S} y2={S * 0.25} />
          <line x1={0} y1={S * 0.5} x2={S} y2={S * 0.5} />
          <line x1={0} y1={S * 0.75} x2={S} y2={S * 0.75} />
        </g>
      )}
      {c.kind === 4 && <path d={`M0 ${S} A${S / 2} ${S / 2} 0 0 1 ${S} ${S}Z`} fill={fg} />}
    </g>
  );
}

/** A live generative piece: same seed, same picture. Reroll draws a new one. */
function GenerativePiece() {
  const [seed, setSeed] = useState(1204);
  const cells = useMemo(() => makeCells(seed), [seed]);
  const reduce = useReducedMotion();

  return (
    <div className="relative border-2 border-acid bg-ink p-4">
      <CornerTicks className="text-acid" />
      <motion.svg
        key={seed}
        viewBox={`0 0 ${N * S} ${N * S}`}
        className="block aspect-square w-full"
        role="img"
        aria-label={`Generative pattern, seed ${seed}`}
        initial={reduce ? false : { opacity: 0.2, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {cells.map((c, i) => (
          <g key={i} transform={`translate(${(i % N) * S} ${Math.floor(i / N) * S})`}>
            <Tile c={c} />
          </g>
        ))}
      </motion.svg>
      <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
        <span className="text-paper/60">
          seed <span className="text-acid">{seed}</span>
        </span>
        <button
          type="button"
          onClick={() => setSeed((s) => (s * 48271) % 2147483647)}
          className="bg-acid px-4 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Reroll ↻
        </button>
      </div>
    </div>
  );
}

export function CreativeCoding() {
  return (
    <section id="code" aria-labelledby="code-title" className="bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="05"
          label="Creative coding"
          meta="Art that is also software"
          id="code-title"
          title={
            <>
              Drawn by <span className="font-serif font-normal italic text-acid">code</span>, not by hand.
            </>
          }
          intro="Some pictures are better as programs: seeded, repeatable, sharp at any size, and changeable in one line."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 lg:col-span-8">
            {codeWorks.map((w, i) => (
              <Reveal key={w.code} delay={i * 0.08}>
                <article className="group grid gap-6 border-2 border-paper/15 p-4 transition-colors hover:border-acid md:grid-cols-[1.3fr_1fr] md:p-5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={w.image} alt={w.title} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-acid">{w.code}</p>
                      <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight">{w.title}</h3>
                      <p className="mt-3 leading-relaxed text-paper/70">{w.desc}</p>
                    </div>
                    <a href={w.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.18em] text-acid underline-offset-4 hover:underline">
                      {w.linkLabel} ↗
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">C/03 · Live piece — try it</p>
            <GenerativePiece />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
