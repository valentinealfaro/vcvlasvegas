import type { MetadataRoute } from 'next';
import { siteConfig, servicesIndex, cityPages } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const staticRoutes = [
    '',
    '/services',
    '/projects',
    '/process',
    '/about',
    '/contact',
  ];
  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: r === '' ? 1.0 : 0.8,
    })),
    ...servicesIndex.map((s) => ({
      url: `${base}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...cityPages.map((c) => ({
      url: `${base}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
