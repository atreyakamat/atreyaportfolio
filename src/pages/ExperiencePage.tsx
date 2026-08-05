import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';

export function ExperiencePage() {
  useEffect(() => {
    updateSeo({
      title: 'Experience',
      description: 'Scaffolded experience page with a timeline placeholder for future professional history content.',
      path: '/experience',
    });
  }, []);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Experience</PageTitle>
        <BodyText>Timeline sections, career details, and related project references will be created here.</BodyText>
        <ExperienceTimeline />
      </section>
    </PageShell>
  );
}
