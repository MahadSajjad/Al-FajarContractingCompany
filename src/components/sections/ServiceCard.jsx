import { FiArrowRight } from 'react-icons/fi';
import Card from '../ui/Card';
import { getIcon } from '../ui/iconMap';

// Compact card for a single service (links to /services/:slug).
export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);
  return (
    <Card to={`/services/${service.slug}`} className="flex h-full flex-col">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-blueprint-blue/10 text-blueprint-blue ring-1 ring-inset ring-blueprint-blue/15">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-steel-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-blueprint-blue">
        Learn more
        <FiArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Card>
  );
}
