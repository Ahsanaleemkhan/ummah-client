'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
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
  margin-bottom: 2.5rem;
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

/* Filter Tabs */
const TabsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 0.5rem 1.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 999px;
  border: 2px solid ${({ $active }) => $active ? '#1B6B3A' : '#ddd'};
  background: ${({ $active }) => $active ? '#1B6B3A' : '#fff'};
  color: ${({ $active }) => $active ? '#fff' : '#555'};
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.03em;

  &:hover {
    border-color: #1B6B3A;
    color: ${({ $active }) => $active ? '#fff' : '#1B6B3A'};
  }
`;

/* Cards Grid */
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
  position: relative;

  &:hover {
    box-shadow: 0 12px 48px rgba(27,107,58,0.15);
    transform: translateY(-6px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  background: linear-gradient(135deg, #f5a623, #e8911a);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(245,166,35,0.4);
`;

const CardImg = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

const NightsBadge = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  backdrop-filter: blur(6px);
`;

const CardBody = styled.div`
  padding: 1.35rem 1.4rem 1.5rem;
`;

const CardTitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.25;
`;

const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background: #fef9ee;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  flex-shrink: 0;

  .star {
    color: #f5a623;
    font-size: 0.75rem;
  }
  .score {
    font-size: 0.72rem;
    font-weight: 700;
    color: #333;
  }
`;

const CardDesc = styled.p`
  font-size: 0.82rem;
  color: #777;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

/* Feature pills */
const FeaturesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.15rem;
`;

const FeaturePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.6rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: #1B6B3A;
  background: rgba(27,107,58,0.08);
  border-radius: 999px;
  letter-spacing: 0.02em;

  .icon {
    font-size: 0.72rem;
  }
`;

/* Divider line */
const CardDivider = styled.div`
  height: 1px;
  background: #f0f0f0;
  margin-bottom: 1rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  .label {
    font-size: 0.62rem;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .amount {
    font-size: 1.25rem;
    font-weight: 900;
    color: #1B6B3A;
    line-height: 1.1;
  }

  .per {
    font-size: 0.65rem;
    color: #aaa;
    font-weight: 400;
  }
`;

const BookBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 1.35rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: #145230;
    transform: translateX(2px);
  }

  .arrow {
    font-size: 0.85rem;
    transition: transform 0.2s;
  }

  &:hover .arrow {
    transform: translateX(3px);
  }
`;

/* ── Data ── */
const allPackages = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
    nights: '14 Nights',
    title: 'Economy Umrah Package',
    desc: 'Comfortable economy-class experience with group accommodation near Haram in Makkah and Madinah. Ideal for families seeking value.',
    hotel: '4-Star Hotel',
    meals: 'Breakfast Included',
    transport: 'Group Transport',
    visa: 'Visa Included',
    price: 'Rs. 185,000',
    per: '/person',
    rating: '4.8',
    category: 'economy',
    popular: false,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
    nights: '21 Nights',
    title: 'Premium Umrah Package',
    desc: 'Upgraded rooms 50m from Haram, direct flights, full visa support, and a dedicated group guide throughout your journey.',
    hotel: '5-Star Hotel',
    meals: 'Full Board',
    transport: 'Private Transport',
    visa: 'Visa Included',
    price: 'Rs. 385,000',
    per: '/person',
    rating: '4.9',
    category: 'premium',
    popular: true,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80',
    nights: '10 Nights',
    title: 'Budget Umrah Package',
    desc: 'An affordable yet complete Umrah experience with group transport, comfortable accommodation, and visa processing included.',
    hotel: '3-Star Hotel',
    meals: 'Bed & Breakfast',
    transport: 'Group Transport',
    visa: 'Visa Included',
    price: 'Rs. 120,000',
    per: '/person',
    rating: '4.7',
    category: 'budget',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80',
    nights: '28 Nights',
    title: 'Ramadan Special Package',
    desc: 'Spend the blessed month of Ramadan in the Holy Lands with premium Haram-facing rooms, Iftar & Suhoor, and spiritual guides.',
    hotel: '5-Star Haram View',
    meals: 'All Inclusive',
    transport: 'Private Transport',
    visa: 'Visa + Insurance',
    price: 'Rs. 550,000',
    per: '/person',
    rating: '5.0',
    category: 'premium',
    popular: true,
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=80',
    nights: '7 Nights',
    title: 'Express Umrah Package',
    desc: 'Short on time? Our express package covers all rituals with 3-night Makkah and 4-night Madinah stays near the Haram.',
    hotel: '4-Star Hotel',
    meals: 'Breakfast Included',
    transport: 'Group Transport',
    visa: 'Visa Included',
    price: 'Rs. 95,000',
    per: '/person',
    rating: '4.6',
    category: 'budget',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
    nights: '14 Nights',
    title: 'Family Umrah Package',
    desc: 'Spacious family suites, kid-friendly amenities, flexible scheduling, and dedicated family concierge for a stress-free journey.',
    hotel: '5-Star Suite',
    meals: 'Full Board',
    transport: 'Private Van',
    visa: 'Family Visa Deal',
    price: 'Rs. 320,000',
    per: '/person',
    rating: '4.9',
    category: 'economy',
    popular: true,
  },
];

const tabs = ['All', 'Budget', 'Economy', 'Premium'];

export default function PackageCards() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? allPackages
    : allPackages.filter(p => p.category === activeTab.toLowerCase());

  return (
    <Section id="packages-list">
      <SectionHeader>
        <Title>Choose Your Package</Title>
        <Subtitle>All packages include visa processing, return flights, and hotel accommodation</Subtitle>
      </SectionHeader>

      <TabsRow>
        {tabs.map(tab => (
          <Tab
            key={tab}
            $active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsRow>

      <CardsGrid>
        {filtered.map((pkg, i) => (
          <Card key={pkg.id} $delay={`${i * 0.08}s`}>
            {pkg.popular && <PopularBadge>Most Popular</PopularBadge>}
            <CardImg>
              <img
                src={withImageFallback(pkg.img, i)}
                alt={pkg.title}
                loading="lazy"
                onError={(event) => handleImageError(event, i)}
              />
              <NightsBadge>{pkg.nights}</NightsBadge>
            </CardImg>
            <CardBody>
              <CardTitleRow>
                <CardTitle>{pkg.title}</CardTitle>
                <RatingBadge>
                  <span className="star">★</span>
                  <span className="score">{pkg.rating}</span>
                </RatingBadge>
              </CardTitleRow>
              <CardDesc>{pkg.desc}</CardDesc>
              <FeaturesRow>
                <FeaturePill><span className="icon">🏨</span> {pkg.hotel}</FeaturePill>
                <FeaturePill><span className="icon">🍽️</span> {pkg.meals}</FeaturePill>
                <FeaturePill><span className="icon">🚗</span> {pkg.transport}</FeaturePill>
                <FeaturePill><span className="icon">📋</span> {pkg.visa}</FeaturePill>
              </FeaturesRow>
              <CardDivider />
              <CardFooter>
                <Price>
                  <div className="label">Starting from</div>
                  <div className="amount">{pkg.price} <span className="per">{pkg.per}</span></div>
                </Price>
                <BookBtn href="#book">
                  Book Now <span className="arrow">→</span>
                </BookBtn>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
}
