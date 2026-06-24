import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On route change: scroll to the top, OR — when the URL has a #hash — smooth-
// scroll to that element. Retries briefly so it still works when the target
// lives in a lazy-loaded route that hasn't mounted yet. scroll-margin-top on the
// targets keeps them clear of the sticky header.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let frame;
      let tries = 0;
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tries < 12) {
          tries += 1;
          frame = window.setTimeout(scrollToTarget, 70);
        }
      };
      frame = window.requestAnimationFrame(scrollToTarget);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(frame);
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);

  return null;
}
