'use client';

import styled from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';
import { GiMountainRoad } from 'react-icons/gi';
import { FaKaaba } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineSun } from 'react-icons/hi';
import { useInView } from '../../lib/useInView';

const enterT = (delay = 0) => `
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${delay}s;
`;
const exitT = `
  transition: opacity 0.2s ease, transform 0.2s ease;
  transition-delay: 0s;
`;

const Section = styled.section`
  background: #fff;
  padding: 4rem 2rem 4.5rem;
  @media (max-width: 768px) { padding: 3rem 1rem 3.5rem; }
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.75rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateX(0)' : 'translateX(-28px)')};
  ${({ $inView }) => ($inView ? enterT(0) : exitT)}
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
  padding-left: 0.75rem;
  border-left: 3px solid #c9a227;
  line-height: 1.2;
  @media (max-width: 640px) { font-size: 1.4rem; }
`;

const Subtitle = styled.p`
  font-size: 0.82rem;
  color: #777;
  margin: 0;
  padding-left: 0.75rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  padding-left: 3.25rem;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #1B6B3A, #c9a227 60%, rgba(201,162,39,0.15));
    border-radius: 999px;
  }

  @media (max-width: 640px) {
    padding-left: 2.75rem;
    &::before { left: 16px; }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(24px)')};
  transition: opacity 0.55s ease ${({ $delay }) => $delay || '0s'},
              transform 0.55s ease ${({ $delay }) => $delay || '0s'};

  &:last-child { padding-bottom: 0; }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -2.45rem;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color || '#1B6B3A'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  box-shadow: 0 4px 14px ${({ $color }) => $color ? `${$color}55` : 'rgba(27,107,58,0.35)'};
  z-index: 1;
  border: 3px solid #fff;

  @media (max-width: 640px) {
    left: -2rem;
    width: 34px;
    height: 34px;
    font-size: 0.88rem;
  }
`;

const TimelineCard = styled.div`
  background: #f5f5f5;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  border: 1.5px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(201,162,39,0.25);
    background: #fff;
    box-shadow: 0 6px 24px rgba(0,0,0,0.07);
  }
`;

const DayLabel = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  color: #c9a227;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.28rem;
`;

const TimelineTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.3rem;
`;

const TimelineDesc = styled.p`
  font-size: 0.78rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
`;

const steps = [
  {
    day: 'Day 1 — 8th Dhul Hijjah',
    title: 'Arrival & Ihram in Makkah',
    desc: 'Enter the sacred state of Ihram, perform Tawaf al-Qudum (arrival Tawaf), and proceed to Mina for overnight stay in air-conditioned tents.',
    icon: FaKaaba,
    color: '#1B6B3A',
  },
  {
    day: 'Day 2 — 9th Dhul Hijjah',
    title: 'Wuquf at Arafat',
    desc: 'The most important day of Hajj. Stand on the plain of Arafat from Dhuhr to Maghrib, supplicating and seeking forgiveness. Then proceed to Muzdalifah for the night.',
    icon: HiOutlineSun,
    color: '#c9a227',
  },
  {
    day: 'Day 3 — 10th Dhul Hijjah',
    title: 'Stoning, Sacrifice & Tawaf',
    desc: "Perform Rami (stoning) at Jamarat al-Aqabah, Qurbani (sacrifice), shave/trim hair, and return to Makkah for Tawaf al-Ifadah and Sa'i.",
    icon: HiOutlineLocationMarker,
    color: '#1B6B3A',
  },
  {
    day: 'Days 4–5 — 11th–12th Dhul Hijjah',
    title: 'Days of Tashreeq in Mina',
    desc: 'Return to Mina for the days of Tashreeq. Stone all three Jamarat each day. Use this time for dhikr, reflection, and bonding with fellow pilgrims.',
    icon: GiMountainRoad,
    color: '#2d8a56',
  },
  {
    day: 'Day 6 — 13th Dhul Hijjah',
    title: 'Farewell Tawaf & Departure',
    desc: 'Return to Makkah for Tawaf al-Wida (farewell Tawaf). Many packages include optional Madinah visit for Ziyarat at Masjid Nabawi before departure.',
    icon: FiCheckCircle,
    color: '#145230',
  },
];

export default function HajjTimeline() {
  const [headerRef, headerInView] = useInView();
  const [timelineRef, timelineInView] = useInView();

  return (
    <Section id="hajj-timeline">
      <Inner>
        <SectionHeader ref={headerRef} $inView={headerInView}>
          <Title>Your Hajj Journey</Title>
          <Subtitle>A step-by-step walkthrough of the sacred five-day pilgrimage</Subtitle>
        </SectionHeader>

        <Timeline ref={timelineRef}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <TimelineItem
                key={i}
                $inView={timelineInView}
                $delay={`${i * 0.1}s`}
              >
                <TimelineDot $color={step.color}><Icon /></TimelineDot>
                <TimelineCard>
                  <DayLabel>{step.day}</DayLabel>
                  <TimelineTitle>{step.title}</TimelineTitle>
                  <TimelineDesc>{step.desc}</TimelineDesc>
                </TimelineCard>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Inner>
    </Section>
  );
}
