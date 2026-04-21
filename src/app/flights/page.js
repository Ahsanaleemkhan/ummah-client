'use client';

import styled from 'styled-components';
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
      {/* Hero with embedded navbar */}
      <FlightsHero content={sections.hero} />

      {/* Flight Search Form */}
      <FlightSearch />

      {/* Popular Routes */}
      <PopularRoutes />

      {/* Airline Partners + Why Book */}
      <AirlinePartners />

      {/* Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
