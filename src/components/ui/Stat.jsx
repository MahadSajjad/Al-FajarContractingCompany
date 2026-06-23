import { cn } from '../../utils/cn';

// Spec-sheet stat: big display value over a tracked mono label.
// Honest by default — pass verifiable facts, not invented counters.
export default function Stat({ value, label, tone = 'dark', align = 'left', className }) {
  const onDark = tone === 'light';
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <div
        className={cn(
          'font-display text-3xl font-extrabold leading-none tracking-tight md:text-4xl',
          onDark ? 'text-white' : 'text-steel-navy',
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          'mt-3 font-mono text-xs uppercase leading-snug tracking-wide',
          onDark ? 'text-concrete-300' : 'text-slate-500',
        )}
      >
        {label}
      </div>
    </div>
  );
}
