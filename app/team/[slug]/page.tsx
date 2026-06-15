import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Mail, Linkedin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import { teamData } from '@/data/team-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generatePersonSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

interface TeamPageParams {
  slug: string;
}

export async function generateStaticParams() {
  return teamData.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<TeamPageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamData.find((m) => m.slug === slug);
  if (!member) {
    return {
      title: 'Team Member Not Found | VNR',
      description: 'The requested team member could not be found.',
      robots: { index: false, follow: false },
    };
  }

  return generateSEOMetadata({
    title: `${member.name} | ${member.title}`,
    description: member.intro,
    path: `/team/${slug}`,
    keywords: [member.name, member.title, 'VNR Professional Accountants', 'South Africa'],
    image: member.imageUrl,
    type: 'profile',
  });
}

const TeamMemberPage = async ({ params }: { params: Promise<TeamPageParams> }) => {
  const { slug } = await params;
  const member = teamData.find((m) => m.slug === slug);
  if (!member) notFound();

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Our Leadership', href: '/#team' },
    { name: member.name, href: `/team/${member.slug}` },
  ];

  const personSchema = generatePersonSchema({
    name: member.name,
    jobTitle: member.title,
    image: member.imageUrl,
    url: `${SITE_URL}/team/${member.slug}`,
    email: member.email,
    sameAs: [member.linkedinUrl],
  });

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, url: b.href })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />

      <section className="bg-surface-dark py-10 text-white sm:py-12">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="flex justify-center" />
          <div className="mx-auto mt-6 max-w-3xl">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={160}
              height={160}
              priority
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-brand-blue-light sm:h-40 sm:w-40"
            />
            <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight sm:text-4xl">{member.name}</h1>
            <p className="mt-2 text-lg text-brand-blue-light">{member.title}</p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-on-dark/80 sm:text-lg">{member.intro}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
              >
                <Mail className="h-4 w-4" />
                Email {member.name.split(' ')[0]}
              </a>
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section
                className="prose prose-lg max-w-none prose-h3:font-serif prose-h3:text-brand-blue-dark prose-p:text-text-secondary prose-li:text-text-secondary"
                dangerouslySetInnerHTML={{ __html: member.bio }}
              />

              {member.funFact && (
                <blockquote className="rounded-xl border-l-4 border-brand-blue bg-surface-light p-5 text-text-secondary">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Did you know?</p>
                  <p className="mt-2 text-base">{member.funFact}</p>
                </blockquote>
              )}
            </div>

            <aside className="space-y-6">
              <section className="rounded-xl border border-slate-200 bg-surface-light p-5">
                <h2 className="font-serif text-lg font-bold text-text-primary">Credentials</h2>
                <ul className="mt-3 space-y-2">
                  {member.credentials.map((credential) => (
                    <li key={credential} className="text-sm text-text-secondary">
                      {credential}
                    </li>
                  ))}
                </ul>
              </section>

              {member.articles.length > 0 && (
                <section className="rounded-xl border border-slate-200 bg-surface-light p-5">
                  <h2 className="font-serif text-lg font-bold text-text-primary">Published Insights</h2>
                  <ul className="mt-3 space-y-3">
                    {member.articles.map((article) => (
                      <li key={article.url}>
                        <Link
                          href={article.url}
                          className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark hover:underline"
                        >
                          {article.title}
                        </Link>
                        <p className="text-xs text-text-secondary">{article.category}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </aside>
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  );
};

export default TeamMemberPage;
