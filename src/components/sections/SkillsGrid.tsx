import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface SkillsGridProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function SkillsGrid({ title = 'Skills grid', description = 'Skills, tools and capabilities will be rendered in a structured grid here.', children }: SkillsGridProps) {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <BodyText>{description}</BodyText>
      {children}
    </Section>
  );
}
