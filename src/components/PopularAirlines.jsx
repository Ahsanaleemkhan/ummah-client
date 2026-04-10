'use client';

import styled from 'styled-components';
import { useInView } from '../lib/useInView';

const Strip = styled.section`
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  padding: 1.2rem 2rem;
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
`;

const ServiceItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 2rem;
  border-right: 1px solid #ebebeb;
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.15s,
    opacity 0.5s ease,
    transform 0.5s ease;
  transition-delay: ${({ $inView, $delay }) => ($inView ? $delay || 0 : 0)}s;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(18px)')};

  &:last-child { border-right: none; }
  &:hover { background: #f8fdf9; }

  @media (max-width: 860px) { padding: 0.6rem 1.2rem; }
  @media (max-width: 640px) {
    flex: 1 1 calc(33.333% - 0.5rem);
    border-right: none;
    border-bottom: 1px solid #ebebeb;
    justify-content: center;
  }
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #eaf4ee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ServiceInfo = styled.div``;

const ServiceName = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
`;

const BookNow = styled.div`
  font-size: 0.62rem;
  color: #1B6B3A;
  font-weight: 600;
  margin-top: 0.1rem;
`;

function FlightsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#1B6B3A"/>
    </svg>
  );
}

function HotelsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="9" width="18" height="13" rx="1" fill="#1B6B3A" opacity="0.2"/>
      <path d="M1 22h22M3 9V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="9" y="14" width="6" height="8" fill="#1B6B3A" opacity="0.5"/>
      <rect x="6" y="11" width="3" height="3" rx="0.5" fill="#1B6B3A"/>
      <rect x="15" y="11" width="3" height="3" rx="0.5" fill="#1B6B3A"/>
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#1B6B3A" opacity="0.15"/>
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#1B6B3A" strokeWidth="1.5"/>
      <path d="M2 9h20" stroke="#1B6B3A" strokeWidth="1.5"/>
      <path d="M6 14h4M6 16.5h2" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="15" y="12" width="5" height="3" rx="1" fill="#1B6B3A"/>
    </svg>
  );
}

function UmrahIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 10v11h5v-6h6v6h5V10L12 3z" fill="#1B6B3A" opacity="0.2" stroke="#1B6B3A" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="8.5" r="1.5" fill="#1B6B3A"/>
    </svg>
  );
}

function ToursIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="3" fill="#1B6B3A" opacity="0.2" stroke="#1B6B3A" strokeWidth="1.5"/>
      <path d="M12 12v9M9 21h6" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 9a9 9 0 0 1 18 0" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function TransfersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="11" width="14" height="8" rx="2" fill="#1B6B3A" opacity="0.15" stroke="#1B6B3A" strokeWidth="1.5"/>
      <circle cx="6" cy="19" r="1.5" fill="#1B6B3A"/>
      <circle cx="12" cy="19" r="1.5" fill="#1B6B3A"/>
      <path d="M16 15h3l3-4V8h-3" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="19" r="1.5" fill="#1B6B3A"/>
    </svg>
  );
}

const SERVICES = [
  { id: 'flights',   label: 'Flights',   Icon: FlightsIcon,   href: '/flights' },
  { id: 'hotels',    label: 'Hotels',    Icon: HotelsIcon,    href: '/hotels' },
  { id: 'visa',      label: 'Visa',      Icon: VisaIcon,      href: '/contact' },
  { id: 'umrah',     label: 'Umrah',     Icon: UmrahIcon,     href: '/umrah-packages' },
  { id: 'tours',     label: 'Tours',     Icon: ToursIcon,     href: '/tours' },
  { id: 'transfers', label: 'Transfers', Icon: TransfersIcon, href: '/contact' },
];

export default function PopularAirlines({ content = null }) {
  const [ref, inView] = useInView();
  return (
    <Strip id="services" ref={ref}>
      <Inner>
        {SERVICES.map(({ id, label, Icon, href }, i) => (
          <ServiceItem key={id} href={href} $inView={inView} $delay={i * 0.07}>
            <IconBox><Icon /></IconBox>
            <ServiceInfo>
              <ServiceName>{label}</ServiceName>
              <BookNow>Book Now →</BookNow>
            </ServiceInfo>
          </ServiceItem>
        ))}
      </Inner>
    </Strip>
  );
}
