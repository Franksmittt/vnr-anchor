'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { advisorOfferings } from './AdvisorServicesSection';

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

const riskEstatePaths = advisorOfferings.map((offering) => offering.href);

const NavDropdown = ({ label, items }: { label: string; items: readonly { href: string; title: string }[] }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isActive = items.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive
            ? 'bg-brand-blue-dark text-white shadow-inner'
            : 'text-text-on-dark/80 hover:bg-brand-teal/20 hover:text-white'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[15rem] rounded-lg border border-white/10 bg-surface-dark py-1 shadow-xl"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-text-on-dark/90 transition-colors hover:bg-brand-teal/20 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/anchor-wealth', label: 'Anchor Wealth' },
  { href: '/insights', label: 'Insights' },
] as const;

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRiskEstateOpen, setRiskEstateOpen] = useState(false);
  const pathname = usePathname();
  const isRiskEstateActive = riskEstatePaths.some(
    (href) => pathname === href || pathname.startsWith(`${href}/`)
  );

  return (
    <header className="sticky top-0 z-50 bg-surface-dark text-text-on-dark shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <Link
          href="/"
          aria-label="VNR Professional Accountants Home Page"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/images/logos/vnrlogo1.png"
            alt="VNR Professional Accountants Logo"
            width={150}
            height={50}
            className="h-9 w-auto flex-shrink-0 object-contain sm:h-11"
            priority
          />
          <span className="min-w-0 font-serif text-[10px] font-semibold leading-tight text-white sm:text-sm md:text-base">
            <span className="block sm:inline">Professional</span>{' '}
            <span className="block sm:inline">Accountants</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Main Navigation">
          {navLinks.slice(0, 2).map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
          <NavDropdown label="Risk & Estate" items={advisorOfferings} />
          {navLinks.slice(2).map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
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
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-w-0 items-center gap-2"
              >
                <Image
                  src="/images/logos/vnrlogo1.png"
                  alt="VNR Professional Accountants Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto flex-shrink-0 object-contain"
                />
                <span className="min-w-0 font-serif text-xs font-semibold leading-snug text-text-primary">
                  Professional Accountants
                </span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="flex-shrink-0">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.slice(0, 2).map((link) => (
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

              <div>
                <button
                  type="button"
                  onClick={() => setRiskEstateOpen((open) => !open)}
                  className={`flex w-full items-center justify-between rounded-lg p-3 text-base font-medium transition-colors hover:bg-slate-200 ${
                    isRiskEstateActive ? 'bg-slate-200' : ''
                  }`}
                  aria-expanded={isRiskEstateOpen}
                >
                  Risk & Estate
                  <ChevronDown className={`h-4 w-4 transition-transform ${isRiskEstateOpen ? 'rotate-180' : ''}`} />
                </button>
                {isRiskEstateOpen && (
                  <div className="ml-3 space-y-1 border-l border-slate-300 pl-3">
                    {advisorOfferings.map((offering) => (
                      <Link
                        key={offering.href}
                        href={offering.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg p-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-slate-200 hover:text-text-primary"
                        aria-current={pathname === offering.href ? 'page' : undefined}
                      >
                        {offering.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
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
