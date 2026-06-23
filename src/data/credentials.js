// credentials.js — trust badges showing credential TYPES and ISSUERS only.
//
// IMPORTANT: do NOT publish full CR / VAT / licence numbers or any personal ID /
// national-address proof on public pages unless the client explicitly approves
// (README §Open items #5). These entries intentionally carry no numbers.
export const credentials = [
  {
    icon: 'cr-cert',
    title: 'Commercial Registration',
    issuer: 'Ministry of Commerce (KSA)',
    description: 'Registered commercial entity in the Kingdom of Saudi Arabia.',
  },
  {
    icon: 'vat',
    title: 'VAT Registered',
    issuer: 'ZATCA — Zakat, Tax and Customs Authority',
    description: 'Registered for Value Added Tax with ZATCA.',
  },
  {
    icon: 'transport-license',
    title: 'Road Freight Transport License',
    issuer: 'TGA — Transport General Authority',
    description: 'Licensed for road freight transport operations.',
  },
  {
    icon: 'national-address',
    title: 'National Address',
    issuer: 'Saudi National Address',
    description: 'Registered national address in Saudi Arabia.',
  },
];

export default credentials;
