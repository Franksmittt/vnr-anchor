export const CONTACT_TO_EMAIL = 'info@vnr.co.za';

const DEFAULT_FROM_NAME = 'VNR Professional Accountants';

export function getResendApiKey(): string | undefined {
  return process.env.RESEND_API_KEY?.trim() || undefined;
}

export function getFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL?.trim() || CONTACT_TO_EMAIL;
}

export function getContactToEmail(): string {
  return CONTACT_TO_EMAIL;
}

export function getFromAddress(): string {
  const fromName = process.env.RESEND_FROM_NAME?.trim() || DEFAULT_FROM_NAME;
  return `${fromName} <${getFromEmail()}>`;
}

export function isEmailConfigured(): boolean {
  return Boolean(getResendApiKey());
}

export function getEmailConfigurationError(): string | null {
  if (!getResendApiKey()) {
    return 'RESEND_API_KEY is not configured.';
  }

  return null;
}
