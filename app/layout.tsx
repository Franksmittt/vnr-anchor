import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Schema from "@/components/Schema"; // Import the new component

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | VNR Professional Accountants',
    default: 'VNR Professional Accountants: Strategic Wealth & Tax Experts',
  },
  description: "Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa's leading families and businesses. While our head office is in Centurion, we serve clients across South Africa.",
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <Schema /> {/* Add the Schema component here */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}