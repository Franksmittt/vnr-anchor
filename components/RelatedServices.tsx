'use client';
import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services-data';
import { ArrowRight } from 'lucide-react';

const RelatedServices = ({ currentSlug }: { currentSlug: string }) => {
  // Get 2 other services, excluding the current one
  const related = servicesData.filter(s => s.slug !== currentSlug).slice(0, 2);

  return (
    <section className="bg-surface-light py-8 sm:py-12 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary text-center mb-6">Other Ways We Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {related.map(service => (
            <Link 
              key={service.slug}
              href={`/services/${service.slug}`} 
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif font-bold text-text-primary group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-sm text-text-secondary mt-2">{service.subtitle}</p>
              </div>
              <div className="mt-4 font-semibold text-brand-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                Let's Chat <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;