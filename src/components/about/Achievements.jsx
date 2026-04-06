'use client';

import styled, { keyframes } from 'styled-components';

const countUp = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`;

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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #f7f8f5, #eef2e8);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.35s ease;
  border: 2px solid transparent;
  animation: ${countUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};

  &:hover {
    border-color: rgba(27,107,58,0.15);
    background: linear-gradient(135deg, #eef5e8, #e5ede0);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(27,107,58,0.08);
  }
`;

const StatIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
`;

const StatNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  color: #1B6B3A;
  line-height: 1;
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

/* Awards / Trust badges strip */
const AwardsStrip = styled.div`
  background: linear-gradient(135deg, #1B6B3A, #238c4e);
  border-radius: 20px;
  padding: 2.5rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1.5rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const AwardItem = styled.div`
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const AwardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.6rem;
`;

const AwardTitle = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.15rem;
`;

const AwardSub = styled.div`
  font-size: 0.68rem;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.04em;
`;

const stats = [
  { icon: '🕌', number: '5,000+', label: 'Pilgrims Served' },
  { icon: '🌍', number: '15+', label: 'Countries Covered' },
  { icon: '⭐', number: '4.9', label: 'Trustpilot Rating' },
  { icon: '📅', number: '10+', label: 'Years Experience' },
];

const awards = [
  { icon: '🏆', title: 'Best Umrah Provider', sub: 'Travel Awards 2025' },
  { icon: '✅', title: 'IATA Certified', sub: 'International Air Transport' },
  { icon: '🛡️', title: 'ATOL Protected', sub: 'Financial Security' },
  { icon: '⭐', title: 'Trustpilot Excellent', sub: '500+ 5-Star Reviews' },
];

export default function Achievements() {
  return (
    <Section id="achievements">
      <Inner>
        <SectionHeader>
          <Title>Our Achievements</Title>
          <Subtitle>Numbers that reflect our commitment to excellence</Subtitle>
        </SectionHeader>

        <StatsGrid>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} $delay={`${i * 0.1}s`}>
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <AwardsStrip>
          {awards.map((award) => (
            <AwardItem key={award.title}>
              <AwardIcon>{award.icon}</AwardIcon>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardSub>{award.sub}</AwardSub>
            </AwardItem>
          ))}
        </AwardsStrip>
      </Inner>
    </Section>
  );
}
