'use client';

import Image from 'next/image';
import styled from 'styled-components';
import {
  FaUsers,
  FaPlane,
  FaCar,
  FaHotel,
  FaUserTie,
  FaIdCard,
  FaMapMarkedAlt,
  FaHeadset,
  FaQuestionCircle,
  FaLeaf,
  FaSmile,
  FaHeart,
  FaHandshake,
} from 'react-icons/fa';

const Section = styled.section`
  background: #ececec;
  padding: 3.5rem 1.25rem 3rem;
`;

const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  color: #0f6b39;
  font-size: clamp(2rem, 4.6vw, 3.4rem);
  font-weight: 900;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

const Subheading = styled.p`
  text-align: center;
  color: #4f4f4f;
  font-size: 1rem;
  margin-bottom: 1.7rem;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.25fr;
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 2.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(86px, 1fr));
  gap: 0.95rem;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
`;

const ServiceIconBox = styled.div`
  width: 86px;
  height: 72px;
  border-radius: 10px;
  background: #f8f8f8;
  border: 1px solid #dbdbdb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #0f6b39;
    font-size: 1.55rem;
  }
`;

const ServiceLabel = styled.span`
  color: #6f6f6f;
  font-size: 0.68rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
`;

const ImageCard = styled.div`
  position: relative;
  min-height: 292px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #d7d7d7;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07);

  @media (max-width: 900px) {
    min-height: 270px;
  }
`;

const Title = styled.h3`
  color: #0f6b39;
  font-size: clamp(1.5rem, 2.6vw, 2.2rem);
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 0.6rem;
`;

const Paragraph = styled.p`
  color: #4e4e4e;
  font-size: 0.76rem;
  line-height: 1.5;
  text-align: justify;
`;

const ValuesRow = styled.div`
  margin-top: 2.35rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
    row-gap: 1.25rem;
  }
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ValueIconWrap = styled.div`
  width: 72px;
  height: 54px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PalmShape = styled.div`
  position: absolute;
  inset: auto auto 0 auto;
  width: 56px;
  height: 20px;
  background: #888;
  border-radius: 12px 12px 16px 16px;

  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 8px;
    width: 18px;
    height: 10px;
    border-radius: 8px;
    background: #888;
    transform: rotate(-26deg);
  }
`;

const ValueSymbol = styled.div`
  position: absolute;
  top: 0;

  svg {
    color: #0f6b39;
    font-size: 1.5rem;
  }
`;

const ValueLabel = styled.span`
  margin-top: 0.18rem;
  color: #666;
  font-size: 0.68rem;
  font-weight: 600;
`;

const services = [
  { icon: FaUsers, label: 'Companionship' },
  { icon: FaPlane, label: 'Flights' },
  { icon: FaCar, label: 'Transport' },
  { icon: FaHotel, label: 'Accommodation' },
  { icon: FaUserTie, label: 'Professionalism' },
  { icon: FaIdCard, label: 'Visa' },
  { icon: FaMapMarkedAlt, label: 'Tour Guide' },
  { icon: FaHeadset, label: 'Customer Service 24/7' },
  { icon: FaQuestionCircle, label: 'Support' },
];

const values = [
  { icon: FaLeaf, label: 'Happiness' },
  { icon: FaSmile, label: 'Transparency' },
  { icon: FaHeart, label: 'Responsibility' },
  { icon: FaHandshake, label: 'Honesty' },
];

export default function WhatWeOfferSection() {
  return (
    <Section>
      <Container>
        <Heading>What Do We Offer?</Heading>
        <Subheading>Everything you need for a seamless Umrah trip</Subheading>

        <TopRow>
          <ServicesGrid>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Service key={service.label}>
                  <ServiceIconBox>
                    <Icon />
                  </ServiceIconBox>
                  <ServiceLabel>{service.label}</ServiceLabel>
                </Service>
              );
            })}
          </ServicesGrid>

          <ImageCard>
            <Image
              src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80"
              alt="Pilgrims near Kaaba"
              fill
              priority={false}
              sizes="(max-width: 900px) 100vw, 52vw"
              style={{ objectFit: 'cover' }}
            />
          </ImageCard>
        </TopRow>

        <Title>Your Trusted Partner For A Blessed Journey</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
          commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
          vel facilisis.
        </Paragraph>

        <ValuesRow>
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Value key={value.label}>
                <ValueIconWrap>
                  <PalmShape />
                  <ValueSymbol>
                    <Icon />
                  </ValueSymbol>
                </ValueIconWrap>
                <ValueLabel>{value.label}</ValueLabel>
              </Value>
            );
          })}
        </ValuesRow>
      </Container>
    </Section>
  );
}
