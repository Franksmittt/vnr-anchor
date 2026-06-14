import { servicesData } from '@/data/services-data';
import { notFound } from 'next/navigation';
import ServiceHero from '@/components/ServiceHero';
import LeadExpertCard from '@/components/LeadExpertCard';
import RelatedServices from '@/components/RelatedServices';
import CtaSection from '@/components/CtaSection';
import { teamData } from '@/data/team-data';
import type { Metadata } from 'next';
import FaqAccordion from '@/components/FaqAccordion';
import { generateMetadata as generateSEOMetadata, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

interface ServicePageParams {
  slug: string;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<ServicePageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return { 
      title: 'Service Not Found | VNR', 
      description: 'The requested service could not be found.',
      robots: { index: false, follow: false },
    };
  }
  
  return generateSEOMetadata({
    title: service.title,
    description: service.subtitle,
    path: `/services/${slug}`,
    keywords: [
      service.title.toLowerCase(),
      ...service.details.map(d => d.toLowerCase()),
      'South Africa',
    ],
    image: service.imageUrl,
    type: 'website',
  });
}

const ServicePage = async ({ params }: { params: Promise<ServicePageParams> }) => { 
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const expertBio = teamData.find(m => m.slug === service.leadExpert.slug)?.intro || '';

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  // Generate structured data
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.subtitle,
    url: `${SITE_URL}/services/${service.slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(b => ({ name: b.name, url: b.href }))
  );

  const serviceUrl = `${SITE_URL}/services/${service.slug}`;
  const faqSchema = service.faqs?.length ? generateFAQSchema(service.faqs, serviceUrl) : null;

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
        />
      )}
      
      <ServiceHero 
        title={service.title}
        subtitle={service.subtitle}
        imageUrl={service.imageUrl}
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
            
            <article className="lg:col-span-2 space-y-8">
              <section 
                className="prose prose-sm sm:prose-lg max-w-none prose-h2:font-serif prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:text-text-primary prose-h2:tracking-tight prose-h3:font-serif prose-h3:text-brand-blue-dark prose-p:text-text-secondary"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
              {service.faqs && service.faqs.length > 0 && (
                <section>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">Frequently Asked Questions</h2>
                  <div className="mt-4 border-t border-slate-200">
                    <FaqAccordion faqs={service.faqs} />
                  </div>
                </section>
              )}
            </article>

            <aside className="space-y-6">
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