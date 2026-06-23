import { useEffect, useState } from 'react';

// Returns false during SSR and the client's first (hydration) render, then true
// after mount. Use it to gate client-only UI (e.g. active-nav highlighting)
// so the hydrated markup matches the server and React doesn't bail hydration.
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

export default useHydrated;
