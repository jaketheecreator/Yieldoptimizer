'use client';

import React from 'react';

export function VaultSkeleton() {
  return (
    <div className="bg-[#1A202C] rounded-2xl p-4 space-y-2 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-lg" />
          <div className="h-4 w-32 bg-gray-700 rounded" />
        </div>
        <div className="h-4 w-24 bg-gray-700 rounded" />
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-gray-700 rounded" />
          <div className="h-3 w-16 bg-gray-700 rounded" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-8 bg-gray-700 rounded" />
          <div className="h-3 w-16 bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
} 