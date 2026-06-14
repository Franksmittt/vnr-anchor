'use client';
import React from 'react';
import Image from 'next/image';
import { Article } from '@/data/insights-data';

const ArticleHero = ({ article }: { article: Article }) => (
  <section className="relative bg-surface-dark text-white flex items-end min-h-[40vh]">
    <Image 
      src={article.imageUrl} 
      alt={article.title} 
      fill 
      priority
      className="absolute inset-0 w-full h-full object-cover opacity-20" 
      sizes="100vw"
    />
    <div className="relative z-10 container mx-auto px-4 py-8 sm:px-6 sm:py-10">
      <p className="font-semibold tracking-wider uppercase text-brand-teal-light text-xs sm:text-sm">{article.category}</p>
      <h1 className="mt-2 max-w-4xl font-serif text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl">{article.title}</h1>
      <div className="mt-6 flex items-center text-sm">
        <div className="flex items-center">
          <Image 
            src={article.author.imageUrl} 
            alt={article.author.name} 
            width={48} 
            height={48} 
            className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-slate-500" 
          />
          <div>
            <p className="font-semibold text-white">{article.author.name}</p>
            <p className="text-text-on-dark/70">{article.date}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ArticleHero;