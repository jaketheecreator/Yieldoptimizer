'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { XIcon, MailIcon, WalletIcon } from '../shared/Icons';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const validateEmail = (email: string) => {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

// Dummy authentication function
const dummyAuth = async (email: string): Promise<{ success: boolean; error?: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'error@test.com') {
        resolve({ success: false, error: 'Authentication failed' });
      } else {
        resolve({ success: true });
      }
    }, 1500); // Simulate network delay
  });
};

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleContinue = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setAuthError('');

    try {
      const result = await dummyAuth(email);
      if (result.success) {
        // Store auth state (in a real app, this would be a token)
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        onClose();
        router.push('/dashboard');
      } else {
        setAuthError(result.error || 'Authentication failed');
      }
    } catch (error) {
      setAuthError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign In
    console.log('Google Sign In clicked');
  };

  const handleWalletSignIn = () => {
    // Implement Wallet Sign In
    console.log('Wallet Sign In clicked');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md mx-4 bg-gray-900 rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Log in / Sign up
          </h2>
          <button 
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            disabled={isLoading}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start space-x-3 mb-6">
          <label className="relative flex items-center">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="sr-only peer"
              disabled={isLoading}
            />
            <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:bg-teal-400 
                          peer-checked:border-teal-400 transition-all">
              {agreedToTerms && (
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </label>
          <p className="text-sm text-gray-400">
            By connecting my wallet I agree to the{' '}
            <a href="#" className="text-teal-400 hover:text-teal-300">Terms of Use</a>
            {' '}and{' '}
            <a href="#" className="text-teal-400 hover:text-teal-300">Privacy Policy</a>
          </p>
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <div className={`flex items-center bg-gray-800 rounded-xl p-4 focus-within:ring-2 
                         transition-all ${emailError ? 'ring-2 ring-red-500' : 'focus-within:ring-teal-400'}`}>
            <MailIcon className="w-6 h-6 text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="bg-transparent text-white w-full outline-none placeholder:text-gray-500"
              disabled={isLoading}
            />
          </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Auth Error */}
        {authError && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-500 text-sm">{authError}</p>
          </div>
        )}

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!agreedToTerms || !email || !!emailError || isLoading}
          className={`w-full py-4 rounded-xl text-white text-lg font-medium mb-4
                     relative overflow-hidden
                     ${agreedToTerms && email && !emailError && !isLoading
                       ? 'bg-teal-400 hover:bg-teal-500' 
                       : 'bg-gray-700 cursor-not-allowed'}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Signing in...
            </div>
          ) : (
            'Continue'
          )}
        </button>

        {/* Dividers */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-3 py-4 px-6 
                   bg-gray-800 hover:bg-gray-700 rounded-xl mb-4 transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
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
          onClick={handleWalletSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-3 py-4 px-6 
                   bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <WalletIcon className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Continue with Wallet</span>
        </button>

        {/* Web3 Help Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-400">New to web3 wallets?</span>
          <a href="#" className="ml-2 text-teal-400 hover:text-teal-300">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
} 