'use client';

import { useState } from 'react';
import { MapIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function NewsLetter() {
  const [emails, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('loading');
    setMessage('');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emails }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you for subscribing!');
        setEmail(''); // Clear input on success
      } else {
        setStatus('error');
        setMessage(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-300">
              Join our newsletter to receive updates on upcoming activities, technical workshops, 
              industry insights, and opportunities within the IEEE IAS & PES ISIMM Student Branch Joint Chapter.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={emails}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6 disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-none rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:bg-green-900 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p 
                className={`mt-3 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`} 
                role="status"
                aria-live="polite"
              >
                {message}
              </p>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <MapIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Weekly insights on trends, innovations, and applications in electrical engineering.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <ShieldCheckIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                We respect your inbox. Only relevant updates, no unnecessary emails.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#009536] to-[#009536] opacity-30"
        />
      </div>
    </div>
  );
}