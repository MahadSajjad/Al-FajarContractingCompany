// clients.js — Clients & Partners. HANDLE WITH CARE.
//
// LEGAL/CREDIBILITY CAVEAT: do NOT publish any third-party company logo or name
// as a client/partner without WRITTEN permission (trademark risk) and do not
// overstate the relationship (README §Open items #4). The source company profile
// listed tier-1 entities; those are intentionally NOT shipped here.
//
// Default behaviour: only entries with `approved: true` are ever rendered, and
// until the client confirms approved logos the UI shows a neutral, honest
// "Sectors & Partners" treatment (sector text + icons) instead of logos.
//
// To add an APPROVED client logo: drop the file at public/images/clients/<file>
// and add an entry below with approved: true. Example shape:
//   { name: 'Client Name', logo: '/images/clients/client.svg', approved: true }

export const clients = [
  // No approved third-party logos yet — add them here once permission is granted.
];

// Honest neutral framing rendered until approved logos exist. Describes the kind
// of organisations and sectors Al Fajr serves — no specific third-party claims.
export const sectorsServed = [
  { label: 'Government & Public Sector', icon: 'cat-civil' },
  { label: 'Oil, Gas & Petrochemical', icon: 'oil-gas' },
  { label: 'Industrial & Manufacturing', icon: 'industrial' },
  { label: 'Real Estate & Developers', icon: 'commercial' },
  { label: 'Commercial & Retail', icon: 'cat-finishing' },
  { label: 'Facilities & Operations', icon: 'maintenance' },
];

export const partnersNote =
  'We work as a contractor and manpower partner to clients across the public sector, energy, industrial and real-estate markets in Saudi Arabia. Client logos are published only with written permission.';

export const approvedClients = clients.filter((c) => c.approved);

export const hasApprovedClients = approvedClients.length > 0;

export default clients;
