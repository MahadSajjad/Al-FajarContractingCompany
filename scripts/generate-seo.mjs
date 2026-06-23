// Generates public/sitemap.xml, public/robots.txt and public/llms.txt from the
// site data so they never drift. Run via the `prebuild` npm lifecycle.
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { siteConfig } from '../src/config/siteConfig.js';
import { services, servicesGroupedByCategory } from '../src/data/services.js';
import { sectors } from '../src/data/sectors.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');
mkdirSync(publicDir, { recursive: true });

const BASE = siteConfig.url.replace(/\/+$/, '');
const today = new Date().toISOString().split('T')[0];

/* ----------------------------- sitemap.xml ----------------------------- */
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/sectors', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/clients', priority: '0.6', changefreq: 'monthly' },
];
const serviceRoutes = services.map((s) => ({
  path: `/services/${s.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const urls = [...staticRoutes, ...serviceRoutes]
  .map(
    ({ path, priority, changefreq }) =>
      `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8');

/* ----------------------------- robots.txt ----------------------------- */
const robots = `# robots.txt — ${siteConfig.name}
User-agent: *
Allow: /

# AI answer engines
User-agent: GPTBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;
writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf8');

/* ------------------------------ llms.txt ------------------------------ */
const serviceList = servicesGroupedByCategory
  .map((cat) => {
    const items = cat.services
      .map((s) => `- [${s.title}](${BASE}/services/${s.slug}): ${s.excerpt}`)
      .join('\n');
    return `### ${cat.name}\n${items}`;
  })
  .join('\n\n');

const sectorList = sectors
  .map((s) => `- [${s.title}](${BASE}/sectors#${s.slug}): ${s.excerpt}`)
  .join('\n');

const offices = siteConfig.locations.map((l) => `${l.city} (${l.label})`).join(', ');

const llms = `# ${siteConfig.name}

> ${siteConfig.shortDescription} Tagline: "${siteConfig.tagline}".

${siteConfig.name} (Arabic: ${siteConfig.nameAr}) is a Saudi Arabia–based general contracting and
industrial-services company. We deliver civil and industrial construction, MEP, specialized
systems, earthworks, finishing, equipment/fleet and manpower solutions across the Kingdom of
Saudi Arabia. We are a licensed and registered entity (Commercial Registration, VAT/ZATCA,
TGA road-freight licence, Saudi National Address).

## Key pages
- [Home](${BASE}/)
- [Services](${BASE}/services)
- [Sectors](${BASE}/sectors)
- [About](${BASE}/about)
- [Clients & Partners](${BASE}/clients)
- [Contact](${BASE}/contact)

## Services (${services.length} total)

${serviceList}

## Sectors
${sectorList}

## Contact
- Phone: ${siteConfig.phones.map((p) => `${p.display} (${p.label})`).join('; ')}
- WhatsApp: ${siteConfig.whatsapp}
- Email: ${siteConfig.emails.join(', ')}
- Offices: ${offices}
- Website: ${BASE}
`;
writeFileSync(resolve(publicDir, 'llms.txt'), llms, 'utf8');

console.log(
  `[seo] generated sitemap.xml (${staticRoutes.length + serviceRoutes.length} urls), robots.txt, llms.txt`,
);
