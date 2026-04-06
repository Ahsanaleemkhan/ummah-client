'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #ececec;
  padding: 1.5rem 2rem 2.2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #1B6B3A;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1.7rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const LogosRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 3.5rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 640px) {
    gap: 1.5rem 2rem;
  }
`;

const AirlineLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  opacity: 0.85;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

/* Each airline rendered as a styled text logo matching brand colors */
const FlyJinnahLogo = styled.span`
  font-size: 1.05rem;
  font-weight: 800;
  color: #e85a1b;
  letter-spacing: -0.02em;

  span {
    color: #e85a1b;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    display: block;
    margin-top: -2px;
  }
`;

const FlyDubaiLogo = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  color: #e4002b;
  letter-spacing: -0.02em;
`;

const PiaLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  .pia-icon {
    width: 28px;
    height: 28px;
    background: #1a6b3c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .pia-text {
    font-size: 0.75rem;
    font-weight: 800;
    color: #1a6b3c;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    line-height: 1.2;
  }
`;

const AirblueLogo = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  color: #003594;
  letter-spacing: -0.03em;
`;

const SwitchflyLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .dot {
    width: 8px;
    height: 8px;
    background: #0055a5;
    border-radius: 50%;
  }

  .sw-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: #0055a5;
    letter-spacing: 0.02em;
  }
`;

const SkyToursLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  .sky-icon {
    width: 22px;
    height: 22px;
    background: #0b3d91;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 800;
  }

  .sky-text {
    font-size: 0.85rem;
    font-weight: 800;
    color: #0b3d91;
    letter-spacing: 0.03em;
  }
`;

export default function PopularAirlines({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};

  return (
    <Section id="airlines">
      <Title>{data.title || 'Popular Airlines'}</Title>
      <LogosRow>
        <AirlineLogo>
          <FlyJinnahLogo>
            FlyJinnah
            <span>Pakistan&apos;s Low Cost Airline</span>
          </FlyJinnahLogo>
        </AirlineLogo>

        <AirlineLogo>
          <FlyDubaiLogo>flydubai</FlyDubaiLogo>
        </AirlineLogo>

        <AirlineLogo>
          <PiaLogo>
            <div className="pia-icon">
              <svg viewBox="0 0 18 18" fill="none">
                <path d="M9 2L14 9L9 16L4 9Z" fill="white" />
              </svg>
            </div>
            <div className="pia-text">
              <div>PAKISTAN</div>
              <div style={{ fontSize: '0.5rem', fontWeight: 400, letterSpacing: '0.06em' }}>INTERNATIONAL AIRLINES</div>
            </div>
          </PiaLogo>
        </AirlineLogo>

        <AirlineLogo>
          <AirblueLogo>airblue</AirblueLogo>
        </AirlineLogo>

        <AirlineLogo>
          <SwitchflyLogo>
            <div className="dot" />
            <div className="sw-text">switchfly</div>
          </SwitchflyLogo>
        </AirlineLogo>

        <AirlineLogo>
          <SkyToursLogo>
            <div className="sky-icon">S</div>
            <div className="sky-text">sky·tours</div>
          </SkyToursLogo>
        </AirlineLogo>
      </LogosRow>
    </Section>
  );
}
