import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Clock, Users, GraduationCap, Award, BookOpen, Target, Microscope } from 'lucide-react';

// Custom distinctive neuroscience icons
const SynapseNetwork = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.8"/>
    <path d="m8 8 4 4m0 0 4-4M12 12l-4 4m4-4 4 4" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" fill="none" opacity="0.3"/>
  </svg>
);

const QuantumCoin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.7"/>
  </svg>
);

const EEGElectrode = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="14.5" cy="9.5" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="14.5" cy="14.5" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="9.5" cy="14.5" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="9.5" cy="9.5" r="1" fill="currentColor" opacity="0.6"/>
    <path d="M12 4v4M20 12h-4M12 20v-4M4 12h4" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
  </svg>
);
import { mockDataService, ResearchRequest, EEGSession } from '../utils/mockDataService';

interface ResearchRequestsProps {
  sessions: EEGSession[];
  onSessionUpdate: () => void;
}

// Academic institution data with colors and categories
const universityThemes = {
  'Stanford University': { color: 'from-red-500 to-orange-500', category: 'neuroscience', icon: SynapseNetwork },
  'MIT': { color: 'from-blue-600 to-indigo-600', category: 'AI training', icon: Target },
  'Johns Hopkins': { color: 'from-purple-600 to-violet-600', category: 'medical', icon: Microscope },
  'Harvard University': { color: 'from-emerald-500 to-teal-500', category: 'psychology', icon: BookOpen },
  'UC Berkeley': { color: 'from-amber-500 to-yellow-500', category: 'wellness', icon: Award },
  'Yale University': { color: 'from-cyan-500 to-blue-500', category: 'neuroscience', icon: GraduationCap }
};

const ResearchRequests: React.FC<ResearchRequestsProps> = ({ sessions, onSessionUpdate }) => {
  const [requests, setRequests] = useState<ResearchRequest[]>([]);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      const data = await mockDataService.getResearchRequests();
      setRequests(data);
    } catch (error) {
      console.error('Failed to load research requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSession = async (requestId: string, sessionId: string) => {
    setSubmitting(requestId);
    try {
      const result = await mockDataService.submitToResearch(sessionId, requestId);
      console.log('Submission successful:', result);
      await loadRequests(); // Refresh requests
      onSessionUpdate();
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setSubmitting(null);
    }
  };

  const getEligibleSessions = (request: ResearchRequest) => {
    return sessions.filter(session => 
      session.duration >= request.criteria.minDuration &&
      (request.criteria.mentalState === 'any' || session.mentalState === request.criteria.mentalState)
    );
  };

  const getUniversityFromResearcher = (researcher: string): string => {
    const universityKeys = Object.keys(universityThemes);
    for (const university of universityKeys) {
      if (researcher.includes(university) || researcher.includes(university.split(' ')[0])) {
        return university;
      }
    }
    return 'Stanford University'; // fallback
  };

  const getCardVariant = (index: number): string => {
    const variants = ['neural-card-primary', 'neural-card-secondary', 'neural-card-accent'];
    return variants[index % variants.length];
  };

  if (loading) {
    return (
      <Card className="neural-glass rounded-organic">
        <CardContent className="flex items-center justify-center py-8">
          <div className="neural-glow-text animate-neural-pulse">
            <SynapseNetwork className="h-8 w-8 animate-organic-float mx-auto mb-2" />
            Loading research opportunities...
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="neural-section">
      <Card className="neural-glass rounded-neural border-0 overflow-hidden">
        <CardHeader className="relative">
          <CardTitle className="neural-text-gradient text-base md:text-lg font-bold flex items-center gap-3 mb-2 justify-center">
            <div className="neural-hexagon w-12 h-12 flex items-center justify-center">
              <SynapseNetwork className="h-6 w-6 text-white" />
            </div>
            Academic Research Partnerships
          </CardTitle>
          <p className="text-muted-foreground text-sm text-center">
            Contribute your neural data to cutting-edge research and earn SKY tokens
          </p>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          {requests.map((request, index) => {
            const eligibleSessions = getEligibleSessions(request);
            const progressPercentage = (request.submissions / request.maxSubmissions) * 100;
            const university = getUniversityFromResearcher(request.researcher);
            const theme = universityThemes[university as keyof typeof universityThemes] || universityThemes['Stanford University'];
            const cardClass = getCardVariant(index);
            const IconComponent = theme.icon;

            return (
              <div
                key={request.id}
                className={`${cardClass} neural-stagger-item animate-neural-fade-in p-8 space-y-6 group transition-all duration-500 hover:scale-105 hover:rotate-1`}
                style={{ '--index': index } as React.CSSProperties}
              >
                {/* University Header */}
                <div className="flex items-start justify-between relative">
                  <div className="flex items-center gap-4">
                    <div className={`neural-blob w-16 h-16 bg-gradient-to-br ${theme.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <Badge 
                        className={`bg-gradient-to-r ${theme.color} text-white border-0 font-semibold px-3 py-1 rounded-full shadow-lg`}
                      >
                        {university}
                      </Badge>
                      <h3 className="font-bold text-base md:text-lg mt-2 neural-glow-text group-hover:text-accent transition-colors text-center">
                        {request.title}
                      </h3>
                      <p className="text-muted-foreground text-xs font-medium text-center">
                        Research Lead: {request.researcher}
                      </p>
                    </div>
                  </div>

                  <Badge 
                    variant={request.status === 'active' ? 'default' : 'secondary'}
                    className={`${
                      request.status === 'active' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-neural-pulse' 
                        : 'bg-muted text-muted-foreground'
                    } font-semibold px-4 py-2 rounded-organic shadow-md`}
                  >
                    {request.status.toUpperCase()}
                  </Badge>
                </div>

                {/* Research Metrics */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="neural-morphism rounded-flow p-4 text-center group-hover:bg-gradient-to-br group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <QuantumCoin className="h-5 w-5 text-green-400 animate-synapse-flicker" />
                    </div>
                    <div className="font-bold text-base md:text-lg neural-glow-text text-green-400 text-center">
                      {request.compensation} {request.currency}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Reward</div>
                  </div>
                  
                  <div className="neural-morphism rounded-flow p-4 text-center group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-blue-400 animate-synapse-flicker" />
                    </div>
                    <div className="font-bold text-base md:text-lg neural-glow-text text-blue-400 text-center">
                      {Math.floor(request.criteria.minDuration / 60)}+ min
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Duration</div>
                  </div>
                  
                  <div className="neural-morphism rounded-flow p-4 text-center group-hover:bg-gradient-to-br group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-purple-400 animate-synapse-flicker" />
                    </div>
                    <div className="font-bold text-base md:text-lg neural-glow-text text-purple-400 text-center">
                      {request.submissions}/{request.maxSubmissions}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Participants</div>
                  </div>
                </div>

                {/* Research Requirements */}
                <div className="neural-glass rounded-organic p-4 space-y-3 border border-border/20">
                  <h4 className="font-semibold text-sm md:text-base flex items-center gap-2 justify-center">
                    <Target className="h-5 w-5 text-accent animate-organic-float" />
                    Research Criteria
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground font-medium">Mental State:</span>
                      <span className="ml-2 font-semibold text-accent capitalize">{request.criteria.mentalState}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-medium">Device Type:</span>
                      <span className="ml-2 font-semibold text-accent">{request.criteria.deviceType}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-muted-foreground">Collection Progress</span>
                      <span className="font-bold text-accent">{progressPercentage.toFixed(0)}% Complete</span>
                    </div>
                    <Progress 
                      value={progressPercentage} 
                      className="h-3 rounded-full bg-muted overflow-hidden"
                    />
                    <div className="text-xs text-muted-foreground text-center">
                      {request.maxSubmissions - request.submissions} submissions remaining
                    </div>
                  </div>
                </div>

                {/* Session Submission Area */}
                {eligibleSessions.length > 0 ? (
                  <div className="neural-glass rounded-organic p-6 space-y-4 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent animate-organic-float" />
                      <span className="font-bold text-sm md:text-base neural-glow-text text-accent text-center block">
                        {eligibleSessions.length} Eligible Session{eligibleSessions.length > 1 ? 's' : ''} Ready
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {eligibleSessions.slice(0, 3).map((session) => (
                        <Button
                          key={session.id}
                          onClick={() => handleSubmitSession(request.id, session.id)}
                          disabled={submitting === request.id || request.status !== 'active'}
                          className={`neural-btn-primary relative overflow-hidden ${
                            submitting === request.id 
                              ? 'animate-neural-pulse' 
                              : 'hover:scale-105 active:scale-95'
                          } transition-all duration-300`}
                        >
                          <div className="flex items-center gap-2 relative z-10">
                            {submitting === request.id ? (
                              <>
                                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <EEGElectrode className="h-4 w-4" />
                                <span className="font-semibold">
                                  {session.mentalState} ({Math.floor(session.duration / 60)}min)
                                </span>
                              </>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="neural-glass rounded-organic p-6 text-center border-2 border-dashed border-border/30">
                    <BookOpen className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3 animate-organic-float" />
                    <p className="text-muted-foreground font-medium">
                      No eligible sessions found for this research.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Record EEG data matching the criteria to participate in this study.
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {requests.length === 0 && (
            <div className="neural-glass rounded-organic p-12 text-center">
              <GraduationCap className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4 animate-organic-float" />
              <h3 className="text-base md:text-lg font-semibold text-muted-foreground mb-2 text-center">No Active Research</h3>
              <p className="text-muted-foreground text-sm text-center">
                Check back soon for new research partnership opportunities.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResearchRequests;