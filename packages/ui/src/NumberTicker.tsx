"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function NumberTicker({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  // Server and reduced-motion render the final number, so it is never wrong.
  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
