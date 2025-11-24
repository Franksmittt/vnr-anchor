import { servicesData } from '@/data/services-data';
import { notFound } from 'next/navigation';
import ServiceHero from '@/components/ServiceHero';
import LeadExpertCard from '@/components/LeadExpertCard';
import RelatedServices from '@/components/RelatedServices';
import CtaSection from '@/components/CtaSection';
import { teamData } from '@/data/team-data';
import type { Metadata } from 'next';
import FaqAccordion from '@/components/FaqAccordion';

interface ServicePageParams {
  slug: string;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: ServicePageParams }): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: 'Service Not Found | VNR', description: 'The requested service could not be found.' };
  }
  return {
    title: `${service.title} | VNR Services`,
    description: service.subtitle,
  };
}

const ServicePage = async ({ params }: { params: ServicePageParams }) => { 
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const expertBio = teamData.find(m => m.slug === service.leadExpert.slug)?.intro || '';

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <ServiceHero 
        title={service.title}
        subtitle={service.subtitle}
        imageUrl={service.imageUrl}
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <article className="lg:col-span-2 space-y-12">
              <section 
                className="prose prose-lg max-w-none prose-h2:font-serif prose-h2:text-3xl prose-h2:font-bold prose-h2:text-text-primary prose-h2:tracking-tight prose-h3:font-serif prose-h3:text-brand-blue-dark prose-p:text-text-secondary"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
              {service.faqs && service.faqs.length > 0 && (
                <section>
                  <h2 className="font-serif text-3xl font-bold text-text-primary tracking-tight">Frequently Asked Questions</h2>
                  <div className="mt-6 border-t border-slate-200">
                    <FaqAccordion faqs={service.faqs} />
                  </div>
                </section>
              )}
            </article>

            <aside className="space-y-8">
              <LeadExpertCard
                name={service.leadExpert.name}
                title={service.leadExpert.title}
                imageUrl={service.leadExpert.imageUrl}
                slug={service.leadExpert.slug}
              >
                {expertBio}
              </LeadExpertCard>
            </aside>

          </div>
        </div>
      </div>

      <RelatedServices currentSlug={service.slug} />
      <CtaSection />
    </>
  );
};

export default ServicePage;