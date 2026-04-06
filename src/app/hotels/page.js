'use client';

import styled from 'styled-components';
import HotelsHero from '../../components/hotels/HotelsHero';
import HotelsGrid from '../../components/hotels/HotelsGrid';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #e7e7e7;
  color: #222;
  min-height: 100vh;
`;

export default function HotelsPage() {
  const { sections, sharedSections } = usePageContent('hotels');

  return (
    <Main>
      {/* 1. Hero with integrated top header + hotel search */}
      <HotelsHero content={sections.hero} />

      {/* 2. Hotels page sections stack */}
      <HotelsGrid />

      {/* 3. Shared footer (same as Home) */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
