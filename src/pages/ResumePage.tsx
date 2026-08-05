import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { ResumePortal } from '../components/sections/ResumePortal';

export function ResumePage() {
  useEffect(() => {
    updateSeo({
      title: 'Resume',
      description: 'Scaffolded resume page prepared for formal PDF access and professional summary content.',
      path: '/resume',
    });
  }, []);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Resume</PageTitle>
        <BodyText>This page will provide access to the formal resume and supporting professional assets.</BodyText>
        <ResumePortal />
      </section>
    </PageShell>
  );
}
