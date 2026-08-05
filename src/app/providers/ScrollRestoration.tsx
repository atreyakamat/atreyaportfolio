import { useEffect } from 'react';
import { useRouter } from '../router';

export function ScrollRestoration() {
  const { path } = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [path]);

  return null;
}
