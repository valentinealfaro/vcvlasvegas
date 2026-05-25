import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, servicesIndex } from '@/lib/site';
import { NewsletterSignup } from './NewsletterSignup';
import { Monogram } from './Monogram';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/5 bg-ink">
      {/* Newsletter band */}
      <div className="border-b border-bone/8 bg-ink-800/40">
        <div className="container-luxe py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">From the Studio</p>
              <h2 className="font-display text-3xl text-bone text-balance md:text-4xl">
                A quarterly letter on luxury remodeling{' '}
                <span className="italic text-gold-light">in Las Vegas.</span>
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
            <Link href="/" className="flex items-center gap-4">
              <Monogram size={48} className="text-gold" />
              <span className="flex items-baseline gap-2">
                <span className="font-display text-3xl tracking-tight text-bone">
                  VCV
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.4em] text-gold">
                  Vegas
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
                className="group flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="group flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
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
                    className="link-quiet transition-colors hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/for-architects-and-designers"
                  className="link-quiet transition-colors hover:text-gold"
                >
                  For Architects &amp; Designers
                </Link>
              </li>
              <li>
                <Link
                  href="/concierge"
                  className="link-quiet transition-colors hover:text-gold"
                >
                  Studio Concierge
                </Link>
              </li>
              <li>
                <Link
                  href="/engagement"
                  className="link-quiet transition-colors hover:text-gold"
                >
                  Engagement Tiers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Service Area</p>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><Link href="/summerlin-remodeling" className="link-quiet hover:text-gold">Summerlin</Link></li>
              <li><Link href="/the-ridges-remodeling" className="link-quiet hover:text-gold">The Ridges</Link></li>
              <li><Link href="/henderson-remodeling" className="link-quiet hover:text-gold">Henderson</Link></li>
              <li><Link href="/paradise-remodeling" className="link-quiet hover:text-gold">Paradise</Link></li>
              <li><Link href="/centennial-hills-remodeling" className="link-quiet hover:text-gold">Centennial Hills</Link></li>
              <li><Link href="/neighborhoods" className="text-gold hover:text-gold-light">All Neighborhoods →</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Studio</p>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><Link href="/about" className="link-quiet hover:text-gold">About</Link></li>
              <li><Link href="/why-vcv-vegas" className="link-quiet hover:text-gold">Why VCV Vegas</Link></li>
              <li><Link href="/now" className="link-quiet hover:text-gold">Now</Link></li>
              <li><Link href="/process" className="link-quiet hover:text-gold">Our Process</Link></li>
              <li><Link href="/standards" className="link-quiet hover:text-gold">Standards</Link></li>
              <li><Link href="/materials" className="link-quiet hover:text-gold">Finish Library</Link></li>
              <li><Link href="/material-selection" className="link-quiet hover:text-gold">Material Selection</Link></li>
              <li><Link href="/visit" className="link-quiet hover:text-gold">By Appointment</Link></li>
              <li><Link href="/projects" className="link-quiet hover:text-gold">Projects</Link></li>
              <li><Link href="/lookbook" className="link-quiet hover:text-gold">Lookbook</Link></li>
              <li><Link href="/journal" className="link-quiet hover:text-gold">Journal</Link></li>
              <li><Link href="/investment" className="link-quiet hover:text-gold">Investment Calculator</Link></li>
              <li><Link href="/style" className="link-quiet hover:text-gold">Find Your Style</Link></li>
              <li><Link href="/resources" className="link-quiet hover:text-gold">Resources</Link></li>
              <li><Link href="/faq" className="link-quiet hover:text-gold">FAQ</Link></li>
              <li><Link href="/intake" className="link-quiet hover:text-gold">Project Brief</Link></li>
              <li><Link href="/contact" className="link-quiet hover:text-gold">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-8 text-xs uppercase tracking-[0.22em] text-bone/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p className="text-bone/40">{siteConfig.hours}</p>
        </div>
      </div>
    </footer>
  );
}
