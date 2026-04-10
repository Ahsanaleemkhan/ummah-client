'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './Navbar';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ── Shell ───────────────────────────────────────────── */
const Hero = styled.section`
  background: linear-gradient(135deg, #1a3826 0%, #1e4530 50%, #162e1e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem 3.5rem;
`;

/* ── Two-column layout ───────────────────────────────── */
const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2.5rem;
  align-items: center;
  padding-top: 2.5rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* ── Left ────────────────────────────────────────────── */
const Left = styled.div``;

const AnimBadge = styled.div`
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.1s;
`;

const AnimHeading = styled.div`
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.22s;
`;

const AnimStats = styled.div`
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.38s;
`;

const AnimCta = styled.div`
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.52s;
`;

const AnimCard = styled.div`
  animation: ${fadeUp} 0.75s ease both;
  animation-delay: 0.35s;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  padding: 0.28rem 0.85rem;
  margin-bottom: 1.4rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.03em;

  &::before {
    content: '◆';
    font-size: 0.55rem;
    color: #c9a227;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  color: #fff;
  margin-bottom: 1.5rem;

  em {
    font-style: normal;
    color: #c9a227;
  }

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const Stat = styled.div`
  .num {
    font-size: 1.35rem;
    font-weight: 800;
    color: #c9a227;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 0.18rem;
  }

  .star {
    color: #c9a227;
    font-size: 1rem;
  }

  .label {
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.65);
    margin-top: 0.18rem;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
`;

const CtaRow = styled.div`
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.72rem 1.5rem;
  background: #c9a227;
  color: #1a3826;
  font-size: 0.82rem;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.02em;

  &:hover {
    background: #b8911e;
  }

  &::after {
    content: '→';
  }
`;

const BtnOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.72rem 1.5rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  letter-spacing: 0.02em;

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
    color: #fff;
  }
`;

/* ── Right — Search Card ────────────────────────────── */
const SearchCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const TabsRow = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.1rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 0.32rem 0.75rem;
  border-radius: 5px;
  border: none;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  background: ${({ $active }) => ($active ? '#1B6B3A' : '#f0f0f0')};
  color: ${({ $active }) => ($active ? '#fff' : '#555')};

  &:hover {
    background: ${({ $active }) => ($active ? '#155c30' : '#e4e4e4')};
  }
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;

const Field = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.5rem 0.7rem;

  .lbl {
    font-size: 0.6rem;
    color: #888;
    margin-bottom: 0.1rem;
    font-weight: 500;
  }

  .val {
    font-size: 0.78rem;
    color: #222;
    font-weight: 500;
  }
`;

const PassengerField = styled(Field)`
  grid-column: 1 / -1;
`;

const SearchBtn = styled.button`
  width: 100%;
  padding: 0.72rem;
  background: #1a3826;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.2rem;
  margin-bottom: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: background 0.2s;
  letter-spacing: 0.02em;

  &:hover {
    background: #122a1a;
  }

  &::after {
    content: '●';
    font-size: 0.55rem;
    opacity: 0.7;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

const FooterNote = styled.span`
  font-size: 0.62rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

/* ── Tab field configs ──────────────────────────────── */
const TAB_CONFIGS = {
  Flights: { from: 'Lahore (LHE)', to: 'Destination', dep: 'Select Date', ret: 'Select Date', label: 'Search Flights' },
  Hotels:  { from: 'City',         to: 'Hotel',       dep: 'Check-in',    ret: 'Check-out',   label: 'Search Hotels' },
  Visa:    { from: 'Nationality',  to: 'Destination', dep: 'Travel Date', ret: 'Return Date',  label: 'Check Visa' },
  Tours:   { from: 'Country',      to: 'City',        dep: 'Start Date',  ret: 'End Date',     label: 'Find Tours' },
  Umrah:   { from: 'Departure',    to: 'Arrival',     dep: 'Select Date', ret: 'Return Date',  label: 'Search Umrah' },
};

const TABS = Object.keys(TAB_CONFIGS);

const defaultNavItems = [
  { label: 'Flights', href: '/flights' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Umrah Packages', href: '/umrah-packages' },
  { label: 'Tour Packages', href: '/tours' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog / Travel Tips', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function HomeHeroSection({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const navItems = Array.isArray(data.navItems) && data.navItems.length > 0 ? data.navItems : defaultNavItems;
  const [activeTab, setActiveTab] = useState('Flights');
  const cfg = TAB_CONFIGS[activeTab];

  return (
    <Hero id="hero">
      <Navbar
        navLinks={navItems}
        loginButtonText={data.loginButtonText || 'LOGIN / REGISTER'}
        loginButtonHref={data.loginButtonHref || '/contact'}
        backgroundColor="transparent"
        dark
        sticky={false}
      />

      <Inner>
        <Columns>
          {/* LEFT */}
          <Left>
            <AnimBadge>
              <Badge>Premium Travel Since 2009</Badge>
            </AnimBadge>

            <AnimHeading>
              <Heading>
                Your Sacred Journey,<br />
                Crafted With <em>Perfection.</em>
              </Heading>
            </AnimHeading>

            <AnimStats>
              <StatsRow>
                <Stat>
                  <div className="num">50,000+</div>
                  <div className="label">Travelers Served</div>
                </Stat>
                <Stat>
                  <div className="num">200+</div>
                  <div className="label">Destinations</div>
                </Stat>
                <Stat>
                  <div className="num">15 Yrs</div>
                  <div className="label">Experience</div>
                </Stat>
                <Stat>
                  <div className="num">4.9 <span className="star">★</span></div>
                  <div className="label">Avg Rating</div>
                </Stat>
              </StatsRow>
            </AnimStats>

            <AnimCta>
              <CtaRow>
                <BtnPrimary href="/tours">Explore Packages</BtnPrimary>
                <BtnOutline href="/about">Watch Our Story</BtnOutline>
              </CtaRow>
            </AnimCta>
          </Left>

          {/* RIGHT — Search Card */}
          <AnimCard>
          <SearchCard>
            <CardTitle>Find Your Perfect Trip</CardTitle>

            <TabsRow>
              {TABS.map((tab) => (
                <Tab key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                  {tab}
                </Tab>
              ))}
            </TabsRow>

            <FieldGrid>
              <Field>
                <div className="lbl">From</div>
                <div className="val">{cfg.from}</div>
              </Field>
              <Field>
                <div className="lbl">To</div>
                <div className="val">{cfg.to}</div>
              </Field>
              <Field>
                <div className="lbl">Departure</div>
                <div className="val">{cfg.dep}</div>
              </Field>
              <Field>
                <div className="lbl">Return</div>
                <div className="val">{cfg.ret}</div>
              </Field>
              <PassengerField>
                <div className="lbl">Passengers</div>
                <div className="val">1 Adult, 0 Child</div>
              </PassengerField>
            </FieldGrid>

            <SearchBtn type="button">{cfg.label}</SearchBtn>

            <CardFooter>
              <FooterNote>🔒 Secure Booking</FooterNote>
              <FooterNote>✓ Best Price Guarantee</FooterNote>
            </CardFooter>
          </SearchCard>
          </AnimCard>
        </Columns>
      </Inner>
    </Hero>
  );
}
