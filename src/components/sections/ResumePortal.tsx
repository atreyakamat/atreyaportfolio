import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface ResumePortalProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function ResumePortal({ title = 'Resume portal', description = 'Download and resume-related resources will be placed here.', children }: ResumePortalProps) {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <BodyText>{description}</BodyText>
      {children}
    </Section>
  );
}
