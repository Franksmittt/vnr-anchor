import { ShieldCheck, HeartHandshake, TrendingUp } from 'lucide-react';
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const TeamValuesSection = () => {
  return (
    <section className="bg-surface-light py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
              Our values are the foundation of our client relationships and the standard by which we measure our success.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Integrity */}
          <AnimateOnScroll>
            <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/30 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg group-hover:bg-brand-blue-dark transition-colors">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold text-text-primary">Unwavering Integrity</h3>
              <p className="mt-2 text-base text-text-secondary">
                Upholding the highest ethical standards to ensure your financial affairs are managed with absolute transparency and trust.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Card 2: Strategic Partnership */}
          <AnimateOnScroll delay="200ms">
            <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-teal/30 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal shadow-lg group-hover:bg-brand-teal-dark transition-colors">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold text-text-primary">Strategic Partnership</h3>
              <p className="mt-2 text-base text-text-secondary">
                We function as an extension of your team, providing proactive and strategic guidance tailored to your unique goals.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Card 3: Enduring Foresight */}
          <AnimateOnScroll delay="400ms">
            <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/30 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg group-hover:bg-brand-blue-dark transition-colors">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold text-text-primary">Enduring Foresight</h3>
              <p className="mt-2 text-base text-text-secondary">
                Our commitment is to look beyond the immediate horizon, helping you build a resilient financial legacy that endures for generations.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default TeamValuesSection;