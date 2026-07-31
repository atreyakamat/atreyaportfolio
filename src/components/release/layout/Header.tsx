import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RouteLink, useRouter } from '../../../app/router';

const navItems = [
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <RouteLink to="/" className="site-wordmark" ariaLabel="Go to homepage">
          <span>Atreya Kamat</span>
          <span aria-hidden="true" className="site-wordmark__dot" />
        </RouteLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <RouteLink
              key={item.to}
              to={item.to}
              className={path === item.to ? 'nav-link is-active' : 'nav-link'}
            >
              {item.label}
            </RouteLink>
          ))}
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      <div id="mobile-navigation" className={open ? 'mobile-nav is-open' : 'mobile-nav'}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <RouteLink key={item.to} to={item.to} className="mobile-nav__link">
              {item.label}
            </RouteLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
