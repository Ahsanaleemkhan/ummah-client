import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from '../context/ThemeContext';
import CmsDesignTokensProvider from '../components/CmsDesignTokensProvider';
import SiteNavbar from '../components/SiteNavbar';

export const metadata = {
  title: 'Ummah Travel — Premium Umrah, Flights, Hotels & Tour Packages',
  description: 'Your trusted partner for Umrah packages, flights, hotels, and guided tours. Discover premium spiritual journeys tailored for the Muslim traveler.',
  keywords: 'umrah, hajj, travel, flights, hotels, tour packages, islamic travel, muslim travel, holy lands',
  openGraph: {
    title: 'Ummah Travel — Your Journey to the Holy Lands',
    description: 'Discover premium Umrah packages, flights, hotels, and guided tours tailored to make your spiritual journey seamless.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <CmsDesignTokensProvider>
              <SiteNavbar />
              {children}
            </CmsDesignTokensProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
