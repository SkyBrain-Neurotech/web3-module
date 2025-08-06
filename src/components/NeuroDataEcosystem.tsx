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
  Building,
  CheckCircle,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import { skyEcosystem, DataNFT, ResearchProject, SKYWallet, SKYStakePool } from '../utils/skyEcosystem';
import SessionTokenizer from './SessionTokenizer';
import ResearchRequests from './ResearchRequests';
import DataControlDashboard from './DataControlDashboard';
import { mockDataService, EEGSession } from '../utils/mockDataService';
import { delayedMonetizationService } from '../utils/delayedMonetizationService';

interface NeuroDataEcosystemProps {
  sessions: EEGSession[];
  onSessionUpdate: () => void;
}

const NeuroDataEcosystem: React.FC<NeuroDataEcosystemProps> = ({ sessions, onSessionUpdate }) => {
  const [wallet, setWallet] = useState<SKYWallet | null>(null);
  const [dataNFTs, setDataNFTs] = useState<DataNFT[]>([]);
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>([]);
  const [stakePools, setStakePools] = useState<SKYStakePool[]>([]);
  const [marketplaceItems, setMarketplaceItems] = useState<DataNFT[]>([]);
  const [activeTab, setActiveTab] = useState('vision');
  const [loading, setLoading] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<DataNFT | null>(null);

  useEffect(() => {
    loadEcosystemData();
  }, []);

  const loadEcosystemData = async () => {
    setWallet(skyEcosystem.getWallet());
    setDataNFTs(skyEcosystem.getDataNFTs());
    setResearchProjects(skyEcosystem.getResearchProjects());
    setStakePools(skyEcosystem.getStakePools());
    setMarketplaceItems(skyEcosystem.getMarketplaceItems());
  };

  const handleCreateDemoSession = async () => {
    await mockDataService.createSession('Demo User', 300 + Math.random() * 600);
    onSessionUpdate();
  };

  const handleMintNFT = async () => {
    setLoading(true);
    try {
      const metadata = {
        title: `Demo EEG Session ${new Date().toLocaleDateString()}`,
        description: 'Demo EEG data from SkyBrain NeuroBank',
        category: 'focus',
        duration: 300 + Math.random() * 600,
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
      
      console.log('NFT minted successfully:', nft);
    } catch (error) {
      console.error('Minting failed:', error);
    } finally {
      setLoading(false);
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

  const handleViewNFT = (nft: DataNFT) => {
    setSelectedNFT(nft);
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
      case 'basic': return 'text-foreground bg-muted/30 border-border/50';
      default: return 'text-foreground bg-muted/30 border-border/50';
    }
  };

  if (!wallet) {
    return <div className="p-6 text-center">Loading SKY Ecosystem...</div>;
  }

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl shadow-lg">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              SkyBrain India
            </h1>
            <p className="text-muted-foreground text-sm font-medium">Helping Wellness Brands Get FSSAI-Compliant with Neural Data Backing</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="bg-orange-100 px-3 py-1 rounded-full">
            <span className="text-orange-800 text-xs font-semibold">🇮🇳 Made in India</span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-full">
            <span className="text-green-800 text-xs font-semibold">Data Validation</span>
          </div>
          <div className="bg-blue-100 px-3 py-1 rounded-full">
            <span className="text-blue-800 text-xs font-semibold">Scientific Backing</span>
          </div>
        </div>
        <p className="text-foreground text-base max-w-3xl mx-auto leading-relaxed">
          <strong>Help wellness companies get FSSAI-compliant with neural data backing</strong> for their marketing claims. 
          Earn ₹15,000-30,000 annually while providing scientific validation for Ayurvedic products, CBD oils, and wellness apps.
        </p>
      </div>

      {/* Enhanced Value Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-cyan-400/40 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg w-fit mx-auto mb-2">
              <Database className="h-6 w-6 text-cyan-400 mx-auto" />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {sessions.length}
            </div>
            <div className="text-xs text-cyan-300 font-medium">FSSAI Studies Active</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-emerald-400/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg w-fit mx-auto mb-2">
              <TrendingUp className="h-6 w-6 text-emerald-400 mx-auto" />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              ₹{Math.min(wallet.lifetimeEarnings * 500, 25000).toLocaleString()}
            </div>
            <div className="text-xs text-emerald-300 font-medium">Annual Potential</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-blue-400/40 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg w-fit mx-auto mb-2">
              <Shield className="h-6 w-6 text-blue-400 mx-auto" />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              3
            </div>
            <div className="text-xs text-blue-300 font-medium">Ayurvedic Products Validating</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 border-purple-400/40 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <CardContent className="p-4 text-center">
            <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg w-fit mx-auto mb-2">
              <Building className="h-6 w-6 text-purple-400 mx-auto" />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              15
            </div>
            <div className="text-xs text-purple-300 font-medium">Partner Companies</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-card rounded-xl p-1">
          <TabsTrigger 
            value="vision" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Vision</span>
            <span className="sm:hidden">Vision</span>
          </TabsTrigger>
          <TabsTrigger 
            value="control" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Data Control</span>
            <span className="sm:hidden">Control</span>
          </TabsTrigger>
          <TabsTrigger 
            value="dashboard" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Dashboard</span>
            <span className="sm:hidden">Dash</span>
          </TabsTrigger>
          <TabsTrigger 
            value="fssai" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">FSSAI Validation</span>
            <span className="sm:hidden">Validate</span>
          </TabsTrigger>
          <TabsTrigger 
            value="research" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Research</span>
            <span className="sm:hidden">Study</span>
          </TabsTrigger>
          <TabsTrigger 
            value="insights" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Insights</span>
            <span className="sm:hidden">Learn</span>
          </TabsTrigger>
        </TabsList>

        {/* Vision Tab - PRIMARY LANDING */}
        <TabsContent value="vision" className="space-y-6">
          {/* The Big Picture */}
          <Card className="bg-gradient-to-r from-cyan-900/40 to-teal-900/40 border-cyan-400/40">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold text-white">Following the AI Data Playbook</h2>
                    <p className="text-cyan-200 text-lg">Massive contextual data collection → Find the right fit → Revenue sharing</p>
                  </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-white text-lg leading-relaxed">
                    Just like ChatGPT's pre-launch phase, we're collecting rich contextual neural data with <strong>full user control</strong>. 
                    You decide where your data goes. We find the right applications. Revenue comes when real value is created.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-center">
                      <Database className="h-8 w-8 text-cyan-300 mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">Rich Contextual Data</h3>
                      <p className="text-cyan-100 text-sm">
                        EEG + lifestyle + wellness practices + longitudinal tracking = valuable intelligence
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-green-300 mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">You Control Everything</h3>
                      <p className="text-green-100 text-sm">
                        Choose data destinations, modify permissions anytime, full transparency on usage
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                      <h3 className="text-white font-semibold mb-2">Delayed Value Creation</h3>
                      <p className="text-yellow-100 text-sm">
                        No unsustainable promises. Earnings come when your data creates real value (6-8 weeks to 6 months)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Bengaluru Center Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our flagship data collection center creates the gold-standard training dataset that powers everything else.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Research-grade EEG equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Controlled environment + rich context</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Longitudinal studies (same people over months)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Diverse Indian population baseline</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Learn About Center Participation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Global Platform Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Web3 platform scales data collection globally while maintaining user control and enabling wellness validation at massive scale.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Consumer EEG devices worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">10,000+ concurrent validation studies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Blockchain consent & revenue tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Quality scoring from center-trained models</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Join Platform Beta
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Current Opportunity */}
          <Card className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border-orange-400/40">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">The Indian Wellness Validation Crisis</h3>
                <p className="text-orange-100 max-w-3xl mx-auto">
                  FSSAI now requires scientific backing for wellness claims. 10,000+ Indian companies need affordable validation. 
                  We're solving this while building the foundation for personalized neurotechnology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300">₹50,000 Cr</div>
                    <div className="text-sm text-orange-100">Indian wellness market needing validation</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300">6 weeks</div>
                    <div className="text-sm text-orange-100">vs 6 months traditional validation</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300">1/10th cost</div>
                    <div className="text-sm text-orange-100">vs clinical trials</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Earnings Reality */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Sustainable Economics (No False Promises)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>We don't promise unsustainable high earnings.</strong> Your primary value is discovering what works for YOUR brain. 
                  Earnings come when your data creates real value - typically ₹20,000-70,000 annually.
                </AlertDescription>
              </Alert>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold text-green-500">₹650-1,200</div>
                  <div className="text-sm text-muted-foreground">Per quality session</div>
                  <div className="text-xs mt-1">When data is used</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-500">₹2,000-8,000</div>
                  <div className="text-sm text-muted-foreground">Per validation study</div>
                  <div className="text-xs mt-1">6-8 week timeline</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold text-purple-500">₹20,000-70,000</div>
                  <div className="text-sm text-muted-foreground">Annual cap</div>
                  <div className="text-xs mt-1">Sustainable scaling</div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button onClick={() => setActiveTab('control')}>
                  <Shield className="h-4 w-4 mr-2" />
                  Take Control of Your Data Journey
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Control Tab */}
        <TabsContent value="control" className="space-y-6">
          <DataControlDashboard />
        </TabsContent>

        {/* Enhanced Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Signal className="h-5 w-5" />
                  Data Quality Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {wallet.dataQualityScore.toFixed(1)}%
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Based on {wallet.totalSessionsContributed} sessions</div>
                </div>
                <Progress value={wallet.dataQualityScore} className="h-3" />
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 bg-card/50 rounded">
                    <div className="text-green-500 font-medium">Accepted</div>
                    <div>{wallet.acceptedSubmissions}</div>
                  </div>
                  <div className="text-center p-2 bg-card/50 rounded">
                    <div className="text-foreground font-medium">Total</div>
                    <div>{wallet.totalSessionsContributed}</div>
                  </div>
                  <div className="text-center p-2 bg-card/50 rounded">
                    <div className="text-foreground font-medium">Success</div>
                    <div>{((wallet.acceptedSubmissions/wallet.totalSessionsContributed)*100).toFixed(1)}%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Target className="h-5 w-5" />
                  Research Impact Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {wallet.researchImpactScore.toFixed(1)}/10
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Research contribution quality</div>
                </div>
                <Progress value={wallet.researchImpactScore * 10} className="h-3" />
                <div className="text-xs text-center">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Projects: {wallet.researchContributions}</span>
                    <span>Submissions: {wallet.dataSubmissions}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                  <Award className="h-5 w-5" />
                  Staking Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {wallet.stakingRewards.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">SKY earned from staking</div>
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  Auto-compounding rewards from staking pools
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={handleCreateDemoSession} className="bg-primary hover:bg-primary/90">
                  <Brain className="h-4 w-4 mr-2" />
                  Create Demo Session
                </Button>
                <Button onClick={handleMintNFT} disabled={loading} className="bg-green-600 hover:bg-green-500">
                  <Coins className="h-4 w-4 mr-2" />
                  {loading ? 'Minting...' : 'Mint Current Data'}
                </Button>
                <Button onClick={() => setActiveTab('research')} variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Browse Research
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FSSAI Validation Tab */}
        <TabsContent value="fssai" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                FSSAI-Compliant Wellness Validation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Help Indian wellness companies validate their product claims using your brain data. All studies are FSSAI-compliant and AYUSH-approved.
                  </AlertDescription>
                </Alert>

                {/* Active Validation Studies */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Active Validation Studies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-r from-orange-100/10 to-green-100/10 border-orange-400/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-orange-600">Ayurvedic</Badge>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">₹8,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          पतंजलि अश्वगंधा चूर्ण Validation
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Patanjali Ayurved</p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">Validating stress reduction claims using EEG biomarkers. 30-day study with daily measurements.</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Progress: 67/100 participants</span>
                          <span>Timeline: 6-8 weeks</span>
                        </div>
                        <Progress value={67} className="h-2" />
                        <Badge className="bg-green-600">FSSAI License: 10017047000694</Badge>
                        <Button className="w-full bg-orange-600 hover:bg-orange-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Enroll in Study
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-100/10 to-green-100/10 border-blue-400/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-600">Cognitive Enhancement</Badge>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">₹12,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          हिमालय ब्राह्मी गोलियां Validation
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Himalaya Drug Company</p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">Testing memory enhancement claims through cognitive EEG markers. 45-day longitudinal study.</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Progress: 89/150 participants</span>
                          <span>Timeline: 8-10 weeks</span>
                        </div>
                        <Progress value={59} className="h-2" />
                        <Badge className="bg-green-600">FSSAI License: 10016011003208</Badge>
                        <Button className="w-full bg-blue-600 hover:bg-blue-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Enroll in Study
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-100/10 to-green-100/10 border-purple-400/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-purple-600">CBD/Hemp</Badge>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">₹15,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Boheco CBD Oil Anxiety Study
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">India Hemp Organics</p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">Validating anxiety reduction and sleep improvement claims through EEG analysis.</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Progress: 42/80 participants</span>
                          <span>Timeline: 4-6 weeks</span>
                        </div>
                        <Progress value={52} className="h-2" />
                        <Badge className="bg-green-600">AYUSH Approval: HEMP-3</Badge>
                        <Button className="w-full bg-purple-600 hover:bg-purple-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Enroll in Study
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-teal-100/10 to-green-100/10 border-teal-400/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-teal-600">Wellness App</Badge>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">₹3,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Art of Living Meditation App
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Art of Living Foundation</p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">Measuring meditation effectiveness through real-time EEG feedback integration.</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Progress: 234/300 participants</span>
                          <span>Timeline: 4 weeks</span>
                        </div>
                        <Progress value={78} className="h-2" />
                        <Badge className="bg-teal-600">Digital Wellness Validation</Badge>
                        <Button className="w-full bg-teal-600 hover:bg-teal-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Enroll in Study
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Partner Companies */}
                <Card className="bg-gradient-to-r from-orange-50/10 to-green-50/10 border border-orange-200/20">
                  <CardHeader>
                    <CardTitle className="text-base">Our FSSAI-Compliant Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="space-y-2">
                        <div className="text-2xl">🕉️</div>
                        <div className="text-sm font-semibold">Patanjali Ayurved</div>
                        <div className="text-xs text-muted-foreground">15 products validating</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl">🏔️</div>
                        <div className="text-sm font-semibold">Himalaya Drug Co.</div>
                        <div className="text-xs text-muted-foreground">8 products validating</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl">🌿</div>
                        <div className="text-sm font-semibold">Dabur India</div>
                        <div className="text-xs text-muted-foreground">12 products validating</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl">🍃</div>
                        <div className="text-sm font-semibold">Organic India</div>
                        <div className="text-xs text-muted-foreground">6 products validating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Research Tab */}
        <TabsContent value="research" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Research Marketplace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResearchRequests sessions={sessions} onSessionUpdate={onSessionUpdate} />
            </CardContent>
          </Card>

          {/* Active Research Projects */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Active Research Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchProjects.map((project) => {
                const IconComponent = getCategoryIcon(project.category);
                const eligibleNFTs = dataNFTs.filter(nft => 
                  nft.duration >= project.requirements.minDuration &&
                  project.requirements.categories.includes(nft.category)
                );

                return (
                  <Card key={project.id} className="bg-card border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge className={`bg-${project.category === 'neuroscience' ? 'purple' : 'blue'}-600`}>
                          {project.category}
                        </Badge>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">₹{project.rewards.perSubmission}</div>
                          <div className="text-xs text-muted-foreground">per submission</div>
                        </div>
                      </div>
                      <CardTitle className="text-base flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.institution}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">{project.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Progress: {project.submissions}/{project.requirements.sampleSize}</span>
                        <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                      </div>
                      <Progress 
                        value={(project.submissions / project.requirements.sampleSize) * 100} 
                        className="h-2" 
                      />
                      {eligibleNFTs.length > 0 ? (
                        <div className="space-y-2">
                          <div className="text-sm text-primary">
                            You have {eligibleNFTs.length} eligible NFT(s)
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {eligibleNFTs.slice(0, 2).map((nft) => (
                              <Button
                                key={nft.id}
                                size="sm"
                                onClick={() => handleSubmitToResearch(nft.id, project.id)}
                                className="bg-green-600 hover:bg-green-500 text-xs"
                              >
                                Submit {nft.category} NFT
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-muted-foreground">
                          No eligible NFTs. Need {project.requirements.categories.join(' or ')} data.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* Marketplace Tab */}
        <TabsContent value="marketplace" className="space-y-6">
          <Card className="bg-card border-border">
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
                      <Card key={item.id} className="bg-card border-border hover:border-primary/50 transition-colors">
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
                            <div className="text-lg font-bold text-primary">₹{item.price * 80}</div>
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

        {/* Personal Insights Tab */}
        <TabsContent value="insights" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Your Personal Brain Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    As you contribute more contextual data, we learn what works for YOUR unique brain patterns. 
                    These insights are the primary value of participation - earnings are secondary.
                  </AlertDescription>
                </Alert>

                {/* Insight Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-muted/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Wellness Response Patterns
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Meditation Effectiveness</span>
                          <Badge variant="default">82% match</Badge>
                        </div>
                        <Progress value={82} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          Vipassana style works 40% better for your brain than guided meditation
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Stress Response</span>
                          <Badge variant="secondary">Learning...</Badge>
                        </div>
                        <Progress value={45} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          Need 10 more sessions to understand your stress patterns
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Cognitive Optimization
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Peak Focus Time</span>
                          <Badge variant="default">Discovered</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Your brain shows optimal focus patterns between 10 AM - 12 PM
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Recovery Patterns</span>
                          <Badge variant="secondary">Analyzing...</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          20-minute breaks restore your cognitive performance by 35%
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Data Contribution Impact */}
                <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base">Your Data's Journey</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{sessions.length}</div>
                        <div className="text-xs text-muted-foreground">Sessions Contributed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">73%</div>
                        <div className="text-xs text-muted-foreground">Context Richness</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">4</div>
                        <div className="text-xs text-muted-foreground">Active Destinations</div>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-muted-foreground">
                        Your data is currently being matched with wellness validation studies and AI training models. 
                        Monetization happens when the right fit is found - typically 6-8 weeks for wellness studies, 
                        3-6 months for research applications.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Learning Progress */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-base">What We're Learning About You</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">Your brain responds well to morning meditation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">Ashwagandha shows positive effects on your stress patterns</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm">Still learning: Optimal sleep patterns for cognitive recovery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm">Need more data: Response to different focus techniques</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* NFT Detail Modal */}
      {selectedNFT && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-card border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
                  <div className="text-sm text-muted-foreground">Price</div>
                  <div className="font-bold">₹{selectedNFT.price * 80}</div>
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
    </div>
  );
};

export default NeuroDataEcosystem;