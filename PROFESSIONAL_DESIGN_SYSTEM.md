# SkyBrain Professional Design System

## 🎨 Professional Dark Theme Color Palette

### Primary Colors
```css
:root {
  /* Neural Blue - Primary Brand */
  --neural-blue-50: #f0f9ff;
  --neural-blue-100: #e0f2fe;
  --neural-blue-200: #bae6fd;
  --neural-blue-300: #7dd3fc;
  --neural-blue-400: #38bdf8;
  --neural-blue-500: #0ea5e9;  /* Primary */
  --neural-blue-600: #0284c7;
  --neural-blue-700: #0369a1;
  --neural-blue-800: #075985;
  --neural-blue-900: #0c4a6e;

  /* Neural Purple - Secondary Brand */
  --neural-purple-50: #faf5ff;
  --neural-purple-100: #f3e8ff;
  --neural-purple-200: #e9d5ff;
  --neural-purple-300: #d8b4fe;
  --neural-purple-400: #c084fc;
  --neural-purple-500: #a855f7;  /* Secondary */
  --neural-purple-600: #9333ea;
  --neural-purple-700: #7c3aed;
  --neural-purple-800: #6b21a8;
  --neural-purple-900: #581c87;

  /* Neural Teal - Accent */
  --neural-teal-50: #f0fdfa;
  --neural-teal-100: #ccfbf1;
  --neural-teal-200: #99f6e4;
  --neural-teal-300: #5eead4;
  --neural-teal-400: #2dd4bf;
  --neural-teal-500: #14b8a6;  /* Accent */
  --neural-teal-600: #0d9488;
  --neural-teal-700: #0f766e;
  --neural-teal-800: #115e59;
  --neural-teal-900: #134e4a;
}
```

### Professional Dark Mode Foundation
```css
.dark {
  /* Background Layers */
  --bg-primary: #0a0e1a;      /* Deepest background */
  --bg-secondary: #111827;     /* Card backgrounds */
  --bg-tertiary: #1f2937;      /* Elevated surfaces */
  --bg-quaternary: #374151;    /* Interactive elements */

  /* Text Hierarchy */
  --text-primary: #f9fafb;     /* Headlines, important text */
  --text-secondary: #e5e7eb;   /* Body text */
  --text-tertiary: #9ca3af;    /* Secondary info */
  --text-quaternary: #6b7280;  /* Disabled/placeholder */

  /* Border & Dividers */
  --border-primary: #374151;   /* Strong borders */
  --border-secondary: #2d3748; /* Subtle dividers */
  --border-accent: #0ea5e9;    /* Focused/active borders */

  /* Status Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* Professional Gradients */
  --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%);
  --gradient-surface: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  --gradient-accent: linear-gradient(90deg, #14b8a6 0%, #0ea5e9 100%);

  /* Professional Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -1px rgb(0 0 0 / 0.3);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -2px rgb(0 0 0 / 0.3);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 10px 10px -5px rgb(0 0 0 / 0.3);
  --shadow-glow: 0 0 20px rgb(14 165 233 / 0.3);
}
```

## 📐 Professional Typography Scale

```css
/* Professional Font Stack */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  /* Type Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

## 🎯 Professional Icon Library

### Custom Neural Icons (SVG Components)
```typescript
// Professional icon components with consistent styling
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
      <circle cx="12" cy="12" r="10" fill="var(--success)" opacity="0.1" />
      <circle cx="12" cy="12" r="10" stroke="var(--success)" strokeWidth="1.5" fill="none" />
      <path d="M8 12l2 2 4-4" stroke="var(--success)" strokeWidth="2" />
    </svg>
  ),

  StatusWarning: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="var(--warning)" opacity="0.1" />
      <circle cx="12" cy="12" r="10" stroke="var(--warning)" strokeWidth="1.5" fill="none" />
      <path d="M12 8v4M12 16h.01" stroke="var(--warning)" strokeWidth="2" />
    </svg>
  ),

  StatusError: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="var(--error)" opacity="0.1" />
      <circle cx="12" cy="12" r="10" stroke="var(--error)" strokeWidth="1.5" fill="none" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="var(--error)" strokeWidth="2" />
    </svg>
  ),
};
```

## 🖼 Professional Component Styling

### Enhanced Card Components
```css
/* Professional Card Styling */
.professional-card {
  background: var(--gradient-surface);
  border: 1px solid var(--border-secondary);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.professional-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-accent);
  opacity: 0.5;
}

.professional-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
  transform: translateY(-2px);
}

.professional-card-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid var(--border-secondary);
}

.professional-card-content {
  padding: 24px;
}

.professional-card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.professional-card-subtitle {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-weight: var(--font-normal);
}
```

### Professional Button System
```css
/* Primary Button */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  font-family: var(--font-sans);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  box-shadow: var(--shadow-md), 0 0 20px rgba(14, 165, 233, 0.3);
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  font-family: var(--font-sans);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--bg-tertiary);
  border-color: var(--border-accent);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

/* Status Buttons */
.btn-success {
  background: var(--success);
  color: white;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
}

.btn-warning {
  background: var(--warning);
  color: white;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
}

.btn-error {
  background: var(--error);
  color: white;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
}
```

### Professional Form Elements
```css
/* Form Inputs */
.form-input {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-secondary);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: var(--text-sm);
  color: var(--text-primary);
  font-family: var(--font-sans);
  transition: all 0.2s ease;
  width: 100%;
}

.form-input:focus {
  outline: none;
  border-color: var(--border-accent);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  background: var(--bg-secondary);
}

.form-input::placeholder {
  color: var(--text-quaternary);
}

/* Form Labels */
.form-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: block;
}

/* Form Groups */
.form-group {
  margin-bottom: 24px;
}

.form-group-inline {
  display: flex;
  gap: 16px;
  align-items: end;
}
```

### Professional Data Visualization
```css
/* Progress Bars */
.progress-container {
  background: var(--bg-tertiary);
  border-radius: 8px;
  height: 8px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 8px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Status Badges */
.badge-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.badge-error {
  background: rgba(239, 68, 68, 0.1);
  color: var(--error);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.badge-info {
  background: rgba(59, 130, 246, 0.1);
  color: var(--info);
  border: 1px solid rgba(59, 130, 246, 0.2);
}
```

## 📱 Professional Layout System

### Grid System
```css
/* Professional Grid Layout */
.grid-container {
  display: grid;
  gap: 24px;
  width: 100%;
}

.grid-1 { grid-template-columns: 1fr; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Grid */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Professional Spacing */
.space-xs { gap: 8px; }
.space-sm { gap: 16px; }
.space-md { gap: 24px; }
.space-lg { gap: 32px; }
.space-xl { gap: 48px; }

/* Professional Padding */
.p-xs { padding: 8px; }
.p-sm { padding: 16px; }
.p-md { padding: 24px; }
.p-lg { padding: 32px; }
.p-xl { padding: 48px; }
```

### Professional Navigation
```css
/* Professional Header */
.professional-header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-secondary);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: between;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.professional-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
}

.professional-nav {
  display: flex;
  gap: 32px;
  align-items: center;
}

.professional-nav-item {
  color: var(--text-tertiary);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: color 0.2s ease;
  position: relative;
}

.professional-nav-item:hover,
.professional-nav-item.active {
  color: var(--text-primary);
}

.professional-nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -17px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: 1px;
}
```

## 🎨 Professional Animation System

```css
/* Professional Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(14, 165, 233, 0.4);
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in-scale {
  animation: fadeInScale 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-pulse-glow {
  animation: pulseGlow 2s infinite;
}

/* Stagger Animations */
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 100ms; }
.stagger-item:nth-child(3) { animation-delay: 200ms; }
.stagger-item:nth-child(4) { animation-delay: 300ms; }
.stagger-item:nth-child(5) { animation-delay: 400ms; }
```

This professional design system will transform your demo from looking like a simple prototype into a enterprise-grade B2B platform that investors and wellness companies will take seriously.