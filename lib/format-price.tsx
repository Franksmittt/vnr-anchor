import type { PricingService } from '@/data/pricing-data';

const currencyFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatAmount(value: string | number) {
  if (typeof value === 'number') return currencyFormatter.format(value);
  const parsed = parseFloat(String(value).replace(/,/g, ''));
  return Number.isNaN(parsed) ? String(value) : currencyFormatter.format(parsed);
}

export function formatServicePrice(service: Pick<PricingService, 'priceExcl' | 'priceIncl' | 'category'>) {
  const { priceExcl, priceIncl, category } = service;

  if (typeof priceExcl === 'string' && priceExcl.toUpperCase() === 'FREE') {
    return (
      <span className="inline-flex items-center rounded-full border border-brand-teal/30 bg-brand-teal/20 px-2.5 py-0.5 text-xs font-medium text-brand-teal-dark">
        FREE
      </span>
    );
  }

  if (
    !priceIncl ||
    priceIncl === '' ||
    priceExcl === 'POR' ||
    priceExcl === '' ||
    (typeof priceExcl === 'string' && priceExcl.toUpperCase() === 'POR')
  ) {
    if (typeof priceExcl === 'number') {
      return (
        <div className="text-right">
          <span className="text-base font-bold text-text-primary">{formatAmount(priceExcl)}</span>
          <span className="mt-0.5 block text-xs text-text-secondary">excl. VAT</span>
        </div>
      );
    }

    const porLabel =
      category === 'Business Structuring' || category === 'Tax Advisory & Compliance'
        ? 'Per Quote / Hourly Tariff'
        : category === 'Cloud Accounting & Financial Record Keeping Solutions'
          ? 'Per Quote'
          : "Let's Chat";

    return (
      <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue-dark">
        {porLabel}
      </span>
    );
  }

  if (typeof priceExcl === 'string' && priceExcl.includes('%')) {
    return (
      <div className="text-right">
        <span className="text-base font-bold text-text-primary">{priceExcl}</span>
        <span className="mt-0.5 block text-xs text-text-secondary">of Gross Assets</span>
      </div>
    );
  }

  const inclVal = typeof priceIncl === 'number' ? priceIncl : parseFloat(String(priceIncl));
  const exclVal = typeof priceExcl === 'number' ? priceExcl : parseFloat(String(priceExcl));

  if (Number.isNaN(inclVal) || Number.isNaN(exclVal)) {
    return <span className="text-sm text-text-secondary">Contact for info</span>;
  }

  return (
    <div className="text-right">
      <span className="text-base font-bold text-text-primary">{formatAmount(inclVal)}</span>
      <span className="mt-0.5 block text-xs text-text-secondary">excl. {formatAmount(exclVal)}</span>
    </div>
  );
}
