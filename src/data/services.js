// services.js — full service taxonomy. This is the SINGLE source for the
// /services overview and every /services/:slug detail page.
//
// IMAGE SLOTS: each service has `image: null` until real photography is ready.
// To add a photo, drop an optimised file at public/images/services/<slug>.jpg
// (~1600x1000, WebP/JPG) and set `image: '/images/services/<slug>.jpg'`.
// Components render a branded placeholder while `image` is null — no 404s.
//
// COPY RULE: descriptions are honest and capability-based. No invented client
// names, project counts, years, or guarantees (see README §Open items).

export const serviceCategories = [
  {
    slug: 'civil-construction',
    name: 'Civil & Construction',
    short: 'Civil & Construction',
    icon: 'cat-civil',
    blurb:
      'Structural and civil works executed by engineers, supervisors and a skilled workforce — from foundations to finished structures.',
  },
  {
    slug: 'mep',
    name: 'MEP — Mechanical, Electrical & Plumbing',
    short: 'MEP',
    icon: 'cat-mep',
    blurb:
      'Integrated mechanical, electrical and plumbing scope for industrial, commercial and infrastructure projects.',
  },
  {
    slug: 'specialized-systems',
    name: 'Specialized Systems',
    short: 'Specialized Systems',
    icon: 'cat-systems',
    blurb:
      'Life-safety, security, power and refrigeration systems engineered for demanding facilities.',
  },
  {
    slug: 'earthworks-site-logistics',
    name: 'Earthworks & Site Logistics',
    short: 'Earthworks & Logistics',
    icon: 'cat-earthworks',
    blurb:
      'Excavation, grading, compaction, material supply and haulage to get sites ready and keep them moving.',
  },
  {
    slug: 'finishing-works',
    name: 'Finishing Works',
    short: 'Finishing Works',
    icon: 'cat-finishing',
    blurb:
      'Interior and surface finishing — gypsum, paint, marble, tiling and metalwork — delivered to a clean, durable standard.',
  },
  {
    slug: 'equipment-fleet',
    name: 'Equipment & Fleet',
    short: 'Equipment & Fleet',
    icon: 'cat-equipment',
    blurb:
      'Well-maintained plant, trucks and fuel logistics available for hire to support projects of any scale.',
  },
  {
    slug: 'manpower-operations',
    name: 'Manpower & Operations',
    short: 'Manpower & Operations',
    icon: 'cat-manpower',
    blurb:
      'Skilled and general manpower plus maintenance and operations support to keep facilities productive.',
  },
];

export const services = [
  // ---------------- Civil & Construction ----------------
  {
    slug: 'civil-work',
    title: 'Civil Work',
    category: 'civil-construction',
    icon: 'civil-work',
    image: null,
    excerpt:
      'Engineers, supervisors and a skilled workforce executing every phase to high safety and quality standards.',
    description:
      'Our civil teams handle the structural backbone of a project — substructure, superstructure and everything in between. Engineers and site supervisors coordinate each phase so work progresses safely, on schedule and to specification, whether it is a standalone building or part of a larger industrial scope.',
    bullets: [
      'Foundations, columns, beams and slabs',
      'Reinforcement, formwork and cast-in-place concrete',
      'Site supervision and quality control at every stage',
      'Coordination with MEP and finishing trades',
    ],
    metaTitle: 'Civil Work Contractor in Saudi Arabia',
    metaDescription:
      'Civil construction by Al Fajr Contracting — foundations, structures and supervision delivered to high safety and quality standards across Saudi Arabia.',
  },
  {
    slug: 'concrete-plaster-work',
    title: 'Concrete & Plaster Work',
    category: 'civil-construction',
    icon: 'concrete-plaster',
    image: null,
    excerpt: 'Durable concrete and clean plaster finishes built to engineering specification.',
    description:
      'From structural pours to smooth plaster finishes, we deliver concrete works that meet the required strength and tolerances. Mixes, placement and curing are controlled on site, and plastering is finished cleanly to provide a sound base for paint and final treatments.',
    bullets: [
      'Structural and non-structural concrete',
      'Foundations, slabs, driveways and patios',
      'Internal and external plastering',
      'Surface preparation for finishing works',
    ],
    metaTitle: 'Concrete & Plaster Work',
    metaDescription:
      'Concrete and plastering services by Al Fajr Contracting — durable pours and clean finishes built to specification across Saudi Arabia.',
  },
  {
    slug: 'block-work',
    title: 'Block Work',
    category: 'civil-construction',
    icon: 'block-work',
    image: null,
    excerpt: 'Accurate blockwork for partitions, boundary walls and load-bearing elements.',
    description:
      'We build internal and external blockwork to line, level and plumb — partitions, infill walls and boundary walls. Correct bonding, reinforcement and mortar quality give walls that are straight, stable and ready for plaster or cladding.',
    bullets: [
      'Internal partitions and external walls',
      'Boundary and retaining walls',
      'Reinforced and load-bearing blockwork',
      'Clean, plumb surfaces ready for finishing',
    ],
    metaTitle: 'Block Work Services',
    metaDescription:
      'Blockwork by Al Fajr Contracting — partitions, boundary walls and load-bearing walls built accurately and ready for finishing.',
  },
  {
    slug: 'renovations-extensions',
    title: 'Renovations & Extensions',
    category: 'civil-construction',
    icon: 'renovations',
    image: null,
    excerpt: 'Upgrades, refurbishments and extensions that add space and value with minimal disruption.',
    description:
      'We renovate and extend existing residential, commercial and industrial spaces — reconfiguring layouts, upgrading finishes and adding new built area. Work is planned around your operations to keep disruption to a minimum while improving function, safety and value.',
    bullets: [
      'Refurbishment and remodelling',
      'Building extensions and additions',
      'Structural alterations and openings',
      'Phased works around live operations',
    ],
    metaTitle: 'Renovations & Extensions',
    metaDescription:
      'Renovation and extension contractor — Al Fajr Contracting upgrades and expands residential, commercial and industrial spaces across Saudi Arabia.',
  },
  {
    slug: 'architectural-structural-work',
    title: 'Architectural & Structural Work',
    category: 'civil-construction',
    icon: 'architectural',
    image: null,
    excerpt: 'Architectural detailing and structural elements executed to drawing and specification.',
    description:
      'We translate architectural and structural drawings into built form — delivering the structural elements and the architectural detailing that define a finished space. Close coordination between trades keeps geometry, tolerances and finishes aligned with the design intent.',
    bullets: [
      'Structural framing and detailing',
      'Architectural features and detailing',
      'Drawing-to-site coordination',
      'Quality checks against specification',
    ],
    metaTitle: 'Architectural & Structural Work',
    metaDescription:
      'Architectural and structural contracting by Al Fajr Contracting — detailing and structural elements built to drawing and specification.',
  },

  // ---------------- MEP ----------------
  {
    slug: 'mechanical-services',
    title: 'Mechanical Services',
    category: 'mep',
    icon: 'mechanical',
    image: null,
    excerpt: 'Full mechanical scope for industrial, commercial and infrastructure projects.',
    description:
      'Our mechanical teams install and integrate the systems that keep facilities running — HVAC, mechanical piping and plant equipment. We work from design through installation, testing and commissioning, coordinating tightly with electrical and civil scopes.',
    bullets: [
      'HVAC and mechanical plant installation',
      'Mechanical piping and equipment',
      'Testing and commissioning',
      'Coordination with civil and electrical trades',
    ],
    metaTitle: 'Mechanical Services & HVAC',
    metaDescription:
      'Mechanical and HVAC contracting by Al Fajr Contracting — installation, testing and commissioning for industrial and commercial projects in Saudi Arabia.',
  },
  {
    slug: 'electrical-solutions',
    title: 'Electrical Solutions',
    category: 'mep',
    icon: 'electrical',
    image: null,
    excerpt: 'Certified electricians delivering residential, commercial and industrial solutions.',
    description:
      'We deliver electrical installations from power distribution and containment to lighting, small power and final connections. Work is carried out by qualified electricians to recognised standards, with testing before handover for safe, reliable operation.',
    bullets: [
      'Power distribution and panels',
      'Lighting and small-power installation',
      'Containment, cabling and terminations',
      'Testing, inspection and handover',
    ],
    metaTitle: 'Electrical Solutions & Installation',
    metaDescription:
      'Electrical contracting by Al Fajr Contracting — distribution, lighting and power installed and tested by qualified electricians across Saudi Arabia.',
  },
  {
    slug: 'plumbing-work',
    title: 'Plumbing Work',
    category: 'mep',
    icon: 'plumbing',
    image: null,
    excerpt: 'Water supply, drainage and sanitary installations that are clean, tested and leak-free.',
    description:
      'We install and connect water supply, drainage and sanitary systems for new builds and refurbishments. Pipework is routed neatly, pressure-tested and commissioned so systems perform reliably and meet hygiene and code requirements.',
    bullets: [
      'Water supply and distribution',
      'Soil, waste and drainage systems',
      'Sanitary fixtures and fittings',
      'Pressure testing and commissioning',
    ],
    metaTitle: 'Plumbing Work & Sanitary Installation',
    metaDescription:
      'Plumbing services by Al Fajr Contracting — water supply, drainage and sanitary systems installed, tested and commissioned across Saudi Arabia.',
  },
  {
    slug: 'pipe-line-work',
    title: 'Pipe Line Work',
    category: 'mep',
    icon: 'pipeline',
    image: null,
    excerpt: 'Pipeline fabrication and installation for process, utility and infrastructure systems.',
    description:
      'We fabricate and install pipelines for utility and process applications — handling routing, jointing, supports and testing. Our teams work to the required pressure and material standards so lines are safe, durable and ready for service.',
    bullets: [
      'Process and utility pipelines',
      'Fabrication, jointing and supports',
      'Pressure testing and flushing',
      'Coordination with civil and mechanical scopes',
    ],
    metaTitle: 'Pipe Line Work',
    metaDescription:
      'Pipeline installation by Al Fajr Contracting — fabrication, jointing and testing for process and utility systems across Saudi Arabia.',
  },
  {
    slug: 'ducting',
    title: 'Ducting',
    category: 'mep',
    icon: 'ducting',
    image: null,
    excerpt: 'HVAC ductwork fabricated and installed for efficient, balanced air distribution.',
    description:
      'We supply and install HVAC ductwork — fabrication, routing, insulation and connection to plant and terminals. Properly sealed and supported ducting delivers balanced airflow and efficient performance across the facility.',
    bullets: [
      'Ductwork fabrication and installation',
      'Insulation and sealing',
      'Supports, dampers and terminals',
      'Airflow balancing support',
    ],
    metaTitle: 'HVAC Ducting',
    metaDescription:
      'Ducting services by Al Fajr Contracting — HVAC ductwork fabricated, insulated and installed for efficient air distribution in Saudi Arabia.',
  },
  {
    slug: 'cable-tray',
    title: 'Cable Tray',
    category: 'mep',
    icon: 'cable-tray',
    image: null,
    excerpt: 'Cable containment and tray systems that keep electrical infrastructure safe and organised.',
    description:
      'We install cable tray and containment systems that route and protect electrical and data cabling. Correctly sized, supported and bonded trays make installations safe, maintainable and ready for future expansion.',
    bullets: [
      'Cable tray and ladder installation',
      'Containment routing and supports',
      'Bonding and earthing',
      'Capacity for future cabling',
    ],
    metaTitle: 'Cable Tray & Containment',
    metaDescription:
      'Cable tray and containment systems by Al Fajr Contracting — safe, organised routing for electrical and data infrastructure across Saudi Arabia.',
  },

  // ---------------- Specialized Systems ----------------
  {
    slug: 'fire-fighting-system',
    title: 'Fire Fighting System',
    category: 'specialized-systems',
    icon: 'firefighting',
    image: null,
    excerpt: 'Reliable systems protecting lives, property and operations.',
    description:
      'We install fire-fighting and protection systems — pipework, pumps, sprinklers and connections to detection and alarm. Systems are installed and tested to perform when it matters, helping safeguard people, assets and continuity of operations.',
    bullets: [
      'Sprinkler and wet/dry pipework',
      'Pumps, valves and hose systems',
      'Integration with detection and alarm',
      'Testing and commissioning',
    ],
    metaTitle: 'Fire Fighting System Installation',
    metaDescription:
      'Fire-fighting system installation by Al Fajr Contracting — sprinklers, pumps and pipework tested to protect people and property in Saudi Arabia.',
  },
  {
    slug: 'security-smart-system',
    title: 'Security & Smart System',
    category: 'specialized-systems',
    icon: 'security',
    image: null,
    excerpt: 'Security and smart automation protecting people and assets while improving efficiency.',
    description:
      'We install security and smart-building systems — CCTV, access control and automation — that protect people and assets and make facilities easier to run. Systems are configured, tested and handed over ready for monitoring and day-to-day use.',
    bullets: [
      'CCTV and surveillance',
      'Access control systems',
      'Smart-building automation',
      'Configuration, testing and handover',
    ],
    metaTitle: 'Security & Smart Systems',
    metaDescription:
      'Security and smart-system installation by Al Fajr Contracting — CCTV, access control and automation protecting people and assets across Saudi Arabia.',
  },
  {
    slug: 'industrial-refrigeration',
    title: 'Industrial Refrigeration',
    category: 'specialized-systems',
    icon: 'refrigeration',
    image: null,
    excerpt: 'Engineered refrigeration for demanding operations across the Kingdom.',
    description:
      'We install and support industrial refrigeration for facilities that depend on controlled temperatures. From plant and pipework to controls, our teams deliver systems built for reliability in demanding, continuous-duty environments.',
    bullets: [
      'Refrigeration plant and pipework',
      'Cold-store and process cooling',
      'Controls and monitoring',
      'Maintenance and support',
    ],
    metaTitle: 'Industrial Refrigeration',
    metaDescription:
      'Industrial refrigeration by Al Fajr Contracting — engineered cooling, cold-store and process refrigeration for demanding operations in Saudi Arabia.',
  },
  {
    slug: 'power-solutions',
    title: 'Power Solutions',
    category: 'specialized-systems',
    icon: 'power',
    image: null,
    excerpt: 'Power systems for modern industry, commercial facilities and critical infrastructure.',
    description:
      'We deliver power solutions that keep operations running — distribution, backup and supporting infrastructure sized to the facility. Installations are tested and commissioned for safe, dependable performance where uptime matters.',
    bullets: [
      'Power distribution infrastructure',
      'Backup and standby power',
      'Industrial and commercial supply',
      'Testing and commissioning',
    ],
    metaTitle: 'Power Solutions',
    metaDescription:
      'Power solutions by Al Fajr Contracting — distribution and backup power for industry, commercial facilities and critical infrastructure in Saudi Arabia.',
  },

  // ---------------- Earthworks & Site Logistics ----------------
  {
    slug: 'excavation-demolition',
    title: 'Excavation & Demolition',
    category: 'earthworks-site-logistics',
    icon: 'excavation',
    image: null,
    excerpt: 'Experienced teams and specialised equipment delivering on time and on budget.',
    description:
      'We carry out excavation and controlled demolition with the right plant and experienced operators. Earth is cut to line and level and structures are taken down safely, with material handled and cleared so the next stage can begin without delay.',
    bullets: [
      'Bulk and detailed excavation',
      'Controlled demolition and dismantling',
      'Spoil handling and clearance',
      'Safe, methodical site sequencing',
    ],
    metaTitle: 'Excavation & Demolition',
    metaDescription:
      'Excavation and demolition by Al Fajr Contracting — experienced teams and specialised equipment delivering safely, on time and on budget in Saudi Arabia.',
  },
  {
    slug: 'grading-backfilling',
    title: 'Grading & Backfilling',
    category: 'earthworks-site-logistics',
    icon: 'grading',
    image: null,
    excerpt: 'Quality materials and proven compaction methods meeting engineering specifications.',
    description:
      'We grade and backfill to design levels using suitable materials and proven compaction methods. The result is a stable, well-prepared platform that meets engineering specifications and supports the works that follow.',
    bullets: [
      'Cut and fill to design levels',
      'Engineered backfill materials',
      'Layered placement and compaction',
      'Compliance with project specifications',
    ],
    metaTitle: 'Grading & Backfilling',
    metaDescription:
      'Grading and backfilling by Al Fajr Contracting — quality materials and proven compaction meeting engineering specifications across Saudi Arabia.',
  },
  {
    slug: 'leveling-compaction',
    title: 'Leveling & Compaction',
    category: 'earthworks-site-logistics',
    icon: 'leveling',
    image: null,
    excerpt: 'Site preparation through final surface finishing on a solid, well-compacted base.',
    description:
      'We level and compact ground to provide a solid base for construction and surfacing. Controlled compaction in layers achieves the required density, reducing settlement risk and giving a dependable foundation for the works above.',
    bullets: [
      'Surface leveling to grade',
      'Layered compaction to density',
      'Sub-base preparation',
      'Final surface readiness',
    ],
    metaTitle: 'Leveling & Compaction',
    metaDescription:
      'Leveling and compaction by Al Fajr Contracting — solid, well-compacted bases from site preparation through final surface readiness in Saudi Arabia.',
  },
  {
    slug: 'material-asphalt-supply',
    title: 'Material & Asphalt Supply',
    category: 'earthworks-site-logistics',
    icon: 'asphalt',
    image: null,
    excerpt: 'Reliable, timely supply for infrastructure, roadwork and building projects.',
    description:
      'We supply construction materials and asphalt to keep infrastructure, roadwork and building projects moving. Dependable scheduling and delivery help avoid downtime and keep programmes on track.',
    bullets: [
      'Aggregates and construction materials',
      'Asphalt supply for roadworks',
      'Scheduled, reliable delivery',
      'Support for infrastructure projects',
    ],
    metaTitle: 'Material & Asphalt Supply',
    metaDescription:
      'Material and asphalt supply by Al Fajr Contracting — reliable, timely delivery for infrastructure, roadwork and building projects in Saudi Arabia.',
  },
  {
    slug: 'loading-transportation',
    title: 'Loading & Transportation',
    category: 'earthworks-site-logistics',
    icon: 'loading',
    image: null,
    excerpt: 'Efficient, safe and cost-effective loading and transport tailored to the project.',
    description:
      'We handle loading and transportation of materials and equipment with a fleet and crews suited to the task. Routes and scheduling are planned for efficiency and safety, keeping site logistics smooth and costs under control.',
    bullets: [
      'Loading and haulage of materials',
      'Equipment transport',
      'Planned routing and scheduling',
      'Safe, cost-effective logistics',
    ],
    metaTitle: 'Loading & Transportation',
    metaDescription:
      'Loading and transportation by Al Fajr Contracting — efficient, safe and cost-effective haulage tailored to your project across Saudi Arabia.',
  },
  {
    slug: 'waste-removal',
    title: 'Waste Removal',
    category: 'earthworks-site-logistics',
    icon: 'waste',
    image: null,
    excerpt: 'Fast, safe and environmentally responsible removal for construction and industrial sites.',
    description:
      'We clear construction, demolition and industrial waste quickly and responsibly. Keeping sites clean improves safety and productivity, and material is handled and disposed of with care for the environment.',
    bullets: [
      'Construction and demolition waste',
      'Industrial site clearance',
      'Responsible handling and disposal',
      'Cleaner, safer, more productive sites',
    ],
    metaTitle: 'Waste Removal',
    metaDescription:
      'Waste removal by Al Fajr Contracting — fast, safe and environmentally responsible clearance for construction and industrial sites in Saudi Arabia.',
  },
  {
    slug: 'site-preparation-earthworks',
    title: 'Site Preparation & Earthworks',
    category: 'earthworks-site-logistics',
    icon: 'site-prep',
    image: null,
    excerpt: 'Getting sites ready — clearing, earthworks and groundworks done right from the start.',
    description:
      'We prepare sites end to end — clearing, earthmoving and groundworks that set a project up for success. Getting the ground right at the start protects the programme and the quality of everything built afterwards.',
    bullets: [
      'Site clearing and stripping',
      'Bulk earthworks and groundworks',
      'Access and platform preparation',
      'Coordination with civil works',
    ],
    metaTitle: 'Site Preparation & Earthworks',
    metaDescription:
      'Site preparation and earthworks by Al Fajr Contracting — clearing, earthmoving and groundworks that set projects up right across Saudi Arabia.',
  },

  // ---------------- Finishing Works ----------------
  {
    slug: 'gypsum-board',
    title: 'Gypsum Board',
    category: 'finishing-works',
    icon: 'gypsum',
    image: null,
    excerpt: 'Partitions and ceilings in gypsum board for clean lines and fast, tidy installation.',
    description:
      'We install gypsum board partitions and ceilings that deliver clean lines and a smooth base for decoration. Framing, boarding and jointing are finished neatly, with options for acoustic and moisture-resistant board where needed.',
    bullets: [
      'Gypsum partitions and ceilings',
      'Metal framing and boarding',
      'Jointing and finishing',
      'Acoustic and moisture-resistant options',
    ],
    metaTitle: 'Gypsum Board Partitions & Ceilings',
    metaDescription:
      'Gypsum board works by Al Fajr Contracting — partitions and ceilings installed cleanly and ready for decoration across Saudi Arabia.',
  },
  {
    slug: 'painting-work',
    title: 'Painting Work',
    category: 'finishing-works',
    icon: 'painting',
    image: null,
    excerpt: 'Interior and exterior painting with proper preparation for a durable, even finish.',
    description:
      'We prepare surfaces and apply interior and exterior paint systems for a clean, even, lasting finish. Correct preparation and the right coatings protect surfaces and lift the overall quality of the space.',
    bullets: [
      'Surface preparation and priming',
      'Interior and exterior painting',
      'Protective and decorative coatings',
      'Even, durable finishes',
    ],
    metaTitle: 'Painting Work',
    metaDescription:
      'Painting services by Al Fajr Contracting — properly prepared interior and exterior finishes that are even and durable across Saudi Arabia.',
  },
  {
    slug: 'marble-tiles-work',
    title: 'Marble & Tiles Work',
    category: 'finishing-works',
    icon: 'marble',
    image: null,
    excerpt: 'Precise marble and tiling for floors and walls with crisp lines and level surfaces.',
    description:
      'We lay marble and tiles for floors and walls with attention to setting out, level and joint lines. Careful preparation and finishing produce hard-wearing surfaces that look right and last.',
    bullets: [
      'Floor and wall tiling',
      'Marble installation',
      'Accurate setting out and levels',
      'Clean grouting and finishing',
    ],
    metaTitle: 'Marble & Tiles Work',
    metaDescription:
      'Marble and tiling by Al Fajr Contracting — precise floor and wall installation with crisp lines and level surfaces across Saudi Arabia.',
  },
  {
    slug: 'hand-railing',
    title: 'Hand Railing',
    category: 'finishing-works',
    icon: 'railing',
    image: null,
    excerpt: 'Handrails and balustrades fabricated and fixed for safety and a clean finish.',
    description:
      'We fabricate and install handrails and balustrades for stairs, walkways and edges. Securely fixed and neatly finished, they meet safety requirements while complementing the surrounding finishes.',
    bullets: [
      'Stair and walkway handrails',
      'Balustrades and edge protection',
      'Fabrication and secure fixing',
      'Safety-compliant, clean finishing',
    ],
    metaTitle: 'Hand Railing & Balustrades',
    metaDescription:
      'Handrail and balustrade works by Al Fajr Contracting — safe, securely fixed and neatly finished metalwork across Saudi Arabia.',
  },

  // ---------------- Equipment & Fleet ----------------
  {
    slug: 'rental-equipment',
    title: 'Rental Equipment',
    category: 'equipment-fleet',
    icon: 'rental-equipment',
    image: null,
    excerpt: 'A broad range of well-maintained equipment to complete projects safely and on budget.',
    description:
      'We provide well-maintained construction equipment for hire to support projects of any size. Reliable plant and timely availability help you keep work moving safely and within budget — with or without operators as required.',
    bullets: [
      'Broad range of construction plant',
      'Regularly maintained and inspected',
      'Operated or bare hire options',
      'Flexible hire periods',
    ],
    metaTitle: 'Rental Equipment & Plant Hire',
    metaDescription:
      'Equipment rental by Al Fajr Contracting — a broad range of well-maintained plant to complete projects safely and on budget across Saudi Arabia.',
  },
  {
    slug: 'dump-truck-rental',
    title: 'Dump Truck Rental',
    category: 'equipment-fleet',
    icon: 'dump-truck',
    image: null,
    excerpt: 'Dump trucks for earthmoving and haulage, available with experienced operators.',
    description:
      'We hire out dump trucks for earthmoving, material haulage and site logistics. Maintained vehicles and experienced operators keep material flowing efficiently across the project.',
    bullets: [
      'Earthmoving and material haulage',
      'Maintained, road-ready vehicles',
      'Experienced operators available',
      'Flexible scheduling',
    ],
    metaTitle: 'Dump Truck Rental',
    metaDescription:
      'Dump truck rental by Al Fajr Contracting — maintained vehicles and experienced operators for earthmoving and haulage across Saudi Arabia.',
  },
  {
    slug: 'diesel-supply-truck',
    title: 'Diesel Supply Truck',
    category: 'equipment-fleet',
    icon: 'diesel-truck',
    image: null,
    excerpt: 'On-site diesel delivery that keeps plant and generators fuelled and productive.',
    description:
      'We deliver diesel directly to site to keep equipment and generators running. Dependable, scheduled fuel supply reduces downtime and the hassle of off-site refuelling for your operations.',
    bullets: [
      'On-site diesel delivery',
      'Fuel for plant and generators',
      'Scheduled, dependable supply',
      'Less downtime and refuelling effort',
    ],
    metaTitle: 'Diesel Supply Truck',
    metaDescription:
      'On-site diesel supply by Al Fajr Contracting — scheduled fuel delivery that keeps plant and generators productive across Saudi Arabia.',
  },

  // ---------------- Manpower & Operations ----------------
  {
    slug: 'manpower-supply',
    title: 'Manpower Supply',
    category: 'manpower-operations',
    icon: 'manpower',
    image: null,
    excerpt: 'Skilled and unskilled manpower to meet diverse industry needs across the Kingdom.',
    description:
      'We supply skilled and general manpower to meet the demands of construction and industrial projects across Saudi Arabia. From tradespeople to general labour, we help you scale teams up or down with dependable, work-ready personnel.',
    bullets: [
      'Skilled trades and general labour',
      'Scalable to project demand',
      'Work-ready, supervised personnel',
      'Support across multiple sectors',
    ],
    metaTitle: 'Manpower Supply in Saudi Arabia',
    metaDescription:
      'Manpower supply by Al Fajr Contracting — skilled and general personnel to meet diverse industry needs across Jeddah, Riyadh and Madinah.',
  },
  {
    slug: 'maintenance-operation-services',
    title: 'Maintenance & Operation Services',
    category: 'manpower-operations',
    icon: 'maintenance',
    image: null,
    excerpt: "Keeping assets, facilities and equipment at peak efficiency.",
    description:
      'We provide maintenance and operations support that keeps assets, facilities and equipment running at their best. Planned and responsive maintenance extends asset life, protects uptime and helps control operating costs.',
    bullets: [
      'Planned preventive maintenance',
      'Responsive repairs and callouts',
      'Facility and equipment upkeep',
      'Improved uptime and asset life',
    ],
    metaTitle: 'Maintenance & Operation Services',
    metaDescription:
      'Maintenance and operations by Al Fajr Contracting — keeping assets, facilities and equipment at peak efficiency across Saudi Arabia.',
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    category: 'manpower-operations',
    icon: 'support',
    image: null,
    excerpt: 'Dependable technical support that keeps operations running between major works.',
    description:
      'We provide ongoing maintenance and technical support to keep facilities and systems dependable day to day. Responsive teams handle issues quickly so your operations stay productive between larger projects.',
    bullets: [
      'Ongoing technical support',
      'Responsive issue resolution',
      'System and facility upkeep',
      'Dependable day-to-day operations',
    ],
    metaTitle: 'Maintenance & Support',
    metaDescription:
      'Maintenance and support by Al Fajr Contracting — responsive technical support keeping facilities and systems dependable across Saudi Arabia.',
  },
];

/* ----------------------------- helpers ----------------------------- */

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export const getCategory = (slug) => serviceCategories.find((c) => c.slug === slug);

export const getServicesByCategory = (categorySlug) =>
  services.filter((s) => s.category === categorySlug);

// Categories with their services attached — convenient for grouped views.
export const servicesGroupedByCategory = serviceCategories.map((category) => ({
  ...category,
  services: getServicesByCategory(category.slug),
}));

export const allServiceSlugs = services.map((s) => s.slug);

export default services;
