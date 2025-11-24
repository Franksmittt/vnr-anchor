import { ShieldCheck, Users, TrendingUp } from 'lucide-react';
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const WhyVnrSection = () => {
  return (
    <section className="bg-surface-light py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Your Strategic Financial Partner
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
              We move beyond compliance to provide the strategic partnership that ambitious entrepreneurs need to thrive in South Africa.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Strategic Partnership */}
          <AnimateOnScroll>
            <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/30 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg group-hover:bg-brand-blue-dark transition-colors">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold text-text-primary">Strategic Partnership</h3>
              <p className="mt-2 text-base text-text-secondary">
                We act as an extension of your team, providing proactive advice and strategic foresight to help you navigate challenges and seize opportunities.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Card 2: Unwavering Expertise */}
          <AnimateOnScroll delay="200ms">
            <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/30 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg group-hover:bg-brand-blue-dark transition-colors">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold text-text-primary">Unwavering Expertise</h3>
              <p className="mt-2 text-base text-text-secondary">
                Our SAIPA-accredited team possesses deep knowledge in South African tax law, CIPC compliance, and financial reporting, ensuring your business is always protected.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Card 3: Enduring Legacy */}
          <AnimateOnScroll delay="400ms">
            <div className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/30 hover:-translate-y-2 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-lg group-hover:bg-brand-blue-dark transition-colors">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-8 font-serif text-xl font-semibold text-text-primary">Enduring Legacy</h3>
              <p className="mt-2 text-base text-text-secondary">
                We specialize in complex intergenerational wealth transfer and estate planning, ensuring the value you build today endures for generations to come.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WhyVnrSection;