// JSON-LD builders. Pure functions returning schema.org objects, rendered by
// the StructuredData component. Keep these in sync with siteConfig + data.
import { siteConfig, primaryPhone, primaryEmail, primaryLocation } from './siteConfig';
import { servicesGroupedByCategory } from '../data/services';

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const sameAs = Object.values(siteConfig.social).filter(Boolean);

const areaServed = siteConfig.areasServed.map((name) => ({
  '@type': 'AdministrativeArea',
  name,
}));

// GeneralContractor (a LocalBusiness subtype) — the primary entity.
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.nameAr,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.shortDescription,
    slogan: siteConfig.tagline,
    telephone: primaryPhone.number,
    email: primaryEmail,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: primaryLocation.address,
      addressLocality: primaryLocation.city,
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: primaryLocation.geo.lat,
      longitude: primaryLocation.geo.lng,
    },
    areaServed,
    knowsLanguage: ['en', 'ar'],
    ...(sameAs.length ? { sameAs } : {}),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Contracting & Industrial Services',
      itemListElement: servicesGroupedByCategory.map((category) => ({
        '@type': 'OfferCatalog',
        name: category.name,
        itemListElement: category.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            url: `${siteConfig.url}/services/${service.slug}`,
          },
        })),
      })),
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  };
}

export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: { '@type': 'GeneralContractor', '@id': ORG_ID, name: siteConfig.name },
    areaServed,
  };
}

// items: [{ question, answer }].
export function getFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// items: [{ label, to? }]. `currentUrl` completes the last (current) crumb.
export function getBreadcrumbSchema(items, currentUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const isLast = i === items.length - 1;
      const url = item.to ? `${siteConfig.url}${item.to}` : isLast ? currentUrl : undefined;
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        ...(url ? { item: url } : {}),
      };
    }),
  };
}
