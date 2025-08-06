export interface Transaction {
  id: string;
  type: 'mint' | 'transfer' | 'stake' | 'research_submit' | 'validation';
  from: string;
  to: string;
  amount: number;
  data?: any;
  timestamp: number;
}

export interface TransactionResult {
  txHash: string;
  status: 'pending' | 'confirming' | 'confirmed' | 'failed';
  gasEstimate: number;
  confirmationTime: number;
  networkFee: number;
  confirmations: number;
  blockNumber?: number;
}

export interface NetworkStatus {
  congestion: 'low' | 'medium' | 'high' | 'critical';
  gasPrice: number;
  blockTime: number;
  pendingTxCount: number;
}

export interface MarketDynamics {
  totalSupply: number;
  activeResearchers: number;
  dataSubmissions24h: number;
  averageQuality: number;
  priceHistory: { timestamp: number; price: number }[];
  demandIndicator: 'very_low' | 'low' | 'medium' | 'high' | 'very_high';
}

export interface ReputationScore {
  dataQuality: number;
  consistency: number;
  researchImpact: number;
  communityEngagement: number;
  validatorAccuracy: number;
  overall: number;
}

class EnhancedBlockchainService {
  private networkStatus: NetworkStatus = {
    congestion: 'medium',
    gasPrice: 21,
    blockTime: 12,
    pendingTxCount: 127
  };

  private marketDynamics: MarketDynamics = {
    totalSupply: 21000000,
    activeResearchers: 1247,
    dataSubmissions24h: 3842,
    averageQuality: 76.8,
    priceHistory: [],
    demandIndicator: 'high'
  };

  private pendingTransactions: Map<string, TransactionResult> = new Map();
  private confirmedTransactions: Map<string, TransactionResult> = new Map();
  private userReputation: Map<string, ReputationScore> = new Map();

  constructor() {
    this.initializeMarketHistory();
    this.startNetworkSimulation();
  }

  private initializeMarketHistory() {
    const now = Date.now();
    for (let i = 30; i >= 0; i--) {
      this.marketDynamics.priceHistory.push({
        timestamp: now - i * 24 * 60 * 60 * 1000,
        price: 45 + Math.sin(i * 0.5) * 15 + Math.random() * 10
      });
    }
  }

  private startNetworkSimulation() {
    // Simulate network congestion changes
    setInterval(() => {
      const rand = Math.random();
      if (rand < 0.7) {
        this.networkStatus.congestion = 'medium';
        this.networkStatus.gasPrice = 18 + Math.random() * 10;
      } else if (rand < 0.85) {
        this.networkStatus.congestion = 'high';
        this.networkStatus.gasPrice = 35 + Math.random() * 20;
      } else if (rand < 0.95) {
        this.networkStatus.congestion = 'low';
        this.networkStatus.gasPrice = 10 + Math.random() * 5;
      } else {
        this.networkStatus.congestion = 'critical';
        this.networkStatus.gasPrice = 80 + Math.random() * 40;
      }
      
      this.networkStatus.pendingTxCount = Math.floor(50 + Math.random() * 300);
      this.networkStatus.blockTime = this.networkStatus.congestion === 'low' ? 10 : 
                                     this.networkStatus.congestion === 'medium' ? 12 :
                                     this.networkStatus.congestion === 'high' ? 15 : 20;
    }, 5000);

    // Simulate market dynamics
    setInterval(() => {
      this.marketDynamics.activeResearchers += Math.floor(Math.random() * 20 - 10);
      this.marketDynamics.dataSubmissions24h += Math.floor(Math.random() * 100 - 50);
      this.marketDynamics.averageQuality += (Math.random() - 0.5) * 2;
      this.marketDynamics.averageQuality = Math.max(60, Math.min(95, this.marketDynamics.averageQuality));
      
      // Update demand based on researcher activity
      const researcherRatio = this.marketDynamics.activeResearchers / this.marketDynamics.dataSubmissions24h;
      if (researcherRatio > 0.4) this.marketDynamics.demandIndicator = 'very_high';
      else if (researcherRatio > 0.3) this.marketDynamics.demandIndicator = 'high';
      else if (researcherRatio > 0.2) this.marketDynamics.demandIndicator = 'medium';
      else if (researcherRatio > 0.1) this.marketDynamics.demandIndicator = 'low';
      else this.marketDynamics.demandIndicator = 'very_low';

      // Add new price point
      const lastPrice = this.marketDynamics.priceHistory[this.marketDynamics.priceHistory.length - 1].price;
      const demandMultiplier = {
        'very_low': 0.95,
        'low': 0.98,
        'medium': 1.0,
        'high': 1.02,
        'very_high': 1.05
      }[this.marketDynamics.demandIndicator];
      
      const newPrice = lastPrice * demandMultiplier * (0.98 + Math.random() * 0.04);
      this.marketDynamics.priceHistory.push({
        timestamp: Date.now(),
        price: newPrice
      });
      
      if (this.marketDynamics.priceHistory.length > 100) {
        this.marketDynamics.priceHistory.shift();
      }
    }, 10000);

    // Process pending transactions
    setInterval(() => {
      this.processPendingTransactions();
    }, 3000);
  }

  private processPendingTransactions() {
    this.pendingTransactions.forEach((tx, hash) => {
      if (tx.status === 'pending') {
        tx.confirmations = 1;
        tx.status = 'confirming';
        tx.blockNumber = Math.floor(Math.random() * 1000000) + 15000000;
      } else if (tx.status === 'confirming') {
        tx.confirmations = Math.min(tx.confirmations + 1, 12);
        if (tx.confirmations >= 6) {
          tx.status = 'confirmed';
          this.confirmedTransactions.set(hash, tx);
          this.pendingTransactions.delete(hash);
        }
      }
    });
  }

  async submitTransaction(tx: Transaction): Promise<TransactionResult> {
    const gasEstimate = this.calculateGasEstimate(tx);
    const confirmationTime = this.calculateConfirmationTime();
    const txHash = this.generateRealisticHash();
    
    const result: TransactionResult = {
      txHash,
      status: 'pending',
      gasEstimate,
      confirmationTime,
      networkFee: gasEstimate * this.networkStatus.gasPrice / 1000000,
      confirmations: 0
    };
    
    this.pendingTransactions.set(txHash, result);
    
    // Simulate transaction events
    setTimeout(() => {
      this.emit('transactionPending', { hash: txHash, ...result });
    }, 500);
    
    return result;
  }

  private calculateGasEstimate(tx: Transaction): number {
    const baseGas = {
      'mint': 150000,
      'transfer': 21000,
      'stake': 80000,
      'research_submit': 120000,
      'validation': 60000
    }[tx.type] || 50000;
    
    const complexityMultiplier = tx.data ? 1.2 : 1.0;
    const congestionMultiplier = {
      'low': 1.0,
      'medium': 1.2,
      'high': 1.5,
      'critical': 2.0
    }[this.networkStatus.congestion];
    
    return Math.floor(baseGas * complexityMultiplier * congestionMultiplier);
  }

  private calculateConfirmationTime(): number {
    const baseTime = this.networkStatus.blockTime * 6; // 6 confirmations
    const congestionMultiplier = {
      'low': 1.0,
      'medium': 1.3,
      'high': 2.0,
      'critical': 3.5
    }[this.networkStatus.congestion];
    
    return Math.floor(baseTime * congestionMultiplier * (0.8 + Math.random() * 0.4));
  }

  private generateRealisticHash(): string {
    return '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  }

  calculateDynamicPrice(
    dataQuality: number,
    duration: number,
    category: string,
    userReputation?: ReputationScore
  ): {
    basePrice: number;
    qualityBonus: number;
    demandMultiplier: number;
    rarityBonus: number;
    reputationBonus: number;
    totalPrice: number;
    priceBreakdown: string;
  } {
    const basePrice = 50;
    
    // Quality bonus (exponential scaling for high quality)
    const qualityBonus = dataQuality > 85 ? 
      Math.pow((dataQuality - 85) / 15, 2) * 50 : 0;
    
    // Demand multiplier based on category and market dynamics
    const categoryDemand = {
      'meditation': 1.4,
      'focus': 1.2,
      'sleep': 1.5,
      'gaming': 1.1,
      'learning': 1.3,
      'stress': 1.4
    }[category] || 1.0;
    
    const marketDemandMultiplier = {
      'very_low': 0.8,
      'low': 0.9,
      'medium': 1.0,
      'high': 1.2,
      'very_high': 1.5
    }[this.marketDynamics.demandIndicator];
    
    const demandMultiplier = categoryDemand * marketDemandMultiplier;
    
    // Rarity bonus for unique patterns
    const rarityScore = this.calculateRarityScore(dataQuality, duration);
    const rarityBonus = rarityScore > 7 ? (rarityScore - 7) * 20 : 0;
    
    // Reputation bonus
    const reputationBonus = userReputation ? 
      (userReputation.overall / 100) * 30 : 0;
    
    // Duration multiplier
    const durationMultiplier = Math.sqrt(duration / 300); // Square root scaling
    
    const totalPrice = Math.round(
      (basePrice + qualityBonus + rarityBonus + reputationBonus) * 
      demandMultiplier * 
      durationMultiplier
    );
    
    const priceBreakdown = `Base: $${basePrice} | Quality: +$${qualityBonus.toFixed(0)} | ` +
      `Demand: x${demandMultiplier.toFixed(2)} | Rarity: +$${rarityBonus.toFixed(0)} | ` +
      `Reputation: +$${reputationBonus.toFixed(0)}`;
    
    return {
      basePrice,
      qualityBonus,
      demandMultiplier,
      rarityBonus,
      reputationBonus,
      totalPrice,
      priceBreakdown
    };
  }

  private calculateRarityScore(quality: number, duration: number): number {
    // Simulate rarity based on quality and duration combination
    const qualityRarity = quality > 90 ? 3 : quality > 80 ? 2 : 1;
    const durationRarity = duration > 1800 ? 3 : duration > 900 ? 2 : 1;
    const combinedRarity = qualityRarity * durationRarity;
    
    // Add some randomness for demonstration
    return Math.min(10, combinedRarity + Math.random() * 2);
  }

  async getTransactionStatus(txHash: string): Promise<TransactionResult | null> {
    return this.pendingTransactions.get(txHash) || 
           this.confirmedTransactions.get(txHash) || 
           null;
  }

  getNetworkStatus(): NetworkStatus {
    return { ...this.networkStatus };
  }

  getMarketDynamics(): MarketDynamics {
    return { ...this.marketDynamics };
  }

  getUserReputation(address: string): ReputationScore {
    if (!this.userReputation.has(address)) {
      // Initialize new user reputation
      const newReputation: ReputationScore = {
        dataQuality: 70 + Math.random() * 20,
        consistency: 60 + Math.random() * 30,
        researchImpact: Math.random() * 50,
        communityEngagement: Math.random() * 40,
        validatorAccuracy: 0,
        overall: 0
      };
      
      newReputation.overall = (
        newReputation.dataQuality * 0.4 +
        newReputation.consistency * 0.3 +
        newReputation.researchImpact * 0.2 +
        newReputation.communityEngagement * 0.1
      );
      
      this.userReputation.set(address, newReputation);
    }
    
    return { ...this.userReputation.get(address)! };
  }

  updateUserReputation(address: string, updates: Partial<ReputationScore>) {
    const current = this.getUserReputation(address);
    const updated = { ...current, ...updates };
    
    // Recalculate overall score
    updated.overall = (
      updated.dataQuality * 0.4 +
      updated.consistency * 0.3 +
      updated.researchImpact * 0.2 +
      updated.communityEngagement * 0.1
    );
    
    this.userReputation.set(address, updated);
  }

  private emit(event: string, data: any) {
    // In a real implementation, this would emit events to subscribers
    console.log(`[Blockchain Event] ${event}:`, data);
  }

  // Staking calculations
  calculateStakingRewards(
    amount: number,
    poolType: 'research' | 'validation' | 'governance',
    lockPeriod: number
  ): {
    baseAPY: number;
    bonusAPY: number;
    totalAPY: number;
    projectedRewards: number;
    monthlyRewards: number;
    yearlyRewards: number;
    dailyRewards: number;
    unlockDate: number;
    compoundingFactor: number;
    riskAdjustedAPY: number;
  } {
    // Realistic DeFi staking APYs with market conditions
    const baseAPYs = {
      'research': 18.5,    // Higher APY for research funding pool
      'validation': 12.8,  // Moderate APY for validation services  
      'governance': 24.2   // Highest APY for governance participation
    };
    
    // Lock period bonus scaling
    const lockPeriodBonus = {
      30: 0,      // No bonus for 30 days
      90: 3.2,    // 3.2% bonus for quarterly lock
      180: 7.8,   // 7.8% bonus for semi-annual lock
      365: 15.5   // 15.5% bonus for annual lock
    }[lockPeriod] || 0;
    
    // Amount-based tier bonuses (encouraging larger stakes)
    let amountBonus = 0;
    if (amount >= 100000) amountBonus = 4.5;      // Whale tier
    else if (amount >= 50000) amountBonus = 3.2;  // Large tier
    else if (amount >= 10000) amountBonus = 2.1;  // Medium tier
    else if (amount >= 5000) amountBonus = 1.0;   // Small tier
    
    // Market volatility adjustment (realistic DeFi conditions)
    const volatilityDiscount = {
      'research': 0.8,     // Stable research funding
      'validation': 1.2,   // Medium risk validation
      'governance': 2.1    // Higher risk governance tokens
    }[poolType];
    
    const baseAPY = baseAPYs[poolType];
    const bonusAPY = lockPeriodBonus + amountBonus;
    const totalAPY = Math.max(0, baseAPY + bonusAPY - volatilityDiscount);
    const riskAdjustedAPY = totalAPY * 0.92; // 8% safety margin for realistic expectations
    
    // Compounding factor based on lock period
    const compoundingFactor = lockPeriod >= 180 ? 1.08 : lockPeriod >= 90 ? 1.04 : 1.0;
    
    // Detailed reward calculations
    const annualRewards = amount * (riskAdjustedAPY / 100) * compoundingFactor;
    const dailyRewards = annualRewards / 365;
    const monthlyRewards = annualRewards / 12;
    const projectedRewards = annualRewards * (lockPeriod / 365);
    const yearlyRewards = annualRewards;
    
    const unlockDate = Date.now() + lockPeriod * 24 * 60 * 60 * 1000;
    
    return {
      baseAPY: Number(baseAPY.toFixed(2)),
      bonusAPY: Number(bonusAPY.toFixed(2)),
      totalAPY: Number(riskAdjustedAPY.toFixed(2)),
      projectedRewards: Number(projectedRewards.toFixed(2)),
      monthlyRewards: Number(monthlyRewards.toFixed(2)),
      yearlyRewards: Number(yearlyRewards.toFixed(2)),
      dailyRewards: Number(dailyRewards.toFixed(2)),
      unlockDate,
      compoundingFactor: Number(compoundingFactor.toFixed(2)),
      riskAdjustedAPY: Number(riskAdjustedAPY.toFixed(2))
    };
  }
}

export const enhancedBlockchain = new EnhancedBlockchainService();