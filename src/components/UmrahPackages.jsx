'use client';

import styled from 'styled-components';
import { handleImageError, withImageFallback } from '../lib/imageFallbacks';

const Section = styled.section`
  background: #ececec;
  padding: 3.2rem 2rem;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const SliderControl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #404040;
  font-size: 0.76rem;
  font-weight: 700;

  @media (max-width: 680px) {
    display: none;
  }
`;

const SliderLine = styled.span`
  width: 56px;
  height: 2px;
  background: #7d7d7d;
  border-radius: 999px;
`;

const Title = styled.h2`
  font-size: 2.85rem;
  font-weight: 900;
  color: #1B6B3A;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.9rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.78rem;
  color: #777;
  margin: 0.35rem auto 0;
  max-width: 450px;
  line-height: 1.4;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 980px;
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 10px rgba(0,0,0,0.08);
  text-align: left;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    transform: translateY(-4px);
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 150px;
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
  top: 8px;
  right: 8px;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-size: 0.58rem;
  font-weight: 700;
  padding: 0.18rem 0.45rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
  backdrop-filter: blur(4px);
`;

const CardBody = styled.div`
  padding: 0.72rem 0.8rem;
`;

const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.55rem;
  margin-bottom: 0.25rem;
`;

const GreenDot = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #1B6B3A;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

const CardDesc = styled.p`
  font-size: 0.7rem;
  color: #888;
  line-height: 1.35;
  margin-bottom: 0.45rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 0.5rem;
`;

const MetaItem = styled.div`
  font-size: 0.62rem;
  color: #999;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  border-top: 1px solid #f0f0f0;
`;

const Price = styled.div`
  .label {
    font-size: 0.56rem;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .amount {
    font-size: 0.86rem;
    font-weight: 800;
    color: #1B6B3A;
    line-height: 1;
  }
`;

const DetailsBtn = styled.a`
  display: inline-block;
  padding: 0.25rem 0.72rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.58rem;
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

const defaultPackages = [
  {
    id: 'UMH001',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
    nights: '14 Nights',
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum',
    hotel: 'Lorem ipsum',
    meals: 'Rs. 500/-',
    price: 'Rs. 500/-',
  },
  {
    id: 'UMH002',
    img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
    nights: '21 Nights',
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum',
    hotel: 'Lorem ipsum',
    meals: 'Rs. 500/-',
    price: 'Rs. 500/-',
  },
  {
    id: 'UMH003',
    img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80',
    nights: '10 Nights',
    title: 'Lorem Ipsum',
    desc: 'Lorem ipsum',
    hotel: 'Lorem ipsum',
    meals: 'Rs. 500/-',
    price: 'Rs. 500/-',
  },
];

export default function UmrahPackages({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const packages = Array.isArray(data.packages) && data.packages.length > 0 ? data.packages : defaultPackages;
  const detailsHref = data.detailsHref || '/umrah-packages';
  const detailsLabel = data.detailsLabel || 'Details';

  return (
    <Section id="umrah">
      <SectionHeader>
        <HeaderTop>
          <Title>{data.title || 'Umrah Packages 2026'}</Title>
          <SliderControl aria-hidden="true">
            <span>←</span>
            <SliderLine />
            <span>→</span>
          </SliderControl>
        </HeaderTop>
        <Subtitle>{data.subtitle || 'Discover top flight deals for elite travel experiences at unprecedented prices'}</Subtitle>
      </SectionHeader>

      <CardsRow>
        {packages.map((pkg, index) => (
          <Card key={pkg.id}>
            <CardImg>
              <img
                src={withImageFallback(pkg.img, index)}
                alt={pkg.title}
                loading="lazy"
                onError={(event) => handleImageError(event, index)}
              />
              <NightsBadge>{pkg.nights}</NightsBadge>
            </CardImg>
            <CardBody>
              <CardTitleRow>
                <CardTitle>{pkg.title}</CardTitle>
                <GreenDot />
              </CardTitleRow>
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
                <DetailsBtn href={detailsHref}>{detailsLabel}</DetailsBtn>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </CardsRow>
    </Section>
  );
}
