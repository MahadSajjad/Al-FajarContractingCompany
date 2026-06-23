import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

// Breadcrumb trail. `items`: [{ label, to? }] — the last item is the current
// page (no `to`). Also the data source for BreadcrumbList JSON-LD (Phase 7).
export default function Breadcrumbs({ items = [], tone = 'dark' }) {
  if (!items.length) return null;
  const onDark = tone === 'dark';
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide ${
          onDark ? 'text-concrete-400' : 'text-slate-500'
        }`}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.to && !last ? (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-safety-orange"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={onDark ? 'text-concrete-200' : 'text-steel-navy'} aria-current="page">
                  {item.label}
                </span>
              )}
              {!last && <FiChevronRight className="h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
