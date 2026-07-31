import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const baseClass = 'group inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32d6c5]';
  const variantClass = variant === 'primary'
    ? 'border-[#111113] bg-[#111113] text-white hover:-translate-y-0.5 hover:bg-[#0d9488] hover:border-[#0d9488]'
    : 'border-black/10 bg-white/80 text-[#111113] hover:-translate-y-0.5 hover:border-[#32d6c5] hover:text-[#0d9488]';

  const content = (
    <>
      <span>{children}</span>
      {icon ?? <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClass} ${variantClass} ${className}`.trim()}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${variantClass} ${className}`.trim()}
    >
      {content}
    </motion.button>
  );
};
