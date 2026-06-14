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
  <section className="relative bg-surface-dark text-white flex items-center justify-center min-h-[40vh] py-10 sm:py-12">
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
      <h1 className="mx-auto mt-4 max-w-4xl font-serif text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-base text-text-on-dark/80 sm:text-lg">{subtitle}</p>
    </div>
  </section>
);

export default ServiceHero;