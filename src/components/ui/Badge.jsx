import { cn } from '../../utils/cn';

const tones = {
  navy: 'bg-steel-navy/5 text-steel-navy ring-1 ring-inset ring-steel-navy/10',
  blue: 'bg-blueprint-blue/10 text-blueprint-blue ring-1 ring-inset ring-blueprint-blue/15',
  orange: 'bg-safety-orange/10 text-safety-orange-700 ring-1 ring-inset ring-safety-orange/20',
  light: 'bg-white/10 text-white ring-1 ring-inset ring-white/20',
  solid: 'bg-safety-orange text-white',
};

// Small squared label/tag in mono — the "spec label" device.
export default function Badge({ tone = 'navy', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wide',
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
