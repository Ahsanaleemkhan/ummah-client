'use client';

import styled from 'styled-components';
import { FaHandshake, FaHotel, FaMapMarkedAlt, FaTags } from 'react-icons/fa';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const Section = styled.section`
  background: #ececec;
  padding: 6.8rem 2rem 1.8rem;

  @media (max-width: 768px) {
    padding: 6.2rem 1rem 1.2rem;
  }
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const HeroLayout = styled.div`
  margin-top: 1.8rem;
  display: grid;
  grid-template-columns: 1fr minmax(360px, 640px) 1fr;
  gap: 1.4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 760px;
    margin: 1.6rem auto 0;
    gap: 1.1rem;
  }
`;

const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.9rem;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
    order: ${({ $right }) => ($right ? 3 : 1)};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.article`
  display: flex;
  align-items: center;
  gap: 0.72rem;
  color: #2f2f2f;
  font-size: 0.86rem;
  line-height: 1.25;

  svg {
    color: #1b6b3a;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  strong {
    color: #1e1e1e;
  }
`;

const Showcase = styled.div`
  position: relative;
  background: radial-gradient(circle at 50% 15%, #3f915f 0%, #1b6b3a 62%, #16512d 100%);
  border-radius: 200px;
  min-height: 330px;
  padding: 1.15rem 1rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 56px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.14), transparent);
  }

  @media (max-width: 1024px) {
    order: 2;
  }

  @media (max-width: 640px) {
    border-radius: 40px;
    min-height: 260px;
  }
`;

const ShowcaseTitle = styled.h1`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1.08rem;
  color: #fff;
  text-align: center;
  width: 100%;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 0.92rem;
  }
`;

const ShowcaseImage = styled.img`
  width: min(90%, 510px);
  object-fit: contain;
  z-index: 1;
`;

const defaultLeftStats = [
  { title: 'Unbeatable prices', text: 'Guaranteed value tours' },
  { title: '300,000+ Activities', text: 'Experiences across top cities' },
];

const defaultRightStats = [
  { title: '200,000+ Hotels', text: 'Curated stays worldwide' },
  { title: 'Service assurance', text: 'Reliable support throughout' },
];

export default function ToursHero({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};

  const leftStats = Array.isArray(data.leftStats) && data.leftStats.length >= 2
    ? data.leftStats
    : defaultLeftStats;
  const rightStats = Array.isArray(data.rightStats) && data.rightStats.length >= 2
    ? data.rightStats
    : defaultRightStats;

  return (
    <Section>
      <Inner>
        <HeroLayout>
          <StatColumn>
            <StatItem>
              <FaTags />
              <div>
                <strong>{leftStats[0]?.title || defaultLeftStats[0].title}</strong>
                <br />
                {leftStats[0]?.text || defaultLeftStats[0].text}
              </div>
            </StatItem>

            <StatItem>
              <FaMapMarkedAlt />
              <div>
                <strong>{leftStats[1]?.title || defaultLeftStats[1].title}</strong>
                <br />
                {leftStats[1]?.text || defaultLeftStats[1].text}
              </div>
            </StatItem>
          </StatColumn>

          <Showcase>
            <ShowcaseTitle>{data.showcaseTitle || 'Tour Packages'}</ShowcaseTitle>
            <ShowcaseImage
              src={withImageFallback(data.showcaseImage, 0)}
              alt="World travel landmarks illustration"
              onError={(event) => handleImageError(event, 0)}
            />
          </Showcase>

          <StatColumn $right>
            <StatItem>
              <FaHotel />
              <div>
                <strong>{rightStats[0]?.title || defaultRightStats[0].title}</strong>
                <br />
                {rightStats[0]?.text || defaultRightStats[0].text}
              </div>
            </StatItem>

            <StatItem>
              <FaHandshake />
              <div>
                <strong>{rightStats[1]?.title || defaultRightStats[1].title}</strong>
                <br />
                {rightStats[1]?.text || defaultRightStats[1].text}
              </div>
            </StatItem>
          </StatColumn>
        </HeroLayout>
      </Inner>
    </Section>
  );
}
