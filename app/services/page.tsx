'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  pricingCategories,
  pricingData,
  type PricingCategory,
  type PricingService,
} from '@/data/pricing-data';
import { formatServicePrice } from '@/lib/format-price';
import {
  FileText,
  Users,
  BarChart3,
  ScrollText,
  CheckSquare,
  Network,
  Landmark,
  Monitor,
  ChevronDown,
  ArrowRight,
  Clock,
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

function groupBySubcategory(services: PricingService[]) {
  const groups: { label: string; items: PricingService[] }[] = [];
  let currentLabel = '';

  for (const service of services) {
    const label = service.subcategory || '';
    if (!groups.length || label !== currentLabel) {
      groups.push({ label, items: [service] });
      currentLabel = label;
    } else {
      groups[groups.length - 1].items.push(service);
    }
  }

  return groups;
}

const ServicesPage = () => {
  const [openCategory, setOpenCategory] = useState<PricingCategory | null>(pricingCategories[0]);

  const servicesByCategory = useMemo(() => {
    const map = new Map<PricingCategory, PricingService[]>();
    for (const category of pricingCategories) {
      map.set(
        category,
        pricingData.filter((service) => service.category === category),
      );
    }
    return map;
  }, []);

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
            Eight service categories with 2026 pricing. All amounts include VAT at 15% unless marked as price on request.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-text-secondary sm:text-sm">
            <Clock className="h-4 w-4" />
            Effective July 2026
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="space-y-3">
          {pricingCategories.map((category) => {
            const Icon = categoryIcons[category];
            const isOpen = openCategory === category;
            const services = servicesByCategory.get(category) || [];
            const groups = groupBySubcategory(services);
            const detailHref = categoryLinks[category];

            return (
              <div key={category} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-light sm:px-5 sm:py-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-semibold text-text-primary sm:text-base">{category}</h2>
                    <p className="text-xs text-text-secondary sm:text-sm">{services.length} services listed</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-text-secondary transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5">
                    {groups.map((group) => (
                      <div key={group.label || 'default'} className={group.label ? 'mt-4 first:mt-0' : ''}>
                        {group.label && (
                          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                            {group.label}
                          </h3>
                        )}
                        <div className="space-y-2">
                          {group.items.map((service, index) => (
                            <div
                              key={`${service.description}-${index}`}
                              className="flex flex-col gap-2 rounded-md border border-slate-100 bg-surface-light/60 px-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-4"
                            >
                              <p className="text-sm leading-snug text-text-primary sm:max-w-[70%]">
                                {service.description}
                              </p>
                              <div className="flex-shrink-0 sm:pt-0.5">{formatServicePrice(service)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

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
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-center text-xs text-text-secondary sm:mt-8 sm:p-5 sm:text-sm">
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
  );
};

export default ServicesPage;
