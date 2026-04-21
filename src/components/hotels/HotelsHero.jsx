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
  FaUserAlt,
} from 'react-icons/fa';

const Section = styled.section`
  background: linear-gradient(165deg, #0d4a24 0%, #1B6B3A 40%, #238c4e 100%);
  padding: 4.5rem 1.25rem 5rem;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const Inner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const Services = styled.div`
  margin-top: 2.1rem;
  display: flex;
  justify-content: center;
  gap: 1.95rem;
  flex-wrap: wrap;
`;

const ServiceButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: #fff;
  cursor: pointer;
`;

const ServiceIcon = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #d5e5d8;
  border: 2px solid ${({ $active }) => ($active ? '#fff' : 'transparent')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #126939;

  svg {
    font-size: 1.06rem;
  }
`;

const ServiceLabel = styled.span`
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Heading = styled.h1`
  margin-top: 2.3rem;
  color: #fff;
  text-align: center;
  font-size: clamp(2rem, 4.4vw, 3.15rem);
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  margin-top: 0.65rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.95rem;
`;

const SearchWrap = styled.div`
  margin-top: 1.8rem;
  transform: translateY(50%);
`;

const SearchForm = styled.form`
  margin: 0 auto;
  max-width: 930px;
  background: #fff;
  border-radius: 36px;
  border: 1px solid #dadada;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  padding: 0.35rem;
  gap: 0.2rem;

  @media (max-width: 900px) {
    border-radius: 20px;
    flex-wrap: wrap;
    padding: 0.55rem;
  }
`;

const SearchField = styled.label`
  flex: 1;
  min-height: 42px;
  border-right: 1px solid #ececec;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 0.8rem;
    color: #6a6a6a;
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
      color: #787878;
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
  gap: 0.35rem;
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

const defaultTabs = [
  { id: 'flight', label: 'Flight', icon: FaPlane },
  { id: 'hotels', label: 'Hotels', icon: FaHotel },
  { id: 'umrah', label: 'Umrah', icon: FaKaaba },
  { id: 'tour', label: 'Tour', icon: FaSuitcaseRolling },
];

const defaultSearchFields = {
  flight: {
    where: 'Departure city',
    dates: 'Travel date - Return date',
    guests: '1 Adult - Economy',
  },
  hotels: {
    where: 'Where are you going?',
    dates: 'Check-in date - Check-out date',
    guests: '2 Adult - 0 Children - 1 Room',
  },
  umrah: {
    where: 'Makkah or Madinah',
    dates: 'Departure date - Return date',
    guests: '2 Adult - 0 Children - 1 Room',
  },
  tour: {
    where: 'Select destination',
    dates: 'Departure date - Return date',
    guests: '2 Adults',
  },
};

const tabIconById = {
  flight: FaPlane,
  hotels: FaHotel,
  umrah: FaKaaba,
  tour: FaSuitcaseRolling,
};

export default function HotelsHero({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const tabs = (Array.isArray(data.tabs) && data.tabs.length > 0 ? data.tabs : defaultTabs)
    .map((tab) => ({
      id: tab?.id || 'hotels',
      label: tab?.label || 'Hotels',
      icon: tabIconById[tab?.id] || FaHotel,
    }));

  const searchFields = data.searchFields && typeof data.searchFields === 'object'
    ? data.searchFields
    : defaultSearchFields;

  const [activeTab, setActiveTab] = useState('hotels');
  const copy = searchFields[activeTab] || searchFields.hotels || defaultSearchFields.hotels;

  return (
    <Section>
      <Inner>
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

        <Heading>{data.heading || 'Find Your Next Stay'}</Heading>
        <Subtitle>{data.subtitle || 'Search deals on hotels, homes, and much more...'}</Subtitle>

        <SearchWrap>
          <SearchForm onSubmit={(event) => event.preventDefault()}>
            <SearchField>
              <FaMapMarkerAlt />
              <input placeholder={copy.where} />
            </SearchField>
            <SearchField>
              <FaCalendarAlt />
              <input placeholder={copy.dates} />
            </SearchField>
            <SearchField>
              <FaUserAlt />
              <input placeholder={copy.guests} />
            </SearchField>
            <SearchButton type="submit">
              <FaSearch /> {data.searchButtonText || 'Search...'}
            </SearchButton>
          </SearchForm>
        </SearchWrap>
      </Inner>
    </Section>
  );
}
