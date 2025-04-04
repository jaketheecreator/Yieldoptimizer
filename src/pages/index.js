import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Yield Optimizer</title>
        <meta name="description" content="Optimize your yield farming strategy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to Yield Optimizer
        </h1>
        
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
          Maximize your yield farming strategy with our advanced optimization tools.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '900px'
        }}>
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Yield Farming</h2>
            <p>Discover the best yield farming opportunities across multiple chains and protocols.</p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Portfolio Management</h2>
            <p>Track and manage your DeFi portfolio with real-time data and analytics.</p>
          </div>
          
          <div style={{
            padding: '1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Strategy Optimization</h2>
            <p>Optimize your yield farming strategy based on risk tolerance and investment goals.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 