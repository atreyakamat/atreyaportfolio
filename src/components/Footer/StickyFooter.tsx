import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { RouteLink } from '../../app/router';
import { profile } from '../../content/profile';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const StickyFooter: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <footer className="sticky bottom-0 z-40 mt-8 border-t border-black/10 bg-[#f7f5ef]/95 backdrop-blur">
      <div className="container-shell flex flex-col gap-5 rounded-t-[2rem] border-x border-t border-black/10 bg-white/90 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">AVAILABLE FOR PROJECTS</p>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-slate-600"
          >
            Building useful software and thoughtful product systems.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fafaf8] px-4 py-2 text-sm font-medium text-[#111113] transition-colors hover:border-[#32d6c5]">
            <Mail className="h-4 w-4 text-[#0d9488]" />
            Email me
          </a>
          <RouteLink to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#111113] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0d9488]">
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </RouteLink>
        </div>
      </div>
    </footer>
  );
};
