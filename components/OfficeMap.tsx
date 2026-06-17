import Link from 'next/link';
import { MapPin, Navigation } from 'lucide-react';

const OFFICE_ADDRESS = 'VNR (Pty) Ltd, 4 Grit Ave, Zwartkop, Centurion, 0157, South Africa';
const MAP_QUERY = encodeURIComponent('4 Grit Ave, Zwartkop, Centurion, 0157, South Africa');
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=en&z=16&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

interface OfficeMapProps {
  className?: string;
  heightClassName?: string;
}

const OfficeMap = ({ className = '', heightClassName = 'h-72 sm:h-80' }: OfficeMapProps) => {
  return (
    <div className={`overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-lg ${className}`}>
      <div className={`relative w-full ${heightClassName}`}>
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="VNR Professional Accountants office map"
        />
      </div>
      <div className="flex flex-col gap-3 border-t border-slate-200 bg-surface-light px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-slate-800">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" aria-hidden="true" />
          <span>{OFFICE_ADDRESS}</span>
        </p>
        <Link
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
        >
          <Navigation className="h-4 w-4" />
          Get directions
        </Link>
      </div>
    </div>
  );
};

export default OfficeMap;
