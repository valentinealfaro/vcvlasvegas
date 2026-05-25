import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { FloatingCTA } from '@/components/FloatingCTA';
import { AffiliationStrip } from '@/components/AffiliationStrip';
import { JsonLd, organizationSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'VCV Vegas · Luxury Remodeling & General Contractor · Las Vegas',
    template: '%s · VCV Vegas',
  },
  description: siteConfig.description,
  keywords: [
    'Luxury Bathroom Remodeling Las Vegas',
    'Kitchen Remodeling Las Vegas',
    'General Contractor Las Vegas',
    'Luxury Remodel Contractor Las Vegas',
    'Home Remodeling Las Vegas',
    'Modern Bathroom Remodel Las Vegas',
    'Custom Kitchen Remodeling Las Vegas',
    'Henderson Remodeling',
    'Summerlin Remodeling',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'VCV Vegas · Luxury Remodeling in Las Vegas',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCV Vegas · Luxury Remodeling',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <JsonLd data={organizationSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <AffiliationStrip />
        <Footer />
        <FloatingCTA />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
