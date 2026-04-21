'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FaBoxOpen, FaPlaneDeparture } from 'react-icons/fa';
import { handleImageError, withImageFallback } from '../../lib/imageFallbacks';

const Section = styled.section`
  background: #ececec;
  padding: 1.6rem 2rem 3.2rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem 2.4rem;
  }
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const TabsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 2.2rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 0.62rem 1.3rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? '#1b6b3a' : '#c4c7c4')};
  background: ${({ $active }) => ($active ? '#1b6b3a' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#4a4a4a')};
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1b6b3a;
    color: ${({ $active }) => ($active ? '#fff' : '#1b6b3a')};
  }
`;

const Heading = styled.h2`
  margin: 0 0 1.7rem;
  text-align: center;
  font-size: clamp(2.1rem, 5.2vw, 4.1rem);
  line-height: 1.02;
  color: #194f2f;
  font-weight: 900;
  letter-spacing: 0.01em;
`;

const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const OfferCard = styled.article`
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 13px;
  padding: 0.72rem;
  display: grid;
  grid-template-columns: 136px 1fr;
  gap: 0.78rem;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const OfferImage = styled.img`
  width: 100%;
  height: 88px;
  border-radius: 10px;
  object-fit: cover;
`;

const OfferBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.33rem;
  min-width: 0;
`;

const OfferCategory = styled.span`
  font-size: 0.68rem;
  color: #667467;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 700;
`;

const OfferTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
  color: #194f2f;
`;

const Price = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: #2f2f2f;

  strong {
    color: #1b6b3a;
  }
`;

const OfferMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

const OfferNote = styled.span`
  font-size: 0.72rem;
  color: #8a8a8a;
`;

const ViewBtn = styled(Link)`
  text-decoration: none;
  border: 1px solid #1b6b3a;
  color: #1b6b3a;
  font-size: 0.68rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.36rem 0.82rem;
  transition: all 0.2s ease;

  &:hover {
    background: #1b6b3a;
    color: #fff;
  }
`;

const CustomizeCard = styled.article`
  margin-top: 2.2rem;
  background: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CustomizeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 1.25rem;
    color: #1b6b3a;
    flex-shrink: 0;
  }

  h3 {
    margin: 0;
    font-size: 1.05rem;
    color: #194f2f;
  }

  p {
    margin: 0.18rem 0 0;
    font-size: 0.82rem;
    color: #6b6b6b;
  }
`;

const CustomizeBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
  border-radius: 999px;
  border: 1px solid #1b6b3a;
  background: #1b6b3a;
  color: #fff;
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.56rem 1rem;
  white-space: nowrap;

  svg {
    font-size: 0.88rem;
  }

  &:hover {
    background: #154f2c;
    border-color: #154f2c;
  }
`;

const defaultTourOffers = [
  {
    id: 1,
    category: 'ziyarah',
    typeLabel: 'Ziyarah Program',
    title: 'Madinah Sacred Sites (3 Days)',
    price: 'PKR 145,000',
    note: 'Quba, Uhud, and Qiblatain with scholar guide',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&q=80',
  },
  {
    id: 2,
    category: 'group',
    typeLabel: 'Group Program',
    title: 'Makkah Historical Trail (2 Days)',
    price: 'PKR 98,000',
    note: 'Jabal al-Noor and historic site visits',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80',
  },
  {
    id: 3,
    category: 'ziyarah',
    typeLabel: 'Ziyarah Program',
    title: 'Badr Heritage Excursion (2 Days)',
    price: 'PKR 120,000',
    note: 'Battlefield landmarks and guided reflections',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=900&q=80',
  },
  {
    id: 4,
    category: 'group',
    typeLabel: 'Group Program',
    title: 'Taif Spiritual Retreat (3 Days)',
    price: 'PKR 165,000',
    note: 'Comfortable mountain stay with group transport',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=900&q=80',
  },
  {
    id: 5,
    category: 'family',
    typeLabel: 'Family Program',
    title: 'Jeddah Arrival and Rest Plan (2 Days)',
    price: 'PKR 110,000',
    note: 'Airport pickup, hotel check-in, and family assistance',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=80',
  },
  {
    id: 6,
    category: 'family',
    typeLabel: 'Family Program',
    title: 'Family Ziyarah in Madinah (4 Days)',
    price: 'PKR 178,000',
    note: 'Kid-friendly pacing with private family support',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&q=80',
  },
  {
    id: 7,
    category: 'premium',
    typeLabel: 'Premium Program',
    title: 'VIP Haram-to-Haram Transfers (5 Days)',
    price: 'PKR 260,000',
    note: 'Executive transport with concierge coordination',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=900&q=80',
  },
  {
    id: 8,
    category: 'premium',
    typeLabel: 'Premium Program',
    title: 'Luxury Umrah Plus Stay (7 Days)',
    price: 'PKR 340,000',
    note: '5-star hotels, private transfers, and dedicated host',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80',
  },
  {
    id: 9,
    category: 'group',
    typeLabel: 'Group Program',
    title: 'Scholars-led Group Itinerary (5 Days)',
    price: 'PKR 195,000',
    note: 'Daily reminders and ritual guidance sessions',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80',
  },
  {
    id: 10,
    category: 'ziyarah',
    typeLabel: 'Ziyarah Program',
    title: 'Madinah Date Farms and Heritage Walk (2 Days)',
    price: 'PKR 105,000',
    note: 'Local heritage stops with comfortable transfer',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&q=80',
  },
];

const defaultTabs = [
  { key: 'all', label: 'All Programs' },
  { key: 'ziyarah', label: 'Ziyarah Programs' },
  { key: 'group', label: 'Group Programs' },
  { key: 'family', label: 'Family Programs' },
  { key: 'premium', label: 'Premium Programs' },
];

export default function ToursGrid({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const tabs = Array.isArray(data.tabs) && data.tabs.length > 0 ? data.tabs : defaultTabs;
  const offers = Array.isArray(data.offers) && data.offers.length > 0 ? data.offers : defaultTourOffers;

  const defaultActiveTab = tabs[0]?.key || 'all';
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const effectiveActiveTab = tabs.some((tab) => tab.key === activeTab)
    ? activeTab
    : defaultActiveTab;

  const filtered = useMemo(() => {
    if (effectiveActiveTab === 'all') {
      return offers;
    }

    return offers.filter((tour) => tour.category === effectiveActiveTab);
  }, [effectiveActiveTab, offers]);

  return (
    <Section id="tour-offers">
      <Inner>
        <TabsRow>
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              $active={effectiveActiveTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsRow>

        <Heading>{data.heading || 'SAUDI TOUR PROGRAMS'}</Heading>

        <OffersGrid>
          {filtered.map((tour, index) => (
            <OfferCard key={tour.id}>
              <OfferImage
                src={withImageFallback(tour.image, index)}
                alt={tour.title}
                loading="lazy"
                onError={(event) => handleImageError(event, index)}
              />
              <OfferBody>
                <OfferCategory>{tour.typeLabel}</OfferCategory>
                <OfferTitle>{tour.title}</OfferTitle>
                <Price>
                  Price <strong>{tour.price}</strong>
                </Price>
                <OfferMeta>
                  <OfferNote>{tour.note}</OfferNote>
                  <ViewBtn href="/contact">View Package</ViewBtn>
                </OfferMeta>
              </OfferBody>
            </OfferCard>
          ))}
        </OffersGrid>

        <CustomizeCard>
          <CustomizeInfo>
            <FaBoxOpen />
            <div>
              <h3>{data.customizeTitle || 'Now you can customize your program.'}</h3>
              <p>{data.customizeText || 'Tell us your Umrah dates, preferred ziyarah stops, and group size to get a tailored quote.'}</p>
            </div>
          </CustomizeInfo>

          <CustomizeBtn href={data.customizeButtonHref || '/contact'}>
            {data.customizeButtonText || 'Request Custom Program'} <FaPlaneDeparture />
          </CustomizeBtn>
        </CustomizeCard>
      </Inner>
    </Section>
  );
}
