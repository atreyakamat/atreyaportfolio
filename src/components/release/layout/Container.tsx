import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
  id?: string;
}

export function Container({ children, className = '', as: Component = 'div', id }: ContainerProps) {
  return (
    <Component id={id} className={`container ${className}`}>
      {children}
    </Component>
  );
}
