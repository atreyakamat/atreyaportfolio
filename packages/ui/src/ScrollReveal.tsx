"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({ word, range, progress, accent }: { word: string; range: [number, number]; progress: MotionValue<number>; accent: boolean }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? "font-serif italic text-lemon-400" : undefined}>
      {word}{" "}
    </motion.span>
  );
}

/**
 * Paragraph whose words light up as it scrolls through the viewport.
 * Wrap words in *asterisks* to set them in lemon serif italic.
 */
export function ScrollReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  if (reduce) {
    return (
      <p className={className}>
        {words.map((w, i) => {
          const accent = w.startsWith("*");
          return (
            <span key={i} className={accent ? "font-serif italic text-lemon-400" : undefined}>
              {w.replaceAll("*", "")}{" "}
            </span>
          );
        })}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={i}
          word={w.replaceAll("*", "")}
          accent={w.includes("*")}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
}
