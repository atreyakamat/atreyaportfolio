export interface NavLink {
  label: string;
  path: string;
  external?: boolean;
}

export const navigationMenu: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];
