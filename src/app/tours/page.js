'use client';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import ToursHero from '../../components/tours/ToursHero';
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
      {/* 1. Shared site header */}
      <Navbar backgroundColor="#0f6a38" dark sticky={false} />

      {/* 2. Hero showcase */}
      <ToursHero content={sections.hero} />

      {/* 3. Package filter tabs + offers + customize banner */}
      <ToursGrid content={sections.packages} />

      {/* 4. Customer testimonials (shared with Home) */}
      <CustomerReviews />

      {/* 5. Newsletter subscribe strip */}
      <ToursNewsletter content={sections.newsletter} />

      {/* 6. Shared site footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
