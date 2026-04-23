'use client';

import styled from 'styled-components';
import { FiStar, FiArrowRight, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { MdFlightTakeoff, MdRestaurant } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';
import { useInView } from '../../lib/useInView';

const enterT = (delay = 0) => `
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${delay}s;
`;
const exitT = `
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: 0s;
`;

const Section = styled.section`
  background: #f5f5f5;
  padding: 4rem 2rem 4.5rem;
  @media (max-width: 768px) { padding: 3rem 1rem 3.5rem; }
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
  @media (max-width: 640px) { font-size: 1.4rem; }
`;

const Subtitle = styled.p`
  font-size: 0.82rem;
  color: #777;
  margin: 0;
  padding-left: 0.75rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 960px) { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  transition: box-shadow 0.35s ease, transform 0.35s ease,
              opacity 0.6s ease ${({ $delay }) => $delay || '0s'},
              transform 0.6s ease ${({ $delay }) => $delay || '0s'};
  position: relative;
  border: 2px solid ${({ $highlight }) => $highlight ? 'rgba(27,107,58,0.25)' : '#ebebeb'};
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(32px)')};

  &:hover {
    box-shadow: 0 12px 40px rgba(27,107,58,0.13);
    transform: translateY(-6px);
  }
`;

const PopularRibbon = styled.div`
  position: absolute;
  top: 16px;
  right: -30px;
  background: linear-gradient(135deg, #c9a227, #b8911e);
  color: #fff;
  font-size: 0.56rem;
  font-weight: 800;
  padding: 0.25rem 2.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transform: rotate(45deg);
  box-shadow: 0 2px 8px rgba(201,162,39,0.35);
  z-index: 2;
`;

const CardHeader = styled.div`
  background: ${({ $bg }) => $bg || 'linear-gradient(135deg, #1B6B3A, #238c4e)'};
  padding: 1.75rem 1.5rem 1.35rem;
  text-align: center;
  position: relative;
`;

const TierLabel = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.3rem;
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.85rem;
`;

const PriceBlock = styled.div`
  .amount {
    font-size: 1.75rem;
    font-weight: 900;
    color: #fff;
    line-height: 1;
  }
  .per {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.55);
    font-weight: 400;
  }
  .note {
    font-size: 0.63rem;
    color: rgba(255,255,255,0.45);
    margin-top: 0.22rem;
  }
`;

const CardBody = styled.div`
  padding: 1.35rem 1.35rem 1.5rem;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.1rem;
`;

const InfoChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.45rem 0.6rem;
  background: #f5f5f5;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #444;
  svg { color: #1B6B3A; font-size: 0.85rem; flex-shrink: 0; }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.35rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.76rem;
  color: #555;
  line-height: 1.45;

  svg {
    color: #1B6B3A;
    font-size: 0.8rem;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`;

const BookBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  padding: 0.78rem;
  background: ${({ $primary }) => $primary ? '#1B6B3A' : 'transparent'};
  color: ${({ $primary }) => $primary ? '#fff' : '#1B6B3A'};
  font-size: 0.8rem;
  font-weight: 700;
  border: 2px solid #1B6B3A;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.22s;
  letter-spacing: 0.03em;

  &:hover {
    background: #145230;
    color: #fff;
    transform: translateY(-1px);
  }

  svg { font-size: 0.88rem; transition: transform 0.2s; }
  &:hover svg { transform: translateX(3px); }
`;

const hajjPackages = [
  {
    id: 1,
    tier: 'Economy',
    title: 'Economy Hajj',
    price: '$3,050',
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
      'Shared rooms (4–6 per room) in Makkah & Mina',
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
    price: '$5,200',
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
    price: '$8,950',
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

export default function HajjPackages() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <Section id="hajj-packages">
      <Inner>
        <SectionHeader ref={headerRef} $inView={headerInView}>
          <Title>Choose Your Hajj Package</Title>
          <Subtitle>Three tiers crafted for every budget — all ensuring a blessed and comfortable pilgrimage</Subtitle>
        </SectionHeader>

        <Grid ref={gridRef}>
          {hajjPackages.map((pkg, i) => (
            <Card
              key={pkg.id}
              $highlight={pkg.highlight}
              $inView={gridInView}
              $delay={`${i * 0.12}s`}
            >
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
