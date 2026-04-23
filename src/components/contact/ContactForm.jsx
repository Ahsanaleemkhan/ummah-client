'use client';

import styled from 'styled-components';

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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ── Contact Info Side ── */
const InfoSide = styled.div``;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;

const InfoDesc = styled.p`
  font-size: 0.88rem;
  color: #777;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 420px;
`;

const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: rgba(27,107,58,0.12);
    box-shadow: 0 6px 24px rgba(27,107,58,0.08);
    transform: translateX(4px);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(27,107,58,0.1), rgba(27,107,58,0.04));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const InfoText = styled.div`
  .label {
    font-size: 0.68rem;
    font-weight: 700;
    color: #1B6B3A;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.15rem;
  }
  .value {
    font-size: 0.88rem;
    font-weight: 600;
    color: #222;
    line-height: 1.4;
  }
  .sub {
    font-size: 0.75rem;
    color: #999;
    margin-top: 0.1rem;
  }
`;

/* Office hours */
const HoursCard = styled.div`
  background: linear-gradient(135deg, #1B6B3A, #238c4e);
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  margin-top: 0.5rem;
`;

const HoursTitle = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.85rem;
  letter-spacing: 0.04em;
`;

const HoursRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.35rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.12);

  &:last-child {
    border-bottom: none;
  }

  .day {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.7);
  }
  .time {
    font-size: 0.78rem;
    color: #fff;
    font-weight: 600;
  }
`;

/* ── Form Side ── */
const FormSide = styled.div`
  background: #fff;
  border-radius: 22px;
  padding: 2.5rem 2.25rem;
  box-shadow: 0 8px 40px rgba(0,0,0,0.07);
`;

const FormTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.35rem;
`;

const FormDesc = styled.p`
  font-size: 0.82rem;
  color: #888;
  margin-bottom: 1.75rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols === 2 ? '1fr 1fr' : '1fr'};
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Label = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #222;
  background: #fafbf8;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: #1B6B3A;
    box-shadow: 0 0 0 3px rgba(27,107,58,0.08);
    background: #fff;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #222;
  background: #fafbf8;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 2.5rem;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #1B6B3A;
    box-shadow: 0 0 0 3px rgba(27,107,58,0.08);
    background-color: #fff;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #222;
  background: #fafbf8;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: #1B6B3A;
    box-shadow: 0 0 0 3px rgba(27,107,58,0.08);
    background: #fff;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: #1B6B3A;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.25s;
  margin-top: 0.5rem;

  &:hover {
    background: #145230;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(27,107,58,0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const contactInfo = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+1 945-223-0620',
    sub: 'Mon–Sat, 9AM–6PM CST',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+1 945-223-0620',
    sub: '24/7 instant replies',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@ummah.travel',
    sub: 'We reply within 2 hours',
  },
  {
    icon: '📍',
    label: 'Head Office',
    value: 'Suite #5, 3445 N Belt Line Rd',
    sub: 'Irving, TX 75062, USA',
  },
];

export default function ContactForm() {
  return (
    <Section id="contact-form">
      <Inner>
        {/* Left — Contact Info */}
        <InfoSide>
          <InfoTitle>Let&apos;s Connect</InfoTitle>
          <InfoDesc>
            Reach out through any channel below, or fill out the form and our team
            will get back to you within 2 business hours.
          </InfoDesc>

          <InfoCards>
            {contactInfo.map((info) => (
              <InfoCard key={info.label}>
                <InfoIcon>{info.icon}</InfoIcon>
                <InfoText>
                  <div className="label">{info.label}</div>
                  <div className="value">{info.value}</div>
                  <div className="sub">{info.sub}</div>
                </InfoText>
              </InfoCard>
            ))}
          </InfoCards>

          <HoursCard>
            <HoursTitle>🕐 Office Hours</HoursTitle>
            <HoursRow>
              <span className="day">Monday – Friday</span>
              <span className="time">9:00 AM – 8:00 PM</span>
            </HoursRow>
            <HoursRow>
              <span className="day">Saturday</span>
              <span className="time">10:00 AM – 6:00 PM</span>
            </HoursRow>
            <HoursRow>
              <span className="day">Sunday</span>
              <span className="time">Closed</span>
            </HoursRow>
          </HoursCard>
        </InfoSide>

        {/* Right — Form */}
        <FormSide>
          <FormTitle>Send Us a Message</FormTitle>
          <FormDesc>Fill in the details below and we&apos;ll get back to you shortly.</FormDesc>

          <form onSubmit={(e) => e.preventDefault()}>
            <FormRow $cols={2}>
              <InputGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" placeholder="e.g. Ahmad" />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" placeholder="e.g. Malik" />
              </InputGroup>
            </FormRow>

            <FormRow $cols={2}>
              <InputGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (000) 000-0000" />
              </InputGroup>
            </FormRow>

            <FormRow>
              <InputGroup>
                <Label htmlFor="subject">Subject</Label>
                <Select id="subject" defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option value="umrah">Umrah Package Inquiry</option>
                  <option value="flights">Flight Booking</option>
                  <option value="hotels">Hotel Reservation</option>
                  <option value="visa">Visa Processing</option>
                  <option value="custom">Custom Package</option>
                  <option value="other">Other</option>
                </Select>
              </InputGroup>
            </FormRow>

            <FormRow>
              <InputGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your travel plans, preferred dates, group size, or any questions you have..." />
              </InputGroup>
            </FormRow>

            <SubmitBtn type="submit">Send Message →</SubmitBtn>
          </form>
        </FormSide>
      </Inner>
    </Section>
  );
}
