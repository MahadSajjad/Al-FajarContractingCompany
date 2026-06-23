import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { getIcon } from '../ui/iconMap';
import {
  hasApprovedClients,
  approvedClients,
  sectorsServed,
  partnersNote,
} from '../../data/clients';

// Renders approved client logos ONLY when present; otherwise an honest,
// neutral "sectors served" treatment. Never shows unverified third-party logos.
export default function ClientsSection({ tone = 'concrete' }) {
  return (
    <Section tone={tone}>
      <SectionHeading
        align="center"
        eyebrow="Clients & Partners"
        title="Trusted across the Kingdom's key sectors"
        description={partnersNote}
        className="mx-auto"
      />

      {hasApprovedClients ? (
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {approvedClients.map((client) => (
            <li
              key={client.name}
              className="flex h-24 items-center justify-center rounded-lg border border-concrete-300 bg-white p-5"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-12 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-concrete-300 bg-concrete-300 sm:grid-cols-2 lg:grid-cols-3">
          {sectorsServed.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.label} className="flex items-center gap-4 bg-white p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blueprint-blue/10 text-blueprint-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold text-steel-navy">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <p className="mt-6 text-center font-mono text-xs uppercase tracking-wide text-slate-400">
        Client logos are published only with written permission.
      </p>
    </Section>
  );
}
