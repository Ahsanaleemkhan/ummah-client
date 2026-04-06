'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #ececec;
  padding: 2.8rem 2rem;

  @media (max-width: 768px) {
    padding: 2.2rem 1rem;
  }
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(1.7rem, 3.7vw, 2.85rem);
  line-height: 1.05;
  color: #1a4f2f;
`;

const Form = styled.form`
  margin: 1.35rem auto 0;
  max-width: 660px;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem;
  border: 1px solid #c8cec8;
  border-radius: 999px;
  background: #fff;

  @media (max-width: 640px) {
    flex-direction: column;
    border-radius: 18px;
    padding: 0.65rem;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.82rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  outline: none;
  color: #2f2f2f;

  &::placeholder {
    color: #9a9a9a;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SubmitBtn = styled.button`
  border: none;
  border-radius: 999px;
  background: #1b6b3a;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.78rem 1.35rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #154f2c;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default function ToursNewsletter({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};

  return (
    <Section>
      <Inner>
        <Title>{data.title || 'Subscribe to get awesome discounts.'}</Title>

        <Form onSubmit={(event) => event.preventDefault()}>
          <EmailInput
            type="email"
            placeholder={data.placeholder || 'Enter your email address'}
            aria-label="Email address"
          />
          <SubmitBtn type="submit">{data.buttonText || 'Subscribe'}</SubmitBtn>
        </Form>
      </Inner>
    </Section>
  );
}
