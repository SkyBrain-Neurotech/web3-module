import React from 'react';

// Professional Neural Icons with consistent styling
export const NeuralIcons = {
  // Core Platform Icons
  Brain: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path 
        d="M12 2C8.5 2 6 4.5 6 8C6 9.5 6.5 10.8 7.3 12C6.5 13.2 6 14.5 6 16C6 19.5 8.5 22 12 22C15.5 22 18 19.5 18 16C18 14.5 17.5 13.2 16.7 12C17.5 10.8 18 9.5 18 8C18 4.5 15.5 2 12 2Z" 
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="9" cy="8" r="1" fill="var(--bg-primary)" />
      <circle cx="15" cy="8" r="1" fill="var(--bg-primary)" />
      <circle cx="12" cy="14" r="1.5" fill="var(--bg-primary)" />
    </svg>
  ),

  // Data Quality Icons
  SignalQuality: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path 
        d="M2 20h2v-8h-2v8zm4-12h2v12h-2v-12zm4-8h2v20h-2v-20zm4 4h2v16h-2v-16zm4 6h2v10h-2v-10z" 
        fill="currentColor"
      />
    </svg>
  ),

  // Blockchain Icons
  Blockchain: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect x="2" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="16" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="2" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="16" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 6h8M8 18h8M5 9v6M19 9v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  // Research Icons
  Research: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  ),

  // Validation Icons
  Validation: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path 
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  // Status Icons
  StatusGood: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="rgb(16 185 129 / 0.1)" />
      <circle cx="12" cy="12" r="10" stroke="rgb(16 185 129)" strokeWidth="1.5" fill="none" />
      <path d="M8 12l2 2 4-4" stroke="rgb(16 185 129)" strokeWidth="2" />
    </svg>
  ),

  StatusWarning: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="rgb(245 158 11 / 0.1)" />
      <circle cx="12" cy="12" r="10" stroke="rgb(245 158 11)" strokeWidth="1.5" fill="none" />
      <path d="M12 8v4M12 16h.01" stroke="rgb(245 158 11)" strokeWidth="2" />
    </svg>
  ),

  StatusError: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="rgb(239 68 68 / 0.1)" />
      <circle cx="12" cy="12" r="10" stroke="rgb(239 68 68)" strokeWidth="1.5" fill="none" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="rgb(239 68 68)" strokeWidth="2" />
    </svg>
  ),

  // Analytics Icons
  Analytics: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 16l4-6 3 3 4-8" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="7" cy="16" r="2" fill="currentColor" />
      <circle cx="11" cy="10" r="2" fill="currentColor" />
      <circle cx="14" cy="13" r="2" fill="currentColor" />
      <circle cx="18" cy="5" r="2" fill="currentColor" />
    </svg>
  ),

  // Network Icons
  Network: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <circle cx="18" cy="6" r="2" fill="currentColor" />
      <circle cx="6" cy="18" r="2" fill="currentColor" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
      <path d="M10 10l4-4M10 14l4 4M14 10l-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  // Marketplace Icons
  Marketplace: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M5 7h14l-1 10H6L5 7zM5 7L3 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="20" r="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 7v3h6V7" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),

  // Staking Icons
  Staking: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <rect x="6" y="11" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 11V7a4 4 0 0 0-8 0v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      <path d="M12 16v1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  // Token Icons
  Token: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 6v12M8 10h8M8 14h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
};

export default NeuralIcons;