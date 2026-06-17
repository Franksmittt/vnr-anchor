import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Independent Advisor Desk',
  description:
    'Uncompromised risk management and structuring for business owners. Life cover, succession planning, and short-term insurance reviews integrated with your VNR accounting profile.',
  path: '/anchor-wealth/independent-advisor',
  keywords: [
    'independent financial advisor',
    'life cover',
    'disability cover',
    'succession planning',
    'buy and sell agreement',
    'key person cover',
    'short-term insurance',
    'risk management',
    'South Africa',
  ],
});

const corePillars = [
  {
    label: 'Individual Protection',
    heading: 'Life & Disability Cover',
    body: 'Comprehensive life cover, disability protection, and dread disease structuring. We ensure your personal risk portfolio provides maximum capital efficiency and tax-optimized payouts for you and your dependents.',
  },
  {
    label: 'Business Succession',
    heading: 'Corporate Continuity Planning',
    body: "Protect the commercial entity you've built. We architect and fund robust buy-and-sell agreements, key person cover, and share buy-back funding to guarantee operational continuity and immediate liquidity during unforeseen events.",
  },
  {
    label: 'Short-Term Audits',
    heading: 'Short-Term Insurance Reviews',
    body: 'Stop paying for structural inefficiencies. We provide an objective audit of your current commercial and personal short-term policies, identifying critical gaps in your coverage while aggressively eliminating bloated premiums.',
  },
] as const;

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Anchor Wealth', url: '/anchor-wealth' },
  { name: 'Independent Advisor Desk', url: '/anchor-wealth/independent-advisor' },
]);

const IndependentAdvisorPage = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Anchor Wealth', href: '/anchor-wealth' },
    { name: 'Independent Advisor Desk', href: '/anchor-wealth/independent-advisor' },
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
                Independent Advisor Desk
              </p>
              <h1 className="mt-6 text-4xl font-bold uppercase tracking-tighter sm:text-5xl lg:text-6xl">
                Uncompromised Risk Management &amp; Structuring.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Objective, holistic financial advisory services. We don&apos;t just facilitate policies; we engineer
                safety nets that align perfectly with your balance sheet.
              </p>
            </div>
            <figure className="relative aspect-[4/3] overflow-hidden border border-neutral-700 bg-neutral-800">
              <div
                className="flex h-full w-full items-center justify-center px-8 text-center text-sm text-neutral-500"
                role="img"
                aria-label="Authentic unpolished shot of a financial advisor reviewing risk portfolios with a business owner, raw documentary lighting, no glossy stock aesthetic"
              >
                Image placeholder — risk portfolio review session
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="border-b border-neutral-200 py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-tighter text-cyan-600">Core Pillars</h2>
            <p className="mt-4 text-2xl font-bold uppercase tracking-tighter text-neutral-900 sm:text-3xl">
              Integrated Risk Architecture
            </p>
          </div>
          <div className="grid gap-px border border-neutral-200 bg-neutral-200 lg:grid-cols-3">
            {corePillars.map((pillar) => (
              <article key={pillar.heading} className="flex flex-col bg-white px-8 py-12">
                <span className="text-xs font-bold uppercase tracking-tighter text-cyan-600">{pillar.label}</span>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-tighter text-neutral-900 sm:text-xl">
                  {pillar.heading}
                </h3>
                <p className="mt-6 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Independent Advantage */}
      <section className="border-b border-neutral-800 bg-neutral-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-tighter text-cyan-500">The Independent Advantage</h2>
              <p className="mt-4 text-2xl font-bold uppercase tracking-tighter sm:text-3xl">
                The VNR Accounting Advantage
              </p>
              <p className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
                Operating as a standalone broker often leads to misaligned financial strategies. By integrating our
                independent advisory desk directly with your tax, compliance, and accounting profiles at VNR, we
                eliminate the disconnect between your wealth creation and your wealth protection.
              </p>
            </div>
            <figure className="relative aspect-[16/10] overflow-hidden border border-neutral-700 bg-neutral-800">
              <div
                className="flex h-full w-full items-center justify-center px-8 text-center text-sm text-neutral-500"
                role="img"
                aria-label="Gritty documentary photograph of integrated financial statements and insurance policy documents laid out for review, authentic workspace, unpolished realism"
              >
                Image placeholder — integrated advisory workspace
              </div>
            </figure>
          </div>
          <div className="mt-16 grid gap-px border border-neutral-700 bg-neutral-700 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Tax-aligned policy structuring',
              'Balance sheet integrated cover',
              'Compliance-aware succession plans',
              'Nationwide on-site consultations',
            ].map((point) => (
              <div key={point} className="bg-neutral-900 px-6 py-8">
                <span className="block h-px w-8 bg-cyan-500" aria-hidden="true" />
                <p className="mt-4 text-sm font-medium uppercase tracking-tighter text-neutral-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="border border-neutral-200 bg-white px-8 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-neutral-900 sm:text-4xl">
              Audit Your Risk Portfolio
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
              Request an advisor review to align your personal and commercial cover with your full financial picture.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center bg-cyan-600 px-8 py-4 text-sm font-bold uppercase tracking-tighter text-white transition hover:bg-cyan-500"
            >
              Request an Advisor Review
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndependentAdvisorPage;
