# VNR Website – Full SEO Audit & Rating

**Audit date:** 2025  
**Scope:** All pages, components, data, and technical SEO  
**Overall SEO rating: 7.5 / 10**

---

## Summary

The site has a **solid SEO foundation**: metadata, structured data, sitemap, robots, canonicals, and good use of `next/image` and semantic HTML. Several **critical issues** (missing assets, bugs, duplicate markup) and **minor gaps** (FAQ schema, BreadcrumbList on listing pages, absolute URLs in JSON-LD) hold it back from an 8.5+.

---

## 1. Page-by-Page SEO Rating

### 1.1 Homepage (`/`) — **7.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Uses root layout defaults (title, description, OG, Twitter, keywords). No page-level override; acceptable for homepage. |
| H1 | ⚠️ | Hero slider shows **one H1 per slide** (e.g. "Your Wealth, Our Partnership"). Slide content changes; only one H1 in DOM at a time. OK. |
| Structured data | ✅ | Organization via `Schema` in layout. |
| Semantic HTML | ✅ | Sections, `main` in layout. Hero is `<section>`. |
| Internal links | ✅ | CTA links, ServicesSection, InsightsSection, TeamSection, AnchorPartnership, etc. |
| Images | ✅ | Hero uses `next/image`, `priority` on first slide, `altText` from `hero-slides`. |
| Performance | ✅ | Below-fold sections lazy-loaded via `dynamic()`. |

**Deductions:** Homepage has no dedicated `BreadcrumbList` (fine). No `WebPage` or `WebSite` schema (optional). **-0.5** for no explicit `alternates.canonical` override (relies on layout; root layout uses `alternates: { canonical: '/' }`).

---

### 1.2 Services Listing (`/services`) — **7/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Via `app/services/layout.tsx`: title, description, path, keywords, canonicals, OG, Twitter. |
| H1 | ✅ | "VNR Services & Pricing" in hero. |
| Structured data | ❌ | **No BreadcrumbList** despite `Breadcrumbs` (Home → Services & Pricing). |
| Semantic HTML | ❌ | **Duplicate `<main>`**: layout has `<main>{children}</main>`, page uses `<main className="flex-1">` → **invalid nested main**. |
| Internal links | ✅ | Category nav, service cards (pricing list), Breadcrumbs. |
| Images | N/A | No images in hero (icons only). |
| Client vs server | ⚠️ | Page is `'use client'`; metadata comes from layout (server). OK. |

**Deductions:** **-1** duplicate `main`, **-0.5** no BreadcrumbList schema, **-0.5** no `ItemList` or similar for the 150+ services (optional but useful).

---

### 1.3 Service Detail (`/services/[slug]`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, unique title/description, keywords, OG, Twitter, canonical. |
| H1 | ✅ | `ServiceHero`: service title. |
| Structured data | ✅ | **Service** + **BreadcrumbList** JSON-LD. |
| Semantic HTML | ✅ | `<article>`, `<section>`, `<aside>`, no duplicate main. |
| Internal links | ✅ | Breadcrumbs, `RelatedServices`, CTA, `LeadExpertCard` → team. |
| Images | ✅ | `ServiceHero` uses `next/image`, `priority`, `alt={title}`. |
| Content | ✅ | Prose with H2/H3, FAQs. |

**Deductions:** **-0.5** Service schema `image` can receive relative `imageUrl`; Schema.org expects **absolute** URLs. **-0.5** some services use `business-structuring-hero.jpg` (e.g. secretarial) which **does not exist** in `public/images/services/` → 404.

---

### 1.4 Insights Listing (`/insights`) — **7/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Via `app/insights/layout.tsx`: "Insights & Resources", description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "The Knowledge Hub" in `InsightsHero`. |
| Structured data | ❌ | **No BreadcrumbList** despite Breadcrumbs (Home → Insights). |
| Semantic HTML | ⚠️ | `InsightsHero` uses `<div>`, not `<section>`. Rest is fine. |
| Internal links | ✅ | Article cards, Breadcrumbs, CTA. |
| Images | ✅ | `ArticleCard` / `FeaturedArticleCard`: `next/image`, descriptive `alt`. |
| Client vs server | ⚠️ | Page is `'use client'`; metadata from layout. OK. |

**Deductions:** **-0.5** no BreadcrumbList, **-0.5** hero not `<section>`, **-1** no `ItemList` or `CollectionPage` for article list (optional).

---

### 1.5 Insight Detail (`/insights/[slug]`) — **7.5/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, article-specific (publishedTime, authors), OG, Twitter, canonical. |
| H1 | ✅ | `ArticleHero`: article title. |
| Structured data | ✅ | **Article** + **BreadcrumbList** JSON-LD. |
| Semantic HTML | ✅ | `<article>`, `<section>`, `<aside>`. |
| Internal links | ✅ | **Fixed:** `RelatedServices` now uses `currentSlug=""` on article pages; we show 2 services without excluding one (previously hardcoded `tax-advisory`). |
| Images | ✅ | `ArticleHero`, author avatar: `next/image`, `priority`, good `alt`. |
| Content | ✅ | KeyTakeaways, prose, author link to team. |

**Deductions:** **-0.5** Article schema `image` may be relative (should be absolute). **-0.5** "related" services on articles are generic (first 2) rather than article-specific.

---

### 1.6 Team Listing (`/team`) — **7/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`: "Our Leadership", description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "The Architects of Your Legacy" in hero. |
| Structured data | ❌ | **No BreadcrumbList** despite Breadcrumbs (Home → Our Leadership). |
| Semantic HTML | ✅ | `<section>`, etc. |
| Internal links | ✅ | Team cards → `/team/[slug]`, LinkedIn, email, CTA. |
| Images | ❌ | Hero uses **`/images/backgrounds/team-hero-bg.jpg`** → **folder does not exist** → **404**. Team cards use valid `/images/team/...`. |
| Content | ✅ | Clear hierarchy, ARIA on links. |

**Deductions:** **-1** 404 hero image, **-0.5** no BreadcrumbList, **-0.5** no `ItemList` for team (optional).

---

### 1.7 Team Member (`/team/[slug]`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, name + title, description, profile type, image, canonical. |
| H1 | ✅ | Member name; H2 = title. |
| Structured data | ✅ | **Person** + **BreadcrumbList** JSON-LD. |
| Semantic HTML | ✅ | Good use of sections, blockquote, lists. |
| Internal links | ✅ | Breadcrumbs, "Published Insights" → articles, LinkedIn, email. |
| Images | ✅ | `next/image`, `priority`, `alt={member.name}`. |
| Content | ✅ | Bio, credentials, optional fun fact, articles. |

**Deductions:** **-0.5** Person schema `image` may be relative. **-0.5** `sameAs` only LinkedIn; could add more if available.

---

### 1.8 Contact (`/contact`) — **7/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | Via layout: "Contact Us", description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "Get in Touch" in `ContactHero`. |
| Structured data | ⚠️ | **Duplicate Organization** schema: root layout already has `Schema` (Organization), and contact page **injects Organization again** → redundant. |
| Semantic HTML | ⚠️ | `ContactHero` uses `<div>`, not `<section>`. Form has labels, etc. |
| Internal links | ✅ | Breadcrumbs, tel, mailto, address. |
| Images | N/A | No content images. Maps iframe has `title`. |
| FAQ | ✅ | `FaqAccordion` with contact FAQs. **No FAQPage** schema. |

**Deductions:** **-0.5** duplicate Organization, **-0.5** hero not `<section>`, **-0.5** no FAQPage schema, **-0.5** form `action="#"` / Maps placeholder API key (UX, not direct SEO, but affects trust).

---

### 1.9 Anchor Wealth (`/anchor-wealth`) — **8/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, description, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "Direct your wealth through Anchor. Keep your tax strategy with VNR." |
| Structured data | ❌ | **No BreadcrumbList** despite Breadcrumbs (Home → Anchor Wealth). |
| Semantic HTML | ✅ | Multiple `<section>`, clear H2/H3. |
| Internal links | ✅ | Breadcrumbs, Anchor landing, tel, /contact, CTAs. |
| Images | N/A | No images; icons only. |
| Content | ✅ | Strong, scannable content; nationwide messaging. |

**Deductions:** **-0.5** no BreadcrumbList. **-0.5** optional `Article` or `WebPage` schema for main content.

---

### 1.10 Expat Tax Guide (`/resources/expat-tax-guide`) — **7/10**

| Aspect | Status | Notes |
|--------|--------|--------|
| Metadata | ✅ | `generateMetadata`, `type: 'article'`, keywords, canonical, OG, Twitter. |
| H1 | ✅ | "10 Costly Tax Mistakes Expats & Independent Contractors Make...". |
| Structured data | ❌ | **No Article** JSON-LD although metadata says `type: 'article'`. **No BreadcrumbList** despite Breadcrumbs. |
| Semantic HTML | ✅ | Sections, H2/H3, lists. |
| Internal links | ✅ | Breadcrumbs, PDF, marketing link, /contact, /anchor-wealth. |
| Images | N/A | None. |
| Content | ✅ | Checklist, CTAs, clear structure. |

**Deductions:** **-1** no Article schema despite article-type page, **-0.5** no BreadcrumbList.

---

## 2. Components & SEO

### 2.1 Layout & global

| Component | SEO relevance | Rating | Notes |
|-----------|----------------|--------|--------|
| **Root layout** | Critical | 8.5/10 | metadataBase, title template, default meta, OG, Twitter, robots, manifest. **Missing:** `og-default.jpg` (referenced but **not in** `public/images/`). Verification placeholder only. |
| **Schema** | High | 8/10 | Injects Organization JSON-LD. Correct structure. Duplication on Contact. |
| **Header** | High | 9/10 | Nav links (Services, Anchor Wealth, Tax Guide, Team, Insights, Contact), aria-labels, logo `alt`. |
| **Footer** | High | 9/10 | Service links, quick links, contact info. No `nofollow` on key pages. |
| **Breadcrumbs** | High | 8/10 | `<nav aria-label="Breadcrumb">`, `<ol>`, `aria-current="page"` on last item. Schema is **page-level**, not in component; several pages with breadcrumbs lack BreadcrumbList. |

### 2.2 Heroes

| Component | SEO relevance | Rating | Notes |
|-----------|----------------|--------|--------|
| **Hero** | High | 8.5/10 | Single visible H1 per slide, `next/image` + `priority` on first, `altText` from data. Section, ARIA on controls. |
| **ServiceHero** | High | 8/10 | H1, Breadcrumbs, `next/image` + `priority`, `alt={title}`. |
| **ArticleHero** | High | 8/10 | H1, category, author link, `next/image` + `priority`, `alt={title}`. |
| **InsightsHero** | Medium | 7/10 | H1, Breadcrumbs. Uses `<div>` not `<section>`. |
| **ContactHero** | Medium | 7/10 | Same; `<div>` not `<section>`. |

### 2.3 Content & cards

| Component | SEO relevance | Rating | Notes |
|-----------|----------------|--------|--------|
| **ServicesSection** | High | 9/10 | Links to all service detail pages, H2, semantic structure. |
| **InsightsSection** | High | 8.5/10 | Featured + list, links to articles, good `alt` on images. |
| **TeamSection** | High | 8.5/10 | Links to team profiles, `alt` on photos. |
| **ArticleCard** | High | 8/10 | Link to article, `alt` on image and author. |
| **FeaturedArticleCard** | High | 8/10 | Same. |
| **LeadExpertCard** | Medium | 8/10 | Link to team profile, `alt` on image. |
| **RelatedServices** | High | 7.5/10 | **Fixed:** insights now use `currentSlug=""` (show 2 services, no exclusion). Correct usage on service pages. |
| **FaqAccordion** | High | 7/10 | Used on services + contact. **No FAQPage** schema. `aria-expanded` present. |
| **KeyTakeaways** | Medium | 8/10 | Clear structure on article pages. |

### 2.4 Data & config

| Asset | SEO relevance | Rating | Notes |
|-------|----------------|--------|--------|
| **lib/seo.ts** | Critical | 8/10 | Canonical helper, `generateMetadata`, Article/Service/Person/Breadcrumb/Organization schemas. **Gaps:** no FAQ schema helper; image params often relative → should normalize to absolute for JSON-LD/OG. |
| **sitemap.ts** | Critical | 9/10 | 40+ URLs, priorities, changeFreq, lastModified from content where possible. |
| **robots.ts** | Critical | 9/10 | Env-aware (block non-prod), sitemap, disallow /api, /_next, etc. |
| **next.config** | Medium | 9/10 | `reactStrictMode`, `trailingSlash: false`, `compress`, image config. |
| **middleware** | Medium | 8/10 | CSP, HSTS, X-Frame-Options, etc. **Risk:** `default-src 'self'` may block Google Maps iframe on Contact; might need `frame-src` for Maps. |

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
| Organization schema | ✅ (duplicate on Contact) |
| Article schema | ✅ (insights) / ❌ (expat guide) |
| Service schema | ✅ |
| Person schema | ✅ |
| BreadcrumbList schema | ✅ detail pages / ❌ listing, Anchor, expat guide |
| FAQPage schema | ❌ |
| next/image sitewide | ✅ |
| Priority on hero images | ✅ |
| Alt text on images | ✅ |
| Semantic HTML (main, section, nav) | ⚠️ Duplicate main on /services |
| Single H1 per page | ✅ |
| Internal linking | ✅ |
| `lang` on `<html>` | ✅ |

---

## 4. Critical Issues to Fix

1. **Missing `og-default.jpg`**  
   Create `public/images/og-default.jpg` (1200×630) and ensure it’s used wherever default OG image is referenced.

2. **404 images**  
   - Team hero: `/images/backgrounds/team-hero-bg.jpg` → add `backgrounds` folder and asset, or switch to an existing image.  
   - Services: `business-structuring-hero.jpg` in `public/images/services/` (used by secretarial etc.) → add or correct `imageUrl` in data.

3. **Duplicate `<main>` on /services**  
   Remove `<main>` from the services listing page; keep only the layout’s `<main>`. Use `<div>` or `<section>` for the content wrapper if needed.

4. **`RelatedServices` on insight pages**  
   **Fixed:** Now uses `currentSlug=""` so we show 2 services without excluding one. Optional: use article-specific related services (e.g. from taxonomy) for better relevance.

5. **Duplicate Organization schema on Contact**  
   Remove Organization JSON-LD from the contact page; keep it only in the root `Schema` component.

6. **Absolute URLs in JSON-LD**  
   Ensure Article, Service, and Person schema always use **absolute** image URLs (e.g. prepend `BASE_URL` in `lib/seo` when resolving `image`).

---

## 5. Recommended Improvements

- Add **BreadcrumbList** to: `/services`, `/insights`, `/team`, `/anchor-wealth`, `/resources/expat-tax-guide`.
- Add **Article** JSON-LD to `/resources/expat-tax-guide` and align with metadata `type: 'article'`.
- Add **FAQPage** schema for service FAQs and contact FAQs (e.g. via a small helper in `lib/seo`).
- Use `<section>` in **InsightsHero** and **ContactHero** instead of `<div>`.
- Consider **ItemList** (or similar) for services list and insights list.
- Add Google Search Console verification token in layout when available.
- Review CSP for Google Maps iframe on Contact; add `frame-src` if needed.

---

## 6. Overall SEO Rating: **7.5 / 10**

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Metadata & technical | 8.0 | 25% | 2.0 |
| Structured data | 7.0 | 25% | 1.75 |
| Content & semantics | 7.5 | 20% | 1.5 |
| Internal linking & UX | 8.5 | 15% | 1.275 |
| Performance (images, fonts, etc.) | 8.5 | 15% | 1.275 |
| **Total** | | **100%** | **7.8** |

Adjusted **down to 7.5** for critical bugs (404s, duplicate main, `RelatedServices`, missing OG image).  
Addressing the critical issues and recommended improvements would realistically bring the site to **8.5–9/10**.

---

*End of audit.*
