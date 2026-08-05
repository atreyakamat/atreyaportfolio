import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button className={cn('button', `button-${variant}`, className)} {...props} />
  );
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export function Link({ children, variant = 'primary', className, ...props }: AnchorProps) {
  return (
    <a className={cn('link', `link-${variant}`, className)} {...props} />
  );
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  className?: string;
}

export function IconButton({ icon, label, className, ...props }: IconButtonProps) {
  return (
    <button type="button" className={cn('icon-button', className)} aria-label={label} {...props}>
      {icon}
    </button>
  );
}

interface MediaProps {
  src: string;
  alt: string;
  className?: string;
}

export function Image({ src, alt, className }: MediaProps) {
  return <img className={cn('media-image', className)} src={src} alt={alt} loading="lazy" />;
}

interface VideoProps {
  src: string;
  poster?: string;
  className?: string;
  title?: string;
}

export function Video({ src, poster, className, title }: VideoProps) {
  return (
    <video className={cn('media-video', className)} src={src} poster={poster} controls preload="metadata" title={title} />
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('badge', className)}>{children}</span>;
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('pill', className)}>{children}</span>;
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('chip', className)}>{children}</span>;
}

export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return <mark className={cn('highlight', className)}>{children}</mark>;
}
