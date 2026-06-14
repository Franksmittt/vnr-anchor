import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '../data/team-data';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface TeamSectionProps {
  limit?: number;
  compact?: boolean;
}

const TeamSection = ({ limit = 3, compact = false }: TeamSectionProps) => {
  const featuredMembers = teamData.slice(0, limit);
  const sectionPadding = compact ? 'py-8 sm:py-10' : 'py-8 sm:py-10 lg:py-12';

  return (
    <section id="team" className={`bg-white ${sectionPadding}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className={`mx-auto ${compact ? 'max-w-2xl text-center' : 'max-w-3xl text-center'}`}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue sm:text-sm">
              Our Leadership Team
            </h2>
            {!compact && (
              <>
                <p className="mt-2 font-serif text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
                  The Architects of Your Financial Legacy
                </p>
                <p className="mt-4 text-base text-text-secondary sm:mt-6 sm:text-lg">
                  Meet our SAIPA-accredited experts dedicated to strategic tax advisory, business structuring, and
                  intergenerational wealth planning for South Africa&apos;s top entrepreneurs.
                </p>
              </>
            )}
            {compact && (
              <p className="mt-2 text-base text-text-secondary">
                SAIPA-accredited partners ready to support your business.
              </p>
            )}
          </div>
        </AnimateOnScroll>

        <div
          className={`grid grid-cols-1 ${
            compact ? 'mt-6 gap-4 sm:grid-cols-2' : 'mt-6 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {featuredMembers.map((member, index) => (
            <AnimateOnScroll key={member.slug} delay={`${index * 100}ms`}>
              {compact ? (
                <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-surface-light p-4">
                  <Image
                    className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-brand-blue/20"
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.title} at VNR Professional Accountants`}
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                  <div className="min-w-0 text-left">
                    <h3 className="font-serif text-base font-semibold text-text-primary">{member.name}</h3>
                    <p className="mt-0.5 text-sm text-text-secondary">{member.title}</p>
                  </div>
                </div>
              ) : (
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-surface-dark text-center shadow-lg">
                  <div className="flex-grow p-6 sm:p-8">
                    <Image
                      className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-slate-700 transition-all duration-300 group-hover:ring-brand-blue-light sm:h-36 sm:w-36"
                      src={member.imageUrl}
                      alt={`${member.name}, ${member.title} at VNR Professional Accountants`}
                      width={144}
                      height={144}
                      loading="lazy"
                    />
                    <div className="mt-4 sm:mt-6">
                      <h3 className="font-serif text-lg font-semibold text-white sm:text-xl">{member.name}</h3>
                      <p className="mt-1 text-sm text-brand-blue-light sm:text-base">{member.title}</p>
                    </div>
                  </div>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>

        {compact && (
          <div className="mt-5 text-center">
            <Link
              href="/#about-us"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Meet the full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
