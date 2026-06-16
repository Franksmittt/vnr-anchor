const DEFAULT_FROM_EMAIL = 'info@vnr.co.za';
const DEFAULT_TO_EMAIL = 'info@vnr.co.za';
const DEFAULT_FROM_NAME = 'VNR Professional Accountants';

export function getResendApiKey(): string | undefined {
  return process.env.RESEND_API_KEY?.trim() || undefined;
}

export function getFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;
}

export function getContactToEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO_EMAIL;
}

export function getFromAddress(): string {
  const fromName = process.env.RESEND_FROM_NAME?.trim() || DEFAULT_FROM_NAME;
  return `${fromName} <${getFromEmail()}>`;
}

export function isEmailConfigured(): boolean {
  return Boolean(getResendApiKey());
}
