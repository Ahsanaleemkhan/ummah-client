'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`;

const VideoCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.08);
  text-align: left;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.14);
  }
`;

const VideoThumb = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  background: #1a1a2e;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.75;
    transition: opacity 0.2s;
  }

  &:hover img {
    opacity: 0.9;
  }
`;

const ThumbOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PlayBtn = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);

  &:hover {
    transform: scale(1.1);
    background: #fff;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 3px;
  }
`;

const VideoLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: rgba(27,107,58,0.85);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
`;

const VideoBody = styled.div`
  padding: 1rem 1.1rem 1.25rem;
`;

const ReviewerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e8f5e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1B6B3A;
  flex-shrink: 0;
`;

const ReviewerInfo = styled.div`
  .name {
    font-size: 0.82rem;
    font-weight: 700;
    color: #222;
  }
  .country {
    font-size: 0.7rem;
    color: #999;
  }
`;

const Stars = styled.div`
  font-size: 0.75rem;
  color: #f5a623;
  margin-bottom: 0.4rem;
`;

const ReviewText = styled.p`
  font-size: 0.78rem;
  color: #666;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const testimonials = [
  {
    thumb: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=75',
    name: 'Ahmed Hassan',
    initials: 'AH',
    country: '🇵🇰 Pakistan',
    rating: 5,
    text: 'Absolutely amazing experience! Ummah Travel handled everything perfectly — from visa to hotel. The Haram was just 2 minutes away. Will definitely book again.',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=75',
    name: 'Fatima Al-Rashidi',
    initials: 'FA',
    country: '🇬🇧 United Kingdom',
    rating: 5,
    text: 'The team was so professional and supportive throughout our Umrah journey. The premium package was worth every penny. Highly recommend to all Muslim travelers.',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=75',
    name: 'Omar Siddiqui',
    initials: 'OS',
    country: '🇨🇦 Canada',
    rating: 5,
    text: 'Seamless booking process and excellent customer service. Our guide in Makkah was knowledgeable and patient. A truly blessed journey for our whole family.',
  },
];

export default function VideoTestimonials() {
  return (
    <Section id="testimonials">
      <CardsRow>
        {testimonials.map((t) => (
          <VideoCard key={t.name}>
            <VideoThumb>
              <img src={t.thumb} alt={`${t.name} testimonial`} loading="lazy" />
              <ThumbOverlay>
                <PlayBtn aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="#1B6B3A">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </PlayBtn>
                <VideoLabel>Video Testimonial</VideoLabel>
              </ThumbOverlay>
            </VideoThumb>
            <VideoBody>
              <ReviewerRow>
                <Avatar>{t.initials}</Avatar>
                <ReviewerInfo>
                  <div className="name">{t.name}</div>
                  <div className="country">{t.country}</div>
                </ReviewerInfo>
              </ReviewerRow>
              <Stars>{'★'.repeat(t.rating)}</Stars>
              <ReviewText>{t.text}</ReviewText>
            </VideoBody>
          </VideoCard>
        ))}
      </CardsRow>
    </Section>
  );
}
