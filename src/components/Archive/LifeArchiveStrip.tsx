import React from 'react';
import { motion } from 'framer-motion';
import { archiveItems } from '../../content/profile';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const LifeArchiveStrip: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const items = archiveItems.concat(archiveItems);

  return (
    <section className="section-shell border-y border-black/10 bg-[#111113] px-0 py-10 text-white">
      <div className="container-shell space-y-6">
        <div className="px-6 lg:px-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#32d6c5]">LIFE / ARCHIVE</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            A visual record of building, teaching and showing up in the community.
          </h2>
        </div>

        <div className="overflow-hidden py-2" style={{ maskImage: 'linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)' }}>
          <motion.div
            animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={reducedMotion ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 pr-4"
          >
            {items.map((item, index) => (
              <div key={`${item.label}-${index}`} className="group w-[280px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 shadow-[0_16px_45px_rgba(0,0,0,0.18)] sm:w-[340px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/80 via-transparent to-transparent opacity-70" />
                <img src={item.image} alt={item.alt} className="aspect-[4/5] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]" />
                <div className="border-t border-white/10 bg-[#111113]/80 px-4 py-3 text-sm text-white/80">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
