'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { slidesData } from '@/data/hero-slides';

const Hero = () => {
  const currentSlide = slidesData[0]; // We will focus on the first, most powerful message.

  return (
    <section className="relative text-white min-h-[calc(100vh-theme(spacing.20))] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={currentSlide.imageUrl}
        alt={currentSlide.altText} 
        fill
        priority
        sizes="100vw"
        className="object-cover" 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-800/40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {currentSlide.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-on-dark/90">
            {currentSlide.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={currentSlide.ctaHref} 
              className="inline-block rounded-md bg-brand-blue px-8 py-3 text-center font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-blue-light focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              {currentSlide.ctaText}
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm text-text-on-dark/80">
            <ShieldCheck size={16} /> 
            <span>{currentSlide.accreditation}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;