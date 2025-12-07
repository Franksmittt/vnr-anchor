import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '../../data/team-data';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Breadcrumbs from '@/components/Breadcrumbs';
import TeamValuesSection from '@/components/TeamValuesSection';
import CareersSection from '@/components/CareersSection';
import AuthorityBar from '@/components/AuthorityBar';
import CtaSection from '@/components/CtaSection';

export const metadata = {
  title: 'Our Leadership | VNR Professional Accountants',
  description: 'Meet the team of seasoned financial and tax experts at VNR. Our leadership is dedicated to providing strategic foresight and meticulous guidance for your wealth across South Africa. While our head office is in Centurion, we serve clients nationwide.',
};

const TeamPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Leadership', href: '/team' },
  ];
  return (
    <div className="bg-surface-light">
      {/* Hero Section */}
      <section className="relative bg-surface-dark text-white overflow-hidden">
        <Image
          src="/images/backgrounds/team-hero-bg.jpg"
          alt="VNR Professional Accountants expert team environment"
          fill
          priority
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="relative container mx-auto px-6 py-20 md:py-28 text-center"> {/* EDITED PADDING */}
          <AnimateOnScroll>
            <Breadcrumbs items={breadcrumbItems} className="flex justify-center" />
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Architects of Your Legacy
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-text-on-dark/80">
              Our strength lies not in numbers, but in the focused expertise of seasoned professionals committed to the financial success and security of our clients.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Leadership Cadre Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member, index) => (
              <AnimateOnScroll key={member.slug} delay={`${index * 150}ms`}>
                <div className="group relative text-center bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  <div className="p-8 flex-grow">
                    <Image
                      className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-slate-200 transition-all duration-300 group-hover:ring-brand-blue"
                      src={member.imageUrl}
                      alt={member.name}
                      width={144}
                      height={144}
                    />
                    <div className="mt-6">
                      <h3 className="font-serif text-xl font-semibold text-text-primary">{member.name}</h3>
                      <p className="mt-1 text-base text-brand-blue font-medium">{member.title}</p>
                    </div>
                    <p className="mt-4 text-text-secondary text-sm h-20">{member.intro}</p>
                  </div>
                  <div className="border-t border-slate-100 p-4 flex items-center justify-center gap-x-6">
                    <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin size={22} />
                    </Link>
                    <Link href={`mailto:${member.email}`} className="text-slate-400 hover:text-brand-blue transition-colors" aria-label={`Email ${member.name}`}>
                      <Mail size={22} />
                    </Link>
                    <Link href={`/team/${member.slug}`} className="text-slate-400 hover:text-brand-blue transition-colors" aria-label={`View profile for ${member.name}`}>
                      <ArrowUpRight size={22} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      <TeamValuesSection />
      <AuthorityBar />
      <CareersSection />
      <CtaSection />

    </div>
  );
};

export default TeamPage;