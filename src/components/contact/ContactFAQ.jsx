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

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPanel = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #1B6B3A;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  font-size: 0.88rem;
  color: #777;
  line-height: 1.7;
  margin-bottom: 1.75rem;
`;

const HelpBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: #145230;
    transform: translateY(-1px);
  }
`;

/* FAQ list */
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

  ${({ $open }) => $open && `
    box-shadow: 0 4px 20px rgba(27,107,58,0.1);
  `}
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

const Toggle = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ $open }) => $open ? '#1B6B3A' : '#f0f1ec'};
  color: ${({ $open }) => $open ? '#fff' : '#555'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  flex-shrink: 0;
  transition: all 0.3s;
  transform: ${({ $open }) => $open ? 'rotate(45deg)' : 'rotate(0)'};
`;

const slideDown = keyframes`
  from { opacity: 0; max-height: 0; }
  to   { opacity: 1; max-height: 300px; }
`;

const FaqA = styled.div`
  padding: 0 1.35rem 1.15rem;
  font-size: 0.82rem;
  color: #666;
  line-height: 1.75;
  animation: ${slideDown} 0.3s ease forwards;
`;

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'Our team typically responds within 2 hours during business hours. For urgent queries, call us directly or reach out via WhatsApp for instant support 24/7.',
  },
  {
    q: 'Can I visit your office without an appointment?',
    a: 'Yes, walk-ins are welcome at our Islamabad HQ during office hours. However, for a dedicated consultation, we recommend scheduling an appointment so a package specialist is available for you.',
  },
  {
    q: 'Do you offer virtual consultations?',
    a: 'Absolutely! We offer video consultations via Zoom or Google Meet. Schedule a free 30-minute call with our Umrah specialist to discuss your travel plans in detail.',
  },
  {
    q: 'What is the best way to get a custom quote?',
    a: 'Fill out the contact form with your preferred dates, group size, and budget range. Our team will prepare a personalized quote within 24 hours. You can also WhatsApp us for a faster response.',
  },
  {
    q: 'Do you have representatives in Saudi Arabia?',
    a: 'Yes, we have local representatives in both Makkah and Madinah who provide on-ground assistance throughout your Umrah journey, from airport pickup to hotel check-in and ziyarat coordination.',
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="contact-faq">
      <Inner>
        <LeftPanel>
          <Title>Common Questions</Title>
          <Desc>
            Quick answers to the most common questions about contacting us
            and getting support.
          </Desc>
          <HelpBtn href="#contact-form">
            Still need help? →
          </HelpBtn>
        </LeftPanel>

        <FaqList>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FaqItem key={i} $open={isOpen}>
                <FaqQ $open={isOpen} onClick={() => setOpenIndex(prev => prev === i ? -1 : i)}>
                  {faq.q}
                  <Toggle $open={isOpen}>+</Toggle>
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
