import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  BACK_OFFICE_COOKIE,
  createSessionToken,
  getBackOfficePassword,
  verifyBackOfficePassword,
} from '@/lib/back-office/auth';

const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export async function POST(request: Request) {
  if (!getBackOfficePassword()) {
    return NextResponse.json(
      { ok: false, error: 'Back office is not configured yet.' },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const password = String(body?.password || '');

    if (!verifyBackOfficePassword(password)) {
      return NextResponse.json({ ok: false, error: 'Incorrect password.' }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set(BACK_OFFICE_COOKIE, await createSessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_MAX_AGE,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}
