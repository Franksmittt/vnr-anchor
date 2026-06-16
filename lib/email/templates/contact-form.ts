export type ContactFormEmailInput = {
  fullName: string;
  email: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildContactFormSubject(fullName: string): string {
  return `New website enquiry from ${fullName}`;
}

export function buildContactFormHtml({ fullName, email, message }: ContactFormEmailInput): string {
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6; max-width: 640px;">
      <h2 style="margin: 0 0 16px; font-size: 22px; color: #0b3d91;">New contact form submission</h2>
      <p style="margin: 0 0 20px; color: #475569;">A new enquiry was submitted on the VNR website.</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e2e8f0; background: #f8fafc; width: 140px; font-weight: 600;">Name</td>
          <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Email</td>
          <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">
            <a href="mailto:${safeEmail}" style="color: #0b3d91; text-decoration: none;">${safeEmail}</a>
          </td>
        </tr>
      </table>
      <h3 style="margin: 0 0 8px; font-size: 16px;">Message</h3>
      <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; white-space: pre-wrap;">${safeMessage}</div>
      <p style="margin: 24px 0 0; font-size: 12px; color: #64748b;">Reply directly to this email to respond to the sender.</p>
    </div>
  `.trim();
}

export function buildContactFormText({ fullName, email, message }: ContactFormEmailInput): string {
  return [
    'New contact form submission',
    '',
    `Name: ${fullName}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');
}
