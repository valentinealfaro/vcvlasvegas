import { kitchenImages, bathroomImages, customHomeImages } from './images';
import type { LuxeImage } from './images';

export type JournalTopic = 'design' | 'architecture' | 'studio';

export type JournalPost = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: LuxeImage;
  read: string;
  publishedAt: string;
  topic: JournalTopic;
  author?: string;
};

export const defaultAuthor = 'VCV Vegas Studio';

export const topicMeta: Record<
  JournalTopic,
  { label: string; eyebrow: string; description: string }
> = {
  design: {
    label: 'Design',
    eyebrow: 'Design Notes',
    description:
      'Notes on the architectural details, room compositions, and finish decisions that quietly define a luxury Las Vegas remodel.',
  },
  architecture: {
    label: 'Architecture',
    eyebrow: 'Architectural Notes',
    description:
      'Notes on floor plans, structure, and the architectural moves that re-shape how a Las Vegas home actually lives.',
  },
  studio: {
    label: 'Studio',
    eyebrow: 'Studio Notes',
    description:
      'Notes on how the studio runs — selecting a contractor, pre-construction, and the operational disciplines behind every project.',
  },
};

export const journalPosts: JournalPost[] = [
  {
    slug: 'indoor-outdoor-living-las-vegas-climate',
    eyebrow: 'Studio Notes · 06',
    title: 'Indoor-outdoor living in a Las Vegas climate.',
    summary:
      'A patio in Las Vegas works for ten months a year — if it is engineered correctly. Six principles for designing an outdoor room that reads as architecture, not as a backyard.',
    image: customHomeImages[3],
    read: '6 min read',
    publishedAt: '2026-05-25',
    topic: 'design',
  },
  {
    slug: 'what-pre-construction-actually-looks-like',
    eyebrow: 'Studio Notes · 05',
    title: 'What pre-construction actually looks like.',
    summary:
      'Most homeowners think construction begins when the first wall comes down. It doesn’t. Eight weeks of pre-construction — drawings, engineering, permits, and long-lead orders — decide whether the build runs on schedule or unravels in the field.',
    image: customHomeImages[1],
    read: '8 min read',
    publishedAt: '2026-05-24',
    topic: 'studio',
  },
  {
    slug: 'how-to-choose-luxury-contractor-las-vegas',
    eyebrow: 'Studio Notes · 04',
    title: 'How to choose a luxury contractor in Las Vegas.',
    summary:
      'A short, candid guide to evaluating high-end residential contractors in the valley — what to look for, what to ignore, and the five questions that separate a serious studio from a bidding contractor.',
    image: customHomeImages[0],
    read: '7 min read',
    publishedAt: '2026-05-20',
    topic: 'studio',
  },
  {
    slug: 'opening-up-vegas-floor-plan',
    eyebrow: 'Studio Notes · 03',
    title: 'Opening up a typical Vegas floor plan.',
    summary:
      'Almost every home in the valley was built on a closed-plan layout that no longer reads. Here is how we re-engineer the great room without losing the architecture.',
    image: customHomeImages[0],
    read: '7 min read',
    publishedAt: '2026-05-08',
    topic: 'architecture',
  },
  {
    slug: 'designing-spa-bathroom-desert',
    eyebrow: 'Studio Notes · 02',
    title: 'Designing a spa bathroom for desert living.',
    summary:
      'Why the best Las Vegas primary baths are built around restraint — not maximalism — and how we engineer wet rooms that read like architecture.',
    image: bathroomImages[0],
    read: '5 min read',
    publishedAt: '2026-04-22',
    topic: 'design',
  },
  {
    slug: 'five-details-luxury-remodel-las-vegas',
    eyebrow: 'Studio Notes · 01',
    title: 'The five details that quietly separate a luxury remodel.',
    summary:
      'Walk through any high-end Las Vegas home and the difference between a builder-grade renovation and a designed one comes down to roughly five things. Here they are.',
    image: kitchenImages[0],
    read: '6 min read',
    publishedAt: '2026-04-10',
    topic: 'design',
  },
];

// Lookup helpers — keep call sites focused on UI, not array gymnastics
export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function getPostsByTopic(topic: JournalTopic): JournalPost[] {
  return journalPosts.filter((p) => p.topic === topic);
}

export function getLatestPosts(n = 3, excludeSlug?: string): JournalPost[] {
  const ordered = [...journalPosts]
    .filter((p) => p.slug !== excludeSlug)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  return ordered.slice(0, n);
}
