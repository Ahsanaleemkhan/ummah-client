'use client';

import styled from 'styled-components';
import ToursHero from '../../components/tours/ToursHero';
import SaudiTransportServices from '../../components/tours/SaudiTransportServices';
import ToursGrid from '../../components/tours/ToursGrid';
import ToursNewsletter from '../../components/tours/ToursNewsletter';
import CustomerReviews from '../../components/CustomerReviews';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #ececec;
  color: #222;
  min-height: 100vh;
`;

export default function ToursPage() {
  const { sections, sharedSections } = usePageContent('tours');

  return (
    <Main>
      {/* Hero with embedded navbar */}
      <ToursHero content={sections.hero} />

      {/* Ground transportation services */}
      <SaudiTransportServices />

      {/* Package filter tabs + offers + customize banner */}
      <ToursGrid content={sections.packages} />

      {/* Customer testimonials (shared with Home) */}
      <CustomerReviews content={sections.customerReviews} />

      {/* Newsletter subscribe strip */}
      <ToursNewsletter content={sections.newsletter} />

      {/* Shared site footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
