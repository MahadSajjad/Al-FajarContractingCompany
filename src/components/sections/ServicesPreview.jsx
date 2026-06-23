import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import CategoryCard from './CategoryCard';
import { servicesGroupedByCategory } from '../../data/services';

export default function ServicesPreview() {
  return (
    <Section tone="white" spacing="lg">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="What We Do"
          title="Capabilities across the whole build"
          description="From groundworks to handover — one accountable contractor for civil, MEP, systems, earthworks, finishing, equipment and manpower."
        />
        <Button to="/services" variant="ghost" className="shrink-0 self-start md:self-auto">
          View all services →
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesGroupedByCategory.map((category, i) => (
          <CategoryCard key={category.slug} category={category} index={i} />
        ))}
      </div>
    </Section>
  );
}
