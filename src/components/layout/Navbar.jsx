import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiPhone } from 'react-icons/fi';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { mainNav, isNavActive } from '../../config/navigation';
import { primaryPhone, telLink } from '../../config/siteConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useHydrated } from '../../hooks/useHydrated';

const linkBase =
  'relative font-display text-sm font-semibold uppercase tracking-wide transition-colors py-2';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 8;
  const hydrated = useHydrated();
  const { pathname } = useLocation();

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300',
        scrolled ? 'shadow-card' : 'border-b border-concrete-300',
      ].join(' ')}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const active = hydrated && isNavActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={`${linkBase} ${
                    active ? 'text-blueprint-blue' : 'text-steel-navy/80 hover:text-blueprint-blue'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink(primaryPhone.number)}
            className="inline-flex items-center gap-2 font-mono text-sm font-medium text-steel-navy transition-colors hover:text-blueprint-blue"
          >
            <FiPhone className="h-4 w-4 text-safety-orange" aria-hidden="true" />
            {primaryPhone.display}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded bg-safety-orange px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-safety-orange-600"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded text-steel-navy lg:hidden"
        >
          <FiMenu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu (custom, no antd) */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
