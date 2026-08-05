import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface PrimitiveProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PrimitiveProps) {
  return <div className={cn('page-container', className)}>{children}</div>;
}

export function Section({ children, className }: PrimitiveProps) {
  return <section className={cn('section-shell', className)}>{children}</section>;
}

export function SectionHeader({ children, className }: PrimitiveProps) {
  return <div className={cn('section-header', className)}>{children}</div>;
}

export function SplitLayout({ children, className }: PrimitiveProps) {
  return <div className={cn('split-layout', className)}>{children}</div>;
}

export function EditorialGrid({ children, className }: PrimitiveProps) {
  return <div className={cn('editorial-grid', className)}>{children}</div>;
}

export function ContentWidth({ children, className }: PrimitiveProps) {
  return <div className={cn('content-width', className)}>{children}</div>;
}

export function MediaWidth({ children, className }: PrimitiveProps) {
  return <div className={cn('media-width', className)}>{children}</div>;
}

export function PageTitle({ children, className }: PrimitiveProps) {
  return <h1 className={cn('page-title', className)}>{children}</h1>;
}

export function Eyebrow({ children, className }: PrimitiveProps) {
  return <p className={cn('eyebrow', className)}>{children}</p>;
}

export function BodyText({ children, className }: PrimitiveProps) {
  return <p className={cn('body-text', className)}>{children}</p>;
}

export function Caption({ children, className }: PrimitiveProps) {
  return <p className={cn('caption-text', className)}>{children}</p>;
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn('divider', className)} aria-hidden="true" />;
}

export function Spacer({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return <div className={cn('spacer', `spacer-${size}`, className)} />;
}
