import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TextHighlighterProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export const TextHighlighter: React.FC<TextHighlighterProps> = ({
  children,
  color = 'rgba(50, 214, 197, 0.35)',
  className = '',
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <span className={`relative inline-block px-1 ${className}`}>
      <motion.span
        initial={reducedMotion ? false : { scaleX: 0 }}
        whileInView={reducedMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-1 top-1/2 -z-10 origin-left rounded-sm"
        style={{ backgroundColor: color }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};
