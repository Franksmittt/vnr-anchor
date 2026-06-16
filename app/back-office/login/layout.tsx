import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Back Office Login',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BackOfficeLoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
