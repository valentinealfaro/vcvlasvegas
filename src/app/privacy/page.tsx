import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy · VCV Vegas',
  description:
    'How VCV Vegas collects, uses, and protects the information shared with the studio. Plainly written, kept short.',
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Privacy', url: `${siteConfig.url}/privacy` },
        ])}
      />
      <LegalLayout
        eyebrow="Privacy"
        title="What we do with"
        italic="the information you share."
        lastUpdated="May 2026"
        sections={[
          {
            heading: 'What we collect',
            body: (
              <>
                <p>
                  When you complete a form on the site — consultation,
                  project brief, calculator follow-up, style quiz, newsletter
                  signup, or press inquiry — we collect the information you
                  submit. Typically that means name, email, phone, project
                  details, and any notes you choose to include.
                </p>
                <p>
                  We also collect basic, aggregated analytics about how the
                  site is used. No personally identifying data is sold,
                  rented, or shared with third parties for marketing.
                </p>
              </>
            ),
          },
          {
            heading: 'How we use it',
            body: (
              <>
                <p>
                  Everything you share goes to a senior designer in the
                  studio. We use it to respond to your inquiry, schedule a
                  consultation, and continue the conversation. If you ask
                  for the Investment Guide, the detailed calculator
                  breakdown, or the quarterly letter, we use your email
                  address to send those — and only those.
                </p>
                <p>
                  We do not buy or sell email lists. We do not pass your
                  information to third-party contractors, suppliers, or
                  advertisers.
                </p>
              </>
            ),
          },
          {
            heading: 'How we protect it',
            body: (
              <p>
                Form submissions are transmitted over HTTPS and stored
                inside the studio’s internal client-relationship systems
                with access limited to senior team members. We retain
                project inquiries for as long as is reasonable to continue
                a conversation. You may request deletion of your records
                at any time by emailing{' '}
                <a
                  href={siteConfig.emailHref}
                  className="text-bone underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            ),
          },
          {
            heading: 'Cookies and analytics',
            body: (
              <p>
                The site uses a small number of first-party cookies for
                session and preference handling, and aggregated analytics
                to understand how the site is used in the broad. We do not
                use third-party advertising or remarketing cookies.
              </p>
            ),
          },
          {
            heading: 'Your rights',
            body: (
              <p>
                You may request access to, correction of, or deletion of
                any personal information you have shared with VCV Vegas at
                any time. Send a note to{' '}
                <a
                  href={siteConfig.emailHref}
                  className="text-bone underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>{' '}
                and we will respond within one business day.
              </p>
            ),
          },
          {
            heading: 'Changes to this policy',
            body: (
              <p>
                If we update this policy materially, we will update the
                'Last updated' date at the top of the page. Substantive
                changes will also be summarized at the top of the page for
                the following 30 days.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
