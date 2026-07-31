import React from 'react';
import { RouteLink } from '../../app/router';

interface UnderlineAnimationProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  color?: string;
}

export const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({
  children,
  to,
  href,
  className = '',
  color = '#151515',
}) => {
  const content = (
    <span className="group relative inline-block">
      <span>{children}</span>
      <span
        className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: color }}
      />
    </span>
  );

  if (to) {
    return (
      <RouteLink to={to} className={`inline-block ${className}`}>
        {content}
      </RouteLink>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block ${className}`}>
        {content}
      </a>
    );
  }

  return <span className={`inline-block ${className}`}>{content}</span>;
};
