import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const AuthorityBar = () => {
  return (
    <div className="bg-surface-light py-8 sm:py-12">
      <AnimateOnScroll className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          <p className="sm:col-span-1 text-center sm:text-left text-xs sm:text-sm font-semibold text-text-secondary uppercase tracking-wider">
            Accredited & Trusted By
          </p>
          <div className="col-span-1 sm:col-span-1 md:col-span-3 flex flex-wrap justify-center sm:justify-around items-center gap-4 sm:gap-6 md:gap-8">
            <Image 
              src="/images/logos/SAIPA-LOGO-Full-Name-HighRes.jpg"
              alt="SAIPA Logo" 
              width={120} 
              height={40} 
              className="h-8 sm:h-10 w-auto object-contain" 
            />
            <Image 
              src="/images/logos/Sait-logo.png" 
              alt="SAIT Logo" 
              width={90} 
              height={40} 
              className="h-8 sm:h-10 w-auto object-contain" 
            />
            <Image 
              src="/images/logos/Sage-Logo.png" 
              alt="Sage Platinum Partner Logo" 
              width={130} 
              height={40} 
              className="h-8 sm:h-10 w-auto object-contain" 
            />
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default AuthorityBar;