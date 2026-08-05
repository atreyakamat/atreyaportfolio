import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { Placeholder } from '../components/ui/Placeholder';

interface ProjectDetailPageProps {
  slug: string;
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  useEffect(() => {
    updateSeo({
      title: `Project ${slug}`,
      description: 'Scaffolded project detail page for future case study content.',
      path: `/projects/${slug}`,
    });
  }, [slug]);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Project Detail</PageTitle>
        <BodyText>This page will display a project case study with page structure and narrative sections.</BodyText>
        <Placeholder
          title="Project detail scaffold"
          description="Hero, context, problem, solution, outcomes, and media sections will be implemented here."
        />
      </section>
    </PageShell>
  );
}
