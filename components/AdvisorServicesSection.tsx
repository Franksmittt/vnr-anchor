import Link from 'next/link';
import { ArrowRight, FileSignature, ShieldCheck } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const advisorOfferings = [
  {
    href: '/anchor-wealth/independent-advisor',
    title: 'Independent Advisor Desk',
    description: 'Life cover, succession planning, and short-term insurance reviews with an independent advisor for VNR clients.',
    icon: ShieldCheck,
  },
  {
    href: '/anchor-wealth/estate-will-clinic',
    title: 'Estate & Will Clinic',
    description: 'Complimentary will drafting, executor appointments, and estate planning support when VNR is appointed.',
    icon: FileSignature,
  },
];

const AdvisorServicesSection = () => {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue sm:text-sm">
              Personal Risk & Estate Planning
            </h2>
            <p className="mt-2 text-base text-text-secondary">
              Life, risk, and legacy support for VNR clients beyond day-to-day accounting.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {advisorOfferings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <AnimateOnScroll key={offering.href} delay={`${index * 100}ms`}>
                <Link
                  href={offering.href}
                  className="group flex h-full flex-col rounded-lg border border-slate-200 bg-surface-light p-5 transition-colors hover:border-brand-blue/40 hover:bg-white sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-text-primary group-hover:text-brand-blue">
                    {offering.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm text-text-secondary">{offering.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvisorServicesSection;
