import type { MetadataRoute } from 'next';
import { siteConfig, servicesIndex, cityPages } from '@/lib/site';
import { journalPosts } from '@/lib/journal';

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  // Routes grouped by importance + how often they change.
  // Priority scale: 1.0 (home) → 0.3 (legal). Crawlers use this as a hint.
  const groups: { paths: string[]; priority: number; changeFrequency: Entry['changeFrequency'] }[] = [
    {
      paths: ['', '/services', '/contact', '/intake', '/start'],
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      paths: [
        '/projects',
        '/projects/the-summerlin-residence',
        '/projects/macdonald-highlands-residence',
        '/projects/the-paradise-penthouse',
        '/lookbook',
        '/for-architects-and-designers',
        '/concierge',
        '/engagement',
        '/investment',
        '/luxury-remodel-cost-las-vegas',
      ],
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      paths: [
        '/about',
        '/letter',
        '/principles',
        '/why-vcv-vegas',
        '/now',
        '/visit',
        '/process',
        '/standards',
        '/spec-sheet',
        '/glossary',
        '/materials',
        '/material-selection',
        '/sample-budgets',
        '/before-you-start',
        '/style',
        '/resources',
        '/neighborhoods',
        '/faq',
        '/press',
        '/site-index',
      ],
      priority: 0.6,
      changeFrequency: 'monthly',
    },
    {
      paths: ['/journal', '/journal/topic/design', '/journal/topic/architecture', '/journal/topic/studio'],
      priority: 0.7,
      changeFrequency: 'weekly',
    },
    {
      paths: ['/privacy', '/terms', '/accessibility'],
      priority: 0.3,
      changeFrequency: 'yearly',
    },
  ];

  const flatStatic: Entry[] = groups.flatMap((g) =>
    g.paths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: g.changeFrequency,
      priority: g.priority,
    })),
  );

  const services: Entry[] = servicesIndex.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const cities: Entry[] = cityPages.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const journal: Entry[] = journalPosts.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...flatStatic, ...services, ...cities, ...journal];
}
