import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const partnerLogos = [
  {
    src: '/images/logos/saipa-logo.jpg',
    alt: 'SAIPA, South African Institute of Professional Accountants',
    width: 160,
    height: 52,
  },
  {
    src: '/images/logos/dext-logo.png',
    alt: 'Dext',
    width: 120,
    height: 40,
  },
  {
    src: '/images/logos/sage-logo.png',
    alt: 'Sage Platinum Partner',
    width: 120,
    height: 40,
  },
];

const AuthorityBar = () => {
  return (
    <div className="bg-surface-light py-6 sm:py-8">
      <AnimateOnScroll className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-secondary sm:col-span-1 sm:text-left sm:text-sm">
            Accredited & Trusted By
          </p>
          <div className="col-span-1 flex flex-wrap items-center justify-center gap-3 sm:col-span-1 sm:justify-around md:col-span-3 md:gap-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-12 items-center justify-center rounded-md bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200/80 sm:h-14 sm:px-5"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-7 w-auto max-w-[120px] object-contain sm:h-8 sm:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default AuthorityBar;
