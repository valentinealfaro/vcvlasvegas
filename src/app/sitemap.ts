import type { MetadataRoute } from 'next';
import { siteConfig, servicesIndex, cityPages } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const staticRoutes = [
    '',
    '/start',
    '/services',
    '/projects',
    '/projects/the-summerlin-residence',
    '/projects/macdonald-highlands-residence',
    '/projects/the-paradise-penthouse',
    '/for-architects-and-designers',
    '/concierge',
    '/engagement',
    '/lookbook',
    '/process',
    '/standards',
    '/materials',
    '/material-selection',
    '/journal',
    '/journal/topic/design',
    '/journal/topic/architecture',
    '/journal/topic/studio',
    '/journal/five-details-luxury-remodel-las-vegas',
    '/journal/designing-spa-bathroom-desert',
    '/journal/opening-up-vegas-floor-plan',
    '/journal/how-to-choose-luxury-contractor-las-vegas',
    '/journal/what-pre-construction-actually-looks-like',
    '/journal/indoor-outdoor-living-las-vegas-climate',
    '/about',
    '/letter',
    '/principles',
    '/why-vcv-vegas',
    '/now',
    '/visit',
    '/neighborhoods',
    '/faq',
    '/investment',
    '/luxury-remodel-cost-las-vegas',
    '/sample-budgets',
    '/before-you-start',
    '/style',
    '/resources',
    '/intake',
    '/contact',
    '/press',
    '/site-index',
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
