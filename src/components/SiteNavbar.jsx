'use client';

import Navbar from './Navbar';
import { defaultNavLinks } from '../lib/navLinks';

export default function SiteNavbar() {
  return (
    <Navbar
      navLinks={defaultNavLinks}
      backgroundColor="#1a3826"
      dark
      sticky={true}
    />
  );
}
