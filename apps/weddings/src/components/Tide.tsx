"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { gear } from "@/data/site";

function Wave({ fill, className }: { fill: string; className?: string }) {
  return (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        fill={fill}
        d="M0 96C120 128 240 160 360 154.7C480 149 600 107 720 96C840 85 960 107 1080 133.3C1200 160 1320 192 1380 208L1440 224V320H0Z"
      />
    </svg>
  );
}

/** "What you get": the tide rises behind the gear as you scroll through. */
export function Tide() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rise = useTransform(scrollYProgress, [0.1, 0.65], reduce ? ["60%", "60%"] : ["92%", "60%"]);
  const rise2 = useTransform(scrollYProgress, [0.1, 0.7], reduce ? ["48%", "48%"] : ["86%", "48%"]);

  return (
    <section ref={ref} id="gear" aria-labelledby="gear-title" className="relative isolate overflow-hidden bg-salt px-5 py-28 text-tide-950 md:px-10 md:py-40">
      <motion.div aria-hidden style={{ y: rise2 }} className="absolute inset-x-0 -bottom-1 top-0 -z-10">
        <Wave fill="#9bb7c6" className="block h-40 w-full md:h-64" />
        <div className="-mt-px h-full bg-[#9bb7c6]" />
      </motion.div>
      <motion.div aria-hidden style={{ y: rise }} className="absolute inset-x-0 -bottom-1 top-0 -z-10">
        <Wave fill="#143447" className="block h-32 w-full scale-x-[-1] md:h-56" />
        <div className="-mt-px h-full bg-[#143447]" />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sun-700">03 · What you get</p>
        <h2 id="gear-title" className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
          Small kit, <em className="text-sun-700">close</em> to the moments.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-tide-800">
          Reels are shot vertical from the start, on a camera and a phone, kept smooth on a gimbal, with clean sound from a shotgun mic. No drone, so no aerials: just the real moments, up close.
        </p>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {gear.map((g, i) => (
            <li key={g.name} className="rounded-[1.5rem] bg-salt/95 p-6 shadow-[0_20px_60px_-30px_rgba(8,26,38,0.5)] ring-1 ring-tide-950/10 backdrop-blur">
              <span className="font-mono text-xs text-sun-700">0{i + 1}</span>
              <h3 className="mt-6 font-display text-3xl">{g.name}</h3>
              <p className="mt-2 text-tide-800">{g.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
