import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Schema from "@/components/Schema"; // Import the new component
import WhatsAppFab from "@/components/WhatsAppFab";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  preload: true,
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | VNR Professional Accountants',
    default: 'VNR Professional Accountants: Strategic Wealth & Tax Experts',
  },
  description: "Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa's leading families and businesses. We serve clients across South Africa.",
  keywords: [
    'VNR Professional Accountants',
    'tax advisory South Africa',
    'business structuring',
    'secretarial services',
    'financial reporting',
    'estate planning',
    'tax consultant',
    'SARS compliance',
    'CIPC services',
    'Anchor Capital',
    'wealth management',
    'accounting services South Africa',
    'tax planning',
    'company registration',
  ],
  authors: [{ name: 'VNR Professional Accountants' }],
  creator: 'VNR Professional Accountants',
  publisher: 'VNR Professional Accountants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: '/',
    siteName: 'VNR Professional Accountants',
    title: 'VNR Professional Accountants: Strategic Wealth & Tax Experts',
    description: "Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa's leading families and businesses.",
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'VNR Professional Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNR Professional Accountants: Strategic Wealth & Tax Experts',
    description: "Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa's leading families and businesses.",
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <Schema /> {/* Add the Schema component here */}
      </head>
      <body>
        <Analytics />
        <Header />
        <main>{children}</main>
        <WhatsAppFab />
        <Footer />
      </body>
    </html>
  );
}