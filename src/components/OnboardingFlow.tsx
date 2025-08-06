import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Brain, 
  Building2, 
  Users, 
  Database,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Network,
  Cpu,
  Heart,
  Eye,
  BarChart3,
  Sparkles,
  Globe,
  Link
} from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [debugLog, setDebugLog] = useState<string[]>([]);

  // Debug logging function
  const addDebugLog = (message: string) => {
    console.log(`[OnboardingFlow] ${message}`);
    setDebugLog(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    addDebugLog(`Initialized OnboardingFlow - Step ${currentStep}`);
  }, []);

  useEffect(() => {
    addDebugLog(`Step changed to: ${currentStep} - ${steps[currentStep]?.title}`);
  }, [currentStep]);

  const steps = [
    {
      title: "SkyBrain Flagship Center",
      subtitle: "Our First Physical Location - Bengaluru, India",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Left side - Center visualization */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Flagship Center</h3>
                    <p className="text-slate-400">State-of-the-art facility</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                    <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-blue-300">Location</div>
                    <div className="font-semibold text-white">Bengaluru</div>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                    <Users className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm text-purple-300">Capacity</div>
                    <div className="font-semibold text-white">3-5 Booths</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Research-grade EEG, ECG, PPG equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Diverse metropolitan population access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Weekly/biweekly sessions over 6-12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Strategic importance */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-white">Physical Center First</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Unlike pure-digital approaches, we start with a physical flagship center to create 
              the <strong className="text-blue-400">gold-standard training dataset</strong> that powers everything else.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-slate-800/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Controlled Environment</h4>
                      <p className="text-sm text-slate-400">Standardized conditions, calibrated equipment, repeatable protocols</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Rich Context</h4>
                      <p className="text-sm text-slate-400">Longitudinal tracking, lifestyle integration, comprehensive baselines</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Database className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Quality Foundation</h4>
                      <p className="text-sm text-slate-400">High-fidelity data that trains AI models for consumer applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Why a Physical Center?",
      subtitle: "The data scarcity problem in neurotechnology",
      content: (
        <div className="space-y-8 h-[600px] flex flex-col justify-center">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-white">The Neurodata Crisis</h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              Current neurodata is <strong className="text-red-400">fragmented, poorly labeled, and non-representative</strong>. 
              This scarcity limits solutions for mental well-being and human potential enhancement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Database className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Fragmentation</h4>
                <p className="text-red-200 text-sm">
                  EEG data is siloed across institutions, with inconsistent protocols and limited real-world context.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/20 border-orange-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Ethical Gaps</h4>
                <p className="text-orange-200 text-sm">
                  Data collection often lacks transparency, proper consent, or participant empowerment mechanisms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Unfulfilled Potential</h4>
                <p className="text-yellow-200 text-sm">
                  Without robust datasets, solutions for focus, stress management, and cognitive enhancement remain limited.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-2">Our Solution</h4>
                <p className="text-blue-200">
                  A flagship center creates the <strong>standardized baseline</strong> and <strong>ethical framework</strong> 
                  that the entire industry needs. We're building the foundation that enables breakthrough applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "What We Do in the Center",
      subtitle: "Comprehensive neurodata collection and participant empowerment",
      content: (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-[600px]">
          {/* Left side - Data collection process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Phase 1: Ethical Data Collection</h3>
            <p className="text-slate-300">
              Focus on individuals with normal cognition to establish standardized baselines for analysis.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-5 w-5 text-blue-400" />
                  <h4 className="font-semibold text-white">Baseline Metrics</h4>
                </div>
                <p className="text-sm text-slate-400">Resting-state neural activity, cardiovascular patterns, physiological baselines</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-green-400" />
                  <h4 className="font-semibold text-white">On-Task Metrics</h4>
                </div>
                <p className="text-sm text-slate-400">Cognitive challenges, attention tasks, problem-solving responses</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  <h4 className="font-semibold text-white">Intervention Outcomes</h4>
                </div>
                <p className="text-sm text-slate-400">Mindfulness, relaxation, cognitive exercises impact measurement</p>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-white">Participant Empowerment</h4>
                    <p className="text-sm text-green-200">Full data ownership through NFT-based transparent control</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Output and impact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Multi-Modal Dataset Output</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-slate-800/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Brain className="h-6 w-6 text-blue-400" />
                      <span className="font-semibold text-white">EEG Neural Activity</span>
                    </div>
                    <Badge className="bg-blue-600">Primary</Badge>
                  </div>
                  <div className="text-sm text-slate-400 space-y-1">
                    <div>• Alpha/Beta ratios for focus states</div>
                    <div>• Theta patterns for relaxation</div>
                    <div>• Gamma coherence for cognitive load</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Heart className="h-6 w-6 text-red-400" />
                      <span className="font-semibold text-white">Cardiovascular Data</span>
                    </div>
                    <Badge className="bg-red-600">ECG/PPG</Badge>
                  </div>
                  <div className="text-sm text-slate-400 space-y-1">
                    <div>• Heart rate variability patterns</div>
                    <div>• Stress response indicators</div>
                    <div>• Autonomic nervous system activity</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-6 w-6 text-green-400" />
                      <span className="font-semibold text-white">Contextual Integration</span>
                    </div>
                    <Badge className="bg-green-600">Rich</Badge>
                  </div>
                  <div className="text-sm text-slate-400 space-y-1">
                    <div>• Lifestyle and environmental factors</div>
                    <div>• Longitudinal behavioral patterns</div>
                    <div>• Intervention response tracking</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-500/30">
              <h4 className="font-semibold text-white mb-2">The Result</h4>
              <p className="text-purple-200 text-sm">
                A comprehensive understanding of brain-body interactions that becomes the foundation 
                for AI tools that enhance focus, manage stress, and improve quality of life.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "What is Blockchain For?",
      subtitle: "Empowering participants with true data ownership and transparency",
      content: (
        <div className="space-y-8 h-[600px] flex flex-col justify-center">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-white">Blockchain = Participant Empowerment</h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              We use blockchain not for hype, but to solve real problems: <strong className="text-blue-400">data ownership, 
              transparent monetization, and participant control</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Problems blockchain solves */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Problems We Solve</h4>
              
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <Database className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Data Exploitation</h5>
                      <p className="text-sm text-red-200">
                        Traditional models: companies profit from your data while you get nothing. 
                        Your neural patterns have value - you should own and control them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Eye className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Lack of Transparency</h5>
                      <p className="text-sm text-orange-200">
                        Where does your data go? How is it used? Who profits? 
                        Participants deserve complete visibility into their data's journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Blockchain solutions */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Our Blockchain Solutions</h4>
              
              <Card className="bg-blue-900/20 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">NFT Data Ownership</h5>
                      <p className="text-sm text-blue-200">
                        Each session becomes an NFT that YOU own. Decide who can access it, 
                        for what purpose, and earn when it creates value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Link className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Transparent Revenue</h5>
                      <p className="text-sm text-green-200">
                        Smart contracts automatically distribute earnings. See exactly 
                        where your data is used and how much value it generates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-3">Not Just Technology - It's Ethics</h4>
              <p className="text-purple-200 max-w-3xl mx-auto">
                Blockchain enables us to build a data economy where participants are <strong>partners, not products</strong>. 
                Your neural data helps advance human potential - and you should share in that success.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How We Solve Data Scarcity",
      subtitle: "From flagship center to global AI revolution",
      content: (
        <div className="space-y-8 h-[600px] overflow-y-auto">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-white">Scaling Beyond the Center</h3>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              Our flagship center creates the <strong className="text-green-400">training dataset</strong> that enables 
              global deployment through consumer devices and AGI integration.
            </p>
          </div>

          {/* Roadmap visualization */}
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-0.5 h-16 bg-blue-600 mt-2"></div>
              </div>
              <Card className="flex-1 bg-blue-900/20 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="h-6 w-6 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">Flagship Center (1-3 Years)</h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-blue-300 font-medium mb-1">Build Foundation</div>
                      <div className="text-slate-400">• Launch Bengaluru center</div>
                      <div className="text-slate-400">• Collect 10,000+ sessions</div>
                      <div className="text-slate-400">• Train initial AI models</div>
                    </div>
                    <div>
                      <div className="text-blue-300 font-medium mb-1">Monetize Data</div>
                      <div className="text-slate-400">• NFT marketplace</div>
                      <div className="text-slate-400">• Licensing to researchers</div>
                      <div className="text-slate-400">• Wellness brand partnerships</div>
                    </div>
                    <div>
                      <div className="text-blue-300 font-medium mb-1">Develop Tools</div>
                      <div className="text-slate-400">• Focus enhancement apps</div>
                      <div className="text-slate-400">• Stress management tools</div>
                      <div className="text-slate-400">• Cognitive insights platform</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 2 */}
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-0.5 h-16 bg-green-600 mt-2"></div>
              </div>
              <Card className="flex-1 bg-green-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-green-400" />
                    <h4 className="text-xl font-semibold text-white">Consumer Deployment (3-5 Years)</h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-green-300 font-medium mb-1">Wearable Integration</div>
                      <div className="text-slate-400">• Partner with Apple, Samsung</div>
                      <div className="text-slate-400">• EEG-enabled smartwatches</div>
                      <div className="text-slate-400">• Consumer-grade validation</div>
                    </div>
                    <div>
                      <div className="text-green-300 font-medium mb-1">Advanced Metrics</div>
                      <div className="text-slate-400">• Brain connectivity analysis</div>
                      <div className="text-slate-400">• Cognitive augmentation</div>
                      <div className="text-slate-400">• Decision support systems</div>
                    </div>
                    <div>
                      <div className="text-green-300 font-medium mb-1">Global Scale</div>
                      <div className="text-slate-400">• University partnerships</div>
                      <div className="text-slate-400">• Wellness center network</div>
                      <div className="text-slate-400">• Millions of data points</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 3 */}
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <Card className="flex-1 bg-purple-900/20 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="h-6 w-6 text-purple-400" />
                    <h4 className="text-xl font-semibold text-white">AGI Integration (5+ Years)</h4>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-purple-300 font-medium mb-1">Empathetic AI</div>
                      <div className="text-slate-400">• Emotional intelligence models</div>
                      <div className="text-slate-400">• Real-time adaptation</div>
                      <div className="text-slate-400">• Human-AI collaboration</div>
                    </div>
                    <div>
                      <div className="text-purple-300 font-medium mb-1">SingularityNET</div>
                      <div className="text-slate-400">• Decentralized AGI integration</div>
                      <div className="text-slate-400">• Global AI ecosystem</div>
                      <div className="text-slate-400">• Neurotech leadership</div>
                    </div>
                    <div>
                      <div className="text-purple-300 font-medium mb-1">Human Impact</div>
                      <div className="text-slate-400">• Enhanced cognitive abilities</div>
                      <div className="text-slate-400">• Better mental health</div>
                      <div className="text-slate-400">• Optimized human potential</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-3">The Ultimate Vision</h4>
              <p className="text-blue-200 max-w-4xl mx-auto">
                From our Bengaluru flagship center to global AGI integration - we're building the neural data foundation 
                that will <strong>enhance human potential</strong> and create <strong>empathetic artificial intelligence</strong> 
                that truly understands human experience.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      addDebugLog(`Moving to next step: ${currentStep + 1}`);
    } else {
      addDebugLog("Completing onboarding flow");
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      addDebugLog(`Moving to previous step: ${currentStep - 1}`);
    }
  };

  const handleSkip = () => {
    addDebugLog("Skipping onboarding flow");
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 rounded-t-xl p-6 border-b border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">SkyBrain Flagship Center Demo</h1>
                <p className="text-slate-400">From Physical Center to Global AGI Integration</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSkip}
              className="text-slate-400 hover:text-white"
            >
              Skip Demo
            </Button>
          </div>
          
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-4">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  i <= currentStep ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">{steps[currentStep].title}</h2>
              <p className="text-slate-400">{steps[currentStep].subtitle}</p>
            </div>
            <div className="text-sm text-slate-500">
              {currentStep + 1} of {steps.length}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-slate-800 p-8 overflow-hidden">
          {steps[currentStep].content}
        </div>

        {/* Footer */}
        <div className="bg-slate-900 rounded-b-xl p-6 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="text-xs text-slate-500 max-w-md">
              Debug: Step {currentStep}, Total {steps.length}
            </div>
            
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? 'Enter Platform' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Debug panel - only in development */}
      {process.env.NODE_ENV === 'development' && debugLog.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-green-400 text-xs p-3 rounded-lg font-mono max-w-md">
          <div className="mb-2 text-green-300 font-semibold">Debug Log:</div>
          {debugLog.map((log, i) => (
            <div key={i} className="opacity-75">{log}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OnboardingFlow;