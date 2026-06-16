'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function BackOfficeLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/back-office/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || 'Login failed.');
      }

      router.push('/back-office');
      router.refresh();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Login failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-surface-light px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
          <Lock className="h-7 w-7" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">VNR Back Office</p>
        <h1 className="mt-3 font-serif text-3xl font-bold text-text-primary">Sign in</h1>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Access email signatures and service price management.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="back-office-password" className="text-sm font-semibold text-text-primary">
              Password
            </label>
            <input
              id="back-office-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-text-primary shadow-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              placeholder="Enter back office password"
              autoComplete="current-password"
            />
          </div>
          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-blue-light disabled:opacity-70"
          >
            {submitting ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  );
}
