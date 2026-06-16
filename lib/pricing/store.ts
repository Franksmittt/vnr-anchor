import { head } from '@vercel/blob';
import { put } from '@vercel/blob';
import { pricingData as staticPricingData, type PricingService } from '@/data/pricing-data';

export const PRICING_BLOB_PATHNAME = 'vnr/pricing-services.json';

export async function readPricingFromBlob(): Promise<PricingService[] | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return null;
  }

  try {
    const metadata = await head(PRICING_BLOB_PATHNAME);
    const response = await fetch(metadata.url, { cache: 'no-store' });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as PricingService[];

    if (!Array.isArray(data)) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

export async function savePricingToBlob(services: PricingService[]): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error('BLOB_READ_WRITE_TOKEN is not configured.');
  }

  await put(PRICING_BLOB_PATHNAME, JSON.stringify(services), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function getPricingServices(): Promise<PricingService[]> {
  const blobData = await readPricingFromBlob();
  return blobData ?? staticPricingData;
}

export function isPricingBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
}
