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

  locations: [
    {
      city: 'Riyadh',
      label: 'Head Office',
      address: 'HPHR+CW9, An Nasr Rd, Industrial District, Riyadh 14714, Saudi Arabia',
      primary: true,
      mapQuery: 'HPHR+CW9 An Nasr Rd, Industrial District, Riyadh 14714, Saudi Arabia',
      // From the Google Maps pin (confirmed by client).
      geo: { lat: 24.5785372, lng: 46.7423407 },
    },
  ],

  // Areas actively served (used for SEO areaServed + copy).
  areasServed: ['Riyadh', 'Saudi Arabia'],

  // Social profiles — placeholders; fill if/when client provides URLs.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
  },

  // Open Graph / share image — branded placeholder (src/config/theme.js palette,
  // same "spec-sheet" language as the hero). Swap for real project photography
  // via the same path whenever the client supplies it.
  ogImage: '/og-image.png',
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
