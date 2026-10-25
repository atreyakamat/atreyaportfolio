"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useInView, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks } from "@atreya/ui/Tile";
import { Marker } from "@/components/Marker";

/** A tiny real lesson: each line is typed, then explained. Output is correct: 312 / 4 = 78.0 */
const LINES = [
  { code: "marks = [72, 85, 64, 91]", note: "A list holds several values under one name. Here: four test marks." },
  { code: "total = 0", note: "We start a running total at zero before adding anything." },
  { code: "for m in marks:", note: "A loop visits each mark in the list, one at a time, calling it m." },
  { code: "    total += m", note: "Indented, so it runs inside the loop: add the current mark to the total." },
  { code: "average = total / len(marks)", note: "len(marks) counts the items (4). Total divided by count is the average." },
  { code: 'print(f"Average: {average}")', note: "An f-string drops the value into the text, then print shows it." },
];
const OUTPUT = "Average: 78.0";
const CHAR_MS = 32;
const PAUSE_MS = 1100;

function Token({ text }: { text: string }) {
  // Minimal syntax colouring: keywords, strings, numbers.
  const parts = text.split(/(\bfor\b|\bin\b|\bprint\b|\blen\b|"[^"]*"?|\b\d+\b)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^(for|in)$/.test(p) ? (
          <span key={i} className="text-[#ff9fd6]">{p}</span>
        ) : /^(print|len)$/.test(p) ? (
          <span key={i} className="text-[#8fd8ff]">{p}</span>
        ) : /^"/.test(p) ? (
          <span key={i} className="text-marker">{p}</span>
        ) : /^\d+$/.test(p) ? (
          <span key={i} className="text-[#ffb86b]">{p}</span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function LiveLesson() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-25% 0px" });
  const reduce = useReducedMotion();
  // Progress: line index and characters typed on that line. done = all typed + output shown.
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const [run, setRun] = useState(0);

  const finished = reduce || line >= LINES.length;

  useEffect(() => {
    if (!inView || reduce || line >= LINES.length) return;
    const full = LINES[line].code.length;
    const id = setTimeout(
      () => {
        if (chars < full) setChars((c) => c + 1);
        else {
          setLine((l) => l + 1);
          setChars(0);
        }
      },
      chars < full ? CHAR_MS : PAUSE_MS,
    );
    return () => clearTimeout(id);
  }, [inView, reduce, line, chars, run]);

  const replay = () => {
    setLine(0);
    setChars(0);
    setRun((r) => r + 1);
  };

  const activeNote = finished ? LINES.length - 1 : line;

  return (
    <section id="lesson" aria-labelledby="lesson-title" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="light"
          index="03"
          label="A lesson, live"
          meta="Python · 6 lines"
          id="lesson-title"
          title={
            <>
              This is what a session <Marker><span className="font-serif font-normal italic">feels like</span></Marker>.
            </>
          }
          intro="One small, real problem, built a line at a time, with the reason for every line. Watch it run."
        />

        <div ref={ref} className="relative mt-14 grid gap-3 overflow-hidden rounded-[1.75rem] bg-ink-navy p-3 lg:grid-cols-12">
          <CornerTicks className="text-marker/40" />
          {/* editor */}
          <div className="rounded-[1.25rem] bg-navy-950 p-5 font-mono text-[13px] leading-7 text-paper md:p-7 md:text-[15px] lg:col-span-7">
            <div className="mb-4 flex items-center gap-2 text-[11px] text-navy-300">
              <span className="h-2.5 w-2.5 rounded-full bg-navy-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy-700" />
              <span className="ml-3">average.py</span>
            </div>
            <ol aria-label="Python program, average of four marks">
              {LINES.map((l, i) => {
                const shown = finished || i < line ? l.code : i === line ? l.code.slice(0, chars) : "";
                const active = i === activeNote;
                return (
                  <li
                    key={i}
                    className={clsx(
                      "-mx-3 flex rounded-md px-3 transition-colors duration-300",
                      active && "bg-white/[0.06]",
                    )}
                  >
                    <span aria-hidden className="mr-5 w-4 select-none text-right text-navy-500">
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">
                      <span className="sr-only">{l.code}</span>
                      <span aria-hidden>
                        <Token text={shown} />
                        {!finished && i === line && <span className="caret text-marker">▍</span>}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-navy-300">Output</p>
              <p className={clsx("mt-2 transition-opacity duration-500", finished ? "text-marker opacity-100" : "opacity-0")}>{OUTPUT}</p>
            </div>
          </div>

          {/* explanation */}
          <div className="flex flex-col justify-between gap-6 rounded-[1.25rem] bg-sunlit p-6 text-ink-navy md:p-8 lg:col-span-5">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-navy/60">
                Line {activeNote + 1} of {LINES.length}
              </p>
              <p aria-live="polite" className="mt-4 font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                {LINES[activeNote].note}
              </p>
            </div>
            <ul className="flex gap-1.5" aria-hidden>
              {LINES.map((l, i) => (
                <li
                  key={i}
                  className={clsx(
                    "h-1.5 flex-1 rounded-full transition-colors duration-500",
                    i <= activeNote || finished ? "bg-ink-navy" : "bg-ink-navy/15",
                  )}
                />
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-ink-navy/70">In a real session, you type it. I just ask the right questions.</p>
              {!reduce && (
                <button
                  type="button"
                  onClick={replay}
                  className="rounded-full border border-ink-navy/25 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-ink-navy"
                >
                  Replay ↺
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
