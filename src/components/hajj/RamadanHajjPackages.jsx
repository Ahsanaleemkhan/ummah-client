'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #f8f8f8;
  padding: 1.2rem 2rem 3rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem 2.4rem;
  }
`;

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const Card = styled.article`
  border-radius: 18px;
  border: 1px solid #d8d8d8;
  background: linear-gradient(145deg, #fefefe 0%, #f4f7f5 100%);
  padding: 1.3rem 1.2rem;
`;

const Label = styled.p`
  margin: 0;
  color: #1b6b3a;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-weight: 800;
`;

const Title = styled.h3`
  margin: 0.45rem 0 0;
  color: #1f2b23;
  font-size: clamp(1.2rem, 3vw, 1.9rem);
  line-height: 1.25;
`;

const Intro = styled.p`
  margin: 0.55rem 0 0;
  color: #535353;
  font-size: 0.85rem;
  line-height: 1.6;
`;

const List = styled.ul`
  margin: 0.9rem 0 0;
  padding-left: 1.05rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem 1.1rem;

  li {
    color: #37463b;
    font-size: 0.82rem;
    line-height: 1.45;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const features = [
  'Early booking discounts',
  'Hotels within walking distance for Taraweeh prayers',
  'Suhoor and Iftar meal arrangements',
  'Extended stay options to experience the last ten nights',
];

export default function RamadanHajjPackages() {
  return (
    <Section>
      <Inner>
        <Card>
          <Label>Hajj Packages</Label>
          <Title>Performing Umrah During Ramadan Is Especially Blessed</Title>
          <Intro>
            We offer Ramadan-focused support with hotel access, meal coordination, and flexible stay options.
          </Intro>

          <List>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </List>
        </Card>
      </Inner>
    </Section>
  );
}
