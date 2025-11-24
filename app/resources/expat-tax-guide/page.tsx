import Link from "next/link";
import { Metadata } from "next";
import { Download, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "10 Costly Tax Mistakes for Expats & Contractors | VNR Professional Accountants",
  description:
    "Access the VNR checklist covering the top 10 tax mistakes South African expats and independent contractors make, and download the free PDF to stay compliant.",
};

const pdfDownloadUrl = "https://drive.google.com/file/d/1n9UrKyDvR8nWT9j8X2aQPi6sHSETbf6F/view?usp=drive_link";
const marketingUrl = "https://marketing.vnr.co.za/expats-contractors?fbclid=IwY2xjawORGzVleHRuA2FlbQIxMABicmlkETBpR2h1dmZXMkZQTlBFaWxuc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjLoS2AcTuGmBBQaa-NLjTNdKeeeiPvVj6j_-wZHlmXZriUp8UYsoLIkIVbz_aem_2vey8ij1xay9z3OuOTOxGA";

const mistakes = [
  {
    title: "Assuming you’re no longer taxable in South Africa just because you live abroad.",
    action:
      "Confirm your tax residency status formally; document ordinary residence, day counts, and ties before ceasing residency.",
  },
  {
    title: "Failing to cease residency correctly or ignoring the residency tests.",
    action:
      "Track days in/out of South Africa, maintain records of assets and family ties, and submit the correct SARS forms when ceasing residency.",
  },
  {
    title: "Mis-using the foreign employment income exemption (especially as a contractor).",
    action:
      "Validate that you are an employee, meet the 183/60 day thresholds, and rendered services offshore; contractors seldom qualify.",
  },
  {
    title: "Misclassifying yourself (or being misclassified) as a contractor vs. employee.",
    action:
      "Review control, substitution, and financial risk tests for each engagement; align contracts and PAYE/UIF submissions accordingly.",
  },
  {
    title: "Missing provisional tax obligations on non-PAYE income.",
    action:
      "Register for provisional tax, submit IRP6 estimates bi-annually, and set aside cash so SARS penalties and interest don’t erode earnings.",
  },
  {
    title: "Failing to claim legitimate deductions—or claiming the wrong ones without records.",
    action:
      "Keep separate business/personal ledgers, maintain logbooks, receipts, and supporting schedules for every deduction.",
  },
  {
    title: "Paying tax twice because you ignore double-tax agreements or section 6quat credits.",
    action:
      "Capture foreign taxes paid, identify the applicable DTA, and complete section 6quat claims on your SA return.",
  },
  {
    title: "Triggering a permanent establishment or employer compliance trap for foreign clients.",
    action:
      "Assess whether your working arrangement creates PAYE or employer obligations locally or abroad; structure contracts carefully.",
  },
  {
    title: "Late filing, non-disclosure, or being flagged by SARS data analytics.",
    action:
      "Maintain a deadline calendar, reconcile cross-border payments, and respond promptly to SARS notices to avoid admin penalties.",
  },
  {
    title: "Believing DIY or a once-a-year accountant review is “good enough.”",
    action:
      "Either invest the time to master the technicalities, hope the same accountant fixes what they missed, or call VNR to take over end-to-end.",
  },
];

const ExpatTaxGuidePage = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Expat & Contractor Tax Guide", href: "/resources/expat-tax-guide" },
  ];

  return (
    <div className="bg-white">
      <section className="bg-surface-light border-b border-slate-200 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="text-slate-500" />
          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-blue">
              Free PDF Download
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-text-primary sm:text-5xl">
              10 Costly Tax Mistakes Expats & Independent Contractors Make (and how to avoid them)
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              This guide was created for South Africans earning abroad or contracting remotely. Whether you’re
              in Dubai, London, Perth, or still bouncing between Centurion and Cape Town, use the checklist to
              ensure SARS compliance, protect your cash flow, and eliminate stress.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark"
              >
                Download the PDF
                <Download className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href={marketingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
              >
                View interactive guide
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">The Checklist</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-text-primary sm:text-4xl">
              Every mistake we see—spelled out with action steps.
            </h2>
            <p className="mt-4 text-text-secondary">
              Use this list during onboarding, annual reviews, or campaign follow-ups so prospects feel the exact
              pain the Facebook ad describes. Each point includes the action required to stay compliant.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div key={mistake.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-surface-light">
                <h3 className="text-lg font-semibold text-text-primary flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-blue" />
                  <span>{mistake.title}</span>
                </h3>
                <p className="mt-4 text-sm text-text-secondary">{mistake.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface-dark text-white">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-teal-light">
              Three Ways Forward
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              DIY, hope your accountant fixes it, or let VNR handle everything.
            </h2>
            <p className="mt-6 text-slate-200">
              Straight from the campaign copy: <strong>DIY</strong> is time-consuming and technical,{" "}
              <strong>“give it all to the accountant who missed it”</strong> is a gamble, or you can{" "}
              <strong>call VNR</strong> and work with a team that already understands expats and contractors.
              Choose the path that delivers clarity the fastest.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold">Need hands-on help?</h3>
            <p className="mt-4 text-sm text-slate-200">
              Book a consultation and we’ll map your residency status, provisional tax plan, offshore structures,
              and Anchor Capital investment onboarding in one workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue-dark transition hover:bg-slate-100"
              >
                Talk to VNR
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/anchor-wealth"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Explore Anchor partnership
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpatTaxGuidePage;

