'use client';

import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/tracking';

export default function WhatsAppFab() {
  const whatsappHref = 'https://wa.me/27768165533';

  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VNR on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)', marginRight: 'env(safe-area-inset-right, 0px)' }}
    >
      <Image
        src="/images/icons/whatsapp-icon.png"
        alt=""
        width={56}
        height={56}
        className="h-full w-full object-cover"
        aria-hidden
      />
    </Link>
  );
}
