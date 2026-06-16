import { head, put } from '@vercel/blob';
import { pricingData as staticPricingData, type PricingService } from '@/data/pricing-data';

export const PRICING_BLOB_PATHNAME = 'vnr/pricing-services.json';

function getBlobToken(): string | undefined {
  const raw = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (!raw) {
    return undefined;
  }

  // Vercel env values are sometimes pasted with wrapping quotes by mistake.
  return raw.replace(/^['"]|['"]$/g, '');
}

export async function readPricingFromBlob(): Promise<PricingService[] | null> {
  const token = getBlobToken();
  if (!token) {
    return null;
  }

  try {
    const metadata = await head(PRICING_BLOB_PATHNAME, { token });
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
  const token = getBlobToken();
  if (!token) {
    throw new Error('BLOB_READ_WRITE_TOKEN is not configured.');
  }

  const body = JSON.stringify(services);

  await put(PRICING_BLOB_PATHNAME, body, {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  });
}

export async function getPricingServices(): Promise<PricingService[]> {
  const blobData = await readPricingFromBlob();
  return blobData ?? staticPricingData;
}

export function isPricingBlobConfigured(): boolean {
  return Boolean(getBlobToken());
}
