'use client';

import styled from 'styled-components';
import { useInView } from '../lib/useInView';

const enterT = (delay = 0) => `
  transition: opacity 0.55s ease, transform 0.55s ease;
  transition-delay: ${delay}s;
`;
const exitT = `
  transition: opacity 0.2s ease, transform 0.2s ease;
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

const TitleWrap = styled.div`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
  margin-bottom: 1.75rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  border: 1px solid #ebebeb;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)')};
  ${({ $inView, $delay }) => ($inView ? enterT($delay || 0) : exitT)}
  transition-property: opacity, transform, box-shadow;
  &:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.1); }
`;

const IconBox = styled.div`
  width: 44px; height: 44px;
  border-radius: 10px;
  background: #eaf4ee;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
`;

const FeatureTitle = styled.h3`
  font-size: 0.88rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
`;

const FeatureDesc = styled.p`
  font-size: 0.7rem;
  color: #777;
  line-height: 1.5;
  margin: 0;
`;

function TrustedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6l-9-4z" fill="#1B6B3A" opacity="0.2"/>
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6l-9-4z" stroke="#1B6B3A" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function InstallmentsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="13" rx="2" fill="#1B6B3A" opacity="0.15"/>
      <rect x="2" y="6" width="20" height="13" rx="2" stroke="#1B6B3A" strokeWidth="1.5"/>
      <path d="M2 10h20" stroke="#1B6B3A" strokeWidth="1.5"/>
      <path d="M6 14h3M6 16.5h5" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 4l2-2M18 4l-2-2" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PriceMatchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="#1B6B3A" strokeWidth="1.5" fill="#1B6B3A" opacity="0.1"/>
      <path d="M21 21l-4-4" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 11h6M11 8v6" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16l.27.92z" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#1B6B3A" opacity="0.1"/>
    </svg>
  );
}

const FEATURES = [
  { Icon: TrustedIcon,       title: '100% Trusted',       desc: 'IATA certified & government approved since 2009' },
  { Icon: InstallmentsIcon,  title: 'Easy Installments',  desc: '0% markup payment plans on all packages' },
  { Icon: PriceMatchIcon,    title: 'Best Price Match',   desc: "Found cheaper? We'll match any price, guaranteed" },
  { Icon: SupportIcon,       title: '24/7 Urdu Support',  desc: 'Round-the-clock help in Urdu & English' },
];

export default function FeaturesStrip() {
  const [ref, inView] = useInView();
  return (
    <Section ref={ref}>
      <Inner>
        <TitleWrap $inView={inView}>
          <Title>Why Travelers Choose Ummah</Title>
        </TitleWrap>
        <Grid>
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <Card key={title} $inView={inView} $delay={i * 0.1}>
              <IconBox><Icon /></IconBox>
              <FeatureTitle>{title}</FeatureTitle>
              <FeatureDesc>{desc}</FeatureDesc>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
