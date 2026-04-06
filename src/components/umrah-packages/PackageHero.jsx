'use client';

import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Section = styled.section`
  position: relative;
  background: linear-gradient(165deg, #0d4a24 0%, #1B6B3A 40%, #238c4e 100%);
  padding: 8.5rem 2rem 4.5rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 7rem 1.25rem 3.5rem;
  }
`;

/* Subtle geometric pattern overlay */
const PatternOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.045;
  background-image:
    radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`;

/* Mosque silhouette at the bottom */
const MosqueSilhouette = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  opacity: 0.08;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;

  a, span {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #fff;
  }

  .sep {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.35);
  }

  .current {
    color: #fff;
    font-weight: 600;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.25s;
  opacity: 0;
  line-height: 1.1;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255,255,255,0.75);
  max-width: 560px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (max-width: 640px) {
    font-size: 0.92rem;
  }
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.55s;
  opacity: 0;

  @media (max-width: 640px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

const Stat = styled.div`
  text-align: center;

  .number {
    font-size: 1.8rem;
    font-weight: 900;
    color: #fff;
    line-height: 1;
    background: linear-gradient(90deg, #fff 30%, rgba(255,255,255,0.6) 50%, #fff 70%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }

  .label {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 0.2rem;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.2);

  @media (max-width: 640px) {
    display: none;
  }
`;

export default function PackageHero() {
  return (
    <Section>
      <PatternOverlay />
      <MosqueSilhouette>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" fill="#fff">
          <rect x="0" y="85" width="1440" height="5" />
          <ellipse cx="720" cy="85" rx="120" ry="55" />
          <rect x="600" y="60" width="240" height="30" />
          <rect x="710" y="10" width="20" height="80" />
          <rect x="580" y="40" width="12" height="50" />
          <rect x="848" y="40" width="12" height="50" />
          <ellipse cx="200" cy="85" rx="70" ry="35" />
          <rect x="130" y="65" width="140" height="25" />
          <rect x="190" y="30" width="10" height="60" />
          <ellipse cx="1240" cy="85" rx="70" ry="35" />
          <rect x="1170" y="65" width="140" height="25" />
          <rect x="1230" y="30" width="10" height="60" />
        </svg>
      </MosqueSilhouette>

      <Breadcrumb>
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <span className="current">Umrah Packages</span>
      </Breadcrumb>

      <Title>Umrah Packages 2026</Title>
      <Subtitle>
        Choose from our carefully curated Umrah packages designed to provide a seamless,
        spiritually enriching journey to the Holy Lands
      </Subtitle>

      <StatsRow>
        <Stat>
          <div className="number">5,000+</div>
          <div className="label">Happy Pilgrims</div>
        </Stat>
        <Divider />
        <Stat>
          <div className="number">15+</div>
          <div className="label">Package Options</div>
        </Stat>
        <Divider />
        <Stat>
          <div className="number">4.9★</div>
          <div className="label">Avg. Rating</div>
        </Stat>
        <Divider />
        <Stat>
          <div className="number">24/7</div>
          <div className="label">Support</div>
        </Stat>
      </StatsRow>
    </Section>
  );
}
