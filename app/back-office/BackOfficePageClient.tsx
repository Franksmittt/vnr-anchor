'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BackOfficeShell, { type BackOfficeTab } from '@/components/back-office/BackOfficeShell';
import PricingEditor from '@/components/back-office/PricingEditor';
import EmailSignatureAdmin from '@/components/EmailSignatureAdmin';

function parseTab(value: string | null): BackOfficeTab {
  return value === 'pricing' ? 'pricing' : 'signatures';
}

export default function BackOfficePageClient() {
  const searchParams = useSearchParams();
  const initialTab = useMemo(() => parseTab(searchParams.get('tab')), [searchParams]);
  const [activeTab, setActiveTab] = useState<BackOfficeTab>(initialTab);

  return (
    <BackOfficeShell activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'signatures' ? <EmailSignatureAdmin skipAuth embedded /> : <PricingEditor />}
    </BackOfficeShell>
  );
}
