import Section from '../ui/Section';
import Stat from '../ui/Stat';
import { trustFacts } from '../../data/stats';

// Honest trust facts as a hairline spec grid (gap-px over a concrete bg draws
// the thin rules). No invented numbers — see data/stats.js.
export default function StatStrip() {
  return (
    <Section tone="white" spacing="sm">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-concrete-300 bg-concrete-300 lg:grid-cols-4">
        {trustFacts.map((fact) => (
          <div key={fact.label} className="bg-white p-6 lg:p-7">
            <Stat value={fact.value} label={fact.label} />
          </div>
        ))}
      </div>
    </Section>
  );
}
