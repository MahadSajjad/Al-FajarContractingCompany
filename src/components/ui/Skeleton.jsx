import { cn } from '../../utils/cn';

// Shimmer skeleton block (see `.skeleton` in index.css). Decorative only.
export default function Skeleton({ className, rounded = 'rounded' }) {
  return <div className={cn('skeleton', rounded, className)} aria-hidden="true" />;
}
