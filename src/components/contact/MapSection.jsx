'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #fff;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
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

const MapWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.08);
  position: relative;
`;

const MapFrame = styled.div`
  width: 100%;
  height: 400px;
  background: #e8ede5;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(30%) contrast(1.05);
    transition: filter 0.3s;
  }

  &:hover iframe {
    filter: grayscale(0%) contrast(1);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

/* Offices row below map */
const OfficesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #fff;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const OfficeCard = styled.div`
  padding: 1.5rem 1.75rem;
  border-right: 1px solid #f0f0f0;
  transition: background 0.2s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: #f9faf7;
  }

  @media (max-width: 640px) {
    border-right: none;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const OfficeIcon = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const OfficeName = styled.h4`
  font-size: 0.88rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.3rem;
`;

const OfficeAddress = styled.p`
  font-size: 0.78rem;
  color: #777;
  line-height: 1.6;
`;

const OfficePhone = styled.a`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1B6B3A;
  margin-top: 0.35rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #145230;
  }
`;

const offices = [
  {
    icon: '🇺🇸',
    name: 'Head Office — Irving, TX',
    address: 'Suite #5, 3445 N Belt Line Rd,\nIrving, TX 75062, USA',
    phone: '+1 945-223-0620',
  },
  {
    icon: '🇺🇸',
    name: 'New York Representative',
    address: '123 Atlantic Ave,\nBrooklyn, NY 11201, USA',
    phone: '+1 945-223-0620',
  },
  {
    icon: '🇸🇦',
    name: 'Makkah Representative',
    address: 'Al Haram District,\nMakkah, Saudi Arabia',
    phone: '+966 50 123 4567',
  },
];

export default function MapSection() {
  return (
    <Section id="map">
      <SectionHeader>
        <Title>Our Offices</Title>
        <Subtitle>Visit us or reach out to the office nearest to you</Subtitle>
      </SectionHeader>

      <MapWrapper>
        <MapFrame>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0!2d-96.9489!3d32.8573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e839d3c2a1b5b%3A0x1234567890abcdef!2s3445%20N%20Belt%20Line%20Rd%2C%20Irving%2C%20TX%2075062!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ummah Travel - 3445 N Belt Line Rd, Irving, TX 75062"
          />
        </MapFrame>

        <OfficesRow>
          {offices.map((office) => (
            <OfficeCard key={office.name}>
              <OfficeIcon>{office.icon}</OfficeIcon>
              <OfficeName>{office.name}</OfficeName>
              <OfficeAddress>{office.address}</OfficeAddress>
              <OfficePhone href={`tel:${office.phone.replace(/\s/g, '')}`}>
                {office.phone}
              </OfficePhone>
            </OfficeCard>
          ))}
        </OfficesRow>
      </MapWrapper>
    </Section>
  );
}
