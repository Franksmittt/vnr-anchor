'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left">
        <span className="text-lg font-medium text-slate-800">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default FaqItem;