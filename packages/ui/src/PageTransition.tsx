"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";

/**
 * Route transition: each new page rises and fades in, with a lemon wipe bar.
 * Used from app/template.tsx (re-mounts on every navigation). MotionConfig
 * reducedMotion="user" in Providers turns the movement off for those users.
 * Content starts at opacity 0.01 (not 0) so it still counts for LCP.
 */
export function PageTransition({ children, wipeClassName = "bg-lemon-400" }: { children: ReactNode; wipeClassName?: string }) {
  return (
    <>
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] origin-left ${wipeClassName}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ scaleX: { duration: 0.6, ease: EASE_OUT_EXPO }, opacity: { delay: 0.5, duration: 0.3 } }}
      />
      <motion.div initial={{ opacity: 0.01, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}>
        {children}
      </motion.div>
    </>
  );
}
