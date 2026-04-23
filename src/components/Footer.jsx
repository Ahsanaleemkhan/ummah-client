'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  background: var(--app-surface-color, #e6e8e3);
  padding: 2.6rem 2rem 2rem;
`;

const FooterInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1.3fr 1fr;
  gap: 2.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BrandCol = styled.div``;

const LogoImg = styled(Image)`
  height: 44px;
  width: auto;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const BrandDesc = styled.p`
  font-size: 0.72rem;
  color: var(--app-text-color, #4f4f4f);
  line-height: 1.6;
  max-width: 240px;
`;

const LinkCol = styled.div``;

const ColTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: var(--app-heading-color, #1a1a1a);
  margin-bottom: 0.85rem;
  letter-spacing: -0.01em;
`;

const ColLink = styled.a`
  display: block;
  font-size: 0.8rem;
  color: var(--app-text-color, #444);
  text-decoration: none;
  padding: 0.18rem 0;
  line-height: 1.5;
  transition: color 0.15s;
  cursor: pointer;

  &:hover {
    color: var(--app-primary-color, #1B6B3A);
  }
`;

const defaultFooterContent = {
  brandMain: 'ummah',
  brandSub: 'travel',
  brandDesc: 'Trusted travel partner for flights, hotels, tours, Umrah, and Hajj with transparent pricing and dedicated support.',
  quickLinksTitle: 'Quick links',
  quickLinks: [
    { label: 'Tour Packages', href: '/tours' },
    { label: 'Hotels', href: '/hotels' },
    { label: 'Flights', href: '/flights' },
    { label: 'Who We Are', href: '/about' },
  ],
  packagesTitle: 'Packages',
  packagesLinks: [
    { label: 'Umrah Packages 2026', href: '/umrah-packages' },
    { label: 'Hajj Packages 2026', href: '/hajj-packages' },
    { label: 'International Tours', href: '/tours' },
    { label: 'Custom Packages', href: '/contact' },
    { label: 'Visa Assistance', href: '/contact' },
  ],
  supportTitle: 'Support',
  supportLinks: [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/contact' },
    { label: 'Travel Blog', href: '/blog' },
    { label: 'Partner With Us', href: '/contact' },
  ],
};

function normalizeLinks(value, fallback) {
  if (!Array.isArray(value) || value.length === 0) {
    return fallback;
  }

  return value
    .map((item) => ({
      label: item?.label || '',
      href: item?.href || '#',
    }))
    .filter((item) => item.label);
}

export default function Footer({ content = null }) {
  const data = content && typeof content === 'object' ? content : {};

  const quickLinks = normalizeLinks(data.quickLinks, defaultFooterContent.quickLinks);
  const packagesLinks = normalizeLinks(data.packagesLinks, defaultFooterContent.packagesLinks);
  const supportLinks = normalizeLinks(data.supportLinks, defaultFooterContent.supportLinks);

  return (
    <FooterWrap>
      <FooterInner>
        <FooterGrid>
          <BrandCol>
            <LogoImg
              src="/logo.png"
              alt="Ummah Travel"
              width={160}
              height={44}
            />
            <BrandDesc>
              {data.brandDesc || defaultFooterContent.brandDesc}
            </BrandDesc>
          </BrandCol>

          <LinkCol>
            <ColTitle>{data.quickLinksTitle || defaultFooterContent.quickLinksTitle}</ColTitle>
            {quickLinks.map((item) => (
              <ColLink as={Link} href={item.href} key={`${item.label}-${item.href}`}>
                {item.label}
              </ColLink>
            ))}
          </LinkCol>

          <LinkCol>
            <ColTitle>{data.packagesTitle || defaultFooterContent.packagesTitle}</ColTitle>
            {packagesLinks.map((item) => (
              <ColLink as={Link} href={item.href} key={`${item.label}-${item.href}`}>
                {item.label}
              </ColLink>
            ))}
          </LinkCol>

          <LinkCol>
            <ColTitle>{data.supportTitle || defaultFooterContent.supportTitle}</ColTitle>
            {supportLinks.map((item) => (
              <ColLink as={Link} href={item.href} key={`${item.label}-${item.href}`}>
                {item.label}
              </ColLink>
            ))}
          </LinkCol>
        </FooterGrid>
      </FooterInner>
    </FooterWrap>
  );
}
