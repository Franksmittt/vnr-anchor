import Link from "next/link";
import { Metadata } from "next";
import { Anchor, CheckCircle2, ShieldCheck, Globe2, TrendingUp, ArrowUpRight, PhoneCall, BookOpen, Download, MapPin } from "lucide-react";
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
const pdfDownloadUrl = "https://drive.google.com/file/d/1n9UrKyDvR8nWT9j8X2aQPi6sHSETbf6F/view?usp=drive_link";
const marketingUrl = "https://marketing.vnr.co.za/expats-contractors?fbclid=IwY2xjawORGzVleHRuA2FlbQIxMABicmlkETBpR2h1dmZXMkZQTlBFaWxuc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjLoS2AcTuGmBBQaa-NLjTNdKeeeiPvVj6j_-wZHlmXZriUp8UYsoLIkIVbz_aem_2vey8ij1xay9z3OuOTOxGA";

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

const advisorServices = [
  "Life cover, disability, and dread disease solutions sized for complex corporate structures",
  "Succession planning via Buy & Sell agreements, Keyman policies, and share buy-back funding",
  "Short-term insurance reviews for both personal and commercial risk, including site visits",
              "Flexible consultations at our head office or at your premises anywhere in South Africa - we serve clients nationwide",
];

const estateHighlights = [
  "Complimentary will drafting when VNR or our specialist partner is appointed executor",
  "Dedicated estate planning partners (kept anonymous online) for winding-up support",
  "Executor appointments aligned with shareholder agreements and trust deeds",
  "Quarterly reminders to confirm that wills, beneficiary nominations, and trusts stay current",
];

const mistakes = [
  "Assuming you’re exempt from SA tax because you work abroad without formally ceasing residency.",
  "Ignoring the SARS ordinary residence or physical presence tests when relocating temporarily.",
  "Mis-using the foreign employment income exemption as a contractor or when day-count rules aren’t met.",
  "Misclassifying yourself as a contractor when SARS will deem you an employee (and vice versa).",
  "Skipping provisional tax registrations and IRP6 payments despite earning non-PAYE income.",
  "Claiming the wrong expenses (or none at all) without documentation, triggering audits.",
  "Paying foreign tax without claiming Section 6quat credits, resulting in double taxation.",
  "Creating a permanent establishment risk for foreign clients or employers because of remote work arrangements.",
  "Missing deadlines or data-matching flags thanks to SARS’ analytics-driven compliance.",
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
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 sm:py-16 lg:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="text-slate-300" />
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

      <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
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
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
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

      <section className="py-12 sm:py-16 lg:py-24 bg-surface-light border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
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

      <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-xl bg-surface-light p-6 sm:p-8 border border-slate-200">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-blue">Independent Advisor Desk</p>
            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-text-primary">Life & risk planning on your terms.</h3>
            <p className="mt-4 text-sm sm:text-base text-text-secondary">
              Our independent financial advisor (not affiliated with Anchor) works exclusively with VNR clients.
              He can meet at our head office or travel to you anywhere in South Africa, ensuring personal cover aligns with
              business realities. We serve clients nationwide - distance is no barrier to expert service.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-text-secondary">
              {advisorServices.map((service) => (
                <li key={service} className="flex items-start gap-2 sm:gap-3">
                  <ShieldCheck className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-blue flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-surface-light p-6 sm:p-8 border border-slate-200">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-blue">Estate & Will Clinic</p>
            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-text-primary">Your wills stay current, free of charge.</h3>
            <p className="mt-4 text-sm sm:text-base text-text-secondary">
              We now ask every client if their will is up to date. If it is not, we draft or refresh it at no cost
              when VNR or our trusted executor partner is appointed. Specialist partners manage estate planning
              and administration, without naming them publicly per your request.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-text-secondary">
              {estateHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 text-brand-blue flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-surface-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-brand-teal-light">Campaign Spotlight</p>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold lg:text-4xl">
              The Facebook ad we're aligning the site with.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-200">
              “This isn’t just about filing your return. It’s about not losing money that never needed to be lost.
              If you’re a South African expat or contractor, your tax game is different. If you don’t play it right
              you’ll pay more, stress more, waste more. We created the checklist <em>10 Costly Tax Mistakes Expats &
              Contractors Make and How To Avoid Them.</em> Bonus: download now and book a free consultation to map your
              tax position clearly. No jargon. No fluff. Real action.”
            </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-300">
              This page plus our new resource hub ensure the website mirrors the ad's promise with immediate access to
              the checklist and direct booking options.
            </p>
          </div>
          <div className="rounded-xl bg-white/5 p-6 sm:p-8 border border-white/10 backdrop-blur">
            <h3 className="text-lg sm:text-xl font-semibold">Download the checklist</h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-200">
              Share the PDF or the interactive landing page with prospects straight from here.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href={pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-brand-blue-dark transition hover:bg-slate-100"
              >
                Download PDF
                <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href={marketingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-white"
              >
                View Interactive Guide
                <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-blue">Top Mistakes We Tackle</p>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-text-primary lg:text-4xl">
              10 costly errors expats & independent contractors keep making.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary">
              These are the exact problem statements behind the Facebook ad and the downloadable resource. Use this
              section to educate clients during onboarding or review meetings.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake} className="rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-surface-light">
                <p className="text-xs sm:text-sm text-text-secondary">{mistake}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-text-secondary">
            <p>
              Action plan: DIY the checklist (time consuming), hand everything back to the accountant who missed it, or
              call VNR so our experts who already know expats and contractors can take the entire burden off your hands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary lg:text-4xl">
            Ready to align your investments, tax, and estate plans?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Submit your enquiry via the Anchor landing page or contact us directly so we can scope your needs and bring
            in the right combination of Anchor portfolio managers, our independent advisor, and our estate specialists.
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

