"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { heroBits } from "@/data/create";
import { WebBit } from "@/components/WebBits";

const WORD = "atreya.mp4";

/**
 * Hero: giant type plus a field of little "bits of the internet" (terminal, file,
 * keys, cursor…) that can be grabbed, dragged and thrown. The grabbed one rises to the top.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [order, setOrder] = useState<number[]>(() => heroBits.map((_, i) => i));
  const [touched, setTouched] = useState(false);

  const raise = (i: number) => {
    setTouched(true);
    setOrder((o) => [...o.filter((x) => x !== i), i]);
  };

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink px-5 pb-10 pt-28 md:px-10"
    >
      {/* grid + corner marks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,107,26,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,107,26,0.07)_1px,transparent_1px)] bg-[size:80px_80px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[96rem]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="bg-acid px-2 py-1 text-ink">@atreya.mp4 · creator · open to brand collabs</span>
          <span className="text-paper/60">Tech · tools · Linux · AI — Goa, IN</span>
        </div>

        <h1 id="hero-title" className="pointer-events-none select-none font-display font-extrabold leading-[0.78] tracking-[-0.06em] text-acid">
          <span className="sr-only">atreya.mp4 — creative work by Atreya Kamat</span>
          <span aria-hidden className="flex overflow-hidden text-[clamp(3.6rem,15.5vw,15rem)] tracking-[-0.07em]">
            {WORD.split("").map((ch, i) => (
              <span key={i} className="letter-up" style={{ ["--d" as string]: `${0.08 + i * 0.05}s` }}>
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p style={{ ["--d" as string]: "0.7s", ["--rise" as string]: "20px" }} className="rise-in max-w-2xl font-serif text-4xl leading-[1.02] text-paper md:text-6xl">
            Tech, made simple, <em className="text-acid">in under a minute.</em>
          </p>
          <div style={{ ["--d" as string]: "1.2s", ["--rise" as string]: "0px" }} className="rise-in flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60 md:justify-end">
            <span aria-hidden className="inline-block h-2 w-2 animate-pulse bg-acid motion-reduce:animate-none" />
            {touched ? "Nice throw. Keep going." : "Grab anything. Throw it."}
          </div>
        </div>
      </div>

      {/* Draggable web-object field (decorative; the content above stays readable) */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-20 h-[56%] md:h-full">
        {heroBits.map((s, i) => (
          <motion.div
            key={s.kind}
            drag
            dragConstraints={ref}
            dragElastic={0.18}
            dragTransition={{ power: 0.35, timeConstant: 260 }}
            onPointerDown={() => raise(i)}
            whileDrag={{ scale: 1.12, rotate: s.r * -0.6, cursor: "grabbing" }}
            whileHover={{ scale: 1.05 }}
            initial={reduce ? false : { opacity: 0, scale: 0.4, rotate: s.r * 3 }}
            animate={{ opacity: 1, scale: 1, rotate: s.r }}
            transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.5 + i * 0.07 }}
            className={clsx(
              "absolute left-[var(--bmx)] top-[var(--bmy)] cursor-grab touch-none md:left-[var(--bx)] md:top-[var(--by)]",
              !s.mobile && "hidden md:block",
            )}
            style={{
              ["--bx" as string]: `${s.x}%`,
              ["--by" as string]: `${s.y}%`,
              ["--bmx" as string]: `${s.mobile?.x ?? s.x}%`,
              ["--bmy" as string]: `${s.mobile?.y ?? s.y}%`,
              zIndex: 20 + order.indexOf(i),
            }}
          >
            <div className="pointer-events-none select-none">
              <WebBit kind={s.kind} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
