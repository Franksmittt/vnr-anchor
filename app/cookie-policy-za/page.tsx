import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy (ZA) | VNR Professional Accountants',
  description: 'Cookie policy explaining how cookies are used on vnr.co.za.',
  alternates: { canonical: `${SITE_URL}/cookie-policy-za` },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16 prose max-w-4xl">
      <h1>Cookie Policy (ZA)</h1>
      <p>
        This website uses cookies and similar technologies to ensure core functionality, improve
        user experience, and measure website performance.
      </p>
      <p>
        Where required, non-essential cookies are used only after consent. You can manage cookie
        preferences using your browser settings and any on-site consent controls.
      </p>
    </div>
  );
}
