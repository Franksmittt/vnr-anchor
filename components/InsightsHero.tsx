'use client';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const InsightsHero = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <section className="bg-surface-light border-b border-slate-200" aria-labelledby="insights-hero-heading">
      <div className="container mx-auto px-4 py-8 text-center sm:px-6 sm:py-12">
        <Breadcrumbs items={breadcrumbItems} className="flex justify-center text-slate-500" />
        <h1 id="insights-hero-heading" className="mt-4 font-serif text-3xl font-extrabold text-text-primary sm:text-4xl md:text-5xl">
          The Knowledge Hub
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-text-secondary sm:text-lg">
          Your resource for expert analysis on South African tax, wealth management, and business growth. Stay ahead with knowledge from industry leaders.
        </p>
      </div>
    </section>
  );
};

export default InsightsHero;