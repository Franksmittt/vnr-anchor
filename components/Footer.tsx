'use client'; // <-- THIS LINE IS THE CRITICAL FIX

import Link from 'next/link';
import { Mail, Phone, MapPin, Globe2 } from 'lucide-react';
import React from 'react';
import { trackEvent } from '@/lib/tracking';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-text-on-dark/80 transition-colors duration-300 hover:text-white">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    // This ensures the year is set on the client-side, preventing hydration errors.
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">VNR <span className="text-brand-teal">Professional Accountants</span></h3>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-text-on-dark/70">
              Your trusted partner in strategic tax advisory, business structuring, and intergenerational wealth planning. We&apos;re here to help South African entrepreneurs build something lasting.
            </p>
            <div className="mt-3 space-y-1.5 text-xs sm:text-sm font-semibold text-brand-teal">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                Head Office
              </span>
              <span className="flex items-center gap-2">
                <Globe2 className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                Nationwide accounting partners across South Africa
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-white">Key Services</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <FooterLink href="/services/tax-advisory">Tax Advisory</FooterLink>
              <FooterLink href="/services/business-structuring">Business Structuring</FooterLink>
              <FooterLink href="/services/secretarial-services">Secretarial Services</FooterLink>
              <FooterLink href="/services/legacy-planning">Estate & Legacy Planning</FooterLink>
              <FooterLink href="/services/financial-reporting">Financial Reporting</FooterLink>
              <FooterLink href="/services">View All Services</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <FooterLink href="/anchor-wealth">Anchor Wealth Division</FooterLink>
              <FooterLink href="/resources/expat-tax-guide">Expat & Contractor Tax Guide</FooterLink>
              <FooterLink href="/locations/centurion-accountants">Centurion & Pretoria</FooterLink>
              <FooterLink href="/insights">Insights</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/disclaimer">Disclaimer</FooterLink>
              <FooterLink href="/terms-and-conditions">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/cookie-policy-za">Cookie Policy (ZA)</FooterLink>
              <FooterLink href="/access-to-information">Access to Information</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-brand-teal-light" />
                <span className="text-xs sm:text-sm text-text-on-dark/70">4 Grit Ave, Zwartkop<br />Centurion, 0051, South Africa<br /><span className="text-brand-teal font-semibold">Head Office - Serving clients across South Africa</span></span>
              </li>
              <li className="flex items-center">
                <Mail size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0 text-brand-teal-light" />
                <a
                  href="mailto:info@vnr.co.za"
                  onClick={() => trackEvent('email_click', { location: 'footer' })}
                  className="text-xs sm:text-sm text-text-on-dark/70 hover:text-white break-all"
                >
                  info@vnr.co.za
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={14} className="sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0 text-brand-teal-light" />
                <a
                  href="tel:0126531633"
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                  className="text-xs sm:text-sm text-text-on-dark/70 hover:text-white"
                >
                  012 653 1633
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 sm:my-8 border-slate-700" />
        <div className="text-center text-xs sm:text-sm text-text-on-dark/60">
          © {currentYear} VNR Professional Accountants (Pty) Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;