'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  deriveSubcategories,
  type PricingCatalog,
  type PricingService,
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
  Landmark,
  Monitor,
  Clock,
  Search,
  ArrowRight,
  Building2,
  HeartHandshake,
  Timer,
  Home,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const categoryIcons: Record<string, React.ElementType> = {
  'Personal Tax Services': FileText,
  'Domestic Registrations and Returns': Home,
  'VAT Administration': CheckSquare,
  'Payroll Administration': Users,
  'Yearly Statutory Compliance Services': BarChart3,
  'CIPC Compliance': Building2,
  'SARS and Secretarial Assistance': ScrollText,
  'Trusts & Last Will & Testament': Landmark,
  'Non-Profit Organisations': HeartHandshake,
  'Hourly Tariffs': Timer,
  'Subscription Fees & Disbursements': Monitor,
};

const categoryLinks: Record<string, string> = {
  'Personal Tax Services': '/services/tax-advisory',
  'Payroll Administration': '/services/payroll-administration',
  'Yearly Statutory Compliance Services': '/services/financial-reporting',
  'CIPC Compliance': '/services/secretarial-services',
  'Trusts & Last Will & Testament': '/services/legacy-planning',
  'Subscription Fees & Disbursements': '/services/cloud-accounting',
};

const sortOptions: { value: ServiceSortOption; label: string }[] = [
  { value: 'sheet-order', label: 'Listed order' },
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'price-asc', label: 'Price (low to high)' },
  { value: 'price-desc', label: 'Price (high to low)' },
];

function ServicePriceRow({ service, index }: { service: PricingService; index: number }) {
  return (
    <li
      key={`${service.code || service.description}-${index}`}
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
  );
}

const ServicesPageClient = ({ initialCatalog }: { initialCatalog: PricingCatalog }) => {
  const categories = initialCatalog.categories;
  const [activeCategory, setActiveCategory] = useState(categories[0] || '');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<ServiceSortOption>('sheet-order');
  const [searchQuery, setSearchQuery] = useState('');

  const subcategories = useMemo(
    () => deriveSubcategories(initialCatalog.services, activeCategory),
    [activeCategory, initialCatalog.services],
  );

  useEffect(() => {
    setActiveSubcategory('all');
    setSearchQuery('');
  }, [activeCategory]);

  useEffect(() => {
    if (!categories.includes(activeCategory) && categories[0]) {
      setActiveCategory(categories[0]);
    }
  }, [activeCategory, categories]);

  const servicesByCategory = useMemo(() => {
    const map = new Map<string, PricingService[]>();
    for (const category of categories) {
      map.set(
        category,
        initialCatalog.services.filter((service) => service.category === category),
      );
    }
    return map;
  }, [categories, initialCatalog.services]);

  const visibleServices = useMemo(() => {
    const categoryServices = servicesByCategory.get(activeCategory) || [];
    const query = searchQuery.trim().toLowerCase();

    let filtered = categoryServices;

    if (activeSubcategory !== 'all') {
      filtered = filtered.filter((service) => service.subcategory === activeSubcategory);
    }

    if (query) {
      filtered = filtered.filter((service) =>
        cleanServiceDescription(service.description).toLowerCase().includes(query),
      );
    }

    return sortPricingServices(filtered, sortBy);
  }, [activeCategory, activeSubcategory, searchQuery, servicesByCategory, sortBy]);

  const groupedServices = useMemo(() => {
    if (activeSubcategory !== 'all' || subcategories.length === 0 || sortBy !== 'sheet-order') {
      return null;
    }

    const groups: { label: string; services: PricingService[] }[] = [];

    for (const subcategory of subcategories) {
      const services = visibleServices.filter((service) => service.subcategory === subcategory);
      if (services.length > 0) {
        groups.push({ label: subcategory, services });
      }
    }

    const uncategorized = visibleServices.filter((service) => !service.subcategory);
    if (uncategorized.length > 0) {
      groups.push({ label: 'Other services', services: uncategorized });
    }

    return groups.length > 0 ? groups : null;
  }, [activeSubcategory, sortBy, subcategories, visibleServices]);

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
            Choose a main category, then narrow by sub-category if available. Services are listed in the same order as our official price list unless you change the sort.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-text-secondary sm:text-sm">
            <Clock className="h-4 w-4" />
            Effective {initialCatalog.effectiveLabel}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <nav className="lg:w-64 lg:flex-shrink-0" aria-label="Service categories">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Categories
            </p>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 snap-x snap-mandatory sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0 lg:snap-none">
              {categories.map((category) => {
                const Icon = categoryIcons[category] || FileText;
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
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-serif text-xl font-bold text-text-primary sm:text-2xl">
                      {activeCategory}
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      {visibleServices.length} service{visibleServices.length === 1 ? '' : 's'} shown
                      {activeSubcategory !== 'all' ? ` in ${activeSubcategory}` : ''}
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

                {subcategories.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                      Sub-categories
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveSubcategory('all')}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                          activeSubcategory === 'all'
                            ? 'border-brand-blue bg-brand-blue text-white'
                            : 'border-slate-200 bg-white text-text-secondary hover:border-brand-blue/30 hover:text-brand-blue-dark'
                        }`}
                        aria-pressed={activeSubcategory === 'all'}
                      >
                        All
                      </button>
                      {subcategories.map((subcategory) => {
                        const count = (servicesByCategory.get(activeCategory) || []).filter(
                          (service) => service.subcategory === subcategory,
                        ).length;

                        return (
                          <button
                            key={subcategory}
                            type="button"
                            onClick={() => setActiveSubcategory(subcategory)}
                            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                              activeSubcategory === subcategory
                                ? 'border-brand-blue bg-brand-blue text-white'
                                : 'border-slate-200 bg-white text-text-secondary hover:border-brand-blue/30 hover:text-brand-blue-dark'
                            }`}
                            aria-pressed={activeSubcategory === subcategory}
                          >
                            {subcategory}
                            <span className="ml-1 text-xs opacity-80">({count})</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {visibleServices.length === 0 ? (
                <div className="mt-6 rounded-lg border border-dashed border-slate-200 bg-surface-light px-4 py-10 text-center">
                  <p className="font-medium text-text-primary">No services match your search.</p>
                  <p className="mt-1 text-sm text-text-secondary">Try another keyword or clear the search.</p>
                </div>
              ) : groupedServices ? (
                <div className="mt-4 space-y-5">
                  {groupedServices.map((group) => (
                    <section key={group.label} className="overflow-hidden rounded-lg border border-slate-200">
                      <div className="border-b border-slate-200 bg-surface-light px-4 py-2.5">
                        <h3 className="font-serif text-base font-semibold text-text-primary">{group.label}</h3>
                      </div>
                      <ul className="divide-y divide-slate-100">
                        {group.services.map((service, index) => (
                          <ServicePriceRow key={`${group.label}-${service.code}-${index}`} service={service} index={index} />
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                  <div className="hidden grid-cols-[1fr_auto] gap-4 border-b border-slate-200 bg-surface-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary sm:grid">
                    <span>Service</span>
                    <span className="text-right">Price</span>
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {visibleServices.map((service, index) => (
                      <ServicePriceRow key={`${service.code || service.description}-${index}`} service={service} index={index} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageClient;
