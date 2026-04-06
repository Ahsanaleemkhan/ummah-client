'use client';

import styled from 'styled-components';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCar,
  FaFilePdf,
  FaHotel,
  FaIdCard,
  FaKaaba,
  FaMosque,
} from 'react-icons/fa';

const Section = styled.section`
  background: #ececec;
  padding: 3.4rem 1.25rem;
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  color: #0f6b39;
  font-size: clamp(2rem, 4.2vw, 3.35rem);
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.01em;
`;

const SliderControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: #2f2f2f;

  svg {
    font-size: 0.92rem;
  }
`;

const ControlLine = styled.span`
  width: 66px;
  height: 2px;
  background: #7a7a7a;
  border-radius: 99px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const CardGroup = styled.div``;

const Card = styled.article`
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 16px;
  overflow: hidden;
`;

const CardBody = styled.div`
  padding: 0.95rem 0.95rem 0;
`;

const PackageTitle = styled.h3`
  color: #0f6b39;
  font-size: 1.33rem;
  line-height: 1.25;
  font-weight: 700;
`;

const DepartureBadge = styled.span`
  margin-top: 0.55rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.17rem 0.52rem;
  border-radius: 5px;
  background: #0f6b39;
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 500;
`;

const Divider = styled.div`
  margin-top: 0.7rem;
  border-top: 1px dashed #cdcdcd;
`;

const Block = styled.div`
  margin-top: 0.6rem;
`;

const Label = styled.div`
  color: #9a9a9a;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
`;

const Text = styled.div`
  color: #a0a0a0;
  font-size: 0.83rem;
  line-height: 1.45;
`;

const InclusionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.65rem;
  flex-wrap: wrap;
`;

const InclusionItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
  color: #a3a3a3;
  font-size: 0.83rem;

  svg {
    color: #0f6b39;
    font-size: 1.45rem;
  }
`;

const DistanceTravellersRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.9rem;
`;

const DistanceList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const DistanceItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
  color: #a2a2a2;
  font-size: 0.8rem;

  svg {
    color: #0f6b39;
    font-size: 1.4rem;
  }
`;

const TravellersPanel = styled.div`
  text-align: right;
`;

const TravellerCount = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  color: #8b8b8b;
  font-size: 0.72rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PriceHint = styled.div`
  margin-top: 0.15rem;
  color: #a8a8a8;
  font-size: 0.75rem;
  white-space: nowrap;
`;

const PriceBar = styled.div`
  margin-top: 0.75rem;
  padding: 0.7rem 0.95rem;
  background: #0f6b39;
  color: #ffffff;
  border-radius: 0 0 12px 12px;
  display: flex;
  align-items: baseline;
  gap: 0.36rem;
`;

const PriceCurrency = styled.span`
  font-size: 2.05rem;
  font-weight: 400;
`;

const PriceValue = styled.span`
  font-size: 3.04rem;
  line-height: 1;
  font-weight: 800;
`;

const PriceSuffix = styled.span`
  font-size: 1.65rem;
  font-weight: 600;
`;

const ButtonRow = styled.div`
  margin-top: 0.65rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding-left: 0.4rem;
`;

const ActionButton = styled.button`
  border: none;
  border-radius: 999px;
  background: #0f6b39;
  color: #ffffff;
  height: 36px;
  padding: 0 0.98rem;
  font-size: 0.92rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  svg {
    font-size: 0.98rem;
    color: #e94f4f;
  }
`;

const packages = [
  {
    id: 'UPG-01',
    title: '10 Nights I Premium - T5 I Quad I Land Pkg',
    departure: 'Flexible Departure',
    routes: 'Jeddah Airport - Makkah - Madinah - Madinah Airport',
    distanceMakkah: 'Makkah I 1.6 KM',
    distanceMadinah: 'Madinah I 200 m',
    travellers: '4',
    amount: '141,300',
    button: 'Book Now',
  },
  {
    id: 'UPG-02',
    title: '10 Nights I Premium - T5 I Quad I Land Pkg',
    departure: 'Flexible Departure',
    routes: 'Jeddah Airport - Makkah - Madinah - Madinah Airport',
    distanceMakkah: 'Makkah I 1.6 KM',
    distanceMadinah: 'Madinah I 200 m',
    travellers: '4',
    amount: '141,300',
    button: 'Book Now',
  },
];

export default function PopularUmrahPackagesSection() {
  return (
    <Section>
      <Container>
        <HeaderRow>
          <Title>Popular Umrah Packages</Title>
          <SliderControl aria-hidden="true">
            <FaArrowLeft />
            <ControlLine />
            <FaArrowRight />
          </SliderControl>
        </HeaderRow>

        <CardsGrid>
          {packages.map((pkg) => (
            <CardGroup key={pkg.id}>
              <Card>
                <CardBody>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <DepartureBadge>{pkg.departure}</DepartureBadge>

                  <Divider />
                  <Block>
                    <Label>Routes:</Label>
                    <Text>{pkg.routes}</Text>
                  </Block>

                  <Divider />
                  <Block>
                    <Label>Inclusion</Label>
                    <InclusionRow>
                      <InclusionItem>
                        <FaIdCard />
                        Visa
                      </InclusionItem>
                      <InclusionItem>
                        <FaCar />
                        Transfer
                      </InclusionItem>
                      <InclusionItem>
                        <FaHotel />
                        Hotel
                      </InclusionItem>
                    </InclusionRow>
                  </Block>

                  <Divider />
                  <Block>
                    <DistanceTravellersRow>
                      <div>
                        <Label>Distance:</Label>
                        <DistanceList>
                          <DistanceItem>
                            <FaKaaba />
                            {pkg.distanceMakkah}
                          </DistanceItem>
                          <DistanceItem>
                            <FaMosque />
                            {pkg.distanceMadinah}
                          </DistanceItem>
                        </DistanceList>
                      </div>

                      <TravellersPanel>
                        <Label>Travellers:</Label>
                        <TravellerCount>{pkg.travellers}</TravellerCount>
                        <PriceHint>PKR 565,200</PriceHint>
                      </TravellersPanel>
                    </DistanceTravellersRow>
                  </Block>
                </CardBody>

                <PriceBar>
                  <PriceCurrency>PKR</PriceCurrency>
                  <PriceValue>{pkg.amount}</PriceValue>
                  <PriceSuffix>/ Pilgrim</PriceSuffix>
                </PriceBar>
              </Card>

              <ButtonRow>
                <ActionButton type="button">{pkg.button}</ActionButton>
                <ActionButton type="button">
                  <FaFilePdf />
                  PDF
                </ActionButton>
              </ButtonRow>
            </CardGroup>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
}
