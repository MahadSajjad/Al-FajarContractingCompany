import SEO from '../../components/seo/SEO';
import { HeroSection, StatStrip, AboutTeaser, ServicesPreview, WhyUsSection, SectorsSection, ClientsSection, FAQSection, CTASection, } from '../../components/sections';
import { siteConfig } from '../../config/siteConfig';

export default function Home() {
  return (
    <>
      <SEO
        fullTitle={`${siteConfig.name} — General Contracting & Industrial Services in Saudi Arabia`}
        description={siteConfig.shortDescription}
        path="/"
      />
      <HeroSection />
      <StatStrip />
      <AboutTeaser />
      <ServicesPreview />
      <WhyUsSection />
      <SectorsSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
