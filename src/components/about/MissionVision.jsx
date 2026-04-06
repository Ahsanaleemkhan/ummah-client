'use client';

import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
`;

const Section = styled.section`
  background: #f7f8f5;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #1B6B3A;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  color: #777;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2.25rem 1.75rem;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  transition: all 0.35s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1B6B3A, #34a65f);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 48px rgba(27,107,58,0.12);
    border-color: rgba(27,107,58,0.08);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(27,107,58,0.12), rgba(27,107,58,0.04));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.8rem;
  transition: transform 0.3s;

  ${Card}:hover & {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.65rem;
`;

const CardDesc = styled.p`
  font-size: 0.82rem;
  color: #777;
  line-height: 1.7;
`;

const cards = [
  {
    icon: '🎯',
    title: 'Our Mission',
    desc: 'To make the sacred journey of Umrah and Hajj accessible to every Muslim worldwide, providing exceptional service with utmost care, integrity, and spiritual guidance at every step.',
  },
  {
    icon: '👁️',
    title: 'Our Vision',
    desc: 'To become the world\'s most trusted Islamic travel company, known for innovation, reliability, and creating life-changing spiritual experiences that bring pilgrims closer to their faith.',
  },
  {
    icon: '💎',
    title: 'Our Values',
    desc: 'Trust, transparency, and excellence form our foundation. We believe in honest pricing, exceptional customer care, and going above and beyond to ensure every pilgrim\'s journey is blessed.',
  },
];

export default function MissionVision() {
  return (
    <Section id="mission-vision">
      <SectionHeader>
        <Title>What Drives Us</Title>
        <Subtitle>Built on faith, driven by service, committed to excellence</Subtitle>
      </SectionHeader>

      <CardsGrid>
        {cards.map((card) => (
          <Card key={card.title}>
            <IconCircle>{card.icon}</IconCircle>
            <CardTitle>{card.title}</CardTitle>
            <CardDesc>{card.desc}</CardDesc>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
}
