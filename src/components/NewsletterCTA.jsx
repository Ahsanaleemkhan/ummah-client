'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { useInView } from '../lib/useInView';

const Section = styled.section`
  background: linear-gradient(135deg, #1a3826 0%, #1e4530 60%, #162e1e 100%);
  padding: 3.5rem 2rem;
`;

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity ${({ $inView }) => ($inView ? '0.7s' : '0.25s')} ease,
              transform ${({ $inView }) => ($inView ? '0.7s' : '0.25s')} ease;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.5rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
  margin: 0 0 1.75rem;
`;

const Form = styled.form`
  display: flex;
  gap: 0.6rem;
  max-width: 520px;
  margin: 0 auto 0.85rem;
  @media (max-width: 520px) { flex-direction: column; }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.78rem 1rem;
  border-radius: 7px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 0.82rem;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder { color: rgba(255,255,255,0.4); }
  &:focus { border-color: #c9a227; }
`;

const SubscribeBtn = styled.button`
  padding: 0.78rem 1.5rem;
  border-radius: 7px;
  border: none;
  background: #c9a227;
  color: #1a3826;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  letter-spacing: 0.02em;
  &:hover { background: #b8911e; }
`;

const FootNote = styled.p`
  font-size: 0.63rem;
  color: rgba(255,255,255,0.4);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <Section id="newsletter" ref={ref}>
      <Inner $inView={inView}>
        <Title>Get Exclusive Deals in Your Inbox</Title>
        <Subtitle>Be first to know about our limited Umrah and tour offers.</Subtitle>

        {submitted ? (
          <p style={{ color: '#c9a227', fontWeight: 700, fontSize: '0.9rem' }}>
            ✓ You&apos;re subscribed! Watch for exclusive deals.
          </p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeBtn type="submit">Subscribe →</SubscribeBtn>
          </Form>
        )}

        <FootNote>🔒 No spam. Unsubscribe anytime.</FootNote>
      </Inner>
    </Section>
  );
}
