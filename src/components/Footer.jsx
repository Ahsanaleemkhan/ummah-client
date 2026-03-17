'use client';

import styled from 'styled-components';

/* ── Outer gray background ── */
const FooterOuter = styled.footer`
  background: #f0f1ec;
  padding: 0 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem 1rem;
  }
`;

/* ── White card container ── */
const FooterCard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem 3.5rem;

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
`;

/* ── 4-column grid ── */
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.3fr 1fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

/* ── Brand column ── */
const BrandCol = styled.div``;

const LogoBrand = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const LogoSub = styled.div`
  font-size: 0.55rem;
  font-weight: 400;
  color: #1B6B3A;
  font-style: italic;
  letter-spacing: 0.12em;
  margin-top: -1px;
  margin-bottom: 1rem;
`;

const BrandDesc = styled.p`
  font-size: 0.78rem;
  color: #555;
  line-height: 1.65;
  max-width: 240px;
`;

/* ── Link columns ── */
const LinkCol = styled.div``;

const ColTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.85rem;
  letter-spacing: -0.01em;
`;

const ColLink = styled.a`
  display: block;
  font-size: 0.82rem;
  color: #444;
  text-decoration: none;
  padding: 0.22rem 0;
  line-height: 1.5;
  transition: color 0.15s;
  cursor: pointer;

  &:hover {
    color: #1B6B3A;
  }
`;

export default function Footer() {
  return (
    <FooterOuter>
      <FooterCard>
        <FooterGrid>
          {/* Column 1: Brand */}
          <BrandCol>
            <LogoBrand>ummah</LogoBrand>
            <LogoSub>travel</LogoSub>
            <BrandDesc>
              Lorem ipsum dolor sit amet, con-sectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ac-cumsan lacus vel facilisis.
            </BrandDesc>
          </BrandCol>

          {/* Column 2: Quick links */}
          <LinkCol>
            <ColTitle>Quick links</ColTitle>
            <ColLink href="#">Packages</ColLink>
            <ColLink href="#">Transport</ColLink>
            <ColLink href="#">Umrah Visa</ColLink>
            <ColLink href="#">Who We Are</ColLink>
          </LinkCol>

          {/* Column 3: Packages */}
          <LinkCol>
            <ColTitle>Packages</ColTitle>
            <ColLink href="#">Umrah packages Pakistan 2026</ColLink>
            <ColLink href="#">Umrah packages Canada 2026</ColLink>
            <ColLink href="#">Umrah packages UK 2026</ColLink>
            <ColLink href="#">Umrah packages USA 2026</ColLink>
            <ColLink href="#">Umrah packages UAE 2026</ColLink>
          </LinkCol>

          {/* Column 4: Support */}
          <LinkCol>
            <ColTitle>Support</ColTitle>
            <ColLink href="#">Contact</ColLink>
            <ColLink href="#">FAQ&apos;s</ColLink>
            <ColLink href="#">Affiliate Page</ColLink>
            <ColLink href="#">Blog</ColLink>
          </LinkCol>
        </FooterGrid>
      </FooterCard>
    </FooterOuter>
  );
}
