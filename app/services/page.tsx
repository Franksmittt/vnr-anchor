'use client';

import React, { useState, useMemo } from 'react';
import { pricingData } from '@/data/pricing-data';
import { 
  FileText, Briefcase, BarChart3, Users, ScrollText, CheckSquare, 
  TrendingUp, Landmark, Network, Clock, Monitor, Car, Search 
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const categoryIcons: { [key: string]: React.ElementType } = {
  'Tax Advisory & Compliance': FileText,
  'Persons earning Business Income': Briefcase,
  'Financial / Statutory Reporting': BarChart3,
  'Payroll Administration': Users,
  'Registrations and Secretarial Services': ScrollText,
  'Confirmations': CheckSquare,
  'Business Valuations': TrendingUp,
  'Estate and Legacy Planning': Landmark,
  'Business Structuring': Network,
  'Hourly Tariffs': Clock,
  'Software Subscription Fees': Monitor,
  'Disbursements': Car,
};

function formatPrice(priceIncl: string | number, priceExcl: string | number) {
  // Handle "FREE"
  if (typeof priceExcl === 'string' && priceExcl.toUpperCase().includes('FREE')) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-teal/20 text-brand-teal-dark border border-brand-teal/30">
        FREE
      </span>
    );
  }
  
  // Handle POR
  if (!priceIncl || priceIncl === '' || priceExcl === 'POR' || priceExcl === '') {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue-dark border border-brand-blue/20 cursor-pointer hover:bg-brand-blue/20 transition-colors">
        Let's Chat
      </span>
    );
  }

  // Handle percentage
  if (typeof priceExcl === 'string' && priceExcl.includes('%')) {
    return (
      <div className="flex flex-col items-end">
        <span className="text-lg font-bold text-text-primary">{priceExcl}</span>
        <span className="text-xs text-text-secondary font-medium">of Gross Assets</span>
      </div>
    );
  }

  // Numeric Price
  const inclVal = typeof priceIncl === 'number' ? priceIncl : parseFloat(String(priceIncl));
  const exclVal = typeof priceExcl === 'number' ? priceExcl : parseFloat(String(priceExcl));
  
  if (isNaN(inclVal) || isNaN(exclVal)) {
    return <span className="text-sm text-text-secondary">Contact for info</span>;
  }

  const formatter = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' });
  
  return (
    <div className="flex flex-col items-end">
      <span className="text-lg font-bold text-text-primary">{formatter.format(inclVal)}</span>
      <span className="text-xs text-text-secondary font-medium">excl. {formatter.format(exclVal)}</span>
    </div>
  );
}

const ServicesPage = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(pricingData.map(s => s.category))).sort();
  }, []);

  // Set first category as default
  React.useEffect(() => {
    if (categories.length > 0 && !currentCategory) {
      setCurrentCategory(categories[0]);
    }
  }, [categories, currentCategory]);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = pricingData;
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = pricingData.filter(s => 
        (s.description && s.description.toLowerCase().includes(q)) ||
        (s.code && s.code.toLowerCase().includes(q)) ||
        (s.category && s.category.toLowerCase().includes(q))
      );
    } else if (currentCategory) {
      filtered = pricingData.filter(s => s.category === currentCategory);
    }
    
    return filtered;
  }, [searchQuery, currentCategory]);

  const handleCategoryClick = (cat: string) => {
    setCurrentCategory(cat);
    setSearchQuery('');
  };

  return (
    <div className="bg-surface-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <Breadcrumbs 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services & Pricing', href: '/services' },
            ]} 
            className="flex justify-start text-slate-500 mb-4" 
          />
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-brand-blue p-2 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
                  </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-text-primary">VNR Services & Pricing</h1>
              <p className="text-sm text-text-secondary">2026 Price List</p>
                </div>
                </div>
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary mt-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Effective July 2026
            </span>
            <span className="flex items-center gap-1">
              <CheckSquare className="w-4 h-4" />
              VAT @ 15%
            </span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 bg-white border border-slate-200 rounded-xl shadow-sm flex-shrink-0">
            <div className="p-4 border-b border-slate-100 bg-surface-light rounded-t-xl">
              <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Categories</h2>
            </div>
            
            <nav className="p-2 space-y-1 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
              {categories.map(cat => {
                const isActive = cat === currentCategory && !searchQuery;
                const Icon = categoryIcons[cat] || FileText;
                
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-150 flex items-center gap-3 rounded-lg ${
                      isActive
                        ? 'bg-brand-blue/10 text-brand-blue-dark border-r-4 border-brand-blue'
                        : 'text-text-secondary hover:bg-surface-light hover:text-text-primary border-r-4 border-transparent'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-brand-blue' : 'text-text-secondary'}`} />
                    <span className="truncate">{cat}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-text-secondary" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition duration-150 text-sm shadow-sm"
                  placeholder="Search for services, codes, or keywords (e.g., 'Tax Return', 'IT12')..."
                />
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {filteredServices.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-text-secondary bg-white rounded-xl border border-slate-200">
                  <FileText className="w-12 h-12 mb-4 text-slate-300" />
                  <p className="text-lg font-medium text-text-primary">No services found</p>
                  <p className="text-sm">Try adjusting your search terms</p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    {searchQuery ? (
                      <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                        Search Results ({filteredServices.length})
                      </div>
                    ) : (
                      <div>
                        <h2 className="text-2xl font-bold text-text-primary">{currentCategory}</h2>
                        <p className="text-sm text-text-secondary mt-1">Select a service below to view pricing details.</p>
                      </div>
                    )}
                  </div>

                  {/* Service Cards */}
                  <div className="space-y-4">
                    {filteredServices.map((service, index) => {
                      const hasCode = service.code && service.code.length > 0;
                      
                      return (
                        <div
                          key={index}
                          className="bg-white p-4 md:p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              {hasCode && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-surface-light text-text-secondary border border-slate-200">
                                  {service.code}
                                </span>
                              )}
                              {searchQuery && (
                                <span className="text-xs text-brand-blue font-medium">{service.category}</span>
                              )}
                            </div>
                            <p className="text-text-primary font-medium text-sm md:text-base leading-snug">
                              {service.description}
                            </p>
                            {service.subcategory && (
                              <p className="text-xs text-text-secondary mt-1">{service.subcategory}</p>
                            )}
                          </div>
                          <div className="flex-none pt-2 sm:pt-0 border-t sm:border-0 border-slate-100 mt-2 sm:mt-0">
                            {formatPrice(service.priceIncl, service.priceExcl)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Disclaimer Footer */}
            <div className="bg-white border-t border-slate-200 p-4 text-xs text-text-secondary text-center lg:text-left mt-8 rounded-xl">
              <p>Prices subject to change. Terms & Conditions apply. Accounts payable upon presentation. Interest charged at 1.25% pm on outstanding balances.</p>
          </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
