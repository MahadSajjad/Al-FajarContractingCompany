import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiX, FiPhone } from 'react-icons/fi';
import Logo from './Logo';
import { mainNav, isNavActive } from '../../config/navigation';
import { siteConfig, primaryPhone, telLink } from '../../config/siteConfig';
import { useHydrated } from '../../hooks/useHydrated';

// Lightweight Tailwind slide-in menu (replaces antd Drawer so antd stays off
// every page except /contact). Handles Escape, backdrop click, body scroll lock
// and moves focus to the close button when opened.
export default function MobileMenu({ open, onClose }) {
  const closeRef = useRef(null);
  const hydrated = useHydrated();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-steel-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute right-0 top-0 flex h-full w-[min(20rem,85vw)] flex-col bg-white shadow-card-hover transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-concrete-300 px-5 py-4">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-steel-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-blue"
          >
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = hydrated && isNavActive(pathname, item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'block rounded px-3 py-3 font-display text-base font-semibold uppercase tracking-wide',
                      active ? 'bg-concrete text-blueprint-blue' : 'text-steel-navy hover:bg-concrete',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-concrete-300 px-5 py-5">
          <Link
            to="/contact"
            onClick={onClose}
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
      </div>
    </div>
  );
}
