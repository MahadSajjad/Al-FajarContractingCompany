import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink, siteConfig } from '../../config/siteConfig';

// Floating click-to-chat button, fixed bottom-right on every page.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-card-hover transition-all hover:gap-2 hover:pr-5 focus-visible:gap-2 focus-visible:pr-5"
    >
      <FaWhatsapp className="h-7 w-7 shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100 group-focus-visible:max-w-[8rem] group-focus-visible:opacity-100">
        WhatsApp
      </span>
    </a>
  );
}
