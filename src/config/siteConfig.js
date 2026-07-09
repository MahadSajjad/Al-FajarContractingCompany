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
    }
  ],

  whatsapp: '+966570209993',

  emails: ['malik.hayat@alfajrcontractingco.com',],

  locations: [
    {
      city: 'Riyadh',
      label: 'Head Office',
      address: 'HPHR+CW9, An Nasr Rd, Industrial District, Riyadh 14714, Saudi Arabia',
      primary: true,
      mapQuery: 'HPHR+CW9 An Nasr Rd, Industrial District, Riyadh 14714, Saudi Arabia',
      geo: { lat: 24.5785372, lng: 46.7423407 },
    },
  ],

  areasServed: ['Riyadh', 'Saudi Arabia'],

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
  },
  ogImage: '/og-image.png',
};

export const primaryPhone = siteConfig.phones[0];
export const primaryEmail = siteConfig.emails[0];
export const primaryLocation =
  siteConfig.locations.find((l) => l.primary) ?? siteConfig.locations[0];

export const whatsappLink = (() => {
  const digits = siteConfig.whatsapp.replace(/[^\d]/g, '');
  const text = encodeURIComponent(
    `Hello ${siteConfig.name}, I'd like to enquire about your contracting services.`,
  );
  return `https://wa.me/${digits}?text=${text}`;
})();

export const telLink = (number) => `tel:${number.replace(/\s/g, '')}`;
export const mailtoLink = (email) => `mailto:${email}`;

export default siteConfig;