'use client';

import React from 'react';
import { Mail, Phone, Building, Clock } from 'lucide-react';
import ContactHero from '@/components/ContactHero';
import InfoCard from '@/components/InfoCard';
import { faqs } from '@/data/contact-data';
import FaqAccordion from '@/components/FaqAccordion';
import { useRouter } from 'next/navigation';
import { trackEvent } from '@/lib/tracking';

const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.0147397299907!2d28.176590975403908!3d-25.868992277284626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95658517133f81%3A0xbac8ebf8c25bc2bf!2sVNR%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1781178466827!5m2!1sen!2sza';

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
    <>
      <ContactHero />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          
          <div className="bg-surface-light p-6 sm:p-8 rounded-xl shadow-lg border border-slate-200">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">Connect with Our Experts</h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-slate-700">We&apos;d love to hear from you. Whether you have a quick question or want to plan a full consultation, just fill out the form below and we&apos;ll get back to you within 24 hours. No pressure, no sales pitch. Just a friendly conversation about how we can help.</p>
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-brand-blue/5 border-l-4 border-brand-blue rounded-lg">
              <p className="text-xs sm:text-sm font-semibold text-brand-blue mb-1">📍 Head Office</p>
              <p className="text-xs sm:text-sm text-slate-700">🌍 We serve clients across South Africa. Virtual consultations make us your local advisor, anywhere in SA.</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-xs sm:text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  autoComplete="name"
                  className="mt-1 block w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-400 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="mt-1 block w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-400 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700">How can we assist you?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2.5 text-sm text-slate-900 bg-white border border-slate-400 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue resize-y"
                ></textarea>
              </div>
              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-brand-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors"
                >
                  {submitting ? 'Submitting...' : "Let's Start a Conversation"}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
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
                <p className="mb-2">4 Grit Ave, Zwartkop<br />Centurion, 0051, South Africa</p>
                <p className="text-sm font-semibold text-brand-blue">📍 Head Office | 🌍 Serving clients nationwide across South Africa</p>
              </InfoCard>
              <InfoCard icon={<Clock size={24} />} title="Business Hours">
                <p>Mon - Fri: 08:00 - 16:30</p>
                <p>Sat - Sun: Closed</p>
              </InfoCard>
            </div>
            <div className="h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden border border-slate-300 shadow-lg">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VNR Head Office Location, South Africa"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-light border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary text-center mb-8 sm:mb-12">Quick Questions</h2>
          <div className="mt-4 sm:mt-6">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;