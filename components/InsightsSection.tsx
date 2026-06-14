import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '../data/insights-data';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface InsightsSectionProps {
  limit?: number;
  compact?: boolean;
}

const InsightsSection = ({ limit = 4, compact = false }: InsightsSectionProps) => {
  const articles = insightsData.slice(0, limit);
  const sectionPadding = compact ? 'py-8 sm:py-10' : 'py-8 sm:py-10 lg:py-12';

  if (compact) {
    return (
      <section className={`bg-surface-light ${sectionPadding}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue sm:text-sm">
              Latest Insights
            </h2>
            <p className="mt-2 text-base text-text-secondary">Practical guidance on tax, compliance, and growth.</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {articles.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-shadow hover:shadow-md sm:p-4"
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-20">
                  <Image
                    src={insight.imageUrl}
                    alt={insight.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-brand-blue">{insight.category}</p>
                  <p className="mt-1 line-clamp-2 text-sm font-semibold text-text-primary group-hover:text-brand-blue">
                    {insight.title}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">{insight.date}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Browse all insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const featuredArticle = insightsData.find((insight) => insight.featured);
  const otherArticles = insightsData
    .filter((insight) => !insight.featured || (featuredArticle && insight.slug !== featuredArticle.slug))
    .slice(0, limit);

  return (
    <section className={`bg-white ${sectionPadding}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue sm:text-base">
            Latest Insights from VNR Professional Accountants
          </h2>
          <p className="mt-2 font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Navigating the Financial Landscape with Expert Perspectives
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:mt-6 sm:text-lg">
            Stay ahead with expert insights on tax advisory, business structuring, and wealth planning.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-3">
          {featuredArticle && (
            <Link
              key={featuredArticle.slug}
              href={`/insights/${featuredArticle.slug}`}
              className="group block lg:col-span-2"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-brand-blue/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-44 w-full sm:h-56 md:h-72">
                  <Image
                    src={featuredArticle.imageUrl}
                    alt={`${featuredArticle.title} by ${featuredArticle.author.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-xs font-medium text-brand-blue sm:text-sm">{featuredArticle.category}</p>
                    <p className="mt-2 text-xl font-bold text-gray-900 group-hover:text-brand-blue sm:text-2xl md:text-3xl">
                      {featuredArticle.title}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm text-gray-600 sm:text-base">{featuredArticle.excerpt}</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    {featuredArticle.author.name} · {featuredArticle.date}
                  </p>
                </div>
              </div>
            </Link>
          )}

          <div className="flex h-full flex-col justify-between lg:col-span-1">
            {otherArticles.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block flex-grow">
                <div className="flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-4 sm:p-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                    <Image src={insight.imageUrl} alt={insight.title} fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-brand-blue">{insight.category}</p>
                    <p className="mt-1 line-clamp-2 text-base font-semibold text-gray-900 group-hover:text-brand-blue">
                      {insight.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <Link href="/insights" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark sm:text-base">
            Discover More Insights <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
