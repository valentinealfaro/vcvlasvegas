import { kitchenImages, bathroomImages, customHomeImages } from './images';
import type { LuxeImage } from './images';

export type JournalPost = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: LuxeImage;
  read: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: 'five-details-luxury-remodel-las-vegas',
    eyebrow: 'Studio Notes · 01',
    title: 'The five details that quietly separate a luxury remodel.',
    summary:
      'Walk through any high-end Las Vegas home and the difference between a builder-grade renovation and a designed one comes down to roughly five things. Here they are.',
    image: kitchenImages[0],
    read: '6 min read',
  },
  {
    slug: 'designing-spa-bathroom-desert',
    eyebrow: 'Studio Notes · 02',
    title: 'Designing a spa bathroom for desert living.',
    summary:
      'Why the best Las Vegas primary baths are built around restraint — not maximalism — and how we engineer wet rooms that read like architecture.',
    image: bathroomImages[0],
    read: '5 min read',
  },
  {
    slug: 'opening-up-vegas-floor-plan',
    eyebrow: 'Studio Notes · 03',
    title: 'Opening up a typical Vegas floor plan.',
    summary:
      'Almost every home in the valley was built on a closed-plan layout that no longer reads. Here is how we re-engineer the great room without losing the architecture.',
    image: customHomeImages[0],
    read: '7 min read',
  },
];
