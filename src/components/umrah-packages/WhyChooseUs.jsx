'use client';

import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

const Section = styled.section`
  background: #fff;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #f9faf7;
  border-radius: 18px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.35s ease;
  border: 2px solid transparent;
  cursor: default;

  &:hover {
    border-color: rgba(27,107,58,0.15);
    background: #fff;
    box-shadow: 0 8px 36px rgba(27,107,58,0.08);
    transform: translateY(-4px);
  }
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(27,107,58,0.1), rgba(27,107,58,0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.15rem;
  font-size: 1.6rem;
  transition: transform 0.3s;

  ${Card}:hover & {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.78rem;
  color: #777;
  line-height: 1.65;
`;

const features = [
  {
    icon: '🕋',
    title: 'Haram Proximity',
    desc: 'Hotels carefully selected for their closeness to Masjid al-Haram and Masjid an-Nabawi.',
  },
  {
    icon: '✈️',
    title: 'Direct Flights',
    desc: 'Partner airlines offering direct routes from major cities with flexible schedules.',
  },
  {
    icon: '🎯',
    title: 'Expert Guides',
    desc: 'Experienced multilingual guides to assist you throughout your spiritual journey.',
  },
  {
    icon: '🛡️',
    title: 'Full Protection',
    desc: 'Comprehensive travel insurance, 24/7 emergency support, and money-back guarantee.',
  },
  {
    icon: '🍽️',
    title: 'Halal Dining',
    desc: 'Premium halal meals curated for diverse tastes, from traditional to international cuisine.',
  },
  {
    icon: '🚐',
    title: 'Seamless Transport',
    desc: 'Air-conditioned vehicles for all inter-city transfers and ziyarat (holy site visits).',
  },
  {
    icon: '📋',
    title: 'Visa Hassle-Free',
    desc: 'Complete visa processing handled by our team — just submit your documents.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Friendly',
    desc: 'Special family packages with kid-friendly amenities, strollers, and flexible schedules.',
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
      <SectionHeader>
        <Title>Why Choose Ummah Travel</Title>
        <Subtitle>Trusted by thousands of pilgrims worldwide for seamless Umrah experiences</Subtitle>
      </SectionHeader>

      <Grid>
        {features.map((f) => (
          <Card key={f.title}>
            <IconCircle>{f.icon}</IconCircle>
            <CardTitle>{f.title}</CardTitle>
            <CardDesc>{f.desc}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
