import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-4xl text-center">
      <div className="font-label-mono text-label-mono text-[#F05A3C] uppercase tracking-widest mb-unit-sm">
        404 // DOCUMENT NOT FOUND
      </div>
      <h1 className="font-headline-lg text-headline-lg font-serif text-primary mb-unit-md">
        Page Not Found
      </h1>
      <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-unit-xl leading-relaxed">
        The requested URL could not be located in this portfolio index. It may have moved or does not exist.
      </p>
      <Link 
        to="/"
        className="inline-flex items-center px-6 py-3 bg-primary text-[#F7F5EF] font-label-mono text-label-mono tracking-widest uppercase hover:bg-primary/85 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span>RETURN TO HOME →</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
