'use client';

import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiPhone, FiMessageCircle, FiMail } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(27,107,58,0.2); }
  50%      { box-shadow: 0 0 0 12px rgba(27,107,58,0); }
`;

const Section = styled.section`
  background: linear-gradient(165deg, #0d4a24, #1B6B3A 50%, #238c4e);
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
  opacity: 0.035;
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
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  pointer-events: none;

  &:nth-child(2) {
    top: -120px;
    right: -60px;
  }

  &:nth-child(3) {
    bottom: -120px;
    left: -80px;
  }
`;

const Inner = styled.div`
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 1rem;
  font-size: 0.68rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.12);
  border-radius: 999px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);

  svg {
    font-size: 0.82rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) {
    font-size: 0.88rem;
  }
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
  padding: 0.85rem 2.25rem;
  background: #fff;
  color: #1B6B3A;
  font-size: 0.85rem;
  font-weight: 800;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  animation: ${pulse} 2.5s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  }

  svg {
    font-size: 1rem;
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(3px);
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
  cursor: pointer;
  border: 2px solid rgba(255,255,255,0.35);
  transition: all 0.25s;

  &:hover {
    border-color: rgba(255,255,255,0.7);
    background: rgba(255,255,255,0.08);
  }
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
  gap: 0.5rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
`;

const ContactIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
`;

const ContactText = styled.div`
  text-align: left;
  line-height: 1.3;

  .label {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
  .value {
    font-weight: 600;
    color: rgba(255,255,255,0.9);
    font-size: 0.82rem;
  }
`;

export default function ToursCTA() {
  return (
    <Section>
      <PatternOverlay />
      <GlowOrb />
      <GlowOrb />

      <Inner>
        <Badge>
          <HiOutlineSparkles /> Custom Tours Available
        </Badge>
        <Heading>Can&apos;t Find Your<br />Perfect Tour?</Heading>
        <Desc>
          Let our travel experts craft a custom itinerary just for you.
          Tell us your dream destination, budget, and dates — we&apos;ll handle the rest.
        </Desc>

        <BtnRow>
          <PrimaryBtn href="/contact">
            Get Custom Quote <FiArrowRight />
          </PrimaryBtn>
          <SecondaryBtn href="/umrah-packages">
            View Umrah Packages
          </SecondaryBtn>
        </BtnRow>

        <ContactRow>
          <ContactItem>
            <ContactIcon><FiPhone /></ContactIcon>
            <ContactText>
              <div className="label">Call Us</div>
              <div className="value">+92 300 123 4567</div>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FiMessageCircle /></ContactIcon>
            <ContactText>
              <div className="label">WhatsApp</div>
              <div className="value">+92 300 123 4567</div>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FiMail /></ContactIcon>
            <ContactText>
              <div className="label">Email</div>
              <div className="value">tours@ummahtravel.com</div>
            </ContactText>
          </ContactItem>
        </ContactRow>
      </Inner>
    </Section>
  );
}
