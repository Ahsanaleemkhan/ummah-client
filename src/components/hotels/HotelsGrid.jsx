'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaGlobeAsia,
  FaHotel,
  FaPercent,
  FaUserShield,
  FaUsers,
} from 'react-icons/fa';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const Section = styled.section`
  background: #e7e7e7;
  padding: 4.8rem 2rem 3.2rem;

  @media (max-width: 768px) {
    padding: 4.2rem 1rem 2.6rem;
  }
`;

const Inner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const Block = styled.section`
  margin-bottom: 3rem;
`;

const BlockHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const BlockHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  color: #0f6a38;
  font-size: clamp(1.9rem, 4.1vw, 3.35rem);
  line-height: 1.03;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  margin: 0.45rem 0 0;
  color: #4e4e4e;
  font-size: 0.93rem;
`;

const Arrows = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #373737;
  font-size: 0.78rem;

  @media (max-width: 760px) {
    position: static;
    transform: none;
    margin-top: 0.45rem;
    justify-content: center;
  }
`;

const ArrowLine = styled.span`
  width: 68px;
  height: 2px;
  border-radius: 999px;
  background: #929292;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.article`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  padding: 0.95rem 0.85rem;
`;

const FeatureIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #e2f1e6;
  color: #13653a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
`;

const FeatureTitle = styled.h3`
  margin: 0.55rem 0 0;
  color: #1f1f1f;
  font-size: 0.81rem;
  line-height: 1.35;
`;

const FeatureText = styled.p`
  margin: 0.35rem 0 0;
  color: #727272;
  font-size: 0.68rem;
  line-height: 1.45;
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

const OfferCard = styled.article`
  background: #fff;
  border: 1px solid #cbcbcb;
  border-radius: 9px;
  padding: 0.75rem 0.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

const OfferCopy = styled.div`
  h3 {
    margin: 0;
    color: #166038;
    font-size: 1.35rem;
    line-height: 1;
  }

  p {
    margin: 0.32rem 0 0;
    color: #696969;
    font-size: 0.68rem;
    line-height: 1.45;
  }
`;

const OfferTag = styled.span`
  width: 62px;
  height: 62px;
  border-radius: 7px;
  background: #0f6a38;
  color: #fff;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HotelCard = styled.article`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  overflow: hidden;
`;

const HotelImageWrap = styled.div`
  position: relative;
  height: 152px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Dot = styled.span`
  position: absolute;
  right: 12px;
  bottom: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0f6a38;
`;

const HotelBody = styled.div`
  padding: 0.62rem 0.65rem 0.7rem;
`;

const HotelTitle = styled.h3`
  margin: 0;
  color: #212121;
  font-size: 0.82rem;
`;

const HotelMeta = styled.p`
  margin: 0.2rem 0 0;
  color: #7b7b7b;
  font-size: 0.66rem;
`;

const HotelBottom = styled.div`
  margin-top: 0.45rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

const Price = styled.p`
  margin: 0;
  color: #1a1a1a;
  font-size: 0.82rem;
  font-weight: 700;
`;

const DetailsBtn = styled(Link)`
  text-decoration: none;
  border-radius: 999px;
  background: #0f6a38;
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.2rem 0.58rem;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const DestinationCard = styled.article`
  border-radius: 8px;
  overflow: hidden;
  min-height: 190px;
  grid-column: span ${({ $wide }) => ($wide ? 3 : 2)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    grid-column: span 1;
    min-height: 175px;
  }
`;

const PlannerTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
`;

const PlannerTab = styled.button`
  border: none;
  background: ${({ $active }) => ($active ? '#8ebaa0' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#4a4a4a')};
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.64rem;
  font-weight: 700;
  cursor: pointer;
`;

const PlannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const PlannerCard = styled.article`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  overflow: hidden;

  img {
    width: 100%;
    height: 114px;
    object-fit: cover;
    display: block;
  }

  h4 {
    margin: 0.35rem 0 0;
    color: #171717;
    font-size: 0.92rem;
    padding: 0 0.45rem;
  }

  p {
    margin: 0.12rem 0 0.4rem;
    color: #8a8a8a;
    font-size: 0.66rem;
    padding: 0 0.45rem;
  }
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const PropertyCard = styled.article`
  img {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
  }

  h4 {
    margin: 0.42rem 0 0;
    font-size: 0.95rem;
    color: #1e1e1e;
  }
`;

const SaveCard = styled.article`
  background: #f4f4f4;
  border: 1px solid #c8c8c8;
  border-radius: 8px;
  padding: 1rem;

  h3 {
    margin: 0;
    color: #115f36;
    font-size: 1.9rem;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.1rem;
  }
`;

const SaveInner = styled.div`
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 0.75rem 0.9rem;

  h4 {
    margin: 0;
    color: #1b1b1b;
    font-size: 1.7rem;
    line-height: 1;
  }

  p {
    margin: 0.35rem 0 0;
    color: #6c6c6c;
    font-size: 0.7rem;
  }
`;

const SaveButtons = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.55rem;
`;

const SaveBtn = styled(Link)`
  text-decoration: none;
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  background: ${({ $secondary }) => ($secondary ? '#ececec' : '#0f6a38')};
  color: ${({ $secondary }) => ($secondary ? '#313131' : '#fff')};
`;

const PopularTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.95rem;
  flex-wrap: wrap;
`;

const PopularTab = styled.button`
  border: none;
  background: ${({ $active }) => ($active ? '#8ebaa0' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#4a4a4a')};
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.64rem;
  font-weight: 700;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 26px;
`;

const whyFeatures = [
  {
    icon: FaPercent,
    title: 'Book now, pay at the property',
    text: 'Flexible booking options on selected Haram-area stays.',
  },
  {
    icon: FaCheckCircle,
    title: 'Verified pilgrim feedback',
    text: 'Real reviews from Umrah and Hajj travelers like you.',
  },
  {
    icon: FaGlobeAsia,
    title: 'Curated holy-city inventory',
    text: 'Focused hotel options in Makkah, Madinah, and Jeddah.',
  },
  {
    icon: FaUserShield,
    title: 'Trusted 24/7 customer service',
    text: 'Support available before, during, and after your pilgrimage.',
  },
];

const offers = [
  {
    title: 'At least 15% off',
    text: 'Save on your next Umrah stay with early booking deals for peak seasons.',
  },
  {
    title: 'At least 15% off',
    text: 'Limited-time room discounts for Makkah and Madinah departures.',
  },
];

const featuredHotels = [
  {
    title: 'Fairmont Makkah Clock Tower',
    location: 'Makkah',
    price: 'Rs. 45,000/-',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
  },
  {
    title: 'Swissotel Al Maqam',
    location: 'Makkah',
    price: 'Rs. 50,000/-',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
  },
  {
    title: 'Pullman ZamZam',
    location: 'Madinah',
    price: 'Rs. 50,000/-',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
  },
];

const destinations = [
  {
    title: 'Makkah',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80',
    wide: true,
  },
  {
    title: 'Madinah',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&q=80',
    wide: true,
  },
  {
    title: 'Jeddah',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80',
  },
  {
    title: 'Taif',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1200&q=80',
  },
  {
    title: 'Badr Region',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&q=80',
  },
];

const plannerTabs = ['Makkah Core', 'Madinah Core', 'Family Stays', 'Premium Stays', 'Value Stays'];

const plannerByCity = {
  'Makkah Core': [
    { title: 'Clock Tower Area', sub: 'Haram Front', image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80' },
    { title: 'Ajyad District', sub: 'Shuttle Friendly', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80' },
    { title: 'Misfalah Zone', sub: 'Value Rooms', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80' },
    { title: 'Aziziyah', sub: 'Group Preferred', image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1200&q=80' },
    { title: 'Jarwal', sub: 'Walking Access', image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80' },
  ],
  'Madinah Core': [
    { title: 'Central Haram North', sub: 'Premium Towers', image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&q=80' },
    { title: 'Central Haram East', sub: 'Family Rooms', image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&q=80' },
    { title: 'Quba Corridor', sub: 'Calm Location', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80' },
    { title: 'King Faisal Road', sub: 'Easy Transfers', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80' },
    { title: 'Sittin Area', sub: 'Budget Focus', image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1200&q=80' },
  ],
  'Family Stays': [
    { title: 'Family Suite Makkah', sub: '2 Bedroom Options', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80' },
    { title: 'Family Suite Madinah', sub: 'Connected Rooms', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80' },
    { title: 'Kids Friendly Floors', sub: 'Quiet Wings', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80' },
    { title: 'Wheelchair Support', sub: 'Accessible Entry', image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80' },
    { title: 'Family Dining Plan', sub: 'Meal Bundles', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80' },
  ],
  'Premium Stays': [
    { title: 'Haram View Towers', sub: '5-Star Collection', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80' },
    { title: 'Executive Madinah Wing', sub: 'VIP Check-In', image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&q=80' },
    { title: 'Private Transfer Hotels', sub: 'Airport Pickup', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80' },
    { title: 'Suite Upgrade Program', sub: 'Subject to Availability', image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&q=80' },
    { title: 'Concierge Support', sub: 'Dedicated Team', image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=1200&q=80' },
  ],
  'Value Stays': [
    { title: 'Economy Makkah Rooms', sub: 'Budget Friendly', image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1200&q=80' },
    { title: 'Economy Madinah Rooms', sub: 'Daily Shuttle', image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80' },
    { title: 'Shared Group Floors', sub: 'Lower Cost Plan', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80' },
    { title: 'Flexible Stay Durations', sub: '7 to 28 Nights', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80' },
    { title: 'Umrah Value Bundle', sub: 'Stay + Transfer', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80' },
  ],
};

const propertyTypes = [
  { title: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80' },
  { title: 'Serviced Apartments', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
  { title: 'Family Suites', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80' },
  { title: 'Group Residences', image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1200&q=80' },
];

const weekendDeals = [
  {
    title: 'Madinah Hilton',
    location: 'Madinah',
    price: 'Rs. 38,000/-',
    image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80',
  },
  {
    title: 'Anwar Al Madinah',
    location: 'Madinah',
    price: 'Rs. 44,000/-',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  },
  {
    title: 'Conrad Makkah',
    location: 'Makkah',
    price: 'Rs. 52,000/-',
    image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1200&q=80',
  },
];

const popularTabs = ['Makkah', 'Madinah', 'Jeddah', 'Taif', 'Group Friendly'];

function HotelMiniCards({ items }) {
  return (
    <CardsRow>
      {items.map((hotel, index) => (
        <HotelCard key={`${hotel.title}-${hotel.location}`}>
          <HotelImageWrap>
            <img
              src={withImageFallback(hotel.image, index)}
              alt={hotel.title}
              loading="lazy"
              onError={(event) => handleImageError(event, index)}
            />
            <Dot />
          </HotelImageWrap>
          <HotelBody>
            <HotelTitle>{hotel.title}</HotelTitle>
            <HotelMeta>{hotel.location}</HotelMeta>
            <HotelBottom>
              <DetailsBtn href="/contact">Details</DetailsBtn>
              <Price>{hotel.price}</Price>
            </HotelBottom>
          </HotelBody>
        </HotelCard>
      ))}
    </CardsRow>
  );
}

export default function HotelsGrid() {
  const [plannerTab, setPlannerTab] = useState('Makkah Core');
  const [popularTab, setPopularTab] = useState('Makkah');

  const plannerCards = useMemo(() => plannerByCity[plannerTab] || plannerByCity['Makkah Core'], [plannerTab]);

  return (
    <Section>
      <Inner>
        <Block>
          <BlockHeader>
            <Title>Why Ummah Travel?</Title>
          </BlockHeader>
          <FeaturesGrid>
            {whyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <FeatureCard key={feature.title}>
                  <FeatureIcon>
                    <Icon />
                  </FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureText>{feature.text}</FeatureText>
                </FeatureCard>
              );
            })}
          </FeaturesGrid>
        </Block>

        <Block>
          <BlockHeader>
            <Title>Offers</Title>
            <Subtitle>Promotions, deals, and special offers for you</Subtitle>
          </BlockHeader>
          <OffersGrid>
            {offers.map((offer) => (
              <OfferCard key={offer.text}>
                <OfferCopy>
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                </OfferCopy>
                <OfferTag>
                  <FaPercent />
                </OfferTag>
              </OfferCard>
            ))}
          </OffersGrid>
        </Block>

        <Block>
          <BlockHeaderRow>
            <Title>Featured Haram Hotels</Title>
            <Arrows>
              <FaArrowLeft />
              <ArrowLine />
              <FaArrowRight />
            </Arrows>
          </BlockHeaderRow>
          <Spacer />
          <HotelMiniCards items={featuredHotels} />
        </Block>

        <Block>
          <BlockHeader>
            <Title>Trending Destinations</Title>
            <Subtitle>Most popular choices for travelers from Pakistan</Subtitle>
          </BlockHeader>
          <DestinationsGrid>
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.title} $wide={destination.wide}>
                <img
                  src={withImageFallback(destination.image, index + 20)}
                  alt={destination.title}
                  loading="lazy"
                  onError={(event) => handleImageError(event, index + 20)}
                />
              </DestinationCard>
            ))}
          </DestinationsGrid>
        </Block>

        <Block>
          <BlockHeader>
            <Title>Quick And Easy Trip Planner</Title>
            <Subtitle>Choose a stay style and explore hotel zones near Haram</Subtitle>
          </BlockHeader>

          <PlannerTabs>
            {plannerTabs.map((tab) => (
              <PlannerTab key={tab} $active={plannerTab === tab} onClick={() => setPlannerTab(tab)}>
                {tab}
              </PlannerTab>
            ))}
          </PlannerTabs>

          <PlannerGrid>
            {plannerCards.map((item, index) => (
              <PlannerCard key={`${item.title}-${item.sub}`}>
                <img
                  src={withImageFallback(item.image, index + 40)}
                  alt={item.title}
                  loading="lazy"
                  onError={(event) => handleImageError(event, index + 40)}
                />
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </PlannerCard>
            ))}
          </PlannerGrid>
        </Block>

        <Block>
          <BlockHeader>
            <Title>Browse By Property Type</Title>
          </BlockHeader>

          <PropertyGrid>
            {propertyTypes.map((type, index) => (
              <PropertyCard key={type.title}>
                <img
                  src={withImageFallback(type.image, index + 60)}
                  alt={type.title}
                  loading="lazy"
                  onError={(event) => handleImageError(event, index + 60)}
                />
                <h4>{type.title}</h4>
              </PropertyCard>
            ))}
          </PropertyGrid>
        </Block>

        <Block>
          <BlockHeaderRow>
            <div style={{ width: '100%' }}>
              <Title>Deals For The Weekend</Title>
              <Subtitle>Save on selected stays for your next departure</Subtitle>
            </div>
            <Arrows>
              <FaArrowLeft />
              <ArrowLine />
              <FaArrowRight />
            </Arrows>
          </BlockHeaderRow>
          <Spacer />
          <HotelMiniCards items={weekendDeals} />
        </Block>

        <Block>
          <SaveCard>
            <h3>Stay Better, Spend Smarter</h3>
            <SaveInner>
              <h4>Get a custom Umrah hotel plan</h4>
              <p>Share your dates and budget to receive curated Makkah and Madinah options.</p>
              <SaveButtons>
                <SaveBtn href="/contact">Request Quote</SaveBtn>
                <SaveBtn href="/contact" $secondary>Talk To Advisor</SaveBtn>
              </SaveButtons>
            </SaveInner>
          </SaveCard>
        </Block>

        <Block>
          <BlockHeader>
            <Title>Popular With Travelers From Pakistan</Title>
          </BlockHeader>

          <PopularTabs>
            {popularTabs.map((tab) => (
              <PopularTab key={tab} $active={popularTab === tab} onClick={() => setPopularTab(tab)}>
                {tab}
              </PopularTab>
            ))}
          </PopularTabs>
        </Block>
      </Inner>
    </Section>
  );
}
