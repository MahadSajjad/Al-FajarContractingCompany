import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/seo/SEO';
import PageHeader from '../../components/sections/PageHeader';
import Section from '../../components/ui/Section';
import Eyebrow from '../../components/ui/Eyebrow';
import Figure from '../../components/sections/Figure';
import CTASection from '../../components/sections/CTASection';
import { cn } from '../../utils/cn';
import { sectors } from '../../data/sectors';
import { getServiceBySlug } from '../../data/services';
import { siteConfig } from '../../config/siteConfig';

export default function Sectors() {
  return (
    <>
      <SEO
        title="Sectors"
        description="Al Fajr Contracting serves residential, commercial, industrial and oil & gas sectors across Saudi Arabia — with the right teams, plant and standards for each."
        path="/sectors"
      />

      <PageHeader
        eyebrow="Capabilities"
        title="Built for demanding sectors"
        description="Residential, commercial, industrial and oil & gas — each backed by the right teams, equipment and safety standards."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Sectors' }]}
      />

      <Section tone="white" spacing="lg">
        <div className="space-y-20 lg:space-y-28">
          {sectors.map((sector, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={sector.slug}
                id={sector.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={cn(flip && 'lg:order-2')}>
                  <Figure
                    icon={sector.icon}
                    src={sector.image}
                    alt={`${sector.title} sector — ${siteConfig.name}`}
                    caption={sector.title}
                    ratio="aspect-[4/3]"
                  />
                </div>

                <div className={cn(flip && 'lg:order-1')}>
                  <Eyebrow>{`0${i + 1} · ${sector.tagline}`}</Eyebrow>
                  <h2 className="mt-4 font-display text-display-lg font-bold text-steel-navy">
                    {sector.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {sector.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {sector.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-safety-orange/10 text-safety-orange">
                          <FiCheck className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm text-slate-600">{cap}</span>
                      </li>
                    ))}
                  </ul>

                  {sector.relatedServices?.length > 0 && (
                    <div className="mt-7">
                      <p className="font-mono text-xs uppercase tracking-eyebrow text-slate-400">
                        Related services
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {sector.relatedServices.map((slug) => {
                          const svc = getServiceBySlug(slug);
                          if (!svc) return null;
                          return (
                            <Link
                              key={slug}
                              to={`/services/${slug}`}
                              className="inline-flex items-center gap-1.5 rounded-sm border border-concrete-300 bg-concrete px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-steel-navy transition-colors hover:border-blueprint-blue hover:text-blueprint-blue"
                            >
                              {svc.title}
                              <FiArrowRight className="h-3 w-3" aria-hidden="true" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
