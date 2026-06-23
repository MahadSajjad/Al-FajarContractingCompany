import { cn } from '../../utils/cn';

// Signature spec-sheet eyebrow: tracked uppercase mono with a thin leading rule.
const tones = {
  accent: { text: 'text-safety-orange', rule: 'bg-safety-orange' },
  blue: { text: 'text-blueprint-blue', rule: 'bg-blueprint-blue' },
  muted: { text: 'text-slate-500', rule: 'bg-slate-300' },
  light: { text: 'text-safety-orange', rule: 'bg-safety-orange/70' },
};

export default function Eyebrow({ as: Tag = 'p', tone = 'accent', rule = true, className, children }) {
  const t = tones[tone] ?? tones.accent;
  return (
    <Tag
      className={cn(
        'inline-flex items-center gap-3 font-mono text-eyebrow font-medium uppercase',
        t.text,
        className,
      )}
    >
      {rule && <span className={cn('inline-block h-px w-8 shrink-0', t.rule)} aria-hidden="true" />}
      {children}
    </Tag>
  );
}
