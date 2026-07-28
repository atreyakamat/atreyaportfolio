import React from 'react';
import { motion } from 'framer-motion';

export const IdentityMarquee: React.FC = () => {
  const marqueeItems = [
    "BUILD", "✦", "CREATE", "✦", "TEACH", "✦", "SPEAK", "✦", "EXPERIMENT", "✦"
  ];

  return (
    <section className="py-8 bg-[#111113] text-white overflow-hidden select-none border-y border-black/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center space-x-8 text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-wider opacity-90"
        >
          {marqueeItems.concat(marqueeItems).concat(marqueeItems).map((item, idx) => (
            <span
              key={idx}
              className={item === "✦" ? "text-[#2dd4bf] text-xl sm:text-3xl" : "hover:text-[#2dd4bf] transition-colors"}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
