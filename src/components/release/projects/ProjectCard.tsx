import { ArrowUpRight, Globe, PlayCircle } from 'lucide-react';
import { RouteLink } from '../../../app/router';
import { statusLabels } from '../../../content/projects';
import type { Project } from '../../../content/types';
import { trackEvent } from '../../../lib/analytics';
import { ProjectMedia } from './ProjectMedia';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={featured ? 'project-card project-card--featured' : 'project-card'}>
      <RouteLink
        to={`/projects/${project.slug}`}
        className="project-card__media-link"
        ariaLabel={`View ${project.title} project details`}
        onClick={() => trackEvent('project_open', { slug: project.slug, source: 'project_card' })}
      >
        <ProjectMedia media={project.cover} title={project.title} />
      </RouteLink>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
          <span>{statusLabels[project.status]}</span>
        </div>

        <h3>
          <RouteLink
            to={`/projects/${project.slug}`}
            onClick={() => trackEvent('project_open', { slug: project.slug, source: 'project_title' })}
          >
            {project.title}
          </RouteLink>
        </h3>

        <p>{project.shortDescription}</p>

        <div className="project-card__footer">
          <RouteLink
            to={`/projects/${project.slug}`}
            className="editorial-link"
            onClick={() => trackEvent('project_open', { slug: project.slug, source: 'project_link' })}
          >
            View project <ArrowUpRight aria-hidden="true" size={16} />
          </RouteLink>

          <div className="project-card__signals" aria-label="Project links and demo availability">
            {project.demo ? <PlayCircle aria-label="Demo available" size={17} /> : null}
            {project.links?.github ? <Globe aria-label="Public repository available" size={17} /> : null}
          </div>
        </div>
      </div>
    </article>
  );
}
