'use client';

import styled from 'styled-components';
import HeroSection from '../../components/HeroSection';
import PopularAirlines from '../../components/PopularAirlines';
import PopularUmrahPackagesSection from '../../components/PopularUmrahPackagesSection';
import WhatWeOfferSection from '../../components/WhatWeOfferSection';
import DestinationGrid from '../../components/DestinationGrid';
import JourneyBeginsCTA from '../../components/JourneyBeginsCTA';
import CustomerReviews from '../../components/CustomerReviews';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #ececec;
  color: #222;
  min-height: 100vh;
`;

export default function UmrahPackagesPage() {
  const { sections, sharedSections } = usePageContent('umrah-packages');

  return (
    <Main>
      {/* 1. Hero with embedded navbar */}
      <HeroSection content={sections.hero} />

      {/* 2. Popular airlines */}
      <PopularAirlines content={sections.popularAirlines} />

      {/* 3. Popular Umrah package cards */}
      <PopularUmrahPackagesSection />

      {/* 4. What we offer */}
      <WhatWeOfferSection />

      {/* 5. Destination collage */}
      <DestinationGrid />

      {/* 6. Journey CTA card */}
      <JourneyBeginsCTA content={sections.journeyCta} />

      {/* 7. Customer reviews */}
      <CustomerReviews />

      {/* 8. Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
