// Delayed Monetization Service - Following the pre-launch data collection model
// Users contribute data with full control, monetization happens when value is created

export interface DataContribution {
  id: string;
  userId: string;
  sessionId: string;
  timestamp: number;
  dataQuality: number;
  contextualData: ContextualData;
  destinations: DataDestination[];
  monetizationStatus: 'pending' | 'processing' | 'realized';
  earnings: EarningsBreakdown;
}

export interface ContextualData {
  // Rich contextual information - the key to valuable data
  demographics: {
    age?: number;
    location?: string;
    occupation?: string;
    healthStatus?: string;
  };
  sessionContext: {
    timeOfDay: string;
    activity: 'meditation' | 'focus' | 'rest' | 'sleep' | 'stress';
    environment: string;
    duration: number;
  };
  wellnessContext: {
    productsUsed?: string[];
    supplements?: string[];
    practices?: string[];
    goals?: string[];
  };
  longitudinal: {
    sessionNumber: number;
    daysInProgram: number;
    previousSessions: number;
    consistency: number;
  };
}

export interface DataDestination {
  id: string;
  type: 'wellness_validation' | 'ai_training' | 'research' | 'clinical';
  name: string;
  status: 'pending' | 'active' | 'completed';
  matchScore: number; // How well this data fits the destination's needs
  estimatedValue: number;
  realizationTimeline: string;
}

export interface EarningsBreakdown {
  immediate: number; // $0 - no unsustainable upfront payments
  pending: DelayedEarning[];
  projected: number; // Based on selected destinations and data quality
  realized: number; // Actual earnings from completed monetization
  timeline: string;
}

export interface DelayedEarning {
  source: string;
  amount: number;
  status: 'pending' | 'processing' | 'paid';
  expectedDate: number;
  condition: string; // What needs to happen for payment
}

class DelayedMonetizationService {
  private contributions: DataContribution[] = [];
  private destinationMatches: Map<string, DataDestination[]> = new Map();

  // Core principle: Collect rich contextual data first, find value later
  async contributeData(
    sessionId: string,
    eegData: any,
    context: ContextualData,
    userConsents: string[]
  ): Promise<DataContribution> {
    // Calculate data quality based on signal + context richness
    const dataQuality = this.calculateDataValue(eegData, context);
    
    // Find potential destinations based on data characteristics
    const destinations = await this.findDataDestinations(
      eegData,
      context,
      userConsents,
      dataQuality
    );

    // Create contribution record with projected earnings
    const contribution: DataContribution = {
      id: `contrib-${Date.now()}`,
      userId: 'current-user',
      sessionId,
      timestamp: Date.now(),
      dataQuality,
      contextualData: context,
      destinations,
      monetizationStatus: 'pending',
      earnings: this.calculateDelayedEarnings(destinations, dataQuality)
    };

    this.contributions.push(contribution);
    return contribution;
  }

  private calculateDataValue(eegData: any, context: ContextualData): number {
    let value = 50; // Base value

    // Signal quality
    if (eegData.signalQuality > 90) value += 20;
    else if (eegData.signalQuality > 80) value += 10;

    // Context richness - THIS is what makes data valuable
    if (context.wellnessContext.productsUsed?.length) value += 15;
    if (context.wellnessContext.supplements?.length) value += 15;
    if (context.longitudinal.sessionNumber > 10) value += 20;
    if (context.longitudinal.consistency > 0.8) value += 15;
    
    // Rare or valuable patterns
    if (context.sessionContext.activity === 'meditation' && 
        context.longitudinal.daysInProgram > 30) value += 25;

    return Math.min(value, 100); // Cap at 100
  }

  private async findDataDestinations(
    eegData: any,
    context: ContextualData,
    userConsents: string[],
    dataQuality: number
  ): Promise<DataDestination[]> {
    const destinations: DataDestination[] = [];

    // Wellness validation - if user is testing products
    if (context.wellnessContext.productsUsed?.length && 
        userConsents.includes('wellness_validation')) {
      destinations.push({
        id: 'wellness-' + Date.now(),
        type: 'wellness_validation',
        name: `${context.wellnessContext.productsUsed[0]} Validation Study`,
        status: 'pending',
        matchScore: 85,
        estimatedValue: 25, // Per session contribution to validation
        realizationTimeline: '6-8 weeks after study completion'
      });
    }

    // AI training - high quality longitudinal data
    if (context.longitudinal.sessionNumber > 5 && 
        dataQuality > 75 &&
        userConsents.includes('ai_training')) {
      destinations.push({
        id: 'ai-' + Date.now(),
        type: 'ai_training',
        name: 'Personalization Model Training',
        status: 'active',
        matchScore: 90,
        estimatedValue: 15, // Per session value for AI training
        realizationTimeline: 'Quarterly revenue share from model performance'
      });
    }

    // Research - specific patterns or demographics
    if (userConsents.includes('research')) {
      const researchMatch = this.matchResearchCriteria(eegData, context);
      if (researchMatch) {
        destinations.push({
          id: 'research-' + Date.now(),
          type: 'research',
          name: researchMatch.studyName,
          status: 'pending',
          matchScore: researchMatch.score,
          estimatedValue: researchMatch.value,
          realizationTimeline: 'Upon study publication (3-6 months)'
        });
      }
    }

    return destinations;
  }

  private matchResearchCriteria(eegData: any, context: ContextualData): any {
    // Simulate matching with active research studies
    const studies = [
      {
        studyName: 'Meditation Efficacy Research - IIT Delhi',
        criteria: { activity: 'meditation', minSessions: 10 },
        value: 30,
        matches: context.sessionContext.activity === 'meditation' && 
                 context.longitudinal.sessionNumber >= 10
      },
      {
        studyName: 'Stress Response Study - AIIMS',
        criteria: { activity: 'stress', consistency: 0.7 },
        value: 35,
        matches: context.sessionContext.activity === 'stress' && 
                 context.longitudinal.consistency > 0.7
      },
      {
        studyName: 'Ayurvedic Validation - AYUSH Ministry',
        criteria: { hasSupplements: true, minDays: 14 },
        value: 40,
        matches: context.wellnessContext.supplements?.length > 0 && 
                 context.longitudinal.daysInProgram >= 14
      }
    ];

    const matchedStudy = studies.find(s => s.matches);
    if (matchedStudy) {
      return {
        studyName: matchedStudy.studyName,
        score: 75 + Math.random() * 25,
        value: matchedStudy.value
      };
    }
    return null;
  }

  private calculateDelayedEarnings(
    destinations: DataDestination[],
    dataQuality: number
  ): EarningsBreakdown {
    const pending: DelayedEarning[] = [];
    let projectedTotal = 0;

    destinations.forEach(dest => {
      const earning: DelayedEarning = {
        source: dest.name,
        amount: dest.estimatedValue * (dataQuality / 100),
        status: 'pending',
        expectedDate: this.calculateExpectedDate(dest.realizationTimeline),
        condition: this.getRealizationCondition(dest.type)
      };
      pending.push(earning);
      projectedTotal += earning.amount;
    });

    return {
      immediate: 0, // No unsustainable upfront payments
      pending,
      projected: Math.min(projectedTotal * 12, 12000), // Annual cap at $1000
      realized: 0,
      timeline: this.getOverallTimeline(destinations)
    };
  }

  private calculateExpectedDate(timeline: string): number {
    // Parse timeline string to estimate date
    if (timeline.includes('6-8 weeks')) {
      return Date.now() + (7 * 7 * 24 * 60 * 60 * 1000); // 7 weeks
    } else if (timeline.includes('3-6 months')) {
      return Date.now() + (4.5 * 30 * 24 * 60 * 60 * 1000); // 4.5 months
    } else if (timeline.includes('Quarterly')) {
      return Date.now() + (3 * 30 * 24 * 60 * 60 * 1000); // 3 months
    }
    return Date.now() + (6 * 30 * 24 * 60 * 60 * 1000); // Default 6 months
  }

  private getRealizationCondition(type: string): string {
    switch (type) {
      case 'wellness_validation':
        return 'When product validation study completes and company pays';
      case 'ai_training':
        return 'When AI model is deployed and generates revenue';
      case 'research':
        return 'When research is published and grant funds are released';
      case 'clinical':
        return 'When clinical trial reaches milestone checkpoints';
      default:
        return 'When data creates verified value';
    }
  }

  private getOverallTimeline(destinations: DataDestination[]): string {
    if (destinations.length === 0) return 'No active monetization paths';
    
    const timelines = destinations.map(d => d.realizationTimeline);
    if (timelines.some(t => t.includes('6-8 weeks'))) {
      return 'First earnings expected in 6-8 weeks';
    } else if (timelines.some(t => t.includes('3-6 months'))) {
      return 'Earnings expected over 3-6 months';
    }
    return 'Long-term value creation (6+ months)';
  }

  // Get user's earning summary
  async getEarningSummary(userId: string): Promise<{
    totalContributions: number;
    pendingEarnings: number;
    projectedAnnual: number;
    realizedToDate: number;
    nextPaymentDate: number | null;
  }> {
    const userContributions = this.contributions.filter(c => c.userId === userId);
    
    let pendingTotal = 0;
    let projectedTotal = 0;
    let realizedTotal = 0;
    let nextDate: number | null = null;

    userContributions.forEach(contrib => {
      contrib.earnings.pending.forEach(earning => {
        if (earning.status === 'pending') {
          pendingTotal += earning.amount;
          if (!nextDate || earning.expectedDate < nextDate) {
            nextDate = earning.expectedDate;
          }
        }
      });
      projectedTotal += contrib.earnings.projected;
      realizedTotal += contrib.earnings.realized;
    });

    return {
      totalContributions: userContributions.length,
      pendingEarnings: pendingTotal,
      projectedAnnual: Math.min(projectedTotal, 12000), // Cap at $1000
      realizedToDate: realizedTotal,
      nextPaymentDate: nextDate
    };
  }

  // Simulate payment realization
  async realizePayment(contributionId: string, earningSource: string): Promise<boolean> {
    const contribution = this.contributions.find(c => c.id === contributionId);
    if (!contribution) return false;

    const earning = contribution.earnings.pending.find(e => e.source === earningSource);
    if (!earning || earning.status !== 'pending') return false;

    // Move from pending to realized
    earning.status = 'paid';
    contribution.earnings.realized += earning.amount;
    
    if (contribution.earnings.pending.every(e => e.status === 'paid')) {
      contribution.monetizationStatus = 'realized';
    }

    return true;
  }
}

export const delayedMonetizationService = new DelayedMonetizationService();