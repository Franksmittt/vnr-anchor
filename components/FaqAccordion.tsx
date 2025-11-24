'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../data/services-data';

const FaqAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-slate-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-6">
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-serif text-lg font-medium text-text-primary">{faq.q}</span>
            <ChevronDown
              className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {/* --- CORRECTED CODE BLOCK START --- */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div 
              className="prose prose-slate max-w-none pt-4" 
              dangerouslySetInnerHTML={{ __html: faq.a }} 
            />
          </div>
          {/* --- CORRECTED CODE BLOCK END --- */}

        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;