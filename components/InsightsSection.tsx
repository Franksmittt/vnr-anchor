import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '../data/insights-data';
import AnimateOnScroll from './AnimateOnScroll';

const InsightsSection = () => {
  const featuredArticle = insightsData.find(insight => insight.featured);
  const otherArticles = insightsData
    .filter(insight => !insight.featured || (featuredArticle && insight.slug !== featuredArticle.slug))
    .slice(0, 4);

  return (
    <section className="bg-white py-20 sm:py-28"> {/* EDITED PADDING */}
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Latest Insights from VNR Professional Accountants</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Navigating the Financial Landscape with Expert Perspectives
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Stay ahead with expert insights on tax advisory, business structuring, and wealth planning from VNR Professional Accountants in Centurion, Gauteng, also serving Alberton.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {featuredArticle && (
            <Link 
              key={featuredArticle.slug} 
              href={`/insights/${featuredArticle.slug}`} 
              className="group block lg:col-span-2"
            >
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-blue-50 h-full">
                <div className="relative w-full h-72 md:h-96">
                  <Image
                    src={featuredArticle.imageUrl}
                    alt={`${featuredArticle.title} by ${featuredArticle.author.name}, VNR Professional Accountants, Centurion, Alberton`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-blue-700">{featuredArticle.category}</p>
                    <p className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700">
                      {featuredArticle.title}
                    </p>
                    <p className="mt-3 text-base text-gray-600 line-clamp-3">
                      {featuredArticle.excerpt === 'As an entrepreneur in South Africa, it’s easy to view taxation as a compliance hurdle. This guide reframes tax as a powerful strategic lever for protecting assets, fueling growth, and building sustainable wealth.' 
                        ? 'Discover how tax planning and SARS compliance for SMEs in South Africa can protect assets and fuel growth with VNR Professional Accountants.'
                        : featuredArticle.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src={featuredArticle.author.imageUrl}
                        alt={`${featuredArticle.author.name}, expert at VNR Professional Accountants in Centurion`}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{featuredArticle.author.name}</p>
                      <p className="text-sm text-gray-500">{featuredArticle.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="lg:col-span-1 flex flex-col justify-between h-full">
            {otherArticles.map((insight) => (
              <Link 
                key={insight.slug} 
                href={`/insights/${insight.slug}`} 
                className="group block flex-grow" 
              >
                <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-white h-full">
                  <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={insight.imageUrl}
                      alt={`${insight.title} thumbnail by ${insight.author.name}, VNR Professional Accountants, Alberton`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-blue-600">{insight.category}</p>
                    <p className="mt-1 text-base font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2">
                      {insight.title}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <Image
                        className="h-6 w-6 rounded-full object-cover mr-2"
                        src={insight.author.imageUrl}
                        alt={`${insight.author.name} small headshot at VNR Professional Accountants, Centurion`}
                        width={24}
                        height={24}
                      />
                      <span>{insight.author.name}</span>
                      <span className="ml-2">| {insight.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/insights" className="text-base font-semibold text-blue-600 hover:text-blue-800">
            Explore All Tax and Business Insights <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;