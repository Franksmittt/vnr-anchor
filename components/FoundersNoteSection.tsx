import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const FoundersNoteSection = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/team/charlie+jannie.jpg"
                  alt="VNR Founders - Jannie Venter and Charlie Naudé"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="200ms">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-blue mb-4">
                A Note from Our Founders
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Why We Do This
              </h2>
              <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                <p>
                  When we started VNR, we had a simple vision: to be the kind of accountants we wished existed when we were building our own careers. We wanted to create a place where South African entrepreneurs could find not just expertise, but genuine partnership.
                </p>
                <p>
                  We've seen too many business owners lose sleep over tax deadlines, compliance worries, and financial uncertainty. We've watched brilliant entrepreneurs get bogged down in paperwork when they should be focused on growth. That's not how it should be.
                </p>
                <p>
                  Today, whether you're in the bustling streets of Centurion or the quiet towns of the Karoo, we're here to be your trusted partner. We believe that when local businesses thrive, our communities flourish. That's why we serve clients across South Africa. Every entrepreneur deserves access to expert guidance, no matter where they are.
                </p>
                <p className="font-semibold text-brand-blue">
                  Jannie Venter & Charlie Naudé, Co-Founders
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FoundersNoteSection;

