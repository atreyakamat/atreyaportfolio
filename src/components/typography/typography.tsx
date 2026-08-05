import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function EditorialDisplay({ children, className }: TypographyProps) {
  return <h1 className={cn('typography-editorial-display', className)}>{children}</h1>;
}

export function Display({ children, className }: TypographyProps) {
  return <h1 className={cn('typography-display', className)}>{children}</h1>;
}

export function Heading({ children, className }: TypographyProps) {
  return <h2 className={cn('typography-heading', className)}>{children}</h2>;
}

export function Subheading({ children, className }: TypographyProps) {
  return <h3 className={cn('typography-subheading', className)}>{children}</h3>;
}

export function Body({ children, className }: TypographyProps) {
  return <p className={cn('typography-body', className)}>{children}</p>;
}

export function Small({ children, className }: TypographyProps) {
  return <small className={cn('typography-small', className)}>{children}</small>;
}

export function Caption({ children, className }: TypographyProps) {
  return <span className={cn('typography-caption', className)}>{children}</span>;
}

export function Code({ children, className }: TypographyProps) {
  return <code className={cn('typography-code', className)}>{children}</code>;
}

export function Quote({ children, className }: TypographyProps) {
  return <blockquote className={cn('typography-quote', className)}>{children}</blockquote>;
}

export function Metadata({ children, className }: TypographyProps) {
  return <p className={cn('typography-metadata', className)}>{children}</p>;
}

export function NavigationText({ children, className }: TypographyProps) {
  return <span className={cn('typography-navigation', className)}>{children}</span>;
}
