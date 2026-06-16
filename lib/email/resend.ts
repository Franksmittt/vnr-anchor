import { Resend } from 'resend';
import { getResendApiKey } from './config';

let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  const apiKey = getResendApiKey();

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}
