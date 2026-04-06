'use client';

import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(27,107,58,0.25); }
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
    radial-gradient(circle at 25% 50%, #fff 1px, transparent 1px),
    radial-gradient(circle at 75% 50%, #fff 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    font-size: 1.7rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
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

export default function AboutCTA({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const heading = data.heading || 'Ready to Start Your\nSacred Journey?';
  const headingLines = String(heading).split('\n');

  return (
    <Section>
      <PatternOverlay />
      <Inner>
        <Heading>
          {headingLines[0]}
          {headingLines[1] ? <><br />{headingLines[1]}</> : null}
        </Heading>
        <Desc>
          {data.description || 'Join thousands of pilgrims who trusted Ummah Travel for their spiritual journey. Let us create a memorable Umrah experience for you.'}
        </Desc>
        <BtnRow>
          <PrimaryBtn href={data.primaryButtonHref || '/umrah-packages'}>
            {data.primaryButtonText || 'View Packages →'}
          </PrimaryBtn>
          <SecondaryBtn href={data.secondaryButtonHref || '#contact'}>
            {data.secondaryButtonText || 'Contact Us'}
          </SecondaryBtn>
        </BtnRow>
      </Inner>
    </Section>
  );
}
