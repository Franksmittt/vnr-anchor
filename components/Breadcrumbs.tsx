import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 flex-shrink-0 text-slate-400 mr-2" />}
              <Link
                href={item.href}
                className={`font-medium transition-colors ${
                  index === items.length - 1
                    ? 'text-slate-500 pointer-events-none'
                    // FIX: Changed from text-slate-400 to text-slate-300 for better contrast on dark backgrounds
                    : 'text-slate-300 hover:text-white' 
                }`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;