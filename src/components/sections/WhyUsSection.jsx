import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from './FeatureCard';
import { features } from '../../data/features';

export default function WhyUsSection() {
  return (
    <Section tone="grid" spacing="lg">
      <SectionHeading
        tone="light"
        eyebrow="Why Al Fajr"
        title="Built on standards you can hold us to"
        description="The reasons clients trust us with their projects — and come back for the next one."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} surface="dark" />
        ))}
      </div>
    </Section>
  );
}
