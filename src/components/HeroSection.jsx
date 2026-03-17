'use client';

import { useState } from 'react';
import styled from 'styled-components';
import ServiceTabs from './ServiceTabs';
import SearchForm from './SearchForm';

const HeroWrapper = styled.section`
  padding-top: 60px;
`;

/* ── White top: just spacing below navbar ── */
const WhiteArea = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0;
  }
`;

/* ── SVG curve — the gray dome curving up ── */
const CurveSvg = styled.svg`
  display: block;
  width: 100%;
  height: 80px;
  background: #ffffff;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

/* ── Gray area: search form + airplane ── */
const GrayArea = styled.div`
  background: #f0f1ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem 3rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem 2rem;
  }
`;

/* ── Airplane image ── */
const ImgWrap = styled.div`
  background: #f0f1ec;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const PlaneImg = styled.img`
  width: 100%;
  max-width: 880px;
  height: auto;
  object-fit: contain;
  display: block;
`;

/* Tabs wrapper — positioned to overlap the curve boundary */
const TabsOverlap = styled.div`
  position: relative;
  z-index: 5;
  margin-bottom: -55px;

  @media (max-width: 768px) {
    margin-bottom: -30px;
  }
`;

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('flight');

  return (
    <HeroWrapper id="hero">
      {/* White section — tabs sit here, overlapping into the curve */}
      <WhiteArea>
        <TabsOverlap>
          <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </TabsOverlap>
      </WhiteArea>

      {/* SVG dome curve — gray rises UP into white */}
      <CurveSvg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,80 L0,80 Q720,0 1440,80 L1440,80 Z"
          fill="#f0f1ec"
        />
      </CurveSvg>

      {/* Gray area — search form */}
      <GrayArea>
        <SearchForm activeTab={activeTab} />
      </GrayArea>

      {/* Gray area — airplane image */}
      <ImgWrap>
        <PlaneImg
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1200&q=85"
          alt="Airplane flying through clouds"
          loading="eager"
        />
      </ImgWrap>
    </HeroWrapper>
  );
}
