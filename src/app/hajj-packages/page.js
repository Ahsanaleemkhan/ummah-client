'use client';

import styled from 'styled-components';
import HajjHero from '../../components/hajj/HajjHero';
import HajjPackages from '../../components/hajj/HajjPackages';
import RamadanHajjPackages from '../../components/hajj/RamadanHajjPackages';
import HajjTimeline from '../../components/hajj/HajjTimeline';
import HajjFAQ from '../../components/hajj/HajjFAQ';
import HajjCTA from '../../components/hajj/HajjCTA';
import CustomerReviews from '../../components/CustomerReviews';
import NewsletterCTA from '../../components/NewsletterCTA';
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
      <HajjHero content={sections.hero} />
      <HajjPackages />
      <RamadanHajjPackages />
      <HajjTimeline />
      <HajjFAQ />
      <CustomerReviews content={sections.customerReviews} />
      <HajjCTA content={sections.cta} />
      <NewsletterCTA />
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
