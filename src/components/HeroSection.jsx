'use client';

import { useState } from 'react';
import styled from 'styled-components';
import {
  FaCar,
  FaHotel,
  FaKaaba,
  FaPlane,
  FaRegCalendarAlt,
  FaSearch,
  FaSuitcaseRolling,
  FaUserAlt,
} from 'react-icons/fa';
import Navbar from './Navbar';

const HeroWrapper = styled.section`
  background: linear-gradient(
    165deg,
    var(--app-secondary-color, #0a4d2e) 0%,
    var(--app-primary-color, #1B6B3A) 60%,
    var(--app-secondary-color, #0a4d2e) 100%
  );
  padding: 0 1.25rem 4.1rem;
  position: relative;
  overflow: visible;
  z-index: 2;
`;

const HeroInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`;

const HeroContent = styled.div`
  text-align: center;
  padding: 4.2rem 0 0;

  @media (max-width: 960px) {
    padding-top: 3.2rem;
  }
`;

const ServiceTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  flex-wrap: wrap;
`;

const ServiceTab = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: #d7e3da;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.34rem;

  svg {
    font-size: 1.66rem;
  }
`;

const ServiceIconBox = styled.span`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: var(--app-surface-color, #dce7e0);
  color: var(--app-primary-color, #0d6935);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
`;

const ServiceLabel = styled.span`
  font-size: 0.83rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Heading = styled.h1`
  margin-top: 3.2rem;
  color: #ffffff;
  font-size: clamp(3.35rem, 5vw, 5rem);
  line-height: 1.06;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: 960px) {
    margin-top: 2.2rem;
  }

  @media (max-width: 640px) {
    font-size: 2.4rem;
  }
`;

const Description = styled.p`
  margin: 1.25rem auto 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 1.01rem;
  line-height: 1.45;
  max-width: 880px;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const SearchWrap = styled.div`
  margin-top: 2.45rem;
  transform: translateY(42%);
  position: relative;
  z-index: 5;
`;

const SearchForm = styled.form`
  margin: 0 auto;
  max-width: 1000px;
  background: var(--app-background-color, #ffffff);
  border-radius: 40px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 920px) {
    flex-wrap: wrap;
    border-radius: 20px;
  }
`;

const SearchField = styled.div`
  min-height: 60px;
  padding: 0 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--app-text-color, #6f6f6f);
  font-size: 0.82rem;
  border-right: 1px solid #e4e4e4;
  flex: ${({ $wide }) => ($wide ? '1.25' : '1')};

  svg {
    color: var(--app-text-color, #4e4e4e);
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  input {
    border: none;
    width: 100%;
    outline: none;
    font-size: 0.82rem;
    color: var(--app-text-color, #5f5f5f);
    background: transparent;

    &::placeholder {
      color: #7f7f7f;
    }
  }

  @media (max-width: 920px) {
    flex: 1 1 100%;
    border-right: none;
    border-bottom: 1px solid #ebebeb;
  }
`;

const SearchButton = styled.button`
  border: none;
  background: var(--app-primary-color, #0f6b39);
  color: #ffffff;
  height: 42px;
  border-radius: 999px;
  padding: 0 1.2rem;
  margin-right: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.36rem;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  svg {
    font-size: 0.76rem;
  }

  @media (max-width: 920px) {
    width: calc(100% - 1.2rem);
    border-radius: 14px;
    margin: 0.6rem;
    height: 44px;
  }
`;

const Skyline = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 235px;
  background:
    radial-gradient(circle at 4% 98%, rgba(0, 32, 16, 0.95) 0 12%, transparent 12.3%),
    radial-gradient(circle at 12% 100%, rgba(0, 32, 16, 0.9) 0 15%, transparent 15.3%),
    radial-gradient(circle at 24% 100%, rgba(0, 32, 16, 0.9) 0 12%, transparent 12.3%),
    radial-gradient(circle at 37% 100%, rgba(0, 32, 16, 0.92) 0 14%, transparent 14.3%),
    radial-gradient(circle at 51% 100%, rgba(0, 32, 16, 0.95) 0 18%, transparent 18.3%),
    radial-gradient(circle at 66% 100%, rgba(0, 32, 16, 0.92) 0 15%, transparent 15.3%),
    radial-gradient(circle at 80% 100%, rgba(0, 32, 16, 0.9) 0 13%, transparent 13.3%),
    radial-gradient(circle at 95% 100%, rgba(0, 32, 16, 0.95) 0 15%, transparent 15.3%),
    linear-gradient(to top, rgba(0, 32, 16, 0.95), rgba(0, 32, 16, 0.93));
  background-repeat: no-repeat;
  background-size: cover;
`;

const PromptStrip = styled.div`
  background: var(--app-surface-color, #ececec);
  text-align: center;
  padding: 4.8rem 1.25rem 3.8rem;
  position: relative;
  z-index: 1;

  @media (max-width: 920px) {
    padding: 4.2rem 1rem 3rem;
  }
`;

const PromptText = styled.h3`
  color: var(--app-heading-color, #9b9b9b);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: clamp(1.4rem, 2.3vw, 2rem);
  font-weight: 900;
`;

const PromptButton = styled.button`
  margin-top: 1.15rem;
  border: none;
  border-radius: 999px;
  background: var(--app-primary-color, #0f6b39);
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 700;
  padding: 0.72rem 1.55rem;
  letter-spacing: 0.03em;
  cursor: pointer;

  &:hover {
    background: var(--app-secondary-color, #145230);
  }
`;

const defaultNavItems = [
  { label: 'Flights', href: '/flights' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Tour Packages', href: '/tours' },
  { label: 'Destinations', href: '/tours' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog / Travel Tips', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const defaultTabs = [
  { id: 'flight', label: 'Flight', icon: FaPlane },
  { id: 'hotels', label: 'Hotels', icon: FaHotel },
  { id: 'umrah', label: 'Umrah', icon: FaKaaba },
  { id: 'tour', label: 'Tour', icon: FaSuitcaseRolling },
];

const defaultFieldConfigs = {
  flight: {
    destination: 'Where are you going?',
    date: 'Check-in date - Check-out date',
    travellers: '2 Adult - 0 Children - 1 Room',
  },
  hotels: {
    destination: 'Which city are you visiting?',
    date: 'Check-in date - Check-out date',
    travellers: '2 Adult - 0 Children - 1 Room',
  },
  umrah: {
    destination: 'Where are you going?',
    date: 'Travel date - Return date',
    travellers: '2 Adult - 0 Children - 1 Room',
  },
  tour: {
    destination: 'Choose your destination',
    date: 'Departure date - Return date',
    travellers: '2 Adult - 0 Children - 1 Room',
  },
};

const tabIconById = {
  flight: FaPlane,
  hotels: FaHotel,
  umrah: FaKaaba,
  tour: FaSuitcaseRolling,
};

export default function HeroSection({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const navItems = Array.isArray(data.navItems) && data.navItems.length > 0 ? data.navItems : defaultNavItems;
  const tabs = (Array.isArray(data.tabs) && data.tabs.length > 0 ? data.tabs : defaultTabs)
    .map((tab) => ({
      id: tab?.id || 'flight',
      label: tab?.label || 'Flight',
      icon: tabIconById[tab?.id] || FaPlane,
    }));

  const fieldConfigs = data.fieldConfigs && typeof data.fieldConfigs === 'object'
    ? data.fieldConfigs
    : defaultFieldConfigs;

  const defaultActiveTab = tabs[0]?.id || 'flight';
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const effectiveActiveTab = tabs.some((tab) => tab.id === activeTab) ? activeTab : defaultActiveTab;
  const copy = fieldConfigs[effectiveActiveTab] || fieldConfigs.flight || defaultFieldConfigs.flight;
  const headingLines = String(data.heading || 'Customize Your\nUmrah Package 2026.').split('\n');

  return (
    <>
      <HeroWrapper id="hero">
        <HeroInner>
          <Navbar
            navLinks={navItems}
            loginButtonText={data.loginButtonText || 'LOGIN / REGISTER'}
            loginButtonHref={data.loginButtonHref || '/contact'}
            backgroundColor="transparent"
            dark
            sticky={false}
          />

          <HeroContent>
            <ServiceTabs>
              {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                  <ServiceTab key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}>
                    <ServiceIconBox $active={effectiveActiveTab === tab.id}>
                      <Icon />
                    </ServiceIconBox>
                    <ServiceLabel>{tab.label}</ServiceLabel>
                  </ServiceTab>
                );
              })}
            </ServiceTabs>

            <Heading>
              {headingLines[0]}
              {headingLines[1] ? <><br />{headingLines[1]}</> : null}
            </Heading>

            <Description>
              {data.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'}
            </Description>

            <SearchWrap>
              <SearchForm onSubmit={(e) => e.preventDefault()}>
                <SearchField $wide>
                  <FaCar />
                  <input placeholder={copy.destination} />
                </SearchField>
                <SearchField>
                  <FaRegCalendarAlt />
                  <input placeholder={copy.date} />
                </SearchField>
                <SearchField>
                  <FaUserAlt />
                  <input placeholder={copy.travellers} />
                </SearchField>
                <SearchButton type="submit">
                  <FaSearch />
                  {data.searchButtonText || 'Search...'}
                </SearchButton>
              </SearchForm>
            </SearchWrap>
          </HeroContent>
        </HeroInner>
        <Skyline />
      </HeroWrapper>

      <PromptStrip>
        <PromptText>{data.promptText || 'Not Sure Where To Go? We Got You Covered...'}</PromptText>
        <PromptButton type="button">{data.promptButtonText || 'SHOW ME OPTIONS'}</PromptButton>
      </PromptStrip>
    </>
  );
}
