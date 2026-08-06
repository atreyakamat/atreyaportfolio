import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const IdentityMarquee: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const marqueeItems = ['BUILD', '•', 'PERSONAL', '•', 'PRODUCT', '•', 'SYSTEMS', '•', 'CRAFT', '•'];
  const repeatedItems = marqueeItems.concat(marqueeItems).concat(marqueeItems);

  const content = (
    <div className="flex items-center space-x-8 text-2xl font-semibold tracking-[0.28em] text-white/90 sm:text-3xl md:text-4xl">
      {repeatedItems.map((item, idx) => (
        <span key={idx} className={item === '•' ? 'text-[#32d6c5] text-xl sm:text-2xl' : ''}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-black/10 bg-[#111113] py-8 text-white">
      <div className="overflow-hidden whitespace-nowrap">
        {reducedMotion ? (
          content
        ) : (
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex items-center space-x-8 text-2xl font-semibold tracking-[0.28em] text-white/90 sm:text-3xl md:text-4xl"
          >
            {repeatedItems.map((item, idx) => (
              <span key={idx} className={item === '•' ? 'text-[#32d6c5] text-xl sm:text-2xl' : ''}>
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
