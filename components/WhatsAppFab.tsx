'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/tracking';

export default function WhatsAppFab() {
  const whatsappHref = 'https://wa.me/27126531633';

  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VNR on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)', marginRight: 'env(safe-area-inset-right, 0px)' }}
    >
      <span className="text-2xl" aria-hidden>
        W
      </span>
    </Link>
  );
}
