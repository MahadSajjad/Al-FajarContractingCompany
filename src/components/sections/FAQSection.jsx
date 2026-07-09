import { FiPlus } from 'react-icons/fi';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import StructuredData from '../seo/StructuredData';
import { faqs } from '../../data/faq';
import { getFaqSchema } from '../../config/structuredData';

// Native <details>/<summary> — every answer is present in the static HTML
// regardless of open/closed state or JS, so crawlers and AI answer engines
// can read it without executing anything. FAQPage JSON-LD mirrors the same
// visible Q&A pairs (never publish schema for content that isn't on the page).
export default function FAQSection() {
  return (
    <Section tone="concrete" spacing="lg">
      <StructuredData data={getFaqSchema(faqs)} />
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers about coverage, licensing and what we deliver."
      />
      <div className="mt-10 divide-y divide-concrete-300 border-t border-concrete-300">
        {faqs.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-steel-navy marker:content-none">
              {item.question}
              <FiPlus
                className="h-5 w-5 shrink-0 text-safety-orange transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 max-w-3xl text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
