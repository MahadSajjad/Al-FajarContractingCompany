import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { about } from '../../data/about';

export default function AboutTeaser() {
  return (
    <Section tone="concrete">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A trusted contractor for the Kingdom's toughest builds"
          />
          <p className="mt-6 text-base leading-relaxed text-slate-600">{about.intro}</p>
          <div className="mt-8">
            <Button to="/about" variant="outline">
              More about us
            </Button>
          </div>
        </div>

        {/* Mission + Vision spec panel */}
        <div className="relative overflow-hidden rounded-xl bg-steel-navy p-8 text-white lg:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid opacity-60"
            aria-hidden="true"
          />
          <div className="relative space-y-8">
            <div>
              <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-safety-orange">
                Our Mission
              </p>
              <p className="mt-3 text-lg leading-relaxed text-concrete-200">{about.mission}</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-safety-orange">
                Our Vision
              </p>
              <p className="mt-3 leading-relaxed text-concrete-300">{about.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
