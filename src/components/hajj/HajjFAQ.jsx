'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const slideDown = keyframes`
  from { opacity: 0; max-height: 0; }
  to   { opacity: 1; max-height: 300px; }
`;

const Section = styled.section`
  background: #f7f8f5;
  padding: 4.5rem 2rem;
  @media (max-width: 768px) { padding: 3rem 1rem; }
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
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

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const FaqItem = styled.div`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: box-shadow 0.3s;
  ${({ $open }) => $open && `box-shadow: 0 4px 20px rgba(27,107,58,0.1);`}
`;

const FaqQ = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.35rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${({ $open }) => $open ? '#1B6B3A' : '#222'};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s;
  font-family: inherit;
  line-height: 1.4;
  gap: 0.75rem;
  &:hover { color: #1B6B3A; }
`;

const QIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  svg:first-child { font-size: 0.9rem; color: #1B6B3A; opacity: 0.4; }
`;

const Toggle = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ $open }) => $open ? '#1B6B3A' : '#f0f1ec'};
  color: ${({ $open }) => $open ? '#fff' : '#555'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  flex-shrink: 0;
  transition: all 0.3s;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0)'};
  svg { font-size: 0.85rem; }
`;

const FaqA = styled.div`
  padding: 0 1.35rem 1.15rem;
  font-size: 0.82rem;
  color: #666;
  line-height: 1.75;
  animation: ${slideDown} 0.3s ease forwards;
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

  return (
    <Section id="hajj-faq">
      <Inner>
        <SectionHeader>
          <Title>Hajj FAQs</Title>
          <Subtitle>Answers to the most common questions about our Hajj packages</Subtitle>
        </SectionHeader>

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
      </Inner>
    </Section>
  );
}
