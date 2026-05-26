export const siteConfig = {
  name: 'VCV Vegas',
  legalName: 'VCV Vegas',
  tagline: 'Luxury Remodeling & General Contracting · Las Vegas',
  description:
    'Luxury bathroom, kitchen, and full-home remodeling for the Las Vegas metro. Modern, architectural, design-driven renovations from VCV Vegas.',
  url: 'https://vcvvegas.com',
  phone: '(702) 552-0430',
  phoneHref: 'tel:+17025520430',
  email: 'info@vcvservices.com',
  emailHref: 'mailto:info@vcvservices.com',
  serviceArea: [
    'Las Vegas',
    'Henderson',
    'Summerlin',
    'Paradise',
    'Enterprise',
    'Spring Valley',
    'North Las Vegas',
    'Green Valley',
    'Centennial Hills',
    'Mountains Edge',
    'Silverado Ranch',
  ],
  hours: 'Mon – Sat · By Appointment',
  // Reserved for future social handles. Empty by default so nothing renders.
  socials: {} as { instagram?: string; linkedin?: string; pinterest?: string },
} as const;

export type SiteConfig = typeof siteConfig;

export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Kitchens', href: '/kitchen-remodeling-las-vegas' },
  { label: 'Bathrooms', href: '/bathroom-remodeling-las-vegas' },
  { label: 'Projects', href: '/projects' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
};

export const servicesIndex: Service[] = [
  {
    slug: 'bathroom-remodeling-las-vegas',
    title: 'Luxury Bathroom Remodeling',
    eyebrow: 'Spa Bathrooms',
    summary:
      'Spa-inspired primary baths, walk-in showers, soaking tubs, and floating vanities tailored to modern Las Vegas living.',
  },
  {
    slug: 'kitchen-remodeling-las-vegas',
    title: 'Luxury Kitchen Remodeling',
    eyebrow: 'Chef’s Kitchens',
    summary:
      'Waterfall islands, integrated appliances, and custom cabinetry built for the way you actually entertain in Las Vegas.',
  },
  {
    slug: 'home-remodeling-las-vegas',
    title: 'Full Home Remodeling',
    eyebrow: 'Whole-Home',
    summary:
      'A single design-build team for whole-home renovations, layout reconfigurations, and complete property re-imaginings.',
  },
  {
    slug: 'general-contractor-las-vegas',
    title: 'General Contracting',
    eyebrow: 'Build Management',
    summary:
      'Licensed, insured general contracting with white-glove project management for high-value Las Vegas properties.',
  },
  {
    slug: 'luxury-renovations-las-vegas',
    title: 'Luxury Renovations',
    eyebrow: 'Custom Finish',
    summary:
      'High-end finish carpentry, stone, glass, and metal — the bespoke layer that turns a remodel into an experience.',
  },
  {
    slug: 'modern-bathroom-design-las-vegas',
    title: 'Modern Bathroom Design',
    eyebrow: 'Architectural Baths',
    summary:
      'Wet rooms, oversized walk-ins, frameless glass, and matte stone — modern bathroom architecture for desert homes.',
  },
  {
    slug: 'outdoor-living-las-vegas',
    title: 'Outdoor Living & Poolside',
    eyebrow: 'Indoor / Outdoor',
    summary:
      'Sheltered patios, outdoor kitchens, and poolside remodels designed for year-round Las Vegas climate.',
  },
  {
    slug: 'investor-remodels-las-vegas',
    title: 'Investor & Airbnb Remodels',
    eyebrow: 'Investor Focused',
    summary:
      'Design-led renovations engineered to lift ADR, occupancy, and resale value across the Las Vegas valley.',
  },
];

export type CityPage = {
  slug: string;
  city: string;
  region: string;
};

export const cityPages: CityPage[] = [
  { slug: 'henderson-remodeling', city: 'Henderson', region: 'Henderson, NV' },
  { slug: 'summerlin-remodeling', city: 'Summerlin', region: 'Summerlin · Las Vegas' },
  { slug: 'the-ridges-remodeling', city: 'The Ridges', region: 'Summerlin · Las Vegas' },
  { slug: 'paradise-remodeling', city: 'Paradise', region: 'Paradise · Las Vegas' },
  { slug: 'centennial-hills-remodeling', city: 'Centennial Hills', region: 'NW Las Vegas' },
];

// Lookup helpers — avoid repeating .find() across the codebase
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesIndex.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}
