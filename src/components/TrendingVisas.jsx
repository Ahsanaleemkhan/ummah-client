'use client';

import styled from 'styled-components';
import { useInView } from '../lib/useInView';

/* ── transition helpers ─────────────────────────────── */
const enterT = (delay = 0) => `
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${delay}s;
`;
const exitT = `
  transition: opacity 0.25s ease, transform 0.25s ease;
  transition-delay: 0s;
`;

const Section = styled.section`
  background: #f5f5f5;
  padding: 3rem 2rem 3.5rem;
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

/* Header slides in from left */
const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const TitleBlock = styled.div``;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.3rem;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 0.76rem;
  color: #777;
  margin: 0;
  padding-left: 0.75rem;
`;

const ViewAll = styled.a`
  font-size: 0.76rem;
  font-weight: 600;
  color: #1B6B3A;
  text-decoration: none;
  white-space: nowrap;
  margin-top: 0.25rem;
  &:hover { text-decoration: underline; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
`;

/* Each card fades up with stagger */
const CardWrap = styled.div`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(26px)')};
  ${({ $inView, $delay }) => ($inView ? enterT($delay || 0) : exitT)}
  display: flex;
  flex-direction: column;
`;

const Card = styled.a`
  background: #fff;
  border-radius: 10px;
  padding: 0.9rem 1rem;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  border: 1px solid #ebebeb;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  flex: 1;
  &:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.11); transform: translateY(-2px); }
`;

const Flag = styled.img`
  width: 36px;
  height: 26px;
  object-fit: cover;
  border-radius: 3px;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  margin-top: 2px;
`;

const CardInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const Country = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VisaType = styled.div`
  font-size: 0.65rem;
  color: #777;
  margin-top: 0.12rem;
`;

const Badge = styled.div`
  display: inline-block;
  margin-top: 0.28rem;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.12rem 0.45rem;
  border-radius: 999px;
  background: ${({ $color }) => $color || '#e8f5e9'};
  color: ${({ $textColor }) => $textColor || '#1B6B3A'};
`;

const Arrow = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1.5px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #555;
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s;
  ${Card}:hover & { background: #1B6B3A; border-color: #1B6B3A; color: #fff; }
`;

const defaultVisas = [
  { code: 'sa', name: 'Saudi Arabia',   type: 'Umrah / Visit Visa',    badge: 'Most Popular',    badgeColor: '#fff3d6', badgeText: '#c9a227', href: '/contact' },
  { code: 'ae', name: 'UAE / Dubai',    type: 'Tourist Visa',          badge: 'Fast Approval',   badgeColor: '#e8f5e9', badgeText: '#1B6B3A', href: '/contact' },
  { code: 'gb', name: 'United Kingdom', type: 'Visit / Work Visa',     badge: 'Interview Req.',  badgeColor: '#fff7ed', badgeText: '#ea580c', href: '/contact' },
  { code: 'us', name: 'United States',  type: 'B1 / B2 Visa',         badge: 'Embassy Interview',badgeColor: '#eff6ff', badgeText: '#2563eb', href: '/contact' },
  { code: 'tr', name: 'Turkey',         type: 'e-Visa',               badge: 'Easy Process',    badgeColor: '#e8f5e9', badgeText: '#1B6B3A', href: '/contact' },
  { code: 'my', name: 'Malaysia',       type: 'Multiple Entry',       badge: 'Visa on Arrival', badgeColor: '#e0f2f1', badgeText: '#0d9488', href: '/contact' },
  { code: 'eu', name: 'Schengen Zone',  type: 'Europe Multi-Country', badge: 'New Route',       badgeColor: '#e8eaf6', badgeText: '#3949ab', href: '/contact' },
  { code: 'ca', name: 'Canada',         type: 'Visitor Visa',         badge: 'High Demand',     badgeColor: '#fff7ed', badgeText: '#d97706', href: '/contact' },
];

export default function TrendingVisas({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const visas = Array.isArray(data.visas) && data.visas.length > 0 ? data.visas : defaultVisas;
  const [ref, inView] = useInView();

  return (
    <Section id="visas" ref={ref}>
      <Inner>
        <SectionHeader $inView={inView}>
          <TitleBlock>
            <Title>{data.title || 'Trending Visas'}</Title>
            <Subtitle>{data.subtitle || 'Most searched destinations by Pakistani travelers'}</Subtitle>
          </TitleBlock>
          <ViewAll href="/contact">View All →</ViewAll>
        </SectionHeader>

        <Grid>
          {visas.map((visa, i) => (
            <CardWrap key={visa.name} $inView={inView} $delay={i * 0.055}>
              <Card href={visa.href || '/contact'}>
                <Flag
                  src={`https://flagcdn.com/w40/${visa.code}.png`}
                  srcSet={`https://flagcdn.com/w80/${visa.code}.png 2x`}
                  alt={visa.name}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <CardInfo>
                  <Country>{visa.name}</Country>
                  <VisaType>{visa.type}</VisaType>
                  {visa.badge && (
                    <Badge $color={visa.badgeColor} $textColor={visa.badgeText}>
                      {visa.badge}
                    </Badge>
                  )}
                </CardInfo>
                <Arrow>→</Arrow>
              </Card>
            </CardWrap>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
