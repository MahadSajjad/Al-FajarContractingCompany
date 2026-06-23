import { FiArrowRight } from 'react-icons/fi';
import Card from '../ui/Card';
import { getIcon } from '../ui/iconMap';

// Sector capability card (links to the sector anchor on /sectors).
export default function SectorCard({ sector, index }) {
  const Icon = getIcon(sector.icon);
  return (
    <Card to={`/sectors#${sector.slug}`} className="flex h-full gap-5">
      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-steel-navy text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <div className="flex flex-1 flex-col">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-xl font-bold text-steel-navy">{sector.title}</h3>
          {index != null && (
            <span className="font-mono text-xs text-slate-400">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{sector.excerpt}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-safety-orange">
          Explore sector
          <FiArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Card>
  );
}
