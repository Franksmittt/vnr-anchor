import { insightsData } from '@/data/insights-data';
import { notFound } from 'next/navigation';
import ArticleHero from '@/components/ArticleHero';
import KeyTakeaways from '@/components/KeyTakeaways';
import CtaSection from '@/components/CtaSection';
import LeadExpertCard from '@/components/LeadExpertCard';
import { teamData } from '@/data/team-data';
import type { Metadata } from 'next';
import RelatedServices from '@/components/RelatedServices';

interface InsightPageParams {
  slug: string;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: InsightPageParams }): Promise<Metadata> {
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: 'Insight Not Found | VNR', description: 'The requested insight could not be found.' };
  }
  return {
    title: `${article.title} | VNR Insights`,
    description: article.excerpt,
  };
}

const InsightPage = async ({ params }: { params: InsightPageParams }) => { 
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const expertBio = teamData.find(m => m.slug === article.author.slug)?.intro || '';

  return (
    <>
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
      
      {/* Suggesting a default `currentSlug` to avoid breaking RelatedServices */}
      <RelatedServices currentSlug="tax-advisory" />
      <CtaSection />
    </>
  );
};

export default InsightPage;