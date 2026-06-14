'use client'; // <-- THIS LINE IS THE CRITICAL FIX

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
import { trackEvent } from '@/lib/tracking';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm text-text-on-dark/80 transition-colors duration-300 hover:text-white">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
              VNR <span className="text-brand-teal">Professional Accountants</span>
            </h3>
            <p className="mt-2 max-w-sm text-xs text-text-on-dark/75 sm:text-sm">
              Strategic tax, compliance, and wealth planning for South African entrepreneurs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-2 space-y-1.5">
              <FooterLink href="/services/tax-advisory">Tax Advisory</FooterLink>
              <FooterLink href="/services/secretarial-services">Secretarial</FooterLink>
              <FooterLink href="/services/payroll-administration">Payroll</FooterLink>
              <FooterLink href="/services">All Services</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-2 space-y-1.5">
              <FooterLink href="/anchor-wealth">Anchor Wealth</FooterLink>
              <FooterLink href="/insights">Insights</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-2 space-y-2 text-xs text-text-on-dark/75 sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-teal-light" />
                <span>4 Grit Ave, Zwartkop, Centurion, 0051</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0 text-brand-teal-light" />
                <a
                  href="mailto:info@vnr.co.za"
                  onClick={() => trackEvent('email_click', { location: 'footer' })}
                  className="hover:text-white"
                >
                  info@vnr.co.za
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0 text-brand-teal-light" />
                <a
                  href="tel:0126531633"
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                  className="hover:text-white"
                >
                  012 653 1633
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-700 pt-4 text-center text-xs text-text-on-dark/60">
          © {currentYear} VNR Professional Accountants (Pty) Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
