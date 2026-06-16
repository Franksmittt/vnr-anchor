import { getContactToEmail, getFromAddress } from './config';
import { getResendClient } from './resend';
import {
  buildContactFormHtml,
  buildContactFormSubject,
  buildContactFormText,
  type ContactFormEmailInput,
} from './templates/contact-form';

export async function sendContactFormEmail(input: ContactFormEmailInput) {
  const resend = getResendClient();

  const { data, error } = await resend.emails.send({
    from: getFromAddress(),
    to: [getContactToEmail()],
    replyTo: input.email,
    subject: buildContactFormSubject(input.fullName),
    html: buildContactFormHtml(input),
    text: buildContactFormText(input),
  });

  if (error) {
    throw new Error(error.message || 'Failed to send contact form email.');
  }

  return data;
}
