"use client";

import { useRef, type PointerEvent } from "react";
import clsx from "clsx";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";
import { DuotonePortrait } from "@/components/DuotonePortrait";
import { Magnetic } from "@/components/Magnetic";
import { personalInfo } from "@/data/portfolio";

function Word({ word, accent, delay }: { word: string; accent?: boolean; delay: number }) {
  return (
    <span className="flex overflow-hidden pb-[0.06em]" aria-hidden>
      {word.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={{ y: "112%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: delay + i * 0.055 }}
          className={clsx(
            "inline-block cursor-default font-extrabold transition-colors duration-300",
            accent ? "text-lemon-400 hover:text-paper" : "text-paper hover:text-lemon-400",
          )}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0]);

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
      className="relative isolate overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pt-32"
      style={{ ["--mx" as string]: "72%", ["--my" as string]: "28%" }}
    >
      {/* Grid texture, faded toward the edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(154,164,208,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(154,164,208,0.08)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
      />
      {/* Cursor-following lemon spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(640px circle at var(--mx) var(--my), rgba(244,255,92,0.16), transparent 62%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300 md:mb-12"
        >
          <span>{personalInfo.kicker}</span>
          <span className="text-lemon-400">{personalInfo.statusBanner}</span>
        </motion.div>

        <div className="relative flex flex-col">
          <motion.h1
            id="hero-title"
            style={{ y: nameY }}
            className="font-display text-[clamp(4.25rem,13.5vw,12rem)] leading-[0.82] tracking-[-0.045em]"
          >
            <span className="sr-only">Atreya Kamat, software engineer</span>
            <Word word="ATREYA" delay={0.25} />
            <Word word="KAMAT" accent delay={0.6} />
          </motion.h1>

          <div className="mt-8 md:mt-10">
          <motion.div style={{ y: copyY, opacity: fade }}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.0 }}
              className="max-w-2xl font-serif text-4xl leading-[1.08] text-paper md:text-6xl"
            >
              Your messy workflow,{" "}
              <em className="text-lemon-400">shipped as software</em>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-300"
            >
              {personalInfo.bio}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent("Hi Atreya,\n\nHere is what I need built:\n\nWho it is for:\nWhen I need it:\n")}`}
                  className="inline-flex items-center gap-3 rounded-full bg-lemon-400 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition-colors hover:bg-lemon-300"
                >
                  Start a project <span aria-hidden>→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-lemon-400 hover:text-lemon-400"
                >
                  See the work <span aria-hidden>↓</span>
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
          </div>

          {/* Beside the name on large screens, after the copy on small ones */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.9 }}
            className="mt-14 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[21vw] lg:max-w-[20rem]"
          >
            <DuotonePortrait name={personalInfo.name} location={personalInfo.location} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
