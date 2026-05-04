'use client';

import styled from 'styled-components';
import PackageHero from '../../components/umrah-packages/PackageHero';
import UmrahServicePrograms from '../../components/umrah-packages/UmrahServicePrograms';
import PackageCards from '../../components/umrah-packages/PackageCards';
import PackageCompare from '../../components/umrah-packages/PackageCompare';
import WhyChooseUs from '../../components/umrah-packages/WhyChooseUs';
import PackageFAQ from '../../components/umrah-packages/PackageFAQ';
import PackageCTA from '../../components/umrah-packages/PackageCTA';
import CustomerReviews from '../../components/CustomerReviews';
import NewsletterCTA from '../../components/NewsletterCTA';
import Footer from '../../components/Footer';
import { usePageContent } from '../../lib/usePageContent';

const Main = styled.main`
  background: #fff;
  color: #222;
  min-height: 100vh;
`;

export default function UmrahPackagesPage() {
  const { sections, sharedSections } = usePageContent('umrah-packages');

  return (
    <Main>
      {/* Hero with embedded navbar */}
      <PackageHero content={sections.hero} />

      {/* Core Umrah services */}
      <UmrahServicePrograms content={sections.services} />

      {/* Package cards listing */}
      <PackageCards content={sections.packages} />

      {/* Package comparison table */}
      <PackageCompare content={sections.compare} />

      {/* Why choose us */}
      <WhyChooseUs content={sections.whyUs} />

      {/* FAQ */}
      <PackageFAQ content={sections.faq} />

      {/* CTA banner */}
      <PackageCTA content={sections.cta} />

      {/* Customer reviews */}
      <CustomerReviews content={sections.customerReviews} />

      {/* Newsletter */}
      <NewsletterCTA content={sections.newsletter} />

      {/* Footer */}
      <Footer content={sharedSections.footer} />
    </Main>
  );
}
