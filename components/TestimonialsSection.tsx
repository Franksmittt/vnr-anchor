import AnimateOnScroll from './AnimateOnScroll';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  role: string;
  content: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Cape Town',
    role: 'Small Business Owner',
    content: 'VNR made us feel like family, not just another client. When we had questions, they answered. When we were stressed about tax season, they calmed our nerves. They don\'t just do our books, they truly care about our success.',
    service: 'Tax Advisory & Bookkeeping',
  },
  {
    name: 'Michael T.',
    location: 'Durban',
    role: 'Tech Startup Founder',
    content: 'Moving to cloud accounting with VNR was the best decision we made. They didn\'t just set up the system, they taught us how to use it. Now we actually understand our numbers, and that\'s changed everything for our business.',
    service: 'Cloud Accounting',
  },
  {
    name: 'Linda K.',
    location: 'Johannesburg',
    role: 'Family Business Owner',
    content: 'We needed help with estate planning, and VNR walked us through every step with patience and care. They helped us protect what we\'ve built for our children. It wasn\'t just professional, it was personal, and that meant everything.',
    service: 'Estate & Legacy Planning',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-surface-light py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-blue mb-3 sm:mb-4">
              Client Stories
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4">
              Real People, Real Results
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              Don't just take our word for it. Hear from entrepreneurs across South Africa who've made VNR their trusted partner.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={`${index * 150}ms`}>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-brand-teal mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-text-secondary mb-5 sm:mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-slate-200 pt-3 sm:pt-4">
                  <p className="text-sm sm:text-base font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-text-secondary">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-brand-blue mt-1">{testimonial.location}</p>
                  <p className="text-[10px] sm:text-xs text-text-secondary mt-2">{testimonial.service}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

