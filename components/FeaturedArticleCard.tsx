'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/insights-data';

const FeaturedArticleCard = ({ article }: { article: Article }) => (
  <div className="container mx-auto px-6">
    <Link href={`/insights/${article.slug}`} className="block group bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-2 hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 md:h-auto">
        <Image src={article.imageUrl} alt={article.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <span className="text-sm font-semibold text-brand-teal uppercase tracking-wider">{article.category}</span>
        <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-text-primary group-hover:text-brand-blue transition-colors duration-300">{article.title}</h2>
        <p className="mt-4 text-text-secondary">{article.excerpt}</p>
        <div className="mt-6 flex items-center text-sm">
          <Image src={article.author.imageUrl} alt={article.author.name} width={40} height={40} className="w-10 h-10 rounded-full mr-3 object-cover" />
          <div>
            <p className="font-semibold text-text-primary">{article.author.name}</p>
            <p className="text-slate-500">{article.date}</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default FeaturedArticleCard;