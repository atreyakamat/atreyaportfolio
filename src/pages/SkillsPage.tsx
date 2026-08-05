import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { SkillsGrid } from '../components/sections/SkillsGrid';

export function SkillsPage() {
  useEffect(() => {
    updateSeo({
      title: 'Skills',
      description: 'Scaffolded skills page for future capability categories, tooling systems, and evidence-driven sections.',
      path: '/skills',
    });
  }, []);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Skills</PageTitle>
        <BodyText>This page will organize capabilities, tools, and evidence into a production-ready architecture.</BodyText>
        <SkillsGrid />
      </section>
    </PageShell>
  );
}
