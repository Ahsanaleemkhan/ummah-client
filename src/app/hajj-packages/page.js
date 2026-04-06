'use client';

import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import HajjHero from '../../components/hajj/HajjHero';
import HajjPackages from '../../components/hajj/HajjPackages';
import HajjTimeline from '../../components/hajj/HajjTimeline';
import HajjFAQ from '../../components/hajj/HajjFAQ';
import HajjCTA from '../../components/hajj/HajjCTA';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function HajjPage() {
  const { sections, sharedSections } = usePageContent('hajj-packages');

  return (
    <Main>
      <Navbar backgroundColor="#0f6a38" dark sticky={false} />
      <HajjHero content={sections.hero} />
      <HajjPackages />
      <HajjTimeline />
      <HajjFAQ />
      <HajjCTA content={sections.cta} />
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
