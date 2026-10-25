"use client";

import Link from "next/link";
import clsx from "clsx";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";
import { Magnetic } from "@atreya/ui/Magnetic";
import { NumberTicker } from "@atreya/ui/NumberTicker";
import { TiltCard } from "@atreya/ui/TiltCard";
import { CornerTicks, TileLabel } from "@atreya/ui/Tile";
import { CobaltPortrait } from "@/components/CobaltPortrait";
import { bookingMailto, workshop } from "@/data/speak";

const LINES: { words: string[]; accent?: boolean }[] = [
  { words: ["Talks", "that", "get"] },
  { words: ["people"] },
  { words: ["building."], accent: true },
];

const stats = [
  { value: workshop.slides, label: "Slides in the AITD workshop" },
  { value: workshop.tools, label: "AI tools toured hands-on" },
  { value: 4, label: "Parts to a good prompt" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  let w = 0;

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-cobalt-500 px-5 pb-16 pt-28 md:px-10 md:pt-32">
      {/* stage grid + sweeping spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />
      <div aria-hidden className="pointer-events-none absolute -top-10 left-[58%] -z-10 h-[140%] w-[46rem] -translate-x-1/2">
        <div
          className="sweep h-full w-full"
          style={{
            background: "conic-gradient(from 168deg at 50% 0%, transparent 0deg, rgba(255,245,154,0.28) 12deg, transparent 24deg)",
          }}
        />
      </div>

      <motion.div style={{ y: lift }} className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cobalt-950 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-lemonade">
              <span className="onair h-2 w-2 rounded-full bg-[#ff5a5a]" />
              On air · Talks &amp; workshops
            </span>
            <span aria-hidden className="flex h-4 items-end gap-[3px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="eq-bar block w-[3px] rounded-full bg-lemonade" style={{ height: "100%", animationDelay: `${i * 0.13}s` }} />
              ))}
            </span>
          </motion.div>

          <h1 id="hero-title" className="mt-8 font-display text-[clamp(3.2rem,7.4vw,7.6rem)] font-extrabold leading-[0.86] tracking-[-0.045em] text-white">
            <span className="sr-only">Atreya Kamat — talks that get people building</span>
            {LINES.map((line, li) => (
              <span key={li} aria-hidden className="flex flex-wrap gap-x-[0.22em] overflow-hidden pb-[0.08em]">
                {line.words.map((word) => {
                  const i = w++;
                  return (
                    <span
                      key={`${li}-${word}`}
                      style={{ ["--d" as string]: `${0.12 + i * 0.07}s` }}
                      className={clsx("letter-up", line.accent && "font-serif font-normal italic tracking-[-0.02em] text-lemonade")}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p style={{ ["--d" as string]: "0.8s", ["--rise" as string]: "18px" }} className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            I&rsquo;m Atreya, a software engineer in Goa. I give hands-on talks and workshops on AI tools, prompting and shipping real
            software, for students, developers and business owners.
          </p>

          <div style={{ ["--d" as string]: "0.95s", ["--rise" as string]: "18px" }} className="rise-in mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={bookingMailto(
                  "Talk / workshop enquiry",
                  "Hi Atreya,\n\nEvent:\nDate:\nAudience:\nTopic:\n",
                )}
                className="inline-flex items-center gap-3 rounded-full bg-lemonade px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-950 transition-colors hover:bg-white"
              >
                Book a talk <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <Link
                href="/#workshop"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:border-lemonade hover:text-lemonade"
              >
                See the workshop <span aria-hidden>↓</span>
              </Link>
            </Magnetic>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20">
            {stats.map((s) => (
              <div key={s.label} className="bg-cobalt-700/80 p-4 md:p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <NumberTicker value={s.value} className="block font-display text-4xl font-extrabold tracking-tight text-lemonade md:text-5xl" />
                  <span className="mt-1 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/85">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.4 }}
          className="lg:col-span-5"
        >
          <TiltCard className="mx-auto max-w-md rounded-[1.75rem]">
            <div className="relative rounded-[1.75rem] border border-white/25 bg-cobalt-950 p-3 shadow-[0_50px_120px_-40px_rgba(6,17,74,0.9)]">
              <CornerTicks className="text-lemonade/70" />
              <div className="flex items-center justify-between px-2 pb-3 pt-1">
                <TileLabel dot className="text-lemonade">
                  Speaker · AK-01
                </TileLabel>
                <TileLabel className="text-cobalt-300">Goa, IN</TileLabel>
              </div>
              <CobaltPortrait priority className="aspect-[4/5]" />
              <div className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[10.5px] uppercase tracking-[0.16em]">
                <span className="text-white">Atreya Kamat</span>
                <span className="text-cobalt-300">AI · Product · Systems</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
