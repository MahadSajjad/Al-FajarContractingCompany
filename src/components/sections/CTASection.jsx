import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import { siteConfig, primaryPhone, telLink, whatsappLink } from '../../config/siteConfig';

// Reusable conversion band used at the foot of most pages.
export default function CTASection({
  title = "Ready to build? Let's talk.",
  description = 'Tell us about your project and our team will get back to you with the right people, plant and plan. No obligation.',
}) {
  return (
    <Section tone="grid" spacing="lg">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Eyebrow tone="light">{siteConfig.tagline}</Eyebrow>
        <h2 className="mt-5 font-display text-display-lg font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-concrete-300">{description}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button to="/contact" variant="primary" size="lg">
            Request a Quote
          </Button>
          <Button
            href={telLink(primaryPhone.number)}
            variant="outline-light"
            size="lg"
            icon={<FiPhone className="h-5 w-5" aria-hidden="true" />}
          >
            {primaryPhone.display}
          </Button>
          <Button
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-light"
            size="lg"
            icon={<FaWhatsapp className="h-5 w-5" aria-hidden="true" />}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
