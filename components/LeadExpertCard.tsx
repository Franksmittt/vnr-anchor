'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserCheck } from 'lucide-react';

interface LeadExpertCardProps {
  name: string;
  title: string;
  imageUrl: string;
  slug: string;
  children: React.ReactNode;
}

const LeadExpertCard: React.FC<LeadExpertCardProps> = ({ name, title, imageUrl, slug, children }) => (
  <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sticky top-28">
    <h3 className="font-serif text-lg font-bold text-text-primary mb-4 tracking-wide">Lead Expert</h3>
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-offset-2 ring-brand-blue-light">
        <Image src={imageUrl} alt={name} fill sizes="64px" className="object-cover" />
      </div>
      <div>
        <Link href={`/team/${slug}`} className="font-bold text-text-primary hover:text-brand-blue transition-colors">{name}</Link>
        <p className="text-sm text-brand-blue font-semibold">{title}</p>
      </div>
    </div>
    <div className="text-sm text-text-secondary mb-6 prose prose-sm">{children}</div>
    <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors">
      <UserCheck className="w-5 h-5 mr-2" /> Consult with {name.split(' ')[0]}
    </Link>
  </div>
);

export default LeadExpertCard;