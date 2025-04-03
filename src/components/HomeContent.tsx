'use client';

import { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { SignInSheet } from './auth/SignInSheet';
import { WalletSheet } from './auth/WalletSheet';
import { MenuSheet } from './MenuSheet';
import { VaultDepositSheet } from './VaultDepositSheet';

interface PortfolioVault {
  id: string;
  name: string;
  deposit: string;
  profit: string;
  inPortfolio: boolean;
}

interface AllVault {
  id: string;
  name: string;
  tvl: string;
  apy: string;
}

const portfolioVaults: PortfolioVault[] = [
  {
    id: 'v1',
    name: 'USDs',
    deposit: '$40,000',
    profit: '$10,000',
    inPortfolio: true
  },
  {
    id: 'v2',
    name: 'USDC',
    deposit: '$40,000',
    profit: '$10,000',
    inPortfolio: true
  },
  {
    id: 'v3',
    name: 'USDs',
    deposit: '$40,000',
    profit: '$10,000',
    inPortfolio: true
  }
];

const allVaults: AllVault[] = [
  {
    id: 'av1',
    name: 'USDs',
    tvl: '$40,000',
    apy: '20% APY + 40% SPA'
  },
  {
    id: 'av2',
    name: 'USDC',
    tvl: '$40,000',
    apy: '20% APY + 40% SPA'
  },
  {
    id: 'av3',
    name: 'USDs',
    tvl: '$40,000',
    apy: '20% APY + 40% SPA'
  }
];

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showNetworks, setShowNetworks] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState({ name: 'Arbitrum', icon: '/arbitrum.png' });
  const [showSignIn, setShowSignIn] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [showWalletSheet, setShowWalletSheet] = useState(false);
  const [showMenuSheet, setShowMenuSheet] = useState(false);
  const walletAddress = '0x12c5...409d'; // This would come from your wallet connection
  const [selectedVault, setSelectedVault] = useState<{ name: string; icon: string } | null>(null);
  const [vaultToRestoreAfterSignIn, setVaultToRestoreAfterSignIn] = useState<{ name: string; icon: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const networks = [
    { name: 'Ethereum', icon: '/Ethereum.png' },
    { name: 'Arbitrum', icon: '/arbitrum.png' },
    { name: 'Base', icon: '/Base.png' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-network-dropdown]') && !target.closest('[data-network-button]')) {
        setShowNetworks(false);
      }
      if (!target.closest('[data-filter-dropdown]') && !target.closest('[data-filter-button]')) {
        setShowFilters(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNetworkSelect = (network: { name: string; icon: string }) => {
    setSelectedNetwork(network);
    setShowNetworks(false);
  };

  const handleConnect = () => {
    setIsWalletConnected(true);
    setShowSignIn(false);
    if (vaultToRestoreAfterSignIn) {
      setSelectedVault(vaultToRestoreAfterSignIn);
      setVaultToRestoreAfterSignIn(null);
    }
  };

  const handleLogout = () => {
    setIsWalletConnected(false);
    setShowWalletSheet(false);
  };

  const filteredVaults = activeTab === 'portfolio' 
    ? portfolioVaults.filter(vault => 
        vault.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allVaults.filter(vault => 
        vault.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const renderVaultContent = (vault: PortfolioVault | AllVault) => {
    if (activeTab === 'all') {
      const allVault = vault as AllVault;
      return (
        <>
          <div>
            <div className="text-[#A4A6A7] text-sm">TVL</div>
            <div className="text-xl font-bold text-white">{allVault.tvl}</div>
          </div>
          <div className="px-3 py-1.5 bg-[#2A2A2A] rounded-full">
            <span className="text-sm bg-gradient-to-r from-[#08B4DB] to-[#4DFF00] bg-clip-text text-transparent">{allVault.apy}</span>
          </div>
        </>
      );
    } else {
      const portfolioVault = vault as PortfolioVault;
      return (
        <>
          <div>
            <div className="text-[#A4A6A7] text-sm">Deposit</div>
            <div className="text-xl font-bold text-white">{portfolioVault.deposit}</div>
          </div>
          <div>
            <div className="text-[#A4A6A7] text-sm">Profit</div>
            <div className="text-xl font-bold text-white">{portfolioVault.profit}</div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="px-4 py-2 flex justify-between items-center">
        <span className="text-sm">9:41</span>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 1h-7C7.67 1 7 1.67 7 2.5v19c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-19c0-.83-.67-1.5-1.5-1.5zm-3 20c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="px-4 py-4 flex justify-between items-center border-b border-[#494D4E]/20">
        <div className="w-8 h-8 relative">
          <img
            src="/Sperax logo.png"
            alt="Sperax Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="flex items-center space-x-4">
          {!isWalletConnected ? (
            <button 
              onClick={() => setShowSignIn(true)}
              className="bg-[#31C1BF] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#31C1BF]/90 transition-colors"
            >
              Sign In
            </button>
          ) : (
            <div className="flex items-center space-x-3 relative">
              <button 
                onClick={() => setShowWalletSheet(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#2A2D2E] hover:bg-[#2A2D2E]/80 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <span className="text-white text-sm font-medium">00x2...43E</span>
                <svg className="w-4 h-4 text-[#A4A6A7]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                data-network-button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNetworks(!showNetworks);
                  setShowFilters(false);
                }} 
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-[#2A2D2E] hover:bg-[#2A2D2E]/80 transition-colors"
              >
                <img
                  src={selectedNetwork.icon}
                  alt={selectedNetwork.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <svg className="w-4 h-4 text-[#A4A6A7]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Network Selector Dropdown */}
              {showNetworks && (
                <div data-network-dropdown className="absolute right-0 top-[calc(100%+0.5rem)] w-48 bg-[#1B2022] rounded-xl border border-[#494D4E] shadow-lg z-50">
                  <div className="p-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-lg font-medium px-2">Networks</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowNetworks(false);
                        }}
                        className="text-[#A4A6A7] hover:text-white p-1"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    {/* Network Options */}
                    <div className="space-y-1">
                      {networks.map((network) => (
                        <button
                          key={network.name}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNetworkSelect(network);
                          }}
                          className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg ${
                            selectedNetwork.name === network.name
                              ? 'text-white bg-white/10'
                              : 'text-[#A4A6A7] hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <img src={network.icon} alt={network.name} width={20} height={20} className="w-5 h-5 object-contain" />
                          <span>{network.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <button 
            onClick={() => setShowMenuSheet(true)} 
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pt-6">
        {/* Total Value */}
        <div className="mb-6">
          <div className="text-sm text-gray-400">Total Value Locked</div>
          <div className="text-3xl font-bold">$100k</div>
        </div>

        {/* Tabs and Filter */}
        <div className="flex items-center justify-between mb-6 relative">
          <div className="flex p-1 bg-[#1B2022] rounded-full border border-[#494D4E]">
            <button 
              className={`px-6 py-2.5 rounded-full text-sm transition-all duration-500 ${
                activeTab === 'all' 
                  ? 'bg-white text-[#2A2A2A] font-medium' 
                  : 'text-[#A4A6A7] hover:text-white'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Vaults
            </button>
            <button 
              className={`px-6 py-2.5 rounded-full text-sm transition-all duration-500 ${
                activeTab === 'portfolio' 
                  ? 'bg-white text-[#2A2A2A] font-medium' 
                  : 'text-[#A4A6A7] hover:text-white'
              }`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </button>
          </div>
          <button 
            data-filter-button
            onClick={(e) => {
              e.stopPropagation();
              setShowFilters(!showFilters);
              setShowNetworks(false);
            }}
            className="p-2.5 rounded-xl border border-[#494D4E] bg-[#1B2022] text-[#F1F1F1] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>

          {/* Filter Dropdown */}
          {showFilters && (
            <div data-filter-dropdown className="absolute right-0 top-full mt-2 w-64 bg-[#1B2022] rounded-xl border border-[#494D4E] shadow-lg z-50">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white text-lg font-medium">Filters</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFilters(false);
                    }}
                    className="text-[#A4A6A7] hover:text-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Search Input */}
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for tokens"
                      value={searchQuery}
                      onChange={(e) => {
                        e.stopPropagation();
                        setSearchQuery(e.target.value);
                      }}
                      className="w-full bg-[#2A2D2E] text-white placeholder-[#A4A6A7] rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-[#31C1BF]"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A4A6A7]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Filter Sections */}
                <div className="space-y-4">
                  <div>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="w-full flex items-center justify-between text-[#A4A6A7] hover:text-white py-2"
                    >
                      <span>Token</span>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="w-full flex items-center justify-between text-[#A4A6A7] hover:text-white py-2"
                    >
                      <span>TVL</span>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vaults List */}
        <div className="space-y-4">
          {activeTab === 'portfolio' && !isWalletConnected ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="mb-4">
                <img
                  src="/layers overlay.png"
                  alt="Portfolio"
                  width={84}
                  height={84}
                />
              </div>
              <p className="text-[#A4A6A7] text-center mb-6">
                Sign in to see your<br />portfolio assets
              </p>
              <button 
                onClick={() => setShowSignIn(true)}
                className="bg-[#31C1BF] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#31C1BF]/90 transition-colors"
              >
                Sign In
              </button>
            </div>
          ) : (
            filteredVaults.map((vault) => (
              <div 
                key={vault.id}
                className="relative bg-[#1B2022] rounded-[20px] cursor-pointer"
                onClick={() => setSelectedVault({
                  name: vault.name,
                  icon: vault.name.toLowerCase().includes('usds') ? "/USDs.png" : "/USDC.png"
                })}
              >
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#7C3145] to-[#2992A2]" />
                <div className="absolute inset-[1.5px] rounded-[19px] bg-[#1B2022]" />
                <div className="relative p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="absolute top-0 right-0 z-10">
                          <img
                            src={selectedNetwork.icon}
                            alt={selectedNetwork.name}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            src={vault.name.toLowerCase().includes('usds') ? "/USDs.png" : "/USDC.png"}
                            alt={vault.name}
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <span className="text-lg font-bold text-white">{vault.name}</span>
                    </div>
                  </div>

                  <div className="h-px bg-[#494D4E]/20 mb-2" />

                  <div className="flex justify-between items-center">
                    {renderVaultContent(vault)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />

      {/* Add SignInSheet */}
      <SignInSheet 
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onConnect={handleConnect}
      />

      {/* Add WalletSheet */}
      <WalletSheet 
        isOpen={showWalletSheet}
        onClose={() => setShowWalletSheet(false)}
        onLogout={handleLogout}
        address={walletAddress}
      />

      {/* Add MenuSheet */}
      <MenuSheet
        isOpen={showMenuSheet}
        onClose={() => setShowMenuSheet(false)}
      />

      {/* Add VaultDepositSheet */}
      <VaultDepositSheet
        isOpen={selectedVault !== null}
        onClose={() => setSelectedVault(null)}
        vaultName={selectedVault?.name || ''}
        vaultIcon={selectedVault?.icon || ''}
        isSignedIn={isWalletConnected}
        onSignIn={() => {
          setVaultToRestoreAfterSignIn(selectedVault);
          setSelectedVault(null);
          setShowSignIn(true);
        }}
      />
    </div>
  );
} 