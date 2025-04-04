'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Something went wrong!</h1>
          <p className="text-xl mb-8">
            We apologize for the inconvenience. A server error has occurred.
          </p>
          <div className="flex gap-4">
            <button
              onClick={reset}
              className="bg-[#31C1BF] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#31C1BF]/90 transition-colors"
            >
              Try again
            </button>
            <Link 
              href="/"
              className="bg-transparent border border-[#31C1BF] text-[#31C1BF] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#31C1BF]/10 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
} 