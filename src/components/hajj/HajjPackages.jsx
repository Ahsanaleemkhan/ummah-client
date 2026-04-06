'use client';

import styled, { keyframes } from 'styled-components';
import { FiStar, FiArrowRight, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { MdFlightTakeoff, MdRestaurant } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: #f7f8f5;
  padding: 4.5rem 2rem;
  @media (max-width: 768px) { padding: 3rem 1rem; }
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
  @media (max-width: 640px) { font-size: 1.6rem; }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  color: #777;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  transition: all 0.35s ease;
  position: relative;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
  border: 2px solid ${({ $highlight }) => $highlight ? 'rgba(27,107,58,0.3)' : 'transparent'};

  &:hover {
    box-shadow: 0 16px 56px rgba(27,107,58,0.14);
    transform: translateY(-8px);
  }
`;

const PopularRibbon = styled.div`
  position: absolute;
  top: 16px;
  right: -30px;
  background: linear-gradient(135deg, #f5a623, #e8911a);
  color: #fff;
  font-size: 0.58rem;
  font-weight: 800;
  padding: 0.25rem 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transform: rotate(45deg);
  box-shadow: 0 2px 8px rgba(245,166,35,0.3);
  z-index: 2;
`;

const CardHeader = styled.div`
  background: ${({ $bg }) => $bg || 'linear-gradient(135deg, #1B6B3A, #238c4e)'};
  padding: 2rem 1.5rem 1.25rem;
  text-align: center;
  position: relative;
`;

const TierLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.35rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.85rem;
`;

const PriceBlock = styled.div`
  .amount {
    font-size: 2rem;
    font-weight: 900;
    color: #fff;
    line-height: 1;
  }
  .per {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.55);
    font-weight: 400;
  }
  .note {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.45);
    margin-top: 0.25rem;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;
  margin-bottom: 1.25rem;
`;

const InfoChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.65rem;
  background: #f7f8f5;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #444;
  svg { color: #1B6B3A; font-size: 0.9rem; flex-shrink: 0; }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: #555;
  line-height: 1.4;

  svg {
    color: #1B6B3A;
    font-size: 0.82rem;
    flex-shrink: 0;
  }
`;

const BookBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  padding: 0.8rem;
  background: ${({ $primary }) => $primary ? '#1B6B3A' : 'transparent'};
  color: ${({ $primary }) => $primary ? '#fff' : '#1B6B3A'};
  font-size: 0.82rem;
  font-weight: 700;
  border: 2px solid #1B6B3A;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: 0.04em;

  &:hover {
    background: ${({ $primary }) => $primary ? '#145230' : '#1B6B3A'};
    color: #fff;
    transform: translateY(-1px);
  }

  svg { font-size: 0.92rem; transition: transform 0.2s; }
  &:hover svg { transform: translateX(3px); }
`;

/* Dummy data — ready for API swap */
const hajjPackages = [
  {
    id: 1,
    tier: 'Economy',
    title: 'Economy Hajj',
    price: 'Rs. 850,000',
    per: '/person',
    note: 'Shared accommodation',
    highlight: false,
    popular: false,
    bg: 'linear-gradient(135deg, #2d8a56, #1B6B3A)',
    hotel: '3-Star Hotel',
    meals: 'Breakfast',
    transport: 'Group Bus',
    visa: 'Visa Included',
    features: [
      'Shared rooms (4-6 per room) in Makkah & Mina',
      'Group transport between holy sites',
      'Experienced group leader & guide',
      'All Hajj rituals assistance',
      'Visa processing & health screening',
      'Zamzam water (5L) on return',
    ],
  },
  {
    id: 2,
    tier: 'Premium',
    title: 'Premium Hajj',
    price: 'Rs. 1,450,000',
    per: '/person',
    note: 'Most popular choice',
    highlight: true,
    popular: true,
    bg: 'linear-gradient(135deg, #0d4a24, #1B6B3A)',
    hotel: '5-Star Hotel',
    meals: 'Full Board',
    transport: 'Private AC',
    visa: 'Visa + Insurance',
    features: [
      '5-star Haram-facing hotel in Makkah',
      'Private AC transport for all movements',
      'Full board meals + Iftar at Arafat',
      'Dedicated scholar for spiritual guidance',
      'Priority visa & insurance coverage',
      'Exclusive Mina tent with AC & bedding',
      'Airport VIP lounge access',
      'Zamzam water (10L) on return',
    ],
  },
  {
    id: 3,
    tier: 'VIP',
    title: 'VIP Hajj',
    price: 'Rs. 2,500,000',
    per: '/person',
    note: 'Ultimate luxury experience',
    highlight: false,
    popular: false,
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    hotel: 'Royal Suite',
    meals: 'All Inclusive',
    transport: 'Private Vehicle',
    visa: 'Full Concierge',
    features: [
      'Royal suite with Kaaba view in Makkah',
      'Private chauffeur-driven luxury vehicle',
      'Personal cook & gourmet halal dining',
      'One-on-one scholar & spiritual mentor',
      'Private Mina tent with premium amenities',
      'Helicopter transfer option available',
      'Full medical team & health support',
      'Personal photographer for memories',
      'Zamzam water (25L) + premium gifts',
    ],
  },
];

export async function getHajjPackages() {
  return hajjPackages;
}

export default function HajjPackages() {
  return (
    <Section id="hajj-packages">
      <Inner>
        <SectionHeader>
          <Title>Choose Your Hajj Package</Title>
          <Subtitle>Three tiers crafted for every budget — all ensuring a blessed and comfortable pilgrimage</Subtitle>
        </SectionHeader>

        <Grid>
          {hajjPackages.map((pkg, i) => (
            <Card key={pkg.id} $delay={`${i * 0.12}s`} $highlight={pkg.highlight}>
              {pkg.popular && <PopularRibbon>Most Popular</PopularRibbon>}
              <CardHeader $bg={pkg.bg}>
                <TierLabel>{pkg.tier} Package</TierLabel>
                <CardTitle>{pkg.title}</CardTitle>
                <PriceBlock>
                  <div className="amount">{pkg.price} <span className="per">{pkg.per}</span></div>
                  <div className="note">{pkg.note}</div>
                </PriceBlock>
              </CardHeader>
              <CardBody>
                <InfoRow>
                  <InfoChip><IoBedOutline /> {pkg.hotel}</InfoChip>
                  <InfoChip><MdRestaurant /> {pkg.meals}</InfoChip>
                  <InfoChip><MdFlightTakeoff /> {pkg.transport}</InfoChip>
                  <InfoChip><HiOutlineIdentification /> {pkg.visa}</InfoChip>
                </InfoRow>
                <FeatureList>
                  {pkg.features.map((feat, fi) => (
                    <FeatureItem key={fi}>
                      <FiCheck /> {feat}
                    </FeatureItem>
                  ))}
                </FeatureList>
                <BookBtn href="/contact" $primary={pkg.highlight}>
                  Book Now <FiArrowRight />
                </BookBtn>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
