"use client";

import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

/**
 * Smooth scrolling (Lenis) plus a global reduced-motion policy.
 * Users who prefer reduced motion get native scrolling and no transform animations.
 */
export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
