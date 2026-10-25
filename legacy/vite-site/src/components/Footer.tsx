import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary/15 bg-[#F7F5EF]">
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-xl flex flex-col md:flex-row items-center justify-between gap-unit-md font-label-mono text-label-mono uppercase text-on-surface-variant">
        <div>
          <span className="text-primary font-bold">{personalInfo.name}</span>
          <span className="mx-2 select-none text-outline-variant" aria-hidden="true">/</span>
          <span>{personalInfo.title}</span>
        </div>
        <div className="flex items-center gap-unit-md">
          <a 
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary" 
            href={personalInfo.githubUrl} 
            rel="noopener noreferrer" 
            target="_blank"
            aria-label="Atreya Kamat on GitHub"
          >
            GITHUB
          </a>
          <span className="text-outline-variant select-none" aria-hidden="true">/</span>
          <a 
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary" 
            href={personalInfo.linkedinUrl} 
            rel="noopener noreferrer" 
            target="_blank"
            aria-label="Atreya Kamat on LinkedIn"
          >
            LINKEDIN
          </a>
          <span className="text-outline-variant select-none" aria-hidden="true">/</span>
          <a 
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary" 
            href={`mailto:${personalInfo.email}`}
            aria-label={`Email ${personalInfo.email}`}
          >
            EMAIL
          </a>
          <span className="text-outline-variant select-none" aria-hidden="true">/</span>
          <a 
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary" 
            href={personalInfo.resumeUrl}
            download="atreya_kamat_resume.pdf"
            aria-label="Download Resume PDF"
          >
            RESUME
          </a>
        </div>
        <div className="text-[11px]">
          © {currentYear} {personalInfo.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
