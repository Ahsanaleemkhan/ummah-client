'use client';

import styled, { keyframes } from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';
import { GiMountainRoad } from 'react-icons/gi';
import { FaKaaba } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineSun } from 'react-icons/hi';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: #fff;
  padding: 4.5rem 2rem;
  @media (max-width: 768px) { padding: 3rem 1rem; }
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #1B6B3A;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
  @media (max-width: 640px) { font-size: 1.6rem; }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  color: #777;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #1B6B3A, #238c4e, rgba(27,107,58,0.15));
    border-radius: 999px;
  }

  @media (max-width: 640px) {
    padding-left: 2.5rem;
    &::before { left: 14px; }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2.25rem;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -2.2rem;
  top: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ $color }) => $color || '#1B6B3A'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  box-shadow: 0 4px 14px ${({ $color }) => $color ? `${$color}44` : 'rgba(27,107,58,0.3)'};
  z-index: 1;

  @media (max-width: 640px) {
    left: -1.85rem;
    width: 32px;
    height: 32px;
    font-size: 0.85rem;
  }
`;

const TimelineCard = styled.div`
  background: #f9faf7;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(27,107,58,0.1);
    background: #fff;
    box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  }
`;

const DayLabel = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  color: #1B6B3A;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.35rem;
`;

const TimelineDesc = styled.p`
  font-size: 0.8rem;
  color: #777;
  line-height: 1.65;
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
    color: '#e8911a',
  },
  {
    day: 'Day 3 — 10th Dhul Hijjah',
    title: 'Stoning, Sacrifice & Tawaf',
    desc: 'Perform Rami (stoning) at Jamarat al-Aqabah, Qurbani (sacrifice), shave/trim hair, and return to Makkah for Tawaf al-Ifadah and Sa\'i.',
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
  return (
    <Section id="hajj-timeline">
      <Inner>
        <SectionHeader>
          <Title>Your Hajj Journey</Title>
          <Subtitle>A day-by-day walkthrough of the sacred pilgrimage</Subtitle>
        </SectionHeader>

        <Timeline>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <TimelineItem key={i} $delay={`${i * 0.1}s`}>
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
