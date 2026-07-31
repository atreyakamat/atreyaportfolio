import React from 'react';
import { RouteLink } from '../../app/router';
import { Mail, Globe } from 'lucide-react';
import { profile } from '../../content/profile';

export const CleanFooter: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-[#f7f5ef]/80 px-6 py-10 sm:px-8 lg:px-10">
      <div className="container-shell flex flex-col gap-8 rounded-[2rem] border border-black/10 bg-white/80 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">Atreya Kamat</p>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#111113]">Building products, systems and clear thinking.</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-[#0d9488]">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#0d9488]">
              <Globe className="h-4 w-4" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#0d9488]">
              <Globe className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center">
          <RouteLink to="/projects" className="transition-colors hover:text-[#111113]">Projects</RouteLink>
          <RouteLink to="/experience" className="transition-colors hover:text-[#111113]">Experience</RouteLink>
          <RouteLink to="/skills" className="transition-colors hover:text-[#111113]">Skills</RouteLink>
          <RouteLink to="/contact" className="transition-colors hover:text-[#111113]">Contact</RouteLink>
        </div>
      </div>
    </footer>
  );
};
