import React from 'react';

export const CleanHeader: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/85 backdrop-blur-md border-b border-black/5 select-none transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans text-xs">
        
        {/* Brand */}
        <a
          href="#"
          className="font-bold text-sm tracking-tight text-[#111113] hover:text-[#0d9488] transition-colors flex items-center gap-2"
        >
          <span>ATREYA KAMAT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488] inline-block animate-pulse" title="Available for projects" />
        </a>

        {/* Tiny Navigation */}
        <nav className="flex items-center space-x-6 sm:space-x-8 font-medium text-slate-600">
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-[#111113] transition-colors cursor-pointer"
          >
            Work
          </button>

          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#111113] transition-colors cursor-pointer"
          >
            About
          </button>

          <button
            onClick={() => scrollTo('pillars')}
            className="hover:text-[#111113] transition-colors cursor-pointer hidden sm:inline"
          >
            Pillars
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-[#111113] transition-colors cursor-pointer text-[#0d9488] font-bold"
          >
            Contact
          </button>
        </nav>

      </div>
    </header>
  );
};
