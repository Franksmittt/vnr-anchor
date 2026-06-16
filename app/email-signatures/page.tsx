import { redirect } from 'next/navigation';

export default function EmailSignaturesRedirectPage() {
  redirect('/back-office?tab=signatures');
}
