'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #ffffff;
  padding: 3.5rem 2rem 4rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: #1B6B3A;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 2.75rem;

  @media (max-width: 640px) {
    font-size: 1.8rem;
    margin-bottom: 1.75rem;
  }
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 4rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 0;
    max-width: 480px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const VisaRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem 0.5rem;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s;
  border-radius: 4px;

  &:last-child {
    border-bottom: 1px solid #e8e8e8;
  }

  &:hover {
    background: #f8fdf9;
  }
`;

const FlagImg = styled.img`
  width: 32px;
  height: 22px;
  object-fit: cover;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.18);
`;

const VisaInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CountryName = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.2;
`;

const VisaPrice = styled.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: #1a56db;
  margin-top: 0.15rem;
`;

const ArrowIcon = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: #999;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 0.5rem;
`;

// flagcdn.com/w40/{iso2}.png — free, reliable flag images
const leftVisas = [
  { code: 'au', name: 'Australia',       price: 'PKR 95,000' },
  { code: 'ca', name: 'Canada',          price: 'PKR 95,000' },
  { code: 'gr', name: 'Greece',          price: 'PKR 75,000' },
  { code: 'my', name: 'Malaysia',        price: 'PKR 16,000' },
  { code: 'th', name: 'Thailand',        price: 'PKR 19,900' },
  { code: 'gb', name: 'United Kingdom',  price: 'PKR 95,000' },
];

const rightVisas = [
  { code: 'az', name: 'Azerbaijan',              price: 'PKR 13,000' },
  { code: 'eg', name: 'Egypt',                   price: 'PKR 75,000' },
  { code: 'hk', name: 'Hong Kong',               price: 'PKR 49,000' },
  { code: 'sg', name: 'Singapore',               price: 'PKR 25,000' },
  { code: 'ae', name: 'UAE 30 Days (Dubai ID)',  price: 'PKR 32,000' },
  { code: 'us', name: 'USA',                     price: 'PKR 95,000' },
];

function VisaList({ visas }) {
  return (
    <Column>
      {visas.map((visa) => (
        <VisaRow key={visa.name} href="#visas">
          <FlagImg
            src={`https://flagcdn.com/w40/${visa.code}.png`}
            srcSet={`https://flagcdn.com/w80/${visa.code}.png 2x`}
            alt={visa.name}
          />
          <VisaInfo>
            <CountryName>{visa.name}</CountryName>
            <VisaPrice>{visa.price}</VisaPrice>
          </VisaInfo>
          <ArrowIcon>›</ArrowIcon>
        </VisaRow>
      ))}
    </Column>
  );
}

export default function TrendingVisas() {
  return (
    <Section id="visas">
      <Title>Trending Visas</Title>
      <TwoColumns>
        <VisaList visas={leftVisas} />
        <VisaList visas={rightVisas} />
      </TwoColumns>
    </Section>
  );
}
