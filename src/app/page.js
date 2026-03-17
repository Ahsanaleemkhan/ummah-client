'use client';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
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

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Main>
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero — service tabs + search + airplane */}
      <HeroSection />

      {/* 3. Popular Airlines logo strip */}
      <PopularAirlines />

      {/* 4. Trending Visas two-column list */}
      <TrendingVisas />

      {/* 5. Most Popular Tours cards */}
      <MostPopularTours />

      {/* 6. Umrah Packages 2026 */}
      <UmrahPackages />

      {/* 7. Features strip — Bundle & Save, One-Stop, Key Rewards */}
      <FeaturesStrip />

      {/* 8. Video Testimonials */}
      <VideoTestimonials />

      {/* 9. Photo collage + YouTube panel */}
      <PhotoGallery />

      {/* 10. Destination mosaic photo grid */}
      <DestinationGrid />

      {/* 11. "Your Ummah Journey Begins Here" CTA */}
      <JourneyBeginsCTA />

      {/* 12. Customer Reviews / Trustpilot */}
      <CustomerReviews />

      {/* 13. Footer */}
      <Footer />
    </Main>
  );
}
