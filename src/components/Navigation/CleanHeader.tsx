import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RouteLink, useRouter } from '../../app/router';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

export const CleanHeader: React.FC = () => {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[#fafaf8]/85 backdrop-blur-md select-none transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 font-sans text-xs">
        <RouteLink to="/" className="flex items-center gap-2 text-sm font-bold tracking-tight text-[#111113] transition-colors hover:text-[#0d9488]">
          <span>ATREYA KAMAT</span>
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#0d9488]" title="Available for projects" />
        </RouteLink>

        <nav className="hidden items-center gap-4 sm:gap-6 font-medium text-slate-600 md:flex">
          {navItems.map((item) => {
            const active = path === item.to;
            return (
              <RouteLink
                key={item.to}
                to={item.to}
                className={`transition-colors hover:text-[#111113] ${active ? 'text-[#111113] font-semibold' : ''}`}
              >
                {item.label}
              </RouteLink>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white p-2 text-[#111113] md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#fafaf8] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const active = path === item.to;
              return (
                <RouteLink
                  key={item.to}
                  to={item.to}
                  className={`transition-colors hover:text-[#111113] ${active ? 'text-[#111113] font-semibold' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </RouteLink>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
