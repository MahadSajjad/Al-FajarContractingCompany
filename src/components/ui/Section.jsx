import { cn } from '../../utils/cn';
import Container from './Container';

// Background tones. `grid` and `navy` are dark surfaces (light text); the
// blueprint measured-grid is applied to `grid` as the signature dark band.
const tones = {
  white: 'bg-white text-slate-600',
  concrete: 'bg-concrete text-slate-600',
  navy: 'bg-steel-navy text-concrete-200',
  grid: 'bg-steel-navy text-concrete-200',
};

const spacings = {
  none: '',
  sm: 'py-12 lg:py-16',
  default: 'py-16 lg:py-24',
  lg: 'py-20 lg:py-32',
};

// Vertical section band: consistent rhythm + optional dark/grid surface.
// Renders an inner Container by default (`container={false}` for full-bleed).
export default function Section({
  as: Tag = 'section',
  tone = 'white',
  spacing = 'default',
  container = true,
  containerSize = 'default',
  id,
  className,
  innerClassName,
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
      className={cn('relative', tones[tone], spacings[spacing], className)}
      {...props}
    >
      {tone === 'grid' && (
        <div
          className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-60"
          aria-hidden="true"
        />
      )}
      {container ? (
        <Container size={containerSize} className={cn('relative', innerClassName)}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  );
}
