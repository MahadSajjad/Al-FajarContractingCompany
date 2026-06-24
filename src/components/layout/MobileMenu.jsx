import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiX, FiPhone } from 'react-icons/fi';
import Logo from './Logo';
import { mainNav, isNavActive } from '../../config/navigation';
import { siteConfig, primaryPhone, telLink } from '../../config/siteConfig';
import { useHydrated } from '../../hooks/useHydrated';

// Smooth easing for the slide (gentle deceleration, iOS-sheet feel).
const EASE = 'cubic-bezier(0.32,0.72,0,1)';

// Lightweight Tailwind slide-in menu (replaces antd Drawer so antd stays off
// every page except /contact). Handles Escape, backdrop click, scroll lock
// (without the scrollbar-jump), focus, and a staggered link reveal.
export default function MobileMenu({ open, onClose }) {
  const closeRef = useRef(null);
  const hydrated = useHydrated();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    // Lock scroll without shifting the page: compensate for the scrollbar width.
    const { body, documentElement } = document;
    const scrollbarW = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    body.style.overflow = 'hidden';
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-steel-navy/60 backdrop-blur-sm transition-opacity duration-[450ms] ease-out ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        style={{ transitionTimingFunction: EASE }}
        className={`absolute right-0 top-0 flex h-full w-[min(20rem,85vw)] flex-col bg-white shadow-card-hover transition-transform duration-[420ms] will-change-transform ${
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
            className="inline-flex h-11 w-11 items-center justify-center rounded text-steel-navy transition-colors hover:bg-concrete focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-blue"
          >
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3">
          <ul className="flex flex-col">
            {mainNav.map((item, i) => {
              const active = hydrated && isNavActive(pathname, item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    style={{ transitionDelay: open ? `${110 + i * 45}ms` : '0ms' }}
                    className={[
                      'block rounded px-3 py-3 font-display text-base font-semibold uppercase tracking-wide transition-all duration-300 ease-out',
                      active ? 'bg-concrete text-blueprint-blue' : 'text-steel-navy hover:bg-concrete',
                      open ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          style={{ transitionDelay: open ? '320ms' : '0ms' }}
          className={`space-y-3 border-t border-concrete-300 px-5 py-5 transition-all duration-300 ease-out ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center justify-center rounded bg-safety-orange px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-safety-orange-600"
          >
            Request a Quote
          </Link>
          <a
            href={telLink(primaryPhone.number)}
            className="flex items-center justify-center gap-2 rounded border border-concrete-300 px-5 py-3 font-mono text-sm font-medium text-steel-navy transition-colors hover:border-blueprint-blue"
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
