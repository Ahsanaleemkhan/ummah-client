'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(180deg, #f3f3f3 0%, #ececec 100%);
  padding: 3.1rem 2rem 1rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 0.8rem;
  }
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Card = styled.article`
  background: #fff;
  border-radius: 18px;
  border: 1px solid #dbdbdb;
  padding: 1.25rem 1.1rem 1.35rem;
  box-shadow: 0 12px 24px rgba(20, 20, 20, 0.04);
`;

const Label = styled.p`
  margin: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-weight: 800;
  color: #1b6b3a;
`;

const Title = styled.h2`
  margin: 0.4rem 0 0;
  color: #1f2b23;
  font-size: clamp(1.2rem, 2.8vw, 1.8rem);
  line-height: 1.25;
`;

const Intro = styled.p`
  margin: 0.5rem 0 0;
  color: #5a5a5a;
  font-size: 0.84rem;
  line-height: 1.6;
`;

const Steps = styled.div`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  border: 1px solid #e5ece7;
  background: #fbfdfb;
  border-radius: 12px;
  padding: 0.75rem 0.8rem;
  display: flex;
  gap: 0.6rem;

  .num {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #1b6b3a;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  p {
    margin: 0;
    color: #334b3c;
    font-size: 0.82rem;
    line-height: 1.4;
  }
`;

const points = [
  'Airport pick-up and drop-off',
  'Comfortable, air-conditioned coaches',
  'Hotel-to-Haram shuttle services (select packages)',
  'Intercity travel via luxury bus or Haramain high-speed train',
];

export default function SaudiTransportServices() {
  return (
    <Section>
      <Inner>
        <Card>
          <Label>Ground Transportation In Saudi Arabia (Umrah Page Plus Tour)</Label>
          <Title>From The Moment You Land To The Moment You Depart</Title>
          <Intro>
            Ground transportation is coordinated for airport movement, city transfers, and selected hotel shuttle routes.
          </Intro>

          <Steps>
            {points.map((point, index) => (
              <Step key={point}>
                <span className="num">{index + 1}</span>
                <p>{point}</p>
              </Step>
            ))}
          </Steps>
        </Card>
      </Inner>
    </Section>
  );
}
