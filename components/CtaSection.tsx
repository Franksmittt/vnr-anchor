import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-teal-700">
      <div className="container mx-auto px-6 py-16 sm:py-24 text-center"> {/* EDITED PADDING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Align Your Anchor portfolio, tax plan, and estate strategy.
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Book a strategy consultation with VNR Professional Accountants to scope your Anchor Capital onboarding,
          tax-efficient structuring (TFSA, RA, offshore wrappers), and our independent advisor plus estate partners in
          one conversation.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-blue-800 bg-white hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
        >
          Schedule a Strategic Consultation
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;