'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, Newspaper, Mail, Phone, Menu, X, Anchor as AnchorIcon, BookOpen } from 'lucide-react';

// This is a new, refined NavItem for our specific design system
const NavItem = ({ href, Icon, children }: { href: string; Icon: React.ElementType; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-brand-blue-dark text-white shadow-inner'
          : 'text-text-on-dark/80 hover:bg-white/10 hover:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon className="h-5 w-5" />
      {children}
    </Link>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services', Icon: Briefcase },
    { href: '/anchor-wealth', label: 'Anchor Wealth', Icon: AnchorIcon },
    { href: '/resources/expat-tax-guide', label: 'Tax Guide', Icon: BookOpen },
    { href: '/team', label: 'Our Team', Icon: Users },
    { href: '/insights', label: 'Insights', Icon: Newspaper },
    { href: '/contact', label: 'Contact', Icon: Mail },
  ];

  return (
    <header className="bg-surface-dark text-text-on-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" aria-label="VNR Professional Accountants Home Page">
          <div className="flex items-center">
            <span className="font-serif text-2xl font-bold text-white">VNR</span>
            <div className="ml-3 h-8 border-l border-slate-600"></div>
            <span className="ml-3 text-sm font-medium tracking-wide text-text-on-dark/80">
              Professional Accountants
            </span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-2 lg:flex" role="navigation" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavItem key={link.label} href={link.href} Icon={link.Icon}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center">

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="ml-4 p-2 lg:hidden"
            aria-label="Open main menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
            <nav className="mt-8 flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg p-3 text-lg font-medium hover:bg-slate-200"
                  aria-current={usePathname() === link.href ? 'page' : undefined}
                >
                  <link.Icon className="h-6 w-6 text-brand-blue" />
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+27126531633"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
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