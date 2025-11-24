import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const CareersSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimateOnScroll>
          <div className="bg-surface-light border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary">
              Become a Part of Our Expert Cadre
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-text-secondary">
              We are always looking for exceptional talent dedicated to client success and professional excellence. If you believe you have the skills and mindset to contribute to the VNR team, we would be delighted to hear from you.
            </p>
            <div className="mt-8">
              <Link
                href="mailto:info@vnr.co.za?subject=Career%20Inquiry"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CareersSection;