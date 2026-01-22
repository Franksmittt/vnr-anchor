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

interface InsightPageParams {
  slug: string;
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
      'Centurion',
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
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vnr.co.za'}/team/${article.author.slug}`,
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vnr.co.za'}/insights/${slug}`,
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

      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <article className="lg:col-span-2 space-y-12">
              <KeyTakeaways takeaways={article.takeaways} />
              
              <section 
                className="prose prose-lg max-w-none prose-h3:font-serif prose-h3:text-brand-blue-dark prose-p:text-text-secondary"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            <aside className="space-y-8">
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