# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3001 (different from main app to avoid conflicts)
- `npm run build` - Build production version using Vite
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with auto-fix on TypeScript/TSX files in src/
- `npm run type-check` - Run TypeScript compilation without emitting files

### Installation
- `npm install` - Install all dependencies

## Architecture

This is a **standalone React application** for SkyBrain's decentralized neural data ecosystem, extracted from the main SkyBrain application for independent deployment and development.

### Core Architecture Patterns

**Service Layer Architecture**: The app uses a service-oriented architecture with mock services for development:
- `src/utils/skyEcosystem.ts` - Main blockchain/NFT service handling wallet operations, NFT minting, research submissions, and staking
- `src/utils/mockDataService.ts` - Mock EEG data service for session management and marketplace operations
- `src/utils/enhancedBlockchain.ts` - Enhanced blockchain integration service
- `src/utils/indianWellnessService.ts` - Wellness validation service with Indian health standards
- `src/utils/delayedMonetizationService.ts` - Monetization strategy service

**Component-Based UI**: Built with React + TypeScript using shadcn/ui components:
- `src/components/NeuroDataEcosystemEnhanced.tsx` - Enhanced main ecosystem component with comprehensive features
- `src/components/NeuroDataEcosystem.tsx` - Core ecosystem component with tabbed interface
- `src/components/SessionTokenizer.tsx` - Converts EEG sessions to NFTs
- `src/components/ResearchRequests.tsx` - Research marketplace integration
- `src/components/WellnessValidation.tsx` - Wellness validation and data control components
- `src/components/DataControlDashboard.tsx` - Data privacy and consent management
- `src/components/ResearchMatchingEngine.tsx` - AI-powered research matching
- `src/components/EducationalLanding.tsx` - Educational onboarding experience
- `src/components/WellnessValidationLanding.tsx` - Business model presentation
- `src/components/OnboardingFlow.tsx` - User onboarding components
- `src/components/ui/` - Reusable UI components (cards, buttons, badges, tabs, progress, alerts)

**State Management**: Uses React hooks for local state management with service layer integration for data persistence.

### Key Domain Concepts

**Data NFT Lifecycle**: EEG sessions → NFT minting → marketplace listing OR research submission
- Sessions have wave patterns (delta, theta, alpha, beta, gamma bands)
- Quality scoring determines NFT rarity (basic/standard/premium)
- Dynamic pricing based on quality, duration, and research demand

**SKY Token Economy**: 
- Wallet balance tracking with lifetime earnings
- Research contribution rewards with impact scoring
- Staking pools (research funding, data validation, governance) with different APY and lock periods

**Research Marketplace**: Active university partnerships with specific data requirements
- Stanford, MIT, Johns Hopkins, Harvard, UC Berkeley, Yale
- Category-based research (neuroscience, psychology, AI training, medical, wellness)
- Automatic submission eligibility checking based on NFT metadata

### Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system (dark theme focused)
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks + service layer
- **Build Tool**: Vite with custom alias (`@/` → `./src/`)

### File Structure Patterns

```
src/
├── components/          # Feature components
│   ├── ui/             # Reusable UI primitives (shadcn/ui)
│   └── *.tsx           # Main feature components
├── utils/              # Business logic services and blockchain integration
├── lib/                # Utility functions (cn helper for Tailwind)
├── styles/             # Global CSS and Tailwind configuration
└── App.tsx             # Main app with React Router setup
```

### Development Notes

**Port Configuration**: Runs on port 3001 to avoid conflicts with main SkyBrain app
**Mock Data**: Uses in-memory mock services for development - no real blockchain integration
**Routing**: React Router with multi-page architecture:
  - `/` - Educational landing page
  - `/business-model` - Wellness validation service presentation 
  - `/demo-interface` - Main ecosystem demo platform
  - `/tokenizer` - Session tokenization interface
**Responsive Design**: Mobile-first approach with progressive enhancement
**Type Safety**: Strict TypeScript configuration with path mapping (`@/` alias)
**Component Conventions**: Uses shadcn/ui patterns for consistent styling and accessibility
**Dark Theme**: Enforced dark theme with neural-themed color scheme

### Integration Points

This app is designed to integrate with the main SkyBrain application via:
- Shared API endpoints (when backend is implemented)
- Cross-origin communication for embedded usage
- Shared authentication tokens
- Iframe embedding capabilities

### Research Partner Data

The app includes real research institution branding and contact information:
- University partnerships with specific research criteria
- Realistic compensation models and submission requirements
- Category-specific research projects with progress tracking