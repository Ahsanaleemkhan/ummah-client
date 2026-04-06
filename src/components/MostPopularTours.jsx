'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../lib/imageFallbacks';

const Section = styled.section`
  background: #ececec;
  padding: 3.2rem 2rem;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 1.9rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #1B6B3A;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.82rem;
  color: #666;
  margin: 0;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.45;
`;

/* Flex row — cards redistribute space on hover */
const CardsRow = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 980px;
  margin: 0 auto;
  height: 265px;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

/* Each card stretches/shrinks via flex */
const Card = styled.div`
  flex: ${({ $active }) => $active ? '2.6' : '1'};
  border-radius: 14px;
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
  width: ${({ $active }) => $active ? '52%' : '100%'};
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
  bottom: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: rgba(27,107,58,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  transition: opacity 0.3s;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  pointer-events: none;
`;

/* Content panel slides in from the right when active */
const ContentPanel = styled.div`
  background: #fff;
  padding: 1.15rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  overflow: hidden;

  /* Width animates via the parent flex transition */
  width: ${({ $active }) => $active ? '48%' : '0'};
  min-width: ${({ $active }) => $active ? '180px' : '0'};
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
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TourSubtitle = styled.div`
  font-size: 0.68rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const TourDesc = styled.p`
  font-size: 0.72rem;
  color: #555;
  line-height: 1.45;
  margin-bottom: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LearnMoreBtn = styled.a`
  display: inline-block;
  padding: 0.34rem 0.95rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.62rem;
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

const defaultTours = [
  {
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80',
    title: 'Baku City Explorer',
    subtitle: 'Azerbaijan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  },
  {
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=80',
    title: 'Maldives Retreat',
    subtitle: 'Maldives',
    desc: 'Escape to paradise with overwater bungalows, pristine beaches, and crystal-clear lagoons. An unforgettable halal-friendly getaway for couples and families.',
  },
  {
    img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1000&q=80',
    title: 'Vietnam Discovery',
    subtitle: 'Vietnam',
    desc: 'Journey through ancient temples, lush valleys and iconic floating villages. A cultural adventure blending history, nature and authentic local cuisine.',
  },
];

export default function MostPopularTours({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const tours = Array.isArray(data.tours) && data.tours.length > 0 ? data.tours : defaultTours;
  const learnMoreLabel = data.learnMoreLabel || 'Learn More';
  const learnMoreHref = data.learnMoreHref || '#tours';

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="tours">
      <SectionHeader>
        <Title>{data.title || 'Most Popular Tours'}</Title>
        <Subtitle>{data.subtitle || 'Discover top flight deals for elite travel experiences at unprecedented prices'}</Subtitle>
      </SectionHeader>

      <CardsRow>
        {tours.map((tour, i) => {
          const isActive = activeIndex === i;
          return (
            <Card
              key={tour.id || `${tour.title}-${i}`}
              $active={isActive}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {/* Image side */}
              <CardImage $active={isActive}>
                <img
                  src={withImageFallback(tour.img, i)}
                  alt={tour.title}
                  loading="lazy"
                  onError={(event) => handleImageError(event, i)}
                />
                <ArrowBtn $visible={!isActive}>↗</ArrowBtn>
              </CardImage>

              {/* Content panel — slides in on hover */}
              <ContentPanel $active={isActive}>
                <TourTitle>{tour.title}</TourTitle>
                <TourSubtitle>{tour.subtitle}</TourSubtitle>
                <TourDesc>{tour.desc}</TourDesc>
                <LearnMoreBtn href={learnMoreHref}>{learnMoreLabel}</LearnMoreBtn>
              </ContentPanel>
            </Card>
          );
        })}
      </CardsRow>
    </Section>
  );
}
