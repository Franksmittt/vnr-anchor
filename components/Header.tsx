'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { advisorOfferings } from './AdvisorServicesSection';

const riskEstatePaths = advisorOfferings.map((offering) => offering.href);

const isNavLinkActive = (pathname: string, href: string, exact = false) => {
  if (exact) {
    return pathname === href;
  }

  return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
};

const NavItem = ({
  href,
  children,
  exact = false,
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = isNavLinkActive(pathname, href, exact);

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

const NavDropdown = ({ label, items }: { label: string; items: readonly { href: string; title: string }[] }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = items.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearCloseTimer();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
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
        <div className="absolute left-0 top-full z-50 min-w-[15rem] pt-2">
          <div
            role="menu"
            className="rounded-lg border border-white/10 bg-surface-dark py-1 shadow-xl"
          >
            {items.map((item) => {
              const itemActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    itemActive
                      ? 'bg-brand-teal/25 text-white'
                      : 'text-text-on-dark/90 hover:bg-brand-teal/20 hover:text-white'
                  }`}
                  aria-current={itemActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const navLinks = [
  { href: '/', label: 'Home', exact: true },
  { href: '/services', label: 'Services' },
  { href: '/anchor-wealth', label: 'Anchor Wealth', exact: true },
  { href: '/insights', label: 'Insights' },
] as const;

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRiskEstateOpen, setRiskEstateOpen] = useState(false);
  const pathname = usePathname();
  const isRiskEstateActive = riskEstatePaths.some(
    (href) => pathname === href || pathname.startsWith(`${href}/`)
  );

  useEffect(() => {
    if (isMobileMenuOpen && isRiskEstateActive) {
      setRiskEstateOpen(true);
    }
  }, [isMobileMenuOpen, isRiskEstateActive]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const mobileLinkClass = (href: string, exact = false) =>
    `rounded-lg p-3 text-base font-medium transition-colors ${
      isNavLinkActive(pathname, href, exact)
        ? 'bg-brand-blue/10 text-brand-blue-dark'
        : 'hover:bg-slate-200'
    }`;

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
            <NavItem key={link.href} href={link.href} exact={'exact' in link ? link.exact : false}>
              {link.label}
            </NavItem>
          ))}
          <NavDropdown label="Risk & Estate" items={advisorOfferings} />
          {navLinks.slice(2).map((link) => (
            <NavItem key={link.href} href={link.href} exact={'exact' in link ? link.exact : false}>
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
          onClick={closeMobileMenu}
        >
          <div
            className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-surface-light p-6 text-text-primary shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                onClick={closeMobileMenu}
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
              <button onClick={closeMobileMenu} aria-label="Close menu" className="flex-shrink-0">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-1 flex-col overflow-y-auto" aria-label="Mobile Navigation">
              <div className="space-y-1">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={mobileLinkClass(link.href, 'exact' in link ? link.exact : false)}
                    aria-current={isNavLinkActive(pathname, link.href, 'exact' in link ? link.exact : false) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}

                <div>
                  <button
                    type="button"
                    onClick={() => setRiskEstateOpen((open) => !open)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 text-base font-medium transition-colors ${
                      isRiskEstateActive
                        ? 'bg-brand-blue/10 text-brand-blue-dark'
                        : 'hover:bg-slate-200'
                    }`}
                    aria-expanded={isRiskEstateOpen}
                  >
                    Risk & Estate
                    <ChevronDown className={`h-4 w-4 transition-transform ${isRiskEstateOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isRiskEstateOpen && (
                    <div className="ml-3 space-y-1 border-l border-slate-300 pl-3">
                      {advisorOfferings.map((offering) => {
                        const offeringActive =
                          pathname === offering.href || pathname.startsWith(`${offering.href}/`);

                        return (
                          <Link
                            key={offering.href}
                            href={offering.href}
                            onClick={closeMobileMenu}
                            className={`block rounded-lg p-2.5 text-sm font-medium transition-colors ${
                              offeringActive
                                ? 'bg-brand-blue/10 text-brand-blue-dark'
                                : 'text-text-secondary hover:bg-slate-200 hover:text-text-primary'
                            }`}
                            aria-current={offeringActive ? 'page' : undefined}
                          >
                            {offering.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={mobileLinkClass(link.href, 'exact' in link ? link.exact : false)}
                    aria-current={isNavLinkActive(pathname, link.href, 'exact' in link ? link.exact : false) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-2 pt-6">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex w-full items-center justify-center rounded-md bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors"
                >
                  Get in Touch
                </Link>
                <a
                  href="tel:0126531633"
                  className="inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Today
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
