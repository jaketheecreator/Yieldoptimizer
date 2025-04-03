'use client';

import React, { useEffect, useState } from 'react';

interface SignInSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export function SignInSheet({ isOpen, onClose, onConnect }: SignInSheetProps) {
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
        <div className="bg-[#1B2022] rounded-t-[32px] max-h-[90vh] overflow-y-auto">
          <div className="px-6 pt-8 pb-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Log in / Sign up
              </h2>
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

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3 mb-6">
              <input
                type="checkbox"
                className="mt-1 w-6 h-6 bg-transparent border-2 border-[#494D4E] rounded checked:bg-[#31C1BF] checked:border-[#31C1BF]"
              />
              <p className="text-sm text-[#A4A6A7]">
                By connecting my wallet I agree to the{' '}
                <a href="#" className="text-[#31C1BF] hover:text-[#31C1BF]/80">Terms of Use</a>
                {' '}and{' '}
                <a href="#" className="text-[#31C1BF] hover:text-[#31C1BF]/80">Privacy Policy</a>
              </p>
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <div className="flex items-center bg-[#2A2D2E] rounded-xl p-4">
                <svg className="w-6 h-6 text-[#A4A6A7] mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent text-white w-full outline-none placeholder:text-[#A4A6A7]"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button 
              onClick={onConnect}
              className="w-full py-4 rounded-xl text-white text-lg font-medium bg-[#31C1BF] hover:bg-[#31C1BF]/90 transition-colors mb-5"
            >
              Continue
            </button>

            {/* Divider */}
            <div className="flex items-center mb-5">
              <div className="flex-1 h-px bg-[#494D4E]/20"></div>
              <span className="px-4 text-sm text-[#A4A6A7]">OR</span>
              <div className="flex-1 h-px bg-[#494D4E]/20"></div>
            </div>

            {/* Google Sign In */}
            <button 
              onClick={onConnect}
              className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#2A2A2A] hover:bg-[#2A2A2A]/80 rounded-xl transition-colors mb-3"
            >
              <img
                src="/Google.png"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-white font-medium">Continue with Google</span>
            </button>

            {/* Wallet Sign In */}
            <button 
              onClick={onConnect}
              className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#2A2A2A] hover:bg-[#2A2A2A]/80 rounded-xl transition-colors mb-6"
            >
              <img
                src="/wallet.png"
                alt="Wallet"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-white font-medium">Continue with Wallet</span>
            </button>

            {/* Web3 Help Link */}
            <div className="mt-6 text-center">
              <span className="text-[#A4A6A7]">New to web3 wallets?</span>
              <a href="#" className="ml-2 text-[#31C1BF] hover:text-[#31C1BF]/80 underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 