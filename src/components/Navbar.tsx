import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Start larger, get smaller as we scroll down
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          // When scrolled, we grow slightly in height but stay compact in width
          // When at top (Hero), we are more "fitted" to the content
          width: isScrolled ? "auto" : "max-content",
          paddingLeft: isScrolled ? "2rem" : "1.5rem",
          paddingRight: isScrolled ? "2rem" : "1.5rem",
          scale: isScrolled ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "flex items-center gap-8 px-6 py-3 transition-all duration-500 rounded-full glass-morphism shadow-2xl",
          isScrolled 
            ? "bg-white/[0.08] backdrop-blur-2xl border-indigo-500/30 py-4" 
            : "bg-white/[0.02] border-white/10"
        )}
      >
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-widest text-[var(--text-primary)] hover:text-indigo-400 transition-colors">
            <Home size={18} />
            <span className="uppercase">Home</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 border-l border-white/10 pl-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-4">
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all rounded-full bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] active:scale-95"
          >
            Contact
          </a>

          <button 
            className="p-2 md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 p-8 rounded-[2rem] md:hidden bg-[var(--bg-primary)]/90 backdrop-blur-3xl border border-[var(--glass-border)] shadow-2xl"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-cursive text-[var(--text-primary)] hover:text-indigo-400"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 text-lg font-bold text-white bg-indigo-600 rounded-2xl"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
