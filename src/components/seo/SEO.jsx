import { Head } from 'vite-react-ssg';
import { siteConfig } from '../../config/siteConfig';

// NOTE: `Head` is vite-react-ssg's wrapper around react-helmet-async's Helmet,
// wired to the HelmetProvider vite-react-ssg mounts for both SSG collection and
// client navigation. Using it (rather than importing Helmet from a second copy
// of react-helmet-async) is what gets these tags into the static HTML.

// Per-page <head> via react-helmet-async. vite-react-ssg collects these tags
// into each route's static HTML at build time (verified in Phase 7).
export default function SEO({
  title,
  fullTitle,
  description,
  path = '',
  image,
  type = 'website',
  noindex = false,
  children,
}) {
  const computedTitle = fullTitle || (title ? `${title} | ${siteConfig.name}` : siteConfig.name);
  const desc = description || siteConfig.shortDescription;
  const canonical = `${siteConfig.url}${path}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${siteConfig.url}${image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;

  return (
    <Head>
      <html lang="en" />
      <title>{computedTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={computedTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={computedTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Head>
  );
}
