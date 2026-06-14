'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-brand-blue-dark text-white shadow-inner'
          : 'text-text-on-dark/80 hover:bg-brand-teal/20 hover:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/anchor-wealth', label: 'Anchor Wealth' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface-dark text-text-on-dark shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="VNR Professional Accountants Home Page">
          <Image
            src="/images/logos/vnrlogo1.png"
            alt="VNR Professional Accountants Logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/contact"
            className="hidden rounded-md bg-brand-teal px-5 py-2 text-xs font-semibold text-white shadow-md transition-colors hover:bg-brand-teal-dark lg:inline-flex lg:text-sm"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 lg:hidden"
            aria-label="Open main menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-xs bg-surface-light p-6 text-text-primary shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-3 text-base font-medium transition-colors hover:bg-slate-200"
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="tel:0126531633"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us Today
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
