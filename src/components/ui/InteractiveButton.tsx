import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'vermilion' | 'outline';
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  target,
  rel,
}) => {
  let bgStyles = 'bg-[#151515] text-white border-[#151515]';
  let pillColor = 'bg-[#32d6c5] text-[#151515]';

  if (variant === 'secondary') {
    bgStyles = 'bg-white text-[#151515] border-black/10 shadow-sm';
    pillColor = 'bg-[#151515] text-white';
  } else if (variant === 'vermilion') {
    bgStyles = 'bg-[#f05a3c] text-white border-[#f05a3c]';
    pillColor = 'bg-[#151515] text-white';
  } else if (variant === 'outline') {
    bgStyles = 'bg-transparent text-[#151515] border-black/15';
    pillColor = 'bg-[#32d6c5] text-[#151515]';
  }

  const inner = (
    <>
      <span className="relative z-10 font-sans font-medium tracking-tight text-xs uppercase sm:text-sm">
        {children}
      </span>
      <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
        {icon ?? <ArrowUpRight className="h-3.5 w-3.5" />}
      </span>
      <div
        className={`absolute inset-0 z-0 scale-x-0 origin-left rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 ${pillColor}`}
      />
    </>
  );

  const baseClass = `group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32d6c5] active:scale-95 ${bgStyles} ${className}`.trim();

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        whileTap={{ scale: 0.97 }}
        className={baseClass}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={baseClass}
    >
      {inner}
    </motion.button>
  );
};
