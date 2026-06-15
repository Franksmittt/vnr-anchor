import Link from "next/link";
import { Metadata } from "next";
import { Anchor, CheckCircle2, Globe2, TrendingUp, ArrowUpRight, PhoneCall, BookOpen, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: "Anchor Wealth Division",
  description:
    "Discover how VNR Professional Accountants partners with Anchor Capital to deliver tax-efficient investment structuring, independent financial advice, and estate planning support for South African entrepreneurs and expats.",
  path: '/anchor-wealth',
  keywords: [
    'Anchor Capital',
    'wealth management',
    'investment structuring',
    'estate planning',
    'financial advice',
    'expats',
    'entrepreneurs',
    'South Africa',
  ],
});

const anchorLandingUrl = "https://landing.anchorcapital.co.za/vnr-wealth-division";

const anchorPillars = [
  {
    title: "Nimble + Institutional",
    description:
      "Anchor Capital manages ±R260bn in assets with Credo, delivering global diversification while staying agile for South African conditions.",
    icon: <Globe2 className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Research-Led",
    description:
      "Clients tap into The Navigator, Coffee Table Economics, and quarterly webinars for institutional-grade intelligence without the jargon.",
    icon: <BookOpen className="h-8 w-8 text-brand-blue" />,
  },
  {
    title: "Entrepreneur Focus",
    description:
      "Built by business people for business people, the partnership prioritises succession, liquidity, and hard-currency protection.",
    icon: <TrendingUp className="h-8 w-8 text-brand-blue" />,
  },
];

const taxTools = [
  "Retirement Annuities with optimal contribution strategies",
  "Tax-Free Savings Accounts seeded alongside discretionary portfolios",
  "Section 12 investment opportunities where appropriate",
  "Offshore endowments and wrappers for hard-currency growth",
  "Dedicated SARS compliance oversight from VNR",
];

const anchorBreadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Anchor Wealth Division', url: '/anchor-wealth' },
]);

const AnchorWealthPage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Anchor Wealth Division", href: "/anchor-wealth" },
  ];

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(anchorBreadcrumbSchema).replace(/</g, '\\u003c') }} />
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-8 sm:py-10 lg:py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} tone="dark" />
          <div className="mt-6 sm:mt-8 max-w-4xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-brand-teal-light">
              Anchor Capital x VNR Professional Accountants
            </p>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl">
              Direct your wealth through Anchor. Keep your tax strategy with VNR.
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-200">
              All investment enquiries now route through the{" "}
              <span className="font-semibold">Anchor Wealth Division landing page</span> or our direct line
              so you gain institutional investment capabilities without losing the bespoke tax guidance
              you expect from VNR. Every portfolio conversation starts with tax-efficient structuring,
              including Retirement Annuities, Tax-Free Investments, and offshore architecture built for
              South African entrepreneurs and expats.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base font-semibold text-brand-teal-light">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Head Office
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4" aria-hidden="true" />
                Serving clients across South Africa
              </span>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href={anchorLandingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-brand-blue-dark shadow-lg transition hover:bg-slate-100"
              >
                Start via Anchor Landing Page
                <Anchor className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <a
                href="tel:0126531633"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:border-white"
              >
                Call VNR on 012 653 1633
                <PhoneCall className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary lg:text-4xl">
              Why VNR chose Anchor Capital for wealth management.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary">
              Anchor’s entrepreneurial culture, global presence (Johannesburg, Cape Town, Durban, Pretoria,
              Stellenbosch, London, Mauritius), and merger with Credo provide the scale our clients need. You
              benefit from research-driven allocations without sacrificing the agility of an owner-managed
              advisory team.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 md:grid-cols-3">
            {anchorPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="scale-90 sm:scale-100">{pillar.icon}</div>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-text-primary">{pillar.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-text-secondary">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 bg-surface-light border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 grid gap-4 sm:gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-blue">Tax-Efficient Architecture</p>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-text-primary lg:text-4xl">
              Structuring every rand before it is invested.
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-text-secondary">
              Every Anchor mandate we facilitate begins with a structuring workshop so returns are protected
              from unnecessary tax drag. We map retirement provision, TFSA capacity, offshore allowances, and
              SARS compliance controls before onboarding.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 sm:p-8 shadow-lg border border-slate-200">
            <h3 className="text-lg sm:text-xl font-semibold text-text-primary">Tools we deploy:</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-text-secondary">
              {taxTools.map((tool) => (
                <li key={tool} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-blue flex-shrink-0" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary lg:text-4xl">
            Ready to align your investments, tax, and estate plans?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Submit your enquiry via the Anchor landing page or contact us directly so we can scope your needs and bring
            in the right combination of Anchor portfolio managers and VNR tax specialists.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href={anchorLandingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark"
            >
              Submit via Anchor
              <Anchor className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
            >
              Talk to VNR
              <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnchorWealthPage;

