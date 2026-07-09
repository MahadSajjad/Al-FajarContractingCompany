import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/seo/SEO';
import PageHeader from '../../components/sections/PageHeader';
import Section from '../../components/ui/Section';
import ContactForm from '../../components/sections/ContactForm';
import { getIcon } from '../../components/ui/iconMap';
import {
  siteConfig,
  primaryLocation,
  telLink,
  mailtoLink,
  whatsappLink,
} from '../../config/siteConfig';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Al Fajr Contracting Company for civil, industrial, MEP, manpower and equipment services. Call, WhatsApp or request a quote — head office in Riyadh, serving projects across Saudi Arabia."
        path="/contact"
      />

      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about your project"
        description="Request a quote or ask a question — our team will get back to you with the right people, plant and plan."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Section tone="white" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-concrete-300 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-display text-display-md text-steel-navy">Request a quote</h2>
              <p className="mt-2 text-slate-600">
                Tell us what you need. Fields marked optional can be left blank.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Direct contact methods */}
          <aside className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl bg-steel-navy p-7 text-white sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-safety-orange">
                  Reach us directly
                </p>
                <h2 className="mt-3 font-display text-xl font-bold text-white">
                  Prefer to call or message?
                </h2>

                <ul className="mt-6 space-y-5">
                  {siteConfig.phones.map((p) => (
                    <li key={p.number}>
                      <a
                        href={telLink(p.number)}
                        className="group flex items-start gap-4 transition-colors hover:text-safety-orange"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-safety-orange">
                          <FiPhone className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-mono text-base text-white group-hover:text-safety-orange">
                            {p.display}
                          </span>
                          <span className="block text-xs text-concrete-400">{p.label}</span>
                        </span>
                      </a>
                    </li>
                  ))}

                  <li>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 transition-colors hover:text-safety-orange"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#25D366]/20 text-[#25D366]">
                        <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-base text-white group-hover:text-safety-orange">
                          Chat on WhatsApp
                        </span>
                        <span className="block text-xs text-concrete-400">
                          Fast replies during business hours
                        </span>
                      </span>
                    </a>
                  </li>

                  {siteConfig.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={mailtoLink(email)}
                        className="group flex items-start gap-4 transition-colors hover:text-safety-orange"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-safety-orange">
                          <FiMail className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="block break-all text-sm text-white group-hover:text-safety-orange">
                          {email}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5 text-sm text-concrete-300">
                  <FiClock className="h-5 w-5 shrink-0 text-safety-orange" aria-hidden="true" />
                  <span>Sun–Thu, 8:00am – 6:00pm (AST)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Offices + map */}
      <Section tone="concrete" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-safety-orange">
              Our Offices
            </p>
            <h2 className="mt-3 font-display text-display-md text-steel-navy">
              Operating across the Kingdom
            </h2>
            <ul className="mt-8 space-y-4">
              {siteConfig.locations.map((loc) => {
                const MapIcon = getIcon('national-address');
                return (
                  <li
                    key={`${loc.city}-${loc.label}`}
                    className="flex items-start gap-4 rounded-lg border border-concrete-300 bg-white p-5 shadow-card"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blueprint-blue/10 text-blueprint-blue">
                      <FiMapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-steel-navy">
                          {loc.city}
                        </h3>
                        <span className="font-mono text-xs uppercase tracking-wide text-safety-orange">
                          {loc.label}
                        </span>
                        {loc.primary && <MapIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">{loc.address}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 font-mono text-xs uppercase tracking-wide text-slate-400">
              Office locations are being confirmed for launch.
            </p>
          </div>

          <div className="min-h-[22rem] overflow-hidden rounded-xl border border-concrete-300 shadow-card">
            <iframe
              title={`${siteConfig.name} — ${primaryLocation.city} office location`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                primaryLocation.mapQuery,
              )}&z=13&output=embed`}
              className="h-full min-h-[22rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
