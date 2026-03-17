'use client';

import styled from 'styled-components';

const Section = styled.section`
  background: #eef4f0;
  padding: 3.5rem 2rem;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.75rem 1.75rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #e8f5e9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #1B6B3A;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.82rem;
  color: #777;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

const LearnMoreBtn = styled.a`
  display: inline-block;
  padding: 0.4rem 1.1rem;
  border: 2px solid #1B6B3A;
  color: #1B6B3A;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1B6B3A;
    color: #fff;
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
    desc: 'Combine flights, hotels and tours in one package and save up to 30% on your total booking value.',
  },
  {
    Icon: OneStopIcon,
    title: 'One-Stop Travel Shop',
    desc: 'From visa applications to airport transfers — manage every part of your journey in one place.',
  },
  {
    Icon: KeyRewardsIcon,
    title: 'Key Rewards',
    desc: 'Earn points on every booking and redeem them for free upgrades, discounts and exclusive offers.',
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
