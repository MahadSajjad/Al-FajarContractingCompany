/**
 * siteConfig.js — global company facts consumed across the site.
 * Edit company details HERE; nothing below is hardcoded in components.
 *
 * NOTE: canonical brand spelling is "Al Fajr" (not "Al Fajar").
 * Items marked CONFIRM require client sign-off before launch (see README §Open items).
 */
export const siteConfig = {
  name: 'Al Fajr Contracting Company',
  legalName: 'Al Fajr Contracting Company',
  nameAr: 'شركة الفجر للمقاولات',
  tagline: 'Together We Can',
  shortDescription:
    'General contracting and industrial services across Saudi Arabia — civil & MEP works, manpower supply and equipment/fleet solutions.',
  url: 'https://alfajrcontractingco.com',

  phones: [
    {
      label: 'General Manager — Hayat Khan',
      number: '+966570209993',
      display: '057 020 9993',
    },
    {
      label: 'Representative — Zain Khan',
      number: '+966545022317',
      display: '054 502 2317',
    },
  ],

  // CONFIRM with client which line is the monitored WhatsApp number.
  whatsapp: '+966570209993',

  emails: ['malik.hayat@alfajrcontractingco.com', 'zain.khan@alfajrcontractingco.com'],

  // CONFIRM canonical published office(s) — sources disagree (README §Open items #2).
  locations: [
    {
      city: 'Jeddah',
      label: 'Head Office',
      address: 'Basma Tower, Al-Aziziya, Jeddah, Saudi Arabia',
      primary: true,
      // CONFIRM exact coordinates for the map embed.
      mapQuery: 'Basma Tower, Al-Aziziya, Jeddah, Saudi Arabia',
    },
    {
      city: 'Riyadh',
      label: 'Office',
      address: 'Al Sulay District, Riyadh, Saudi Arabia',
      mapQuery: 'Al Sulay District, Riyadh, Saudi Arabia',
    },
    {
      city: 'Madinah',
      label: 'Office',
      address: 'Al Madinah, Saudi Arabia',
      mapQuery: 'Al Madinah, Saudi Arabia',
    },
  ],

  // Areas actively served (used for SEO areaServed + copy).
  areasServed: ['Jeddah', 'Riyadh', 'Madinah', 'Saudi Arabia'],

  // Social profiles — placeholders; fill if/when client provides URLs.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
  },

  // Open Graph / share image (place a real 1200x630 image at this path).
  ogImage: '/og-image.jpg',
};

/* ------------------------ derived helpers ------------------------ */

export const primaryPhone = siteConfig.phones[0];
export const primaryEmail = siteConfig.emails[0];
export const primaryLocation =
  siteConfig.locations.find((l) => l.primary) ?? siteConfig.locations[0];

/** wa.me deep link for the floating WhatsApp button / click-to-chat. */
export const whatsappLink = (() => {
  const digits = siteConfig.whatsapp.replace(/[^\d]/g, '');
  const text = encodeURIComponent(
    `Hello ${siteConfig.name}, I'd like to enquire about your contracting services.`,
  );
  return `https://wa.me/${digits}?text=${text}`;
})();

/** tel: / mailto: link helpers. */
export const telLink = (number) => `tel:${number.replace(/\s/g, '')}`;
export const mailtoLink = (email) => `mailto:${email}`;

export default siteConfig;
