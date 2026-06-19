import { NextRequest, NextResponse } from 'next/server';
import { BACK_OFFICE_COOKIE, verifySessionToken } from '@/lib/back-office/auth';

const LEGACY_REDIRECTS: Record<string, string> = {
  '/who-we-are': '/team',
  '/what-we-do': '/services',
  '/whats-on-offer': '/services',
  '/bookkeeping': '/services/cloud-accounting',
  '/make-the-call': '/contact',
  '/privacy-policy-2': '/privacy-policy',
  '/anchor-wealth/estate-will-clinic': '/estate-will-clinic',
  '/anchor-wealth/independent-advisor': '/independent-advisor',
};

const GONE_PATHS = new Set<string>([
  '/old-staff-profile',
]);

function normalizePath(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const normalizedPath = normalizePath(pathname);
  const normalizedLowercasePath = normalizedPath.toLowerCase();
  if (
    pathname !== normalizedLowercasePath &&
    !pathname.startsWith('/images/') &&
    !/\.(jpg|jpeg|png|gif|webp|svg|ico|avif|mp4|pdf|woff2?)$/i.test(pathname)
  ) {
    return NextResponse.redirect(new URL(`${normalizedLowercasePath}${search}`, request.url), 308);
  }

  if (GONE_PATHS.has(normalizedPath)) {
    return new NextResponse('Gone', { status: 410 });
  }

  const lowercasePath = normalizedLowercasePath;

  const mappedRedirect = LEGACY_REDIRECTS[lowercasePath];
  if (mappedRedirect) {
    return NextResponse.redirect(new URL(`${mappedRedirect}${search}`, request.url), 308);
  }

  if (
    lowercasePath.startsWith('/back-office') &&
    lowercasePath !== '/back-office/login'
  ) {
    const token = request.cookies.get(BACK_OFFICE_COOKIE)?.value;
    if (!(await verifySessionToken(token))) {
      return NextResponse.redirect(new URL('/back-office/login', request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=()',
  );
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.vercel-insights.com; frame-src 'self' https://www.google.com https://maps.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none';",
  );

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
