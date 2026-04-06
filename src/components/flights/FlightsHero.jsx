'use client';

import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { MdFlightTakeoff, MdFlight } from 'react-icons/md';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const planeFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%      { transform: translateY(-12px) rotate(-5deg); }
`;

const Section = styled.section`
  position: relative;
  background: linear-gradient(165deg, #0d4a24 0%, #1B6B3A 40%, #238c4e 100%);
  padding: 8.5rem 2rem 5rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 7rem 1.25rem 3.5rem;
  }
`;

const PatternOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`;

const FloatingPlane = styled(MdFlight)`
  position: absolute;
  font-size: 8rem;
  color: rgba(255,255,255,0.04);
  animation: ${planeFloat} 4s ease-in-out infinite;

  &:nth-child(2) {
    top: 15%;
    right: 8%;
    transform: rotate(-15deg);
  }

  &:nth-child(3) {
    bottom: 20%;
    left: 5%;
    font-size: 5rem;
    transform: rotate(25deg);
    animation-delay: 1.5s;
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
  a:hover { color: #fff; }
  .current { color: #fff; font-weight: 600; }
`;

const SepIcon = styled(FiChevronRight)`
  font-size: 0.65rem;
  color: rgba(255,255,255,0.35);
`;

const PlaneIcon = styled(MdFlightTakeoff)`
  font-size: 3rem;
  color: rgba(255,255,255,0.18);
  margin-bottom: 0.75rem;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.15s;
  opacity: 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  line-height: 1.1;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.25s;
  opacity: 0;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  font-size: 1.05rem;
  color: rgba(255,255,255,0.72);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (max-width: 640px) {
    font-size: 0.92rem;
  }
`;

export default function FlightsHero({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};

  return (
    <Section>
      <PatternOverlay />
      <FloatingPlane />
      <FloatingPlane />
      <Breadcrumb>
        <Link href="/">Home</Link>
        <SepIcon />
        <span className="current">{data.breadcrumbCurrent || 'Flights'}</span>
      </Breadcrumb>
      <PlaneIcon />
      <Title>{data.title || 'Book Your Flights'}</Title>
      <Desc>
        {data.description || 'Find the best deals on domestic and international flights. Direct routes to Jeddah, Madinah, and 50+ destinations worldwide with trusted airline partners.'}
      </Desc>
    </Section>
  );
}
