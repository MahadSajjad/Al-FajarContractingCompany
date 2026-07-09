import { useParams, Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import { getServiceSchema } from '../../config/structuredData';
import PageHeader from '../../components/sections/PageHeader';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Figure from '../../components/sections/Figure';
import ServiceCard from '../../components/sections/ServiceCard';
import CTASection from '../../components/sections/CTASection';
import { getIcon } from '../../components/ui/iconMap';
import { getServiceBySlug, getCategory, getServicesByCategory } from '../../data/services';
import { getSectorsByService } from '../../data/sectors';
import { siteConfig, primaryPhone, telLink, whatsappLink } from '../../config/siteConfig';

function ServiceNotFound() {
  return (
    <Section tone="white" spacing="lg">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-sm uppercase tracking-eyebrow text-safety-orange">Not found</p>
        <h1 className="mt-4 font-display text-display-md text-steel-navy">Service not found</h1>
        <p className="mt-3 text-slate-600">
          That service may have moved. Browse our full list of services instead.
        </p>
        <Button to="/services" variant="primary" className="mt-8">
          View all services
        </Button>
      </div>
    </Section>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <SEO title="Service not found" path={`/services/${slug ?? ''}`} noindex />
        <ServiceNotFound />
      </>
    );
  }

  const category = getCategory(service.category);
  const Icon = getIcon(service.icon);
  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);
  const usedInSectors = getSectorsByService(service.slug);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        type="article"
        image={service.image}
      />
      <StructuredData data={getServiceSchema(service)} />

      <PageHeader
        eyebrow={category?.name}
        title={service.title}
        description={service.excerpt}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      <Section tone="white" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          {/* Main */}
          <div className="lg:col-span-2">
            <Figure
              icon={service.icon}
              src={service.image}
              alt={`${service.title} — ${siteConfig.name}`}
              caption={service.title}
              ratio="aspect-[16/9]"
            />

            <h2 className="mt-10 font-display text-display-md text-steel-navy">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.description}</p>

            <h3 className="mt-10 font-display text-xl font-bold text-steel-navy">
              What&apos;s included
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-safety-orange/10 text-safety-orange">
                    <FiCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-slate-600">{bullet}</span>
                </li>
              ))}
            </ul>

            {usedInSectors.length > 0 && (
              <div className="mt-10">
                <p className="font-mono text-xs uppercase tracking-eyebrow text-slate-400">
                  Used across sectors
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {usedInSectors.map((sector) => (
                    <Link
                      key={sector.slug}
                      to={`/sectors#${sector.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-concrete-300 bg-concrete px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-steel-navy transition-colors hover:border-blueprint-blue hover:text-blueprint-blue"
                    >
                      {sector.title}
                      <FiArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-blueprint-blue hover:text-safety-orange"
              >
                <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
                All services
              </Link>
            </div>
          </div>

          {/* Sidebar quote card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 overflow-hidden rounded-xl bg-steel-navy p-7 text-white">
              <div className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-60" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-safety-orange/15 text-safety-orange">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 font-mono text-eyebrow uppercase tracking-eyebrow text-concrete-400">
                  {category?.short}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Need {service.title.toLowerCase()}?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-300">
                  Tell us about your project and we&apos;ll get back to you with the right team and a
                  clear plan.
                </p>

                <div className="mt-6 space-y-3">
                  <Button to="/contact" variant="primary" block>
                    Request a Quote
                  </Button>
                  <Button
                    href={telLink(primaryPhone.number)}
                    variant="outline-light"
                    block
                    icon={<FiPhone className="h-4 w-4" aria-hidden="true" />}
                  >
                    {primaryPhone.display}
                  </Button>
                  <Button
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                    block
                    icon={<FaWhatsapp className="h-4 w-4" aria-hidden="true" />}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="concrete">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-display-md text-steel-navy">Related services</h2>
            <Link
              to={`/services#${category?.slug}`}
              className="shrink-0 font-mono text-xs uppercase tracking-wide text-blueprint-blue hover:text-safety-orange"
            >
              View {category?.short} →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      )}

      <CTASection title={`Let's plan your ${service.title.toLowerCase()}.`} />
    </>
  );
}
