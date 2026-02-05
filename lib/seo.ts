/**
 * SEO Utility Functions
 * Comprehensive SEO helpers for Next.js App Router
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vnr.co.za';
const SITE_NAME = 'VNR Professional Accountants';
const DEFAULT_DESCRIPTION = "Your premier partner in strategic tax advisory, business structuring, and intergenerational wealth planning for South Africa's leading families and businesses.";

/**
 * Ensures image URL is absolute for JSON-LD and Open Graph.
 */
function ensureAbsoluteImageUrl(image: string | undefined): string {
  if (!image) return `${BASE_URL}/images/og-default.jpg`;
  if (image.startsWith('http://') || image.startsWith('https://')) return image;
  const path = image.startsWith('/') ? image : `/${image}`;
  return `${BASE_URL}${path}`;
}

/**
 * Constructs a canonical URL with proper trailing slash handling
 * Ensures consistency between next.config.js trailingSlash setting and canonical tags
 */
export function constructCanonicalUrl(path: string = ''): string {
  // Clean the input path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Policy: No trailing slash (Next.js default)
  // Change to true if next.config.js has trailingSlash: true
  const FORCE_TRAILING_SLASH = false;
  
  if (cleanPath === '') {
    return `${BASE_URL}/`;
  }
  
  if (FORCE_TRAILING_SLASH) {
    return `${BASE_URL}/${cleanPath.replace(/\/$/, '')}/`;
  } else {
    return `${BASE_URL}/${cleanPath.replace(/\/$/, '')}`;
  }
}

/**
 * Generates comprehensive metadata object for Next.js
 */
export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): {
  title: string;
  description: string;
  keywords?: string[];
  alternates: {
    canonical: string;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    type: string;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images?: string[];
  };
  robots?: {
    index: boolean;
    follow: boolean;
    googleBot?: {
      index: boolean;
      follow: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number;
    };
  };
} {
  const canonical = constructCanonicalUrl(path);
  const ogImage = ensureAbsoluteImageUrl(image);
  
  const defaultKeywords = [
    'VNR Professional Accountants',
    'tax advisory South Africa',
    'business structuring',
    'secretarial services',
    'financial reporting',
    'estate planning',
    'tax consultant',
    'SARS compliance',
    'CIPC services',
    'Anchor Capital',
    'wealth management',
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords].filter(Boolean);
  
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: allKeywords.length > 0 ? allKeywords : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors.length > 0 && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generates Article structured data (JSON-LD)
 */
export function generateArticleSchema({
  title,
  description,
  image,
  publishedTime,
  modifiedTime,
  author,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: {
    name: string;
    url?: string;
  };
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${BASE_URL}/images/og-default.jpg`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: author
      ? {
          '@type': 'Person',
          name: author.name,
          ...(author.url && { url: author.url }),
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logos/vnrlogo.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generates Service structured data (JSON-LD)
 */
export function generateServiceSchema({
  name,
  description,
  provider,
  areaServed,
  url,
}: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'AccountingService',
      name: provider || SITE_NAME,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1022 Saxby Avenue, Eldoraigne',
        addressLocality: 'Centurion',
        addressRegion: 'Gauteng',
        postalCode: '0157',
        addressCountry: 'ZA',
      },
      telephone: '+27 12 653 1633',
      email: 'info@vnr.co.za',
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed || 'South Africa',
    },
    url,
  };
}

/**
 * Generates ItemList structured data (JSON-LD) for listing pages
 */
export function generateItemListSchema(
  items: Array<{ name: string; url: string }>,
  listUrl: string,
  name?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(name && { name }),
    numberOfItems: items.length,
    url: listUrl.startsWith('http') ? listUrl : constructCanonicalUrl(listUrl),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : constructCanonicalUrl(item.url),
    })),
  };
}

/**
 * Generates BreadcrumbList structured data (JSON-LD)
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: constructCanonicalUrl(item.url),
    })),
  };
}

/**
 * Generates Organization structured data (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logos/vnrlogo.jpg`,
    image: `${BASE_URL}/images/logos/vnrlogo.jpg`,
    telephone: '+27 12 653 1633',
    email: 'info@vnr.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1022 Saxby Avenue, Eldoraigne',
      addressLocality: 'Centurion',
      addressRegion: 'Gauteng',
      postalCode: '0157',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.8617,
      longitude: 28.1725,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:30',
    },
    sameAs: [
      // Add social media links when available
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
  };
}

/**
 * Generates FAQPage structured data (JSON-LD)
 */
export function generateFAQSchema(faqs: Array<{ q: string; a: string }>, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a.replace(/<[^>]*>/g, '').trim(),
      },
    })),
    ...(url && { mainEntityOfPage: { '@type': 'WebPage', '@id': url } }),
  };
}

/**
 * Generates Person structured data (JSON-LD)
 */
export function generatePersonSchema({
  name,
  jobTitle,
  image,
  url,
  email,
  sameAs = [],
}: {
  name: string;
  jobTitle: string;
  image?: string;
  url?: string;
  email?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    ...(image && { image: ensureAbsoluteImageUrl(image) }),
    ...(url && { url }),
    ...(email && { email }),
    ...(sameAs.length > 0 && { sameAs }),
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

