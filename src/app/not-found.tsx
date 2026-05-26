import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Mail } from 'lucide-react';
import { kitchenImages } from '@/lib/images';

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-bone">
      <Image
        src={kitchenImages[1].src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bone/85 via-bone/70 to-bone" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-gold blur-[160px] opacity-30 md:h-[600px] md:w-[600px]"
      />

      <div className="container-luxe relative flex min-h-[100svh] flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">Lost in the Build</p>
          <h1 className="font-display text-[5rem] leading-[0.95] text-ink text-balance md:text-[10rem] lg:text-[14rem]">
            4<span className="italic text-ink">0</span>4
          </h1>
          <p className="mt-8 max-w-xl font-display text-2xl text-ink/85 md:text-3xl">
            This page has been re-imagined,
            <span className="italic text-ink"> or never built.</span>
          </p>
          <p className="mt-4 max-w-xl text-base text-ink/55 md:text-lg">
            Either way — let’s get you back to the studio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="btn-gold">
              <Home className="h-3.5 w-3.5" />
              Return Home
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              <Mail className="h-3.5 w-3.5" />
              Talk to a Designer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
