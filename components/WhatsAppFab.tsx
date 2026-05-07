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
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
    >
      <span className="text-2xl" aria-hidden>
        W
      </span>
    </Link>
  );
}
