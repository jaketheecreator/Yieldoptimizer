'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <div className="mb-8">
        <p className="text-[#A4A6A7] mb-2">Debugging Info:</p>
        <p className="text-sm text-[#A4A6A7]">
          Path: {typeof window !== 'undefined' ? window.location.pathname : ''}
        </p>
      </div>
      <Link 
        href="/"
        className="bg-[#31C1BF] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#31C1BF]/90 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
} 