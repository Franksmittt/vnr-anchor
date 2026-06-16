import { get, head, put } from '@vercel/blob';
import { pricingData as staticPricingData, type PricingService } from '@/data/pricing-data';

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

export async function readPricingFromBlob(): Promise<PricingService[] | null> {
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
    const data = JSON.parse(text) as PricingService[];

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
    ...getPrivateBlobOptions(token),
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
  return Boolean(getBlobToken());
}
