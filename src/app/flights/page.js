'use client';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import FlightsHero from '../../components/flights/FlightsHero';
import FlightSearch from '../../components/flights/FlightSearch';
import PopularRoutes from '../../components/flights/PopularRoutes';
import AirlinePartners from '../../components/flights/AirlinePartners';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function FlightsPage() {
  const { sections, sharedSections } = usePageContent('flights');

  return (
    <Main>
      {/* Navigation */}
      <Navbar backgroundColor="#0f6a38" dark sticky={false} />

      {/* 1. Hero */}
      <FlightsHero content={sections.hero} />

      {/* 2. Flight Search Form */}
      <FlightSearch />

      {/* 3. Popular Routes */}
      <PopularRoutes />

      {/* 4. Airline Partners + Why Book */}
      <AirlinePartners />

      {/* 5. Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
