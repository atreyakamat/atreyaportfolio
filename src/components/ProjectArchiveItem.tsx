import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../data/portfolioData';
import { ArrowOutward } from './ProjectCard';

interface ProjectArchiveItemProps {
  project: ProjectItem;
}

export const ProjectArchiveItem: React.FC<ProjectArchiveItemProps> = ({ project }) => {
  return (
    <article className="p-unit-lg flex flex-col justify-between group hover:bg-[#F7F5EF]/60 transition-colors">
      <div>
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
            {project.number} {project.category ? `// ${project.category}` : ''}
          </span>
          {project.tag && (
            <span className="font-label-mono text-[10px] text-[#006a61] uppercase tracking-wider">
              {project.tag}
            </span>
          )}
        </div>
        <h4 className="font-headline-sm text-[1.1rem] font-bold text-primary mb-unit-xs">
          <Link 
            to={`/projects/${project.slug}`}
            className="hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
          >
            {project.title}
          </Link>
        </h4>
        <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed mb-unit-sm">
          {project.triad.build}
        </p>
      </div>

      <div className="pt-unit-sm border-t border-primary/10 flex items-center justify-between gap-2">
        <span className="font-label-mono text-[10px] text-on-surface-variant">
          {project.stack}
        </span>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open external link for ${project.title}`}
            className="text-[#F05A3C] hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary p-0.5"
          >
            <ArrowOutward className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View details for ${project.title}`}
            className="font-label-mono text-[10px] text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
          >
            DETAILS →
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProjectArchiveItem;
