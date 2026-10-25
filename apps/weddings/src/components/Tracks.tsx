"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { tracks, type Track, type TrackId } from "@/data/site";
import { TRACK_EVENT } from "@/lib/contact";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Chooser card: picking one switches the packages and the process below. */
function ChooserCard({ t, on, onPick }: { t: Track; on: boolean; onPick: () => void }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={on}
      aria-controls="package-panel"
      onClick={onPick}
      className={clsx(
        "group relative flex flex-col items-start gap-4 overflow-hidden rounded-[1.75rem] border p-6 text-left transition-colors duration-500 md:p-8",
        on ? "border-sun-400 bg-salt text-tide-950" : "border-salt/15 bg-tide-900/70 text-salt hover:border-salt/40",
      )}
    >
      <span className={clsx("font-mono text-[11px] uppercase tracking-[0.22em]", on ? "text-sun-700" : "text-sand")}>{t.label}</span>
      <span className="font-display text-3xl leading-[1.05] md:text-4xl">{t.who}</span>
      <span className={clsx("text-sm", on ? "text-tide-800" : "text-tide-300")}>
        {t.price.prefix ? `${t.price.prefix} ` : ""}
        {t.price.amount} {t.price.unit}
      </span>
      <span
        aria-hidden
        className={clsx(
          "absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border text-lg transition-all duration-500",
          on ? "rotate-0 border-tide-950 bg-tide-950 text-salt" : "-rotate-45 border-salt/30",
        )}
      >
        →
      </span>
    </button>
  );
}

/** Scroll-scrubbed "edit timeline": the playhead moves with scroll and lights each step. */
function ProcessTimeline({ track }: { track: Track }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const playhead = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const [step, setStep] = useState(0);
  const n = track.process.length;
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(Math.min(n - 1, Math.floor(v * n * 0.999))));

  if (reduce) {
    return (
      <ol className="mx-auto mt-14 grid max-w-7xl gap-3 px-5 md:grid-cols-4 md:px-10">
        {track.process.map((p, i) => (
          <li key={p.title} className="rounded-2xl border border-salt/15 p-6">
            <span className="font-mono text-xs text-sun-400">0{i + 1}</span>
            <h3 className="mt-3 font-display text-3xl text-salt">{p.title}</h3>
            <p className="mt-2 text-tide-300">{p.body}</p>
          </li>
        ))}
      </ol>
    );
  }

  const active = track.process[step];
  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* monitor */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-salt/15 bg-tide-900/80 p-7 md:p-12">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-tide-300">
              <span>
                Step 0{step + 1} / 0{n}
              </span>
              <span className="flex items-center gap-2">
                <span className="rec h-2 w-2 rounded-full bg-sun-400" /> {track.label}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${track.id}-${step}`}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: EASE }}
                className="mt-8 min-h-[10rem] md:min-h-[12rem]"
              >
                <h3 className="font-display text-5xl leading-none text-salt md:text-8xl">{active.title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-salt/80 md:text-xl">{active.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* timeline */}
          <div className="mt-8">
            <div className="flex justify-between font-mono text-[10px] tabular-nums text-tide-300">
              {Array.from({ length: n + 1 }).map((_, i) => (
                <span key={i}>00:{String(i * 15).padStart(2, "0")}</span>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
                {track.process.map((p, i) => (
                  <div
                    key={p.title}
                    className={clsx(
                      "flex h-14 items-center overflow-hidden rounded-lg px-3 transition-colors duration-500 md:h-16",
                      i < step && "bg-tide-600 text-salt",
                      i === step && "bg-sun-400 text-tide-950",
                      i > step && "bg-tide-800 text-tide-300",
                    )}
                  >
                    <span className="truncate font-mono text-[11px] uppercase tracking-[0.14em]">{p.title}</span>
                  </div>
                ))}
              </div>
              {/* audio waveform track */}
              <div aria-hidden className="mt-1.5 flex h-6 items-center gap-[3px] overflow-hidden rounded-lg bg-tide-900 px-2">
                {Array.from({ length: 120 }).map((_, i) => (
                  <span key={i} className="min-w-px flex-1 rounded-full bg-tide-600" style={{ height: `${20 + ((i * 37) % 70)}%` }} />
                ))}
              </div>
              <motion.span aria-hidden className="absolute -bottom-2 -top-2 w-0.5 bg-salt shadow-[0_0_12px_rgba(244,241,234,0.8)]" style={{ left: playhead }}>
                <span className="absolute -left-[5px] -top-1 h-3 w-3 rotate-45 bg-salt" />
              </motion.span>
            </div>
            <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-tide-300">Scroll to scrub the timeline</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Who it's for" chooser + packages + process, all driven by one track choice. */
export function Tracks() {
  const [id, setId] = useState<TrackId>("editors");
  const track = tracks.find((t) => t.id === id) ?? tracks[0];

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<TrackId>).detail;
      if (d === "couples" || d === "editors") setId(d);
    };
    window.addEventListener(TRACK_EVENT, on);
    return () => window.removeEventListener(TRACK_EVENT, on);
  }, []);

  return (
    <>
      <section id="packages" aria-labelledby="packages-title" className="scroll-mt-20 px-5 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sand">01 · Who it&rsquo;s for</p>
          <h2 id="packages-title" className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-salt md:text-7xl">
            Two ways to work with the <em className="text-sun-400">studio.</em>
          </h2>

          <div role="tablist" aria-label="Choose who you are" className="mt-14 grid gap-3 md:grid-cols-2">
            {tracks.map((t) => (
              <ChooserCard key={t.id} t={t} on={t.id === id} onPick={() => setId(t.id)} />
            ))}
          </div>

          <div id="package-panel" role="tabpanel" aria-live="polite" className="mt-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid gap-3 lg:grid-cols-12"
              >
                <div className="rounded-[1.75rem] border border-salt/15 bg-tide-900/70 p-7 md:p-10 lg:col-span-7">
                  <h3 className="font-display text-4xl leading-[1.02] text-salt md:text-5xl">{track.headline}</h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-salt/80">{track.pitch}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {track.includes.map((x) => (
                      <li key={x} className="flex gap-3 text-salt/90">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-400" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-salt p-7 text-tide-950 md:p-10 lg:col-span-5">
                  <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun-400/50 blur-2xl" />
                  <div className="relative">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sun-700">{track.price.prefix ?? "Package"}</p>
                    <p className="mt-3 font-display text-6xl leading-none md:text-7xl">{track.price.amount}</p>
                    <p className="mt-2 text-tide-800">{track.price.unit}</p>
                    {track.priceNote && <p className="mt-6 max-w-sm leading-relaxed text-tide-800">{track.priceNote}</p>}
                  </div>
                  <a
                    href="#enquire"
                    onClick={() => window.dispatchEvent(new CustomEvent("saltwater:package", { detail: track.id }))}
                    className="relative mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-tide-950 px-7 py-4 text-sm font-semibold text-salt transition-colors hover:bg-tide-800"
                  >
                    {track.id === "couples" ? "Check your date" : "Send your first reel"} <span aria-hidden>→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className="bg-tide-950">
        <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sand">02 · How it works</p>
          <h2 id="process-title" className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-salt md:text-7xl">
            From first message to <em className="text-sun-400">final cut.</em>
          </h2>
        </div>
        <ProcessTimeline key={track.id} track={track} />
      </section>
    </>
  );
}
