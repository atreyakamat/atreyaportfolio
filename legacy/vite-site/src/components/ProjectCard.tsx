import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectItem, ProjectTriad } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ArrowOutward: React.FC<{ className?: string }> = ({ 
  className = "w-3.5 h-3.5 text-[#F05A3C] shrink-0" 
}) => (
  <svg 
    className={className} 
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
);

export const TriadDisplay: React.FC<{ triad: ProjectTriad; isCompact?: boolean }> = ({ 
  triad, 
  isCompact = false 
}) => (
  <div className="space-y-unit-sm py-unit-sm text-body-sm">
    <div>
      <span className={`font-label-mono ${isCompact ? 'text-[11px]' : 'text-label-mono'} text-[#F05A3C] font-bold uppercase`}>
        PROBLEM:{' '}
      </span>
      <span className="text-on-surface">{triad.problem}</span>
    </div>
    <div>
      <span className={`font-label-mono ${isCompact ? 'text-[11px]' : 'text-label-mono'} text-primary font-bold uppercase`}>
        THE BUILD:{' '}
      </span>
      <span className="text-on-surface">{triad.build}</span>
    </div>
    <div>
      <span className={`font-label-mono ${isCompact ? 'text-[11px]' : 'text-label-mono'} text-secondary font-bold uppercase`}>
        OUTCOME:{' '}
      </span>
      <span className="font-medium text-primary">{triad.outcome}</span>
    </div>
  </div>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article 
      aria-labelledby={`project-${project.id}-title`}
      className="border border-primary/20 bg-[#ffffff] flex flex-col justify-between"
    >
      <div>
        <div className="p-unit-sm border-b border-primary/15 flex items-center justify-between font-label-mono text-[11px]">
          <span className="font-bold text-primary uppercase">
            {project.number} // {project.category}
          </span>
          {project.tag && (
            <span className="text-on-surface-variant uppercase">{project.tag}</span>
          )}
        </div>
        <div className="aspect-[16/9] border-b border-primary/20 relative bg-surface-container overflow-hidden group">
          <img 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
            alt={project.imageAlt} 
            src={project.image}
            loading="lazy"
            decoding="async"
            width={800}
            height={450}
          />
        </div>
        <div className="p-unit-lg">
          <h3 
            id={`project-${project.id}-title`}
            className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-sm"
          >
            <Link 
              to={`/projects/${project.slug}`}
              className="hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
            >
              {project.title}
            </Link>
          </h3>
          <TriadDisplay triad={project.triad} isCompact />
        </div>
      </div>
      <div className="p-unit-lg pt-unit-xs border-t border-primary/10 flex flex-wrap items-center justify-between gap-unit-sm">
        <div className="font-label-mono text-[11px] text-on-surface-variant">
          {project.stack}
        </div>
        
        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>CODE</span>
              <ArrowOutward className="w-2.5 h-2.5 text-[#F05A3C]" />
            </a>
          )}
          {project.liveUrl ? (
            <a 
              className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Launch ${project.title}`}
            >
              <span>LAUNCH APP</span>
              <ArrowOutward className="w-3 h-3 text-[#32D6C5]" />
            </a>
          ) : (
            <Link 
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
              aria-label={`View architecture details for ${project.title}`}
            >
              <span>DETAILS →</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
