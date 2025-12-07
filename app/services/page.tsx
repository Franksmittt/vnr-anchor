import Link from 'next/link';
import { servicesData } from '@/data/services-data';
import { Check, ArrowRight, Scale, Building2, GitBranchPlus, FileText, UserCheck, Cloud, Gavel } from 'lucide-react';
import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ClientJourneySection from '@/components/ClientJourneySection';
import FaqAccordion from '@/components/FaqAccordion';
import CtaSection from '@/components/CtaSection';
import { servicesFaqs } from '@/data/services-faq-data';

const iconMap: { [key: string]: React.ReactElement } = {
  Scale: <Scale className="h-8 w-8 text-white" />,
  Building2: <Building2 className="h-8 w-8 text-white" />,
  GitBranchPlus: <GitBranchPlus className="h-8 w-8 text-white" />,
  FileText: <FileText className="h-8 w-8 text-white" />,
  UserCheck: <UserCheck className="h-8 w-8 text-white" />,
  Cloud: <Cloud className="h-8 w-8 text-white" />,
  Gavel: <Gavel className="h-8 w-8 text-white" />,
};

export const metadata = {
  title: 'Our Services | VNR Professional Accountants',
  description: 'Explore the comprehensive suite of services offered by VNR across South Africa, including expert tax advisory, business structuring, legacy planning, and financial reporting.',
};

const ServicesPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
  ];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-surface-light py-20 md:py-28 border-b border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <Breadcrumbs items={breadcrumbItems} className="flex justify-center text-slate-500" />
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Our Suite of Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-text-secondary">
            Integrated solutions designed to protect your assets, minimize tax, and facilitate sustainable growth. We provide the clarity and strategic guidance necessary for entrepreneurs across South Africa to navigate their financial journey with confidence. While our head office is located in Centurion, we serve clients nationwide.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col rounded-2xl bg-surface-dark p-8 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="mt-6 flex-grow text-text-on-dark/70">{service.subtitle}</p>
                <ul className="mt-6 space-y-3 pt-6 border-t border-slate-700">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <Check className="h-6 w-6 flex-shrink-0 text-brand-teal-light mr-3" />
                      <span className="text-text-on-dark/90">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientJourneySection />

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20 sm:py-28 max-w-4xl"> {/* EDITED PADDING */}
          <h2 className="font-serif text-3xl font-bold text-text-primary text-center mb-12"> {/* EDITED MARGIN */}
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={servicesFaqs} />
          </div>
        </div>
      </div>

      <CtaSection />

    </div>
  );
};

export default ServicesPage;