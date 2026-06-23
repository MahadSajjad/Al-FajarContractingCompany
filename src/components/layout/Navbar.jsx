import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import Logo from './Logo';
import { mainNav } from '../../config/navigation';
import { siteConfig, primaryPhone, telLink } from '../../config/siteConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const linkBase =
  'relative font-display text-sm font-semibold uppercase tracking-wide transition-colors';

function navLinkClass({ isActive }) {
  return [
    linkBase,
    'py-2',
    isActive ? 'text-blueprint-blue' : 'text-steel-navy/80 hover:text-blueprint-blue',
  ].join(' ');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 8;

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
          {mainNav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={navLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
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

      {/* Mobile drawer */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        width={320}
        closable={false}
        styles={{ body: { padding: 0 }, header: { display: 'none' } }}
      >
        <div className="flex items-center justify-between border-b border-concrete-300 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-steel-navy"
          >
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col px-2 py-3">
          {mainNav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded px-3 py-3 font-display text-base font-semibold uppercase tracking-wide',
                    isActive
                      ? 'bg-concrete text-blueprint-blue'
                      : 'text-steel-navy hover:bg-concrete',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 border-t border-concrete-300 px-5 py-5">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded bg-safety-orange px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white"
          >
            Request a Quote
          </Link>
          <a
            href={telLink(primaryPhone.number)}
            className="flex items-center justify-center gap-2 rounded border border-concrete-300 px-5 py-3 font-mono text-sm font-medium text-steel-navy"
          >
            <FiPhone className="h-4 w-4 text-safety-orange" aria-hidden="true" />
            {primaryPhone.display}
          </a>
          <p className="text-center font-mono text-xs text-slate-500">{siteConfig.tagline}</p>
        </div>
      </Drawer>
    </header>
  );
}
