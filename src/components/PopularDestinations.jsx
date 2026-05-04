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
  padding: 3.5rem 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(-20px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin: 0;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.5;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 520px) { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
`;

/* Connecting line between steps */
const ConnectorLine = styled.div`
  position: absolute;
  top: 52px;
  left: 12%;
  right: 12%;
  height: 2px;
  background: linear-gradient(90deg, rgba(27,107,58,0.08), rgba(27,107,58,0.22), rgba(27,107,58,0.08));
  z-index: 0;
  @media (max-width: 900px) { display: none; }
`;

const StepCard = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(30px)')};
  ${({ $inView, $delay }) => ($inView ? enterT($delay || 0) : exitT)}
`;

const StepNumber = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.4rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s;

  ${StepCard}:hover & {
    background: #e8f5e9;
    border-color: #1B6B3A;
    transform: scale(1.08);
    box-shadow: 0 4px 14px rgba(27,107,58,0.15);
  }
`;

const StepIcon = styled.span`
  font-size: 1.3rem;
  line-height: 1;
`;

const StepLabel = styled.div`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1B6B3A;
  margin-bottom: 0.4rem;
`;

const StepTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.4rem;
  line-height: 1.3;
`;

const StepDesc = styled.p`
  font-size: 0.72rem;
  color: #666;
  margin: 0;
  line-height: 1.55;
`;

/* Stats bar at bottom */
const StatsBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(20px)')};
  ${({ $inView }) => ($inView ? enterT(0.4) : exitT)}

  @media (max-width: 600px) { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1B6B3A;
  line-height: 1;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.65rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`;

const steps = [
  { icon: '📋', label: 'Step 1', title: 'Choose Your Package', desc: 'Browse our curated Umrah, Hajj, and tour packages tailored to your budget and preferences.' },
  { icon: '📞', label: 'Step 2', title: 'Speak With Our Team', desc: 'Our experienced advisors will help customize your journey and answer every question you have.' },
  { icon: '✈️', label: 'Step 3', title: 'We Handle Everything', desc: 'From visa processing and flights to hotel bookings and transfers — we manage it all for you.' },
  { icon: '🕋', label: 'Step 4', title: 'Begin Your Journey', desc: 'Travel with peace of mind knowing every detail has been taken care of by trusted professionals.' },
];

const stats = [
  { value: '10K+', label: 'Happy Pilgrims' },
  { value: '15+', label: 'Years Experience' },
  { value: '4.6★', label: 'Trustpilot Rating' },
  { value: '24/7', label: 'Customer Support' },
];

export default function PopularDestinations({ content = null }) {
  const [ref, inView] = useInView();

  return (
    <Section id="how-it-works" ref={ref}>
      <Inner>
        <SectionHeader $inView={inView}>
          <Title>How It Works</Title>
          <Subtitle>
            From choosing your ideal package to embarking on your sacred journey — we make every step seamless and stress-free.
          </Subtitle>
        </SectionHeader>

        <StepsGrid>
          <ConnectorLine />
          {steps.map((step, i) => (
            <StepCard key={step.label} $inView={inView} $delay={i * 0.12}>
              <StepNumber>
                <StepIcon>{step.icon}</StepIcon>
              </StepNumber>
              <StepLabel>{step.label}</StepLabel>
              <StepTitle>{step.title}</StepTitle>
              <StepDesc>{step.desc}</StepDesc>
            </StepCard>
          ))}
        </StepsGrid>

        <StatsBar $inView={inView}>
          {stats.map((stat) => (
            <StatItem key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsBar>
      </Inner>
    </Section>
  );
}
