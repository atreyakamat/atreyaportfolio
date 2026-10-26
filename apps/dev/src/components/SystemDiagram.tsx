"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks } from "@atreya/ui/Tile";
import { systemStages } from "@/data/portfolio";

const CYCLE_MS = 4200;

/**
 * "The System": five stages on a schematic bus. Data packets travel the line,
 * the active stage auto-advances while in view (pauses on hover/focus), and the
 * panel lists what the client actually receives at that stage.
 */
export function SystemDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % systemStages.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [inView, paused, reduce, active]);

  const stage = systemStages[active];
  const n = systemStages.length;

  return (
    <section id="system" aria-labelledby="system-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="02"
          label="The system"
          meta="5 stages · 0 surprises"
          id="system-title"
          title={
            <>
              Not a website. <span className="font-serif font-normal italic text-lemon-400">A system.</span>
            </>
          }
          intro="Most projects fail in the gaps between people. Mine run on one repeatable process, and you always know what stage we are in and what you get next."
        />

        <div
          ref={ref}
          className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-900/70 p-5 md:p-10"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <CornerTicks />
          {/* blueprint grid inside the panel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(154,164,208,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(154,164,208,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"
          />

          {/* The bus: stages as nodes on a line */}
          <div className="relative">
            <div aria-hidden className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-navy-700 md:block" />
            <motion.div
              aria-hidden
              className="absolute left-[10%] top-6 hidden h-px origin-left bg-lemon-400 md:block"
              animate={{ width: `${(active / (n - 1)) * 80}%` }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            />
            {/* travelling packets */}
            {!reduce && (
              <div aria-hidden className="absolute left-[10%] right-[10%] top-6 hidden md:block">
                {[0, 1, 2].map((k) => (
                  <span key={k} className="packet absolute inset-x-0 -top-[3px] h-[7px]" style={{ animationDelay: `${k * 1.6}s` }}>
                    <span className="block h-[7px] w-[7px] rounded-full bg-lemon-400 shadow-[0_0_14px_rgba(233,255,79,0.9)]" />
                  </span>
                ))}
              </div>
            )}

            <div role="tablist" aria-label="Project stages" className="relative grid grid-cols-5 gap-2">
              {systemStages.map((s, i) => {
                const on = i === active;
                const done = i < active;
                return (
                  <div key={s.code} className="flex justify-center">
                    <button
                      role="tab"
                      aria-selected={on}
                      aria-controls="system-panel"
                      onClick={() => setActive(i)}
                      className="group flex flex-col items-center gap-3 text-center"
                    >
                      <span
                        className={clsx(
                          "relative flex h-12 w-12 items-center justify-center rounded-full border font-mono text-xs transition-all duration-500",
                          on && "scale-110 border-lemon-400 bg-lemon-400 text-navy-950 shadow-[0_0_0_8px_rgba(233,255,79,0.12)]",
                          done && "border-lemon-400/70 bg-navy-900 text-lemon-400",
                          !on && !done && "border-navy-700 bg-navy-950 text-navy-300 group-hover:border-lemon-400/60",
                        )}
                      >
                        {s.code}
                      </span>
                      <span
                        className={clsx(
                          "font-mono text-[10px] uppercase tracking-[0.18em] transition-colors md:text-[11px]",
                          on ? "text-lemon-400" : "text-navy-300",
                        )}
                      >
                        {s.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stage panel */}
          <div id="system-panel" role="tabpanel" aria-live="polite" className="relative mt-12 min-h-[19rem] md:mt-16 md:min-h-[15rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.code}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="grid gap-8 md:grid-cols-12"
              >
                <div className="md:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">
                    Stage {stage.code} / {String(n).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-paper md:text-6xl">
                    {stage.name}. <span className="font-serif font-normal italic text-lemon-400">{stage.line}</span>
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-300">{stage.detail}</p>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-2xl border border-white/10 bg-navy-950/80 p-5 font-mono text-sm">
                    <p className="text-[10.5px] uppercase tracking-[0.2em] text-lemon-400">You receive</p>
                    <ul className="mt-4 space-y-3">
                      {stage.deliverables.map((d, i) => (
                        <motion.li
                          key={d}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 text-paper"
                        >
                          <span aria-hidden className="mt-0.5 text-lemon-400">
                            ✓
                          </span>
                          {d}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {/* cycle progress */}
                  {!reduce && (
                    <div aria-hidden className="mt-4 h-px overflow-hidden bg-navy-700">
                      <motion.div
                        key={`${stage.code}-${paused}`}
                        className="h-full bg-lemon-400"
                        initial={{ width: "0%" }}
                        animate={{ width: paused ? "0%" : "100%" }}
                        transition={{ duration: paused ? 0 : CYCLE_MS / 1000, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
