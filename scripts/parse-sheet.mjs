import fs from 'fs';

const csv = fs.readFileSync('tmp-sheet.csv', 'utf8');

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (c === ',' && !inQuotes) {
      row.push(field.trim());
      field = '';
      continue;
    }

    if ((c === '\n' || c === '\r') && !inQuotes) {
      if (c === '\r' && next === '\n') i += 1;
      row.push(field.trim());
      field = '';
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      continue;
    }

    field += c;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.trim());
    if (row.some((cell) => cell.length > 0)) rows.push(row);
  }

  return rows;
}

function parsePrice(val) {
  if (val === undefined || val === null) return '';
  const trimmed = String(val).trim();
  if (!trimmed || trimmed.toUpperCase() === 'POR') return 'POR';
  if (trimmed.toUpperCase() === 'FREE') return 'FREE';
  const num = parseFloat(trimmed.replace(/[,\s]/g, ''));
  return Number.isNaN(num) ? trimmed : num;
}

const rows = parseCSV(csv).slice(1).filter((row) => row[1] || row[0]);

const categories = [];
const subcatsByCat = {};

for (const row of rows) {
  const [, , , , cat, sub] = row;
  if (!cat) continue;
  if (!categories.includes(cat)) categories.push(cat);
  if (sub) {
    if (!subcatsByCat[cat]) subcatsByCat[cat] = [];
    if (!subcatsByCat[cat].includes(sub)) subcatsByCat[cat].push(sub);
  }
}

const items = rows
  .filter((row) => row[4])
  .map(([code, desc, excl, incl, cat, sub]) => ({
    category: cat,
    subcategory: sub || '',
    code: code || '',
    description: desc.replace(/\s+/g, ' ').trim(),
    priceExcl: parsePrice(excl),
    priceIncl: parsePrice(incl),
  }));

const travel = items.find((item) => item.code === 'TRA001');
if (travel) {
  travel.subcategory = 'Travel';
  const cloudCat = 'Cloud Accounting & Financial Record Keeping Solutions';
  if (!subcatsByCat[cloudCat]) subcatsByCat[cloudCat] = [];
  if (!subcatsByCat[cloudCat].includes('Travel')) subcatsByCat[cloudCat].push('Travel');
}

console.log('Parsed rows:', items.length);
console.log('Categories:', categories.length);
console.log('Subcategories:', JSON.stringify(subcatsByCat, null, 2));

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const subcatsExport = Object.fromEntries(
  categories.map((cat) => [cat, subcatsByCat[cat] || []]),
);

let out = `/**
 * VNR Price List – synced from Google Sheet "VNR SERVICES REWORKED".
 * Order matches spreadsheet column B (row order). Category = column E, Sub-category = column F.
 */

export interface PricingService {
  category: string;
  subcategory: string;
  code: string;
  description: string;
  priceExcl: string | number;
  priceIncl: string | number;
}

export const pricingCategories = ${JSON.stringify(categories, null, 2)} as const;

export type PricingCategory = (typeof pricingCategories)[number];

/** Sub-categories per main category (sheet column F). Empty array = no sub-grouping. */
export const pricingSubcategories: Record<PricingCategory, readonly string[]> = ${JSON.stringify(subcatsExport, null, 2)} as const;

export const pricingData: PricingService[] = [
`;

let currentCat = '';
for (const item of items) {
  if (item.category !== currentCat) {
    currentCat = item.category;
    out += `\n  // ========== ${currentCat} ==========\n`;
  }
  const priceExcl =
    typeof item.priceExcl === 'number' ? item.priceExcl : `'${item.priceExcl}'`;
  const priceIncl =
    typeof item.priceIncl === 'number'
      ? item.priceIncl
      : item.priceIncl === '' || item.priceIncl === undefined
        ? "''"
        : `'${item.priceIncl}'`;
  out += `  { category: '${esc(item.category)}', subcategory: '${esc(item.subcategory)}', code: '${esc(item.code)}', description: '${esc(item.description)}', priceExcl: ${priceExcl}, priceIncl: ${priceIncl} },\n`;
}

out += '\n];\n';
fs.writeFileSync('data/pricing-data.ts', out);
console.log('Wrote data/pricing-data.ts');
