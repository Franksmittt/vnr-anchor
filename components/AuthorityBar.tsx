import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const AuthorityBar = () => {
  return (
    <div className="bg-surface-light py-8">
      <AnimateOnScroll className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <p className="md:col-span-1 text-center md:text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">
            Accredited & Trusted By
          </p>
          <div className="col-span-2 md:col-span-3 flex justify-around items-center gap-8">
            <Image 
              src="/images/logos/SAIPA-LOGO-Full-Name-HighRes.jpg"
              alt="SAIPA Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto object-contain" 
            />
            <Image 
              src="/images/logos/Sait-logo.png" 
              alt="SAIT Logo" 
              width={90} 
              height={40} 
              className="h-10 w-auto object-contain" 
            />
            <Image 
              src="/images/logos/Sage-Logo.png" 
              alt="Sage Platinum Partner Logo" 
              width={130} 
              height={40} 
              className="h-10 w-auto object-contain" 
            />
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default AuthorityBar;