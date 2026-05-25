import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="grid min-h-[70svh] place-items-center bg-ink px-6 pt-32">
      <div className="max-w-xl text-center">
        <p className="eyebrow mb-6">Page Not Found</p>
        <h1 className="font-display text-6xl text-bone md:text-7xl">
          404
        </h1>
        <p className="mt-6 text-lg text-bone/65">
          The page you’re looking for doesn’t exist — or has been re-routed.
          Let’s get you back to a luxury remodel.
        </p>
        <Link href="/" className="btn-gold mt-10">
          Return Home
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
