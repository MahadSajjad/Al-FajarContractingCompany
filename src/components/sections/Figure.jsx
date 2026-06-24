import { useEffect, useRef, useState } from 'react';
import { getIcon } from '../ui/iconMap';
import { cn } from '../../utils/cn';

// Renders a real <img> when `src` is set, otherwise a branded icon tile.
// The placeholder is deliberately iconographic (not a fake photo) and carries a
// small mono caption so it reads as intentional, never as a broken image.
// When a real image is set, a shimmer skeleton shows until it loads.
export default function Figure({
  src,
  alt,
  icon = 'tools',
  caption,
  ratio = 'aspect-[16/10]',
  rounded = 'rounded-lg',
  className,
  tone = 'light', // 'light' (concrete) | 'dark' (navy)
}) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images may finish before hydration (onLoad never fires) — catch that.
  useEffect(() => {
    if (src && imgRef.current?.complete) setLoaded(true);
  }, [src]);

  if (src) {
    return (
      <div data-reveal="" className={cn('relative overflow-hidden bg-concrete', ratio, rounded, className)}>
        {!loaded && <div className="absolute inset-0 skeleton" aria-hidden="true" />}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-700',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
    );
  }

  const Icon = getIcon(icon);
  const dark = tone === 'dark';
  return (
    <div
      role="img"
      aria-label={alt}
      data-reveal=""
      className={cn(
        'relative flex flex-col items-center justify-center overflow-hidden border',
        dark ? 'border-white/10 bg-steel-navy-800' : 'border-concrete-300 bg-concrete',
        ratio,
        rounded,
        className,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-grid',
          dark ? 'bg-blueprint-grid' : 'bg-blueprint-grid-dark',
        )}
        aria-hidden="true"
      />
      <Icon
        className={cn('relative h-1/4 w-1/4 min-h-12 min-w-12', dark ? 'text-white/70' : 'text-blueprint-blue/70')}
        aria-hidden="true"
      />
      {caption && (
        <span
          className={cn(
            'relative mt-3 px-4 text-center font-mono text-[0.65rem] uppercase tracking-eyebrow',
            dark ? 'text-concrete-300' : 'text-slate-500',
          )}
        >
          {caption}
        </span>
      )}
      <span
        className="absolute right-3 top-3 h-2 w-2 rounded-full bg-safety-orange"
        aria-hidden="true"
      />
    </div>
  );
}
