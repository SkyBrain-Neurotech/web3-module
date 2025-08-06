# SkyBrain App Transformation - Implementation Checklist
## Quick Reference for Development Team

---

## 🚨 IMMEDIATE CHANGES (Day 1)

### Update Pricing Throughout App
- [ ] Change all "$50-200" references to "$2-5 per session"
- [ ] Update lifetime earnings to realistic ranges ($3,600-7,200/year)
- [ ] Fix research project payments ($3-5 per submission, not $75-200)
- [ ] Adjust staking pools to remove unrealistic 15% APY claims

### Messaging Updates
- [ ] Homepage: "Validate wellness products. Earn from your brain data."
- [ ] Remove: "Transform brainwaves into valuable digital assets"
- [ ] Add: "Earn $300-600 monthly with consistent participation"
- [ ] Emphasize: Wellness validation over pure data sales

---

## 📱 WEEK 1: Core UI Changes

### Dashboard Redesign (`src/components/NeuroDataEcosystem.tsx`)
- [ ] Add "Today's Earnings" widget ($0-20 range)
- [ ] Show "Monthly Progress" toward $300-600 goal
- [ ] Add "Active Wellness Tests" section
- [ ] Create "Data Quality Score" prominently displayed
- [ ] Remove complex DeFi staking interface

### New Wellness Tab
- [ ] Replace or rename "Staking" tab to "Wellness Testing"
- [ ] Show active product validations
- [ ] Display upcoming test opportunities
- [ ] Add earnings tracker for wellness validation
- [ ] Include product testing calendar

---

## 🔧 WEEK 2: Service Layer Updates

### Update Mock Services (`src/utils/`)
- [ ] Modify `skyEcosystem.ts`:
  - Reduce NFT prices to $2-5 range
  - Update research rewards to $3-5
  - Remove unrealistic staking APYs
  - Add wellness validation methods

- [ ] Create `wellnessValidation.ts`:
  ```typescript
  - createProductTest()
  - enrollInValidation()
  - submitTestData()
  - calculateWellnessEarnings()
  ```

- [ ] Update `mockDataService.ts`:
  - Add wellness product categories
  - Create validation session types
  - Implement quality scoring (60-95%)
  - Add product testing history

---

## 🎨 WEEK 3: New Components

### Create Wellness Components
- [ ] `WellnessValidationDashboard.tsx`
  - Active tests display
  - Progress tracking
  - Earnings calculator
  - Test schedule

- [ ] `ProductTestEnrollment.tsx`
  - Browse available tests
  - Enrollment wizard
  - Requirements checklist
  - Compensation display

- [ ] `DataQualityMonitor.tsx`
  - Real-time quality score
  - Improvement suggestions
  - Historical trends
  - Quality-based earnings

### Update Existing Components
- [ ] `SessionTokenizer.tsx`:
  - Show realistic $2-5 values
  - Add quality indicators
  - Display wellness eligibility

- [ ] `ResearchRequests.tsx`:
  - Update to show $3-5 payments
  - Add batch submission options
  - Show weekly earning potential

---

## 💾 WEEK 4: Data Models

### Update Type Definitions (`src/types/`)
```typescript
interface WellnessProduct {
  id: string;
  name: string;
  company: string;
  category: 'app' | 'supplement' | 'device';
  testDuration: number; // days
  compensation: number; // total USD
  requirements: TestRequirements;
  participantsNeeded: number;
  participantsEnrolled: number;
}

interface UserEarnings {
  daily: number;      // $0-20
  weekly: number;     // $0-140
  monthly: number;    // $0-600
  sources: {
    baseline: number;
    wellness: number;
    research: number;
    bonuses: number;
  };
}

interface DataQuality {
  score: number;      // 0-100
  tier: 'basic' | 'standard' | 'premium';
  multiplier: number; // 1.0-2.5x
  improvements: string[];
}
```

---

## 🚀 WEEK 5: Advanced Features

### Implement Earning Systems
- [ ] Daily streak bonuses ($5 for 7 days, $25 for 30 days)
- [ ] Quality multipliers (1x-2.5x based on signal quality)
- [ ] Referral program ($10 per active referral)
- [ ] Milestone achievements (visual badges, small bonuses)

### Add B2B Features
- [ ] Company dashboard mockup
- [ ] Validation study creator
- [ ] Participant matching algorithm
- [ ] Results visualization

### Community Features
- [ ] Impact tracker ("Your data helped validate 5 products")
- [ ] Leaderboard (quality scores, not earnings)
- [ ] Community goals ("Help us reach 1000 validations")
- [ ] Success stories carousel

---

## 📊 WEEK 6: Analytics & Polish

### Add Analytics
- [ ] Earning projections calculator
- [ ] Time investment tracker
- [ ] Quality improvement tips
- [ ] Wellness validation history

### Polish & Testing
- [ ] Responsive design check
- [ ] Loading states for all actions
- [ ] Error handling improvements
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## ✅ DEFINITION OF DONE

### Must Have:
- [x] Realistic $2-5 per session pricing
- [x] Wellness validation as primary feature
- [x] Monthly earning goal of $300-600
- [x] Quality-based payment multipliers
- [x] Product testing enrollment flow

### Should Have:
- [ ] B2B company portal
- [ ] Streak bonuses
- [ ] Community features
- [ ] Achievement system
- [ ] Referral program

### Nice to Have:
- [ ] Advanced analytics
- [ ] Social sharing
- [ ] Gamification elements
- [ ] Mobile app mockup
- [ ] API documentation

---

## 🎯 Success Criteria

### User Understanding:
- Users understand they earn $2-5 per session, not $50-200
- Clear path to $300-600 monthly earnings
- Wellness validation is prominently featured
- Quality matters more than quantity

### Technical Implementation:
- All hardcoded high values replaced
- Wellness validation flow functional
- Realistic mock data throughout
- Consistent messaging across app

### Business Alignment:
- Demonstrates sustainable unit economics
- Shows B2B revenue potential
- Highlights network effects
- Emphasizes data quality and ethics

---

## 🚦 Go-Live Checklist

Before showing to investors/users:
- [ ] All unrealistic prices removed
- [ ] Wellness validation fully integrated
- [ ] Monthly earning calculator working
- [ ] Quality scoring visible
- [ ] At least 3 mock wellness products
- [ ] B2B value proposition clear
- [ ] Community features started
- [ ] Mobile responsive
- [ ] Loading states polished
- [ ] Error messages helpful

---

## 📝 Quick Reference Commands

```bash
# Start development
npm run dev

# Run tests
npm run test

# Check types
npm run type-check

# Lint code
npm run lint

# Build production
npm run build

# Preview production build
npm run preview
```

---

## 🔗 Key Files to Modify

1. `src/components/NeuroDataEcosystem.tsx` - Main dashboard
2. `src/utils/skyEcosystem.ts` - Pricing logic
3. `src/utils/mockDataService.ts` - Data generation
4. `src/components/SessionTokenizer.tsx` - NFT values
5. `src/components/ResearchRequests.tsx` - Research pricing
6. `CLAUDE.md` - Update with new vision

---

## 💬 Key Message Changes

### OLD ❌
- "Earn $50-200 per EEG session"
- "15% APY staking rewards"
- "Premium data NFTs worth hundreds"
- "Decentralized data marketplace"

### NEW ✅
- "Earn $300-600 monthly with consistent participation"
- "Test wellness products and earn $5-15 per validation"
- "Quality data earns 2.5x more"
- "Help validate the wellness industry"

---

This checklist provides a clear, actionable path to transform the app from unrealistic Web3 demo to compelling vision showcase.