import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import {
  Brain,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
  Shield,
  Award,
  Users,
  FileText,
  Lock,
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';

interface UserDataProfile {
  mentalStates: string[];
  dataQuality: number;
  uniquePatterns: string[];
  demographicProfile: {
    ageGroup: string;
    location: string;
    experienceLevel: string;
  };
  sessionHistory: {
    totalSessions: number;
    averageDuration: number;
    preferredTimes: string[];
  };
}

interface ResearchOpportunity {
  id: string;
  title: string;
  institution: string;
  researcher: string;
  category: string;
  compatibility: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  exclusivity: 'open' | 'limited' | 'exclusive';
  requirements: {
    dataTypes: string[];
    qualityThreshold: number;
    demographicFilters: any;
    exclusivityPeriod: number;
    followUpStudies: boolean;
  };
  rewards: {
    baseCompensation: number;
    qualityBonus: number;
    exclusivityBonus: number;
    citationRoyalties: number;
    completionBonus: number;
  };
  matchingFactors: {
    dataTypeMatch: boolean;
    qualityMatch: boolean;
    demographicMatch: boolean;
    availabilityMatch: boolean;
    experienceMatch: boolean;
  };
  projectedEarnings: {
    immediate: number;
    shortTerm: number;
    longTerm: number;
  };
  researchPhase: 'data-collection' | 'analysis' | 'validation' | 'publication';
  participantCount: number;
  targetCount: number;
  deadline: number;
  impactScore: number;
}

interface ResearchMatchingEngineProps {
  userProfile: UserDataProfile;
  userNFTs: any[];
}

const ResearchMatchingEngine: React.FC<ResearchMatchingEngineProps> = ({
  userProfile,
  userNFTs
}) => {
  const [opportunities, setOpportunities] = useState<{
    perfectMatches: ResearchOpportunity[];
    goodMatches: ResearchOpportunity[];
    potentialMatches: ResearchOpportunity[];
    trainingOpportunities: ResearchOpportunity[];
  }>({
    perfectMatches: [],
    goodMatches: [],
    potentialMatches: [],
    trainingOpportunities: []
  });

  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [earningProjections, setEarningProjections] = useState({
    immediate: 0,
    shortTerm: 0,
    longTerm: 0,
    lifetime: 0
  });

  useEffect(() => {
    generateMatches();
    generateAIInsights();
    calculateEarningProjections();
  }, [userProfile, userNFTs]);

  const generateMatches = () => {
    // Simulate AI-powered matching algorithm
    const allOpportunities = generateResearchOpportunities();
    
    const categorized = {
      perfectMatches: [] as ResearchOpportunity[],
      goodMatches: [] as ResearchOpportunity[],
      potentialMatches: [] as ResearchOpportunity[],
      trainingOpportunities: [] as ResearchOpportunity[]
    };

    allOpportunities.forEach(opp => {
      const compatibility = calculateCompatibility(opp, userProfile);
      opp.compatibility = compatibility;

      if (compatibility >= 95) {
        categorized.perfectMatches.push(opp);
      } else if (compatibility >= 80) {
        categorized.goodMatches.push(opp);
      } else if (compatibility >= 60) {
        categorized.potentialMatches.push(opp);
      } else if (opp.requirements.followUpStudies) {
        categorized.trainingOpportunities.push(opp);
      }
    });

    // Sort by projected earnings
    Object.keys(categorized).forEach(key => {
      categorized[key as keyof typeof categorized].sort((a, b) => 
        b.projectedEarnings.immediate - a.projectedEarnings.immediate
      );
    });

    setOpportunities(categorized);
  };

  const generateResearchOpportunities = (): ResearchOpportunity[] => {
    const opportunities = [
      {
        id: 'ai-001',
        title: 'Advanced Meditation State Classification',
        institution: 'ISHA Foundation Research',
        researcher: 'Dr. Rajesh Kumar',
        category: 'wellness',
        compatibility: 0,
        urgency: 'high' as const,
        exclusivity: 'limited' as const,
        requirements: {
          dataTypes: ['meditation', 'focus'],
          qualityThreshold: 85,
          demographicFilters: { ageGroup: '18-65' },
          exclusivityPeriod: 30,
          followUpStudies: true
        },
        rewards: {
          baseCompensation: 750,
          qualityBonus: 150,
          exclusivityBonus: 200,
          citationRoyalties: 3,
          completionBonus: 200
        },
        matchingFactors: {
          dataTypeMatch: true,
          qualityMatch: true,
          demographicMatch: true,
          availabilityMatch: true,
          experienceMatch: true
        },
        projectedEarnings: {
          immediate: 275,
          shortTerm: 1200,
          longTerm: 3500
        },
        researchPhase: 'data-collection',
        participantCount: 34,
        targetCount: 100,
        deadline: Date.now() + 45 * 24 * 60 * 60 * 1000,
        impactScore: 9.2
      },
      {
        id: 'ai-002',
        title: 'Wellness Product Effectiveness Validation',
        institution: 'Patanjali Research Center',
        researcher: 'Dr. Priya Sharma',
        category: 'medical',
        compatibility: 0,
        urgency: 'critical' as const,
        exclusivity: 'exclusive' as const,
        requirements: {
          dataTypes: ['stress', 'focus'],
          qualityThreshold: 80,
          demographicFilters: { workType: 'remote' },
          exclusivityPeriod: 60,
          followUpStudies: false
        },
        rewards: {
          baseCompensation: 850,
          qualityBonus: 80,
          exclusivityBonus: 150,
          citationRoyalties: 5,
          completionBonus: 300
        },
        matchingFactors: {
          dataTypeMatch: true,
          qualityMatch: true,
          demographicMatch: true,
          availabilityMatch: true,
          experienceMatch: false
        },
        projectedEarnings: {
          immediate: 430,
          shortTerm: 2100,
          longTerm: 5000
        },
        researchPhase: 'data-collection',
        participantCount: 12,
        targetCount: 50,
        deadline: Date.now() + 14 * 24 * 60 * 60 * 1000,
        impactScore: 8.8
      },
      {
        id: 'ai-003',
        title: 'Gaming Performance & Cognitive Load Study',
        institution: 'Art of Living Research',
        researcher: 'Dr. Meera Patel',
        category: 'psychology',
        compatibility: 0,
        urgency: 'medium' as const,
        exclusivity: 'open' as const,
        requirements: {
          dataTypes: ['gaming', 'focus'],
          qualityThreshold: 75,
          demographicFilters: { gamerLevel: 'intermediate+' },
          exclusivityPeriod: 0,
          followUpStudies: true
        },
        rewards: {
          baseCompensation: 600,
          qualityBonus: 30,
          exclusivityBonus: 0,
          citationRoyalties: 2,
          completionBonus: 100
        },
        matchingFactors: {
          dataTypeMatch: false,
          qualityMatch: true,
          demographicMatch: false,
          availabilityMatch: true,
          experienceMatch: true
        },
        projectedEarnings: {
          immediate: 130,
          shortTerm: 800,
          longTerm: 2000
        },
        researchPhase: 'analysis',
        participantCount: 67,
        targetCount: 200,
        deadline: Date.now() + 60 * 24 * 60 * 60 * 1000,
        impactScore: 7.5
      }
    ];

    // Add more dynamic opportunities based on user profile
    if (userProfile.mentalStates.includes('sleep')) {
      opportunities.push({
        id: 'ai-004',
        title: 'Sleep Quality & Dream Pattern Analysis',
        institution: 'Hindustan Wellness Institute',
        researcher: 'Dr. Anjali Sharma',
        category: 'neuroscience',
        compatibility: 0,
        urgency: 'high' as const,
        exclusivity: 'limited' as const,
        requirements: {
          dataTypes: ['sleep'],
          qualityThreshold: 90,
          demographicFilters: { ageGroup: '18-65' },
          exclusivityPeriod: 45,
          followUpStudies: true
        },
        rewards: {
          baseCompensation: 950,
          qualityBonus: 100,
          exclusivityBonus: 100,
          citationRoyalties: 7,
          completionBonus: 500
        },
        matchingFactors: {
          dataTypeMatch: true,
          qualityMatch: false,
          demographicMatch: true,
          availabilityMatch: true,
          experienceMatch: true
        },
        projectedEarnings: {
          immediate: 450,
          shortTerm: 2500,
          longTerm: 8000
        },
        researchPhase: 'validation' as const,
        participantCount: 89,
        targetCount: 150,
        deadline: Date.now() + 30 * 24 * 60 * 60 * 1000,
        impactScore: 9.5
      });
    }

    // Add AI Training opportunities
    opportunities.push({
      id: 'ai-005',
      title: 'EEG-Based Brain-Computer Interface Training',
      institution: 'Indian Institute of Technology Delhi',
      researcher: 'Prof. Anil Sharma',
      category: 'ai-training',
      compatibility: 0,
      urgency: 'medium' as const,
      exclusivity: 'limited' as const,
      requirements: {
        dataTypes: ['focus', 'meditation'],
        qualityThreshold: 75,
        demographicFilters: { techBackground: true },
        exclusivityPeriod: 30,
        followUpStudies: true
      },
      rewards: {
        baseCompensation: 800,
        qualityBonus: 120,
        exclusivityBonus: 150,
        citationRoyalties: 4,
        completionBonus: 300
      },
      matchingFactors: {
        dataTypeMatch: true,
        qualityMatch: true,
        demographicMatch: true,
        availabilityMatch: true,
        experienceMatch: true
      },
      projectedEarnings: {
        immediate: 320,
        shortTerm: 1500,
        longTerm: 4200
      },
      researchPhase: 'data-collection' as const,
      participantCount: 45,
      targetCount: 120,
      deadline: Date.now() + 90 * 24 * 60 * 60 * 1000,
      impactScore: 8.3
    });

    // Add Psychology research
    if (userProfile.mentalStates.includes('stress') || userProfile.mentalStates.includes('focus')) {
      opportunities.push({
        id: 'ai-006',
        title: 'Workplace Stress & Mental Resilience Study',
        institution: 'National Institute of Mental Health India',
        researcher: 'Dr. Kavitha Menon',
        category: 'psychology',
        compatibility: 0,
        urgency: 'high' as const,
        exclusivity: 'open' as const,
        requirements: {
          dataTypes: ['stress', 'focus'],
          qualityThreshold: 70,
          demographicFilters: { workingProfessional: true },
          exclusivityPeriod: 0,
          followUpStudies: false
        },
        rewards: {
          baseCompensation: 650,
          qualityBonus: 80,
          exclusivityBonus: 0,
          citationRoyalties: 2,
          completionBonus: 150
        },
        matchingFactors: {
          dataTypeMatch: true,
          qualityMatch: true,
          demographicMatch: true,
          availabilityMatch: true,
          experienceMatch: false
        },
        projectedEarnings: {
          immediate: 250,
          shortTerm: 950,
          longTerm: 2800
        },
        researchPhase: 'analysis' as const,
        participantCount: 78,
        targetCount: 200,
        deadline: Date.now() + 75 * 24 * 60 * 60 * 1000,
        impactScore: 7.8
      });
    }

    return opportunities;
  };

  const calculateCompatibility = (opp: ResearchOpportunity, profile: UserDataProfile): number => {
    let score = 0;
    let factors = 0;

    // Data type match (40% weight)
    const dataTypeMatch = opp.requirements.dataTypes.some(type => 
      profile.mentalStates.includes(type)
    );
    if (dataTypeMatch) {
      score += 40;
      opp.matchingFactors.dataTypeMatch = true;
    }
    factors += 40;

    // Quality match (30% weight)
    if (profile.dataQuality >= opp.requirements.qualityThreshold) {
      score += 30;
      opp.matchingFactors.qualityMatch = true;
    }
    factors += 30;

    // Demographic match (15% weight)
    opp.matchingFactors.demographicMatch = true; // Simplified for demo
    score += 15;
    factors += 15;

    // Experience match (10% weight)
    if (profile.sessionHistory.totalSessions > 10) {
      score += 10;
      opp.matchingFactors.experienceMatch = true;
    }
    factors += 10;

    // Availability match (5% weight)
    opp.matchingFactors.availabilityMatch = true; // Simplified for demo
    score += 5;
    factors += 5;

    return Math.round((score / factors) * 100);
  };

  const generateAIInsights = () => {
    const insights = [];

    if (userProfile.dataQuality > 85) {
      insights.push("Your high data quality (>85%) qualifies you for premium research studies with 2-3x higher compensation");
    }

    if (userProfile.mentalStates.includes('meditation')) {
      insights.push("Meditation data is in high demand - you could earn 40% more by focusing on mindfulness sessions");
    }

    if (userProfile.sessionHistory.totalSessions < 10) {
      insights.push("Complete 10+ sessions to unlock exclusive research opportunities and reputation bonuses");
    }

    const peakHour = userProfile.sessionHistory.preferredTimes[0];
    if (peakHour) {
      insights.push(`Your peak performance time (${peakHour}) aligns with high-value research windows`);
    }

    insights.push("Enable follow-up studies to increase lifetime earnings by up to 250%");

    setAiInsights(insights);
  };

  const calculateEarningProjections = () => {
    let immediate = 0;
    let shortTerm = 0;
    let longTerm = 0;

    // Calculate based on matched opportunities
    opportunities.perfectMatches.forEach(opp => {
      immediate += opp.projectedEarnings.immediate;
      shortTerm += opp.projectedEarnings.shortTerm;
      longTerm += opp.projectedEarnings.longTerm;
    });

    opportunities.goodMatches.slice(0, 3).forEach(opp => {
      immediate += opp.projectedEarnings.immediate * 0.8;
      shortTerm += opp.projectedEarnings.shortTerm * 0.8;
      longTerm += opp.projectedEarnings.longTerm * 0.8;
    });

    const lifetime = longTerm * 3; // Estimate 3 years of participation

    setEarningProjections({
      immediate: Math.round(immediate),
      shortTerm: Math.round(shortTerm),
      longTerm: Math.round(longTerm),
      lifetime: Math.round(lifetime)
    });
  };

  const getUrgencyColor = (urgency: string) => {
    const colors = {
      'low': 'bg-gray-500',
      'medium': 'bg-yellow-500',
      'high': 'bg-orange-500',
      'critical': 'bg-red-500'
    };
    return colors[urgency as keyof typeof colors] || 'bg-gray-500';
  };

  const getExclusivityIcon = (exclusivity: string) => {
    const icons = {
      'open': Users,
      'limited': Shield,
      'exclusive': Lock
    };
    return icons[exclusivity as keyof typeof icons] || Users;
  };

  return (
    <div className="space-y-6">
      {/* AI Insights Banner */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            AI-Powered Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {aiInsights.map((insight, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{insight}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Earning Projections - Tablet Optimized */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-4">
        <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
          <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
            <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-400 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
              ₹{earningProjections.immediate}
            </div>
            <div className="text-xs sm:text-sm text-green-300">Current Value</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
          <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
              ₹{earningProjections.shortTerm}
            </div>
            <div className="text-xs sm:text-sm text-blue-300">Monthly Potential</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-500/30">
          <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
              ₹{earningProjections.longTerm}
            </div>
            <div className="text-xs sm:text-sm text-purple-300">Annual Potential</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
          <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-yellow-400 mx-auto mb-2 sm:mb-3" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
              ₹{earningProjections.lifetime}
            </div>
            <div className="text-xs sm:text-sm text-yellow-300">Total Potential</div>
          </CardContent>
        </Card>
      </div>

      {/* Perfect Matches - Tablet Optimized */}
      {opportunities.perfectMatches.length > 0 && (
        <div className="space-y-4 sm:space-y-6 px-2 sm:px-4">
          <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold flex items-center gap-2 sm:gap-3">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
              Perfect Matches ({opportunities.perfectMatches.length})
            </h3>
            <Badge className="bg-cyan-600 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base">95%+ Compatibility</Badge>
          </div>
          
          <div className="grid gap-3 sm:gap-4">
            {opportunities.perfectMatches.map(opp => (
              <Card 
                key={opp.id} 
                className="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => console.log('Selected opportunity:', opp.title)}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0 w-full sm:w-auto">
                      <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                        <h4 className="font-semibold text-white text-sm sm:text-base lg:text-lg leading-tight sm:leading-relaxed">{opp.title}</h4>
                        <Badge className={`${getUrgencyColor(opp.urgency)} text-white text-xs sm:text-sm px-2 sm:px-3 py-1 flex-shrink-0`}>
                          {opp.urgency.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">{opp.institution} • {opp.researcher}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0 w-full sm:w-auto">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">
                        ₹{opp.rewards.baseCompensation}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">+bonuses</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
                    <div className="text-center p-2 sm:p-3 bg-background/50 rounded-lg">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">Impact</div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold">{opp.impactScore}/10</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-background/50 rounded-lg">
                      {React.createElement(getExclusivityIcon(opp.exclusivity), {
                        className: "h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mx-auto mb-1 sm:mb-2"
                      })}
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">Access</div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold capitalize">{opp.exclusivity}</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-background/50 rounded-lg">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mx-auto mb-1 sm:mb-2" />
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">Royalties</div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold">{opp.rewards.citationRoyalties}%</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-background/50 rounded-lg">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mx-auto mb-1 sm:mb-2" />
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">Progress</div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold">{opp.participantCount}/{opp.targetCount}</div>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4 flex-col sm:flex-row">
                    <div className="flex flex-wrap gap-1 sm:gap-2 lg:gap-3 w-full sm:w-auto">
                      {Object.entries(opp.matchingFactors).filter(([_, match]) => match).map(([factor]) => (
                        <Badge key={factor} variant="outline" className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap">
                          ✓ {factor.replace(/([A-Z])/g, ' $1').trim()}
                        </Badge>
                      ))}
                    </div>
                    <Button className="bg-cyan-600 hover:bg-cyan-500 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold w-full sm:w-auto flex-shrink-0">
                      Apply Now
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Good Matches - Tablet Optimized */}
      {opportunities.goodMatches.length > 0 && (
        <div className="space-y-4 sm:space-y-6 px-2 sm:px-4">
          <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold flex items-center gap-2 sm:gap-3">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              Good Matches ({opportunities.goodMatches.length})
            </h3>
            <Badge className="bg-blue-600 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base">80-95% Compatibility</Badge>
          </div>
          
          <div className="grid gap-3 sm:gap-4">
            {opportunities.goodMatches.slice(0, 3).map(opp => (
              <Card 
                key={opp.id} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                onClick={() => console.log('Selected opportunity:', opp.title)}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0 w-full sm:w-auto">
                      <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 leading-tight sm:leading-relaxed">{opp.title}</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">{opp.institution}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0 w-full sm:w-auto flex flex-col sm:block">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">
                        ₹{opp.rewards.baseCompensation}
                      </div>
                      <div className="flex items-center gap-2 sm:justify-end">
                        <Progress value={opp.compatibility} className="w-20 sm:w-24 lg:w-32 h-2" />
                        <span className="text-xs text-muted-foreground">{opp.compatibility}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Training Opportunities */}
      {opportunities.trainingOpportunities.length > 0 && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Improve Your Profile:</strong> Complete training studies to qualify for higher-paying research. 
            {opportunities.trainingOpportunities.length} opportunities available to boost your data quality score.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ResearchMatchingEngine;