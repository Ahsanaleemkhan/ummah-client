'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { defaultNavLinks } from '../lib/navLinks';

const HeaderShell = styled.header`
  background: ${({ $backgroundColor }) => $backgroundColor};
  position: ${({ $sticky }) => ($sticky ? 'fixed' : 'relative')};
  top: ${({ $sticky }) => ($sticky ? '0' : 'auto')};
  left: ${({ $sticky }) => ($sticky ? '0' : 'auto')};
  right: ${({ $sticky }) => ($sticky ? '0' : 'auto')};
  z-index: ${({ $sticky }) => ($sticky ? '1000' : '5')};
  padding: 0.75rem 1.25rem 0.6rem;
  box-shadow: ${({ $sticky }) => ($sticky ? '0 1px 6px rgba(0,0,0,0.06)' : 'none')};
`;

const HeaderInner = styled.div`
  max-width: 100%;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 960px) {
    gap: 0.8rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
`;

const LogoImg = styled(Image)`
  height: 40px;
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

const DesktopLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.62rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

const DesktopLink = styled(Link)`
  text-decoration: none;
  color: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.92)' : '#202020')};
  font-size: 0.72rem;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    color: ${({ $dark }) => ($dark ? '#ffffff' : '#1b6b3a')};
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
`;

const LoginButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 0.36rem 0.86rem;
  background: ${({ $dark }) => ($dark ? '#ffffff' : '#126c39')};
  color: ${({ $dark }) => ($dark ? '#135b34' : '#ffffff')};
  white-space: nowrap;

  &:hover {
    background: ${({ $dark }) => ($dark ? '#f2f6f3' : '#145230')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileBtn = styled.button`
  display: none;
  border: none;
  background: none;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#202020')};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  min-width: 52px;
  height: 36px;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    display: flex;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.45)' : '#969696')};
  margin-top: 0.6rem;
`;

const MobileMenu = styled.div`
  margin-top: 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: 961px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  text-decoration: none;
  padding: 0.75rem 0.9rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#202020')};
  background: ${({ $dark }) => ($dark ? 'rgba(255,255,255,0.08)' : 'rgba(18,108,57,0.08)')};

  &:hover {
    background: ${({ $dark }) => ($dark ? 'rgba(255,255,255,0.14)' : 'rgba(18,108,57,0.14)')};
  }
`;

export default function Navbar({
  navLinks = defaultNavLinks,
  loginButtonText = 'LOGIN / REGISTER',
  loginButtonHref = '/contact',
  showLoginButton = false,
  backgroundColor = '#ececec',
  dark = false,
  sticky = true,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <HeaderShell $backgroundColor={backgroundColor} $sticky={sticky}>
      <HeaderInner>
        <TopRow>
          <Logo href="/" onClick={() => setMobileOpen(false)}>
            <LogoImg
              src="/logo.png"
              alt="Ummah Travel"
              width={160}
              height={40}
              priority
            />
          </Logo>

          <DesktopLinks>
            {navLinks.map((item) => (
              <li key={item.label}>
                <DesktopLink $dark={dark} href={item.href}>
                  {item.label}
                </DesktopLink>
              </li>
            ))}
          </DesktopLinks>

          <RightSide>
            {showLoginButton ? (
              <LoginButton $dark={dark} href={loginButtonHref}>
                {loginButtonText}
              </LoginButton>
            ) : null}
            <MobileBtn
              $dark={dark}
              onClick={() => setMobileOpen((state) => !state)}
              aria-label="Menu"
            >
              {mobileOpen ? 'CLOSE' : 'MENU'}
            </MobileBtn>
          </RightSide>
        </TopRow>

        <Divider $dark={dark} />

        {mobileOpen ? (
          <MobileMenu>
            {navLinks.map((item) => (
              <MobileLink
                key={item.label}
                $dark={dark}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </MobileLink>
            ))}
            {showLoginButton ? (
              <MobileLink $dark={dark} href={loginButtonHref} onClick={() => setMobileOpen(false)}>
                {loginButtonText}
              </MobileLink>
            ) : null}
          </MobileMenu>
        ) : null}
      </HeaderInner>
    </HeaderShell>
  );
}