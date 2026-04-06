'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #d6e4d6;
  padding: 64px 2rem 3.1rem;

  @media (max-width: 768px) {
    padding: 100px 1rem 2.7rem;
  }
`;

const Inner = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2.1rem;
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
  font-size: 4rem;
  font-weight: 900;
  color: #1B6B3A;
  line-height: 0.75;
  font-family: Georgia, serif;
  margin-bottom: 0.75rem;
  opacity: 0.85;
`;

const HeadingText = styled.h2`
  font-size: 1.3rem;
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
  font-size: 0.82rem;
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
  gap: 0.55rem;
`;

const Rail = styled.div`
  flex: 1;
  height: 2px;
  border-radius: 999px;
  background: rgba(27,107,58,0.28);
  position: relative;
`;

const RailProgress = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ $pct }) => `${$pct}%`};
  background: #1B6B3A;
  border-radius: 999px;
`;

const NavArrow = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #1B6B3A;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.85rem;
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
  border-radius: 10px;
  padding: 1.1rem 1rem 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 188px;

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 0.5rem);
  }
`;

const CardText = styled.p`
  font-size: 0.74rem;
  color: #444;
  line-height: 1.55;
  margin-bottom: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const CardStars = styled.div`
  color: #f5a623;
  font-size: 0.78rem;
  letter-spacing: 2px;
  margin-bottom: 0.65rem;
`;

const CardReviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2a2a2a;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.64rem;
  font-weight: 700;
`;

const ReviewerInfo = styled.div`
  .name {
    font-size: 0.74rem;
    font-weight: 800;
    color: #1a1a1a;
  }
  .sub {
    font-size: 0.64rem;
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
  const progressPct = maxOffset === 0 ? 100 : (offset / maxOffset) * 100;

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
            <Rail>
              <RailProgress $pct={progressPct} />
            </Rail>
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
