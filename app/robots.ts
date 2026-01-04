import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Determine environment context
  const isProduction = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vnr.co.za';

  // Defensive posture for non-production environments
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/', // TOTAL BLOCK for staging/dev
      },
      // Do not expose sitemap in non-prod
    };
  }

  // Permissive posture for production
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        // Block internal Next.js routes
        '/?*_rsc=',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}