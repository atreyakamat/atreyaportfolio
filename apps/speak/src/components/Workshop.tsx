"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks, TileLabel } from "@atreya/ui/Tile";
import { workshop } from "@/data/speak";

const CYCLE_MS = 4600;

/**
 * Featured workshop: an agenda rail on the left drives a "projector" frame
 * that shows each segment like a slide. Auto-advances while in view, pauses
 * on hover/focus, and every segment is clickable.
 */
export function Workshop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const agenda = workshop.agenda;
  const seg = agenda[active];

  useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % agenda.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [inView, paused, reduce, active, agenda.length]);

  return (
    <section id="workshop" aria-labelledby="workshop-title" className="bg-cobalt-950 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="01"
          label="Featured workshop"
          meta={`${workshop.slides} slides · ${workshop.tools} AI tools`}
          id="workshop-title"
          title={
            <>
              SOLO × AITD <span className="font-serif font-normal italic text-lemonade">AI Build Workshop</span>
            </>
          }
          intro={workshop.summary}
        />

        <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-white">{workshop.venue}</span>
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-white">{workshop.format}</span>
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-white">For students</span>
        </div>

        <div
          ref={ref}
          className="mt-14 grid gap-3 lg:grid-cols-12"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Agenda rail */}
          <ol role="tablist" aria-label="Workshop agenda" className="grid gap-1.5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {agenda.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.code}>
                  <button
                    role="tab"
                    aria-selected={on}
                    aria-controls="workshop-slide"
                    onClick={() => setActive(i)}
                    className={clsx(
                      "group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-4 py-3 text-left transition-colors duration-300",
                      on ? "border-lemonade bg-lemonade text-cobalt-950" : "border-white/10 bg-cobalt-900/60 text-white hover:border-lemonade/60",
                    )}
                  >
                    <span className={clsx("font-mono text-xs", on ? "text-cobalt-700" : "text-lemonade")}>{s.code}</span>
                    <span className="flex-1 font-display text-lg font-bold tracking-tight">{s.title}</span>
                    <span className={clsx("font-mono text-[10px] uppercase tracking-[0.14em]", on ? "text-cobalt-700" : "text-cobalt-300")}>
                      sl. {s.slides}
                    </span>
                    {on && !reduce && (
                      <motion.span
                        key={`${s.code}-${paused}`}
                        aria-hidden
                        className="absolute bottom-0 left-0 h-[3px] bg-cobalt-500"
                        initial={{ width: "0%" }}
                        animate={{ width: paused ? "0%" : "100%" }}
                        transition={{ duration: paused ? 0 : CYCLE_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Projector */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-cobalt-900 p-3 md:p-4">
              <CornerTicks className="text-lemonade/60" />
              <div className="flex items-center justify-between px-2 pb-3">
                <TileLabel dot className="text-lemonade">
                  Now presenting
                </TileLabel>
                <TileLabel className="text-cobalt-300">
                  Segment {seg.code} / {String(agenda.length).padStart(2, "0")}
                </TileLabel>
              </div>
              <div
                id="workshop-slide"
                role="tabpanel"
                aria-live="polite"
                className="relative min-h-[30rem] overflow-hidden rounded-2xl bg-cobalt-500 sm:aspect-[16/9] sm:min-h-0"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={seg.code}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                    className="relative flex h-full flex-col justify-between p-6 md:p-10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">Slides {seg.slides}</p>
                      <p aria-hidden className="font-display text-6xl font-extrabold leading-none text-cobalt-700 md:text-8xl">
                        {seg.code}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-extrabold leading-[0.95] tracking-tight text-white md:text-6xl">{seg.title}</h3>
                      <p className="mt-2 font-serif text-2xl italic text-lemonade md:text-4xl">{seg.line}</p>
                      <ul className="mt-6 grid gap-2 md:grid-cols-3 md:gap-3">
                        {seg.learn.map((l, i) => (
                          <motion.li
                            key={l}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                            className="rounded-xl bg-cobalt-950/45 px-3 py-2.5 text-sm leading-snug text-white"
                          >
                            {l}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt-300">The original deck, built with React · arrow keys to navigate</p>
              <a
                href={workshop.deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-lemonade px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-950 transition-colors hover:bg-white"
              >
                Open the slides <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
