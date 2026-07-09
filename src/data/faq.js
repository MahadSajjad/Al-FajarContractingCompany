// faq.js — GEO-facing FAQ content. Answers are extractable plain text (native
// <details>/<summary>, no JS needed to read them) and every fact here is
// already published elsewhere on the site (credentials.js, siteConfig.js,
// services.js, sectors.js) — this file restates it consistently, it doesn't
// introduce anything new. Keep it that way: don't add a claim here that
// isn't backed by another data file.
import { siteConfig, primaryLocation } from '../config/siteConfig';
import { services, serviceCategories } from './services';
import { sectors } from './sectors';

export const faqs = [
  {
    question: 'What areas of Saudi Arabia does Al Fajr Contracting serve?',
    answer: `${siteConfig.name} is headquartered in ${primaryLocation.city} and operates across Saudi Arabia, delivering civil, MEP, industrial and manpower services throughout the Kingdom.`,
  },
  {
    question: 'Does Al Fajr Contracting rent out construction equipment?',
    answer:
      'Yes. Equipment rental and contract hire, dump truck rental and on-site diesel supply are all available through the Equipment & Fleet services, with or without operators.',
  },
  {
    question: 'Is Al Fajr Contracting a licensed and registered company?',
    answer:
      'Yes. Al Fajr Contracting is a registered commercial entity with the Ministry of Commerce, VAT-registered with ZATCA, holds a road freight transport licence from the Transport General Authority (TGA), and has a registered Saudi National Address.',
  },
  {
    question: 'What services does Al Fajr Contracting offer?',
    answer: `${services.length} services across ${serviceCategories.length} categories: ${serviceCategories.map((c) => c.name).join(', ')}.`,
  },
  {
    question: 'Does Al Fajr Contracting supply manpower separately from construction projects?',
    answer:
      'Yes. Manpower Supply is offered as a standalone service — skilled and general personnel that can scale up or down independent of a full contracting scope.',
  },
  {
    question: 'What sectors does Al Fajr Contracting work in?',
    answer: `${sectors.map((s) => s.title).join(', ')} — each backed by the relevant teams, plant and safety standards.`,
  },
  {
    question: 'How can I request a quote from Al Fajr Contracting?',
    answer:
      'Call, WhatsApp or use the contact form on the Contact page, and the team will follow up with the right people, plant and a clear plan for your project.',
  },
];

export default faqs;
