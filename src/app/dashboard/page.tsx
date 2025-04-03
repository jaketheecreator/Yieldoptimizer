'use client';

import React, { useState, useEffect } from 'react';
// import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { VaultSkeleton } from '../../components/shared/VaultSkeleton';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const totalValue = '$100k';

  const vaults = [
    {
      id: 'v1',
      name: 'Stable USDs V3',
      icon: '💰',
      balance: '0 USD',
      value: '$0.00',
      apr: '250.34%',
      type: 'USD lending APR',
    },
    {
      id: 'v2',
      name: 'Dynamic USDC V1',
      icon: '💎',
      balance: '0 USDC',
      value: '$0.00',
      apr: '250.34%',
    },
    {
      id: 'v3',
      name: 'Stable USDs V3',
      icon: '💰',
      balance: '0 USDS',
      value: '$0.00',
      apr: '250.34%',
    },
    {
      id: 'v4',
      name: 'Dynamic USDC V1',
      icon: '💎',
      balance: '0 USDC',
      value: '$0.00',
      apr: '250.34%',
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <div className="px-4 py-6">
        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-[#1A4D4A] to-[#1A3D5C] rounded-xl p-4 mb-6 relative 
                      opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#00E5B3]/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">💰</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-white">
                Earn up to 30% yield on Sperax Yield Strategies
              </p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Total Value */}
        <div className="mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
          <div className="text-sm text-gray-400">Total Value Locked</div>
          <div className="text-3xl font-bold">{totalValue}</div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                      ${activeTab === 'all'
                        ? 'bg-white text-black shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            All Vaults
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                      ${activeTab === 'portfolio'
                        ? 'bg-white text-black shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            Portfolio
          </button>
        </div>

        {/* Vaults List */}
        <div className="space-y-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
          {isLoading ? (
            <>
              <VaultSkeleton />
              <VaultSkeleton />
              <VaultSkeleton />
              <VaultSkeleton />
            </>
          ) : (
            vaults.map((vault) => (
              <div
                key={vault.id}
                className="bg-[#1A202C] rounded-2xl p-4 space-y-2 hover:bg-[#1A202C]/80 
                         transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00E5B3]/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{vault.icon}</span>
                    </div>
                    <span className="font-medium">{vault.name}</span>
                  </div>
                  {vault.type && (
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {vault.type}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    <div>{vault.balance}</div>
                    <div>{vault.value}</div>
                  </div>
                  <div className="flex items-center text-[#00E5B3]">
                    <span>APR</span>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2">{vault.apr}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    
  );
} 