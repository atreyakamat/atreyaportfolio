"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { allStickers, stall, stixProducts } from "@/data/create";

function StickerMarquee() {
  const row = [...allStickers, ...allStickers];
  return (
    <div aria-hidden className="marquee overflow-hidden border-y-2 border-ink bg-acid py-5">
      <div className="marquee-track flex w-max items-center gap-8">
        {row.map((src, i) => (
          <Image key={i} src={src} alt="" width={420} height={380} className="h-20 w-auto -rotate-3 odd:rotate-3 md:h-28" />
        ))}
      </div>
    </div>
  );
}

/**
 * Stix N Vibes: pop-up stall photos on a horizontal strip that moves with
 * vertical scroll (pinned on desktop). On phones it is a swipeable row.
 */
export function StixStrip() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -distance]);

  const frames = stall.map((p, i) => (
    <figure
      key={p.src}
      className="relative h-[62vh] shrink-0 overflow-hidden border-2 border-acid bg-ink md:h-[68vh]"
      style={{ aspectRatio: `${p.w} / ${p.h}` }}
    >
      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 80vw" className="object-cover" />
      <figcaption className="absolute left-0 top-0 bg-acid px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
        Pop-up · {String(i + 1).padStart(2, "0")}
      </figcaption>
    </figure>
  ));

  return (
    <section id="stix" aria-labelledby="stix-title" className="bg-acid text-ink">
      <div className="halftone px-5 pb-16 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeader
            tone="lemon"
            index="01"
            label="Stix N Vibes"
            meta="My sticker & print brand"
            id="stix-title"
            title={
              <>
                Self-expression, <span className="font-serif font-normal italic">made physical.</span>
              </>
            }
            intro="Stix N Vibes is the student-led sticker and print brand I run in Goa. We sell at pop-up stalls, cut stickers live, and I built the website and shop."
          />
          <ul className="mt-10 flex flex-wrap gap-2">
            {stixProducts.map((p) => (
              <li key={p} className="border-2 border-ink px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-[0.16em]">
            <a href="https://stixnvibes.com" target="_blank" rel="noopener noreferrer" className="bg-ink px-5 py-3 text-acid transition-transform hover:-translate-y-0.5">
              stixnvibes.com ↗
            </a>
            <a href="https://shop.stixnvibes.com" target="_blank" rel="noopener noreferrer" className="border-2 border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-acid">
              Shop ↗
            </a>
          </div>
        </div>
      </div>

      <StickerMarquee />

      {/* Desktop: pinned horizontal strip */}
      <div ref={pinRef} className="relative hidden bg-ink md:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-5 pl-10 pr-10">
            <div className="flex h-[68vh] w-[26rem] shrink-0 flex-col justify-between border-2 border-acid p-8 text-acid">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Pull up to the stall</p>
              <p className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight">
                Goa queues for <span className="font-serif font-normal italic">this.</span>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">Scroll →</p>
            </div>
            {frames}
          </motion.div>
        </div>
      </div>

      {/* Mobile: swipeable row */}
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto bg-ink px-5 py-10 md:hidden">
        {stall.map((p) => (
          <figure key={p.src} className="relative h-[60vh] shrink-0 snap-center overflow-hidden border-2 border-acid" style={{ aspectRatio: `${p.w} / ${p.h}` }}>
            <Image src={p.src} alt={p.alt} fill sizes="80vw" className="object-cover" />
          </figure>
        ))}
      </div>
    </section>
  );
}
