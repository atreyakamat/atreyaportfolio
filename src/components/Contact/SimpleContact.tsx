import React from 'react';
import { CONTACT_DATA } from '../../data/personalData';
import { Mail, Globe } from 'lucide-react';

export const SimpleContact: React.FC = () => {
  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto font-sans select-none border-t border-black/10">
      
      <div className="bg-[#ffffff] border border-black/10 rounded-3xl p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Soft Atmospheric Turquoise Light Aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0d9488]/15 via-[#06b6d4]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mb-12 relative z-10 space-y-4">
          <span className="text-xs font-mono text-[#0d9488] font-bold tracking-widest uppercase block">
            CONTACT // GET IN TOUCH
          </span>

          <h2 className="text-5xl sm:text-7xl font-bold font-display text-[#111113] tracking-tight leading-none">
            {CONTACT_DATA.headline}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Open for product engineering, creative direction, mentoring, and select partnerships.
          </p>
        </div>

        {/* Direct Link Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs relative z-10">
          
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="p-5 bg-[#fafaf8] border border-black/10 rounded-2xl hover:border-[#0d9488] transition-all flex flex-col justify-between group"
          >
            <span className="text-slate-400 text-[10px] uppercase font-bold block mb-2">EMAIL</span>
            <span className="text-sm font-sans font-bold text-[#111113] group-hover:text-[#0d9488] transition-colors flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#0d9488]" /> {CONTACT_DATA.email}
            </span>
          </a>

          <a
            href={CONTACT_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-5 bg-[#fafaf8] border border-black/10 rounded-2xl hover:border-[#0d9488] transition-all flex flex-col justify-between group"
          >
            <span className="text-slate-400 text-[10px] uppercase font-bold block mb-2">LINKEDIN</span>
            <span className="text-sm font-sans font-bold text-[#111113] group-hover:text-[#0d9488] transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#0d9488]" /> linkedin.com/in/atreyakamat
            </span>
          </a>

          <a
            href={CONTACT_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="p-5 bg-[#fafaf8] border border-black/10 rounded-2xl hover:border-[#0d9488] transition-all flex flex-col justify-between group"
          >
            <span className="text-slate-400 text-[10px] uppercase font-bold block mb-2">GITHUB</span>
            <span className="text-sm font-sans font-bold text-[#111113] group-hover:text-[#0d9488] transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#0d9488]" /> github.com/atreyakamat
            </span>
          </a>

          <a
            href={CONTACT_DATA.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-5 bg-[#fafaf8] border border-black/10 rounded-2xl hover:border-[#0d9488] transition-all flex flex-col justify-between group"
          >
            <span className="text-slate-400 text-[10px] uppercase font-bold block mb-2">INSTAGRAM</span>
            <span className="text-sm font-sans font-bold text-[#111113] group-hover:text-[#0d9488] transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#0d9488]" /> instagram.com/atreyakamat
            </span>
          </a>

        </div>

        {/* Signature */}
        <div className="mt-16 pt-8 border-t border-black/10 flex justify-between items-center relative z-10 font-display text-2xl font-bold text-[#111113]">
          <span>— Atreya</span>
          <span className="text-xs font-mono text-slate-400 font-normal">GOA, INDIA</span>
        </div>

      </div>

    </section>
  );
};
