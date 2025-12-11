'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { slidesData } from '@/data/hero-slides';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slidesData[currentSlide];

  return (
    <section className="relative text-white min-h-[calc(100vh-theme(spacing.20))] flex items-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      {slidesData.map((slideData, index) => (
        <div
          key={slideData.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slideData.imageUrl}
            alt={slideData.altText}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-800/40"></div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hidden md:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hidden md:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content with Fade Transition */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <div
            key={currentSlide}
            className="animate-fade-in-up"
          >
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {slide.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-text-on-dark/90">
              {slide.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={slide.ctaHref}
                className="inline-block rounded-md bg-brand-blue px-8 py-3 text-center font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-blue-light focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-surface-dark"
              >
                {slide.ctaText}
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-text-on-dark/80">
              <ShieldCheck size={16} className="text-brand-teal" />
              <span>{slide.accreditation}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-brand-teal'
                : 'w-2 bg-white/40 hover:bg-brand-teal/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;