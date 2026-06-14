'use client';
import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
  <div className="flex items-start rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex-shrink-0 h-12 w-12 bg-brand-blue text-white rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4 min-w-0 flex-1">
      <h3 className="font-serif text-lg font-semibold text-text-primary">{title}</h3>
      <div className="text-slate-700 mt-1">{children}</div>
    </div>
  </div>
);

export default InfoCard;