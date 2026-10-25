"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";

/**
 * Lemon highlighter stroke that draws itself behind the words when they
 * scroll into view. Static (already drawn) for reduced motion.
 */
export function Marker({
  children,
  delay = 0,
  height = "62%",
  className,
}: {
  children: ReactNode;
  delay?: number;
  height?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const full = `100% ${height}`;
  return (
    <motion.span
      className={`marker ${className ?? ""}`}
      initial={{ backgroundSize: reduce ? full : `0% ${height}` }}
      whileInView={{ backgroundSize: full }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.span>
  );
}
