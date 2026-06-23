import { cn } from '../../utils/cn';
import Eyebrow from './Eyebrow';

// Eyebrow + title + optional description, with alignment + dark/light tone.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark', // 'dark' = on light bg; 'light' = on dark bg
  as: TitleTag = 'h2',
  size = 'lg',
  className,
  children,
}) {
  const onDark = tone === 'light';
  const alignCls =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const titleSize =
    size === 'xl' ? 'text-display-xl' : size === 'md' ? 'text-display-md' : 'text-display-lg';

  return (
    <div className={cn('flex max-w-3xl flex-col', alignCls, className)}>
      {eyebrow && (
        <Eyebrow tone={onDark ? 'light' : 'accent'} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      {title && (
        <TitleTag
          className={cn('font-display font-bold', titleSize, onDark ? 'text-white' : 'text-steel-navy')}
        >
          {title}
        </TitleTag>
      )}
      {description && (
        <p className={cn('mt-4 text-lg leading-relaxed', onDark ? 'text-concrete-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
