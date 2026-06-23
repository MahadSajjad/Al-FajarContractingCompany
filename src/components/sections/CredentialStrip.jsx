import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { getIcon } from '../ui/iconMap';
import { credentials } from '../../data/credentials';

// Trust badges — credential TYPE + ISSUER only (no sensitive numbers).
export default function CredentialStrip({ tone = 'white' }) {
  return (
    <Section tone={tone}>
      <SectionHeading
        align="center"
        eyebrow="Credentials"
        title="Licensed & registered in the Kingdom"
        description="Al Fajr Contracting operates as a fully registered entity in Saudi Arabia."
        className="mx-auto"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((credential) => {
          const Icon = getIcon(credential.icon);
          return (
            <li
              key={credential.title}
              className="flex flex-col items-center rounded-lg border border-concrete-300 bg-white p-6 text-center shadow-card"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-blueprint-blue/10 text-blueprint-blue ring-1 ring-inset ring-blueprint-blue/15">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-steel-navy">
                {credential.title}
              </h3>
              <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wide text-safety-orange">
                {credential.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{credential.description}</p>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-center font-mono text-xs uppercase tracking-wide text-slate-400">
        Registration &amp; licence numbers available to verified clients on request.
      </p>
    </Section>
  );
}
