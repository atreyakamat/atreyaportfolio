"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin lemon bar at the top of the viewport that tracks page scroll. */
export function ScrollProgress({ className = "bg-lemon-400" }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className={`fixed inset-x-0 top-0 z-[60] h-[3px] origin-left ${className}`}
      style={{ scaleX }}
    />
  );
}
