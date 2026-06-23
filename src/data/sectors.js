// sectors.js — capabilities by sector. `image: null` uses a branded placeholder
// until real photos are dropped at public/images/sectors/<slug>.jpg.
export const sectors = [
  {
    slug: 'residential',
    title: 'Residential',
    icon: 'residential',
    image: null,
    tagline: 'Homes built and improved with care',
    excerpt:
      'Concrete work, structural detailing, renovations and extensions for residential properties.',
    description:
      'For homeowners and developers, we deliver dependable residential construction — from foundations, driveways, patios and walkways to architectural and structural detailing, renovations and extensions. Work is planned and supervised to keep quality high and disruption low.',
    capabilities: [
      'Foundations, driveways, patios and walkways',
      'Architectural and structural detailing',
      'Renovations and extensions',
      'Finishing and surface works',
    ],
    relatedServices: ['concrete-plaster-work', 'renovations-extensions', 'architectural-structural-work'],
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    icon: 'commercial',
    image: null,
    tagline: 'Fit-outs and builds that work hard',
    excerpt: 'Commercial builds and fit-outs with integrated MEP, finishing and systems.',
    description:
      'We deliver commercial builds and fit-outs that bring civil, MEP, finishing and systems together under one accountable team. From shell-and-core to handover, we coordinate trades to deliver functional, well-finished commercial spaces.',
    capabilities: [
      'Commercial fit-outs and builds',
      'Integrated MEP installation',
      'Finishing and partitioning',
      'Systems integration',
    ],
    relatedServices: ['mechanical-services', 'electrical-solutions', 'gypsum-board', 'security-smart-system'],
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    icon: 'industrial',
    image: null,
    tagline: 'Plants and facilities, built and maintained',
    excerpt:
      'Plant and facility construction and maintenance — mechanical, electrical, refrigeration and power.',
    description:
      'For industrial clients we handle plant and facility construction and the maintenance that keeps them running — mechanical and electrical works, refrigeration, power and ongoing operations support. Our multi-disciplinary teams are built for demanding, continuous-duty environments.',
    capabilities: [
      'Plant and facility construction',
      'Mechanical and electrical works',
      'Industrial refrigeration and power',
      'Maintenance and operations',
    ],
    relatedServices: ['mechanical-services', 'industrial-refrigeration', 'power-solutions', 'maintenance-operation-services'],
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    icon: 'oil-gas',
    image: null,
    tagline: 'Groundworks for heavy infrastructure',
    excerpt:
      'Excavation, backfilling and concrete for industrial and oil & gas infrastructure.',
    description:
      'We support oil & gas and heavy-industrial infrastructure with the groundworks and concrete they depend on — excavation and backfilling, foundations, slabs and structures, plus site preparation and earthworks executed to specification and to strict safety standards.',
    capabilities: [
      'Excavation and backfilling',
      'Foundations, slabs and structures',
      'Site preparation and earthworks',
      'Concrete for heavy infrastructure',
    ],
    relatedServices: ['excavation-demolition', 'grading-backfilling', 'site-preparation-earthworks', 'civil-work'],
  },
];

export const getSectorBySlug = (slug) => sectors.find((s) => s.slug === slug);

export default sectors;
