'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { journeyData } from '@/data/journey-data';
import AnimateOnScroll from './AnimateOnScroll';

const ClientJourneySection = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="bg-surface-dark text-text-on-dark py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-xs sm:text-base font-semibold text-brand-blue-light tracking-wider uppercase">Your Growth Arc</h2>
            <p className="mt-2 font-serif text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              A Partner for Every Stage of Your Business Journey
            </p>
            <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-text-on-dark/80">
              From the first steps of incorporation to securing your legacy, VNR provides tailored expertise to navigate the challenges and opportunities at each phase. While our head office is in Centurion, we serve entrepreneurs across South Africa.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-5xl mx-auto">
          {/* Timeline Navigator */}
          <div className="relative flex justify-between items-start px-2 sm:px-0">
            <div className="absolute top-4 left-2 sm:left-0 right-2 sm:right-0 h-0.5 bg-slate-700" />
            <div
              className="absolute top-4 left-2 sm:left-0 h-0.5 bg-gradient-to-r from-brand-blue-light to-brand-teal transition-all duration-500 ease-out"
              style={{ width: `calc(${(activeStage / (journeyData.length - 1)) * 100}% - 1rem)` }}
            />
            {journeyData.map((item, index) => (
              <div key={item.stage} className="relative z-10 flex flex-col items-center flex-1">
                <button
                  onClick={() => setActiveStage(index)}
                  aria-label={`View stage: ${item.stage}`}
                  className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-300 ${
                    activeStage >= index ? 'bg-brand-teal border-brand-teal-dark' : 'bg-slate-800 border-slate-600 hover:border-brand-teal'
                  }`}
                >
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${activeStage >= index ? 'bg-white' : 'bg-slate-500'}`} />
                </button>
                <span className={`mt-3 sm:mt-4 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors ${activeStage === index ? 'text-white' : 'text-slate-300'}`}>
                  {item.stage}
                </span>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="mt-8 sm:mt-12 relative min-h-[200px] sm:min-h-[240px]">
            {journeyData.map((item, index) => (
              <div
                key={item.stage}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeStage === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-center bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-on-dark/80">{item.description}</p>
                  </div>
                  <div className="md:col-span-2 md:border-l md:border-slate-700 md:pl-8 pt-4 md:pt-0">
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3">Key Services:</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {item.services.map((service) => (
                        <li key={service.name}>
                          <Link href={service.href} className="flex items-center text-sm sm:text-base text-slate-300 hover:text-white group">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-light mr-2 sm:mr-3 flex-shrink-0" />
                            <span className="group-hover:underline">{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourneySection;