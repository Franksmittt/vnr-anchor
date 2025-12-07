import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '../data/team-data';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const TeamSection = () => {
  const featuredMembers = teamData.slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-base font-semibold text-brand-blue tracking-wider uppercase">Our Leadership Cadre</h2>
            <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              The Architects of Your Financial Legacy
            </p>
            <p className="mt-6 text-lg text-text-secondary">
              Meet our SAIPA-accredited experts dedicated to strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa's top entrepreneurs. While our head office is in Centurion, we serve clients across South Africa.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredMembers.map((member, index) => (
            <AnimateOnScroll key={member.slug} delay={`${index * 150}ms`}>
              <div className="group relative overflow-hidden rounded-2xl bg-surface-dark shadow-lg text-center h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <Image
                    className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-slate-700 transition-all duration-300 group-hover:ring-brand-blue-light"
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.title} at VNR Professional Accountants`} 
                    width={144}
                    height={144}
                  />
                  <div className="mt-6">
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base text-brand-blue-light">
                      {member.title}
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 translate-y-full transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <div className="flex items-center justify-center gap-x-6 bg-slate-900/80 p-4 backdrop-blur-sm">
                    <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors" aria-label={`${member.name}'s LinkedIn profile`}>
                      <Linkedin size={24} />
                    </Link>
                    <Link href={`mailto:${member.email}`} className="text-slate-300 hover:text-white transition-colors" aria-label={`Email ${member.name}`}>
                      <Mail size={24} />
                    </Link>
                    <Link href={`/team/${member.slug}`} className="text-slate-300 hover:text-white transition-colors" aria-label={`View full profile for ${member.name}`}>
                      <ArrowUpRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/team" className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors">
            Meet the Entire Team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;