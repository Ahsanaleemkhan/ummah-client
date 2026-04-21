'use client';

import styled from 'styled-components';
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
      {/* Hero — company intro with image collage (navbar embedded) */}
      <AboutHero content={sections.hero} />

      {/* Mission, Vision & Values */}
      <MissionVision />

      {/* Our Story with timeline */}
      <OurStory />

      {/* Team members */}
      <TeamSection />

      {/* Achievements & awards */}
      <Achievements />

      {/* CTA */}
      <AboutCTA content={sections.cta} />

      {/* Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
