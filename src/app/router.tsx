import { createContext, type MouseEvent, type ReactNode, useContext, useEffect, useMemo, useState } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function normalizePath(path: string) {
  if (!path.startsWith('/')) return `/${path}`;
  return path.replace(/\/+$/, '') || '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const value = useMemo<RouterContextValue>(
    () => ({
      path,
      navigate(to) {
        const nextPath = normalizePath(to);
        if (nextPath === path) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        window.history.pushState({}, '', nextPath);
        setPath(nextPath);
        window.scrollTo({ top: 0, behavior: 'auto' });
      },
    }),
    [path],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const value = useContext(RouterContext);
  if (!value) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return value;
}

interface RouteLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function RouteLink({ to, children, className, ariaLabel, onClick }: RouteLinkProps) {
  const { navigate } = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    onClick?.();
    navigate(to);
  }

  return (
    <a href={to} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}
