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
    <section className="relative isolate overflow-hidden bg-ink py-32 lg:py-48">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/45" />
      </div>

      {/* Franchise duotone glow */}
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
              <p className="eyebrow !text-bone">{eyebrow}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl text-bone text-balance md:text-6xl lg:text-7xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-base text-bone/70 md:text-lg">
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
