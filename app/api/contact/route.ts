import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = String(body?.fullName || '').trim();
    const email = String(body?.email || '').trim();
    const message = String(body?.message || '').trim();

    if (!fullName || !email || !message) {
      return NextResponse.json({ ok: false, error: 'All fields are required.' }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}
