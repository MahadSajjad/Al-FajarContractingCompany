import SEO from '../../components/seo/SEO';
import PageHeader from '../../components/sections/PageHeader';
import Section from '../../components/ui/Section';
import CTASection from '../../components/sections/CTASection';
import ServiceCard from '../../components/sections/ServiceCard';
import { getIcon } from '../../components/ui/iconMap';
import { servicesGroupedByCategory, services } from '../../data/services';

export default function Services() {
  return (
    <>
      <SEO
        title="Contracting & Industrial Services in Saudi Arabia"
        description={`Explore ${services.length} contracting and industrial services from Al Fajr — civil, MEP, specialized systems, earthworks, finishing, equipment and manpower across Saudi Arabia.`}
        path="/services"
      />

      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description={`One accountable contractor across the whole build — ${services.length} services spanning civil works, MEP, specialized systems, earthworks, finishing, equipment and manpower.`}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* Category jump-nav */}
      <div className="sticky top-16 z-30 border-b border-concrete-300 bg-white/95 backdrop-blur lg:top-20">
        <div className="container-page flex gap-2 overflow-x-auto py-3">
          {servicesGroupedByCategory.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="whitespace-nowrap rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-wide text-slate-600 transition-colors hover:bg-concrete hover:text-blueprint-blue"
            >
              {cat.short}
            </a>
          ))}
        </div>
      </div>

      <Section tone="white" spacing="lg">
        <div className="space-y-16 lg:space-y-20">
          {servicesGroupedByCategory.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div key={category.slug} id={category.slug} className="scroll-mt-32">
                <div className="flex flex-col gap-4 border-b border-concrete-300 pb-6 sm:flex-row sm:items-start">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-safety-orange/10 text-safety-orange ring-1 ring-inset ring-safety-orange/20">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h2 className="font-display text-display-md font-bold text-steel-navy">
                        {category.name}
                      </h2>
                      <span className="font-mono text-xs uppercase tracking-wide text-slate-400">
                        {category.services.length} services
                      </span>
                    </div>
                    <p className="mt-2 max-w-3xl text-slate-600">{category.blurb}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
