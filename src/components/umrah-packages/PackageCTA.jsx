'use client';

import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.02); }
`;

const Section = styled.section`
  background: linear-gradient(165deg, #0d4a24 0%, #1B6B3A 50%, #238c4e 100%);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
`;

const PatternOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px),
    radial-gradient(circle at 80% 50%, #fff 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

const GlowOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  pointer-events: none;

  &:nth-child(2) {
    top: -100px;
    right: -50px;
  }

  &:nth-child(3) {
    bottom: -100px;
    left: -80px;
  }
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.35rem 1rem;
  font-size: 0.68rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.12);
  border-radius: 999px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const BtnRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2.25rem;
  background: #fff;
  color: #1B6B3A;
  font-size: 0.85rem;
  font-weight: 800;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  animation: ${pulse} 3s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  }

  .arrow {
    font-size: 1rem;
    transition: transform 0.2s;
  }

  &:hover .arrow {
    transform: translateX(4px);
  }
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
  letter-spacing: 0.04em;
  cursor: pointer;
  border: 2px solid rgba(255,255,255,0.35);
  transition: all 0.25s;

  &:hover {
    border-color: rgba(255,255,255,0.7);
    background: rgba(255,255,255,0.08);
  }
`;

const ContactRow = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  .text {
    text-align: left;
    line-height: 1.3;
  }

  .label {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.7;
  }

  .value {
    font-weight: 600;
    color: rgba(255,255,255,0.9);
    font-size: 0.82rem;
  }
`;

const defaultContacts = [
  { label: 'Call Us', value: '+92 300 123 4567', icon: '📞' },
  { label: 'WhatsApp', value: '+92 300 123 4567', icon: '💬' },
  { label: 'Email', value: 'info@ummahtravel.com', icon: '✉️' },
];

export default function PackageCTA({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const contacts = Array.isArray(data.contacts) && data.contacts.length > 0
    ? data.contacts
    : defaultContacts;

  return (
    <Section>
      <PatternOverlay />
      <GlowOrb />
      <GlowOrb />

      <Inner>
        <Badge>{data.badge || 'Limited Time Offer — Ramadan 2026'}</Badge>
        <Heading>{(data.heading || 'Ready to Begin Your\nSpiritual Journey?').split('\n').map((line, idx) => (
          <span key={`${line}-${idx}`}>
            {line}
            <br />
          </span>
        ))}</Heading>
        <Desc>
          {data.description || 'Book your Umrah package today and receive an exclusive early-bird discount. Our expert team is ready to craft your perfect pilgrimage experience.'}
        </Desc>

        <BtnRow>
          <PrimaryBtn href={data.primaryButtonHref || '#book'}>
            {data.primaryButtonText || 'Book Your Package'} <span className="arrow">→</span>
          </PrimaryBtn>
          <SecondaryBtn href={data.secondaryButtonHref || '#contact'}>
            {data.secondaryButtonText || 'Talk to an Expert'}
          </SecondaryBtn>
        </BtnRow>

        {contacts.length > 0 && (
          <ContactRow>
            {contacts.map((item, index) => (
              <ContactItem key={`${item?.label || 'contact'}-${index}`}>
                <span className="icon">{item.icon || '✉️'}</span>
                <div className="text">
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              </ContactItem>
            ))}
          </ContactRow>
        )}
      </Inner>
    </Section>
  );
}
