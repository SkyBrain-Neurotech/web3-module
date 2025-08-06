# Data Request Dashboard - Implementation Guide

## Overview
The Data Request Dashboard demonstrates a quality-gated blockchain marketplace where researchers can request specific neural data. The platform showcases how any EEG device could eventually participate once it meets quality standards, creating a universal ecosystem for neuroscience research. Currently uses simulated session data to demonstrate concepts.

---

## 🎯 Core Components

### 1. **Request Creation Interface**

#### Visual Mockup Structure:
```
┌─────────────────────────────────────────────────────────────┐
│ Create Data Request                                    [×]  │
├─────────────────────────────────────────────────────────────┤
│ Step 1: Research Information                               │
│ ┌─────────────────┐ ┌─────────────────┐ ┌──────────────────┐│
│ │ Institution     │ │ Principal       │ │ Ethics Approval  ││
│ │ Stanford Lab    │ │ Dr. Sarah Chen  │ │ [Upload File]    ││
│ └─────────────────┘ └─────────────────┘ └──────────────────┘│
│                                                            │
│ Step 2: EEG Requirements                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Brainwave Patterns Required:                           │ │
│ │ ☑ Alpha (8-12 Hz)    ☑ Beta (13-30 Hz)               │ │
│ │ ☐ Delta (0.5-4 Hz)   ☐ Theta (4-8 Hz)               │ │
│ │ ☐ Gamma (30+ Hz)                                       │ │
│ │                                                        │ │
│ │ Mental States:                                         │ │
│ │ ☑ Meditation  ☑ Focus  ☐ Sleep  ☐ Stress             │ │
│ │                                                        │ │
│ │ Quality Threshold: [85%] ████████░░ 85%               │ │
│ │ Session Duration: [10] minutes minimum                │ │
│ │ Sample Size: [50] participants                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                            │
│ Step 3: Participant Criteria                              │
│ Age Range: [18] - [65]  Gender: [Any ▼]                  │
│ Experience Level: [Intermediate ▼]                        │
│ Location: [Global ▼]                                      │
│                                                            │
│ Step 4: Compensation                                       │
│ Per Participant: [$75] SKY                                │
│ Quality Bonus: [$25] for >90% quality                     │
│ Total Budget: [$5,000] SKY                                │
│                                                            │
│ [Previous] [Preview Request] [Submit Request]             │
└─────────────────────────────────────────────────────────────┘
```

### 2. **Live Request Matching System**

#### Real-Time Dashboard:
```
┌─────────────────────────────────────────────────────────────┐
│ Active Data Requests                    🔴 Live Matching   │
├─────────────────────────────────────────────────────────────┤
│ Stanford Meditation Study               [75% Filled]       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 📊 Match Status:                                       │ │
│ │ • 38/50 participants matched                           │ │
│ │ • Avg quality: 87.3% (target: 85%+)                  │ │
│ │ • Est. completion: 12 days                             │ │
│ │                                                        │ │
│ │ 🎯 Available Now:                                      │ │
│ │ • 15 users online with 90%+ quality                   │ │
│ │ • 23 users match meditation criteria                   │ │
│ │ • 8 premium contributors available                      │ │
│ │ • Devices: 12 Muse, 3 Emotiv, 8 research-grade       │ │
│ │                                                        │ │
│ │ [Auto-Invite Matches] [Manual Selection] [Boost Post] │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                            │
│ MIT Gaming Flow Study                   [12% Filled]       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ⚠️  Limited Matches Available                           │ │
│ │ • 6/50 participants matched                            │ │
│ │ • Need: Gaming + Focus state data                      │ │
│ │ • Consider: Increase compensation or lower quality req │ │
│ │                                                        │ │
│ │ [Adjust Parameters] [Extend Deadline] [Boost Rewards] │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 3. **Wellness Product Validation Interface**

#### Product Validation Request Portal:
```
┌─────────────────────────────────────────────────────────────┐
│ Submit Product for Validation          [Wellness Co. Logo] │
├─────────────────────────────────────────────────────────────┤
│ Product Type: [App ▼]                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Product Information:                                   │ │
│ │ Name: [MindfulnessMax Pro]                             │ │
│ │ Category: [Stress Reduction App]                       │ │
│ │ Claims: "Reduces stress by 40% in 14 days"            │ │
│ │                                                        │ │
│ │ Study Requirements:                                     │ │
│ │ ☑ Pre/post stress level measurement                    │ │
│ │ ☑ 14-day usage tracking                               │ │
│ │ ☑ Control group (placebo app)                         │ │
│ │ ☑ n=100 participants minimum                          │ │
│ │                                                        │ │
│ │ Target Certification: [Silver ▼]                      │ │
│ │ Budget: [$15,000] Timeline: [45 days]                 │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                            │
│ EEG Metrics to Validate:                                   │
│ ☑ Alpha wave increase (relaxation)                        │
│ ☑ Beta wave reduction (stress decrease)                   │
│ ☑ Gamma coherence (focus improvement)                     │
│ ☐ Theta patterns (deep relaxation)                        │
│                                                            │
│ Expected Outcomes:                                         │
│ • 40% reduction in stress markers                         │
│ • Statistically significant alpha increase                │
│ • Consumer trust score improvement                        │
│                                                            │
│ [Preview Study Design] [Submit for Review] [Get Quote]    │
└─────────────────────────────────────────────────────────────┘
```

#### Live Validation Study Dashboard:
```
┌─────────────────────────────────────────────────────────────┐
│ MindfulnessMax Pro Validation Study        [68% Complete]  │
├─────────────────────────────────────────────────────────────┤
│ Study Progress:                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 📊 Participants: 68/100 enrolled                      │ │
│ │ 📈 Preliminary Results (Day 7):                       │ │
│ │     • Stress reduction: 32% (target: 40%)             │ │
│ │     • Alpha wave increase: +18% (p=0.03)              │ │
│ │     • Participant retention: 94%                      │ │
│ │                                                        │ │
│ │ 🎯 Trending toward Silver certification               │ │
│ │ 📅 Est. completion: 12 days                           │ │
│ │                                                        │ │
│ │ ⚠️  Action needed:                                     │ │
│ │     • Need 32 more participants                       │ │
│ │     • Consider boosting recruitment budget            │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                            │
│ Marketing Preview:                                         │
│ "Clinical EEG study shows MindfulnessMax reduces stress   │
│ by 32% in just 7 days. Blockchain-verified results."      │
│                                                            │
│ [Boost Recruitment] [Extend Timeline] [View Raw Data]     │
└─────────────────────────────────────────────────────────────┘
```

### 4. **Participant Side - Request Browser**

#### Available Opportunities Interface:
```
┌─────────────────────────────────────────────────────────────┐
│ Research Opportunities For You          Sort: [Best Match▼]│
├─────────────────────────────────────────────────────────────┤
│ 🎯 Perfect Match (98% compatibility)                        │
│ Meditation State Recognition - Stanford                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 💰 $75 + $25 quality bonus = $100 total               │ │
│ │ ⏱️  10-15 minute sessions                               │ │
│ │ 🧘 Meditation state required                           │ │
│ │ 📊 Your avg quality: 94.1% (exceeds 85% requirement)  │ │
│ │ 🎓 Ethics approved: Stanford IRB #2024-001            │ │
│ │                                                        │ │
│ │ Why you're perfect:                                     │ │
│ │ ✓ Meditation experience: 2+ years                      │ │
│ │ ✓ High alpha wave consistency                          │ │
│ │ ✓ Low artifact levels (8.2%)                          │ │
│ │ ✓ Available in required timeframe                       │ │
│ │                                                        │ │
│ │ [Express Interest] [Learn More] [Not Interested]      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                            │
│ 🔸 Good Match (82% compatibility)                          │
│ Gaming Performance Study - MIT                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 💰 $125 per session                                    │ │
│ │ ⚠️  Requires gaming experience (you: beginner)         │ │
│ │ 🎮 Focus + Gaming state data needed                    │ │
│ │ [Skip This Time] [Improve Profile] [Apply Anyway]     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### Component Structure:
```typescript
// Core Data Request Types
interface DataRequest {
  id: string;
  createdAt: Date;
  status: 'draft' | 'active' | 'collecting' | 'analyzing' | 'completed';
  
  researcher: {
    name: string;
    institution: string;
    email: string;
    credentials: string[];
    ethicsApproval: {
      number: string;
      document: File;
      expiryDate: Date;
    };
  };
  
  requirements: {
    brainwaves: {
      delta?: { min: number; max: number; importance: 'required' | 'preferred' | 'avoid' };
      theta?: { min: number; max: number; importance: 'required' | 'preferred' | 'avoid' };
      alpha?: { min: number; max: number; importance: 'required' | 'preferred' | 'avoid' };
      beta?: { min: number; max: number; importance: 'required' | 'preferred' | 'avoid' };
      gamma?: { min: number; max: number; importance: 'required' | 'preferred' | 'avoid' };
    };
    
    mentalStates: {
      required: ('meditation' | 'focus' | 'sleep' | 'stress' | 'gaming' | 'learning')[];
      preferred: string[];
      duration: { min: number; max: number; }; // seconds
    };
    
    quality: {
      minimumScore: number; // 0-100
      maxArtifactLevel: number; // percentage
      consistencyRequired: boolean;
      deviceTypes?: ('consumer' | 'research' | 'clinical' | 'mobile')[];
      samplingRateMin?: number; // Hz
      channelCountMin?: number;
    };
    
    participants: {
      count: number;
      demographics: {
        ageRange: [number, number];
        gender?: 'male' | 'female' | 'any';
        location?: string[];
        experienceLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
      };
    };
    
    timeline: {
      dataCollectionDeadline: Date;
      analysisDeadline: Date;
      publicationTarget?: Date;
    };
  };
  
  compensation: {
    basePayment: number; // SKY tokens
    qualityBonus?: {
      threshold: number; // quality percentage
      bonus: number; // additional SKY
    };
    completionBonus?: number;
    totalBudget: number;
  };
  
  matching: {
    participantsMatched: number;
    participantsAccepted: number;
    participantsCompleted: number;
    averageQuality: number;
    estimatedCompletion: Date;
  };
}
```

### Smart Matching Algorithm:
```typescript
class ParticipantMatcher {
  calculateCompatibility(participant: UserProfile, request: DataRequest): MatchScore {
    let score = 0;
    let maxScore = 0;
    
    // Quality Score Match (30% weight)
    const qualityWeight = 30;
    if (participant.averageQuality >= request.requirements.quality.minimumScore) {
      score += qualityWeight;
    } else {
      score += (participant.averageQuality / request.requirements.quality.minimumScore) * qualityWeight;
    }
    maxScore += qualityWeight;
    
    // Mental State Experience (25% weight)
    const stateWeight = 25;
    const requiredStates = request.requirements.mentalStates.required;
    const participantStates = participant.experiencedStates;
    const stateMatch = requiredStates.filter(state => participantStates.includes(state)).length;
    score += (stateMatch / requiredStates.length) * stateWeight;
    maxScore += stateWeight;
    
    // Brainwave Pattern Match (20% weight)  
    const brainwaveWeight = 20;
    const brainwaveScore = this.calculateBrainwaveCompatibility(
      participant.brainwaveProfile, 
      request.requirements.brainwaves
    );
    score += brainwaveScore * brainwaveWeight;
    maxScore += brainwaveWeight;
    
    // Demographics (15% weight)
    const demoWeight = 15;
    const demoScore = this.calculateDemographicMatch(
      participant.demographics,
      request.requirements.participants.demographics
    );
    score += demoScore * demoWeight;
    maxScore += demoWeight;
    
    // Availability (10% weight)
    const availWeight = 10;
    const availScore = this.calculateAvailability(participant, request.requirements.timeline);
    score += availScore * availWeight;
    maxScore += availWeight;
    
    return {
      overallScore: (score / maxScore) * 100,
      breakdown: {
        quality: qualityWeight,
        mentalStates: stateWeight,
        brainwaves: brainwaveWeight,
        demographics: demoWeight,
        availability: availWeight
      },
      recommendations: this.generateRecommendations(participant, request)
    };
  }
}
```

### Real-time Updates System:
```typescript
class RequestTrackingService {
  private subscriptions = new Map<string, WebSocket[]>();
  
  subscribeToRequest(requestId: string, callback: (update: RequestUpdate) => void) {
    // WebSocket connection for real-time updates
    const ws = new WebSocket(`ws://localhost:3009/requests/${requestId}`);
    
    ws.onmessage = (event) => {
      const update: RequestUpdate = JSON.parse(event.data);
      callback(update);
    };
    
    return ws;
  }
  
  updateRequestStatus(requestId: string, update: RequestUpdate) {
    // Broadcast to all subscribers
    const sockets = this.subscriptions.get(requestId) || [];
    sockets.forEach(ws => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(update));
      }
    });
  }
}
```

---

## 🎨 Key UI Components to Build

### 1. **Request Creation Wizard Component**
```typescript
const RequestCreationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [requestData, setRequestData] = useState<Partial<DataRequest>>({});
  
  const steps = [
    { title: 'Research Info', component: ResearchInfoStep },
    { title: 'EEG Requirements', component: EEGRequirementsStep },
    { title: 'Participants', component: ParticipantCriteriaStep },
    { title: 'Compensation', component: CompensationStep },
    { title: 'Review', component: ReviewStep }
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <StepIndicator currentStep={step} totalSteps={steps.length} />
      <div className="mt-8">
        {steps[step - 1].component({ data: requestData, onChange: setRequestData })}
      </div>
      <NavigationButtons 
        step={step} 
        totalSteps={steps.length}
        onPrevious={() => setStep(step - 1)}
        onNext={() => setStep(step + 1)}
        onSubmit={() => submitRequest(requestData)}
      />
    </div>
  );
};
```

### 2. **Live Matching Dashboard**
```typescript
const LiveMatchingDashboard: React.FC<{ requestId: string }> = ({ requestId }) => {
  const [matchingData, setMatchingData] = useState<MatchingStatus>();
  const [availableParticipants, setAvailableParticipants] = useState<ParticipantMatch[]>([]);
  
  useEffect(() => {
    const ws = requestTrackingService.subscribeToRequest(requestId, (update) => {
      setMatchingData(update.matching);
      setAvailableParticipants(update.availableParticipants);
    });
    
    return () => ws.close();
  }, [requestId]);
  
  return (
    <div className="space-y-6">
      <MatchingProgress data={matchingData} />
      <AvailableParticipants 
        participants={availableParticipants}
        onInvite={handleInviteParticipant}
        onAutoMatch={handleAutoMatch}
      />
      <QualityMetrics data={matchingData?.qualityStats} />
    </div>
  );
};
```

### 3. **Participant Opportunity Browser**
```typescript
const OpportunityBrowser: React.FC = () => {
  const [opportunities, setOpportunities] = useState<MatchedOpportunity[]>([]);
  const [filters, setFilters] = useState<OpportunityFilters>({});
  
  const filteredOpportunities = useMemo(() => {
    return opportunities
      .map(opp => ({
        ...opp,
        compatibility: calculateCompatibility(userProfile, opp.request)
      }))
      .sort((a, b) => b.compatibility.overallScore - a.compatibility.overallScore);
  }, [opportunities, filters]);
  
  return (
    <div className="space-y-4">
      <OpportunityFilters filters={filters} onChange={setFilters} />
      {filteredOpportunities.map(opportunity => (
        <OpportunityCard 
          key={opportunity.id}
          opportunity={opportunity}
          onApply={handleApplyToOpportunity}
          onSaveForLater={handleSaveOpportunity}
        />
      ))}
    </div>
  );
};
```

---

## 🚀 Demo Value Propositions

### For Investors:
1. **Scalable B2B Model**: Show how your EEG app can serve multiple research institutions simultaneously
2. **Quality Assurance**: Demonstrate automated validation that ensures data integrity  
3. **Market Dynamics**: Real-time supply/demand matching creates natural pricing
4. **Network Effects**: More participants = better matches = higher value for researchers

### For Researchers:
1. **Precision Recruitment**: Find exactly the right participants for specific studies
2. **Quality Guarantees**: Built-in validation ensures data meets standards
3. **Efficient Workflow**: Automated matching reduces time from months to days
4. **Transparent Process**: Blockchain ensures ethical compliance and data provenance

### For Participants:
1. **Personalized Opportunities**: AI matching shows only relevant, high-paying studies
2. **Skill Development**: Feedback helps improve data quality and earning potential
3. **Research Impact**: See how their contributions lead to real scientific breakthroughs
4. **Fair Compensation**: Dynamic pricing ensures competitive payments

---

This implementation plan provides the framework for building a comprehensive data request system that showcases the full potential of your Web3 EEG platform while maintaining focus on real features that could be implemented with your actual hardware system.