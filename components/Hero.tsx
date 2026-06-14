import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const heroContent = {
  imageUrl: '/images/slider/hero_2.png',
  altText:
    'VNR Professional Accountants team providing tax advisory and business structuring across South Africa.',
  headline: 'Clear accounting. Confident decisions.',
  description:
    'SAIPA-accredited tax, compliance, payroll, and business advisory for entrepreneurs across South Africa — without the overwhelm.',
  primaryCta: { text: 'Explore Services', href: '/services' },
  secondaryCta: { text: 'Get in Touch', href: '/contact' },
  accreditation: 'SAIPA-Accredited Tax and Accounting Experts',
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden text-white sm:min-h-[480px] lg:min-h-[520px]">
      <Image
        src={heroContent.imageUrl}
        alt={heroContent.altText}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-800/50" />

      <div className="relative z-10 container mx-auto px-4 py-8 sm:px-6 sm:py-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heroContent.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base text-text-on-dark/90 sm:text-lg">
            {heroContent.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-block rounded-md bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-blue-light focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-surface-dark sm:text-base"
            >
              {heroContent.primaryCta.text}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-block rounded-md border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-base"
            >
              {heroContent.secondaryCta.text}
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-text-on-dark/80 sm:text-sm">
            <ShieldCheck size={16} className="text-brand-teal" />
            <span>{heroContent.accreditation}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
