import { Outlet } from 'react-router-dom';
import AppProviders from './AppProviders';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from '../sections/WhatsAppButton';
import StructuredData from '../seo/StructuredData';
import { getOrganizationSchema, getWebsiteSchema } from '../../config/structuredData';

// Root route element: wraps every page in providers + persistent chrome.
export default function Layout() {
  return (
    <AppProviders>
      {/* Site-wide JSON-LD: the GeneralContractor entity + WebSite. */}
      <StructuredData data={[getOrganizationSchema(), getWebsiteSchema()]} />
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-steel-navy focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </AppProviders>
  );
}
