import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Reveal } from './Reveal';
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
    <section className="border-y border-bone/10 bg-ink-800/60">
      <div className="container-luxe py-14 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div>
              <h3 className="font-display text-3xl text-bone text-balance md:text-4xl">
                {title}{' '}
                <span className="italic text-bone">{italic}</span>
              </h3>
              <p className="mt-3 max-w-xl text-bone/60">{description}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <Link href="/contact" className="btn-gold">
                Schedule Consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
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
