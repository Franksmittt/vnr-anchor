'use client';
import React from 'react';
import Image from 'next/image';
import { Article } from '@/data/insights-data';
import Link from 'next/link';

const ArticleHero = ({ article }: { article: Article }) => (
  <section className="relative bg-surface-dark text-white flex items-end min-h-[50vh]">
    <Image 
      src={article.imageUrl} 
      alt={article.title} 
      fill 
      priority
      className="absolute inset-0 w-full h-full object-cover opacity-20" 
      sizes="100vw"
    />
    <div className="relative z-10 container mx-auto px-6 py-12">
      <p className="font-semibold tracking-wider uppercase text-brand-teal-light">{article.category}</p>
      <h1 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight mt-2 max-w-4xl">{article.title}</h1>
      <div className="mt-6 flex items-center text-sm">
        <Link href={`/team/${article.author.slug}`} className="flex items-center group">
          <Image 
            src={article.author.imageUrl} 
            alt={article.author.name} 
            width={48} 
            height={48} 
            className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-slate-500 group-hover:ring-brand-blue-light transition-all" 
          />
          <div>
            <p className="font-semibold text-white group-hover:text-brand-blue-light transition-colors">{article.author.name}</p>
            <p className="text-text-on-dark/70">{article.date}</p>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default ArticleHero;