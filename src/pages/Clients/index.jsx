import SEO from '../../components/seo/SEO';
import PageHeader from '../../components/sections/PageHeader';
import ClientsSection from '../../components/sections/ClientsSection';
import CredentialStrip from '../../components/sections/CredentialStrip';
import CTASection from '../../components/sections/CTASection';

export default function Clients() {
  return (
    <>
      <SEO
        title="Clients & Partners"
        description="Al Fajr Contracting partners with clients across the public sector, energy, industrial and real-estate markets in Saudi Arabia."
        path="/clients"
      />

      <PageHeader
        eyebrow="Trusted By"
        title="Clients & Partners"
        description="We work as a contractor and manpower partner to organisations across Saudi Arabia's key sectors."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Clients' }]}
      />

      <ClientsSection tone="white" />

      <CredentialStrip tone="concrete" />

      <CTASection />
    </>
  );
}
