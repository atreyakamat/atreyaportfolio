import React from 'react';
import { ABOUT_DATA } from '../../data/personalData';

export const HumanAbout: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto font-sans select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Candid Editorial Image */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#0d9488]/20 to-transparent rounded-2xl blur-xl opacity-70" />
          <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-white">
            <img
              src={ABOUT_DATA.candidUrl}
              alt="Atreya Kamat Studio Work"
              className="w-full h-auto aspect-[4/3] object-cover object-center filter grayscale-[5%] contrast-[102%]"
            />
          </div>
        </div>

        {/* Right: Human Narrative */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div className="text-xs font-mono text-[#0d9488] font-bold uppercase tracking-widest">
            ABOUT // THE PERSPECTIVE
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#111113] tracking-tight leading-tight">
            {ABOUT_DATA.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans max-w-2xl">
            {ABOUT_DATA.body}
          </p>

          <div className="pt-4 border-t border-black/10 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-slate-600">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">LOCATION</span>
              <span className="font-bold text-[#111113]">Goa, India</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">FOCUS</span>
              <span className="font-bold text-[#111113]">5 Interconnected Worlds</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">ETHOS</span>
              <span className="font-bold text-[#0d9488]">Simplicity as Feature</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
