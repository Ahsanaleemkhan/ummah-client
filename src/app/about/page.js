'use client';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/about/AboutHero';
import MissionVision from '../../components/about/MissionVision';
import OurStory from '../../components/about/OurStory';
import TeamSection from '../../components/about/TeamSection';
import Achievements from '../../components/about/Achievements';
import AboutCTA from '../../components/about/AboutCTA';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function AboutPage() {
  const { sections, sharedSections } = usePageContent('about');

  return (
    <Main>
      {/* Navigation */}
      <Navbar backgroundColor="#0f6a38" dark sticky={false} />

      {/* 1. Hero — company intro with image collage */}
      <AboutHero content={sections.hero} />

      {/* 2. Mission, Vision & Values */}
      <MissionVision />

      {/* 3. Our Story with timeline */}
      <OurStory />

      {/* 4. Team members */}
      <TeamSection />

      {/* 5. Achievements & awards */}
      <Achievements />

      {/* 6. CTA */}
      <AboutCTA content={sections.cta} />

      {/* 7. Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
