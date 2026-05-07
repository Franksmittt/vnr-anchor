import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional Accountants in Centurion and Pretoria',
  description:
    'Local accounting, tax advisory, payroll, and compliance services for businesses and families in Centurion, Pretoria, and greater Gauteng.',
  path: '/locations/centurion-accountants',
  keywords: [
    'accountants centurion',
    'accountants pretoria',
    'tax practitioner centurion',
    'bookkeeping centurion',
    'payroll services pretoria',
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Locations', url: '/locations/centurion-accountants' },
  { name: 'Centurion & Pretoria Accountants', url: '/locations/centurion-accountants' },
]);

export default function CenturionLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="font-serif text-4xl font-bold text-text-primary">
          Professional Accountants in Centurion and Pretoria
        </h1>
        <p className="mt-6 text-lg text-text-secondary">
          VNR supports businesses and families in Centurion, Eldoraigne, Pretoria, and the wider
          Gauteng region with practical tax, accounting, and compliance support.
        </p>
        <div className="mt-8 rounded-xl border border-slate-200 p-6 bg-surface-light">
          <h2 className="font-semibold text-text-primary">Office details</h2>
          <p className="mt-2 text-text-secondary">
            1022 Saxby Avenue, Eldoraigne, Centurion, 0157
          </p>
          <p className="text-text-secondary">Mon-Fri: 08:00-16:30</p>
          <p className="mt-2">
            <a className="text-brand-blue hover:underline" href="tel:+27126531633">
              +27 12 653 1633
            </a>{' '}
            |{' '}
            <a className="text-brand-blue hover:underline" href="mailto:info@vnr.co.za">
              info@vnr.co.za
            </a>
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href="/services/tax-advisory" className="rounded-xl border border-slate-200 p-5 hover:border-brand-blue">
            <h3 className="font-semibold text-text-primary">Tax Advisory</h3>
            <p className="mt-2 text-sm text-text-secondary">Strategic tax planning, SARS compliance, and dispute support.</p>
          </Link>
          <Link href="/services/cloud-accounting" className="rounded-xl border border-slate-200 p-5 hover:border-brand-blue">
            <h3 className="font-semibold text-text-primary">Bookkeeping and Cloud Accounting</h3>
            <p className="mt-2 text-sm text-text-secondary">Reliable records, management visibility, and software implementation.</p>
          </Link>
          <Link href="/services/payroll-administration" className="rounded-xl border border-slate-200 p-5 hover:border-brand-blue">
            <h3 className="font-semibold text-text-primary">Payroll Administration</h3>
            <p className="mt-2 text-sm text-text-secondary">EMP201/EMP501 cycle management and payroll governance.</p>
          </Link>
          <Link href="/contact" className="rounded-xl border border-slate-200 p-5 hover:border-brand-blue">
            <h3 className="font-semibold text-text-primary">Book a strategy call</h3>
            <p className="mt-2 text-sm text-text-secondary">Speak with a VNR specialist about your immediate priorities.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
