import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const vercelEnv = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;
  const isProduction = vercelEnv ? vercelEnv === 'production' : process.env.NODE_ENV === 'production';

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
        '/private/',
        // Block internal Next.js routes
        '/?*_rsc=',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}