'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  pricingCategories,
  pricingSubcategories,
  type PricingCategory,
  type PricingService,
} from '@/data/pricing-data';
import { cleanServiceDescription } from '@/lib/service-display';
import { CheckCircle2, Loader2, Save, Search } from 'lucide-react';

const VAT_MULTIPLIER = 1.15;

function formatInputValue(value: string | number): string {
  if (typeof value === 'number') {
    return Number.isInteger(value) ? String(value) : value.toFixed(2);
  }

  return String(value ?? '');
}

function parseEditablePrice(value: string): string | number {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed.toUpperCase() === 'POR') return 'POR';
  if (trimmed.toUpperCase() === 'FREE') return 'FREE';
  if (trimmed.includes('%')) return trimmed;

  const parsed = Number(trimmed.replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : trimmed;
}

function calcInclFromExcl(excl: number): number {
  return Math.round(excl * VAT_MULTIPLIER * 100) / 100;
}

export default function PricingEditor() {
  const [services, setServices] = useState<PricingService[]>([]);
  const [activeCategory, setActiveCategory] = useState<PricingCategory>(pricingCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [blobConfigured, setBlobConfigured] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch('/api/back-office/pricing', { cache: 'no-store' });
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data?.error || 'Could not load prices.');
        }

        if (!cancelled) {
          setServices(data.services || []);
          setBlobConfigured(Boolean(data.blobConfigured));
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load prices.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const categoryServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return services
      .map((service, index) => ({ service, index }))
      .filter(({ service }) => service.category === activeCategory)
      .filter(({ service }) => {
        if (!query) return true;
        return cleanServiceDescription(service.description).toLowerCase().includes(query);
      });
  }, [activeCategory, searchQuery, services]);

  const updateService = (index: number, patch: Partial<PricingService>) => {
    setServices((current) =>
      current.map((service, serviceIndex) =>
        serviceIndex === index ? { ...service, ...patch } : service,
      ),
    );
    setSuccess('');
  };

  const handleExclChange = (index: number, value: string) => {
    const priceExcl = parseEditablePrice(value);
    const patch: Partial<PricingService> = { priceExcl };

    if (typeof priceExcl === 'number') {
      patch.priceIncl = calcInclFromExcl(priceExcl);
    }

    updateService(index, patch);
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/back-office/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || 'Could not save prices.');
      }

      setSuccess('Prices saved. The public services page is updated immediately.');
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Could not save prices.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[320px] items-center justify-center px-4 py-16 text-text-secondary">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Loading prices...
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-text-primary">Service price list</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
              Edit excl. and incl. VAT prices below. Changing the excl. price auto-calculates incl. VAT at 15%.
              Click Save to publish updates to the website instantly.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving || !blobConfigured}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {saving ? 'Saving...' : 'Save prices'}
          </button>
        </div>

        {!blobConfigured && (
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Vercel Blob is not configured yet. Add <code className="font-mono">BLOB_READ_WRITE_TOKEN</code> in Vercel
            to enable saving. You can still review prices here.
          </p>
        )}

        {error && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        {success && (
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
            {success}
          </p>
        )}

        <div className="mt-6 flex flex-col gap-4 lg:flex-row">
          <div className="lg:w-64 lg:flex-shrink-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">Categories</p>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {pricingCategories.map((category) => {
                const count = services.filter((service) => service.category === category).length;
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`min-w-[200px] rounded-lg border px-3 py-2.5 text-left text-sm transition-colors lg:min-w-0 lg:w-full ${
                      isActive
                        ? 'border-brand-blue bg-brand-blue/10 text-brand-blue-dark'
                        : 'border-slate-200 bg-white text-text-secondary hover:border-brand-blue/30'
                    }`}
                  >
                    <span className="font-medium">{category}</span>
                    <span className="ml-2 text-xs text-text-secondary">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="relative mb-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search services in this category..."
                className="w-full rounded-xl border border-slate-300 py-2.5 pl-9 pr-3 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="hidden grid-cols-[1fr_120px_120px] gap-3 border-b border-slate-200 bg-surface-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary sm:grid">
                <span>Service</span>
                <span>Excl. VAT</span>
                <span>Incl. VAT</span>
              </div>

              <ul className="divide-y divide-slate-100">
                {categoryServices.map(({ service, index }) => (
                  <li key={`${service.code || service.description}-${index}`} className="px-4 py-4">
                    <p className="text-sm font-medium leading-snug text-text-primary">
                      {cleanServiceDescription(service.description)}
                    </p>
                    {service.subcategory && (
                      <p className="mt-1 text-xs text-text-secondary">{service.subcategory}</p>
                    )}

                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <label className="block text-xs font-semibold text-text-secondary">
                        Excl. VAT
                        <input
                          type="text"
                          value={formatInputValue(service.priceExcl)}
                          onChange={(event) => handleExclChange(index, event.target.value)}
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </label>
                      <label className="block text-xs font-semibold text-text-secondary">
                        Incl. VAT
                        <input
                          type="text"
                          value={formatInputValue(service.priceIncl)}
                          onChange={(event) =>
                            updateService(index, { priceIncl: parseEditablePrice(event.target.value) })
                          }
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </label>
                    </div>
                  </li>
                ))}
              </ul>

              {categoryServices.length === 0 && (
                <div className="px-4 py-10 text-center text-sm text-text-secondary">
                  No services found in this category.
                </div>
              )}
            </div>

            {pricingSubcategories[activeCategory].length > 0 && (
              <p className="mt-3 text-xs text-text-secondary">
                Sub-categories on the public site still follow the original grouping for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
