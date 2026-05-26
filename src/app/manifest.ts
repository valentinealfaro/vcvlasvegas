import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: `${siteConfig.name} · Luxury Remodeling`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait',
    lang: 'en-US',
    dir: 'ltr',
    categories: ['business', 'lifestyle', 'design'],
    prefer_related_applications: false,
    icons: [
      {
        src: '/icon',
        sizes: '64x64',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Schedule a consultation',
        short_name: 'Consultation',
        description: 'Book a private design consultation with a senior designer',
        url: '/contact',
        icons: [{ src: '/icon', sizes: '64x64', type: 'image/png' }],
      },
      {
        name: 'Investment calculator',
        short_name: 'Calculator',
        description: 'Estimate the investment range for your remodel',
        url: '/investment',
        icons: [{ src: '/icon', sizes: '64x64', type: 'image/png' }],
      },
      {
        name: 'Project studies',
        short_name: 'Projects',
        description: 'Explore VCV Vegas project commissions',
        url: '/projects',
        icons: [{ src: '/icon', sizes: '64x64', type: 'image/png' }],
      },
    ],
  };
}
