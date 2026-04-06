'use client';

import { useState } from 'react';
import styled from 'styled-components';
import {
  FaCalendarAlt,
  FaHotel,
  FaKaaba,
  FaMapMarkerAlt,
  FaPlane,
  FaSearch,
  FaSuitcaseRolling,
} from 'react-icons/fa';
import Navbar from './Navbar';
import { handleImageError, withImageFallback } from '../lib/imageFallbacks';

const Wrapper = styled.section`
  background: #ececec;
  padding: 0.75rem 1.25rem 2rem;
`;

const Inner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const Services = styled.div`
  margin-top: 1.9rem;
  display: flex;
  justify-content: center;
  gap: 1.9rem;
  flex-wrap: wrap;
`;

const ServiceButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  color: #145f35;
  cursor: pointer;
`;

const ServiceIcon = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #d7e8db;
  border: 2px solid ${({ $active }) => ($active ? '#1b6b3a' : 'transparent')};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.08rem;
  }
`;

const ServiceLabel = styled.span`
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const SearchForm = styled.form`
  margin: 1.85rem auto 0;
  max-width: 900px;
  background: #fff;
  border-radius: 36px;
  border: 1px solid #dadada;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0.3rem;
  gap: 0.2rem;

  @media (max-width: 900px) {
    border-radius: 20px;
    flex-wrap: wrap;
    padding: 0.5rem;
  }
`;

const SearchField = styled.label`
  flex: 1;
  min-height: 40px;
  border-right: 1px solid #ececec;
  padding: 0 0.72rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 0.8rem;
    color: #656565;
    flex-shrink: 0;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 0.74rem;
    color: #444;
    background: transparent;

    &::placeholder {
      color: #777;
    }
  }

  @media (max-width: 900px) {
    flex: 1 1 calc(50% - 0.2rem);
    border-right: none;
    border: 1px solid #ececec;
    border-radius: 10px;
  }

  @media (max-width: 580px) {
    flex-basis: 100%;
  }
`;

const SearchButton = styled.button`
  border: none;
  background: #126c39;
  color: #fff;
  min-height: 36px;
  border-radius: 999px;
  padding: 0 0.95rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;

  svg {
    font-size: 0.7rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 10px;
  }
`;

const PlaneWrap = styled.div`
  margin: 1.8rem auto 0;
  max-width: 900px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  border: 1px solid #d4d4d4;
  aspect-ratio: 16 / 6.2;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    left: -4%;
    right: -4%;
    bottom: -1px;
    height: 58px;
    background: radial-gradient(80% 120% at 50% 100%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 55%, transparent 100%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    aspect-ratio: 16 / 8;
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
    from: 'From',
    to: 'To',
    date: 'Sat, 26 Dec 2026',
    traveller: 'Return',
  },
  hotels: {
    from: 'City',
    to: 'Hotel',
    date: 'Check-in',
    traveller: 'Guests',
  },
  umrah: {
    from: 'Departure',
    to: 'Arrival',
    date: 'Sat, 26 Dec 2026',
    traveller: 'Package',
  },
  tour: {
    from: 'Country',
    to: 'City',
    date: 'Start Date',
    traveller: 'Travelers',
  },
};

const tabIconById = {
  flight: FaPlane,
  hotels: FaHotel,
  umrah: FaKaaba,
  tour: FaSuitcaseRolling,
};

const defaultPlaneImage = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80';

export default function HomeHeroSection({ content = null }) {
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

  const loginButtonText = data.loginButtonText || 'LOGIN / REGISTER';
  const planeImage = data.planeImage || defaultPlaneImage;

  const [activeTab, setActiveTab] = useState('flight');
  const copy = fieldConfigs[activeTab] || fieldConfigs.flight || defaultFieldConfigs.flight;

  return (
    <Wrapper id="hero">
      <Inner>
        <Navbar
          navLinks={navItems}
          loginButtonText={loginButtonText}
          loginButtonHref={data.loginButtonHref || '/contact'}
          backgroundColor="#ececec"
          sticky={false}
        />

        <Services>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <ServiceButton key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}>
                <ServiceIcon $active={activeTab === tab.id}>
                  <Icon />
                </ServiceIcon>
                <ServiceLabel>{tab.label}</ServiceLabel>
              </ServiceButton>
            );
          })}
        </Services>

        <SearchForm onSubmit={(e) => e.preventDefault()}>
          <SearchField>
            <FaMapMarkerAlt />
            <input placeholder={copy.from} />
          </SearchField>
          <SearchField>
            <FaMapMarkerAlt />
            <input placeholder={copy.to} />
          </SearchField>
          <SearchField>
            <FaCalendarAlt />
            <input placeholder={copy.date} />
          </SearchField>
          <SearchField>
            <FaSuitcaseRolling />
            <input placeholder={copy.traveller} />
          </SearchField>
          <SearchButton type="submit">
            <FaSearch />
            Search
          </SearchButton>
        </SearchForm>

        <PlaneWrap>
          <img
            src={withImageFallback(planeImage, 0)}
            alt="Airplane"
            loading="lazy"
            onError={(event) => handleImageError(event, 0)}
          />
        </PlaneWrap>
      </Inner>
    </Wrapper>
  );
}
