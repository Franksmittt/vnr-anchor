'use client';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const InsightsHero = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <div className="bg-surface-light border-b border-slate-200">
      <div className="container mx-auto px-6 py-16 sm:py-24 text-center"> {/* EDITED PADDING */}
        <Breadcrumbs items={breadcrumbItems} className="flex justify-center text-slate-500" />
        <h1 className="mt-4 font-serif text-4xl md:text-5xl font-extrabold text-text-primary">The Knowledge Hub</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
          Your resource for expert analysis on South African tax, wealth management, and business growth. Stay ahead with knowledge from industry leaders.
        </p>
      </div>
    </div>
  );
};

export default InsightsHero;