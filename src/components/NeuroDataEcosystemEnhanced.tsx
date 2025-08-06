import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Coins, 
  Zap, 
  TrendingUp, 
  Users, 
  Database, 
  Shield, 
  Award, 
  Brain,
  ShoppingCart,
  Wallet,
  Target,
  Lock,
  Upload,
  Activity,
  Eye,
  Info,
  Plus,
  BarChart3,
  Signal,
  Sparkles,
  Trophy,
  Gift
} from 'lucide-react';
import { skyEcosystem, DataNFT, ResearchProject, SKYWallet, SKYStakePool } from '../utils/skyEcosystem';
import { enhancedBlockchain } from '../utils/enhancedBlockchain';
import SessionTokenizer from './SessionTokenizer';
import ResearchRequests from './ResearchRequests';
import OnboardingFlow from './OnboardingFlow';
import RealtimeValueDisplay from './RealtimeValueDisplay';
import ResearchMatchingEngine from './ResearchMatchingEngine';
import { mockDataService, EEGSession } from '../utils/mockDataService';

interface NeuroDataEcosystemEnhancedProps {
  sessions: EEGSession[];
  onSessionUpdate: () => void;
}

const NeuroDataEcosystemEnhanced: React.FC<NeuroDataEcosystemEnhancedProps> = ({ sessions, onSessionUpdate }) => {
  const [wallet, setWallet] = useState<SKYWallet | null>(null);
  const [dataNFTs, setDataNFTs] = useState<DataNFT[]>([]);
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>([]);
  const [stakePools, setStakePools] = useState<SKYStakePool[]>([]);
  const [marketplaceItems, setMarketplaceItems] = useState<DataNFT[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<DataNFT | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [sessionActive, setSessionActive] = useState(false);
  const [currentSessionData, setCurrentSessionData] = useState({
    quality: 0,
    duration: 0,
    category: 'meditation'
  });
  const [achievements, setAchievements] = useState<string[]>([]);
  const [pendingTransactions, setPendingTransactions] = useState<any[]>([]);

  // User profile for research matching
  const [userProfile] = useState({
    mentalStates: ['meditation', 'focus', 'stress'],
    dataQuality: 85.5,
    uniquePatterns: ['alpha-dominance', 'theta-burst'],
    demographicProfile: {
      ageGroup: '25-34',
      location: 'Bengaluru',
      experienceLevel: 'intermediate'
    },
    sessionHistory: {
      totalSessions: 23,
      averageDuration: 450,
      preferredTimes: ['morning', 'evening']
    }
  });

  useEffect(() => {
    loadEcosystemData();
    // Check for first-time user
    const hasVisited = localStorage.getItem('skybrain-visited');
    if (hasVisited) {
      setShowOnboarding(false);
    }
  }, []);

  useEffect(() => {
    // Simulate active session data changes
    if (sessionActive) {
      const interval = setInterval(() => {
        setCurrentSessionData(prev => ({
          quality: Math.min(prev.quality + Math.random() * 2, 95),
          duration: prev.duration + 1,
          category: prev.category
        }));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sessionActive]);

  const loadEcosystemData = async () => {
    setWallet(skyEcosystem.getWallet());
    setDataNFTs(skyEcosystem.getDataNFTs());
    setResearchProjects(skyEcosystem.getResearchProjects());
    setStakePools(skyEcosystem.getStakePools());
    setMarketplaceItems(skyEcosystem.getMarketplaceItems());
    checkAchievements();
  };

  const checkAchievements = () => {
    const newAchievements = [];
    const wallet = skyEcosystem.getWallet();
    
    if (wallet.balance > 0) newAchievements.push('first-earner');
    if (wallet.balance > 1000) newAchievements.push('thousand-club');
    if (wallet.dataQualityScore > 90) newAchievements.push('quality-master');
    if (wallet.totalSessionsContributed > 10) newAchievements.push('data-contributor');
    
    setAchievements(newAchievements);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('skybrain-visited', 'true');
    // Award genesis bonus
    const updatedWallet = skyEcosystem.getWallet();
    updatedWallet.balance += 100; // Genesis bonus
    setWallet(updatedWallet);
  };

  const handleCreateDemoSession = async () => {
    await mockDataService.createSession('Demo User', 300 + Math.random() * 600);
    onSessionUpdate();
    setSessionActive(true);
    setCurrentSessionData({
      quality: 70 + Math.random() * 10,
      duration: 0,
      category: 'meditation'
    });
  };

  const handleMintNFT = async () => {
    setLoading(true);
    try {
      // Create transaction
      const tx = {
        id: `tx-${Date.now()}`,
        type: 'mint' as const,
        from: wallet!.address,
        to: '0x0000000000000000000000000000000000000000',
        amount: 0,
        data: { sessionData: currentSessionData },
        timestamp: Date.now()
      };

      const txResult = await enhancedBlockchain.submitTransaction(tx);
      setPendingTransactions(prev => [...prev, txResult]);

      const metadata = {
        title: `Premium ${currentSessionData.category} Session`,
        description: 'High-quality EEG data with verified patterns',
        category: currentSessionData.category,
        duration: currentSessionData.duration || 300,
        bandPowers: {
          delta: Math.random() * 20 + 5,
          theta: Math.random() * 15 + 10,
          alpha: Math.random() * 25 + 15,
          beta: Math.random() * 30 + 20,
          gamma: Math.random() * 10 + 5
        }
      };

      const nft = await skyEcosystem.mintDataNFT([], metadata);
      await loadEcosystemData();
      
      // Update pending transaction status
      setTimeout(async () => {
        const status = await enhancedBlockchain.getTransactionStatus(txResult.txHash);
        setPendingTransactions(prev => 
          prev.map(tx => tx.txHash === txResult.txHash ? status : tx)
        );
      }, 3000);
      
    } catch (error) {
      console.error('Minting failed:', error);
    } finally {
      setLoading(false);
      setSessionActive(false);
    }
  };

  const handleSubmitToResearch = async (nftId: string, projectId: string) => {
    const result = await skyEcosystem.submitToResearch(nftId, projectId);
    if (result.success) {
      await loadEcosystemData();
      console.log('Research submission successful');
    }
    return result;
  };

  const handleListOnMarketplace = async (nftId: string) => {
    const success = await skyEcosystem.listOnMarketplace(nftId);
    if (success) {
      await loadEcosystemData();
      console.log('Listed on marketplace successfully');
    }
  };

  const handleStake = async (poolId: string, amount: number) => {
    const success = await skyEcosystem.stakeTokens(poolId, amount);
    if (success) {
      await loadEcosystemData();
      console.log('Staking successful');
    }
    return success;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'neuroscience': Brain,
      'psychology': Users,
      'ai-training': Database,
      'medical': Shield,
      'wellness': Activity
    };
    return icons[category as keyof typeof icons] || Brain;
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'premium': return 'text-cyan-300 bg-cyan-900/30 border-cyan-500/50';
      case 'standard': return 'text-blue-300 bg-blue-900/30 border-blue-500/50';
      case 'basic': return 'text-foreground bg-muted/30 border-gray-800/50';
      default: return 'text-foreground bg-muted/30 border-gray-800/50';
    }
  };

  const getAchievementDetails = (achievementId: string) => {
    const details = {
      'first-earner': { icon: Coins, name: 'First Earner', description: 'Made your first SKY' },
      'thousand-club': { icon: Trophy, name: 'Thousand Club', description: 'Earned 1,000 SKY' },
      'quality-master': { icon: Award, name: 'Quality Master', description: '90%+ data quality' },
      'data-contributor': { icon: Database, name: 'Data Contributor', description: '10+ sessions contributed' }
    };
    return details[achievementId as keyof typeof details] || { icon: Award, name: achievementId, description: '' };
  };

  if (!wallet) {
    return <div className="p-6 text-center text-gray-400">Loading SKY Ecosystem...</div>;
  }

  return (
    <>
      {showOnboarding && <OnboardingFlow onComplete={handleOnboardingComplete} />}
      
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto min-h-screen">
        {/* Enhanced Header with Live Stats */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl shadow-lg relative">
              <Coins className="h-8 w-8 text-white" />
              {sessionActive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                SKY Ecosystem
              </h1>
              <p className="text-muted-foreground text-sm font-medium">Decentralized Neurodata Economy</p>
            </div>
          </div>
          
          {/* Genesis Program Banner */}
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-3 border border-yellow-500/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">
                Genesis Program Active: 3x rewards for early adopters • 287 spots remaining
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Wallet Overview with Achievements */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-cyan-400/40 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg w-fit mx-auto mb-2">
                  <Wallet className="h-6 w-6 text-cyan-400 mx-auto" />
                </div>
                <div className="text-xl font-bold text-white mb-1">
                  {wallet.balance.toLocaleString()}
                </div>
                <div className="text-xs text-cyan-300 font-medium">SKY Balance</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-emerald-400/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg w-fit mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-emerald-400 mx-auto" />
                </div>
                <div className="text-xl font-bold text-white mb-1">
                  {wallet.lifetimeEarnings.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-300 font-medium">Lifetime Earnings</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-blue-400/40 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg w-fit mx-auto mb-2">
                  <Database className="h-6 w-6 text-blue-400 mx-auto" />
                </div>
                <div className="text-xl font-bold text-white mb-1">
                  {dataNFTs.length}
                </div>
                <div className="text-xs text-blue-300 font-medium">Data Assets</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-purple-400/40 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg w-fit mx-auto mb-2">
                  <Trophy className="h-6 w-6 text-purple-400 mx-auto" />
                </div>
                <div className="text-xl font-bold text-white mb-1">
                  {achievements.length}
                </div>
                <div className="text-xs text-purple-300 font-medium">Achievements</div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Display */}
          {achievements.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {achievements.map(achievement => {
                const details = getAchievementDetails(achievement);
                const Icon = details.icon;
                return (
                  <Badge key={achievement} variant="outline" className="py-1 px-3">
                    <Icon className="h-3 w-3 mr-1" />
                    {details.name}
                  </Badge>
                );
              })}
            </div>
          )}
        </div>

        {/* Real-time Value Display */}
        {sessionActive && (
          <RealtimeValueDisplay
            sessionActive={sessionActive}
            dataQuality={currentSessionData.quality}
            duration={currentSessionData.duration}
            category={currentSessionData.category}
            userAddress={wallet.address}
          />
        )}

        {/* Pending Transactions */}
        {pendingTransactions.length > 0 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Pending Transactions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {pendingTransactions.map(tx => (
                <div key={tx.txHash} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      tx.status === 'confirmed' ? 'bg-green-500' :
                      tx.status === 'confirming' ? 'bg-yellow-500 animate-pulse' :
                      'bg-gray-500 animate-pulse'
                    }`} />
                    <span className="font-mono text-xs">{tx.txHash.slice(0, 10)}...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {tx.confirmations}/6 confirmations
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {tx.networkFee.toFixed(2)} SKY fee
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Main Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-900 border border-gray-800 rounded-xl p-1">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-gray-400 hover:text-gray-200 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
              <span className="sm:hidden">Dash</span>
            </TabsTrigger>
            <TabsTrigger 
              value="mint" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-gray-400 hover:text-gray-200 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Mint Data</span>
              <span className="sm:hidden">Mint</span>
            </TabsTrigger>
            <TabsTrigger 
              value="research" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-gray-400 hover:text-gray-200 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium relative"
            >
              <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Research</span>
              <span className="sm:hidden">Study</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </TabsTrigger>
            <TabsTrigger 
              value="marketplace" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-gray-400 hover:text-gray-200 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Marketplace</span>
              <span className="sm:hidden">Market</span>
            </TabsTrigger>
            <TabsTrigger 
              value="staking" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-gray-400 hover:text-gray-200 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Staking</span>
              <span className="sm:hidden">Stake</span>
            </TabsTrigger>
          </TabsList>

          {/* Enhanced Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* User Profile & Scoring System */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <Signal className="h-5 w-5" />
                    Data Quality Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-cyan-400">
                      {wallet.dataQualityScore.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Based on {wallet.totalSessionsContributed} sessions
                    </div>
                  </div>
                  <Progress value={wallet.dataQualityScore} className="h-3" />
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Signal Clarity:</span>
                      <span className="text-green-400">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Artifact Level:</span>
                      <span className="text-yellow-400">Low (12%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Consistency:</span>
                      <span className="text-cyan-400">High</span>
                    </div>
                  </div>
                  <Alert className="bg-blue-900/20 border-blue-500/30">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Quality score determines your earning multiplier and research eligibility
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <Target className="h-5 w-5" />
                    Research Impact Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-purple-400">
                      {wallet.researchImpactScore.toFixed(1)}/10
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Research contribution quality
                    </div>
                  </div>
                  <Progress value={wallet.researchImpactScore * 10} className="h-3" />
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Studies:</span>
                      <span className="text-white">{wallet.researchContributions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Citations:</span>
                      <span className="text-green-400">2 papers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Success Rate:</span>
                      <span className="text-cyan-400">{((wallet.acceptedSubmissions/wallet.totalSessionsContributed)*100).toFixed(0)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <Award className="h-5 w-5" />
                    Validation System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-yellow-400">
                      Verified
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Account Status
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span>Identity Verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span>Hardware Authenticated</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span>Data Quality Validated</span>
                    </div>
                  </div>
                  <Alert className="bg-red-900/20 border-red-500/30">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Low quality data (below 70%) will be rejected automatically
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions with Live Status */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Demo Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={handleCreateDemoSession} 
                    className="bg-primary hover:bg-primary/90"
                    disabled={sessionActive}
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    {sessionActive ? 'Session Active' : 'Simulate EEG Session'}
                  </Button>
                  <Button 
                    onClick={handleMintNFT} 
                    disabled={loading || !sessionActive} 
                    className="bg-green-600 hover:bg-green-500"
                  >
                    <Coins className="h-4 w-4 mr-2" />
                    {loading ? 'Minting...' : 'Mint as NFT'}
                  </Button>
                  <Button onClick={() => setActiveTab('research')} variant="outline">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find Research Match
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Network & Market Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Activity className="h-4 w-4" />
                    Network Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Network Congestion</span>
                      <Badge className={`${
                        enhancedBlockchain.getNetworkStatus().congestion === 'low' ? 'bg-green-600' :
                        enhancedBlockchain.getNetworkStatus().congestion === 'medium' ? 'bg-yellow-600' :
                        'bg-red-600'
                      } text-white`}>
                        {enhancedBlockchain.getNetworkStatus().congestion.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Gas Price</span>
                      <span className="font-mono text-sm">{enhancedBlockchain.getNetworkStatus().gasPrice} gwei</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Block Time</span>
                      <span className="font-mono text-sm">{enhancedBlockchain.getNetworkStatus().blockTime}s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TrendingUp className="h-4 w-4" />
                    Market Dynamics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Research Demand</span>
                      <Badge className={`${
                        enhancedBlockchain.getMarketDynamics().demandIndicator === 'very_high' ? 'bg-cyan-600' :
                        enhancedBlockchain.getMarketDynamics().demandIndicator === 'high' ? 'bg-green-600' :
                        'bg-yellow-600'
                      } text-white`}>
                        {enhancedBlockchain.getMarketDynamics().demandIndicator.replace('_', ' ').toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Researchers</span>
                      <span className="font-mono text-sm">{enhancedBlockchain.getMarketDynamics().activeResearchers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">24h Submissions</span>
                      <span className="font-mono text-sm">{enhancedBlockchain.getMarketDynamics().dataSubmissions24h}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Professional Mint Data Tab */}
          <TabsContent value="mint" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Professional Data Minting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Alert className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
                    <Sparkles className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Live Minting Active:</strong> Your current session quality is {currentSessionData.quality.toFixed(1)}% 
                      with projected value of ${enhancedBlockchain.calculateDynamicPrice(
                        currentSessionData.quality,
                        currentSessionData.duration,
                        currentSessionData.category
                      ).totalPrice}
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Live Data Minting</h3>
                      <p className="text-muted-foreground text-sm">
                        Transform your current EEG session into a valuable NFT with dynamic pricing based on quality and market demand.
                      </p>
                      <Button 
                        onClick={handleMintNFT} 
                        disabled={loading || !sessionActive} 
                        className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
                        size="lg"
                      >
                        <Zap className="h-5 w-5 mr-2" />
                        {loading ? 'Minting NFT...' : sessionActive ? 'Mint Live Data NFT' : 'Start Session First'}
                      </Button>
                      
                      {sessionActive && (
                        <div className="text-center text-sm text-muted-foreground">
                          Gas estimate: {enhancedBlockchain.getNetworkStatus().gasPrice * 150} SKY
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Session Tokenizer</h3>
                      <p className="text-muted-foreground text-sm">
                        Convert recorded EEG sessions into tradeable NFTs with full metadata and provenance.
                      </p>
                      <SessionTokenizer sessions={sessions} onSessionUpdate={onSessionUpdate} />
                    </div>
                  </div>

                  {/* My NFTs with Enhanced Display */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">My Data NFTs ({dataNFTs.length})</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {dataNFTs.map((nft) => {
                        const pricing = enhancedBlockchain.calculateDynamicPrice(
                          nft.metadata.signalQuality,
                          nft.duration,
                          nft.category
                        );
                        
                        return (
                          <Card key={nft.id} className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <Badge className={`${getQualityColor(nft.quality)} border text-xs`}>
                                  {nft.quality}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {nft.category}
                                </Badge>
                              </div>
                              <CardTitle className="text-base">{nft.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="text-sm text-muted-foreground">
                                {nft.description}
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Dataset Value</span>
                                  <span className="font-mono">{pricing.basePrice} SKY</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span>Current Worth</span>
                                  <span className="font-mono font-bold text-primary">{pricing.totalPrice} SKY</span>
                                </div>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {pricing.priceBreakdown}
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  onClick={() => setSelectedNFT(nft)}
                                  variant="outline"
                                  className="flex-1"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                                {!nft.listed && (
                                  <Button 
                                    size="sm" 
                                    onClick={() => handleListOnMarketplace(nft.id)}
                                    className="flex-1 bg-green-600 hover:bg-green-500"
                                  >
                                    <Upload className="h-3 w-3 mr-1" />
                                    List
                                  </Button>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Professional Research Tab with AI Matching */}
          <TabsContent value="research" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI-Powered Research Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResearchMatchingEngine
                  userProfile={userProfile}
                  userNFTs={dataNFTs}
                />
              </CardContent>
            </Card>

            {/* Traditional Research Projects (kept for fallback) */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>All Research Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ResearchRequests sessions={sessions} onSessionUpdate={onSessionUpdate} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Professional Marketplace Tab */}
          <TabsContent value="marketplace" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Data Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Browse and purchase high-quality neural data from the community. All data is verified and ethically sourced.
                    </AlertDescription>
                  </Alert>

                  {marketplaceItems.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No items currently listed on the marketplace.</p>
                      <p className="text-sm mt-2">Be the first to list your data NFTs!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {marketplaceItems.map((item) => (
                        <Card key={item.id} className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-colors">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge className={`${getQualityColor(item.quality)} border text-xs`}>
                                {item.quality}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {item.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-base">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="text-sm text-muted-foreground">
                              {item.description}
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Duration: {item.duration}s</span>
                              <span>Quality: {item.metadata.signalQuality.toFixed(1)}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-lg font-bold text-primary">{item.price} SKY</div>
                              <Button 
                                size="sm"
                                disabled={wallet.balance < item.price}
                                className="bg-primary hover:bg-primary/90"
                              >
                                <ShoppingCart className="h-3 w-3 mr-1" />
                                Buy
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Professional Staking Tab */}
          <TabsContent value="staking" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  SKY Staking Pools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Stake your SKY tokens to earn rewards and support the ecosystem. Each pool has different benefits and requirements.
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stakePools.map((pool) => {
                      const stakingRewards = enhancedBlockchain.calculateStakingRewards(
                        pool.minStake,
                        pool.category,
                        pool.lockPeriod
                      );
                      
                      return (
                        <Card key={pool.id} className="bg-gray-900 border-gray-800">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <Badge className={`bg-${pool.category === 'research' ? 'purple' : pool.category === 'validation' ? 'blue' : 'orange'}-600`}>
                                {pool.category}
                              </Badge>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-500">{stakingRewards.totalAPY}%</div>
                                <div className="text-xs text-muted-foreground">APY</div>
                              </div>
                            </div>
                            <CardTitle className="text-base">{pool.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Min Stake:</span>
                                <span>{pool.minStake.toLocaleString()} SKY</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Lock Period:</span>
                                <span>{pool.lockPeriod} days</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Staked:</span>
                                <span>{(pool.totalStaked / 1000000).toFixed(1)}M SKY</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Est. Rewards:</span>
                                <span className="text-green-400">+{stakingRewards.projectedRewards.toFixed(0)} SKY</span>
                              </div>
                            </div>
                            
                            <div className="text-xs text-muted-foreground">
                              {pool.rewards}
                            </div>

                            <Button 
                              className="w-full"
                              disabled={wallet.balance < pool.minStake}
                              onClick={() => handleStake(pool.id, pool.minStake)}
                            >
                              <Lock className="h-4 w-4 mr-2" />
                              Stake {pool.minStake.toLocaleString()} SKY
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-base">Your Staking Positions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-muted-foreground">
                        <Lock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No active staking positions.</p>
                        <p className="text-sm mt-2">Start staking to earn passive rewards!</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

        {/* Enhanced NFT Detail Modal */}
        {selectedNFT && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="bg-gray-900 border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{selectedNFT.title}</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setSelectedNFT(null)}>
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Token ID</div>
                    <div className="font-mono text-sm">{selectedNFT.tokenId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div>{selectedNFT.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Quality</div>
                    <Badge className={getQualityColor(selectedNFT.quality)}>{selectedNFT.quality}</Badge>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Current Worth</div>
                    <div className="font-bold">{
                      enhancedBlockchain.calculateDynamicPrice(
                        selectedNFT.metadata.signalQuality,
                        selectedNFT.duration,
                        selectedNFT.category
                      ).totalPrice
                    } SKY</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Band Powers</div>
                  <div className="grid grid-cols-5 gap-2 text-xs">
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="text-purple-500">Delta</div>
                      <div>{selectedNFT.metadata.bandPowers.delta.toFixed(1)}</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="text-blue-500">Theta</div>
                      <div>{selectedNFT.metadata.bandPowers.theta.toFixed(1)}</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="text-green-500">Alpha</div>
                      <div>{selectedNFT.metadata.bandPowers.alpha.toFixed(1)}</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="text-yellow-500">Beta</div>
                      <div>{selectedNFT.metadata.bandPowers.beta.toFixed(1)}</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="text-red-500">Gamma</div>
                      <div>{selectedNFT.metadata.bandPowers.gamma.toFixed(1)}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Signal Quality</div>
                    <div>{selectedNFT.metadata.signalQuality.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Verification Score</div>
                    <div>{selectedNFT.metadata.verificationScore.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Sales</div>
                    <div>{selectedNFT.sales}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Created</div>
                    <div>{new Date(selectedNFT.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
    </>
  );
};

export default NeuroDataEcosystemEnhanced;