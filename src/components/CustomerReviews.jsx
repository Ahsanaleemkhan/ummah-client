'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #d6e4d6;
  /* top padding = card height (160px) so carousel content clears the overlapping CTA card */
  padding: 80px 2rem 3.5rem;

  @media (max-width: 768px) {
    padding: 130px 1rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ── Left panel ── */
const LeftPanel = styled.div`
  padding-top: 0.5rem;
`;

const QuoteIcon = styled.div`
  font-size: 5rem;
  font-weight: 900;
  color: #1B6B3A;
  line-height: 0.75;
  font-family: Georgia, serif;
  margin-bottom: 0.75rem;
  opacity: 0.85;
`;

const HeadingText = styled.h2`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a2e1a;
  line-height: 1.4;
  margin-bottom: 1.5rem;
`;

/* Trustpilot badge */
const TrustBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 2rem;
`;

const TrustRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const TrustLogo = styled.span`
  font-size: 0.88rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.01em;

  span {
    color: #00b67a;
  }
`;

const TrustStars = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 2px;
`;

const StarBox = styled.span`
  width: 20px;
  height: 20px;
  background: #00b67a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.7rem;
`;

/* Nav arrows + range */
const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  flex: 1;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(
    to right,
    #1B6B3A calc(${({ $pct }) => $pct}%),
    rgba(27,107,58,0.25) calc(${({ $pct }) => $pct}%)
  );
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
  }

  &::-moz-range-thumb {
    width: 0;
    height: 0;
    border: none;
  }
`;

const NavArrow = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #1B6B3A;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  color: #1B6B3A;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #1B6B3A;
    color: #fff;
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

/* ── Carousel ── */
const CarouselWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $offset }) => `translateX(calc(-${$offset} * (100% / 3 + 0.34rem)))`};
`;

const ReviewCard = styled.div`
  flex: 0 0 calc(33.333% - 0.67rem);
  background: #fff;
  border-radius: 14px;
  padding: 1.4rem 1.3rem 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 0.5rem);
  }
`;

const CardText = styled.p`
  font-size: 0.8rem;
  color: #444;
  line-height: 1.65;
  margin-bottom: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const CardStars = styled.div`
  color: #f5a623;
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 0.85rem;
`;

const CardReviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #2a2a2a;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
`;

const ReviewerInfo = styled.div`
  .name {
    font-size: 0.82rem;
    font-weight: 800;
    color: #1a1a1a;
  }
  .sub {
    font-size: 0.72rem;
    color: #888;
  }
`;

const reviews = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    stars: 5,
    name: 'Lorem Ipsum',
    sub: 'Lorem Ipsum',
    initials: 'LI',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    stars: 5,
    name: 'Lorem Ipsum',
    sub: 'Lorem Ipsum',
    initials: 'LI',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    stars: 5,
    name: 'Lorem Ipsum',
    sub: 'Lorem Ipsum',
    initials: 'LI',
  },
  {
    text: 'Best Umrah experience of my life. Everything from flights to Haram-facing hotels was perfectly arranged. The team was available 24/7.',
    stars: 5,
    name: 'Muhammad Bilal',
    sub: 'Pakistan',
    initials: 'MB',
  },
  {
    text: 'We booked the premium package for our parents and they were absolutely delighted. Transport, meals, guidance — everything top notch.',
    stars: 5,
    name: 'Sarah Khan',
    sub: 'United Kingdom',
    initials: 'SK',
  },
  {
    text: 'Affordable, transparent pricing and no hidden fees. Visa was processed in just 3 days. Highly recommend Ummah Travel to everyone.',
    stars: 5,
    name: 'Ali Raza',
    sub: 'Canada',
    initials: 'AR',
  },
];

export default function CustomerReviews() {
  const [offset, setOffset] = useState(0);
  const maxOffset = reviews.length - 3;

  return (
    <Section id="reviews">
      <Inner>
        {/* Left panel */}
        <LeftPanel>
          <QuoteIcon>&ldquo;&ldquo;</QuoteIcon>
          <HeadingText>What our customers are saying</HeadingText>

          <TrustBadge>
            <TrustRow>
              <TrustLogo><span>★</span> Trustpilot</TrustLogo>
            </TrustRow>
            <TrustStars>
              {[1, 2, 3, 4, 5].map(i => (
                <StarBox key={i}>★</StarBox>
              ))}
            </TrustStars>
          </TrustBadge>

          <NavRow>
            <NavArrow
              onClick={() => setOffset(o => Math.max(0, o - 1))}
              disabled={offset === 0}
              aria-label="Previous"
            >
              ←
            </NavArrow>
            <RangeSlider
              type="range"
              min={0}
              max={maxOffset}
              value={offset}
              $pct={maxOffset === 0 ? 100 : (offset / maxOffset) * 100}
              onChange={e => setOffset(Number(e.target.value))}
            />
            <NavArrow
              onClick={() => setOffset(o => Math.min(maxOffset, o + 1))}
              disabled={offset >= maxOffset}
              aria-label="Next"
            >
              →
            </NavArrow>
          </NavRow>
        </LeftPanel>

        {/* Carousel */}
        <CarouselWrapper>
          <CarouselTrack $offset={offset}>
            {reviews.map((r, i) => (
              <ReviewCard key={i}>
                <CardText>{r.text}</CardText>
                <div>
                  <CardStars>{'★'.repeat(r.stars)}</CardStars>
                  <CardReviewer>
                    <Avatar>{r.initials}</Avatar>
                    <ReviewerInfo>
                      <div className="name">{r.name}</div>
                      <div className="sub">{r.sub}</div>
                    </ReviewerInfo>
                  </CardReviewer>
                </div>
              </ReviewCard>
            ))}
          </CarouselTrack>
        </CarouselWrapper>
      </Inner>
    </Section>
  );
}
