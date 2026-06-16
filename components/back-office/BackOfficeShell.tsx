'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut, Mail, Tags } from 'lucide-react';

export type BackOfficeTab = 'signatures' | 'pricing';

type BackOfficeShellProps = {
  activeTab: BackOfficeTab;
  onTabChange: (tab: BackOfficeTab) => void;
  children: React.ReactNode;
};

const tabs: { id: BackOfficeTab; label: string; icon: React.ElementType }[] = [
  { id: 'signatures', label: 'Email Signatures', icon: Mail },
  { id: 'pricing', label: 'Service Prices', icon: Tags },
];

export default function BackOfficeShell({ activeTab, onTabChange, children }: BackOfficeShellProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/back-office/logout', { method: 'POST' });
    router.push('/back-office/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-surface-light">
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">VNR Back Office</p>
            <h1 className="font-serif text-2xl font-bold text-text-primary">Internal tools</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <nav className="flex flex-wrap gap-2" aria-label="Back office sections">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onTabChange(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-brand-blue bg-brand-blue text-white'
                        : 'border-slate-200 bg-white text-text-secondary hover:border-brand-blue/30 hover:text-brand-blue-dark'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            <Link
              href="/"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-brand-blue/30 hover:text-brand-blue-dark"
            >
              View site
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-red-200 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
