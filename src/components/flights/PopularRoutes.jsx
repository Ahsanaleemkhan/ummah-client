'use client';

import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';
import { HiOutlineTag } from 'react-icons/hi';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: #f7f8f5;
  padding: 2rem 2rem 4.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 3px 18px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: rgba(27,107,58,0.12);
    box-shadow: 0 10px 40px rgba(27,107,58,0.1);
    transform: translateY(-4px);
  }
`;

const RouteRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const CityCode = styled.div`
  text-align: center;

  .code {
    font-size: 1.3rem;
    font-weight: 900;
    color: #1a1a2e;
    line-height: 1;
  }
  .name {
    font-size: 0.65rem;
    color: #999;
    margin-top: 0.15rem;
  }
`;

const FlightLine = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  position: relative;

  .line {
    width: 100%;
    height: 1px;
    background: #ddd;
    position: relative;
  }

  .plane {
    color: #1B6B3A;
    font-size: 1rem;
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    padding: 0 0.25rem;
  }

  .duration {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.62rem;
    color: #aaa;
    margin-top: 0.1rem;
  }

  .duration svg {
    font-size: 0.68rem;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  border-top: 1px solid #f0f0f0;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    color: #1B6B3A;
    font-size: 0.85rem;
  }

  .label {
    font-size: 0.6rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .amount {
    font-size: 1.1rem;
    font-weight: 900;
    color: #1B6B3A;
    line-height: 1;
  }
`;

const ViewLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #1B6B3A;
  text-decoration: none;
  transition: gap 0.2s;

  &:hover {
    gap: 0.6rem;
  }

  svg {
    font-size: 0.82rem;
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const AirlineBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  color: #888;
  margin-bottom: 0.85rem;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $color }) => $color || '#1B6B3A'};
  }
`;

const routes = [
  {
    from: { code: 'JFK', name: 'New York' },
    to: { code: 'JED', name: 'Jeddah' },
    duration: '14h 30m',
    price: '$850',
    airline: 'Saudia',
    color: '#006633',
  },
  {
    from: { code: 'ORD', name: 'Chicago' },
    to: { code: 'JED', name: 'Jeddah' },
    duration: '15h 10m',
    price: '$820',
    airline: 'Emirates',
    color: '#d71920',
  },
  {
    from: { code: 'IAH', name: 'Houston' },
    to: { code: 'MED', name: 'Madinah' },
    duration: '16h 25m',
    price: '$910',
    airline: 'Qatar Airways',
    color: '#5c0632',
  },
  {
    from: { code: 'DFW', name: 'Dallas' },
    to: { code: 'JED', name: 'Jeddah' },
    duration: '15h 50m',
    price: '$870',
    airline: 'Turkish Airlines',
    color: '#e30a17',
  },
  {
    from: { code: 'LAX', name: 'Los Angeles' },
    to: { code: 'MED', name: 'Madinah' },
    duration: '18h 40m',
    price: '$950',
    airline: 'Etihad Airways',
    color: '#bd8b13',
  },
  {
    from: { code: 'IAD', name: 'Washington DC' },
    to: { code: 'JED', name: 'Jeddah' },
    duration: '14h 20m',
    price: '$840',
    airline: 'Saudia',
    color: '#006633',
  },
];

export default function PopularRoutes() {
  return (
    <Section id="popular-routes">
      <Inner>
        <SectionHeader>
          <Title>Popular Flight Routes</Title>
          <Subtitle>Most booked routes to the Holy Lands with competitive pricing</Subtitle>
        </SectionHeader>

        <Grid>
          {routes.map((route, i) => (
            <Card key={`${route.from.code}-${route.to.code}`} $delay={`${i * 0.07}s`}>
              <AirlineBadge $color={route.color}>
                <span className="dot" />
                {route.airline}
              </AirlineBadge>
              <RouteRow>
                <CityCode>
                  <div className="code">{route.from.code}</div>
                  <div className="name">{route.from.name}</div>
                </CityCode>
                <FlightLine>
                  <div className="line">
                    <span className="plane"><MdFlightTakeoff /></span>
                  </div>
                  <div className="duration"><FiClock /> {route.duration}</div>
                </FlightLine>
                <CityCode>
                  <div className="code">{route.to.code}</div>
                  <div className="name">{route.to.name}</div>
                </CityCode>
              </RouteRow>
              <MetaRow>
                <PriceTag>
                  <div>
                    <div className="label">From</div>
                    <div className="amount">{route.price}</div>
                  </div>
                </PriceTag>
                <ViewLink href="#book">
                  Book <FiArrowRight />
                </ViewLink>
              </MetaRow>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
