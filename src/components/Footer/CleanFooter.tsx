import React from 'react';

export const CleanFooter: React.FC = () => {
  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-black/5 font-mono text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 select-none">
      <div>
        © 2026 ATREYA KAMAT. ALL RIGHTS RESERVED.
      </div>
      <div className="flex items-center space-x-6 text-[11px]">
        <span className="text-[#0d9488]">PRIMARY ECOSYSTEM // ATREYAKAMAT.DEV</span>
        <span>GOA, INDIA</span>
      </div>
    </footer>
  );
};
