import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { siteConfig } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms of Use · VCV Vegas',
  description:
    'Terms governing use of the VCV Vegas website, written plainly.',
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Terms', url: `${siteConfig.url}/terms` },
        ])}
      />
      <LegalLayout
        eyebrow="Terms of Use"
        title="The agreement"
        italic="between you and the site."
        lastUpdated="May 2026"
        sections={[
          {
            heading: 'About these terms',
            body: (
              <p>
                These terms govern your use of {siteConfig.url}. By visiting
                the site or submitting a form, you agree to use the site as
                described below. If you do not agree, please do not use the
                site. These terms do not govern any contractual relationship
                with VCV Vegas as a construction studio — that is handled
                through separate, signed engagement documents.
              </p>
            ),
          },
          {
            heading: 'Use of the site',
            body: (
              <p>
                Content on this site — including project photography, written
                editorial, and design language — is the property of VCV
                Vegas and is offered for personal, non-commercial reference.
                You may share links and quote with attribution. Republishing
                long-form editorial, project imagery, or proprietary content
                requires written permission.
              </p>
            ),
          },
          {
            heading: 'Information is illustrative',
            body: (
              <p>
                Investment ranges, build windows, sample budgets, and
                specifications shown on the site are illustrative. Real
                project pricing and timeline are calibrated to the specific
                home, scope, and finish selections during the private
                consultation. The site does not constitute an offer or a
                quote.
              </p>
            ),
          },
          {
            heading: 'Submissions',
            body: (
              <p>
                When you complete a form on this site, you confirm that the
                information you have provided is accurate to the best of
                your knowledge and that you have the right to share it. We
                handle submissions according to our{' '}
                <a
                  href="/privacy"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            ),
          },
          {
            heading: 'Third-party links',
            body: (
              <p>
                The site occasionally links to third-party sites for
                reference. We are not responsible for the content or
                practices of those sites and linking does not constitute an
                endorsement.
              </p>
            ),
          },
          {
            heading: 'Limitation of liability',
            body: (
              <p>
                The site is provided as-is. VCV Vegas is not liable for any
                indirect, incidental, or consequential damages arising from
                use of the site or reliance on its content. Nothing on this
                site is a substitute for professional design, engineering,
                or legal advice.
              </p>
            ),
          },
          {
            heading: 'Governing law',
            body: (
              <p>
                These terms are governed by the laws of the State of
                Nevada. Any dispute arising from use of the site will be
                resolved in the courts of Clark County, Nevada.
              </p>
            ),
          },
          {
            heading: 'Contact',
            body: (
              <p>
                Questions about these terms can be sent to{' '}
                <a
                  href={siteConfig.emailHref}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
