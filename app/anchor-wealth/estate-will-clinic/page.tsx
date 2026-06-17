import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Estate & Will Clinic',
  description:
    'Professional estate planning and complimentary will drafting when VNR is appointed executor. Secure generational wealth without the friction.',
  path: '/anchor-wealth/estate-will-clinic',
  keywords: [
    'estate planning',
    'will drafting',
    'executor services',
    'estate administration',
    'succession planning',
    'trusts',
    'business continuity',
    'South Africa',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Anchor Wealth', url: '/anchor-wealth' },
  { name: 'Estate & Will Clinic', url: '/anchor-wealth/estate-will-clinic' },
]);

const EstateWillClinicPage = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Anchor Wealth', href: '/anchor-wealth' },
    { name: 'Estate & Will Clinic', href: '/anchor-wealth/estate-will-clinic' },
  ];

  return (
    <div className="bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <section className="border-b border-neutral-800 bg-neutral-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} tone="dark" />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-cyan-500 sm:text-sm">
                Estate &amp; Will Clinic
              </p>
              <h1 className="mt-6 text-4xl font-bold uppercase tracking-tighter sm:text-5xl lg:text-6xl">
                Securing Your Legacy, Without the Friction.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Professional estate planning and complimentary will drafting, seamlessly integrated with your tax and
                corporate structures.
              </p>
            </div>
            <figure className="relative aspect-[4/3] overflow-hidden border border-neutral-700 bg-neutral-800">
              <div
                className="flex h-full w-full items-center justify-center px-8 text-center text-sm text-neutral-500"
                role="img"
                aria-label="Authentic unpolished shot of a professional reviewing estate planning documents with a client at a desk, natural light, documentary style"
              >
                Image placeholder — documentary estate planning session
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* The Clinic Offering */}
      <section className="border-b border-neutral-200 py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-tighter text-cyan-600">The Clinic Offering</h2>
              <p className="mt-4 text-2xl font-bold uppercase tracking-tighter text-neutral-900 sm:text-3xl">
                The VNR Estate &amp; Will Clinic
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                We remove the administrative barriers to proper estate planning. Through our Anchor Wealth division, we
                provide complimentary, professionally drafted wills when VNR is appointed as your executor. We ensure
                your final wishes are legally sound, clearly articulated, and structurally aligned with your existing
                financial blueprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executor Services */}
      <section className="border-b border-neutral-800 bg-neutral-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <figure className="relative order-2 aspect-[16/10] overflow-hidden border border-neutral-700 bg-neutral-800 lg:order-1">
              <div
                className="flex h-full w-full items-center justify-center px-8 text-center text-sm text-neutral-500"
                role="img"
                aria-label="Gritty documentary photograph of fiduciary paperwork and executor files being organised on a workspace, muted tones, no stock gloss"
              >
                Image placeholder — fiduciary execution workspace
              </div>
            </figure>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold uppercase tracking-tighter text-cyan-500">Executor Services</h2>
              <p className="mt-4 text-2xl font-bold uppercase tracking-tighter sm:text-3xl">
                Professional Fiduciary Execution
              </p>
              <p className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
                Winding up an estate is a demanding, highly technical process. Appointing VNR as your professional
                executor guarantees an impartial, efficient approach. We handle the complex compliance, tax implications,
                and administrative burdens, protecting your beneficiaries from unnecessary stress and costly delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusts & Business Continuity */}
      <section className="border-b border-neutral-200 py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-tighter text-cyan-600">Trusts &amp; Continuity</h2>
              <p className="mt-4 text-2xl font-bold uppercase tracking-tighter text-neutral-900 sm:text-3xl">
                Beyond the Will: Intergenerational Structuring
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                True wealth protection requires looking beyond a basic will. We specialize in comprehensive estate
                planning that incorporates trusts and business continuity strategies. We ensure that your commercial
                interests, property portfolios, and family assets survive transitional periods intact and tax-efficiently.
              </p>
              <div className="mt-12 grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
                {[
                  'Trust structuring aligned to your will',
                  'Shareholder and business continuity review',
                  'Tax-efficient intergenerational transfer',
                ].map((item) => (
                  <div key={item} className="bg-white px-6 py-8">
                    <span className="text-xs font-bold uppercase tracking-tighter text-cyan-600">Included</span>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tighter sm:text-4xl">Secure Your Succession</h2>
            <p className="mt-6 text-base text-neutral-400 sm:text-lg">
              Book a clinic session with VNR to review your will, executor appointment, and estate structure.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center bg-cyan-600 px-8 py-4 text-sm font-bold uppercase tracking-tighter text-white transition hover:bg-cyan-500"
            >
              Book a Clinic Session
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateWillClinicPage;
