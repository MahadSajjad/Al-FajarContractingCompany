export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', hasMegaMenu: true },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
];

// Active-route test shared by Navbar + MobileMenu. Used only client-side
// (gated by useHydrated) so SSR markup stays deterministic.
export function isNavActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default mainNav;
