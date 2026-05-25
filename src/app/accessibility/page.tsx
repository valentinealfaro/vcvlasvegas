import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Accessibility · VCV Vegas',
  description:
    'How VCV Vegas approaches website accessibility — what we have built in, what we are working on, and how to report a barrier.',
  alternates: { canonical: `${siteConfig.url}/accessibility` },
};

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Accessibility', url: `${siteConfig.url}/accessibility` },
        ])}
      />
      <LegalLayout
        eyebrow="Accessibility"
        title="Building the site"
        italic="for everyone."
        lastUpdated="May 2026"
        sections={[
          {
            heading: 'Our commitment',
            body: (
              <p>
                VCV Vegas is committed to making this site usable by the
                widest possible audience, including users of assistive
                technologies. We work to meet or approach WCAG 2.1 AA
                conformance and update accessibility regularly as the site
                evolves.
              </p>
            ),
          },
          {
            heading: 'What is built in',
            body: (
              <>
                <p>
                  Specific accessibility considerations already in place
                  across the site:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-bone/65">
                  <li>Semantic landmarks (header, main, footer, nav) on every page.</li>
                  <li>Skip-to-content link visible to keyboard navigation.</li>
                  <li>
                    Keyboard-only navigation supported throughout, with a
                    visible gold focus ring on any focused element
                    (<code>:focus-visible</code>).
                  </li>
                  <li>
                    <code>aria-label</code> attributes on icon-only buttons and
                    image-only links.
                  </li>
                  <li>
                    Reduced-motion preferences honored: image rotations,
                    title kinetic reveals, magnetic buttons, and the custom
                    cursor all disable when{' '}
                    <code>prefers-reduced-motion</code> is set.
                  </li>
                  <li>Print-friendly styles on the spec sheet for readability.</li>
                  <li>Color contrast ratios reviewed against WCAG AA.</li>
                </ul>
              </>
            ),
          },
          {
            heading: 'What we are working on',
            body: (
              <p>
                The site is a living document; we are continually improving
                screen-reader semantics, alt text precision, and form-field
                affordances. If you encounter a barrier, the fastest way to
                get it fixed is to tell us.
              </p>
            ),
          },
          {
            heading: 'Report a barrier',
            body: (
              <p>
                If you experience an accessibility barrier on this site, or
                would like content provided in a different format, please
                email{' '}
                <a
                  href={siteConfig.emailHref}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>{' '}
                or call{' '}
                <a
                  href={siteConfig.phoneHref}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {siteConfig.phone}
                </a>
                . We respond to accessibility requests within one business day.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
