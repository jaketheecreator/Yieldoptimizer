'use client';

import React from 'react';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  // Simply render children directly without any context providers
  // This avoids any React hooks that could cause issues when used from server components
  return <>{children}</>;
} 