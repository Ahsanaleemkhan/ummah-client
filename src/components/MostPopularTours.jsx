'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #f0f0ed;
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.75rem;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: #1B6B3A;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.55rem;

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
`;

/* Flex row — cards redistribute space on hover */
const CardsRow = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  height: 320px;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

/* Each card stretches/shrinks via flex */
const Card = styled.div`
  flex: ${({ $active }) => $active ? '2.6' : '1'};
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: flex 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  min-width: 0;

  @media (max-width: 768px) {
    flex: none;
    height: ${({ $active }) => $active ? '300px' : '200px'};
    transition: height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

/* Image fills the card, always visible */
const CardImage = styled.div`
  flex-shrink: 0;
  width: ${({ $active }) => $active ? '55%' : '100%'};
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

/* Arrow button shown on inactive cards */
const ArrowBtn = styled.div`
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(27,107,58,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  transition: opacity 0.3s;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  pointer-events: none;
`;

/* Content panel slides in from the right when active */
const ContentPanel = styled.div`
  background: #fff;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  overflow: hidden;

  /* Width animates via the parent flex transition */
  width: ${({ $active }) => $active ? '45%' : '0'};
  min-width: ${({ $active }) => $active ? '200px' : '0'};
  flex-shrink: 0;
  opacity: ${({ $active }) => $active ? 1 : 0};
  transform: ${({ $active }) => $active ? 'translateX(0)' : 'translateX(20px)'};
  transition:
    width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    min-width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease ${({ $active }) => $active ? '0.2s' : '0s'},
    transform 0.35s ease ${({ $active }) => $active ? '0.15s' : '0s'};

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
    height: ${({ $active }) => $active ? 'auto' : '0'};
    padding: ${({ $active }) => $active ? '1.25rem 1.25rem' : '0 1.25rem'};
  }
`;

const TourTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TourSubtitle = styled.div`
  font-size: 0.78rem;
  color: #888;
  margin-bottom: 0.85rem;
`;

const TourDesc = styled.p`
  font-size: 0.8rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LearnMoreBtn = styled.a`
  display: inline-block;
  padding: 0.45rem 1.2rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: #145230;
  }
`;

const tours = [
  {
    img: 'https://picsum.photos/seed/baku/800/600',
    title: 'Baku City Explorer',
    subtitle: 'Azerbaijan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  },
  {
    img: 'https://picsum.photos/seed/maldives/800/600',
    title: 'Maldives Retreat',
    subtitle: 'Maldives',
    desc: 'Escape to paradise with overwater bungalows, pristine beaches, and crystal-clear lagoons. An unforgettable halal-friendly getaway for couples and families.',
  },
  {
    img: 'https://picsum.photos/seed/vietnam/800/600',
    title: 'Vietnam Discovery',
    subtitle: 'Vietnam',
    desc: 'Journey through ancient temples, lush valleys and iconic floating villages. A cultural adventure blending history, nature and authentic local cuisine.',
  },
];

export default function MostPopularTours() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="tours">
      <SectionHeader>
        <Title>Most Popular Tours</Title>
        <Subtitle>Discover top flight deals for elite travel experiences at unprecedented prices</Subtitle>
      </SectionHeader>

      <CardsRow>
        {tours.map((tour, i) => {
          const isActive = activeIndex === i;
          return (
            <Card
              key={tour.title}
              $active={isActive}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {/* Image side */}
              <CardImage $active={isActive}>
                <img src={tour.img} alt={tour.title} loading="lazy" />
                <ArrowBtn $visible={!isActive}>↗</ArrowBtn>
              </CardImage>

              {/* Content panel — slides in on hover */}
              <ContentPanel $active={isActive}>
                <TourTitle>{tour.title}</TourTitle>
                <TourSubtitle>{tour.subtitle}</TourSubtitle>
                <TourDesc>{tour.desc}</TourDesc>
                <LearnMoreBtn href="#tours">Learn More</LearnMoreBtn>
              </ContentPanel>
            </Card>
          );
        })}
      </CardsRow>
    </Section>
  );
}
