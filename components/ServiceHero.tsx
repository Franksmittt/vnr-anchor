'use client';
import React from 'react';
import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  breadcrumbs: BreadcrumbItem[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, imageUrl, breadcrumbs }) => (
  <section className="relative bg-surface-dark text-white flex items-center justify-center min-h-[50vh] py-20">
    <Image 
      src={imageUrl} 
      alt={title} 
      fill 
      priority
      className="absolute inset-0 w-full h-full object-cover opacity-10" 
      sizes="100vw"
    />
    <div className="relative z-10 text-center px-4">
      <Breadcrumbs items={breadcrumbs} className="flex justify-center" />
      <h1 className="mt-4 font-serif text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto text-white">
        {title}
      </h1>
      <p className="mt-4 text-lg text-text-on-dark/80 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

export default ServiceHero;