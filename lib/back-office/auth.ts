const SESSION_MESSAGE = 'vnr-back-office-v1';

function getSessionSecret(): string {
  return process.env.BACK_OFFICE_SECRET || process.env.BACK_OFFICE_PASSWORD || '';
}

export const BACK_OFFICE_COOKIE = 'vnr_bo_session';

export function getBackOfficePassword(): string | undefined {
  return process.env.BACK_OFFICE_PASSWORD?.trim() || undefined;
}

function timingSafeEqualStrings(left: string, right: string): boolean {
  if (left.length !== right.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return mismatch === 0;
}

async function hmacSha256Hex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function createSessionToken(): Promise<string> {
  const secret = getSessionSecret();
  if (!secret) {
    throw new Error('BACK_OFFICE_PASSWORD is not configured.');
  }

  return hmacSha256Hex(secret, SESSION_MESSAGE);
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token || !getSessionSecret()) {
    return false;
  }

  try {
    const expected = await createSessionToken();
    return timingSafeEqualStrings(token, expected);
  } catch {
    return false;
  }
}

export function verifyBackOfficePassword(password: string): boolean {
  const configured = getBackOfficePassword();
  if (!configured) {
    return false;
  }

  return timingSafeEqualStrings(password, configured);
}
