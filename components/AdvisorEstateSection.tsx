import Link from 'next/link';
import { HeartPulse, Shield, Briefcase, Home, FileSignature } from 'lucide-react';

const AdvisorEstateSection = () => {
  return (
    <section className="bg-surface-light py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-blue">
            Personal Risk & Estate Desk
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-text-primary sm:text-4xl">
            A dedicated independent advisor plus our estate partners keep every angle covered.
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Beyond Anchor Capital portfolios, VNR clients gain access to an on-call independent
            financial advisor who can meet you at our offices or wherever you are. Together we make
            sure life cover, succession, wills, and short-term insurance stay as current as your tax plan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <HeartPulse className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">Independent Advisor Desk</h3>
                <p className="text-sm text-text-secondary">Life, risk, and business protection</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-text-secondary">
              <li className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-brand-blue" />
                Comprehensive life cover, disability, and dread disease strategies tailored to complex
                entrepreneurial balance sheets.
              </li>
              <li className="flex items-start gap-2">
                <Briefcase className="mt-1 h-5 w-5 text-brand-blue" />
                Business continuity solutions including Buy & Sell agreements, Keyman cover, and share
                buy-back funding models.
              </li>
              <li className="flex items-start gap-2">
                <Home className="mt-1 h-5 w-5 text-brand-blue" />
                Short-term insurance audits on personal and commercial policies, with site visits available
                for high-value assets.
              </li>
            </ul>
            <p className="mt-6 text-sm text-text-secondary">
              Need advice? Request an in-office or on-site consultation and we will coordinate the meeting
              for you.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <FileSignature className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">Estate & Will Clinic</h3>
                <p className="text-sm text-text-secondary">Keeping your legacy documents current</p>
              </div>
            </div>
            <p className="mt-6 text-text-secondary">
              Every client conversation includes a simple question:{" "}
              <strong>“Is your will up to date?”</strong> If not, we draft it at no cost when VNR or our trusted
              specialist partner is appointed as executor. We also coordinate estate planning reviews and
              winding-up support without naming external partners online as requested.
            </p>
            <ul className="mt-6 space-y-3 text-text-secondary">
              <li>Executor appointments aligned to your shareholding structure.</li>
              <li>Succession planning with trusts, testamentary provisions, and estate liquidity mapping.</li>
              <li>Specialist partners ready to handle complex estate administration nationwide.</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
              >
                Book a Will & Risk Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorEstateSection;

