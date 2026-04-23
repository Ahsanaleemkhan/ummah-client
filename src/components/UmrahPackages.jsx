'use client';

import styled from 'styled-components';
import { useInView } from '../lib/useInView';

const enterT = (delay = 0) => `
  transition: opacity 0.65s ease, transform 0.65s ease;
  transition-delay: ${delay}s;
`;
const exitT = `
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: 0s;
`;

const Section = styled.section`
  background: linear-gradient(135deg, #1a3826 0%, #1e4530 60%, #162e1e 100%);
  padding: 3.5rem 2rem 4rem;
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.4rem;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 0.76rem;
  color: rgba(255,255,255,0.6);
  margin: 0;
  padding-left: 0.75rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: stretch;
  @media (max-width: 860px) { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: background 0.2s, border-color 0.2s, opacity 0.65s ease, transform 0.65s ease;
  transition-delay: ${({ $inView, $delay }) => ($inView ? $delay || 0 : 0)}s;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(36px)')};

  ${({ $featured }) => $featured && `
    background: rgba(201,162,39,0.12);
    border-color: #c9a227;
  `}
  &:hover { background: rgba(255,255,255,0.1); }
`;

const BestValueBadge = styled.div`
  position: absolute;
  top: -11px; left: 50%;
  transform: translateX(-50%);
  background: #c9a227;
  color: #1a3826;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.22rem 0.9rem;
  border-radius: 999px;
  white-space: nowrap;
`;

const PackageName = styled.div`
  font-size: 0.95rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.25rem;
`;

const PackageMeta = styled.div`
  font-size: 0.68rem;
  color: rgba(255,255,255,0.55);
  margin-bottom: 1rem;
`;

const PriceFrom = styled.div`
  font-size: 0.6rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.15rem;
`;

const Price = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  color: #c9a227;
  line-height: 1;
  margin-bottom: 1.2rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const FeatureItem = styled.li`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before { content: '✓'; color: #c9a227; font-weight: 700; font-size: 0.7rem; flex-shrink: 0; }
`;

const BookBtn = styled.a`
  display: block;
  text-align: center;
  padding: 0.75rem;
  border-radius: 7px;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.02em;
  border: 1.5px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.9);
  background: transparent;
  margin-top: auto;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  ${({ $featured }) => $featured && `background: #c9a227; border-color: #c9a227; color: #1a3826;`}
  &:hover { background: #c9a227; border-color: #c9a227; color: #1a3826; }
`;

const defaultPackages = [
  { id: 'ECO', name: 'Economy Package',  meta: '15 Nights · 3★ Hotel', priceFrom: 'From', price: '$300',   features: ['Return Flights', 'Umrah Visa', 'Madinah Transfer', 'Basic Guide'],                                  featured: false },
  { id: 'STD', name: 'Standard Package', meta: '21 Nights · 4★ Hotel', priceFrom: 'From', price: '$450', features: ['Return Flights', 'Umrah Visa', 'All Transfers', 'Group Guidance', 'Ziyarah Tour'], featured: true,  bestValue: true },
  { id: 'PRE', name: 'Premium Package',  meta: '26 Nights · 5★ Hotel', priceFrom: 'From', price: '$750', features: ['Business Class', 'Umrah Visa', 'Private Transfers', 'Personal Guide', 'All Meals'],  featured: false },
];

export default function UmrahPackages({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const packages = Array.isArray(data.packages) && data.packages.length > 0 ? data.packages : defaultPackages;
  const [ref, inView] = useInView();

  return (
    <Section id="umrah" ref={ref}>
      <Inner>
        <SectionHeader $inView={inView}>
          <Title>{data.title || 'Umrah Packages 2026'}</Title>
          <Subtitle>{data.subtitle || 'Complete Umrah journeys with flight, hotel, visa & guidance'}</Subtitle>
        </SectionHeader>

        <Grid>
          {packages.map((pkg, i) => (
            <Card key={pkg.id} $featured={pkg.featured} $inView={inView} $delay={i * 0.13}>
              {pkg.bestValue && <BestValueBadge>★ BEST VALUE</BestValueBadge>}
              <PackageName>{pkg.name}</PackageName>
              <PackageMeta>{pkg.meta}</PackageMeta>
              <PriceFrom>{pkg.priceFrom || 'From'}</PriceFrom>
              <Price>{pkg.price}</Price>
              <Divider />
              <FeatureList>
                {(pkg.features || []).map((f) => <FeatureItem key={f}>{f}</FeatureItem>)}
              </FeatureList>
              <BookBtn href="/umrah-packages" $featured={pkg.featured}>Book This Package →</BookBtn>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
