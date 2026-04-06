'use client';

import styled from 'styled-components';
import HomeHeroSection from '../components/HomeHeroSection';
import PopularAirlines from '../components/PopularAirlines';
import TrendingVisas from '../components/TrendingVisas';
import MostPopularTours from '../components/MostPopularTours';
import UmrahPackages from '../components/UmrahPackages';
import FeaturesStrip from '../components/FeaturesStrip';
import VideoTestimonials from '../components/VideoTestimonials';
import PhotoGallery from '../components/PhotoGallery';
import DestinationGrid from '../components/DestinationGrid';
import JourneyBeginsCTA from '../components/JourneyBeginsCTA';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';
import { usePageContent } from '../lib/usePageContent';

const Main = styled.main`
  background: #ececec;
  color: #222;
  min-height: 100vh;
`;

export default function Home() {
  const { sections, sharedSections } = usePageContent('home');

  return (
    <Main>
      {/* 1. Hero with navbar + search + airplane */}
      <HomeHeroSection content={sections.hero} />

      {/* 2. Popular Airlines logo strip */}
      <PopularAirlines content={sections.popularAirlines} />

      {/* 3. Trending Visas two-column list */}
      <TrendingVisas content={sections.trendingVisas} />

      {/* 4. Most Popular Tours cards */}
      <MostPopularTours content={sections.mostPopularTours} />

      {/* 5. Umrah Packages 2026 */}
      <UmrahPackages content={sections.umrahPackages} />

      {/* 6. Features strip — Bundle & Save, One-Stop, Key Rewards */}
      <FeaturesStrip />

      {/* 7. Video Testimonials */}
      <VideoTestimonials />

      {/* 8. Photo collage + YouTube panel */}
      <PhotoGallery />

      {/* 9. Destination mosaic photo grid */}
      <DestinationGrid />

      {/* 10. "Your Ummah Journey Begins Here" CTA */}
      <JourneyBeginsCTA content={sections.journeyCta} />

      {/* 11. Customer Reviews / Trustpilot */}
      <CustomerReviews />

      {/* 12. Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
