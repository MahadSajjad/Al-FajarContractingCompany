import { getIcon } from '../ui/iconMap';
import { cn } from '../../utils/cn';

// Why-Us feature card. `surface` controls light/dark text for the band it sits on.
export default function FeatureCard({ feature, index, surface = 'light' }) {
  const Icon = getIcon(feature.icon);
  const dark = surface === 'dark';
  return (
    <div
      data-reveal=""
      style={index != null ? { '--reveal-delay': `${(index % 3) * 70}ms` } : undefined}
      className={cn(
        'relative h-full rounded-lg border p-6 lg:p-7',
        dark ? 'border-white/10 bg-white/[0.03]' : 'border-concrete-300 bg-white shadow-card',
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-md text-safety-orange',
            dark ? 'bg-safety-orange/15' : 'bg-safety-orange/10 ring-1 ring-inset ring-safety-orange/20',
          )}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {index != null && (
          <span className={cn('font-mono text-xs', dark ? 'text-white/30' : 'text-slate-300')}>
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className={cn('mt-5 font-display text-lg font-bold', dark ? 'text-white' : 'text-steel-navy')}>
        {feature.title}
      </h3>
      <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-concrete-300' : 'text-slate-600')}>
        {feature.description}
      </p>
    </div>
  );
}
