import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-500 text-sm font-medium">
          © 2026 Atreya Kamat · <span className="text-slate-400">Built with intention</span>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-bold tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          GOA, INDIA
        </div>

        <div className="text-slate-500 text-xs uppercase tracking-[0.2em]">
          Final Year Portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;
