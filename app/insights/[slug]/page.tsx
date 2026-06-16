import { insightsData } from '@/data/insights-data';
import { notFound } from 'next/navigation';
import ArticleHero from '@/components/ArticleHero';
import KeyTakeaways from '@/components/KeyTakeaways';
import CtaSection from '@/components/CtaSection';
import LeadExpertCard from '@/components/LeadExpertCard';
import { teamData } from '@/data/team-data';
import type { Metadata } from 'next';
import RelatedServices from '@/components/RelatedServices';
import { generateMetadata as generateSEOMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

interface InsightPageParams {
  slug: string;
}

function getPrimaryServiceLink(category: string): { href: string; label: string } {
  const normalized = category.toLowerCase();
  if (normalized.includes('tax')) return { href: '/services/tax-advisory', label: 'Tax Advisory Services' };
  if (normalized.includes('compliance')) return { href: '/services/secretarial-services', label: 'Secretarial and Compliance Services' };
  if (normalized.includes('technology')) return { href: '/services/cloud-accounting', label: 'Cloud Accounting Services' };
  if (normalized.includes('legacy')) return { href: '/services/legacy-planning', label: 'Legacy Planning Services' };
  if (normalized.includes('growth')) return { href: '/services/business-structuring', label: 'Business Structuring Services' };
  return { href: '/services', label: 'Our Services' };
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<InsightPageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) {
    return { 
      title: 'Insight Not Found | VNR', 
      description: 'The requested insight could not be found.',
      robots: { index: false, follow: false },
    };
  }
  
  // Parse date for publishedTime
  let publishedTime: string | undefined;
  try {
    if (article.date) {
      const parsedDate = new Date(article.date);
      if (!isNaN(parsedDate.getTime())) {
        publishedTime = parsedDate.toISOString();
      }
    }
  } catch {
    // Keep undefined
  }
  
  return generateSEOMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${slug}`,
    keywords: [
      article.category.toLowerCase(),
      'tax advice',
      'accounting',
      'South Africa',
    ],
    image: article.imageUrl,
    type: 'article',
    publishedTime,
    authors: [article.author.name],
  });
}

const InsightPage = async ({ params }: { params: Promise<InsightPageParams> }) => { 
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) notFound();

  const expertBio = teamData.find(m => m.slug === article.author.slug)?.intro || '';
  const primaryService = getPrimaryServiceLink(article.category);

  // Generate structured data
  let publishedTime: string | undefined;
  try {
    if (article.date) {
      const parsedDate = new Date(article.date);
      if (!isNaN(parsedDate.getTime())) {
        publishedTime = parsedDate.toISOString();
      }
    }
  } catch {
    // Keep undefined
  }

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    image: article.imageUrl,
    publishedTime,
    author: {
      name: article.author.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/insights/${slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: article.title, url: `/insights/${slug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      
      <ArticleHero article={article} />

      <div className="bg-white py-8 text-text-primary sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            
            <article className="space-y-8 lg:col-span-2">
              <KeyTakeaways takeaways={article.takeaways} />

              <section className="rounded-xl border border-slate-200 bg-surface-light p-4 sm:p-5">
                <p className="text-sm text-slate-700">
                  Reviewed by{' '}
                  <span className="font-semibold text-brand-blue">
                    {article.author.name}
                  </span>{' '}
                  ({article.author.title}). Last reviewed for accuracy: {article.date}.
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Need direct support? Start with{' '}
                  <a className="font-semibold text-brand-blue hover:underline" href={primaryService.href}>
                    {primaryService.label}
                  </a>
                  .
                </p>
              </section>
              
              <section
                className="max-w-none text-base leading-relaxed text-slate-700 [&_a]:font-semibold [&_a]:text-brand-blue [&_a]:hover:underline [&_em]:text-slate-700 [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-slate-800 [&_li]:text-slate-700 [&_ol]:mb-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_p]:leading-relaxed [&_p]:text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-800 [&_ul]:mb-6 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            <aside className="space-y-6">
              <LeadExpertCard
                name={article.author.name}
                title={article.author.title}
                imageUrl={article.author.imageUrl}
                slug={article.author.slug}
              >
                {expertBio}
              </LeadExpertCard>
            </aside>

          </div>
        </div>
      </div>
      
      {/* No "current" service on article pages; exclude none so we show 2 relevant services */}
      <RelatedServices currentSlug="" />
      <CtaSection />
    </>
  );
};

export default InsightPage;