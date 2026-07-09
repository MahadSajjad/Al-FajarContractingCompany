import SEO from '../../components/seo/SEO';
import PageHeader from '../../components/sections/PageHeader';
import Section from '../../components/ui/Section';
import SectionHeading from '../../components/ui/SectionHeading';
import WhyUsSection from '../../components/sections/WhyUsSection';
import CredentialStrip from '../../components/sections/CredentialStrip';
import CTASection from '../../components/sections/CTASection';
import { getIcon } from '../../components/ui/iconMap';
import { about, leadership } from '../../data/about';
import { siteConfig, primaryLocation } from '../../config/siteConfig';

const direction = [
  { key: 'objective', label: 'Our Objective', text: about.objective },
  { key: 'mission', label: 'Our Mission', text: about.mission },
  { key: 'vision', label: 'Our Vision', text: about.vision },
];

const companyFacts = [
  { label: 'Legal Name', value: siteConfig.legalName },
  { label: 'Head Office', value: primaryLocation.city },
  { label: 'Operating In', value: siteConfig.locations.map((l) => l.city).join(', ') },
  { label: 'Sectors', value: 'Civil · MEP · Industrial · Oil & Gas' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Saudi Arabia General Contractor"
        description="Al Fajr Contracting Company is a trusted Saudi general contractor delivering civil, MEP, industrial and manpower solutions with a commitment to safety, quality and on-time delivery."
        path="/about"
      />

      <PageHeader
        eyebrow="Who We Are"
        title="Building trust, one project at a time"
        description="A trusted general contractor delivering high-quality construction and industrial services across Saudi Arabia."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story + company facts */}
      <Section tone="white" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Story"
              title="A trusted general contractor for the Kingdom"
            />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{about.intro}</p>
            <p className="mt-4 leading-relaxed text-slate-600">
              From civil and structural works to MEP, specialized systems, earthworks, finishing,
              equipment and manpower, we bring the full build under one accountable team — combining
              skilled construction delivery with reliable manpower and equipment to help clients
              build efficiently and operate productively.
            </p>
            <p
              className="mt-6 font-display text-xl text-blueprint-blue"
              dir="rtl"
              lang="ar"
            >
              {siteConfig.nameAr}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl bg-steel-navy p-8 text-white">
              <div className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-safety-orange">
                  Company Profile
                </p>
                <dl className="mt-6 divide-y divide-white/10">
                  {companyFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start justify-between gap-6 py-3.5">
                      <dt className="font-mono text-xs uppercase tracking-wide text-concrete-400">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-concrete-100">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 border-t border-white/10 pt-5 font-mono text-xs uppercase tracking-eyebrow text-safety-orange">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Objective / Mission / Vision */}
      <Section tone="concrete" spacing="lg">
        <SectionHeading
          align="center"
          eyebrow="Our Direction"
          title="Objective, mission & vision"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {direction.map((item) => {
            const Icon = getIcon(item.key);
            return (
              <div
                key={item.key}
                className="flex h-full flex-col rounded-xl border border-concrete-300 bg-white p-8 shadow-card"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-safety-orange/10 text-safety-orange ring-1 ring-inset ring-safety-orange/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 font-mono text-eyebrow uppercase tracking-eyebrow text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <WhyUsSection />

      <CredentialStrip tone="white" />

      {/* Leadership */}
      <Section tone="concrete">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind the work"
          description="Experienced leadership accountable for every project we take on."
        />
        <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {leadership.map((person) => {
            const Icon = getIcon('leadership');
            return (
              <div
                key={person.name}
                className="flex items-center gap-5 rounded-lg border border-concrete-300 bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-steel-navy text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-steel-navy">{person.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-safety-orange">
                    {person.role}
                  </p>
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
