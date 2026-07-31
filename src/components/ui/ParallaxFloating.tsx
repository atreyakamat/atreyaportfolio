import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FloatingItem {
  id: string;
  image: string;
  label: string;
  alt: string;
  xOffset: number; // percentage or px
  yOffset: number;
  depth: number; // 1 to 3 parallax factor
  size: string; // width/height class
}

interface ParallaxFloatingProps {
  items: FloatingItem[];
  children: React.ReactNode;
}

export const ParallaxFloating: React.FC<ParallaxFloatingProps> = ({ items, children }) => {
  const reducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85vh] w-full overflow-hidden flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Parallax Floating Fragments on Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        {items.map((item) => {
          const moveX = mousePos.x * item.depth * 24;
          const moveY = mousePos.y * item.depth * 24;

          return (
            <motion.div
              key={item.id}
              animate={reducedMotion ? undefined : { x: moveX, y: moveY }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{
                top: `${item.yOffset}%`,
                left: `${item.xOffset}%`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-xl backdrop-blur ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="mt-1 px-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {item.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Central Focal Object: Resume */}
      <div className="relative z-10 w-full max-w-4xl">{children}</div>

      {/* Mobile/Tablet Static Editorial Fragment Grid underneath */}
      <div className="mt-12 grid grid-cols-2 gap-4 lg:hidden w-full max-w-lg">
        {items.slice(0, 4).map((item) => (
          <div
            key={`mobile-${item.id}`}
            className="overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-sm"
          >
            <img src={item.image} alt={item.alt} className="aspect-[4/3] w-full rounded-xl object-cover" />
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
