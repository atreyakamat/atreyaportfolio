import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export const ContactPage: React.FC = () => {
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
          <span className="text-on-surface-variant">OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>
      <Contact asH1 />
    </div>
  );
};

export default ContactPage;
