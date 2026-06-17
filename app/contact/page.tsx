'use client';

import React from 'react';
import { Mail, Phone, Building, Clock } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import OfficeMap from '@/components/OfficeMap';
import { faqs } from '@/data/contact-data';
import FaqAccordion from '@/components/FaqAccordion';
import { useRouter } from 'next/navigation';
import { trackEvent } from '@/lib/tracking';

const ContactPage = () => {
  const router = useRouter();
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Unable to submit form.');
      }

      trackEvent('form_submit', { form_name: 'contact_form' });
      router.push('/thank-you');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to submit form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-surface-light via-white to-brand-blue/10">
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />

        <div className="container relative mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-6 lg:p-8">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue sm:text-sm">
                  Start a conversation
                </p>
                <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                  Connect with Our Experts
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-800 sm:text-base">
                  Whether you have a quick question or want to plan a full consultation, send us the details and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={onSubmit} className="flex flex-1 flex-col">
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-semibold text-slate-900 sm:text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      autoComplete="name"
                      className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder-slate-500 transition focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/15"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-900 sm:text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder-slate-500 transition focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/15"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-900 sm:text-sm">
                      How can we assist you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-2 min-h-[140px] flex-1 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder-slate-500 transition focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/15 resize-y"
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <div className="mt-auto pt-5">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full justify-center rounded-xl border border-transparent bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:-translate-y-0.5 hover:bg-brand-teal focus:outline-none focus:ring-4 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? 'Submitting...' : "Let's Start a Conversation"}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex h-full flex-col rounded-3xl bg-surface-dark p-4 shadow-2xl shadow-slate-900/20 sm:p-5 lg:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal-light sm:text-sm">
                Direct details
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">Reach VNR</h2>
              <p className="mt-4 text-sm leading-7 text-slate-100 sm:text-base">
                Visit our Centurion head office or connect with us remotely from anywhere in South Africa.
              </p>

              <div className="mt-4 grid flex-1 gap-3 content-start">
                <InfoCard icon={<Mail size={24} />} title="Email Address">
                  <a
                    href="mailto:info@vnr.co.za"
                    onClick={() => trackEvent('email_click', { location: 'contact_page' })}
                    className="font-semibold text-brand-blue hover:text-brand-blue-dark hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                  >
                    info@vnr.co.za
                  </a>
                </InfoCard>
                <InfoCard icon={<Phone size={24} />} title="Phone Number">
                  <a
                    href="tel:0126531633"
                    onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                    className="font-semibold text-brand-blue hover:text-brand-blue-dark hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                  >
                    012 653 1633
                  </a>
                </InfoCard>
                <InfoCard icon={<Building size={24} />} title="Head Office Address">
                  <p className="mb-2 text-slate-800">4 Grit Ave, Zwartkop<br />Centurion, 0157, South Africa</p>
                  <p className="text-sm font-semibold text-brand-blue">
                    Head Office | Serving clients nationwide across South Africa
                  </p>
                </InfoCard>
                <InfoCard icon={<Clock size={24} />} title="Business Hours">
                  <p className="text-slate-800">Mon - Fri: 08:00 - 16:30</p>
                  <p className="text-slate-800">Sat - Sun: Closed</p>
                </InfoCard>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5">
            <OfficeMap heightClassName="h-72 sm:h-80 lg:h-96" />
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-surface-light">
        <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-text-primary sm:mb-8 sm:text-3xl">
            Quick Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
