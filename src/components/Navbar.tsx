import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, personalInfo } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F7F5EF]/90 backdrop-blur-md border-b border-primary/15">
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop h-20 flex items-center justify-between">
        {/* Brand & Location status */}
        <div className="flex items-center gap-unit-md shrink-0">
          <Link 
            to="/"
            className="font-headline-sm text-[1.15rem] tracking-tight text-primary font-bold uppercase hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0" 
            aria-label={`${personalInfo.name} - Home`}
          >
            {personalInfo.name}
          </Link>
          <span className="text-outline-variant select-none hidden xl:inline-block" aria-hidden="true">/</span>
          <div className="hidden xl:flex items-center gap-1.5" aria-label={`Status: ${personalInfo.statusShort}`}>
            <span className="inline-block w-2 h-2 rounded-full bg-[#32D6C5]" aria-hidden="true"></span>
            <span className="font-label-mono text-[10px] tracking-wider text-on-surface-variant uppercase whitespace-nowrap">
              {personalInfo.statusShort}
            </span>
          </div>
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="flex items-center gap-unit-md xl:gap-unit-lg">
          <nav 
            className="hidden lg:flex items-center gap-3 xl:gap-unit-md font-label-mono text-[11px] xl:text-label-mono tracking-widest text-on-surface-variant uppercase"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a 
                  className="hover:text-primary transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 whitespace-nowrap" 
                  href={link.href}
                >
                  {link.name}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-outline-variant select-none" aria-hidden="true">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <a 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary text-primary font-label-mono text-label-mono tracking-wider uppercase hover:bg-primary hover:text-[#F7F5EF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
            href={personalInfo.resumeUrl}
            download="atreya_kamat_resume.pdf"
            aria-label="Download Resume PDF file"
          >
            <span>RESUME</span>
            <svg 
              className="w-3.5 h-3.5 text-[#F05A3C] shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          {/* Accessible Mobile/Tablet hamburger toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary hover:text-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile/Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[#F7F5EF] border-b border-primary/15 px-gutter-mobile py-6 flex flex-col gap-4 animate-in fade-in duration-200"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-primary/10">
            <span className="inline-block w-2 h-2 rounded-full bg-[#32D6C5]" aria-hidden="true"></span>
            <span className="font-label-mono text-[11px] tracking-wider text-on-surface-variant uppercase">
              {personalInfo.statusShort}
            </span>
          </div>

          <div className="flex flex-col gap-3 font-label-mono text-sm tracking-widest text-primary uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-primary/10">
            <a
              href={personalInfo.resumeUrl}
              download="atreya_kamat_resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 border border-primary text-primary font-label-mono text-xs tracking-wider uppercase hover:bg-primary hover:text-[#F7F5EF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>DOWNLOAD RESUME [PDF]</span>
              <svg 
                className="w-3.5 h-3.5 text-[#F05A3C] shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
