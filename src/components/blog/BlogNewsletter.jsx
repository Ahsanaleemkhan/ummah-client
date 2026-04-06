'use client';

import styled, { keyframes } from 'styled-components';
import { FiSend, FiMail } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(27,107,58,0.2); }
  50%      { box-shadow: 0 0 0 10px rgba(27,107,58,0); }
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
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.4rem;
  color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.15);
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

const Desc = styled.p`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.7;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
`;

const FormRow = styled.form`
  display: flex;
  gap: 0.65rem;
  max-width: 480px;
  margin: 0 auto 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const InputWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 0 1rem;
  transition: border-color 0.2s, background 0.2s;

  &:focus-within {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.18);
  }

  svg {
    color: rgba(255,255,255,0.45);
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

const EmailInput = styled.input`
  border: none;
  background: none;
  padding: 0.75rem 0;
  font-size: 0.85rem;
  color: #fff;
  width: 100%;
  font-family: inherit;

  &::placeholder {
    color: rgba(255,255,255,0.4);
  }
`;

const SubscribeBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1.5rem;
  background: #fff;
  color: #1B6B3A;
  font-size: 0.82rem;
  font-weight: 800;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.25s;
  white-space: nowrap;
  animation: ${pulse} 2.5s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }

  svg {
    font-size: 0.95rem;
  }
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);

  svg {
    color: rgba(255,255,255,0.5);
    font-size: 0.85rem;
  }
`;

export default function BlogNewsletter({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};
  const features = Array.isArray(data.features) && data.features.length > 0
    ? data.features
    : ['Weekly articles', 'Exclusive deals', 'No spam, ever'];

  return (
    <Section>
      <PatternOverlay />
      <Inner>
        <IconWrap>
          <FiMail />
        </IconWrap>
        <Heading>{data.heading || 'Never Miss a Travel Tip'}</Heading>
        <Desc>
          {data.description || 'Subscribe to our newsletter and get expert Umrah guides, exclusive deals, and travel inspiration delivered straight to your inbox.'}
        </Desc>

        <FormRow onSubmit={(e) => e.preventDefault()}>
          <InputWrap>
            <FiMail />
            <EmailInput type="email" placeholder={data.emailPlaceholder || 'Enter your email address'} />
          </InputWrap>
          <SubscribeBtn type="submit">
            {data.buttonText || 'Subscribe'} <FiSend />
          </SubscribeBtn>
        </FormRow>

        <Features>
          {features.map((feature, index) => (
            <Feature key={`${feature}-${index}`}><HiOutlineSparkles /> {feature}</Feature>
          ))}
        </Features>
      </Inner>
    </Section>
  );
}
