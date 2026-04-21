'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #f4f7f5 100%);
  padding: 3rem 2rem 1.2rem;

  @media (max-width: 768px) {
    padding: 2.4rem 1rem 1rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.article`
  background: linear-gradient(135deg, #0f4f2c 0%, #1b6b3a 55%, #2f9158 100%);
  border-radius: 20px;
  padding: 1.45rem 1.3rem;
  color: #fff;
  box-shadow: 0 16px 34px rgba(15, 79, 44, 0.22);
`;

const Label = styled.p`
  margin: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 800;
`;

const Title = styled.h2`
  margin: 0.4rem 0 0;
  font-size: clamp(1.2rem, 3vw, 1.9rem);
  line-height: 1.2;
`;

const Intro = styled.p`
  margin: 0.55rem 0 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.84rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 11px;
  padding: 0.6rem 0.7rem;
  font-size: 0.82rem;
  line-height: 1.4;
`;

const ActionRow = styled.div`
  margin-top: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.8rem;
    line-height: 1.4;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ActionBtn = styled(Link)`
  text-decoration: none;
  border-radius: 999px;
  background: #c9a227;
  color: #163221;
  border: 1px solid #c9a227;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.5rem 0.95rem;

  &:hover {
    background: #b8911e;
    border-color: #b8911e;
  }
`;

const services = [
  '5-star hotels with Kaaba or Haram views',
  'Private airport transfers',
  'Priority check-in and check-out',
  'VIP lounge access',
  'Personal concierge services',
];

export default function VipLuxuryServices() {
  return (
    <Section>
      <Inner>
        <Card>
          <Label>VIP & Luxury Services (Get In Touch)</Label>
          <Title>For Those Seeking Premium Comfort</Title>
          <Intro>
            Premium add-ons are available for pilgrims who prefer elevated comfort and private handling throughout the journey.
          </Intro>

          <Grid>
            {services.map((service) => (
              <Item key={service}>{service}</Item>
            ))}
          </Grid>

          <ActionRow>
            <p>Share your preferred travel dates and comfort level, and our team will prepare your custom VIP arrangement.</p>
            <ActionBtn href="#contact-form">Request a Custom Quote</ActionBtn>
          </ActionRow>
        </Card>
      </Inner>
    </Section>
  );
}
