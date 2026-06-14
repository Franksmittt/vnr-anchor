import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-blue-dark to-brand-teal-dark">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Bring Your Wealth Strategy Together
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          Let's sit down and talk about your Anchor portfolio, your tax plan, and your estate strategy. We'll help you connect all the pieces in one conversation. Whether you're planning for retirement or building wealth, we're here to make sure everything works together. We serve clients across South Africa.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-bold rounded-full text-brand-blue-dark bg-white hover:bg-brand-teal/10 hover:text-brand-teal-dark transition-all duration-300 transform hover:scale-105"
          >
            Let's Start a Conversation
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
          <a
            href="https://wa.me/27126531633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-sm sm:text-base font-bold rounded-full text-white hover:bg-white/10 transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;