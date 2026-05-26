import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { kitchenImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';

export function CTASection({
  eyebrow = 'Begin Your Project',
  title = 'Start your Las Vegas remodel.',
  description = 'Schedule a private design consultation with a senior VCV Vegas designer. We respond within one business day.',
  image = kitchenImages[2],
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: typeof kitchenImages[number];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-bone py-32 lg:py-48">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/40 to-bone/15" />
        {/* Coral sunset tint */}
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            background:
              'linear-gradient(to top, rgba(249,115,22,0.18) 0%, transparent 50%, rgba(252,187,0,0.10) 100%)',
          }}
        />
      </div>

      {/* Sunset glow */}
      <div aria-hidden className="glow-sunset" />

      {/* Top + bottom gradient hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.45) 35%, rgba(59,130,246,0.45) 65%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.45) 35%, rgba(252,187,0,0.45) 65%, transparent 100%)',
        }}
      />

      <div className="container-luxe">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
              <p className="eyebrow !text-ink">{eyebrow}</p>
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl text-ink text-balance [text-shadow:0_2px_28px_rgba(250,247,242,0.7)] md:text-6xl lg:text-7xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-base text-ink/70 md:text-lg">
              {description}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="/contact" pulse>
                Schedule Consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </MagneticButton>
              <a href={siteConfig.phoneHref} className="btn-ghost">
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
