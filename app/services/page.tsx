'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  pricingCategories,
  pricingData,
  type PricingCategory,
} from '@/data/pricing-data';
import { formatServicePrice } from '@/lib/format-price';
import {
  cleanServiceDescription,
  sortPricingServices,
  type ServiceSortOption,
} from '@/lib/service-display';
import {
  FileText,
  Users,
  BarChart3,
  ScrollText,
  CheckSquare,
  Network,
  Landmark,
  Monitor,
  Clock,
  Search,
  ArrowRight,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const categoryIcons: Record<PricingCategory, React.ElementType> = {
  'Tax Advisory & Compliance': FileText,
  'Financial Reporting': BarChart3,
  'Payroll Administration': Users,
  'Registrations & Secretarial Services': ScrollText,
  Confirmations: CheckSquare,
  'Business Structuring': Network,
  'Estate & Legacy Planning': Landmark,
  'Cloud Accounting & Financial Record Keeping Solutions': Monitor,
};

const categoryLinks: Partial<Record<PricingCategory, string>> = {
  'Tax Advisory & Compliance': '/services/tax-advisory',
  'Financial Reporting': '/services/financial-reporting',
  'Payroll Administration': '/services/payroll-administration',
  'Registrations & Secretarial Services': '/services/secretarial-services',
  'Estate & Legacy Planning': '/services/legacy-planning',
  Confirmations: '/services/confirmations',
  'Business Structuring': '/services/business-structuring',
  'Cloud Accounting & Financial Record Keeping Solutions': '/services/cloud-accounting',
};

const sortOptions: { value: ServiceSortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'price-asc', label: 'Price (low to high)' },
  { value: 'price-desc', label: 'Price (high to low)' },
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>(pricingCategories[0]);
  const [sortBy, setSortBy] = useState<ServiceSortOption>('name-asc');
  const [searchQuery, setSearchQuery] = useState('');

  const servicesByCategory = useMemo(() => {
    const map = new Map<PricingCategory, typeof pricingData>();
    for (const category of pricingCategories) {
      map.set(
        category,
        pricingData.filter((service) => service.category === category),
      );
    }
    return map;
  }, []);

  const visibleServices = useMemo(() => {
    const categoryServices = servicesByCategory.get(activeCategory) || [];
    const query = searchQuery.trim().toLowerCase();

    const filtered = query
      ? categoryServices.filter((service) =>
          cleanServiceDescription(service.description).toLowerCase().includes(query),
        )
      : categoryServices;

    return sortPricingServices(filtered, sortBy);
  }, [activeCategory, searchQuery, servicesByCategory, sortBy]);

  const detailHref = categoryLinks[activeCategory];

  return (
    <div className="min-h-screen bg-surface-light">
      <section className="border-b border-slate-200 bg-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services & Pricing', href: '/services' },
            ]}
            className="mb-3 flex justify-start text-slate-500"
          />
          <h1 className="font-serif text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Services & Pricing
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-text-secondary sm:text-base">
            Choose a category, sort the list, or search within that category. Prices include VAT at 15% unless marked as price on request.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-text-secondary sm:text-sm">
            <Clock className="h-4 w-4" />
            Effective July 2026
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <nav
            className="lg:w-64 lg:flex-shrink-0"
            aria-label="Service categories"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Categories
            </p>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 snap-x snap-mandatory sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0 lg:snap-none">
              {pricingCategories.map((category) => {
                const Icon = categoryIcons[category];
                const isActive = category === activeCategory;
                const count = servicesByCategory.get(category)?.length ?? 0;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`flex min-w-[200px] flex-shrink-0 snap-start items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors sm:min-w-[220px] lg:min-w-0 lg:w-full lg:flex-shrink ${
                      isActive
                        ? 'border-brand-blue bg-brand-blue/10 text-brand-blue-dark'
                        : 'border-slate-200 bg-white text-text-secondary hover:border-brand-blue/30 hover:bg-surface-light'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="min-w-0 flex-1 font-medium leading-snug">{category}</span>
                    <span className="text-xs text-text-secondary">{count}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="min-w-0 flex-1">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                    {activeCategory}
                  </h2>
                  <p className="mt-1 text-sm text-text-secondary">
                    {visibleServices.length} service{visibleServices.length === 1 ? '' : 's'} shown
                  </p>
                </div>

                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                  <label className="sr-only" htmlFor="service-sort">
                    Sort services
                  </label>
                  <select
                    id="service-sort"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value as ServiceSortOption)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 sm:w-auto"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        Sort: {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="relative w-full sm:min-w-[220px] sm:w-auto">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search this category..."
                      className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>
              </div>

              {visibleServices.length === 0 ? (
                <div className="mt-6 rounded-lg border border-dashed border-slate-200 bg-surface-light px-4 py-10 text-center">
                  <p className="font-medium text-text-primary">No services match your search.</p>
                  <p className="mt-1 text-sm text-text-secondary">Try another keyword or clear the search.</p>
                </div>
              ) : (
                <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                  <div className="hidden grid-cols-[1fr_auto] gap-4 border-b border-slate-200 bg-surface-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary sm:grid">
                    <span>Service</span>
                    <span className="text-right">Price</span>
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {visibleServices.map((service, index) => (
                      <li
                        key={`${service.description}-${index}`}
                        className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-4 sm:py-3.5"
                      >
                        <p className="text-sm leading-snug text-text-primary">
                          {cleanServiceDescription(service.description)}
                        </p>
                        <div className="sm:pt-0.5">
                          <span className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary sm:hidden">
                            Price
                          </span>
                          {formatServicePrice(service)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {detailHref && (
                <Link
                  href={detailHref}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
                >
                  Learn more about this service area
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 text-center text-xs text-text-secondary sm:p-5 sm:text-sm">
              <p>Prices subject to change. Terms & Conditions apply. Accounts payable upon presentation.</p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-md bg-brand-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-dark"
              >
                Request a tailored quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
