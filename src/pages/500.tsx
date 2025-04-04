import React from 'react';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">500 - Server Error</h1>
      <p className="text-xl mb-8">
        We apologize for the inconvenience. Something went wrong on our server.
      </p>
      <Link 
        href="/"
        className="bg-[#31C1BF] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#31C1BF]/90 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
} 