import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Reveals every [data-reveal] element as it scrolls into view (adds .is-visible).
// Re-runs on route change to catch newly-mounted (lazy) pages. Reduced-motion
// users get everything revealed immediately. SSR/no-JS safe (see index.css).
export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const reveal = (el) => el.classList.add('is-visible');

    // Reduced-motion or no IntersectionObserver support → reveal everything now.
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      document.querySelectorAll('[data-reveal]').forEach(reveal);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        }),
      // threshold 0 = fire as soon as any part enters; positive bottom margin
      // reveals elements ~140px BEFORE they scroll into view, so the transition
      // is already underway on arrival (no blank flash). Reliable for any size.
      { threshold: 0, rootMargin: '0px 0px 140px 0px' },
    );

    const raf = window.requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el));
    });

    return () => {
      window.cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
