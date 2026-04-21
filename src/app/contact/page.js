'use client';

import styled from 'styled-components';
import ContactHero from '../../components/contact/ContactHero';
import VipLuxuryServices from '../../components/contact/VipLuxuryServices';
import ContactForm from '../../components/contact/ContactForm';
import MapSection from '../../components/contact/MapSection';
import ContactFAQ from '../../components/contact/ContactFAQ';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function ContactPage() {
  const { sections, sharedSections } = usePageContent('contact');

  return (
    <Main>
      {/* Hero with embedded navbar */}
      <ContactHero content={sections.hero} />

      {/* VIP and luxury services */}
      <VipLuxuryServices />

      {/* Contact Form + Info Cards */}
      <ContactForm />

      {/* Map + Office Locations */}
      <MapSection />

      {/* FAQ */}
      <ContactFAQ />

      {/* Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
