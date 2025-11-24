import { MetadataRoute } from 'next'
import { servicesData, Service } from '@/data/services-data';
import { insightsData, Article } from '@/data/insights-data';
import { teamData, TeamMember } from '@/data/team-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Use environment variable

  const staticRoutes = [
    '/',
    '/services',
    '/team',
    '/insights',
    '/contact',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service: Service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const insightRoutes = insightsData.map((insight: Article) => ({
    url: `${siteUrl}/insights/${insight.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const teamRoutes = teamData.map((member: TeamMember) => ({
    url: `${siteUrl}/team/${member.slug}`,
    lastModified: new Date(),
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