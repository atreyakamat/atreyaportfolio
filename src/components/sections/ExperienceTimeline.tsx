import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface ExperienceTimelineProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function ExperienceTimeline({ title = 'Experience timeline', description = 'A chronological timeline of professional engagements will appear here.', children }: ExperienceTimelineProps) {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <BodyText>{description}</BodyText>
      {children}
    </Section>
  );
}
