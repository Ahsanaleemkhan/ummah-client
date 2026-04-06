'use client';

import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  position: relative;
  background: linear-gradient(165deg, #0d4a24 0%, #1B6B3A 40%, #238c4e 100%);
  padding: 8.5rem 2rem 5.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 7rem 1.25rem 4rem;
  }
`;

const PatternOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    radial-gradient(circle at 30% 30%, #fff 1px, transparent 1px),
    radial-gradient(circle at 70% 70%, #fff 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

const TextSide = styled.div``;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;

  a, span {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover { color: #fff; }

  .sep {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.3);
  }

  .current {
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.25s;
  opacity: 0;

  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
`;

const Accent = styled.span`
  color: rgba(255,255,255,0.5);
  font-weight: 400;
  font-style: italic;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 480px;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const StatRow = styled.div`
  display: flex;
  gap: 2.5rem;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.55s;
  opacity: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  .num {
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
    line-height: 1;
  }
  .label {
    font-size: 0.68rem;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 0.2rem;
  }
`;

/* Image collage on the right */
const ImageSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 12px;
  animation: ${fadeUp} 0.7s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
    grid-template-rows: 160px 160px;
  }
`;

const ImgCell = styled.div`
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  &:nth-child(1) {
    grid-row: 1 / 3;
    border-radius: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%);
  pointer-events: none;
`;

const defaultStats = [
  { value: '10+', label: 'Years' },
  { value: '5,000+', label: 'Pilgrims' },
  { value: '15+', label: 'Countries' },
  { value: '4.9★', label: 'Rating' },
];

const defaultImages = [
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', alt: 'Kaaba' },
  { src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&q=80', alt: 'Pilgrims' },
  { src: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=500&q=80', alt: 'Madinah' },
];

export default function AboutHero({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const stats = Array.isArray(data.stats) && data.stats.length > 0 ? data.stats : defaultStats;
  const images = Array.isArray(data.images) && data.images.length > 0 ? data.images : defaultImages;

  return (
    <Section>
      <PatternOverlay />
      <Inner>
        <TextSide>
          <Breadcrumb>
            <Link href="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">{data.breadcrumbCurrent || 'About Us'}</span>
          </Breadcrumb>

          <Title>
            {data.titleLine1 || 'Guiding Pilgrims'}<br />
            <Accent>{data.titleAccent || 'Since 2015'}</Accent>
          </Title>

          <Desc>
            {data.description || 'Ummah Travel was founded with a single mission — to make the sacred journey of Umrah accessible, comfortable, and spiritually fulfilling for every Muslim around the world. Over the years, we\'ve grown into one of the most trusted names in Islamic travel.'}
          </Desc>

          <StatRow>
            {stats.map((stat, index) => (
              <StatItem key={`${stat?.label || 'stat'}-${index}`}>
                <div className="num">{stat?.value || '-'}</div>
                <div className="label">{stat?.label || '-'}</div>
              </StatItem>
            ))}
          </StatRow>
        </TextSide>

        <ImageSide>
          {images.slice(0, 3).map((image, index) => (
            <ImgCell key={`${image?.src || 'about-image'}-${index}`}>
              <img
                src={withImageFallback(image?.src || defaultImages[index]?.src, index)}
                alt={image?.alt || defaultImages[index]?.alt || 'About image'}
                loading="lazy"
                onError={(event) => handleImageError(event, index)}
              />
              <ImgOverlay />
            </ImgCell>
          ))}
        </ImageSide>
      </Inner>
    </Section>
  );
}
