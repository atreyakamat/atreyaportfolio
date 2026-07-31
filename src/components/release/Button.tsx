import { ArrowDown, ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { RouteLink } from '../../app/router';

const iconProps = {
  'aria-hidden': true,
} as const;

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonIcon = 'right' | 'external' | 'down' | 'download';

const icons: Record<ButtonIcon, ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  right: ArrowRight,
  external: ArrowUpRight,
  down: ArrowDown,
  download: Download,
};

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  icon = 'right',
  external = false,
  download = false,
  onClick,
}: ButtonProps) {
  const Icon = icons[icon];
  const className = `button button--${variant}`;

  if (external || download || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        download={download}
        onClick={onClick}
      >
        <span>{children}</span>
        <Icon {...iconProps} size={17} />
      </a>
    );
  }

  return (
    <RouteLink to={href} className={className} onClick={onClick}>
      <span>{children}</span>
      <Icon {...iconProps} size={17} />
    </RouteLink>
  );
}
