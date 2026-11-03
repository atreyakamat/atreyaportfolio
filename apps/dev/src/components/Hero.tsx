"use client";

import { useRef, type PointerEvent } from "react";
import clsx from "clsx";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { DuotonePortrait } from "@/components/DuotonePortrait";
import { Magnetic } from "@atreya/ui/Magnetic";
import { LocalClock } from "@atreya/ui/LocalClock";
import { Tile, TileLabel } from "@atreya/ui/Tile";
import { nowFocus, personalInfo } from "@/data/portfolio";

export const briefMailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(
  "Hi Atreya,\n\nWhat is broken / slow right now:\n\nWho it is for:\n\nWhen I need it:\n",
)}`;

function Word({ word, accent, delay }: { word: string; accent?: boolean; delay: number }) {
  return (
    <span className="flex overflow-hidden pb-[0.06em]" aria-hidden>
      {word.split("").map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          style={{ ["--d" as string]: `${delay + i * 0.05}s` }}
          className={clsx(
            "letter-up cursor-default font-extrabold transition-colors duration-300",
            accent ? "text-lemon-400 hover:text-paper" : "text-paper hover:text-lemon-400",
          )}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/** Each bento tile rises in on load, staggered. Pure CSS so it paints before hydration. */
function Rise({ i, className, children }: { i: number; className?: string; children: React.ReactNode }) {
  return (
    <div className={clsx("rise-in", className)} style={{ ["--d" as string]: `${0.1 + i * 0.08}s`, ["--rise" as string]: "28px" }}>
      {children}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-6%"]);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-3 pb-6 pt-[5.25rem] md:px-6"
      style={{ ["--mx" as string]: "30%", ["--my" as string]: "30%" }}
    >
      {/* Cursor-following lemon spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(700px circle at var(--mx) var(--my), rgba(233,255,79,0.12), transparent 60%)" }}
      />

      <motion.div style={{ y: lift }} className="mx-auto grid max-w-[96rem] gap-3 lg:min-h-[calc(100svh-6.5rem)] lg:grid-cols-12 lg:grid-rows-[1fr_auto]">
        {/* A — identity */}
        <Rise i={0} className="order-1 lg:order-none lg:col-span-8">
          <Tile ticks className="flex h-full flex-col justify-between gap-10 p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TileLabel className="text-navy-300">{personalInfo.kicker}</TileLabel>
              <TileLabel className="text-navy-300">Portfolio OS · v3.0</TileLabel>
            </div>

            <h1
              id="hero-title"
              className="font-display text-[clamp(3.6rem,10.6vw,10.5rem)] leading-[0.82] tracking-[-0.05em]"
            >
              <span className="sr-only">Atreya Kamat, freelance product engineer</span>
              <Word word="ATREYA" delay={0.3} />
              <Word word="KAMAT" accent delay={0.6} />
            </h1>

            <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
              <p style={{ ["--d" as string]: "0.55s" }} className="rise-in font-serif text-[2.1rem] leading-[1.02] text-paper md:text-5xl">
                Your messy workflow, <em className="text-lemon-400">shipped as a system</em>.
              </p>
              <p style={{ ["--d" as string]: "0.65s" }} className="rise-in max-w-sm text-[15px] leading-relaxed text-navy-300">
                {personalInfo.bio}
              </p>
            </div>
          </Tile>
        </Rise>

        {/* B — portrait */}
        <Rise i={1} className="order-3 lg:order-none lg:col-span-4 lg:row-span-2">
          <Tile className="h-full p-3">
            <DuotonePortrait fill name={personalInfo.name} location={personalInfo.location} />
          </Tile>
        </Rise>

        {/* C/D/E — status strip */}
        <div className="order-2 grid gap-3 sm:grid-cols-3 lg:order-none lg:col-span-8">
          <Rise i={2}>
            <Tile className="flex h-full flex-col justify-between gap-6 p-5">
              <TileLabel className="text-navy-300">Local time · Goa</TileLabel>
              <div>
                <LocalClock className="block font-mono text-3xl tabular-nums tracking-tight text-paper" />
                <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-navy-300">IST · UTC+05:30</p>
              </div>
            </Tile>
          </Rise>
          <Rise i={3}>
            <Tile className="flex h-full flex-col justify-between gap-6 p-5">
              <TileLabel dot className="text-lemon-400">
                Now
              </TileLabel>
              <p className="text-[15px] leading-snug text-paper">{nowFocus}</p>
            </Tile>
          </Rise>
          <Rise i={4}>
            <Magnetic strength={0.08} className="block h-full">
              <a
                href={briefMailto}
                className="group relative flex h-full min-h-36 flex-col justify-between gap-6 overflow-hidden rounded-[1.5rem] bg-lemon-400 p-5 text-navy-950 transition-colors hover:bg-lemon-300"
              >
                <TileLabel dot>Taking on projects</TileLabel>
                <span className="flex items-end justify-between font-display text-2xl font-extrabold leading-none tracking-tight">
                  Start a project
                  <span aria-hidden className="text-4xl transition-transform duration-500 group-hover:-rotate-45">
                    →
                  </span>
                </span>
              </a>
            </Magnetic>
          </Rise>
        </div>
      </motion.div>
    </section>
  );
}
