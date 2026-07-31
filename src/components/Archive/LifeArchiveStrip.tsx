import React from 'react';
import { motion } from 'framer-motion';
import { archiveItems } from '../../content/profile';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const LifeArchiveStrip: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell border-y border-black/10 bg-[#151515] px-0 py-16 text-white overflow-hidden">
      <div className="container-shell space-y-8">
        <div className="px-6 lg:px-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#32d6c5]">
            LIFE // ARCHIVE
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl leading-[1.02]">
            A visual record of building, community and craft.
          </h2>
          <p className="text-sm text-white/70">
            Fragments from software development, workshops, student leadership and creative projects.
          </p>
        </div>

        {/* Marquee Strip Container */}
        <div
          className="overflow-hidden py-4"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          {reducedMotion ? (
            <div className="flex flex-wrap justify-center gap-6 px-6">
              {archiveItems.map((item, idx) => (
                <div
                  key={`static-${idx}`}
                  className="w-[260px] overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-xl"
                >
                  <div className={`overflow-hidden rounded-xl bg-slate-800 ${item.aspect}`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#32d6c5]">
                      {item.category}
                    </span>
                    <p className="text-xs font-medium text-white/90">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-8 pr-8"
            >
              {[...archiveItems, ...archiveItems].map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 transition-transform duration-300 hover:border-[#32d6c5]/50 w-[240px] sm:w-[300px]"
                >
                  <div className={`overflow-hidden rounded-xl bg-slate-900 ${item.aspect}`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#32d6c5]">
                      {item.category}
                    </span>
                    <p className="text-xs font-medium text-white/90">{item.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
