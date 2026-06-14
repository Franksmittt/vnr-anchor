import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvPath = path.join(__dirname, '..', 'sheet-export.csv');
const outPath = path.join(__dirname, '..', 'data', 'pricing-data.ts');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || (c === '\r' && text[i + 1] === '\n')) {
      if (c === '\r') i++;
      row.push(field);
      field = '';
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }

  if (field || row.length) {
    row.push(field);
    if (row.some((cell) => cell.trim())) rows.push(row);
  }

  return rows;
}

function parsePrice(value) {
  const trimmed = (value || '').trim();
  if (!trimmed) return '';
  const upper = trimmed.toUpperCase();
  if (upper === 'POR' || upper === 'FREE') return upper;
  const numeric = Number(trimmed.replace(/,/g, ''));
  return Number.isNaN(numeric) ? trimmed : numeric;
}

function inferSubcategory(description) {
  if (description.startsWith('Hourly Rate:')) return 'Hourly Tariffs';
  if (
    description.includes('Subscription') ||
    description.startsWith('DEXT') ||
    description.startsWith('XERO')
  ) {
    return 'Software Subscription Fees';
  }
  if (description.startsWith('Travel')) return 'Disbursements';
  return '';
}

function escapeString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '').replace(/\n/g, ' ');
}

const text = fs.readFileSync(csvPath, 'utf8');
const rows = parseCsv(text).slice(1);

const items = rows
  .map(([code, service, priceExcl, priceIncl, category]) => ({
    code: (code || '').trim(),
    description: (service || '').replace(/\s+/g, ' ').trim(),
    priceExcl: parsePrice(priceExcl),
    priceIncl: parsePrice(priceIncl),
    category: (category || '').trim(),
  }))
  .filter((item) => item.description && item.category);

const grouped = new Map();
for (const item of items) {
  if (!grouped.has(item.category)) grouped.set(item.category, []);
  grouped.get(item.category).push(item);
}

const categoryOrder = [
  'Tax Advisory & Compliance',
  'Financial Reporting',
  'Payroll Administration',
  'Registrations & Secretarial Services',
  'Estate & Legacy Planning',
  'Confirmations',
  'Business Structuring',
  'Cloud Accounting & Financial Record Keeping Solutions',
];

const lines = [
  '/**',
  ' * VNR Price List – synced from Google Sheet "VNR SERVICES REWORKED".',
  ' * Column E = Category. Codes kept for internal reference only (not shown on site).',
  ' */',
  '',
  'export interface PricingService {',
  '  category: string;',
  '  subcategory: string;',
  '  code: string;',
  '  description: string;',
  '  priceExcl: string | number;',
  '  priceIncl: string | number;',
  '}',
  '',
  'export const pricingCategories = [',
  ...categoryOrder.map((category) => `  '${escapeString(category)}',`),
  '] as const;',
  '',
  'export type PricingCategory = (typeof pricingCategories)[number];',
  '',
  'export const pricingData: PricingService[] = [',
];

for (const category of categoryOrder) {
  const categoryItems = grouped.get(category) || [];
  lines.push(`  // ========== ${category} ==========`);
  for (const item of categoryItems) {
    const subcategory = inferSubcategory(item.description);
    const excl =
      typeof item.priceExcl === 'number'
        ? item.priceExcl
        : `'${escapeString(String(item.priceExcl))}'`;
    const incl =
      typeof item.priceIncl === 'number'
        ? item.priceIncl
        : item.priceIncl === ''
          ? "''"
          : `'${escapeString(String(item.priceIncl))}'`;

    lines.push(
      `  { category: '${escapeString(item.category)}', subcategory: '${escapeString(subcategory)}', code: '${escapeString(item.code)}', description: '${escapeString(item.description)}', priceExcl: ${excl}, priceIncl: ${incl} },`,
    );
  }
  lines.push('');
}

lines.push('];');
lines.push('');

fs.writeFileSync(outPath, lines.join('\n'));
console.log(`Wrote ${items.length} pricing rows to ${outPath}`);
