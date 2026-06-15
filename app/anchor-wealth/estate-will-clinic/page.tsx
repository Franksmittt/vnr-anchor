import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Estate & Will Clinic',
  description:
    'Keep your will and estate plan current with complimentary drafting when VNR or our trusted executor partner is appointed, plus specialist estate planning support.',
  path: '/anchor-wealth/estate-will-clinic',
  keywords: [
    'estate planning',
    'will drafting',
    'executor services',
    'estate administration',
    'succession planning',
    'South Africa',
  ],
});

const estateHighlights = [
  'Complimentary will drafting when VNR or our specialist partner is appointed executor',
  'Dedicated estate planning partners for winding-up support',
  'Executor appointments aligned with shareholder agreements and trust deeds',
  'Frequent reminders to confirm that wills, beneficiary nominations, and trusts stay current',
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Estate & Will Clinic', url: '/anchor-wealth/estate-will-clinic' },
]);

const EstateWillClinicPage = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Estate & Will Clinic', href: '/anchor-wealth/estate-will-clinic' },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />

      <section className="border-b border-slate-200 bg-surface-light py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
              Estate & Will Clinic
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Your wills stay current, free of charge.
            </h1>
            <p className="mt-4 text-base text-text-secondary sm:mt-6 sm:text-lg">
              We now ask every client if their will is up to date. If it is not, we draft or refresh it at no cost
              when VNR or our trusted executor partner is appointed. Specialist partners manage estate planning
              and administration, without naming them publicly per your request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">What&apos;s included</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-700 sm:mt-6 sm:space-y-4 sm:text-base">
              {estateHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-text-secondary sm:text-base">
              More detail on the clinic process, executor appointments, and estate reviews will be added here soon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
              >
                Book a will & estate review
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateWillClinicPage;
