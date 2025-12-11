import Link from 'next/link';
import { Scale, Building2, GitBranchPlus, BarChart3, Cloud, Gavel, ArrowRight, Users, FileText } from 'lucide-react';
import { servicesData } from '../data/services-data';
import AnimateOnScroll from './AnimateOnScroll';

const iconMap: { [key: string]: React.ElementType } = {
  Scale,
  Building2,
  GitBranchPlus,
  FileText,
  UserCheck: Users,
  Cloud,
  Gavel,
};

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-base font-semibold text-brand-blue tracking-wider uppercase">Our Capabilities</h2>
            <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              A Holistic Approach to Your Financial Legacy
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
              From company registration and trust formation to strategic tax advisory, VNR provides integrated services to empower South Africa’s top entrepreneurs.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Scale;
            return (
              <AnimateOnScroll key={service.slug} delay={`${index * 150}ms`}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block p-8 bg-surface-light rounded-2xl border border-slate-200 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2 h-full"
                >
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md border border-slate-100 transition-all duration-300 group-hover:bg-brand-teal group-hover:scale-110">
                      <Icon size={32} className="text-brand-blue transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base text-text-secondary">
                      {service.subtitle}
                    </p>
                    <div className="mt-6 font-semibold text-brand-teal flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;