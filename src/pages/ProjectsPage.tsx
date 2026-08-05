import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle } from '../components/layout/primitives';
import { BodyText } from '../components/layout/primitives';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';

export function ProjectsPage() {
  useEffect(() => {
    updateSeo({
      title: 'Projects',
      description: 'Scaffolded projects page ready for future case study sections and project filters.',
      path: '/projects',
    });
  }, []);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Projects</PageTitle>
        <BodyText>Browse featured work and a full archive of product case studies once implementation begins.</BodyText>
        <FeaturedProjects />
      </section>
    </PageShell>
  );
}
