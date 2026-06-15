import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  tone?: 'light' | 'dark';
}

const Breadcrumbs = ({ items, className = '', tone = 'light' }: BreadcrumbsProps) => {
  const linkClass =
    tone === 'dark'
      ? 'text-slate-200 hover:text-white'
      : 'text-slate-600 hover:text-brand-blue';
  const currentClass = tone === 'dark' ? 'text-slate-400' : 'text-slate-800';
  const chevronClass = tone === 'dark' ? 'text-slate-500' : 'text-slate-500';

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
        {items.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index > 0 && <ChevronRight className={`h-4 w-4 flex-shrink-0 mr-2 ${chevronClass}`} />}
              <Link
                href={item.href}
                className={`font-medium transition-colors ${
                  index === items.length - 1 ? `${currentClass} pointer-events-none` : linkClass
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