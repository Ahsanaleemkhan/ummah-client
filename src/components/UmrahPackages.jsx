'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #1B6B3A;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.08);
  text-align: left;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    transform: translateY(-4px);
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 175px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }

  ${Card}:hover & img {
    transform: scale(1.06);
  }
`;

const NightsBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  backdrop-filter: blur(4px);
`;

const CardBody = styled.div`
  padding: 1rem 1.1rem;
`;

const CardTitle = styled.h3`
  font-size: 0.92rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.3rem;
`;

const CardDesc = styled.p`
  font-size: 0.78rem;
  color: #888;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
`;

const MetaItem = styled.div`
  font-size: 0.72rem;
  color: #999;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  border-top: 1px solid #f0f0f0;
`;

const Price = styled.div`
  .label {
    font-size: 0.62rem;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .amount {
    font-size: 1.05rem;
    font-weight: 800;
    color: #1B6B3A;
    line-height: 1;
  }
`;

const DetailsBtn = styled.a`
  display: inline-block;
  padding: 0.38rem 1rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #145230;
  }
`;

const packages = [
  {
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
    nights: '14 Nights',
    title: 'Economy Umrah Package',
    desc: 'Comfortable economy-class experience with group accommodation near Haram in Makkah and Madinah.',
    hotel: '4-Star Hotel',
    meals: 'Breakfast Included',
    price: 'Rs. 500+',
  },
  {
    img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
    nights: '21 Nights',
    title: 'Premium Umrah Package',
    desc: 'Upgraded rooms 50m from Haram, direct flights, full visa support, and dedicated group guide.',
    hotel: '5-Star Hotel',
    meals: 'Full Board',
    price: 'Rs. 500+',
  },
  {
    img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80',
    nights: '10 Nights',
    title: 'Budget Umrah Package',
    desc: 'Ideal for solo travelers seeking an affordable yet complete Umrah experience with group transport.',
    hotel: '3-Star Hotel',
    meals: 'Bed & Breakfast',
    price: 'Rs. 300+',
  },
];

export default function UmrahPackages() {
  return (
    <Section id="umrah">
      <SectionHeader>
        <Title>Umrah Packages 2026</Title>
        <Subtitle>Discover top flight deals for elite travel experiences at unprecedented prices</Subtitle>
      </SectionHeader>

      <CardsRow>
        {packages.map((pkg) => (
          <Card key={pkg.title}>
            <CardImg>
              <img src={pkg.img} alt={pkg.title} loading="lazy" />
              <NightsBadge>{pkg.nights}</NightsBadge>
            </CardImg>
            <CardBody>
              <CardTitle>{pkg.title}</CardTitle>
              <CardDesc>{pkg.desc}</CardDesc>
              <CardMeta>
                <MetaItem>🏨 {pkg.hotel}</MetaItem>
                <MetaItem>🍽️ {pkg.meals}</MetaItem>
              </CardMeta>
              <CardFooter>
                <Price>
                  <div className="label">Starting from</div>
                  <div className="amount">{pkg.price}</div>
                </Price>
                <DetailsBtn href="#umrah">Details</DetailsBtn>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </CardsRow>
    </Section>
  );
}
