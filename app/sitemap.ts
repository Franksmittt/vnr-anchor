import { MetadataRoute } from 'next'
import { servicesData, Service } from '@/data/services-data';
import { insightsData, Article } from '@/data/insights-data';
import { teamData, TeamMember } from '@/data/team-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vnr.co.za';
  const now = new Date();

  // High-priority static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/anchor-wealth`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/team`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources/expat-tax-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/process-flow`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service pages - high priority for business
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service: Service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: service.slug === 'secretarial-services' || service.slug === 'tax-advisory' ? 0.9 : 0.7,
  }));

  // Insight articles - use actual date if available
  const insightRoutes: MetadataRoute.Sitemap = insightsData.map((insight: Article) => {
    // Try to parse date from article, fallback to now
    let lastModified = now;
    try {
      if (insight.date) {
        const parsedDate = new Date(insight.date);
        if (!isNaN(parsedDate.getTime())) {
          lastModified = parsedDate;
        }
      }
    } catch {
      // Keep default
    }
    
    return {
      url: `${siteUrl}/insights/${insight.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: insight.featured ? 0.8 : 0.7,
    };
  });

  // Team member pages
  const teamRoutes: MetadataRoute.Sitemap = teamData.map((member: TeamMember) => ({
    url: `${siteUrl}/team/${member.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...insightRoutes,
    ...teamRoutes,
  ];
}