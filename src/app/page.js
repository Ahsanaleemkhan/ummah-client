'use client';

import styled from 'styled-components';
import HomeHeroSection from '../components/HomeHeroSection';
import PopularAirlines from '../components/PopularAirlines';
import TrendingVisas from '../components/TrendingVisas';
import MostPopularTours from '../components/MostPopularTours';
import UmrahPackages from '../components/UmrahPackages';
import FeaturesStrip from '../components/FeaturesStrip';
import CustomerReviews from '../components/CustomerReviews';
import NewsletterCTA from '../components/NewsletterCTA';
import Footer from '../components/Footer';
import { usePageContent } from '../lib/usePageContent';

const Main = styled.main`
  background: #f5f5f5;
  color: #222;
  min-height: 100vh;
`;

export default function Home() {
  const { sections, sharedSections } = usePageContent('home');

  return (
    <Main>
      {/* Hero — dark green, two-column with search card */}
      <HomeHeroSection content={sections.hero} />

      {/* Service strip — Flights, Hotels, Visa, Umrah, Tours, Transfers */}
      <PopularAirlines content={sections.popularAirlines} />

      {/* Trending Visas card grid (2×4) */}
      <TrendingVisas content={sections.trendingVisas} />

      {/* Most Popular Tours — 4 cards */}
      <MostPopularTours content={sections.mostPopularTours} />

      {/* Umrah Packages 2026 — dark green pricing cards */}
      <UmrahPackages content={sections.umrahPackages} />

      {/* Why Travelers Choose Ummah — 4 features */}
      <FeaturesStrip />

      {/* What Our Travelers Say — 3 review cards */}
      <CustomerReviews content={sections.customerReviews} />

      {/* Newsletter CTA — dark green */}
      <NewsletterCTA />

      {/* Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
