import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import { serviceCategories, services } from '../../data/services';
import { siteConfig } from '../../config/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-steel-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-70" aria-hidden="true" />
      {/* warm accent glow, low and far — keeps the dark surface from going flat */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-safety-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Left — message */}
        <div className="lg:col-span-7">
          <Eyebrow tone="light">General Contracting · Industrial Services</Eyebrow>

          <h1 className="mt-6 font-display text-display-2xl font-extrabold leading-[1.02] text-white">
            Building, powering and maintaining{' '}
            <span className="text-safety-orange">Saudi Arabia.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-concrete-300">
            {siteConfig.name} delivers civil and industrial construction, MEP, manpower supply and
            equipment services across all over the Kingdom of Saudi Arabia — with a focus on safety, quality
            and on-time delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button to="/services" variant="outline-light" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-eyebrow text-concrete-400">
            <span className="text-safety-orange">{siteConfig.tagline}</span>
          </div>
        </div>

        {/* Right — engineered "spec sheet" capability card (no stock photo needed) */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-card-hover backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-eyebrow text-concrete-300">
                Scope of Work
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-concrete-400">
                <span className="h-2 w-2 rounded-full bg-safety-orange" aria-hidden="true" />
                {services.length} Services
              </span>
            </div>

            <ul className="divide-y divide-white/5">
              {serviceCategories.map((cat, i) => (
                <li key={cat.slug}>
                  <Link
                    to={`/services#${cat.slug}`}
                    className="group flex items-center justify-between py-3.5 transition-colors hover:text-safety-orange"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-safety-orange">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-base font-semibold text-white group-hover:text-safety-orange">
                        {cat.short}
                      </span>
                    </span>
                    <FiArrowUpRight
                      className="h-4 w-4 text-concrete-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-safety-orange"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-eyebrow text-concrete-400">
              <span>Region</span>
              <span className="text-concrete-200">Saudi Arabia</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
