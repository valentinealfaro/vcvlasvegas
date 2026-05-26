import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, servicesIndex } from '@/lib/site';
import { NewsletterSignup } from './NewsletterSignup';
import { Monogram } from './Monogram';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Gradient lead-in hairline + soft amber wash above the newsletter band */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.55) 25%, rgba(59,130,246,0.55) 75%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,187,0,0.05) 0%, transparent 100%)',
        }}
      />

      {/* Newsletter band */}
      <div className="border-b border-bone/8 bg-ink-800/40">
        <div className="container-luxe py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">From the Studio</p>
              <h2 className="font-display text-3xl text-bone text-balance md:text-4xl">
                A quarterly letter on luxury remodeling{' '}
                <span className="italic text-bone">in Las Vegas.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm text-bone/55">
                Four letters a year — design notes, project studies, and the
                quiet details behind the work. No newsletter cadence,
                no marketing. Unsubscribe anytime.
              </p>
            </div>
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      <div className="container-luxe py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="group flex items-center gap-4">
              <Monogram
                size={48}
                className="text-bone transition-transform duration-700 ease-out group-hover:rotate-[8deg] group-hover:scale-110"
              />
              <span className="flex items-baseline gap-2">
                <span className="font-display text-3xl tracking-tight text-bone">
                  VCV
                </span>
                <span className="relative font-sans text-xs uppercase tracking-[0.4em] text-bone">
                  Vegas
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                  />
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/60">
              Luxury remodeling and general contracting for the Las Vegas
              metro. Modern kitchens, spa bathrooms, and full-home renovations
              engineered for the way Vegas lives now.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-bone/70">
              <a
                href={siteConfig.phoneHref}
                className="group flex items-center gap-3 transition-colors hover:text-bone"
              >
                <Phone className="h-4 w-4 text-bone" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="group flex items-center gap-3 transition-colors hover:text-bone"
              >
                <Mail className="h-4 w-4 text-bone" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-bone" />
                Serving the Las Vegas Metro
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">Services</p>
            <ul className="space-y-3 text-sm text-bone/70">
              {servicesIndex.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="link-quiet transition-colors hover:text-bone"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/for-architects-and-designers"
                  className="link-quiet transition-colors hover:text-bone"
                >
                  For Architects &amp; Designers
                </Link>
              </li>
              <li>
                <Link
                  href="/concierge"
                  className="link-quiet transition-colors hover:text-bone"
                >
                  Studio Concierge
                </Link>
              </li>
              <li>
                <Link
                  href="/engagement"
                  className="link-quiet transition-colors hover:text-bone"
                >
                  Engagement Tiers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Service Area</p>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><Link href="/summerlin-remodeling" className="link-quiet hover:text-bone">Summerlin</Link></li>
              <li><Link href="/the-ridges-remodeling" className="link-quiet hover:text-bone">The Ridges</Link></li>
              <li><Link href="/henderson-remodeling" className="link-quiet hover:text-bone">Henderson</Link></li>
              <li><Link href="/paradise-remodeling" className="link-quiet hover:text-bone">Paradise</Link></li>
              <li><Link href="/centennial-hills-remodeling" className="link-quiet hover:text-bone">Centennial Hills</Link></li>
              <li><Link href="/neighborhoods" className="text-bone hover:text-bone">All Neighborhoods →</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Studio</p>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><Link href="/about" className="link-quiet hover:text-bone">About</Link></li>
              <li><Link href="/letter" className="link-quiet hover:text-bone">A Letter from the Studio</Link></li>
              <li><Link href="/principles" className="link-quiet hover:text-bone">Principles</Link></li>
              <li><Link href="/why-vcv-vegas" className="link-quiet hover:text-bone">Why VCV Vegas</Link></li>
              <li><Link href="/now" className="link-quiet hover:text-bone">Now</Link></li>
              <li><Link href="/process" className="link-quiet hover:text-bone">Our Process</Link></li>
              <li><Link href="/standards" className="link-quiet hover:text-bone">Standards</Link></li>
              <li><Link href="/spec-sheet" className="link-quiet hover:text-bone">Specification Sheet</Link></li>
              <li><Link href="/glossary" className="link-quiet hover:text-bone">Glossary</Link></li>
              <li><Link href="/materials" className="link-quiet hover:text-bone">Finish Library</Link></li>
              <li><Link href="/material-selection" className="link-quiet hover:text-bone">Material Selection</Link></li>
              <li><Link href="/visit" className="link-quiet hover:text-bone">By Appointment</Link></li>
              <li><Link href="/projects" className="link-quiet hover:text-bone">Projects</Link></li>
              <li><Link href="/lookbook" className="link-quiet hover:text-bone">Lookbook</Link></li>
              <li><Link href="/journal" className="link-quiet hover:text-bone">Journal</Link></li>
              <li><Link href="/investment" className="link-quiet hover:text-bone">Investment Calculator</Link></li>
              <li><Link href="/sample-budgets" className="link-quiet hover:text-bone">Sample Budgets</Link></li>
              <li><Link href="/before-you-start" className="link-quiet hover:text-bone">Before You Start</Link></li>
              <li><Link href="/style" className="link-quiet hover:text-bone">Find Your Style</Link></li>
              <li><Link href="/resources" className="link-quiet hover:text-bone">Resources</Link></li>
              <li><Link href="/faq" className="link-quiet hover:text-bone">FAQ</Link></li>
              <li><Link href="/intake" className="link-quiet hover:text-bone">Project Brief</Link></li>
              <li><Link href="/contact" className="link-quiet hover:text-bone">Contact</Link></li>
              <li><Link href="/press" className="link-quiet hover:text-bone">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs uppercase tracking-[0.22em] text-bone/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="link-quiet text-bone/45 hover:text-bone">
              Privacy
            </Link>
            <Link href="/terms" className="link-quiet text-bone/45 hover:text-bone">
              Terms
            </Link>
            <Link href="/accessibility" className="link-quiet text-bone/45 hover:text-bone">
              Accessibility
            </Link>
            <Link href="/site-index" className="link-quiet text-bone/45 hover:text-bone">
              Site Index
            </Link>
            <p className="text-bone/40">{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
