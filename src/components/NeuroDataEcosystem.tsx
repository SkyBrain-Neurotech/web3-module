import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { 
  TrendingUp, 
  Users, 
  Database, 
  Shield, 
  Award, 
  ShoppingCart,
  Wallet,
  Target,
  Lock,
  Upload,
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

// Custom distinctive icons specific to neuroscience/EEG
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

const NeuralWave = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2zM18 12c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" fill="currentColor" opacity="0.6"/>
    <path d="M6 12c1.5-4 3-4 4.5 0S13 16 14.5 12s3-4 4.5 0" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="4" cy="8" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="20" cy="16" r="1" fill="currentColor" opacity="0.4"/>
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

const DataCrystal = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M4 7l8 5 8-5M12 12v10" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
    <circle cx="12" cy="7" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="8" cy="14" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="14" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="17" r="1.5" fill="currentColor" opacity="0.7"/>
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

const BioElectric = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L6 8l4 4-4 4 2 6h8l-2-6 4-4-4-4 2-6H8z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.8"/>
    <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
  </svg>
);
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
      'neuroscience': SynapseNetwork,
      'psychology': Users,
      'ai-training': Database,
      'medical': Shield,
      'wellness': NeuralWave
    };
    return icons[category as keyof typeof icons] || SynapseNetwork;
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Neural background pattern */}
      <div className="fixed inset-0 synaptic-pattern opacity-30 pointer-events-none" />
      
      {/* Main content container with organic spacing */}
      <div className="relative z-10 container-responsive py-8 space-y-12">
        
        {/* Enhanced Header with neural styling */}
        <header className="text-center space-y-8 animate-neural-fade-in">
          <div className="relative">
            {/* Floating neural elements */}
            <div className="absolute -top-4 -left-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-organic-float" />
            <div className="absolute -bottom-6 -right-12 w-20 h-20 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 animate-organic-float" style={{animationDelay: '2s'}} />
            
            <div className="flex items-center justify-center gap-6">
              <div className="neural-hexagon">
                <SynapseNetwork className="h-12 w-12 text-white z-10 relative" />
              </div>
              <div className="text-left">
                <h1 className="text-lg md:text-xl font-bold neural-text-gradient leading-tight text-center">
                  SkyBrain India
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-3 font-medium text-center">
                  Helping Wellness Brands Get FSSAI-Compliant with Neural Data Backing
                </p>
              </div>
            </div>
            
            {/* Enhanced status badges with organic shapes */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="neural-glass px-6 py-3 rounded-organic">
                <span className="text-orange-300 text-sm font-semibold neural-glow-text">🇮🇳 Made in India</span>
              </div>
              <div className="neural-glass px-6 py-3 rounded-flow">
                <span className="text-green-300 text-sm font-semibold neural-glow-text">Data Validation</span>
              </div>
              <div className="neural-glass px-6 py-3 rounded-neural">
                <span className="text-blue-300 text-sm font-semibold neural-glow-text">Scientific Backing</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced description with better hierarchy */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-base md:text-lg font-bold text-foreground leading-relaxed text-center">
              Help wellness companies get <span className="neural-text-gradient">FSSAI-compliant</span> with neural data backing
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Earn ₹15,000-30,000 annually while providing scientific validation for Ayurvedic products, CBD oils, and wellness apps.
            </p>
          </div>
        </header>

        {/* Neural wave divider */}
        <div className="neural-wave-top" />

        {/* Enhanced Value Overview with varied card types */}
        <section className="space-y-8">
          <h2 className="text-base md:text-lg font-bold text-center neural-text-gradient">
            Platform Overview
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="neural-card-primary p-8 text-center animate-organic-scale neural-stagger-item">
              <div className="neural-blob w-20 h-20 mx-auto mb-6">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 neural-glow-text text-center">
                {sessions.length}
              </h3>
              <p className="text-sm text-cyan-300 font-medium tracking-wide">FSSAI Studies Active</p>
            </div>

            <div className="neural-card-secondary p-8 text-center animate-organic-scale neural-stagger-item">
              <div className="neural-hexagon w-20 h-20 mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 neural-glow-text text-center">
                ₹{Math.min(wallet.lifetimeEarnings * 500, 25000).toLocaleString()}
              </h3>
              <p className="text-sm text-emerald-300 font-medium tracking-wide">Annual Potential</p>
            </div>

            <div className="neural-card-accent p-8 text-center animate-organic-scale neural-stagger-item">
              <div className="neural-blob w-20 h-20 mx-auto mb-6" style={{clipPath: 'polygon(50% 0%, 90% 25%, 85% 75%, 50% 100%, 15% 75%, 10% 25%)'}}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 neural-glow-text text-center">
                3
              </h3>
              <p className="text-sm text-blue-300 font-medium tracking-wide">Ayurvedic Products Validating</p>
            </div>

            <div className="neural-card-primary p-8 text-center animate-organic-scale neural-stagger-item">
              <div className="neural-hexagon w-20 h-20 mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 neural-glow-text text-center">
                15
              </h3>
              <p className="text-sm text-purple-300 font-medium tracking-wide">Partner Companies</p>
            </div>
          </div>
        </section>

        {/* Neural wave divider */}
        <div className="neural-wave-bottom" />
        
        {/* Enhanced Organic Tab Navigation */}
        <section className="space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="neural-glass rounded-flow p-2 backdrop-blur-xl">
              <TabsList className="grid w-full grid-cols-6 gap-2 bg-transparent p-0">
                <TabsTrigger 
                  value="vision" 
                  className="neural-btn-primary data-[state=active]:neural-text-gradient data-[state=active]:neural-border-glow px-3 py-2 rounded-organic text-xs font-semibold transition-all duration-500 group"
                >
                  <SynapseNetwork className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-data-[state=active]:animate-neural-pulse" />
                  <span>Vision</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="control" 
                  className="neural-btn-secondary data-[state=active]:neural-text-gradient data-[state=active]:neural-border-glow px-3 py-2 rounded-neural text-xs font-semibold transition-all duration-500 group"
                >
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-data-[state=active]:animate-neural-pulse" />
                  <span>Control</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="dashboard" 
                  className="neural-btn-accent data-[state=active]:neural-text-gradient data-[state=active]:neural-border-glow px-3 py-2 rounded-flow text-xs font-semibold transition-all duration-500 group"
                >
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-data-[state=active]:animate-neural-pulse" />
                  <span>Dashboard</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="fssai" 
                  className="neural-btn-primary data-[state=active]:neural-text-gradient data-[state=active]:neural-border-glow px-3 py-2 rounded-organic text-xs font-semibold transition-all duration-500 group"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-data-[state=active]:animate-neural-pulse" />
                  <span>FSSAI</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="research" 
                  className="neural-btn-secondary data-[state=active]:neural-text-gradient data-[state=active]:neural-border-glow px-3 py-2 rounded-neural text-xs font-semibold transition-all duration-500 group"
                >
                  <EEGElectrode className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-data-[state=active]:animate-neural-pulse" />
                  <span>Research</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="insights" 
                  className="neural-btn-accent data-[state=active]:neural-text-gradient data-[state=active]:neural-border-glow px-3 py-2 rounded-flow text-xs font-semibold transition-all duration-500 group"
                >
                  <DataCrystal className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-data-[state=active]:animate-neural-pulse" />
                  <span>Insights</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Vision Tab - PRIMARY LANDING */}
            <TabsContent value="vision" className="space-y-12 animate-neural-fade-in">
              
              {/* Hero Section with Neural Styling */}
              <section className="neural-section neural-card-accent p-12 text-center space-y-8 animate-organic-scale">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-organic-float" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 animate-organic-float" style={{animationDelay: '3s'}} />
                  
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    <div className="neural-blob w-32 h-32 animate-neural-pulse">
                      <SynapseNetwork className="h-16 w-16 text-white" />
                    </div>
                    <div className="text-left max-w-2xl">
                      <h2 className="text-lg md:text-xl font-bold neural-text-gradient mb-4 leading-tight text-center">
                        Following the AI Data Playbook
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
                        Massive contextual data collection → Find the right fit → Revenue sharing
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="max-w-5xl mx-auto space-y-6">
                  <p className="text-sm md:text-base text-foreground leading-relaxed font-medium text-center">
                    Just like ChatGPT's pre-launch phase, we're collecting rich contextual neural data with 
                    <span className="neural-text-gradient font-bold"> full user control</span>. 
                    You decide where your data goes. We find the right applications. Revenue comes when real value is created.
                  </p>
                </div>

                {/* Enhanced Feature Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                  <div className="neural-process-card animate-organic-scale neural-stagger-item">
                    <div className="neural-hexagon w-24 h-24 mx-auto mb-6">
                      <Database className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground mb-4 neural-glow-text">Rich Contextual Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      EEG + lifestyle + wellness practices + longitudinal tracking = valuable intelligence
                    </p>
                  </div>
                  
                  <div className="neural-process-card animate-organic-scale neural-stagger-item">
                    <div className="neural-blob w-24 h-24 mx-auto mb-6" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}>
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground mb-4 neural-glow-text">You Control Everything</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Choose data destinations, modify permissions anytime, full transparency on usage
                    </p>
                  </div>
                  
                  <div className="neural-process-card animate-organic-scale neural-stagger-item">
                    <div className="neural-hexagon w-24 h-24 mx-auto mb-6">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground mb-4 neural-glow-text">Delayed Value Creation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No unsustainable promises. Earnings come when your data creates real value (6-8 weeks to 6 months)
                    </p>
                  </div>
                </div>
              </section>

              {/* Enhanced Strategy Section */}
              <section className="space-y-8">
                <h2 className="text-lg md:text-xl lg:text-xl font-bold text-center neural-text-gradient mb-8">
                  Our Dual Strategy Approach
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="neural-card-primary p-8 space-y-6 animate-organic-scale neural-stagger-item">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="neural-blob w-16 h-16">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground neural-glow-text">
                        Bengaluru Center Strategy
                      </h3>
                    </div>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Our flagship data collection center creates the gold-standard training dataset that powers everything else.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-organic">
                        <CheckCircle className="h-6 w-6 text-green-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Research-grade EEG equipment</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-neural">
                        <CheckCircle className="h-6 w-6 text-green-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Controlled environment + rich context</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-flow">
                        <CheckCircle className="h-6 w-6 text-green-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Longitudinal studies (same people over months)</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-organic">
                        <CheckCircle className="h-6 w-6 text-green-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Diverse Indian population baseline</span>
                      </div>
                    </div>
                    
                    <button className="neural-btn-primary w-full">
                      Learn About Center Participation
                    </button>
                  </div>

                  <div className="neural-card-secondary p-8 space-y-6 animate-organic-scale neural-stagger-item">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="neural-hexagon w-16 h-16">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground neural-glow-text">
                        Global Platform Vision
                      </h3>
                    </div>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Web3 platform scales data collection globally while maintaining user control and enabling wellness validation at massive scale.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-flow">
                        <CheckCircle className="h-6 w-6 text-blue-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Consumer EEG devices worldwide</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-neural">
                        <CheckCircle className="h-6 w-6 text-blue-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">10,000+ concurrent validation studies</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-organic">
                        <CheckCircle className="h-6 w-6 text-blue-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Blockchain consent & revenue tracking</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 neural-glass rounded-flow">
                        <CheckCircle className="h-6 w-6 text-blue-400 animate-synapse-flicker" />
                        <span className="text-foreground font-medium">Quality scoring from center-trained models</span>
                      </div>
                    </div>
                    
                    <button className="neural-btn-secondary w-full">
                      Join Platform Beta
                    </button>
                  </div>
                </div>
              </section>

              {/* Current Opportunity Highlight */}
              <section className="neural-section neural-card-accent p-12 text-center space-y-8 animate-organic-scale">
                <h2 className="text-lg md:text-xl font-bold neural-text-gradient mb-6 text-center">
                  The Indian Wellness Validation Crisis
                </h2>
                
                <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center">
                  FSSAI now requires scientific backing for wellness claims. 10,000+ Indian companies need affordable validation. 
                  We're solving this while building the foundation for personalized neurotechnology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="neural-process-card animate-organic-scale neural-stagger-item">
                    <div className="text-lg md:text-xl font-bold neural-glow-text mb-4 text-center">₹50,000 Cr</div>
                    <p className="text-sm text-muted-foreground text-center">Indian wellness market needing validation</p>
                  </div>
                  <div className="neural-process-card animate-organic-scale neural-stagger-item">
                    <div className="text-lg md:text-xl font-bold neural-glow-text mb-4 text-center">6 weeks</div>
                    <p className="text-sm text-muted-foreground text-center">vs 6 months traditional validation</p>
                  </div>
                  <div className="neural-process-card animate-organic-scale neural-stagger-item">
                    <div className="text-lg md:text-xl font-bold neural-glow-text mb-4 text-center">1/10th cost</div>
                    <p className="text-sm text-muted-foreground text-center">vs clinical trials</p>
                  </div>
                </div>
              </section>

              {/* Enhanced Economics Section */}
              <section className="neural-card-primary p-10 space-y-8 animate-organic-scale">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="neural-hexagon w-20 h-20">
                    <DollarSign className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-base md:text-lg font-bold neural-text-gradient text-center">
                    Sustainable Economics (No False Promises)
                  </h2>
                </div>
                
                <div className="neural-glass p-8 rounded-flow space-y-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-8 w-8 text-yellow-400 animate-synapse-flicker mt-1" />
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-foreground">
                        We don't promise unsustainable high earnings.
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Your primary value is discovering what works for YOUR brain. 
                        Earnings come when your data creates real value - typically ₹20,000-70,000 annually.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="neural-card-secondary p-8 text-center space-y-4 animate-organic-scale neural-stagger-item">
                    <h3 className="text-base md:text-lg font-bold text-green-400 neural-glow-text text-center">₹650-1,200</h3>
                    <p className="text-sm font-medium text-foreground text-center">Per quality session</p>
                    <p className="text-xs text-muted-foreground text-center">When data is used</p>
                  </div>
                  
                  <div className="neural-card-accent p-8 text-center space-y-4 animate-organic-scale neural-stagger-item">
                    <h3 className="text-base md:text-lg font-bold text-blue-400 neural-glow-text text-center">₹2,000-8,000</h3>
                    <p className="text-sm font-medium text-foreground text-center">Per validation study</p>
                    <p className="text-xs text-muted-foreground text-center">6-8 week timeline</p>
                  </div>
                  
                  <div className="neural-card-primary p-8 text-center space-y-4 animate-organic-scale neural-stagger-item">
                    <h3 className="text-base md:text-lg font-bold text-purple-400 neural-glow-text text-center">₹20,000-70,000</h3>
                    <p className="text-sm font-medium text-foreground text-center">Annual cap</p>
                    <p className="text-xs text-muted-foreground text-center">Sustainable scaling</p>
                  </div>
                </div>
                
                <div className="text-center pt-8">
                  <button 
                    onClick={() => setActiveTab('control')}
                    className="neural-btn-accent"
                  >
                    <Shield className="h-5 w-5 mr-3" />
                    Take Control of Your Data Journey
                  </button>
                </div>
              </section>
            </TabsContent>

            {/* Data Control Tab */}
            <TabsContent value="control" className="space-y-8 animate-neural-fade-in">
              <div className="neural-section">
                <DataControlDashboard />
              </div>
            </TabsContent>

            {/* Enhanced Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-12 animate-neural-fade-in">
              
              <h2 className="text-lg md:text-xl font-bold text-center neural-text-gradient mb-8">
                Your Performance Dashboard
              </h2>
              
              {/* Enhanced Performance Metrics */}
              <section className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="neural-card-primary p-8 space-y-6 animate-organic-scale neural-stagger-item">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="neural-blob w-16 h-16">
                        <Signal className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground neural-glow-text">
                        Data Quality Score
                      </h3>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="text-lg md:text-xl font-bold neural-text-gradient mb-2 text-center">
                        {wallet.dataQualityScore.toFixed(1)}%
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Based on {wallet.totalSessionsContributed} sessions
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Progress value={wallet.dataQualityScore} className="h-4 rounded-full bg-muted" />
                      <div className="grid grid-cols-3 gap-4">
                        <div className="neural-glass p-4 text-center rounded-organic">
                          <div className="text-green-400 font-bold text-sm text-center">{wallet.acceptedSubmissions}</div>
                          <div className="text-xs text-muted-foreground text-center">Accepted</div>
                        </div>
                        <div className="neural-glass p-4 text-center rounded-neural">
                          <div className="text-foreground font-bold text-sm text-center">{wallet.totalSessionsContributed}</div>
                          <div className="text-xs text-muted-foreground text-center">Total</div>
                        </div>
                        <div className="neural-glass p-4 text-center rounded-flow">
                          <div className="text-blue-400 font-bold text-sm text-center">
                            {((wallet.acceptedSubmissions/wallet.totalSessionsContributed)*100).toFixed(1)}%
                          </div>
                          <div className="text-xs text-muted-foreground text-center">Success</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="neural-card-secondary p-8 space-y-6 animate-organic-scale neural-stagger-item">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="neural-hexagon w-16 h-16">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground neural-glow-text">
                        Research Impact Score
                      </h3>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="text-lg md:text-xl font-bold neural-text-gradient mb-2 text-center">
                        {wallet.researchImpactScore.toFixed(1)}/10
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Research contribution quality
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Progress value={wallet.researchImpactScore * 10} className="h-4 rounded-full bg-muted" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="neural-glass p-4 text-center rounded-neural">
                          <div className="text-purple-400 font-bold text-sm text-center">{wallet.researchContributions}</div>
                          <div className="text-sm text-muted-foreground">Projects</div>
                        </div>
                        <div className="neural-glass p-4 text-center rounded-organic">
                          <div className="text-cyan-400 font-bold text-sm text-center">{wallet.dataSubmissions}</div>
                          <div className="text-sm text-muted-foreground">Submissions</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="neural-card-accent p-8 space-y-6 animate-organic-scale neural-stagger-item">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="neural-blob w-16 h-16" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}>
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl font-bold text-foreground neural-glow-text">
                        Staking Rewards
                      </h3>
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="text-lg md:text-xl font-bold neural-text-gradient mb-2 text-center">
                        {wallet.stakingRewards.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        SKY earned from staking
                      </p>
                    </div>
                    
                    <div className="neural-glass p-4 rounded-flow text-center">
                      <p className="text-xs text-muted-foreground text-center">
                        Auto-compounding rewards from staking pools
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Quick Actions */}
              <section className="neural-card-primary p-10 space-y-8 animate-organic-scale">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="neural-hexagon w-20 h-20">
                    <BioElectric className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-base md:text-lg font-bold neural-text-gradient text-center">
                    Quick Actions
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <button 
                    onClick={handleCreateDemoSession} 
                    className="neural-btn-primary group"
                  >
                    <EEGElectrode className="h-6 w-6 mr-4 group-hover:animate-neural-pulse" />
                    Create Demo Session
                  </button>
                  
                  <button 
                    onClick={handleMintNFT} 
                    disabled={loading} 
                    className="neural-btn-secondary group"
                  >
                    <QuantumCoin className="h-6 w-6 mr-4 group-hover:animate-neural-pulse" />
                    {loading ? 'Minting...' : 'Mint Current Data'}
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('research')} 
                    className="neural-btn-accent group"
                  >
                    <Database className="h-6 w-6 mr-4 group-hover:animate-neural-pulse" />
                    Browse Research
                  </button>
                </div>
              </section>
            </TabsContent>

            {/* FSSAI Tab */}
            <TabsContent value="fssai" className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    FSSAI-Compliant Wellness Validation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    <Card className="bg-gradient-to-r from-blue-100/10 to-green-100/10 border-blue-400/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-600">Cognitive Enhancement</Badge>
                          <div className="text-right">
                            <div className="text-base font-bold text-primary">₹12,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          हिमालय ब्राह्मी गोलियां Validation
                        </CardTitle>
                        <p className="text-xs text-muted-foreground text-center">Himalaya Drug Company</p>
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
                            <div className="text-base font-bold text-primary">₹15,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Boheco CBD Oil Anxiety Study
                        </CardTitle>
                        <p className="text-xs text-muted-foreground text-center">India Hemp Organics</p>
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
                            <div className="text-base font-bold text-primary">₹3,000</div>
                            <div className="text-xs text-muted-foreground">per participant</div>
                          </div>
                        </div>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Art of Living Meditation App
                        </CardTitle>
                        <p className="text-xs text-muted-foreground text-center">Art of Living Foundation</p>
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
                <DataCrystal className="h-5 w-5" />
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
                          <div className="text-base font-bold text-primary">₹{project.rewards.perSubmission}</div>
                          <div className="text-xs text-muted-foreground">per submission</div>
                        </div>
                      </div>
                      <CardTitle className="text-base flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        {project.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground text-center">{project.institution}</p>
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
                            <div className="text-base font-bold text-primary">₹{item.price * 80}</div>
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
                <NeuralWave className="h-5 w-5" />
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
                        <NeuralWave className="h-4 w-4" />
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
                        <BioElectric className="h-4 w-4" />
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
                        <div className="text-lg font-bold text-center">{sessions.length}</div>
                        <div className="text-xs text-muted-foreground">Sessions Contributed</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-center">73%</div>
                        <div className="text-xs text-muted-foreground">Context Richness</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-center">4</div>
                        <div className="text-xs text-muted-foreground">Active Destinations</div>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground text-center">
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
        </section>

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

        {/* Neural wave divider at bottom */}
        <div className="neural-wave-bottom" />

      </div>

      {/* Enhanced NFT Detail Modal with Neural Styling */}
      {selectedNFT && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-neural-fade-in">
          <div className="neural-card-primary max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold neural-text-gradient truncate">{selectedNFT.title}</h2>
              <button 
                onClick={() => setSelectedNFT(null)}
                className="neural-btn-secondary w-12 h-12 rounded-full p-0 flex items-center justify-center"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="neural-glass p-4 rounded-organic">
                  <h4 className="text-sm text-muted-foreground mb-2">Token ID</h4>
                  <p className="font-mono text-sm text-foreground break-all">{selectedNFT.tokenId}</p>
                </div>
                <div className="neural-glass p-4 rounded-neural">
                  <h4 className="text-sm text-muted-foreground mb-2">Category</h4>
                  <p className="text-foreground capitalize">{selectedNFT.category}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="neural-glass p-4 rounded-flow">
                  <h4 className="text-sm text-muted-foreground mb-2">Quality</h4>
                  <Badge className={`${getQualityColor(selectedNFT.quality)} border text-sm px-3 py-1`}>
                    {selectedNFT.quality}
                  </Badge>
                </div>
                <div className="neural-glass p-4 rounded-organic">
                  <h4 className="text-sm text-muted-foreground mb-2">Price</h4>
                  <p className="text-xl font-bold neural-text-gradient">₹{selectedNFT.price * 80}</p>
                </div>
              </div>
            </div>

            {/* Band Powers Visualization */}
            <div className="neural-glass p-6 rounded-flow">
              <h4 className="text-base font-bold text-foreground mb-4">Brain Wave Analysis</h4>
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(selectedNFT.metadata.bandPowers).map(([band, power], index) => (
                  <div key={band} className="neural-process-card p-4 text-center animate-organic-scale neural-stagger-item">
                    <div className="text-sm font-medium text-muted-foreground capitalize mb-2">{band}</div>
                    <div className="text-lg font-bold neural-glow-text">{power.toFixed(1)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Metadata */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="neural-glass p-4 rounded-organic text-center">
                <h5 className="text-sm text-muted-foreground mb-2">Signal Quality</h5>
                <p className="text-base font-bold text-green-400">{selectedNFT.metadata.signalQuality.toFixed(1)}%</p>
              </div>
              <div className="neural-glass p-4 rounded-neural text-center">
                <h5 className="text-sm text-muted-foreground mb-2">Verification</h5>
                <p className="text-base font-bold text-blue-400">{selectedNFT.metadata.verificationScore.toFixed(1)}%</p>
              </div>
              <div className="neural-glass p-4 rounded-flow text-center">
                <h5 className="text-sm text-muted-foreground mb-2">Sales</h5>
                <p className="text-base font-bold text-purple-400">{selectedNFT.sales}</p>
              </div>
              <div className="neural-glass p-4 rounded-organic text-center">
                <h5 className="text-sm text-muted-foreground mb-2">Created</h5>
                <p className="text-sm text-foreground">{new Date(selectedNFT.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeuroDataEcosystem;