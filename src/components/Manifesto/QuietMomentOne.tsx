import React from 'react';

export const QuietMomentOne: React.FC = () => {
  return (
    <section className="py-36 px-6 max-w-5xl mx-auto text-center select-none">
      <div className="text-xs font-mono text-[#ff5a36] uppercase tracking-widest mb-4">
        RESTRAINT & SILENCE
      </div>

      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-[#1a1a1e] tracking-tight leading-tight max-w-3xl mx-auto mb-6">
        Good products remove things.
      </h2>

      <p className="text-sm font-sans text-slate-500 max-w-lg mx-auto leading-relaxed">
        Great software is not built by adding features until nothing more can be added. It is built by stripping complexity until nothing more can be removed.
      </p>
    </section>
  );
};
