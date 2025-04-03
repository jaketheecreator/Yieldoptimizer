'use client';

import React, { useEffect, useState } from 'react';

interface MenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuSheet({ isOpen, onClose }: MenuSheetProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div 
        className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onTransitionEnd={() => {
          if (!isOpen) setIsAnimating(false);
        }}
      >
        <div className="bg-[#1B2022] rounded-t-[32px] overflow-hidden">
          <div className="px-6 pt-8 pb-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Menu</h2>
              <button 
                onClick={onClose}
                className="p-1 text-[#A4A6A7] hover:text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#494D4E]/20 -mx-6 mb-6" />

            {/* Token Contracts */}
            <div className="mb-8">
              <h3 className="text-lg text-[#A4A6A7] mb-4">Token Contracts</h3>
              <div className="inline-flex items-center border border-[#2A2D2E] rounded-xl p-4">
                <div className="flex items-center">
                  <img src="/USDs.png" alt="USDs" width={32} height={32} className="w-8 h-8" />
                </div>
                <div className="flex items-center -ml-3">
                  <img src="/USDC.png" alt="USDC" width={32} height={32} className="w-8 h-8" />
                </div>
                <div className="flex items-center -ml-3">
                  <img src="/spa.png" alt="SPA" width={32} height={32} className="w-8 h-8" />
                </div>
                <svg className="w-4 h-4 text-[#A4A6A7] ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg text-[#A4A6A7] mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-[#2A2D2E] rounded-xl text-white hover:bg-[#2A2D2E]/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    <img src="/convertshape-2.png" alt="Convert" width={20} height={20} className="w-5 h-5" />
                    <span>SPA → wSPA</span>
                  </div>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-[#2A2D2E] rounded-xl text-white hover:bg-[#2A2D2E]/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    <img src="/blend.png" alt="Bridge" width={20} height={20} className="w-5 h-5" />
                    <span>Sperax - Arbitrum Bridge</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-lg text-[#A4A6A7] mb-4">Follow us on Social Media</h3>
              <div className="flex gap-3">
                <button className="w-11 h-11 bg-[#2A2D2E] rounded-full flex items-center justify-center">
                  <img src="/Discord.png" alt="Discord" width={24} height={24} className="w-6 h-6" />
                </button>
                <button className="w-11 h-11 bg-[#2A2D2E] rounded-full flex items-center justify-center">
                  <img src="/Telegram.png" alt="Telegram" width={24} height={24} className="w-6 h-6" />
                </button>
                <button className="w-11 h-11 bg-[#2A2D2E] rounded-full flex items-center justify-center">
                  <img src="/Github.png" alt="GitHub" width={24} height={24} className="w-6 h-6" />
                </button>
                <button className="w-11 h-11 bg-[#2A2D2E] rounded-full flex items-center justify-center">
                  <img src="/Substack.png" alt="Substack" width={24} height={24} className="w-6 h-6" />
                </button>
                <button className="w-11 h-11 bg-[#2A2D2E] rounded-full flex items-center justify-center">
                  <img src="/X.png" alt="X" width={24} height={24} className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}