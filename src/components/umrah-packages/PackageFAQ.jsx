'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  background: #f7f8f5;
  padding: 4.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
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

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.92rem;
  color: #777;
`;

const FaqList = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FaqItem = styled.div`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: box-shadow 0.3s;

  ${({ $open }) => $open && `
    box-shadow: 0 4px 24px rgba(27,107,58,0.1);
  `}
`;

const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.15rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: ${({ $open }) => $open ? '#1B6B3A' : '#222'};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s;
  font-family: inherit;
  line-height: 1.4;

  &:hover {
    color: #1B6B3A;
  }
`;

const ToggleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $open }) => $open ? '#1B6B3A' : '#f0f1ec'};
  color: ${({ $open }) => $open ? '#fff' : '#555'};
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
  transition: all 0.3s;
  transform: ${({ $open }) => $open ? 'rotate(45deg)' : 'rotate(0)'};
`;

const slideDown = keyframes`
  from { opacity: 0; max-height: 0; }
  to   { opacity: 1; max-height: 300px; }
`;

const FaqAnswer = styled.div`
  padding: 0 1.5rem 1.25rem;
  font-size: 0.84rem;
  color: #666;
  line-height: 1.75;
  animation: ${slideDown} 0.35s ease forwards;
`;

const faqs = [
  {
    q: 'What is included in the Umrah package pricing?',
    a: 'All our packages include return flights, hotel accommodation, airport transfers, Umrah visa processing, and ground transportation between Makkah and Madinah. Meal plans and additional services vary by package tier.',
  },
  {
    q: 'How far in advance should I book my Umrah package?',
    a: 'We recommend booking at least 4–6 weeks in advance for standard packages, and 8–12 weeks for Ramadan or peak season packages. Early booking ensures better hotel availability and preferred flight schedules.',
  },
  {
    q: 'Can I customize my Umrah package?',
    a: 'Absolutely! All packages can be customized to fit your preferences. You can upgrade your hotel, extend your stay, add premium meals, or request private transportation. Contact our team for a tailored quote.',
  },
  {
    q: 'What documents do I need for the Umrah visa?',
    a: 'You will need a valid passport (6+ months validity), recent passport-sized photographs, completed visa application form, and proof of vaccination (Meningitis ACWY). Our visa team handles the entire process for you.',
  },
  {
    q: 'Is travel insurance included?',
    a: 'Travel insurance is included in our Premium packages. For Budget and Economy packages, we strongly recommend purchasing travel insurance separately. We can arrange this as an add-on during booking.',
  },
  {
    q: 'Do you offer group discounts for families?',
    a: 'Yes, we offer special family group discounts for parties of 4 or more. Children under 2 travel free (lap infants), and children aged 2–12 receive a discounted rate. Contact us for family package pricing.',
  },
  {
    q: 'What is the cancellation and refund policy?',
    a: 'Cancellations made 30+ days before departure receive a full refund minus processing fees. Cancellations 15–30 days before departure receive 50% refund. Within 15 days, a 25% refund is offered. Premium packages include free cancellation up to 7 days before travel.',
  },
];

export default function PackageFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(prev => prev === i ? -1 : i);
  };

  return (
    <Section id="faq">
      <SectionHeader>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>Everything you need to know about our Umrah packages</Subtitle>
      </SectionHeader>

      <FaqList>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FaqItem key={i} $open={isOpen}>
              <FaqQuestion $open={isOpen} onClick={() => toggle(i)}>
                {faq.q}
                <ToggleIcon $open={isOpen}>+</ToggleIcon>
              </FaqQuestion>
              {isOpen && (
                <FaqAnswer>{faq.a}</FaqAnswer>
              )}
            </FaqItem>
          );
        })}
      </FaqList>
    </Section>
  );
}
