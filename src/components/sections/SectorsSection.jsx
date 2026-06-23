import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import SectorCard from './SectorCard';
import { sectors } from '../../data/sectors';

export default function SectorsSection() {
  return (
    <Section tone="white" spacing="lg">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Sectors"
          title="Built for demanding sectors"
          description="Residential, commercial, industrial and oil & gas — each with the right teams, plant and standards."
        />
        <Button to="/sectors" variant="ghost" className="shrink-0 self-start md:self-auto">
          All sectors →
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {sectors.map((sector, i) => (
          <SectorCard key={sector.slug} sector={sector} index={i} />
        ))}
      </div>
    </Section>
  );
}
