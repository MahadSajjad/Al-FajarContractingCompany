import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const variants = {
  // Accent CTA — safety orange. Reserve for the primary action on a view.
  primary: 'bg-safety-orange text-white hover:bg-safety-orange-600 active:bg-safety-orange-700',
  // Solid dark.
  secondary: 'bg-steel-navy text-white hover:bg-steel-navy-800 active:bg-steel-navy-950',
  // Outline on light surfaces.
  outline:
    'border border-steel-navy/20 bg-transparent text-steel-navy hover:border-steel-navy/50 hover:bg-concrete',
  // Outline on dark surfaces.
  'outline-light': 'border border-white/30 bg-transparent text-white hover:bg-white/10',
  // Quiet text button.
  ghost: 'bg-transparent text-blueprint-blue hover:bg-blueprint-blue/5',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-sm md:text-base',
};

// Polymorphic button: renders a router <Link> (to), an <a> (href), or a
// <button> (default). Industrial squared corners, display font, uppercase.
export default function Button({
  to,
  href,
  type,
  variant = 'primary',
  size = 'md',
  block = false,
  icon,
  iconRight,
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-display font-bold uppercase tracking-wide transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-blue focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    block && 'w-full',
    className,
  );

  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} className={classes} {...props}>
      {content}
    </button>
  );
}
