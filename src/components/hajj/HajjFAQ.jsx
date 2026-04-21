'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
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
  background: #f5f5f5;
  padding: 4rem 2rem 4.5rem;
  @media (max-width: 768px) { padding: 3rem 1rem 3.5rem; }
`;

const Inner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.25rem;
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

const FaqGrid = styled.div`
  max-width: 820px;
  margin: 0 auto;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(24px)')};
  ${({ $inView }) => ($inView ? enterT(0.1) : exitT)}
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const FaqItem = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  border: 1.5px solid ${({ $open }) => $open ? 'rgba(201,162,39,0.3)' : '#ebebeb'};
  transition: border-color 0.25s, box-shadow 0.25s;
  ${({ $open }) => $open && `box-shadow: 0 4px 20px rgba(201,162,39,0.1);`}
`;

const FaqQ = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  font-size: 0.86rem;
  font-weight: 700;
  color: ${({ $open }) => $open ? '#1B6B3A' : '#1a1a1a'};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s;
  font-family: inherit;
  line-height: 1.45;
  gap: 0.75rem;
  &:hover { color: #1B6B3A; }
`;

const QIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  svg:first-child {
    font-size: 0.88rem;
    color: #c9a227;
    flex-shrink: 0;
  }
`;

const Toggle = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ $open }) => $open ? '#1B6B3A' : '#f0f0f0'};
  color: ${({ $open }) => $open ? '#fff' : '#555'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0)'};
  svg { font-size: 0.85rem; }
`;

const FaqA = styled.div`
  padding: 0 1.25rem 1.1rem 2.85rem;
  font-size: 0.8rem;
  color: #555;
  line-height: 1.8;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.85rem;
`;

const faqs = [
  { q: 'When is Hajj 2026 and when should I book?', a: 'Hajj 2026 is expected around June 2026 (dates are confirmed closer to the time based on the Islamic calendar). We recommend booking at least 6 months in advance as spots fill up quickly, especially for Premium and VIP packages.' },
  { q: 'What documents do I need for Hajj?', a: 'You will need a valid passport (6+ months validity), passport-size photos, completed Hajj application form, proof of vaccination (meningitis ACWY required), and a mahram certificate for women under 45. We handle the entire visa process for you.' },
  { q: 'What is included in the Hajj package price?', a: 'All packages include: Saudi Hajj visa, round-trip flights, accommodation in Makkah, Mina tents, Arafat facilities, ground transport between holy sites, Qurbani (sacrifice), guided rituals assistance, and Zamzam water on return. Premium and VIP tiers include additional benefits.' },
  { q: 'Can I extend my stay after Hajj?', a: 'Yes! We offer optional Madinah extensions (3–7 nights) including hotel near Masjid Nabawi, ziyarat tours to historical Islamic sites, and guided visits. This can be added to any package tier.' },
  { q: 'Is there a payment plan available?', a: 'Absolutely. We offer flexible installment plans — pay 30% upfront to reserve your spot, and the balance in monthly installments up to 3 months before departure. No interest charges.' },
  { q: 'What health requirements are there?', a: 'Saudi Arabia requires meningitis ACWY vaccination (certificate needed). We recommend seasonal flu and COVID-19 vaccinations. Our team provides a full pre-travel health checklist and connects you with authorized vaccination centers.' },
  { q: 'How are the Mina tent arrangements?', a: 'Economy packages have shared tents (10–15 people) with mattresses and basic amenities. Premium tents are air-conditioned with bedding for 4–6 people. VIP tents are private with premium furnishing, AC, and attached facilities.' },
];

export default function HajjFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [headerRef, headerInView] = useInView();
  const [listRef, listInView] = useInView();

  return (
    <Section id="hajj-faq">
      <Inner>
        <SectionHeader ref={headerRef} $inView={headerInView}>
          <Title>Frequently Asked Questions</Title>
          <Subtitle>Everything you need to know about our Hajj packages</Subtitle>
        </SectionHeader>

        <FaqGrid ref={listRef} $inView={listInView}>
          <FaqList>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <FaqItem key={i} $open={isOpen}>
                  <FaqQ $open={isOpen} onClick={() => setOpenIndex(prev => prev === i ? -1 : i)}>
                    <QIcon><FiHelpCircle /> {faq.q}</QIcon>
                    <Toggle $open={isOpen}><FiChevronDown /></Toggle>
                  </FaqQ>
                  {isOpen && <FaqA>{faq.a}</FaqA>}
                </FaqItem>
              );
            })}
          </FaqList>
        </FaqGrid>
      </Inner>
    </Section>
  );
}
