'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #ececec;
  padding: 3.2rem 2rem;
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  background: #dbe7e0;
  border-radius: 12px;
  padding: 2rem 2.1rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 460px;
    padding: 1.6rem 1.2rem;
  }
`;

const FeatureCard = styled.div`
  padding: 0.4rem 1rem;
  text-align: center;
`;

const IconCircle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #f2f7f4;
  border: 1px solid #b7cbc0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #0f4f2d;
  margin-bottom: 0.45rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.76rem;
  color: #4f5d55;
  line-height: 1.45;
  margin: 0 auto 0.7rem;
  max-width: 220px;
`;

const LearnMoreBtn = styled.a`
  display: inline-block;
  padding: 0.27rem 0.72rem;
  border: none;
  background: #11683a;
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0d542f;
  }
`;

/* SVG Icons */
function BundleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="10" width="10" height="10" rx="2" fill="#1B6B3A" opacity="0.3" />
      <rect x="6" y="8" width="10" height="10" rx="2" fill="#1B6B3A" opacity="0.5" />
      <rect x="8" y="6" width="10" height="10" rx="2" fill="#1B6B3A" />
      <path d="M20 16L24 12L28 16" stroke="#1B6B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 12V26" stroke="#1B6B3A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function OneStopIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#1B6B3A" strokeWidth="2" fill="#e8f5e9" />
      <path d="M16 8v8l5 3" stroke="#1B6B3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="#1B6B3A" />
    </svg>
  );
}

function KeyRewardsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="14" r="6" stroke="#1B6B3A" strokeWidth="2" fill="#e8f5e9" />
      <path d="M17 17l9 9" stroke="#1B6B3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 22l2 -2" stroke="#1B6B3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="14" r="2.5" fill="#1B6B3A" />
    </svg>
  );
}

const features = [
  {
    Icon: BundleIcon,
    title: 'Bundle & Save',
    desc: 'Combine flights and hotels in one booking and save more.',
  },
  {
    Icon: OneStopIcon,
    title: 'One-Stop Travel Shop',
    desc: 'Flights, hotels, visas and tours in a single smooth flow.',
  },
  {
    Icon: KeyRewardsIcon,
    title: 'Key Rewards',
    desc: 'Earn points on every booking and unlock exclusive offers.',
  },
];

export default function FeaturesStrip() {
  return (
    <Section>
      <Inner>
        {features.map((feature) => {
          const { Icon } = feature;
          return (
            <FeatureCard key={feature.title}>
              <IconCircle>
                <Icon />
              </IconCircle>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDesc>{feature.desc}</FeatureDesc>
              <LearnMoreBtn href="#">Learn More</LearnMoreBtn>
            </FeatureCard>
          );
        })}
      </Inner>
    </Section>
  );
}
