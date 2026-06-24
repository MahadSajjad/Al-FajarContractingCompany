import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

// Surface card. Polymorphic (Link / a / div). Subtle lift on hover when
// interactive. Squared-ish corners to stay industrial.
export default function Card({
  to,
  href,
  hover = true,
  padded = true,
  className,
  children,
  ...props
}) {
  const interactive = Boolean(to || href);
  const classes = cn(
    'group relative block rounded-lg border border-concrete-300 bg-white shadow-card',
    padded && 'p-6 lg:p-7',
    (hover || interactive) &&
      'transition-all duration-300 hover:-translate-y-1 hover:border-concrete-400 hover:shadow-card-hover',
    interactive && 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-blue focus-visible:ring-offset-2',
    className,
  );

  if (to) {
    return (
      <Link to={to} data-reveal="" className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} data-reveal="" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <div data-reveal="" className={classes} {...props}>
      {children}
    </div>
  );
}
