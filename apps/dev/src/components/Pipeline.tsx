"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { approachSteps } from "@/data/portfolio";

/**
 * Scroll-drawn pipeline: PROBLEM → Understand → Design → Build → Improve → OUTCOME.
 * The lemon line fills as you scroll and each step lights up when reached.
 */
export function Pipeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.35 });
  const [active, setActive] = useState(-1);

  const n = approachSteps.length;
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const reached = approachSteps.filter((_, i) => v >= (i + 1) / (n + 1) - 0.03).length;
    setActive(reached - 1);
  });

  return (
    <section id="approach" aria-labelledby="approach-title" className="border-t border-white/10 bg-navy-900 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">02 / Approach</p>
              <h2 id="approach-title" className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-paper md:text-7xl">
                From messy workflow to{" "}
                <span className="font-serif font-normal italic text-lemon-400">working product</span>.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-300">
                I work across frontend, backend, data, automation and AI to turn messy workflows into useful products.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-6 pl-14 font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">Problem</p>
          <ol ref={ref} className="relative">
            <span aria-hidden className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-navy-700" />
            <motion.span
              aria-hidden
              className="absolute bottom-0 left-[1.15rem] top-0 w-px origin-top bg-lemon-400"
              style={{ scaleY }}
            />
            {approachSteps.map((step, i) => {
              const on = i <= active;
              return (
                <li key={step.num} className="relative min-h-[34vh] pl-14">
                  <span
                    aria-hidden
                    className={clsx(
                      "absolute left-0 top-1 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border font-mono text-[11px] transition-colors duration-500",
                      on ? "border-lemon-400 bg-lemon-400 text-navy-950" : "border-navy-700 bg-navy-900 text-navy-300",
                    )}
                  >
                    {step.num}
                  </span>
                  <h3
                    className={clsx(
                      "font-display text-4xl font-extrabold tracking-tight transition-colors duration-500 md:text-6xl",
                      on ? "text-paper" : "text-navy-700",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className={clsx("mt-3 max-w-md text-lg transition-colors duration-500", on ? "text-navy-300" : "text-navy-700")}>
                    {step.desc}
                  </p>
                </li>
              );
            })}
          </ol>
          <p className="mt-2 pl-14 font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">Outcome</p>
        </div>
      </div>
    </section>
  );
}
