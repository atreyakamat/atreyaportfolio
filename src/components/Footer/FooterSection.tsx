import React from 'react';
import { soundFx } from '../OsShell/AudioSystem';

export const FooterSection: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#050608] text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-white font-bold tracking-wider mb-1">ATREYA KAMAT // PRODUCT ENGINEER & SYSTEMS ARCHITECT</div>
          <div>Goa, India | Tivim 403502 | CGPA 8.92 Computer Engineering</div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              soundFx.playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded bg-[#0d0f15] border border-white/10 text-slate-300 hover:text-[#00ff66] hover:border-[#00ff66] transition-all cursor-pointer"
          >
            [ TOP // RETURN TO BOOT ]
          </button>
        </div>
      </div>
    </footer>
  );
};
