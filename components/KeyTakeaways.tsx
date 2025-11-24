'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

const KeyTakeaways = ({ takeaways }: { takeaways: string[] }) => (
    <div className="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg">
        <h3 className="font-serif text-xl font-bold text-text-primary mb-4">Key Takeaways</h3>
        <ul className="space-y-3">
            {takeaways.map((item, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default KeyTakeaways;