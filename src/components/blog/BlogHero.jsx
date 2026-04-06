'use client';

import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
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

const BookIcon = styled(HiOutlineBookOpen)`
  font-size: 3rem;
  color: rgba(255,255,255,0.15);
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

export default function BlogHero({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};

  return (
    <Section>
      <PatternOverlay />
      <Breadcrumb>
        <Link href="/">Home</Link>
        <SepIcon />
        <span className="current">{data.breadcrumbCurrent || 'Blog & Travel Tips'}</span>
      </Breadcrumb>
      <BookIcon />
      <Title>{data.title || 'Blog & Travel Tips'}</Title>
      <Desc>
        {data.description || 'Expert guidance, spiritual insights, and practical travel tips to help you prepare for your sacred journey to the Holy Lands.'}
      </Desc>
    </Section>
  );
}
