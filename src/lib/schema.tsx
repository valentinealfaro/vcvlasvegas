import { siteConfig, servicesIndex } from './site';

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: { '@id': `${siteConfig.url}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/site-index?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: 'VCV Vegas',
    slogan: 'Luxury remodeling designed for Las Vegas living.',
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/icon`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1716,
      longitude: -115.1391,
    },
    areaServed: siteConfig.serviceArea.map((c) => ({
      '@type': 'City',
      name: c,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1716,
        longitude: -115.1391,
      },
      geoRadius: 35000,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$$$',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    keywords:
      'luxury remodeling Las Vegas, kitchen remodeling, bathroom remodeling, whole-home renovation, general contractor, design-build, Summerlin, Henderson, The Ridges',
    knowsAbout: [
      'Luxury Bathroom Remodeling',
      'Luxury Kitchen Remodeling',
      'Whole Home Renovation',
      'General Contracting',
      'Custom Renovation',
      'Outdoor Living',
      'High-Rise Renovation',
      'Investor Property Renovation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VCV Vegas Services',
      itemListElement: servicesIndex.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.summary,
          url: `${siteConfig.url}/${s.slug}`,
        },
      })),
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  priceRange?: { low: number; high: number };
}) {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    provider: {
      '@type': 'GeneralContractor',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceArea.map((c) => ({
      '@type': 'City',
      name: c,
    })),
  };

  if (opts.priceRange) {
    base.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: opts.priceRange.low,
      highPrice: opts.priceRange.high,
      availability: 'https://schema.org/InStock',
      offeredBy: { '@id': `${siteConfig.url}#organization` },
    };
  }

  return base;
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
