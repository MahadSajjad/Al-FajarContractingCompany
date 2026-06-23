import { cn } from '../../utils/cn';

const sizes = {
  narrow: 'max-w-3xl',
  default: 'max-w-container',
  wide: 'max-w-[88rem]',
};

// Horizontal content container with responsive gutters. The single source of
// the site's max-width + page padding.
export default function Container({ as: Tag = 'div', size = 'default', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', sizes[size], className)} {...props}>
      {children}
    </Tag>
  );
}
