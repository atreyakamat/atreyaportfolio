"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({
  word,
  range,
  progress,
  accent,
  from,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  accent: boolean;
  from: number;
}) {
  const opacity = useTransform(progress, range, [from, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? "font-serif italic text-lemon-400" : undefined}>
      {word}{" "}
    </motion.span>
  );
}

/**
 * Paragraph whose words light up as it scrolls through the viewport.
 * Wrap words in *asterisks* to set them in lemon serif italic.
 * `from` is the starting opacity of unlit words: 0.5 keeps them above 4.5:1 on
 * the dark sites; light backgrounds need about 0.62.
 */
export function ScrollReveal({ text, className, from = 0.5 }: { text: string; className?: string; from?: number }) {
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
          from={from}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
}
