'use client';

import styled, { keyframes } from 'styled-components';
import { FiShield, FiHeadphones, FiDollarSign, FiCalendar } from 'react-icons/fi';
import { HiOutlineTicket, HiOutlineUserGroup, HiOutlinePhotograph, HiOutlineCurrencyDollar } from 'react-icons/hi';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
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

const SubTitle = styled.p`
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

  &:hover {
    border-color: rgba(27,107,58,0.12);
    background: #fff;
    box-shadow: 0 8px 36px rgba(27,107,58,0.08);
    transform: translateY(-4px);
  }
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(27,107,58,0.1), rgba(27,107,58,0.04));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #1B6B3A;
  font-size: 1.4rem;
  transition: transform 0.3s;

  ${Card}:hover & {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const CardTitle = styled.h3`
  font-size: 0.92rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.45rem;
`;

const CardDesc = styled.p`
  font-size: 0.76rem;
  color: #888;
  line-height: 1.65;
`;

const features = [
  {
    icon: HiOutlineTicket,
    title: 'All-Inclusive Packages',
    desc: 'Flights, hotels, meals, and guided tours bundled into one hassle-free price.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Expert Tour Guides',
    desc: 'Multilingual guides with deep local knowledge for immersive cultural experiences.',
  },
  {
    icon: FiShield,
    title: 'Halal Certified',
    desc: 'Every destination vetted for halal dining, prayer facilities, and family-friendly activities.',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Travel Support',
    desc: 'Round-the-clock assistance from booking to return, wherever you are in the world.',
  },
  {
    icon: HiOutlinePhotograph,
    title: 'Curated Experiences',
    desc: 'Hand-selected activities, hidden gems, and iconic landmarks — nothing generic.',
  },
  {
    icon: FiCalendar,
    title: 'Flexible Scheduling',
    desc: 'Choose your dates, extend your stay, or customize the itinerary to your needs.',
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: 'Best Price Guarantee',
    desc: 'Competitive pricing with transparent costs. No hidden fees or surprise charges.',
  },
  {
    icon: FiDollarSign,
    title: 'Easy Payment Plans',
    desc: 'Split your booking into easy monthly installments. Book now, pay later options available.',
  },
];

export default function ToursFeatures() {
  return (
    <Section id="tour-features">
      <SectionHeader>
        <Title>Why Travel With Us</Title>
        <SubTitle>Every tour is crafted with care, comfort, and your faith in mind</SubTitle>
      </SectionHeader>

      <Grid>
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title}>
              <IconCircle><Icon /></IconCircle>
              <CardTitle>{f.title}</CardTitle>
              <CardDesc>{f.desc}</CardDesc>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
