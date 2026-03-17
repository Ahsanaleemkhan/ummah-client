'use client';

import styled from 'styled-components';

const TabsRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const IconBox = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $active }) => $active ? '#e8f5e9' : '#f0f0f0'};
  border: ${({ $active }) => $active ? '2px solid #1B6B3A' : '2px solid transparent'};
  transition: all 0.25s;

  @media (max-width: 640px) {
    width: 56px;
    height: 56px;
    border-radius: 12px;
  }
`;

const TabLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #333;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

/* SVG Icons matching the screenshot */
function FlightIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M28 12L18 8L14 3C13.5 2.3 12.5 2.3 12 3L10 8L4 10C3.2 10.3 3.2 11.4 4 11.7L10 14L12 19C12.5 19.7 13.5 19.7 14 19L18 14L28 10C28.8 9.7 28.8 12.3 28 12Z"
        fill="#1B6B3A" transform="rotate(-15 16 16)" />
      <path d="M8 22L12 18" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 25L9 21" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 28L7 25" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HotelsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="8" width="20" height="20" rx="2" fill="#1B6B3A" opacity="0.15" />
      <rect x="8" y="4" width="16" height="24" rx="2" fill="#1B6B3A" opacity="0.3" />
      <rect x="10" y="6" width="12" height="22" rx="1" fill="#1B6B3A" />
      <rect x="12" y="9" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="17" y="9" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="12" y="14" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="17" y="14" width="3" height="3" rx="0.5" fill="#fff" />
      <rect x="14" y="21" width="4" height="7" rx="1" fill="#fff" />
    </svg>
  );
}

function UmrahIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L6 16V26C6 27.1 6.9 28 8 28H24C25.1 28 26 27.1 26 26V16L16 4Z" fill="#1B6B3A" opacity="0.2" />
      <path d="M16 6L8 16V26H24V16L16 6Z" fill="#1B6B3A" />
      <path d="M14 20H18V28H14V20Z" fill="#fff" />
      <circle cx="16" cy="14" r="2.5" fill="#fff" />
    </svg>
  );
}

function TourIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="4" fill="#1B6B3A" />
      <path d="M12 28V18C12 16.9 12.9 16 14 16H18C19.1 16 20 16.9 20 18V28" stroke="#1B6B3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 28H22" stroke="#1B6B3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 12L26 8" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 6H28V10" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = {
  flight: FlightIcon,
  hotels: HotelsIcon,
  umrah: UmrahIcon,
  tour: TourIcon,
};

const services = [
  { id: 'flight', label: 'FLIGHT' },
  { id: 'hotels', label: 'HOTELS' },
  { id: 'umrah', label: 'UMRAH' },
  { id: 'tour', label: 'TOUR' },
];

export default function ServiceTabs({ activeTab, onTabChange }) {
  return (
    <TabsRow>
      {services.map(service => {
        const Icon = icons[service.id];
        return (
          <Tab key={service.id} onClick={() => onTabChange(service.id)}>
            <IconBox $active={activeTab === service.id}>
              <Icon />
            </IconBox>
            <TabLabel>{service.label}</TabLabel>
          </Tab>
        );
      })}
    </TabsRow>
  );
}
