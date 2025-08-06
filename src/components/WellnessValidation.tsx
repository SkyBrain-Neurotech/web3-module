import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import {
  Building2,
  CheckCircle,
  Shield,
  Award,
  FileCheck,
  Users,
  BarChart3,
  TrendingUp,
  Clock,
  ChevronRight,
  Star
} from 'lucide-react';

interface WellnessCompany {
  id: string;
  name: string;
  logo: string;
  description: string;
  products: string[];
  verificationLevel: 'startup' | 'established' | 'enterprise';
  certificationLevel: 'none' | 'bronze' | 'silver' | 'gold';
  studiesCompleted: number;
  trustScore: number;
}

interface ValidationStudy {
  id: string;
  companyId: string;
  studyType: 'efficacy' | 'comparative' | 'dosage' | 'safety';
  title: string;
  description: string;
  participantsNeeded: number;
  participantsEnrolled: number;
  dataRequirements: string[];
  compensation: number;
  timeline: number;
  status: 'recruiting' | 'active' | 'analysis' | 'completed';
  results?: {
    efficacyScore: number;
    confidenceLevel: number;
    marketingClaims: string[];
  };
}

const WellnessValidation: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<WellnessCompany | null>(null);
  const [activeStudies, setActiveStudies] = useState<ValidationStudy[]>([
    {
      id: 'study-001',
      companyId: 'mindful-tech',
      studyType: 'efficacy',
      title: 'Meditation App Stress Reduction Validation',
      description: 'Validate 30% stress reduction claims using real-time EEG data',
      participantsNeeded: 100,
      participantsEnrolled: 67,
      dataRequirements: ['stress patterns', 'meditation states', '30-day tracking'],
      compensation: 300,
      timeline: 45,
      status: 'recruiting'
    },
    {
      id: 'study-002',
      companyId: 'zenwave',
      studyType: 'comparative',
      title: 'Sleep Quality Enhancement vs Competitors',
      description: 'Compare sleep improvement metrics against leading sleep apps',
      participantsNeeded: 150,
      participantsEnrolled: 89,
      dataRequirements: ['sleep patterns', 'REM cycles', 'morning alertness'],
      compensation: 450,
      timeline: 60,
      status: 'active'
    },
    {
      id: 'study-003',
      companyId: 'focusflow',
      studyType: 'dosage',
      title: 'Optimal Session Length for Focus Enhancement',
      description: 'Determine ideal meditation duration for peak productivity',
      participantsNeeded: 80,
      participantsEnrolled: 80,
      dataRequirements: ['focus states', 'productivity metrics', 'session duration'],
      compensation: 250,
      timeline: 30,
      status: 'analysis',
      results: {
        efficacyScore: 87,
        confidenceLevel: 94,
        marketingClaims: [
          '87% improvement in focus after 15-minute sessions',
          'Optimal session length: 12-18 minutes',
          '94% confidence in results'
        ]
      }
    }
  ]);

  const companies: WellnessCompany[] = [
    {
      id: 'mindful-tech',
      name: 'MindfulTech Solutions',
      logo: '🧘',
      description: 'AI-powered meditation and mindfulness apps',
      products: ['CalmMind Pro', 'ZenFlow', 'MediTrack'],
      verificationLevel: 'established',
      certificationLevel: 'silver',
      studiesCompleted: 12,
      trustScore: 8.5
    },
    {
      id: 'zenwave',
      name: 'ZenWave Technologies',
      logo: '😴',
      description: 'Sleep optimization and recovery solutions',
      products: ['SleepDeep', 'DreamAnalyzer', 'RestorePlus'],
      verificationLevel: 'enterprise',
      certificationLevel: 'gold',
      studiesCompleted: 24,
      trustScore: 9.2
    },
    {
      id: 'focusflow',
      name: 'FocusFlow Labs',
      logo: '🎯',
      description: 'Productivity and cognitive enhancement tools',
      products: ['FlowState', 'BrainBoost', 'TaskMaster AI'],
      verificationLevel: 'startup',
      certificationLevel: 'bronze',
      studiesCompleted: 5,
      trustScore: 7.8
    }
  ];

  const getCertificationBadge = (level: string) => {
    const badges = {
      'none': { color: 'bg-gray-500', text: 'Unverified' },
      'bronze': { color: 'bg-orange-600', text: 'Bronze Certified' },
      'silver': { color: 'bg-gray-400', text: 'Silver Certified' },
      'gold': { color: 'bg-yellow-500', text: 'Gold Certified' }
    };
    return badges[level as keyof typeof badges] || badges.none;
  };

  const getStudyTypeIcon = (type: string) => {
    const icons = {
      'efficacy': FileCheck,
      'comparative': BarChart3,
      'dosage': Clock,
      'safety': Shield
    };
    return icons[type as keyof typeof icons] || FileCheck;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'recruiting': 'text-blue-400 bg-blue-900/30',
      'active': 'text-green-400 bg-green-900/30',
      'analysis': 'text-yellow-400 bg-yellow-900/30',
      'completed': 'text-purple-400 bg-purple-900/30'
    };
    return colors[status as keyof typeof colors] || 'text-gray-400 bg-gray-900/30';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Wellness Company Validation Platform</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Help wellness companies validate their claims with real neural data. 
          Build trust through blockchain-verified studies.
        </p>
      </div>

      {/* How It Works */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" />
            How Validation Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="font-medium">Company Submits</h4>
              <p className="text-xs text-muted-foreground">Wellness company requests validation study</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="font-medium">Users Participate</h4>
              <p className="text-xs text-muted-foreground">Community provides neural data</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="font-medium">AI Analysis</h4>
              <p className="text-xs text-muted-foreground">Data analyzed for efficacy claims</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-yellow-400" />
              </div>
              <h4 className="font-medium">Certification</h4>
              <p className="text-xs text-muted-foreground">Blockchain-verified results issued</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verified Companies */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Verified Wellness Companies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {companies.map(company => {
            const badge = getCertificationBadge(company.certificationLevel);
            return (
              <Card 
                key={company.id} 
                className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => setSelectedCompany(company)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{company.logo}</div>
                      <div>
                        <CardTitle className="text-base">{company.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{company.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={`${badge.color} text-white text-xs`}>
                      {badge.text}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{company.trustScore}/10</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Studies:</span>
                      <span className="ml-1 font-medium">{company.studiesCompleted}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Products:</span>
                      <span className="ml-1 font-medium">{company.products.length}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {company.products.slice(0, 2).map(product => (
                      <Badge key={product} variant="outline" className="text-xs">
                        {product}
                      </Badge>
                    ))}
                    {company.products.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{company.products.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Active Validation Studies */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Active Validation Studies</h3>
        <div className="grid gap-4">
          {activeStudies.map(study => {
            const company = companies.find(c => c.id === study.companyId);
            const Icon = getStudyTypeIcon(study.studyType);
            const progress = (study.participantsEnrolled / study.participantsNeeded) * 100;
            
            return (
              <Card key={study.id} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">{study.title}</h4>
                        <Badge className={`${getStatusColor(study.status)} text-xs`}>
                          {study.status.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{study.description}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">by</span>
                        <span className="font-medium">{company?.name}</span>
                        <span className="text-muted-foreground">•</span>
                        <span>{study.timeline} day study</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${study.compensation}</div>
                      <div className="text-xs text-muted-foreground">per participant</div>
                    </div>
                  </div>

                  {study.status !== 'completed' && (
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>Enrollment Progress</span>
                        <span>{study.participantsEnrolled}/{study.participantsNeeded} participants</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}

                  {study.results && (
                    <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30 mb-3">
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-green-300">Study Results</span>
                          <Badge className="bg-green-600 text-white text-xs">
                            {study.results.confidenceLevel}% Confidence
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          {study.results.marketingClaims.map((claim, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-400 mt-0.5" />
                              <span className="text-xs">{claim}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {study.dataRequirements.map(req => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    {study.status === 'recruiting' && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Join Study
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Benefits for Companies */}
      <Alert className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
        <TrendingUp className="h-4 w-4" />
        <AlertDescription>
          <strong>For Wellness Companies:</strong> Blockchain-verified studies increase consumer trust by 73%, 
          reduce regulatory scrutiny by 45%, and enable premium pricing with validated health claims.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default WellnessValidation;