'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { journeyData } from '@/data/journey-data';
import AnimateOnScroll from './AnimateOnScroll';

const ClientJourneySection = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="bg-surface-dark text-text-on-dark py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-base font-semibold text-brand-blue-light tracking-wider uppercase">Your Growth Arc</h2>
            <p className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              A Partner for Every Stage of Your Business Journey
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-text-on-dark/80">
              From the first steps of incorporation to securing your legacy, VNR provides tailored expertise to navigate the challenges and opportunities at each phase.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 max-w-5xl mx-auto">
          {/* Timeline Navigator */}
          <div className="relative flex justify-between items-start">
            <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-700" />
            <div
              className="absolute top-4 left-0 h-0.5 bg-gradient-to-r from-brand-blue-light to-brand-teal transition-all duration-500 ease-out"
              style={{ width: `${(activeStage / (journeyData.length - 1)) * 100}%` }}
            />
            {journeyData.map((item, index) => (
              <div key={item.stage} className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => setActiveStage(index)}
                  aria-label={`View stage: ${item.stage}`}
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                    activeStage >= index ? 'bg-brand-teal border-brand-teal-dark' : 'bg-slate-800 border-slate-600 hover:border-brand-teal'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full transition-colors ${activeStage >= index ? 'bg-white' : 'bg-slate-500'}`} />
                </button>
                {/* FIX: Changed text-slate-400 to text-slate-300 for better contrast */}
                <span className={`mt-4 text-center text-xs font-semibold uppercase tracking-wider transition-colors ${activeStage === index ? 'text-white' : 'text-slate-300'}`}>
                  {item.stage}
                </span>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="mt-12 relative min-h-[240px]">
            {journeyData.map((item, index) => (
              <div
                key={item.stage}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeStage === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-text-on-dark/80">{item.description}</p>
                  </div>
                  <div className="md:col-span-2 md:border-l md:border-slate-700 md:pl-8">
                    <p className="text-sm font-semibold text-slate-300 mb-3">Key Services:</p>
                    <ul className="space-y-3">
                      {item.services.map((service) => (
                        <li key={service.name}>
                          <Link href={service.href} className="flex items-center text-slate-300 hover:text-white group">
                            <Check className="h-5 w-5 text-brand-teal-light mr-3 flex-shrink-0" />
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