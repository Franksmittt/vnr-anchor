import { NextResponse } from 'next/server';
import { isEmailConfigured } from '@/lib/email/config';
import { sendContactFormEmail } from '@/lib/email/send-contact-email';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    if (!isEmailConfigured()) {
      return NextResponse.json(
        { ok: false, error: 'Email service is not configured yet. Please try again later or contact us directly.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const fullName = String(body?.fullName || '').trim();
    const email = String(body?.email || '').trim();
    const message = String(body?.message || '').trim();

    if (!fullName || !email || !message) {
      return NextResponse.json({ ok: false, error: 'All fields are required.' }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (fullName.length > 120 || email.length > 254 || message.length > 5000) {
      return NextResponse.json({ ok: false, error: 'One or more fields are too long.' }, { status: 400 });
    }

    await sendContactFormEmail({ fullName, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);

    return NextResponse.json(
      { ok: false, error: 'We could not send your message right now. Please try again or email info@vnr.co.za directly.' },
      { status: 500 }
    );
  }
}
