# VNR Website – Full SEO Audit & Rating

**Audit date:** 2025  
**Last updated:** 2025 (post–fix implementation)  
**Scope:** All pages, components, data, and technical SEO  
**Overall SEO rating: 9 / 10**

---

## Summary

The site has a **strong SEO foundation**: metadata, structured data, sitemap, robots, canonicals, and consistent use of `next/image` and semantic HTML. **Critical issues from the original audit have been addressed**: missing OG image, 404 assets, duplicate `<main>`, duplicate Organization schema, relative URLs in JSON-LD, missing BreadcrumbList/FAQPage/Article schema, and hero semantics. **Optional improvements are also in place:** **ItemList** schema on `/services` and `/insights`, and **Google Search Console** verification wired via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (set the env var when you have a token). The project is in strong shape for search and social sharing.

**Remaining optional:** CSP `frame-src` for Google Maps iframe, and article-specific related services on insight pages.

---

## Fixes Applied (Post-Audit)

| # | Issue | Resolution |
|---|--------|------------|
| 1 | Missing `og-default.jpg` | Created `public/images/og-default.jpg` (from `logos/vnrlogo.jpg`). |
| 2 | 404 images | Team hero → `/images/slider/hero_1.png`. Services: all `imageUrl` in `services-data` updated to existing files (`company-secretarial`, `registrations`, `estate-legacy-planning`, `payroll`, `cloud-accounting`, etc.). |
| 3 | Duplicate `<main>` on `/services` | Replaced inner `<main>` with `<div role="region" aria-label="...">`. Single `<main>` from layout only. |
| 4 | `RelatedServices` on insight pages | Uses `currentSlug=""`; shows 2 services without incorrect exclusion. |
| 5 | Duplicate Organization on Contact | Removed Organization JSON-LD from contact page; kept only in root `Schema`. |
| 6 | Relative URLs in JSON-LD/OG | Added `ensureAbsoluteImageUrl()` in `lib/seo.ts`; used in `generateMetadata`, `generateArticleSchema`, `generatePersonSchema`. |
| 7 | No BreadcrumbList on listing/static pages | Added BreadcrumbList to `/services`, `/insights`, `/contact` (layouts), `/team`, `/anchor-wealth`, `/resources/expat-tax-guide` (pages). |
| 8 | No Article JSON-LD on expat guide | Added Article schema to `/resources/expat-tax-guide`. |
| 9 | No FAQPage schema | Added `generateFAQSchema()` in `lib/seo.ts`. Used on contact (layout) and each service detail page (when FAQs exist). |
| 10 | InsightsHero / ContactHero `<div>` | Switched to `<section>` with `aria-labelledby` / `id` on headings. |
| 11 | ItemList schema | Added `generateItemListSchema` in `lib/seo`; used on `/services` and `/insights` layouts. |
| 12 | Google Search Console verification | Wired in root layout via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`; set env var when token available. |

---

## 1. Page-by-Page SEO Rating

### 1.1 Homepage (`/`) — **7.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Uses root layout defaults (title, description, OG, Twitter, keywords). No page-level override; acceptable for homepage. |
| H1 | ✅ | Hero slider shows one H1 per slide; only one in DOM at a time. OK. |
| Structured data | ✅ | Organization via `Schema` in layout. |
| Semantic HTML | ✅ | Sections, `main` in layout. Hero is `<section>`. |
| Internal links | ✅ | CTA links, ServicesSection, InsightsSection, TeamSection, AnchorPartnership, etc. |
| Images | ✅ | Hero uses `next/image`, `priority` on first slide, `altText` from `hero-slides`. |
| Performance | ✅ | Below-fold sections lazy-loaded via `dynamic()`. |

**Deductions:** No BreadcrumbList (fine for homepage). No `WebPage` / `WebSite` schema (optional). **-0.5** for no explicit `alternates.canonical` override (relies on layout).

---

### 1.2 Services Listing (`/services`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Via `app/services/layout.tsx`: title, description, path, keywords, canonicals, OG, Twitter. |
| H1 | ✅ | "VNR Services & Pricing" in hero. |
| Structured data | ✅ | **BreadcrumbList** + **ItemList** (7 core services) via layout. |
| Semantic HTML | ✅ | **Fixed:** No duplicate `<main>`. Content in `<div role="region" aria-label="...">`. |
| Internal links | ✅ | Category nav, service cards, Breadcrumbs. |
| Images | N/A | No images in hero (icons only). |
| Client vs server | ⚠️ | Page is `'use client'`; metadata from layout. OK. |

**Deductions:** **-0.5** no `ItemList` for 150+ services (optional). Remaining deductions from original audit addressed.

---

### 1.3 Service Detail (`/services/[slug]`) — **8.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, unique title/description, keywords, OG, Twitter, canonical. |
| H1 | ✅ | `ServiceHero`: service title. |
| Structured data | ✅ | **Service** + **BreadcrumbList** + **FAQPage** (when FAQs exist). |
| Semantic HTML | ✅ | `<article>`, `<section>`, `<aside>`, no duplicate main. |
| Internal links | ✅ | Breadcrumbs, `RelatedServices`, CTA, `LeadExpertCard` → team. |
| Images | ✅ | **Fixed:** All service heroes use existing images. `next/image`, `priority`, `alt`. |
| Content | ✅ | Prose with H2/H3, FAQs. |

**Deductions:** **-0.5** optional Service schema `image` (not yet added). **-0.5** optional ItemList. 404s and absolute-URL gaps addressed.

---

### 1.4 Insights Listing (`/insights`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Via `app/insights/layout.tsx`: "Insights & Resources", description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "The Knowledge Hub" in `InsightsHero`. |
| Structured data | ✅ | **BreadcrumbList** + **ItemList** (articles) via layout. |
| Semantic HTML | ✅ | **Fixed:** `InsightsHero` uses `<section>`, `aria-labelledby` / `id`. |
| Internal links | ✅ | Article cards, Breadcrumbs, CTA. |
| Images | ✅ | `ArticleCard` / `FeaturedArticleCard`: `next/image`, descriptive `alt`. |
| Client vs server | ⚠️ | Page is `'use client'`; metadata from layout. OK. |

**Deductions:** None significant. **ItemList** added for insights. Optional `CollectionPage` refinement.

---

### 1.5 Insight Detail (`/insights/[slug]`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, article-specific (publishedTime, authors), OG, Twitter, canonical. |
| H1 | ✅ | `ArticleHero`: article title. |
| Structured data | ✅ | **Article** + **BreadcrumbList**. **Fixed:** Article `image` uses absolute URLs via `ensureAbsoluteImageUrl`. |
| Semantic HTML | ✅ | `<article>`, `<section>`, `<aside>`. |
| Internal links | ✅ | **Fixed:** `RelatedServices` uses `currentSlug=""` on article pages. |
| Images | ✅ | `ArticleHero`, author avatar: `next/image`, `priority`, good `alt`. |
| Content | ✅ | KeyTakeaways, prose, author link to team. |

**Deductions:** **-0.5** "related" services on articles are generic (first 2) rather than article-specific. **-0.5** optional improvements.

---

### 1.6 Team Listing (`/team`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`: "Our Leadership", description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "The Architects of Your Legacy" in hero. |
| Structured data | ✅ | **BreadcrumbList** added (Home → Our Leadership). |
| Semantic HTML | ✅ | `<section>`, etc. |
| Internal links | ✅ | Team cards → `/team/[slug]`, LinkedIn, email, CTA. |
| Images | ✅ | **Fixed:** Hero uses `/images/slider/hero_1.png`. Team cards use `/images/team/...`. |
| Content | ✅ | Clear hierarchy, ARIA on links. |

**Deductions:** **-0.5** no `ItemList` for team (optional). 404 and BreadcrumbList gaps addressed.

---

### 1.7 Team Member (`/team/[slug]`) — **8.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, name + title, description, profile type, image, canonical. |
| H1 | ✅ | Member name; H2 = title. |
| Structured data | ✅ | **Person** + **BreadcrumbList**. **Fixed:** Person `image` uses absolute URLs. |
| Semantic HTML | ✅ | Sections, blockquote, lists. |
| Internal links | ✅ | Breadcrumbs, "Published Insights" → articles, LinkedIn, email. |
| Images | ✅ | `next/image`, `priority`, `alt={member.name}`. |
| Content | ✅ | Bio, credentials, optional fun fact, articles. |

**Deductions:** **-0.5** `sameAs` only LinkedIn; could add more if available.

---

### 1.8 Contact (`/contact`) — **8.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Via layout: "Contact Us", description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "Get in Touch" in `ContactHero`. |
| Structured data | ✅ | **Fixed:** No duplicate Organization. **BreadcrumbList** + **FAQPage** added via layout. |
| Semantic HTML | ✅ | **Fixed:** `ContactHero` uses `<section>`, `aria-labelledby` / `id`. Form has labels. |
| Internal links | ✅ | Breadcrumbs, tel, mailto, address. |
| Images | N/A | No content images. Maps iframe has `title`. |
| FAQ | ✅ | `FaqAccordion` with contact FAQs; **FAQPage** schema present. |

**Deductions:** **-0.5** form `action="#"` / Maps placeholder API key (UX; not direct SEO). Previous schema/semantic issues fixed.

---

### 1.9 Anchor Wealth (`/anchor-wealth`) — **8.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "Direct your wealth through Anchor. Keep your tax strategy with VNR." |
| Structured data | ✅ | **BreadcrumbList** added (Home → Anchor Wealth). |
| Semantic HTML | ✅ | Multiple `<section>`, clear H2/H3. |
| Internal links | ✅ | Breadcrumbs, Anchor landing, tel, /contact, CTAs. |
| Images | N/A | No images; icons only. |
| Content | ✅ | Strong, scannable content; nationwide messaging. |

**Deductions:** **-0.5** optional `Article` / `WebPage` schema for main content.

---

### 1.10 Expat Tax Guide (`/resources/expat-tax-guide`) — **8.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, `type: 'article'`, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "10 Costly Tax Mistakes Expats & Independent Contractors Make...". |
| Structured data | ✅ | **Fixed:** **Article** JSON-LD + **BreadcrumbList** added. |
| Semantic HTML | ✅ | Sections, H2/H3, lists. |
| Internal links | ✅ | Breadcrumbs, PDF, marketing link, /contact, /anchor-wealth. |
| Images | N/A | None. |
| Content | ✅ | Checklist, CTAs, clear structure. |

**Deductions:** **-0.5** optional refinements. Article and BreadcrumbList gaps addressed.

---

## 2. Components & SEO

### 2.1 Layout & global

| Component | SEO relevance | Rating | Notes |
|-----------|----------------|--------|--------|
| **Root layout** | Critical | 9/10 | metadataBase, title template, default meta, OG, Twitter, robots, manifest. **Fixed:** `og-default.jpg` now exists and is used. |
| **Schema** | High | 9/10 | Organization JSON-LD only. **Fixed:** No duplication on Contact. |
| **Header** | High | 9/10 | Nav links, aria-labels, logo `alt`. |
| **Footer** | High | 9/10 | Service links, quick links, contact info. No `nofollow` on key pages. |
| **Breadcrumbs** | High | 9/10 | `<nav aria-label="Breadcrumb">`, `<ol>`, `aria-current="page"`. **Fixed:** BreadcrumbList now on all relevant pages via layouts/pages. |

### 2.2 Heroes

| Component | SEO relevance | Rating | Notes |
|-----------|----------------|--------|--------|
| **Hero** | High | 8.5/10 | Single H1 per slide, `next/image` + `priority`, `altText`. Section, ARIA on controls. |
| **ServiceHero** | High | 8/10 | H1, Breadcrumbs, `next/image` + `priority`, `alt={title}`. |
| **ArticleHero** | High | 8/10 | H1, category, author link, `next/image` + `priority`, `alt={title}`. |
| **InsightsHero** | Medium | 8.5/10 | **Fixed:** Uses `<section>`, `aria-labelledby` / `id`. H1, Breadcrumbs. |
| **ContactHero** | Medium | 8.5/10 | **Fixed:** Same; `<section>`, `aria-labelledby` / `id`. |

### 2.3 Content & cards

| Component | SEO relevance | Rating | Notes |
|-----------|----------------|--------|--------|
| **ServicesSection** | High | 9/10 | Links to all service detail pages, H2, semantic structure. |
| **InsightsSection** | High | 8.5/10 | Featured + list, links to articles, good `alt` on images. |
| **TeamSection** | High | 8.5/10 | Links to team profiles, `alt` on photos. |
| **ArticleCard** | High | 8/10 | Link to article, `alt` on image and author. |
| **FeaturedArticleCard** | High | 8/10 | Same. |
| **LeadExpertCard** | Medium | 8/10 | Link to team profile, `alt` on image. |
| **RelatedServices** | High | 8/10 | **Fixed:** Insights use `currentSlug=""`. Correct on service pages. |
| **FaqAccordion** | High | 8.5/10 | **Fixed:** FAQPage schema used on contact and service detail pages. `aria-expanded` present. |
| **KeyTakeaways** | Medium | 8/10 | Clear structure on article pages. |

### 2.4 Data & config

| Asset | SEO relevance | Rating | Notes |
|-------|----------------|--------|--------|
| **lib/seo.ts** | Critical | 9/10 | **Fixed:** `ensureAbsoluteImageUrl()`, `generateFAQSchema()`. Canonical, metadata, Article/Service/Person/Breadcrumb/Organization. Image params normalized to absolute. |
| **sitemap.ts** | Critical | 9/10 | 40+ URLs, priorities, changeFreq, lastModified. |
| **robots.ts** | Critical | 9/10 | Env-aware, sitemap, disallow /api, /_next, etc. |
| **next.config** | Medium | 9/10 | `reactStrictMode`, `trailingSlash: false`, `compress`, image config. |
| **middleware** | Medium | 8/10 | CSP, HSTS, X-Frame-Options, etc. Optional: `frame-src` for Google Maps iframe. |

---

## 3. Technical SEO Checklist

| Item | Status |
|------|--------|
| metadataBase | ✅ |
| Title template | ✅ |
| Unique titles per page | ✅ |
| Unique descriptions per page | ✅ |
| Canonical URLs | ✅ |
| Open Graph | ✅ |
| Twitter Cards | ✅ |
| Robots (index/follow) | ✅ |
| Sitemap | ✅ |
| robots.txt (env-aware) | ✅ |
| Organization schema | ✅ (single, no duplication) |
| Article schema | ✅ (insights + expat guide) |
| Service schema | ✅ |
| Person schema | ✅ |
| BreadcrumbList schema | ✅ (all relevant pages) |
| FAQPage schema | ✅ (contact + service details) |
| ItemList schema | ✅ (services + insights) |
| Google Search Console verification | ✅ (env-driven; set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`) |
| next/image sitewide | ✅ |
| Priority on hero images | ✅ |
| Alt text on images | ✅ |
| Semantic HTML (main, section, nav) | ✅ (no duplicate main) |
| Single H1 per page | ✅ |
| Internal linking | ✅ |
| `lang` on `<html>` | ✅ |
| og-default.jpg | ✅ |
| No 404 hero/service images | ✅ |

---

## 4. Critical Issues (All Addressed)

| # | Issue | Status |
|---|--------|--------|
| 1 | Missing `og-default.jpg` | ✅ **Fixed.** `public/images/og-default.jpg` created. |
| 2 | 404 images (team hero, services) | ✅ **Fixed.** Team hero → `hero_1.png`; services use existing images. |
| 3 | Duplicate `<main>` on /services | ✅ **Fixed.** Replaced with `<div role="region" ...>`. |
| 4 | `RelatedServices` on insight pages | ✅ **Fixed.** Uses `currentSlug=""`. |
| 5 | Duplicate Organization on Contact | ✅ **Fixed.** Removed from contact; root only. |
| 6 | Relative URLs in JSON-LD | ✅ **Fixed.** `ensureAbsoluteImageUrl()` in `lib/seo.ts`. |

---

## 5. Recommended Improvements

| Improvement | Status |
|-------------|--------|
| BreadcrumbList on /services, /insights, /team, /anchor-wealth, /expat-guide | ✅ **Done.** |
| Article JSON-LD on expat tax guide | ✅ **Done.** |
| FAQPage schema (contact + services) | ✅ **Done.** |
| `<section>` in InsightsHero & ContactHero | ✅ **Done.** |
| ItemList / CollectionPage for services & insights | ✅ **Done.** `generateItemListSchema` in `lib/seo`; used on `/services` and `/insights` layouts. |
| Google Search Console verification | ✅ **Done.** Wired via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`; set env var when you have a token. |
| CSP `frame-src` for Google Maps | ⬜ Optional |
| Article-specific related services on insights | ⬜ Optional |

---

## 6. Overall SEO Rating: **9 / 10**

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Metadata & technical | 9.0 | 25% | 2.25 |
| Structured data | 9.0 | 25% | 2.25 |
| Content & semantics | 8.5 | 20% | 1.7 |
| Internal linking & UX | 8.5 | 15% | 1.275 |
| Performance (images, fonts, etc.) | 8.5 | 15% | 1.275 |
| **Total** | | **100%** | **8.75** |

**Previous rating:** 7.5 → 8.5 → **9/10**. Critical issues and recommended improvements addressed, including **ItemList** schema (services + insights) and **Google Search Console** verification (env-driven). Optional remaining: CSP `frame-src` for Maps, article-specific related services on insights.

---

## 7. Where This Project Stands Now

- **Build:** Production build passes; 40 static pages generated.  
- **SEO:** Strong metadata, structured data (Organization, Article, Service, Person, BreadcrumbList, FAQPage, **ItemList** on services + insights), unique titles/descriptions, canonicals, OG/Twitter, sitemap, robots. **Google Search Console** verification ready via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.  
- **Technical:** No duplicate `<main>`, no 404 hero/service images, absolute URLs in JSON-LD/OG, semantic heroes (`<section>`), and consolidated Organization schema.  
- **Content & UX:** Clear internal linking, breadcrumbs, FAQs with schema, and consistent use of `next/image` and priority loading on heroes.  

The project is **production-ready** and **SEO rating 9/10**, with only minor optional tweaks (Maps CSP, article-specific related services) left.

---

*End of audit.*
