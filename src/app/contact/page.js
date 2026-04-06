'use client';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import ContactHero from '../../components/contact/ContactHero';
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
      {/* Navigation */}
      <Navbar backgroundColor="#0f6a38" dark sticky={false} />

      {/* 1. Hero */}
      <ContactHero content={sections.hero} />

      {/* 2. Contact Form + Info Cards */}
      <ContactForm />

      {/* 3. Map + Office Locations */}
      <MapSection />

      {/* 4. FAQ */}
      <ContactFAQ />

      {/* 5. Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
