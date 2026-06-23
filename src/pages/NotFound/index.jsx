import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-steel-navy text-white">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-60" aria-hidden="true" />
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-eyebrow text-safety-orange">
          Error 404
        </p>
        <p className="mt-6 font-display text-[6rem] font-extrabold leading-none text-white sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-display-md text-white">Page not found</h1>
        <p className="mt-4 max-w-md text-concrete-300">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded bg-safety-orange px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-safety-orange-600"
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
