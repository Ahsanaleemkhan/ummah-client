'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const Section = styled.section`
  background: #fff;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ImageSide = styled.div`
  position: relative;
`;

const MainImage = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: #1B6B3A;
  color: #fff;
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(27,107,58,0.35);

  .number {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
  }

  .text {
    font-size: 0.72rem;
    opacity: 0.8;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: -15px;
  }
`;

const TextSide = styled.div``;

const Label = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  color: #1B6B3A;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #1a1a2e;
  line-height: 1.2;
  margin-bottom: 1.25rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  font-size: 0.88rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.25rem;
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const YearBadge = styled.div`
  flex-shrink: 0;
  padding: 0.3rem 0.65rem;
  background: rgba(27,107,58,0.08);
  color: #1B6B3A;
  font-size: 0.72rem;
  font-weight: 800;
  border-radius: 8px;
  letter-spacing: 0.04em;
  min-width: 50px;
  text-align: center;
`;

const TimelineText = styled.div`
  font-size: 0.82rem;
  color: #555;
  line-height: 1.6;

  strong {
    color: #222;
    font-weight: 700;
  }
`;

export default function OurStory() {
  return (
    <Section id="our-story">
      <Inner>
        <ImageSide>
          <MainImage>
            <img
              src={withImageFallback('https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80', 0)}
              alt="Pilgrims at Masjid al-Haram"
              loading="lazy"
              onError={(event) => handleImageError(event, 0)}
            />
          </MainImage>
          <FloatingCard>
            <div className="number">10+</div>
            <div className="text">Years of Trust</div>
          </FloatingCard>
        </ImageSide>

        <TextSide>
          <Label>Our Story</Label>
          <Title>A Journey Built on Faith & Service</Title>
          <Desc>
            What started as a small family-run agency in 2015 has blossomed into
            a leading Umrah travel provider serving pilgrims across 15+ countries.
            Every package we craft carries the same personal touch that defined
            our very first group.
          </Desc>
          <Desc>
            Our founder, inspired by his own transformative Umrah experience,
            envisioned a service where every pilgrim — regardless of budget —
            would feel cared for from departure to return.
          </Desc>

          <TimelineList>
            <TimelineItem>
              <YearBadge>2015</YearBadge>
              <TimelineText>
                <strong>Founded</strong> — First group of 25 pilgrims from Pakistan
              </TimelineText>
            </TimelineItem>
            <TimelineItem>
              <YearBadge>2018</YearBadge>
              <TimelineText>
                <strong>Expanded</strong> — Operations to UK, Canada & UAE markets
              </TimelineText>
            </TimelineItem>
            <TimelineItem>
              <YearBadge>2021</YearBadge>
              <TimelineText>
                <strong>Milestone</strong> — Served 3,000+ pilgrims, IATA certified
              </TimelineText>
            </TimelineItem>
            <TimelineItem>
              <YearBadge>2026</YearBadge>
              <TimelineText>
                <strong>Today</strong> — 5,000+ happy pilgrims, 4.9★ Trustpilot rating
              </TimelineText>
            </TimelineItem>
          </TimelineList>
        </TextSide>
      </Inner>
    </Section>
  );
}
