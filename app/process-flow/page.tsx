'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const flowSteps = [
  {
    id: 'start',
    title: 'You start confused',
    content: 'Managing debtors, creditors, cashbook, journals, it all feels overwhelming. Where do I even begin?',
    expanded: false,
  },
  {
    id: 'capture',
    title: 'Capture your transactions',
    content: 'Debtors: Create quotations, invoices, receive payments. Creditors: Capture supplier invoices, make payments. All flows through your cashbook.',
    expanded: false,
  },
  {
    id: 'reconcile',
    title: 'Reconcile & allocate',
    content: 'Allocate debtor receipts to customers, creditor payments to suppliers. Post other income and expenses to the right GL accounts.',
    expanded: false,
  },
  {
    id: 'journals',
    title: 'Journals & schedules',
    content: 'Salary control journals, depreciation, fixed asset register, VAT reports, inventory valuation, loan accounts, the pieces that complete the picture.',
    expanded: false,
  },
  {
    id: 'result',
    title: 'Confident: Income Statement & Balance Sheet',
    content: 'Your numbers tell a clear story. You know where your business stands and where it\'s heading. Peace of mind.',
    expanded: false,
  },
];

export default function ProcessFlowPage() {
  const [steps, setSteps] = useState(flowSteps);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleStep = (id: string) => {
    setSteps((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, expanded: !s.expanded } : { ...s, expanded: false }
      )
    );
  };

  // Track scroll to animate the little man
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(Math.min(1, scrolled));
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface-light min-h-screen">
      {/* Hero */}
      <section className="bg-surface-dark text-white py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Process Flow', href: '/process-flow' },
            ]}
            className="flex justify-center mb-4 text-slate-400"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center">
            From Confused to Confident
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-center text-text-on-dark/80">
            See how your day-to-day transactions become clear financial statements. A little journey, with a happy ending.
          </p>
        </div>
      </section>

      {/* Flow with animated man */}
      <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const stepProgress = index / (steps.length - 1);
            const isVisible = scrollProgress >= stepProgress - 0.1;
            const manState = !isVisible ? 'waiting' : index === 0 ? 'confused' : index === steps.length - 1 ? 'confident' : 'building';
            
            return (
              <React.Fragment key={step.id}>
                {/* Step card */}
                <div className="relative">
                  {/* Little man indicator - positioned to the left */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center w-12">
                    <LittleMan state={manState} />
                  </div>

                  <div
                    className={`bg-white rounded-2xl border-2 shadow-lg overflow-hidden transition-all duration-300 ${
                      step.expanded
                        ? 'border-brand-teal shadow-brand-teal/20'
                        : 'border-slate-200 hover:border-brand-blue/50'
                    }`}
                  >
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4"
                      aria-expanded={step.expanded}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-sm">
                          {index + 1}
                        </span>
                        <h2 className="font-serif text-lg sm:text-xl font-semibold text-text-primary">
                          {step.title}
                        </h2>
                      </div>
                      {step.expanded ? (
                        <ChevronUp className="h-5 w-5 text-brand-teal flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {step.expanded && (
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                        <p className="text-text-secondary leading-relaxed pl-[52px] sm:pl-0">
                          {step.content}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="flex flex-col items-center text-brand-teal animate-bounce-slow">
                      <ArrowDown className="h-8 w-8" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile little man - inline at top */}
        <div className="md:hidden flex justify-center my-8">
          <LittleMan state={scrollProgress > 0.8 ? 'confident' : scrollProgress > 0.2 ? 'building' : 'confused'} />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Ready to turn your numbers into clarity?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-brand-teal-dark hover:shadow-xl hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

// Little man SVG that animates from confused to confident
function LittleMan({ state }: { state: 'confused' | 'building' | 'confident' | 'waiting' }) {
  const opacity = state === 'waiting' ? 0.3 : 1;
  const scale = state === 'confident' ? 1.1 : 1;
  
  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{ opacity, transform: `scale(${scale})` }}
      aria-hidden
    >
      <svg
        width="48"
        height="64"
        viewBox="0 0 48 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Head */}
        <circle
          cx="24"
          cy="14"
          r="10"
          fill="#234694"
          className="transition-all duration-500"
        />
        {/* Face expression based on state */}
        {state === 'confused' && (
          <>
            <path d="M18 12 Q20 14 22 12" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M26 12 Q28 14 30 12" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M20 18 Q24 16 28 18" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </>
        )}
        {state === 'building' && (
          <>
            <circle cx="19" cy="13" r="1.5" fill="#fff" />
            <circle cx="29" cy="13" r="1.5" fill="#fff" />
            <path d="M20 20 Q24 23 28 20" stroke="#92C741" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        )}
        {state === 'confident' && (
          <>
            <circle cx="19" cy="13" r="1.5" fill="#fff" />
            <circle cx="29" cy="13" r="1.5" fill="#fff" />
            <path d="M18 21 Q24 26 30 21" stroke="#92C741" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Sparkles */}
            <circle cx="8" cy="8" r="1.5" fill="#92C741" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="10" r="1" fill="#92C741" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </>
        )}
        {state === 'waiting' && (
          <>
            <circle cx="19" cy="13" r="1.5" fill="#fff" opacity="0.7" />
            <circle cx="29" cy="13" r="1.5" fill="#fff" opacity="0.7" />
            <path d="M20 18 Q24 16 28 18" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" />
          </>
        )}
        {/* Body */}
        <path
          d="M24 24 L24 48 M24 28 L16 38 M24 28 L32 38 M24 48 L18 58 M24 48 L30 58"
          stroke="#234694"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-[10px] text-brand-blue font-medium mt-1 text-center capitalize">
        {state === 'waiting' ? '...' : state}
      </p>
    </div>
  );
}
