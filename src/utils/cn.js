// Tiny className combiner: flattens, drops falsy values, joins with spaces.
// Listed in .prettierrc `tailwindFunctions` so Tailwind classes inside cn(...)
// are auto-sorted.
export function cn(...args) {
  return args
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export default cn;
