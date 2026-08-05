import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface LifeArchiveProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function LifeArchive({ title = 'Life archive', description = 'A lightweight story or timeline component will be added here.', children }: LifeArchiveProps) {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <BodyText>{description}</BodyText>
      {children}
    </Section>
  );
}
