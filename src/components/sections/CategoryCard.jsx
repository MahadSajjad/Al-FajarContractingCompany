import { FiArrowRight } from 'react-icons/fi';
import Card from '../ui/Card';
import { getIcon } from '../ui/iconMap';

// Service-category card (links to the category anchor on /services).
export default function CategoryCard({ category, index }) {
  const Icon = getIcon(category.icon);
  const count = category.services?.length;
  return (
    <Card to={`/services#${category.slug}`} className="flex h-full flex-col">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-safety-orange/10 text-safety-orange ring-1 ring-inset ring-safety-orange/20">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        {index != null && (
          <span className="font-mono text-xs text-slate-400">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-steel-navy">{category.short}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{category.blurb}</p>
      <div className="mt-5 flex items-center justify-between border-t border-concrete-300 pt-4">
        {count != null && (
          <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
            {count} {count === 1 ? 'Service' : 'Services'}
          </span>
        )}
        <FiArrowRight
          className="h-5 w-5 text-safety-orange transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Card>
  );
}
