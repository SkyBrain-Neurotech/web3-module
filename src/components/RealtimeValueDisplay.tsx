import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity,
  DollarSign,
  Users,
  BarChart3,
  Clock,
  Zap,
  Brain,
  AlertCircle
} from 'lucide-react';
import { enhancedBlockchain } from '../utils/enhancedBlockchain';

interface RealtimeValueDisplayProps {
  sessionActive: boolean;
  dataQuality: number;
  duration: number;
  category: string;
  userAddress: string;
}

const RealtimeValueDisplay: React.FC<RealtimeValueDisplayProps> = ({
  sessionActive,
  dataQuality,
  duration,
  category,
  userAddress
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [projectedValue, setProjectedValue] = useState(0);
  const [networkStatus, setNetworkStatus] = useState(enhancedBlockchain.getNetworkStatus());
  const [marketDynamics, setMarketDynamics] = useState(enhancedBlockchain.getMarketDynamics());
  const [reputation, setReputation] = useState(enhancedBlockchain.getUserReputation(userAddress));
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [earnings, setEarnings] = useState({
    session: 0,
    potential: 0,
    rate: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update network and market data
      setNetworkStatus(enhancedBlockchain.getNetworkStatus());
      setMarketDynamics(enhancedBlockchain.getMarketDynamics());
      setReputation(enhancedBlockchain.getUserReputation(userAddress));

      // Calculate dynamic pricing
      if (sessionActive) {
        const pricing = enhancedBlockchain.calculateDynamicPrice(
          dataQuality,
          duration,
          category,
          reputation
        );
        
        setCurrentValue(pricing.totalPrice);
        setProjectedValue(pricing.totalPrice * 1.2); // 20% potential upside
        
        // Update earnings
        setEarnings(prev => ({
          session: prev.session + (pricing.totalPrice / 1000), // Simulate gradual earning
          potential: pricing.totalPrice,
          rate: pricing.totalPrice / Math.max(duration, 1) * 60 // Per minute rate
        }));

        // Update price history for chart
        setPriceHistory(prev => {
          const newHistory = [...prev, pricing.totalPrice];
          return newHistory.slice(-20); // Keep last 20 points
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionActive, dataQuality, duration, category, userAddress, reputation]);

  const getDemandColor = (demand: string) => {
    const colors = {
      'very_low': 'text-red-400',
      'low': 'text-orange-400',
      'medium': 'text-yellow-400',
      'high': 'text-green-400',
      'very_high': 'text-cyan-400'
    };
    return colors[demand as keyof typeof colors] || 'text-gray-400';
  };

  const getCongestionColor = (congestion: string) => {
    const colors = {
      'low': 'bg-green-500',
      'medium': 'bg-yellow-500',
      'high': 'bg-orange-500',
      'critical': 'bg-red-500'
    };
    return colors[congestion as keyof typeof colors] || 'bg-gray-500';
  };

  // Calculate price trend
  const priceTrend = priceHistory.length > 1 ? 
    ((priceHistory[priceHistory.length - 1] - priceHistory[0]) / priceHistory[0] * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Main Value Display */}
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-cyan-500/30">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Live Session Value</span>
                {sessionActive && (
                  <Badge className="bg-green-600 text-white text-xs animate-pulse">ACTIVE</Badge>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  ${currentValue.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground">
                  / ${projectedValue.toFixed(2)} potential
                </span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end mb-1">
                {priceTrend >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-400" />
                )}
                <span className={`text-sm font-medium ${priceTrend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {priceTrend >= 0 ? '+' : ''}{priceTrend.toFixed(1)}%
                </span>
              </div>
              <span className="text-xs text-muted-foreground">vs session start</span>
            </div>
          </div>

          {/* Earnings Rate */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Session Earnings</div>
              <div className="text-lg font-bold text-green-400">${earnings.session.toFixed(2)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Earning Rate</div>
              <div className="text-lg font-bold text-cyan-400">${earnings.rate.toFixed(2)}/min</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Quality Score</div>
              <div className="text-lg font-bold text-purple-400">{dataQuality.toFixed(1)}%</div>
            </div>
          </div>

          {/* Price History Sparkline */}
          <div className="h-16 flex items-end gap-1 mb-4">
            {priceHistory.map((price, index) => {
              const height = (price / Math.max(...priceHistory)) * 100;
              return (
                <div
                  key={index}
                  className="flex-1 bg-cyan-500/30 rounded-t transition-all duration-300"
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>

          {/* Market Indicators */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Research Demand</span>
                <Badge className={`${getDemandColor(marketDynamics.demandIndicator)} bg-transparent text-xs`}>
                  {marketDynamics.demandIndicator.replace('_', ' ').toUpperCase()}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium">{marketDynamics.activeResearchers}</span>
                <span className="text-xs text-muted-foreground">researchers</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">Network Status</span>
                <div className={`w-2 h-2 rounded-full ${getCongestionColor(networkStatus.congestion)}`} />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium">{networkStatus.blockTime}s</span>
                <span className="text-xs text-muted-foreground">blocks</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reputation & Multipliers */}
      <Card className="bg-card/80 border-border">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium">Your Multipliers</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Total: {((reputation.overall / 50) + 1).toFixed(2)}x
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Data Quality</span>
              <div className="flex items-center gap-2">
                <Progress value={reputation.dataQuality} className="w-20 h-1.5" />
                <span className="text-xs font-medium">{reputation.dataQuality.toFixed(0)}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Research Impact</span>
              <div className="flex items-center gap-2">
                <Progress value={reputation.researchImpact * 2} className="w-20 h-1.5" />
                <span className="text-xs font-medium">{(reputation.researchImpact / 10).toFixed(1)}/5</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Consistency</span>
              <div className="flex items-center gap-2">
                <Progress value={reputation.consistency} className="w-20 h-1.5" />
                <span className="text-xs font-medium">{reputation.consistency.toFixed(0)}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-green-400" />
              <span className="text-xs font-medium text-green-300">Peak Hours</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Data value +35% during research hours (9AM-5PM EST)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-4 w-4 text-purple-400" />
              <span className="text-xs font-medium text-purple-300">Rarity Bonus</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Your {category} patterns are in top 15% rarity
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Network Alert */}
      {networkStatus.congestion === 'critical' && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <span className="text-sm text-red-300">High network congestion - transactions may be delayed</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealtimeValueDisplay;