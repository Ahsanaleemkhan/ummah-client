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
    text: 'No prepayment needed on selected hotels.',
  },
  {
    icon: FaCheckCircle,
    title: '300M+ reviews from fellow travelers',
    text: 'Verified ratings help you book with confidence.',
  },
  {
    icon: FaGlobeAsia,
    title: '2M+ properties worldwide',
    text: 'Hotels, resorts, apartments, and villas.',
  },
  {
    icon: FaUserShield,
    title: 'Trusted 24/7 customer service',
    text: 'Support available before, during, and after stay.',
  },
];

const offers = [
  {
    title: 'At least 15% off',
    text: 'Save on your next stay with Early 2026 Deals. Book before May 31, 2026.',
  },
  {
    title: 'At least 15% off',
    text: 'Earn more value with weekly flash hotel deals. Limited-time room discounts.',
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
    title: 'Dubai',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
    wide: true,
  },
  {
    title: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80',
    wide: true,
  },
  {
    title: 'Baku',
    image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=1200&q=80',
  },
  {
    title: 'Kuala Lumpur',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80',
  },
  {
    title: 'Doha',
    image: 'https://images.unsplash.com/photo-1567202121427-52b76ffad2e8?w=1200&q=80',
  },
];

const plannerTabs = ['Lahore', 'Karachi', 'Islamabad', 'Peshawar', 'Sialkot'];

const plannerByCity = {
  Lahore: [
    { title: 'Lahore', sub: 'Gulberg', image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80' },
    { title: 'Sialkot', sub: 'Downtown', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80' },
    { title: 'Rawalpindi', sub: 'Saddar', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80' },
    { title: 'Islamabad', sub: 'F-7', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
    { title: 'Peshawar', sub: 'City Center', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80' },
  ],
  Karachi: [
    { title: 'Karachi', sub: 'Clifton', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
    { title: 'Hyderabad', sub: 'Main Road', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80' },
    { title: 'Sukkur', sub: 'River View', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80' },
    { title: 'Thatta', sub: 'Old City', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80' },
    { title: 'Gwadar', sub: 'Coastal Road', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=1200&q=80' },
  ],
  Islamabad: [
    { title: 'Islamabad', sub: 'Blue Area', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80' },
    { title: 'Murree', sub: 'Mall Road', image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80' },
    { title: 'Nathia Gali', sub: 'Pine Valley', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80' },
    { title: 'Taxila', sub: 'Historic Belt', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1200&q=80' },
    { title: 'Rawalpindi', sub: 'Committee Chowk', image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=1200&q=80' },
  ],
  Peshawar: [
    { title: 'Peshawar', sub: 'University Town', image: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=80' },
    { title: 'Swat', sub: 'Mingora', image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1200&q=80' },
    { title: 'Abbottabad', sub: 'Hill Point', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80' },
    { title: 'Nowshera', sub: 'GT Road', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80' },
    { title: 'Mardan', sub: 'Main Bazar', image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=1200&q=80' },
  ],
  Sialkot: [
    { title: 'Sialkot', sub: 'Cantt', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80' },
    { title: 'Gujranwala', sub: 'Model Town', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80' },
    { title: 'Wazirabad', sub: 'City Core', image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1200&q=80' },
    { title: 'Sambrial', sub: 'Airport Road', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80' },
    { title: 'Daska', sub: 'Downtown', image: 'https://images.unsplash.com/photo-1560185008-a33f9c2a8f06?w=1200&q=80' },
  ],
};

const propertyTypes = [
  { title: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80' },
  { title: 'Apartments', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80' },
  { title: 'Resorts', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80' },
  { title: 'Villas', image: 'https://images.unsplash.com/photo-1613977257362-c5a9e4d7fef0?w=1200&q=80' },
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

const popularTabs = ['Lahore', 'Karachi', 'Islamabad', 'Sialkot', 'Peshawar'];

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
  const [plannerTab, setPlannerTab] = useState('Lahore');
  const [popularTab, setPopularTab] = useState('Lahore');

  const plannerCards = useMemo(() => plannerByCity[plannerTab] || plannerByCity.Lahore, [plannerTab]);

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
            <Title>Why Ummah Travel?</Title>
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
            <Subtitle>Pick a vibe and explore the top destinations in Pakistan</Subtitle>
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
              <Subtitle>Save on stays for April 3 - April 5</Subtitle>
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
            <h3>Travel More, Spend Less</h3>
            <SaveInner>
              <h4>Sign in, save money</h4>
              <p>Save 10% or more at participating properties with Genius member rates.</p>
              <SaveButtons>
                <SaveBtn href="/contact">Sign in</SaveBtn>
                <SaveBtn href="/contact" $secondary>Register</SaveBtn>
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
