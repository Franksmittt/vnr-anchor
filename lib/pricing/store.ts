import { get, head, put } from '@vercel/blob';
import {
  defaultPricingCatalog,
  type PricingCatalog,
  type PricingService,
} from '@/data/pricing-data';

export const PRICING_BLOB_PATHNAME = 'vnr/pricing-services.json';

function getBlobToken(): string | undefined {
  const raw = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (!raw) {
    return undefined;
  }

  return raw.replace(/^['"]|['"]$/g, '');
}

function getPrivateBlobOptions(token: string) {
  return {
    access: 'private' as const,
    token,
  };
}

function normalizeCatalog(input: unknown): PricingCatalog | null {
  if (!input) {
    return null;
  }

  if (Array.isArray(input)) {
    const services = input.filter(isPricingService);
    if (services.length === 0) {
      return null;
    }

    const categories = Array.from(
      new Set(services.map((service) => service.category).filter(Boolean)),
    );

    return {
      version: 1,
      effectiveLabel: defaultPricingCatalog.effectiveLabel,
      categories: categories.length > 0 ? categories : [...defaultPricingCatalog.categories],
      services,
    };
  }

  if (typeof input !== 'object') {
    return null;
  }

  const record = input as Record<string, unknown>;
  const services = Array.isArray(record.services)
    ? record.services.filter(isPricingService)
    : [];

  if (services.length === 0) {
    return null;
  }

  const categories = Array.isArray(record.categories)
    ? record.categories
        .filter((category): category is string => typeof category === 'string')
        .map((category) => category.trim())
        .filter(Boolean)
    : [];

  const derivedCategories = Array.from(
    new Set(services.map((service) => service.category).filter(Boolean)),
  );

  const mergedCategories = [...categories];
  for (const category of derivedCategories) {
    if (!mergedCategories.includes(category)) {
      mergedCategories.push(category);
    }
  }

  return {
    version: 1,
    effectiveLabel:
      typeof record.effectiveLabel === 'string' && record.effectiveLabel.trim()
        ? record.effectiveLabel.trim()
        : defaultPricingCatalog.effectiveLabel,
    categories: mergedCategories.length > 0 ? mergedCategories : [...defaultPricingCatalog.categories],
    services,
  };
}

function isPricingService(input: unknown): input is PricingService {
  if (!input || typeof input !== 'object') {
    return false;
  }

  const record = input as Record<string, unknown>;
  return typeof record.category === 'string' && typeof record.description === 'string';
}

export async function readPricingCatalogFromBlob(): Promise<PricingCatalog | null> {
  const token = getBlobToken();
  if (!token) {
    return null;
  }

  const options = getPrivateBlobOptions(token);

  try {
    await head(PRICING_BLOB_PATHNAME, options);

    const result = await get(PRICING_BLOB_PATHNAME, {
      ...options,
      useCache: false,
    });

    if (!result?.stream) {
      return null;
    }

    const text = await new Response(result.stream).text();
    const data = JSON.parse(text) as unknown;
    return normalizeCatalog(data);
  } catch {
    return null;
  }
}

export async function savePricingCatalogToBlob(catalog: PricingCatalog): Promise<void> {
  const token = getBlobToken();
  if (!token) {
    throw new Error('BLOB_READ_WRITE_TOKEN is not configured.');
  }

  const body = JSON.stringify(catalog);

  await put(PRICING_BLOB_PATHNAME, body, {
    ...getPrivateBlobOptions(token),
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

/** @deprecated Prefer getPricingCatalog */
export async function readPricingFromBlob(): Promise<PricingService[] | null> {
  const catalog = await readPricingCatalogFromBlob();
  return catalog?.services ?? null;
}

/** @deprecated Prefer savePricingCatalogToBlob */
export async function savePricingToBlob(services: PricingService[]): Promise<void> {
  const categories = Array.from(new Set(services.map((service) => service.category).filter(Boolean)));

  await savePricingCatalogToBlob({
    version: 1,
    effectiveLabel: defaultPricingCatalog.effectiveLabel,
    categories: categories.length > 0 ? categories : [...defaultPricingCatalog.categories],
    services,
  });
}

export async function getPricingCatalog(): Promise<PricingCatalog> {
  const blobData = await readPricingCatalogFromBlob();
  return blobData ?? defaultPricingCatalog;
}

export async function getPricingServices(): Promise<PricingService[]> {
  const catalog = await getPricingCatalog();
  return catalog.services;
}

export function isPricingBlobConfigured(): boolean {
  return Boolean(getBlobToken());
}
