import React from 'react';
import { Link } from 'react-router-dom';
import Experience from '../components/Experience';
import { personalInfo } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop pt-unit-xl">
        <div className="font-label-mono text-label-mono uppercase flex items-center justify-between border-b border-primary/10 pb-unit-sm">
          <Link 
            to="/"
            className="text-primary hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary inline-flex items-center gap-1 font-semibold"
          >
            <span>← BACK TO OVERVIEW</span>
          </Link>
          <a
            href={personalInfo.resumeUrl}
            download="atreya_kamat_resume.pdf"
            className="text-[#F05A3C] hover:underline font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            DOWNLOAD RESUME PDF [74 KB] →
          </a>
        </div>
      </div>
      <Experience asH1 />
    </div>
  );
};

export default ExperiencePage;
