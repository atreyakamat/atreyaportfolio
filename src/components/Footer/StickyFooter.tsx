import React from 'react';
import { Mail } from 'lucide-react';
import { profile } from '../../content/profile';
import { UnderlineAnimation } from '../ui/UnderlineAnimation';
import { TypewriterText } from '../ui/TypewriterText';
import { InteractiveButton } from '../ui/InteractiveButton';
import { GithubIcon } from '../ui/Icons';

export const StickyFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-0 bg-[#151515] text-white pt-16 pb-12 px-6 lg:px-8 border-t border-white/10">
      <div className="container-shell mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Identity & Typewriter */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Atreya Kamat
            </h3>
            <div className="text-sm text-white/70">
              <TypewriterText text="Building useful products, systems and thoughtful digital craft." speed={35} />
            </div>
            <p className="text-xs text-white/50 pt-2">
              Based in {profile.location} · Open for select engineering & product roles.
            </p>
          </div>

          {/* Direct Actions & Links */}
          <div className="space-y-6 md:justify-self-end">
            <div className="flex flex-wrap items-center gap-4">
              <InteractiveButton href={`mailto:${profile.email}`} variant="primary">
                <Mail className="h-4 w-4" />
                Let's Talk
              </InteractiveButton>
              <InteractiveButton href={profile.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                <GithubIcon className="h-4 w-4" />
                GitHub
              </InteractiveButton>
            </div>

            {/* Navigation & Social Links with Underline Animation */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-white/80">
              <UnderlineAnimation to="/projects" color="#32d6c5">
                Projects
              </UnderlineAnimation>
              <UnderlineAnimation to="/experience" color="#32d6c5">
                Experience
              </UnderlineAnimation>
              <UnderlineAnimation to="/skills" color="#32d6c5">
                Skills
              </UnderlineAnimation>
              <UnderlineAnimation to="/about" color="#32d6c5">
                About
              </UnderlineAnimation>
              <UnderlineAnimation to="/resume" color="#32d6c5">
                Resume
              </UnderlineAnimation>
              <UnderlineAnimation href={profile.linkedin} color="#32d6c5">
                LinkedIn
              </UnderlineAnimation>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-white/40">
          <span>© {currentYear} Atreya Kamat. All rights reserved.</span>
          <span className="mt-2 sm:mt-0 font-mono text-[11px] text-[#32d6c5]">
            atreyakamat.dev // PORCELAIN × INK × AQUA
          </span>
        </div>
      </div>
    </footer>
  );
};
