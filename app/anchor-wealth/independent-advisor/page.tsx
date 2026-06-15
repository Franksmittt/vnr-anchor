import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Independent Advisor Desk',
  description:
    'VNR clients gain access to an independent financial advisor for life cover, disability, succession planning, and short-term insurance reviews across South Africa.',
  path: '/anchor-wealth/independent-advisor',
  keywords: [
    'independent financial advisor',
    'life cover',
    'disability cover',
    'succession planning',
    'keyman insurance',
    'short-term insurance',
    'South Africa',
  ],
});

const advisorServices = [
  'Life cover, disability, and dread disease solutions sized for complex corporate structures',
  'Succession planning via Buy & Sell agreements, Keyman policies, and share buy-back funding',
  'Short-term insurance reviews for both personal and commercial risk, including site visits',
  'Flexible consultations at our head office or at your premises anywhere in South Africa - we serve clients nationwide',
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

      <section className="border-b border-slate-200 bg-surface-light py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="text-slate-500" />
          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
              Independent Advisor Desk
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Life & risk planning on your terms.
            </h1>
            <p className="mt-4 text-base text-text-secondary sm:mt-6 sm:text-lg">
              Our independent financial advisor (not affiliated with Anchor) works exclusively with VNR clients.
              He can meet at our head office or travel to you anywhere in South Africa, ensuring personal cover aligns with
              business realities. We serve clients nationwide - distance is no barrier to expert service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">How we support you</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-700 sm:mt-6 sm:space-y-4 sm:text-base">
              {advisorServices.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-text-secondary sm:text-base">
              More detail on services, process, and booking options will be added here soon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
              >
                Request a consultation
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/anchor-wealth"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
              >
                Back to Anchor Wealth
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndependentAdvisorPage;
