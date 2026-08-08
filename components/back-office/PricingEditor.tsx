'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  defaultPricingCatalog,
  type PricingService,
} from '@/data/pricing-data';
import { cleanServiceDescription } from '@/lib/service-display';
import {
  CheckCircle2,
  FolderPlus,
  Loader2,
  Plus,
  RefreshCw,
  Save,
  Search,
  Trash2,
} from 'lucide-react';

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
  if (trimmed.includes('%') || /per hour/i.test(trimmed) || /included/i.test(trimmed)) {
    return trimmed;
  }

  const parsed = Number(trimmed.replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : trimmed;
}

function calcInclFromExcl(excl: number): number {
  return Math.round(excl * VAT_MULTIPLIER * 100) / 100;
}

function createEmptyService(category: string): PricingService {
  return {
    category,
    subcategory: '',
    code: '',
    description: 'New service',
    priceExcl: 0,
    priceIncl: 0,
  };
}

export default function PricingEditor() {
  const [services, setServices] = useState<PricingService[]>([]);
  const [categories, setCategories] = useState<string[]>([...defaultPricingCatalog.categories]);
  const [effectiveLabel, setEffectiveLabel] = useState(defaultPricingCatalog.effectiveLabel);
  const [activeCategory, setActiveCategory] = useState(defaultPricingCatalog.categories[0] || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [blobConfigured, setBlobConfigured] = useState(true);
  const [newCategoryName, setNewCategoryName] = useState('');

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
          const nextCategories =
            (data.categories as string[] | undefined)?.length
              ? data.categories
              : data.catalog?.categories || [...defaultPricingCatalog.categories];
          const nextServices = (data.services as PricingService[]) || data.catalog?.services || [];

          setCategories(nextCategories);
          setServices(nextServices);
          setEffectiveLabel(
            data.effectiveLabel || data.catalog?.effectiveLabel || defaultPricingCatalog.effectiveLabel,
          );
          setActiveCategory(nextCategories[0] || '');
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
        return (
          cleanServiceDescription(service.description).toLowerCase().includes(query) ||
          service.code.toLowerCase().includes(query) ||
          service.subcategory.toLowerCase().includes(query)
        );
      });
  }, [activeCategory, searchQuery, services]);

  const markDirty = () => setSuccess('');

  const updateService = (index: number, patch: Partial<PricingService>) => {
    setServices((current) =>
      current.map((service, serviceIndex) =>
        serviceIndex === index ? { ...service, ...patch } : service,
      ),
    );
    markDirty();
  };

  const handleExclChange = (index: number, value: string) => {
    const priceExcl = parseEditablePrice(value);
    const patch: Partial<PricingService> = { priceExcl };

    if (typeof priceExcl === 'number') {
      patch.priceIncl = calcInclFromExcl(priceExcl);
    }

    updateService(index, patch);
  };

  const addService = () => {
    if (!activeCategory) {
      setError('Create or select a category before adding a service.');
      return;
    }

    setServices((current) => [...current, createEmptyService(activeCategory)]);
    markDirty();
  };

  const deleteService = (index: number) => {
    const service = services[index];
    if (!service) return;

    const confirmed = window.confirm(
      `Delete "${cleanServiceDescription(service.description)}"? This cannot be undone after you save.`,
    );
    if (!confirmed) return;

    setServices((current) => current.filter((_, serviceIndex) => serviceIndex !== index));
    markDirty();
  };

  const addCategory = () => {
    const name = newCategoryName.trim();
    if (!name) {
      setError('Enter a category name.');
      return;
    }

    if (categories.some((category) => category.toLowerCase() === name.toLowerCase())) {
      setError('That category already exists.');
      return;
    }

    setCategories((current) => [...current, name]);
    setActiveCategory(name);
    setNewCategoryName('');
    setError('');
    markDirty();
  };

  const renameCategory = () => {
    if (!activeCategory) return;

    const nextName = window.prompt('Rename category', activeCategory)?.trim();
    if (!nextName || nextName === activeCategory) return;

    if (categories.some((category) => category.toLowerCase() === nextName.toLowerCase())) {
      setError('That category already exists.');
      return;
    }

    setCategories((current) => current.map((category) => (category === activeCategory ? nextName : category)));
    setServices((current) =>
      current.map((service) =>
        service.category === activeCategory ? { ...service, category: nextName } : service,
      ),
    );
    setActiveCategory(nextName);
    setError('');
    markDirty();
  };

  const deleteCategory = () => {
    if (!activeCategory) return;

    const count = services.filter((service) => service.category === activeCategory).length;
    const confirmed = window.confirm(
      count > 0
        ? `Delete category "${activeCategory}" and its ${count} service${count === 1 ? '' : 's'}?`
        : `Delete empty category "${activeCategory}"?`,
    );
    if (!confirmed) return;

    const nextCategories = categories.filter((category) => category !== activeCategory);
    setCategories(nextCategories);
    setServices((current) => current.filter((service) => service.category !== activeCategory));
    setActiveCategory(nextCategories[0] || '');
    markDirty();
  };

  const loadDefaultCatalog = () => {
    const confirmed = window.confirm(
      'Replace the current editor contents with the default 2027 PDF price list? You still need to click Save catalog afterwards to publish it live.',
    );
    if (!confirmed) return;

    setCategories([...defaultPricingCatalog.categories]);
    setServices(defaultPricingCatalog.services.map((service) => ({ ...service })));
    setEffectiveLabel(defaultPricingCatalog.effectiveLabel);
    setActiveCategory(defaultPricingCatalog.categories[0] || '');
    setSearchQuery('');
    setError('');
    setSuccess(
      'Loaded the default 2027 price list into the editor. Click Save catalog to publish it to the live website.',
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/back-office/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          version: 1,
          effectiveLabel,
          categories,
          services,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || 'Could not save prices.');
      }

      setSuccess('Catalog saved. Categories, products, and prices are live on the website.');
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
              Manage categories and products, then edit excl./incl. VAT prices. Changing a numeric excl. price
              auto-calculates incl. VAT at 15%. Click Save to publish updates instantly.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={loadDefaultCatalog}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
            >
              <RefreshCw className="h-4 w-4" />
              Load 2027 default list
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving || !blobConfigured}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {saving ? 'Saving...' : 'Save catalog'}
            </button>
          </div>
        </div>

        <p className="mt-4 rounded-xl border border-brand-blue/20 bg-brand-blue/5 px-4 py-3 text-sm text-text-secondary">
          The live website currently reads prices from Vercel Blob storage. If you still see old categories like
          &quot;Cloud Accounting &amp; Financial Record Keeping Solutions&quot;, click <strong>Load 2027 default list</strong>,
          then <strong>Save catalog</strong>.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="block text-xs font-semibold text-text-secondary">
            Effective date label
            <input
              type="text"
              value={effectiveLabel}
              onChange={(event) => {
                setEffectiveLabel(event.target.value);
                markDirty();
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </label>
          <div className="flex items-end text-sm text-text-secondary">
            {services.length} products · {categories.length} categories
          </div>
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
          <div className="lg:w-72 lg:flex-shrink-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">Categories</p>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {categories.map((category) => {
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

            <div className="mt-4 space-y-2 rounded-xl border border-slate-200 bg-surface-light p-3">
              <label className="block text-xs font-semibold text-text-secondary">
                New category
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(event) => setNewCategoryName(event.target.value)}
                  placeholder="e.g. Consulting"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </label>
              <button
                type="button"
                onClick={addCategory}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue"
              >
                <FolderPlus className="h-4 w-4" />
                Add category
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={renameCategory}
                  disabled={!activeCategory}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-text-primary transition hover:border-brand-blue hover:text-brand-blue disabled:opacity-50"
                >
                  Rename
                </button>
                <button
                  type="button"
                  onClick={deleteCategory}
                  disabled={!activeCategory}
                  className="rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search services in this category..."
                  className="w-full rounded-xl border border-slate-300 py-2.5 pl-9 pr-3 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <button
                type="button"
                onClick={addService}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue"
              >
                <Plus className="h-4 w-4" />
                Add product
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="border-b border-slate-200 bg-surface-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                {activeCategory || 'No category selected'}
              </div>

              <ul className="divide-y divide-slate-100">
                {categoryServices.map(({ service, index }) => (
                  <li key={`${service.code || service.description}-${index}`} className="px-4 py-4">
                    <div className="grid gap-3">
                      <label className="block text-xs font-semibold text-text-secondary">
                        Description
                        <textarea
                          value={service.description}
                          onChange={(event) => updateService(index, { description: event.target.value })}
                          rows={2}
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </label>

                      <div className="grid gap-3 sm:grid-cols-3">
                        <label className="block text-xs font-semibold text-text-secondary">
                          Code
                          <input
                            type="text"
                            value={service.code}
                            onChange={(event) => updateService(index, { code: event.target.value })}
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                          />
                        </label>
                        <label className="block text-xs font-semibold text-text-secondary sm:col-span-2">
                          Sub-category
                          <input
                            type="text"
                            value={service.subcategory}
                            onChange={(event) => updateService(index, { subcategory: event.target.value })}
                            placeholder="Optional"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                          />
                        </label>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
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
                        <div className="flex items-end">
                          <button
                            type="button"
                            onClick={() => deleteService(index)}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {categoryServices.length === 0 && (
                <div className="px-4 py-10 text-center text-sm text-text-secondary">
                  No services in this category yet. Use Add product to create one.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
