'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

/* ── Full-width white background wrapper ── */
const NavOuter = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  background: #ffffff;
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 1px 6px rgba(0,0,0,0.06)' : 'none'};
  transition: box-shadow 0.25s ease;
`;

/* ── Inner content — narrower, centered ── */
const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.5rem;
  position: relative;

  /* Bottom line — aligned with logo and button */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 3.5rem;
    right: 3.5rem;
    height: 3px;
    background: #1B6B3A;
    border-radius: 3px 3px 0 0;
  }

  @media (max-width: 1080px) {
    padding: 0 1.5rem;

    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }
  }
`;

/* ── Logo ── */
const Logo = styled.a`
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
`;

const LogoBrand = styled.span`
  font-size: 1.85rem;
  font-weight: 800;
  color: #1B6B3A;
  letter-spacing: -0.02em;
  line-height: 1;
`;

const LogoSub = styled.span`
  font-size: 0.55rem;
  font-weight: 400;
  color: #1B6B3A;
  letter-spacing: 0.12em;
  font-style: italic;
  margin-top: -1px;
`;

/* ── Nav Links (Center) ── */
const NavCenter = styled.ul`
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    display: block;
    padding: 0.5rem 0.65rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #333333;
    white-space: nowrap;
    transition: color 0.15s;
    text-decoration: none;

    &:hover {
      color: #1B6B3A;
    }
  }
`;

/* ── Right Side ── */
const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const LoginBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1.1rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #ffffff;
  background: #1B6B3A;
  border: 2px solid #1B6B3A;
  border-radius: 999px;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: #145230;
    border-color: #145230;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ── Mobile Menu ── */
const MobileBtn = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1080px) {
    display: flex;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 999;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  overflow-y: auto;

  a {
    display: block;
    padding: 0.85rem 1rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: #333;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.15s;

    &:hover {
      background: #f5f5f5;
      color: #1B6B3A;
    }
  }
`;

/* ── Data ── */
const navItems = [
  { label: 'Flights', href: '#flights' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Tour Packages', href: '#tours' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog / Travel Tips', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <NavOuter $scrolled={scrolled}>
        <NavInner>
          <Logo href="/">
            <LogoBrand>ummah</LogoBrand>
            <LogoSub>travel</LogoSub>
          </Logo>

          <NavCenter>
            {navItems.map(item => (
              <NavItem key={item.label}>
                <a href={item.href}>{item.label}</a>
              </NavItem>
            ))}
          </NavCenter>

          <NavRight>
            <LoginBtn href="#login">LOGIN / REGISTER</LoginBtn>
            <MobileBtn onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              {mobileOpen ? '✕' : '☰'}
            </MobileBtn>
          </NavRight>
        </NavInner>
      </NavOuter>

      {mobileOpen && (
        <MobileOverlay>
          {navItems.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <div style={{ padding: '1rem 1rem 0' }}>
            <LoginBtn href="#login" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              LOGIN / REGISTER
            </LoginBtn>
          </div>
        </MobileOverlay>
      )}
    </>
  );
}
