"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";
import { Magnetic } from "@atreya/ui/Magnetic";
import { TiltCard } from "@atreya/ui/TiltCard";
import { Marker } from "@/components/Marker";
import { defaultEnquiry, enquiryHref } from "@/lib/enquiry";

const rise = (i: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: EASE_OUT_EXPO, delay: 0.15 + i * 0.1 },
});

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="ruled relative overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-[96rem] items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p {...rise(0)} className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-navy/70">
            <span className="rounded-full bg-ink-navy px-2.5 py-1 text-marker">§ teach</span>
            Tuition & workshops · Goa
          </motion.p>

          <motion.h1
            {...rise(1)}
            id="hero-title"
            className="mt-8 font-display text-[clamp(3rem,7.4vw,7.4rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink-navy"
          >
            Learn to code from someone who{" "}
            <Marker delay={0.9} height="58%">
              <span className="font-serif font-normal italic tracking-[-0.01em]">ships code.</span>
            </Marker>
          </motion.h1>

          <motion.p {...rise(2)} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-navy/75 md:text-xl">
            Computer science and coding tuition from a working software engineer. 1:1 in person across Goa, or in small batches. From Class 8 to college, or from absolute zero.
          </motion.p>

          <motion.div {...rise(3)} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.2}>
              <a
                href={enquiryHref(defaultEnquiry)}
                className="inline-flex items-center gap-3 rounded-full bg-ink-navy px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-marker transition-transform hover:-translate-y-0.5"
              >
                Book a first session <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <Link
              href="/#tracks"
              className="rounded-full border border-ink-navy/25 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-navy transition-colors hover:border-ink-navy"
            >
              See the tracks ↓
            </Link>
          </motion.div>

          <motion.ul {...rise(4)} className="mt-10 flex flex-wrap gap-2">
            {["1:1 in person · Goa", "Small batches", "Class 8 → college → any age"].map((c) => (
              <li key={c} className="rounded-full border border-ink-navy/15 bg-white/60 px-4 py-2 text-sm text-ink-navy">
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.4 }}
        >
          <TiltCard className="relative mx-auto max-w-md" max={7}>
            <div className="relative rotate-[-1.5deg] rounded-[1.5rem] bg-white p-3 pb-16 shadow-[0_30px_80px_-30px_rgba(16,26,61,0.35)] ring-1 ring-ink-navy/10">
              {/* tape strips */}
              <span aria-hidden className="absolute -top-3 left-8 h-7 w-24 -rotate-6 rounded-sm bg-marker/90 shadow-sm" />
              <span aria-hidden className="absolute -top-3 right-10 h-7 w-20 rotate-[8deg] rounded-sm bg-marker/90 shadow-sm" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-ink-navy/5">
                <Image
                  src="/atreyapfp.webp"
                  alt="Atreya Kamat, coding and computer science tutor in Goa"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="absolute bottom-4 left-5 font-serif text-2xl italic text-ink-navy">Atreya, your tutor</p>
              <p className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-navy/60">Goa, IN</p>
            </div>

            {/* floating code note */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.1 }}
              className="absolute -left-6 top-[46%] rotate-[-4deg] rounded-xl bg-ink-navy px-4 py-3 font-mono text-[12px] text-paper shadow-xl md:-left-14"
            >
              <span className="text-navy-300">&gt;&gt;&gt;</span> print(<span className="text-marker">&quot;hello, Goa&quot;</span>)
              <br />
              <span className="text-navy-300">hello, Goa</span>
              <span className="caret text-marker">▍</span>
            </motion.div>

            <motion.div
              aria-hidden
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.3 }}
              className="absolute -right-4 top-16 hidden rotate-[5deg] rounded-lg bg-marker px-4 py-3 font-display text-sm font-bold leading-tight text-ink-navy shadow-lg sm:block md:-right-10"
            >
              First session:
              <br />
              we find your level
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
