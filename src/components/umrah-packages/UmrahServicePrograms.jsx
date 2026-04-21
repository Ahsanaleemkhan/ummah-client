'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(180deg, #f6fbf7 0%, #eef6f0 100%);
  padding: 4.2rem 2rem;

  @media (max-width: 768px) {
    padding: 3.2rem 1rem;
  }
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.8rem;
`;

const Eyebrow = styled.p`
  margin: 0;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #1b6b3a;
  font-weight: 800;
`;

const Heading = styled.h2`
  margin: 0.35rem 0 0;
  font-size: clamp(1.6rem, 4.1vw, 2.5rem);
  line-height: 1.1;
  color: #163321;
`;

const Intro = styled.p`
  margin: 0.6rem auto 0;
  max-width: 920px;
  color: #42584a;
  font-size: 0.86rem;
  line-height: 1.7;
`;

const TopCard = styled.article`
  background: linear-gradient(135deg, #0f4f2c 0%, #1b6b3a 55%, #2a8f53 100%);
  color: #fff;
  border-radius: 20px;
  padding: 1.6rem 1.5rem 1.7rem;
  box-shadow: 0 20px 45px rgba(15, 79, 44, 0.22);
`;

const CardLabel = styled.p`
  margin: 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.75);
`;

const CardTitle = styled.h3`
  margin: 0.45rem 0 0.95rem;
  font-size: clamp(1.1rem, 2.8vw, 1.65rem);
  line-height: 1.25;
`;

const FeatureGrid = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.35rem 1.5rem;

  li {
    font-size: 0.86rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.92);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const DuoGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #d8e8dc;
  padding: 1.15rem 1.1rem 1.2rem;

  h4 {
    margin: 0.35rem 0 0.5rem;
    font-size: 1.05rem;
    line-height: 1.35;
    color: #173725;
  }

  p {
    margin: 0 0 0.6rem;
    color: #4b5e51;
    font-size: 0.82rem;
    line-height: 1.6;
  }

  ul {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
  }

  li {
    color: #2f4436;
    font-size: 0.82rem;
    line-height: 1.45;
  }
`;

const SplitGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const ZiyarahColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CityCard = styled.div`
  border: 1px solid #dfeae2;
  border-radius: 12px;
  padding: 0.7rem 0.7rem 0.75rem;
  background: #f9fcf9;

  h5 {
    margin: 0;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #1b6b3a;
  }

  ul {
    margin: 0.45rem 0 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.25rem;
  }

  li {
    color: #304538;
    font-size: 0.79rem;
    line-height: 1.4;
  }
`;

const FooterRow = styled.div`
  margin-top: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #d8e8dc;
  border-radius: 14px;
  padding: 0.85rem 0.95rem;

  p {
    margin: 0;
    color: #2f4537;
    font-size: 0.82rem;
    line-height: 1.4;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ActionBtn = styled(Link)`
  text-decoration: none;
  border: 1px solid ${({ $outline }) => ($outline ? '#1b6b3a' : '#1b6b3a')};
  background: ${({ $outline }) => ($outline ? 'transparent' : '#1b6b3a')};
  color: ${({ $outline }) => ($outline ? '#1b6b3a' : '#fff')};
  border-radius: 999px;
  padding: 0.45rem 0.95rem;
  font-size: 0.75rem;
  font-weight: 700;

  &:hover {
    background: ${({ $outline }) => ($outline ? '#eef6f0' : '#134c2b')};
    border-color: #134c2b;
    color: ${({ $outline }) => ($outline ? '#134c2b' : '#fff')};
  }
`;

const packageFeatures = [
  'Round-trip flights from major US cities',
  'Hotel accommodations in Makkah and Madinah',
  'Ground transportation (airport transfers + inter-city travel)',
  'Visa processing and documentation',
  '24/7 support throughout your journey',
];

const visaFeatures = [
  'Document checklist and guidance',
  'Application submission on your behalf',
  'Direct communication with Saudi authorities',
  'One-year multiple-entry tourist visa processing',
  'Updates at every step',
];

const transportFeatures = [
  'Airport pick-up and drop-off',
  'Comfortable, air-conditioned coaches',
  'Hotel-to-Haram shuttle services (select packages)',
  'Intercity travel via luxury bus or Haramain high-speed train',
];

const groupFeatures = [
  'Family packages (special rates for children)',
  'Mosque and community group packages',
  'Customized itineraries for large groups',
  'Group coordinators and dedicated support',
];

const makkahSites = [
  'Cave of Hira (where revelation began)',
  'Jabal al-Nour and Jabal Thawr',
  'Mount Arafat',
  'Mina and Muzdalifah',
];

const madinahSites = [
  'Masjid Quba (first mosque in Islam)',
  'Masjid Qiblatain (where the Qibla changed)',
  'Mount Uhud and the graves of martyrs',
  "Historical sites from the Prophet's life",
];

export default function UmrahServicePrograms() {
  return (
    <Section>
      <Inner>
        <Header>
          <Eyebrow>Services Overview</Eyebrow>
          <Heading>Complete Umrah Services Designed For US Muslims</Heading>
          <Intro>
            Your Umrah journey involves more than just a flight and hotel. It&apos;s a carefully coordinated experience that requires attention to every detail from visa processing to ground transportation to spiritual guidance. We handle it all, so you can focus on worship.
          </Intro>
        </Header>

        <TopCard>
          <CardLabel>Complete Umrah Packages</CardLabel>
          <CardTitle>
            All-inclusive packages tailored to your budget and needs
          </CardTitle>
          <FeatureGrid>
            {packageFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </FeatureGrid>
        </TopCard>

        <DuoGrid>
          <ServiceCard>
            <CardLabel>Umrah Visa Assistance</CardLabel>
            <h4>Navigating Saudi visa requirements can be confusing</h4>
            <p>
              Navigating Saudi visa requirements can be confusing. We simplify the process.
            </p>
            <ul>
              {visaFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ServiceCard>

          <ServiceCard>
            <CardLabel>Ground Transportation</CardLabel>
            <h4>From the moment you land to the moment you depart</h4>
            <p>
              From the moment you land to the moment you depart.
            </p>
            <ul>
              {transportFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ServiceCard>
        </DuoGrid>

        <SplitGrid>
          <ServiceCard>
            <CardLabel>Guided Ziyarah Tours</CardLabel>
            <h4>Deepen your spiritual experience with historic Islamic sites</h4>
            <p>
              Deepen your spiritual experience with guided tours to historic Islamic sites.
            </p>
            <ZiyarahColumns>
              <CityCard>
                <h5>In Makkah</h5>
                <ul>
                  {makkahSites.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CityCard>

              <CityCard>
                <h5>In Madinah</h5>
                <ul>
                  {madinahSites.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CityCard>
            </ZiyarahColumns>
          </ServiceCard>

          <ServiceCard>
            <CardLabel>Group & Family Packages</CardLabel>
            <h4>Traveling with others? We specialize in group planning.</h4>
            <p>
              Traveling with others? We specialize in group and family packages.
            </p>
            <ul>
              {groupFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ServiceCard>
        </SplitGrid>

        <FooterRow>
          <ActionBtn href="/umrah-packages">Explore Our Packages</ActionBtn>
          <ActionBtn href="/contact" $outline>
            Request a Custom Quote
          </ActionBtn>
        </FooterRow>
      </Inner>
    </Section>
  );
}
