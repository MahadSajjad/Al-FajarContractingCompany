import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';
import { mainNav } from '../../config/navigation';
import { serviceCategories } from '../../data/services';
import {
  siteConfig,
  primaryLocation,
  telLink,
  mailtoLink,
} from '../../config/siteConfig';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-steel-navy text-concrete-200">
      <div className="bg-blueprint-grid bg-grid">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-concrete-300">
              {siteConfig.shortDescription}
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-eyebrow text-safety-orange">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 font-display text-lg text-concrete-300" dir="rtl" lang="ar">
              {siteConfig.nameAr}
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-xs uppercase tracking-eyebrow text-concrete-400">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-concrete-200 transition-colors hover:text-safety-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-eyebrow text-concrete-400">
              Capabilities
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/services#${cat.slug}`}
                    className="text-concrete-200 transition-colors hover:text-safety-orange"
                  >
                    {cat.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-eyebrow text-concrete-400">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              {siteConfig.phones.map((p) => (
                <li key={p.number}>
                  <a
                    href={telLink(p.number)}
                    className="group flex items-start gap-3 text-concrete-200 transition-colors hover:text-safety-orange"
                  >
                    <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-safety-orange" aria-hidden="true" />
                    <span>
                      <span className="block font-mono">{p.display}</span>
                      <span className="block text-xs text-concrete-400">{p.label}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={mailtoLink(siteConfig.emails[0])}
                  className="flex items-start gap-3 break-all text-concrete-200 transition-colors hover:text-safety-orange"
                >
                  <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-safety-orange" aria-hidden="true" />
                  {siteConfig.emails[0]}
                </a>
              </li>
              <li className="flex items-start gap-3 text-concrete-300">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-safety-orange" aria-hidden="true" />
                {primaryLocation.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-concrete-400 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          {socials.length > 0 && (
            <ul className="flex items-center gap-3">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/15 text-concrete-200 transition-colors hover:border-safety-orange hover:text-safety-orange"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="font-mono">{siteConfig.locations.map((l) => l.city).join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
