import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from '../sections/WhatsAppButton';
import StructuredData from '../seo/StructuredData';
import ScrollReveal from '../util/ScrollReveal';
import RouteProgress from '../util/RouteProgress';
import { getOrganizationSchema, getWebsiteSchema } from '../../config/structuredData';

// Root route element: persistent chrome around every page. No global antd —
// the theme provider is scoped to the contact form so antd loads only there.
export default function Layout() {
  return (
    <>
      {/* Site-wide JSON-LD: the GeneralContractor entity + WebSite. */}
      <StructuredData data={[getOrganizationSchema(), getWebsiteSchema()]} />
      <RouteProgress />
      <ScrollToTop />
      <ScrollReveal />
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
    </>
  );
}
