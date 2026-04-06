'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #ececec;
  padding: 2.4rem 2rem 2.8rem;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`;

const VideoCard = styled.div`
  background: #fff;
  border-radius: 18px;
  border: 1px solid #dedede;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2d2d2d;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
`;

export default function VideoTestimonials() {
  return (
    <Section id="testimonials">
      <CardsRow>
        <VideoCard>Video Testimonial</VideoCard>
        <VideoCard>Video Testimonial</VideoCard>
        <VideoCard>Video Testimonial</VideoCard>
      </CardsRow>
    </Section>
  );
}
