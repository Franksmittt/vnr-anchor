import Link from 'next/link';
import { Scale, Building2, GitBranchPlus, BarChart3, Cloud, Gavel, ArrowRight, Users, FileText, CheckSquare } from 'lucide-react';
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
  CheckSquare,
};

interface ServicesSectionProps {
  limit?: number;
  compact?: boolean;
}

const ServicesSection = ({ limit, compact = false }: ServicesSectionProps) => {
  const services = limit ? servicesData.slice(0, limit) : servicesData;
  const sectionPadding = compact ? 'py-8 sm:py-10' : 'py-8 sm:py-10 lg:py-12';
  const shortTitle = (title: string) => title.split(':')[0];

  return (
    <section className={`overflow-hidden bg-white ${sectionPadding}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue sm:text-sm">
              Our Capabilities
            </h2>
            {!compact ? (
              <>
                <p className="mt-2 font-serif text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
                  A Holistic Approach to Your Financial Legacy
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:mt-6 sm:text-lg">
                  From company registration and trust formation to strategic tax advisory, VNR provides integrated
                  services to empower South Africa&apos;s entrepreneurs.
                </p>
              </>
            ) : (
              <p className="mt-2 text-base text-text-secondary">Core services for tax, compliance, and growth.</p>
            )}
          </div>
        </AnimateOnScroll>

        <div
          className={`grid grid-cols-1 ${
            compact
              ? 'mt-6 gap-3 sm:grid-cols-2 lg:grid-cols-4'
              : 'mt-6 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Scale;
            return (
              <AnimateOnScroll key={service.slug} delay={`${index * 100}ms`}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group block rounded-lg border border-slate-200 bg-surface-light transition-all duration-300 hover:bg-white hover:shadow-md ${
                    compact ? 'p-4' : 'h-full rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg sm:p-8'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-100 transition-colors group-hover:bg-brand-teal ${
                        compact ? 'h-10 w-10' : 'h-12 w-12 sm:h-14 sm:w-14'
                      }`}
                    >
                      <Icon
                        size={compact ? 20 : 28}
                        className="text-brand-blue transition-colors group-hover:text-white"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-serif font-semibold text-text-primary ${
                          compact ? 'text-sm leading-snug' : 'mt-0 text-lg sm:text-xl'
                        }`}
                      >
                        {compact ? shortTitle(service.title) : service.title}
                      </h3>
                      {!compact && (
                        <div className="mt-4 flex items-center text-sm font-semibold text-brand-teal opacity-0 transition-opacity group-hover:opacity-100 sm:mt-6 sm:text-base">
                          Let&apos;s Chat <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

        {compact && limit && limit < servicesData.length && (
          <div className="mt-5 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
