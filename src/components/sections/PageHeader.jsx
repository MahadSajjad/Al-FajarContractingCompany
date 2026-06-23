import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import Breadcrumbs from './Breadcrumbs';

// Consistent inner-page hero band (steel-navy + blueprint grid).
export default function PageHeader({ eyebrow, title, description, breadcrumbs, align = 'left', children }) {
  const centered = align === 'center';
  return (
    <section className="relative overflow-hidden bg-steel-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-safety-orange/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className={`relative py-14 lg:py-20 ${centered ? 'text-center' : ''}`}>
        {breadcrumbs && (
          <div className={centered ? 'flex justify-center' : ''}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <Eyebrow tone="light" className={`mt-6 ${centered ? 'justify-center' : ''}`}>
            {eyebrow}
          </Eyebrow>
        )}
        <h1
          className={`mt-4 font-display text-display-xl font-bold text-white ${
            centered ? 'mx-auto max-w-3xl' : 'max-w-4xl'
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 text-lg leading-relaxed text-concrete-300 ${
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
            }`}
          >
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
