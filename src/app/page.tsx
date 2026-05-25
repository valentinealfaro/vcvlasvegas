import { Hero } from '@/components/home/Hero';
import { Manifesto } from '@/components/home/Manifesto';
import { SignatureServices } from '@/components/home/SignatureServices';
import { GallerySection } from '@/components/home/GallerySection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { Testimonials } from '@/components/home/Testimonials';
import { AreasServed } from '@/components/home/AreasServed';
import { InvestmentRange } from '@/components/home/InvestmentRange';
import { CalculatorPromo } from '@/components/home/CalculatorPromo';
import { FeaturedStudies } from '@/components/home/FeaturedStudies';
import { LatestNote } from '@/components/home/LatestNote';
import { TrustBar } from '@/components/TrustBar';
import { BookingStrip } from '@/components/BookingStrip';
import { LeadMagnet } from '@/components/LeadMagnet';
import { CTASection } from '@/components/CTASection';
import { FAQ } from '@/components/FAQ';
import { SectionHeader } from '@/components/SectionHeader';
import { JsonLd, faqSchema } from '@/lib/schema';

const homepageFAQs = [
  {
    q: 'What does a luxury remodel cost in Las Vegas?',
    a: 'Luxury kitchen remodels in the Las Vegas valley typically start in the low six figures; primary suite renovations and whole-home builds scale from there. We provide a transparent investment range during your private design consultation so there are no surprises.',
  },
  {
    q: 'Which Las Vegas neighborhoods do you serve?',
    a: 'VCV Vegas serves the entire Las Vegas metro — Summerlin, Henderson, Paradise, Enterprise, Spring Valley, North Las Vegas, Green Valley, Centennial Hills, Mountains Edge, and Silverado Ranch.',
  },
  {
    q: 'How long does a luxury kitchen or bathroom remodel take?',
    a: 'Most luxury bathroom remodels run 6–10 weeks on site; chef-grade kitchens 8–14 weeks; whole-home renovations 4–9 months depending on scope. Long-lead specifications are ordered before demolition so the build runs to schedule.',
  },
  {
    q: 'Do you handle design, permits, and construction?',
    a: 'Yes. VCV Vegas is a full design-build studio — concept design, construction drawings, permitting, trade coordination, and finished construction are managed by one accountable team.',
  },
  {
    q: 'Can you work with my architect or interior designer?',
    a: 'Absolutely. We frequently collaborate with outside architects and designers and act as the licensed general contractor executing their vision.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFAQs)} />
      <Hero />
      <TrustBar />
      <BookingStrip />
      <Manifesto />
      <SignatureServices />
      <InvestmentRange />
      <CalculatorPromo />
      <FeaturedStudies />
      <GallerySection />
      <ProcessSection />
      <LatestNote />
      <LeadMagnet />
      <Testimonials />
      <AreasServed />

      <section className="bg-ink py-28 lg:py-40">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Questions, answered"
            title="The details that matter most."
            description="Common questions from Las Vegas homeowners considering a luxury remodel."
          />
          <div className="mt-16 max-w-4xl">
            <FAQ items={homepageFAQs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
