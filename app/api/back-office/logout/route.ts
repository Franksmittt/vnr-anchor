import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { BACK_OFFICE_COOKIE } from '@/lib/back-office/auth';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set(BACK_OFFICE_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return NextResponse.json({ ok: true });
}
