import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

function LogoMark({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="40" height="40" rx="6" fill="#0E1C2B" />
      <rect x="8" y="26.5" width="24" height="2.5" rx="1.25" fill="#1E4E79" />
      <path d="M20 10 L30 25 H10 Z" fill="#EE6C12" />
      <path d="M20 17 L25.2 25 H14.8 Z" fill="#0E1C2B" />
    </svg>
  );
}

export default function Logo({ variant = 'dark', withLink = true, className = '' }) {
  const onDark = variant === 'light';
  const wordColor = onDark ? 'text-white' : 'text-steel-navy';
  const subColor = onDark ? 'text-concrete-300' : 'text-slate-500';

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold leading-none tracking-tight ${wordColor}`}>
          AL FAJR
        </span>
        <span className={`mt-1 font-mono text-[0.58rem] uppercase leading-none tracking-[0.22em] ${subColor}`}>
          Contracting Co.
        </span>
      </span>
    </span>
  );

  if (!withLink) return inner;

  return (
    <Link to="/" aria-label={`${siteConfig.name} — home`} className="inline-flex">
      {inner}
    </Link>
  );
}
