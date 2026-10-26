"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { animate, motion, useMotionValue, useReducedMotion, useSpring, useTransform, useVelocity } from "framer-motion";
import { WHATSAPP_QR } from "@/data/whatsappQr";
import { whatsappLink } from "@atreya/ui/contact";
import { personalInfo } from "@/data/portfolio";

/** Card hangs this far below the anchor (px). */
const DROP = 96;

function Barcode({ seed, className }: { seed: string; className?: string }) {
  // Deterministic stripes from the seed, purely decorative.
  const bars = Array.from({ length: 26 }, (_, i) => ((seed.charCodeAt(i % seed.length) * (i + 7)) % 4) + 1);
  return (
    <span aria-hidden className={clsx("flex h-7 items-stretch gap-[2px]", className)}>
      {bars.map((w, i) => (
        <span key={i} className="bg-current" style={{ width: w }} />
      ))}
    </span>
  );
}

function Face({ back = false, children }: { back?: boolean; children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-[1.4rem] border border-white/15 bg-navy-900 [backface-visibility:hidden]"
      style={back ? { transform: "rotateY(180deg)" } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Atreya's developer ID on a lanyard. Drag it and let go: it springs back and
 * swings. Click (or Enter) to flip it; the back has a WhatsApp QR.
 */
export function LanyardBadge() {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [dragging, setDragging] = useState(false);
  const moved = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const vx = useVelocity(x);
  const swing = useSpring(useTransform(vx, [-2000, 0, 2000], [-28, 0, 28], { clamp: true }), { stiffness: 140, damping: 9 });
  // Strap: from the anchor (0,0) to the clip on top of the card.
  const strap = useTransform([x, y], ([cx, cy]: number[]) => {
    const ex = cx;
    const ey = DROP + cy;
    const sag = Math.max(0, 40 - Math.hypot(ex, ey) * 0.08);
    return `M -14 0 Q ${ex / 2 - 10} ${ey / 2 + sag} ${ex - 9} ${ey} M 14 0 Q ${ex / 2 + 10} ${ey / 2 + sag} ${ex + 9} ${ey}`;
  });

  const release = () => {
    setDragging(false);
    const spring = { type: "spring" as const, stiffness: 160, damping: 11 };
    animate(x, 0, spring);
    animate(y, 0, spring);
  };

  const wa = whatsappLink("Hi Atreya, I found your ID card on atreyakamat.dev.");

  return (
    <div className="relative mx-auto flex h-[44rem] w-full max-w-md justify-center md:h-[46rem]">
      {/* Anchor bar */}
      <span aria-hidden className="absolute top-0 z-10 h-3 w-24 rounded-full bg-navy-700" />
      <svg aria-hidden className="pointer-events-none absolute left-1/2 top-1.5 overflow-visible" width="1" height="1">
        <motion.path d={strap} fill="none" stroke="var(--color-lemon-400)" strokeWidth="10" strokeLinecap="round" />
        <motion.path d={strap} fill="none" stroke="var(--color-navy-950)" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
      </svg>

      <motion.div
        drag={!reduce}
        dragMomentum={false}
        dragElastic={0.6}
        style={{ x, y, rotate: reduce ? 0 : swing, top: DROP, transformOrigin: "50% 0%" }}
        onDragStart={() => {
          moved.current = true;
          setDragging(true);
        }}
        onDragEnd={release}
        className={clsx("absolute z-20 w-[19.5rem] touch-none md:w-[21rem]", dragging ? "cursor-grabbing" : "cursor-grab")}
      >
        <div className={clsx("relative", !dragging && !reduce && "badge-idle")}>
        {/* Clip */}
        <span aria-hidden className="absolute -top-4 left-1/2 z-10 h-7 w-12 -translate-x-1/2 rounded-md border border-white/20 bg-navy-700 shadow-lg">
          <span className="absolute left-1/2 top-1.5 h-2 w-6 -translate-x-1/2 rounded-full bg-navy-950" />
        </span>

        <button
          type="button"
          aria-pressed={flipped}
          aria-label={flipped ? "ID card back: WhatsApp QR code. Activate to flip to the front." : "Atreya Kamat's ID card. Activate to flip it over."}
          onPointerDown={() => (moved.current = false)}
          onClick={() => {
            if (!moved.current) setFlipped((f) => !f);
          }}
          className="block w-full text-left [perspective:1400px]"
        >
          <motion.div
            className="relative h-[31rem] w-full [transform-style:preserve-3d] md:h-[33rem]"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* FRONT */}
            <Face>
              <div className="flex h-full flex-col p-4">
                <div className="flex items-center justify-between pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-lemon-400">● Builder pass</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-navy-300">AK-01</span>
                </div>
                <div className="relative mt-3 flex-1 overflow-hidden rounded-xl bg-navy-800">
                  <Image
                    src="/atreyapfp.webp"
                    alt=""
                    fill
                    sizes="21rem"
                    draggable={false}
                    className="pointer-events-none select-none object-cover"
                    style={{ filter: "url(#duotone-lemon)" }}
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-coral-400 px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-navy-950">
                    Taking projects
                  </span>
                </div>
                <p className="mt-4 font-display text-[2.1rem] font-extrabold leading-none tracking-tight text-paper">
                  Atreya <span className="text-lemon-400">Kamat</span>
                </p>
                <p className="mt-1.5 font-serif text-lg italic text-navy-100">Freelance product engineer</p>
                <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/10 pt-3 font-mono text-[9.5px] uppercase tracking-[0.16em]">
                  <div className="space-y-1 whitespace-nowrap">
                    <p className="text-navy-300">
                      Base <span className="text-paper">Goa, IN</span>
                    </p>
                    <p className="text-navy-300">
                      Ships <span className="text-paper">Web · Apps · AI</span>
                    </p>
                  </div>
                  <Barcode seed="ATREYAKAMAT" className="text-paper/80" />
                </div>
              </div>
            </Face>

            {/* BACK */}
            <Face back>
              <div className="flex h-full flex-col items-center justify-between bg-lemon-400 p-6 text-navy-950">
                <span className="self-stretch pt-3 font-mono text-[10px] uppercase tracking-[0.2em]">Scan to talk · AK-01</span>
                <div className="rounded-2xl bg-paper p-4 shadow-[0_20px_40px_-20px_rgba(7,11,26,0.6)]">
                  <svg
                    viewBox={`-1 -1 ${WHATSAPP_QR.size + 2} ${WHATSAPP_QR.size + 2}`}
                    className="h-44 w-44 md:h-48 md:w-48"
                    role="img"
                    aria-label="QR code that opens WhatsApp chat with Atreya"
                    shapeRendering="crispEdges"
                  >
                    <path d={WHATSAPP_QR.path} fill="#070b1a" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-extrabold leading-tight tracking-tight">WhatsApp me your messy workflow.</p>
                  <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em]">+91 77440 20601 · {personalInfo.email}</p>
                </div>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] opacity-70">Tap to flip back</span>
              </div>
            </Face>
          </motion.div>
        </button>
        </div>
      </motion.div>

      <p className="absolute bottom-0 font-mono text-[10.5px] uppercase tracking-[0.18em] text-navy-300">
        Drag it · tap to flip
        {wa && (
          <>
            {" "}
            ·{" "}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-lemon-400 underline-offset-4 hover:underline">
              or just message
            </a>
          </>
        )}
      </p>
    </div>
  );
}
