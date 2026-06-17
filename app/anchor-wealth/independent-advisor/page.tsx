import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, ClipboardCheck, ShieldCheck, TrendingUp } from 'lucide-react';
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
    icon: ShieldCheck,
  },
  {
    label: 'Business Succession',
    heading: 'Corporate Continuity Planning',
    body: "Protect the commercial entity you've built. We architect and fund robust buy-and-sell agreements, key person cover, and share buy-back funding to guarantee operational continuity and immediate liquidity during unforeseen events.",
    icon: TrendingUp,
  },
  {
    label: 'Short-Term Audits',
    heading: 'Short-Term Insurance Reviews',
    body: 'Stop paying for structural inefficiencies. We provide an objective audit of your current commercial and personal short-term policies, identifying critical gaps in your coverage while aggressively eliminating bloated premiums.',
    icon: ClipboardCheck,
  },
] as const;

const advantagePoints = [
  'Tax-aligned policy structuring',
  'Balance sheet integrated cover',
  'Compliance-aware succession plans',
  'Nationwide on-site consultations',
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Anchor Wealth Division', url: '/anchor-wealth' },
  { name: 'Independent Advisor Desk', url: '/anchor-wealth/independent-advisor' },
]);

const IndependentAdvisorPage = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Anchor Wealth Division', href: '/anchor-wealth' },
    { name: 'Independent Advisor Desk', href: '/anchor-wealth/independent-advisor' },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-8 text-white sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} tone="dark" />
          <div className="mt-6 max-w-4xl sm:mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal-light sm:text-sm sm:tracking-[0.3em]">
              Independent Advisor Desk
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Uncompromised Risk Management &amp; Structuring.
            </h1>
            <p className="mt-4 text-base text-slate-200 sm:mt-6 sm:text-lg">
              Objective, holistic financial advisory services. We don&apos;t just facilitate policies; we engineer safety
              nets that align perfectly with your balance sheet.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">Core Pillars</p>
            <h2 className="mt-4 font-serif text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
              Integrated risk architecture for VNR clients
            </h2>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.heading} className="rounded-xl border border-slate-200 p-5 shadow-sm sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-blue">{pillar.label}</p>
                  <h3 className="mt-2 text-lg font-semibold text-text-primary sm:text-xl">{pillar.heading}</h3>
                  <p className="mt-2 text-xs text-text-secondary sm:text-sm">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-surface-light py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
                The Independent Advantage
              </p>
              <h2 className="mt-4 font-serif text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
                The VNR Accounting Advantage
              </h2>
              <p className="mt-4 text-sm text-text-secondary sm:mt-6 sm:text-base">
                Operating as a standalone broker often leads to misaligned financial strategies. By integrating our
                independent advisory desk directly with your tax, compliance, and accounting profiles at VNR, we
                eliminate the disconnect between your wealth creation and your wealth protection.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
              <h3 className="text-lg font-semibold text-text-primary sm:text-xl">How we work differently</h3>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary sm:mt-6 sm:space-y-4 sm:text-base">
                {advantagePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-light py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Audit Your Risk Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Request an advisor review to align your personal and commercial cover with your full financial picture.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark sm:px-6 sm:py-3 sm:text-base"
            >
              Request an Advisor Review
              <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/anchor-wealth"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue sm:px-6 sm:py-3 sm:text-base"
            >
              Back to Anchor Wealth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndependentAdvisorPage;
