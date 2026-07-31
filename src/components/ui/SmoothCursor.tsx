import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const SmoothCursor: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verify media query for fine pointer & hover (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine) and (hover: hover)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (mediaQuery.matches && !reducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion, isVisible]);

  if (!isPointerFine || reducedMotion || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-50 h-5 w-5 rounded-full border border-[#32d6c5]/60 bg-[#32d6c5]/20 backdrop-blur-[1px]"
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.2,
      }}
    />
  );
};
