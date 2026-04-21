'use client';

import styled, { keyframes } from 'styled-components';
import { FiCheck, FiShield, FiRefreshCw, FiHeadphones } from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-5px); }
`;

const Section = styled.section`
  background: #fff;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
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

/* Airline logos strip */
const AirlineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25rem;
  margin-bottom: 3.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AirlineCard = styled.div`
  background: #f9faf7;
  border-radius: 14px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s;
  border: 2px solid transparent;
  cursor: default;

  &:hover {
    border-color: rgba(27,107,58,0.1);
    background: #fff;
    box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    transform: translateY(-3px);
  }
`;

const AirlineDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color || '#1B6B3A'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.65rem;
  color: #fff;
  font-size: 1rem;

  ${AirlineCard}:hover & {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const AirlineName = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.15rem;
`;

const AirlineCountry = styled.div`
  font-size: 0.65rem;
  color: #aaa;
`;

/* Why book with us */
const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const WhyCard = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
`;

const WhyIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(27,107,58,0.1), rgba(27,107,58,0.04));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.85rem;
  color: #1B6B3A;
  font-size: 1.2rem;
`;

const WhyTitle = styled.div`
  font-size: 0.88rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.3rem;
`;

const WhyDesc = styled.div`
  font-size: 0.75rem;
  color: #888;
  line-height: 1.6;
`;

const airlines = [
  { name: 'Saudi Airlines', country: 'Saudi Arabia', color: '#006633' },
  { name: 'Emirates', country: 'UAE', color: '#d71920' },
  { name: 'PIA', country: 'Pakistan', color: '#006838' },
  { name: 'Qatar Airways', country: 'Qatar', color: '#5c0632' },
  { name: 'Etihad Airways', country: 'UAE', color: '#8a6b2f' },
  { name: 'Flynas', country: 'Saudi Arabia', color: '#7b2d8e' },
];

const whyItems = [
  { icon: FiCheck, title: 'Best Price Match', desc: 'We guarantee the lowest fares or match any competitor price.' },
  { icon: FiShield, title: 'Secure Booking', desc: 'SSL encrypted payments with multiple secure payment options.' },
  { icon: FiRefreshCw, title: 'Free Cancellation', desc: 'Flexible cancellation on select fares within 24 hours.' },
  { icon: FiHeadphones, title: '24/7 Support', desc: 'Round-the-clock assistance for all flight-related queries.' },
];

export default function AirlinePartners() {
  return (
    <Section id="airlines">
      <Inner>
        <SectionHeader>
          <Title>Airline Partners</Title>
          <Subtitle>Trusted partnerships with leading airlines for the best routes and fares</Subtitle>
        </SectionHeader>

        <AirlineGrid>
          {airlines.map((airline) => (
            <AirlineCard key={airline.name}>
              <AirlineDot $color={airline.color}>
                <MdFlightTakeoff />
              </AirlineDot>
              <AirlineName>{airline.name}</AirlineName>
              <AirlineCountry>{airline.country}</AirlineCountry>
            </AirlineCard>
          ))}
        </AirlineGrid>

        <WhyGrid>
          {whyItems.map((item) => {
            const Icon = item.icon;
            return (
              <WhyCard key={item.title}>
                <WhyIcon><Icon /></WhyIcon>
                <WhyTitle>{item.title}</WhyTitle>
                <WhyDesc>{item.desc}</WhyDesc>
              </WhyCard>
            );
          })}
        </WhyGrid>
      </Inner>
    </Section>
  );
}
