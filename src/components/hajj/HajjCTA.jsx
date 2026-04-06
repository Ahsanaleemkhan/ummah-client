'use client';

import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiPhone, FiMessageCircle, FiMail } from 'react-icons/fi';
import { HiOutlineClock } from 'react-icons/hi';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(245,166,35,0.25); }
  50%      { box-shadow: 0 0 0 12px rgba(245,166,35,0); }
`;

const Section = styled.section`
  background: linear-gradient(165deg, #0d4a24, #1B6B3A 50%, #238c4e);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) { padding: 3.5rem 1.25rem; }
`;

const PatternOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 50%, #fff 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const UrgencyBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 1.1rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: #f5a623;
  background: rgba(245,166,35,0.12);
  border-radius: 999px;
  letter-spacing: 0.06em;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(245,166,35,0.25);
  svg { font-size: 0.85rem; }
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1rem;
  @media (max-width: 640px) { font-size: 1.7rem; }
`;

const Desc = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 640px) { font-size: 0.88rem; }
`;

const BtnRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2.5rem;
  background: linear-gradient(135deg, #f5a623, #e8911a);
  color: #fff;
  font-size: 0.88rem;
  font-weight: 800;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(245,166,35,0.35);
  animation: ${pulse} 2.5s ease-in-out infinite;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(245,166,35,0.5); }
  svg { font-size: 1rem; }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2.25rem;
  background: transparent;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid rgba(255,255,255,0.35);
  transition: all 0.25s;
  &:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.08); }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
  svg { font-size: 0.95rem; color: rgba(255,255,255,0.5); }
`;

export default function HajjCTA({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const headingLines = String(data.heading || 'Secure Your Hajj\nSpot Today').split('\n');
  const contacts = Array.isArray(data.contacts) && data.contacts.length >= 3
    ? data.contacts
    : ['+92 300 123 4567', 'WhatsApp 24/7', 'hajj@ummahtravel.com'];

  return (
    <Section>
      <PatternOverlay />
      <Inner>
        <UrgencyBadge><HiOutlineClock /> {data.urgencyBadge || 'Limited Spots — Hajj 2026 Booking Open'}</UrgencyBadge>
        <Heading>
          {headingLines[0]}
          {headingLines[1] ? <><br />{headingLines[1]}</> : null}
        </Heading>
        <Desc>
          {data.description || 'Hajj spots fill up months in advance. Reserve your place now with just 30% deposit and pay the rest in easy installments. Our team will guide you through every step.'}
        </Desc>
        <BtnRow>
          <PrimaryBtn href={data.primaryButtonHref || '/contact'}>
            {data.primaryButtonText || 'Reserve My Spot'} <FiArrowRight />
          </PrimaryBtn>
          <SecondaryBtn href={data.secondaryButtonHref || '/umrah-packages'}>
            {data.secondaryButtonText || 'View Umrah Packages'}
          </SecondaryBtn>
        </BtnRow>
        <ContactRow>
          <ContactItem><FiPhone /> {contacts[0]}</ContactItem>
          <ContactItem><FiMessageCircle /> {contacts[1]}</ContactItem>
          <ContactItem><FiMail /> {contacts[2]}</ContactItem>
        </ContactRow>
      </Inner>
    </Section>
  );
}
