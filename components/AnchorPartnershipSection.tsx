import Link from 'next/link';
import { Anchor, ShieldCheck, Globe2, FileSpreadsheet, PhoneCall } from 'lucide-react';

const anchorLandingUrl = 'https://landing.anchorcapital.co.za/vnr-wealth-division';

const AnchorPartnershipSection = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
      <div className="container mx-auto px-6 space-y-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-blue">
              Anchor Capital x VNR Wealth Division
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-text-primary sm:text-4xl">
              Invest through our Anchor partnership with tax-efficient confidence.
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Every investment enquiry for wealth management now routes through our dedicated
              Anchor landing page so clients receive institutional-grade portfolios, tax-efficient
              structuring, and a single point of accountability. Whether you need offshore exposure,
              retirement annuities, or tax-free investments, the entry point is the same:{" "}
              <span className="font-semibold text-text-primary">
                {anchorLandingUrl.replace('https://', '')}
              </span>{" "}
              or our direct line.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={anchorLandingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark"
              >
                Start via Anchor
                <Anchor className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
              >
                Book a VNR Call
                <PhoneCall className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Prefer the phone? Call us on{" "}
              <a href="tel:+27126531633" className="font-semibold text-brand-blue hover:underline">
                +27 12 653 1633
              </a>{" "}
              and we will log the enquiry for you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <ShieldCheck className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">Tax-Efficient Structuring</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Every portfolio is architected with tools like Retirement Annuities, Tax-Free Savings
                Accounts, and endowments to preserve returns while staying SARS-compliant.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <Globe2 className="h-10 w-10 text-brand-blue" />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">Global + Local Reach</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Access Anchor Capital’s R260bn platform for offshore equities, fixed income, and
                discretionary mandates while retaining VNR’s on-the-ground advisory team.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <FileSpreadsheet className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">Research-Led Allocations</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Leverage resources like The Navigator, Coffee Table Economics, and Anchor’s market
                webinars to make informed, timely allocation decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <Anchor className="h-10 w-10 text-brand-blue" />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">Single Point of Contact</h3>
              <p className="mt-3 text-sm text-text-secondary">
                VNR manages onboarding, compliance, and ongoing reviews so your Anchor portfolio,
                tax strategy, and fiduciary planning stay perfectly aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnchorPartnershipSection;

