'use client'; // <-- THIS LINE IS THE CRITICAL FIX

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

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
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">VNR</h3>
            <p className="mt-4 text-sm text-text-on-dark/70">
              Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa’s leading entrepreneurs.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-white">Key Services</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="/services/tax-advisory">Tax Advisory</FooterLink>
              <FooterLink href="/services/business-structuring">Business Structuring</FooterLink>
              <FooterLink href="/services/legacy-planning">Estate & Legacy Planning</FooterLink>
              <FooterLink href="/services/financial-reporting">Financial Reporting</FooterLink>
              <FooterLink href="/services">View All Services</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="/team">Our Leadership</FooterLink>
              <FooterLink href="/anchor-wealth">Anchor Wealth Division</FooterLink>
              <FooterLink href="/resources/expat-tax-guide">Expat & Contractor Tax Guide</FooterLink>
              <FooterLink href="/insights">Insights</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-brand-teal-light" />
                <span className="text-sm text-text-on-dark/70">1022 Saxby Avenue, Eldoraigne, Centurion, 0157, South Africa</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 flex-shrink-0 text-brand-teal-light" />
                <a href="mailto:info@vnr.co.za" className="text-sm text-text-on-dark/70 hover:text-white">info@vnr.co.za</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 flex-shrink-0 text-brand-teal-light" />
                <a href="tel:+27126531633" className="text-sm text-text-on-dark/70 hover:text-white">+27 12 653 1633</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-slate-700" />
        <div className="text-center text-sm text-text-on-dark/60">
          © {currentYear} VNR Professional Accountants (Pty) Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;