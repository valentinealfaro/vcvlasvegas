import { ArrowRight, Phone } from 'lucide-react';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { siteConfig } from '@/lib/site';

export function InlineLeadStrip({
  title = 'Designing something special?',
  italic = 'Start with a private consultation.',
  description = 'A senior designer responds within one business day. By appointment only.',
}: {
  title?: string;
  italic?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bone-800/60">
      {/* Gradient hairline top — duotone */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(252,187,0,0.45) 35%, rgba(59,130,246,0.45) 65%, transparent 100%)',
        }}
      />

      {/* Soft duotone wash */}
      <div aria-hidden className="glow-duotone" />

      <div className="container-luxe relative py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(252,187,0,0.7)]" />
                <p className="eyebrow !text-ink">By Appointment</p>
              </div>
              <h3 className="font-display text-3xl text-ink text-balance md:text-4xl">
                {title}{' '}
                <span className="italic text-ink">{italic}</span>
              </h3>
              <p className="mt-3 max-w-xl text-ink/60">{description}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <MagneticButton href="/contact">
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

      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(59,130,246,0.45) 35%, rgba(252,187,0,0.45) 65%, transparent 100%)',
        }}
      />
    </section>
  );
}
