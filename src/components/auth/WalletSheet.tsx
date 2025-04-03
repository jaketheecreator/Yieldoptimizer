'use client';

import React, { useEffect, useState } from 'react';

interface WalletSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  address: string;
}

export function WalletSheet({ isOpen, onClose, onLogout, address }: WalletSheetProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const handleViewOnEtherscan = () => {
    window.open(`https://etherscan.io/address/${address}`, '_blank');
  };

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
              <h2 className="text-2xl font-semibold text-white">Profile</h2>
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

            {/* Wallet Info Card */}
            <div className="bg-[#2A2D2E] rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <span className="text-lg font-medium text-white">{address}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                >
                  <img
                    src="/power.png"
                    alt="Logout"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#2A2D2E] rounded-xl text-white hover:bg-[#2A2D2E]/80 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="/copy.png"
                    alt="Copy"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span>Copy Address</span>
                </div>
                {copied && (
                  <span className="text-sm text-green-400">Copied!</span>
                )}
              </button>

              <button
                onClick={handleViewOnEtherscan}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#2A2D2E] rounded-xl text-white hover:bg-[#2A2D2E]/80 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="/link.png"
                    alt="View on Etherscan"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span>View on Etherscan</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 