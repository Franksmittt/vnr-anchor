import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, FileSignature, Scale, Users } from 'lucide-react';
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

const continuityPoints = [
  'Trust structuring aligned to your will',
  'Shareholder and business continuity review',
  'Tax-efficient intergenerational transfer',
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Anchor Wealth Division', url: '/anchor-wealth' },
  { name: 'Estate & Will Clinic', url: '/anchor-wealth/estate-will-clinic' },
]);

const EstateWillClinicPage = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Anchor Wealth Division', href: '/anchor-wealth' },
    { name: 'Estate & Will Clinic', href: '/anchor-wealth/estate-will-clinic' },
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
              Estate &amp; Will Clinic
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Securing Your Legacy, Without the Friction.
            </h1>
            <p className="mt-4 text-base text-slate-200 sm:mt-6 sm:text-lg">
              Professional estate planning and complimentary will drafting, seamlessly integrated with your tax and
              corporate structures.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
                The Clinic Offering
              </p>
              <h2 className="mt-4 font-serif text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
                The VNR Estate &amp; Will Clinic
              </h2>
            </div>
            <p className="text-base text-text-secondary sm:text-lg">
              We remove the administrative barriers to proper estate planning. Through our Anchor Wealth division, we
              provide complimentary, professionally drafted wills when VNR is appointed as your executor. We ensure your
              final wishes are legally sound, clearly articulated, and structurally aligned with your existing financial
              blueprint.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-surface-light py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Scale className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
                Executor Services
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-text-primary sm:text-3xl">
                Professional Fiduciary Execution
              </h2>
              <p className="mt-4 text-sm text-text-secondary sm:text-base">
                Winding up an estate is a demanding, highly technical process. Appointing VNR as your professional
                executor guarantees an impartial, efficient approach. We handle the complex compliance, tax implications,
                and administrative burdens, protecting your beneficiaries from unnecessary stress and costly delays.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <FileSignature className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary sm:text-xl">What the clinic includes</h3>
              <ul className="mt-4 space-y-3 text-sm text-text-secondary sm:space-y-4 sm:text-base">
                {[
                  'Complimentary will drafting when VNR is appointed executor',
                  'Executor appointments aligned with shareholder agreements',
                  'Estate reviews tied to your tax and corporate structures',
                  'Reminders to keep wills, nominations, and trusts current',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
              Trusts &amp; Continuity
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
              Beyond the Will: Intergenerational Structuring
            </h2>
            <p className="mt-4 text-base text-text-secondary sm:mt-6 sm:text-lg">
              True wealth protection requires looking beyond a basic will. We specialize in comprehensive estate planning
              that incorporates trusts and business continuity strategies. We ensure that your commercial interests,
              property portfolios, and family assets survive transitional periods intact and tax-efficiently.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {continuityPoints.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 p-5 shadow-sm sm:p-6">
                <Users className="h-7 w-7 text-brand-blue sm:h-8 sm:w-8" aria-hidden="true" />
                <p className="mt-3 text-sm text-text-secondary sm:mt-4 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-light py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
            Secure Your Succession
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Book a clinic session with VNR to review your will, executor appointment, and estate structure.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark sm:px-6 sm:py-3 sm:text-base"
            >
              Book a Clinic Session
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

export default EstateWillClinicPage;
