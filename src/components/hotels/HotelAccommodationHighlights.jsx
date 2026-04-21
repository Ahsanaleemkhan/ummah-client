'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #f4f7f5;
  padding: 3.6rem 2rem 2.4rem;

  @media (max-width: 768px) {
    padding: 2.8rem 1rem 2rem;
  }
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const HeadingWrap = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Label = styled.p`
  margin: 0;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #1b6b3a;
  font-weight: 800;
`;

const Heading = styled.h2`
  margin: 0.4rem 0 0;
  font-size: clamp(1.5rem, 4vw, 2.35rem);
  color: #153323;
  line-height: 1.15;
`;

const Intro = styled.p`
  margin: 0.6rem auto 0;
  max-width: 760px;
  color: #4c5e52;
  font-size: 0.9rem;
  line-height: 1.65;
`;

const MainGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #d8e8dc;
  padding: 1.05rem 1rem 1.1rem;

  h3 {
    margin: 0;
    color: #173725;
    font-size: 1rem;
  }

  ul {
    margin: 0.65rem 0 0;
    padding-left: 1.05rem;
    display: grid;
    gap: 0.35rem;
  }

  li {
    color: #2f4436;
    font-size: 0.83rem;
    line-height: 1.5;
  }
`;

const TierGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const TierCard = styled.article`
  border-radius: 13px;
  padding: 0.95rem 0.9rem;
  border: 1px solid #d8e8dc;
  background: ${({ $accent }) => $accent};

  h4 {
    margin: 0;
    color: #173725;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0.45rem 0 0;
    color: #2f4436;
    font-size: 0.78rem;
    line-height: 1.45;
  }
`;

const features = [
  'Walking distance to Masjid al-Haram and Masjid an-Nabawi',
  'Clean, comfortable, family-friendly rooms',
  'Options for Kaaba view, Haram view, or city view',
  'Halal breakfast and meal plans (optional)',
];

const hotelTiers = [
  {
    name: '3-Star Budget Options',
    detail: '3-star budget options',
    accent: '#f8fcf9',
  },
  {
    name: '4-Star & 5-Star Choices',
    detail: 'Trusted hotels ranging to 5-star luxury properties',
    accent: '#f6faf7',
  },
  {
    name: 'View-Based Selection',
    detail: 'Kaaba view, Haram view, or city view options',
    accent: '#f8fcf9',
  },
];

export default function HotelAccommodationHighlights() {
  return (
    <Section>
      <Inner>
        <HeadingWrap>
          <Label>Hotel Accommodations (Hotel)</Label>
          <Heading>Trusted Hotels For Every Budget</Heading>
          <Intro>
            We partner with trusted hotels ranging from 3-star budget options to 5-star luxury properties.
          </Intro>
        </HeadingWrap>

        <MainGrid>
          <Card>
            <h3>What You Can Expect</h3>
            <ul>
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3>Room View Options</h3>
            <ul>
              <li>Kaaba view options for premium packages</li>
              <li>Haram view options for prayer convenience</li>
              <li>City view rooms for budget-conscious stays</li>
              <li>Family room combinations on request</li>
            </ul>
          </Card>
        </MainGrid>

        <TierGrid>
          {hotelTiers.map((tier) => (
            <TierCard key={tier.name} $accent={tier.accent}>
              <h4>{tier.name}</h4>
              <p>{tier.detail}</p>
            </TierCard>
          ))}
        </TierGrid>
      </Inner>
    </Section>
  );
}
