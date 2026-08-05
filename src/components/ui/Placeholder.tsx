import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface PlaceholderProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function Placeholder({ title, description, children, className }: PlaceholderProps) {
  return (
    <div className={cn('placeholder-card', className)}>
      <h2 className="placeholder-card__title">{title}</h2>
      <p className="placeholder-card__description">{description}</p>
      {children}
    </div>
  );
}
