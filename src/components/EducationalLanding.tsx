import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
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
  BarChart3,
  Sparkles,
  Link,
  Eye,
  Heart,
  Activity,
  Cpu,
  CheckCircle
} from 'lucide-react';

const EducationalLanding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const educationSteps = [
    {
      id: 'intro',
      title: "Welcome to SkyBrain",
      subtitle: "Understanding Neural Data and Human Potential",
      content: (
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          {/* Hero Introduction */}
          <div className="text-center space-y-10 lg:space-y-12">
            <div className="flex justify-center">
              <div className="p-6 lg:p-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
                <Brain className="h-16 w-16 lg:h-24 lg:w-24 text-white" />
              </div>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                Your Neural Data
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Has Real Value
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                Every moment, your brain generates unique patterns that could help advance human wellness. 
                But who owns this data? Who profits from it? And how can you benefit from contributing to this revolution?
              </p>
            </div>
          </div>

          {/* The Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <Card className="bg-red-900/20 border-red-500/30 text-center h-full">
              <CardContent className="p-6 lg:p-10 h-full flex flex-col">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 lg:h-10 lg:w-10 text-red-400" />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-4">Data is Exploited</h3>
                <p className="text-red-200 text-base lg:text-lg leading-relaxed flex-grow">
                  Big tech companies collect your neural patterns for free, then sell insights to brands for millions. 
                  You get nothing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/20 border-orange-500/30 text-center h-full">
              <CardContent className="p-6 lg:p-10 h-full flex flex-col">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 lg:h-10 lg:w-10 text-orange-400" />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-4">No Transparency</h3>
                <p className="text-orange-200 text-base lg:text-lg leading-relaxed flex-grow">
                  You never know where your data goes, how it's used, or who's making money from your unique brain patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-600 text-center h-full md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-10 h-full flex flex-col">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 lg:h-10 lg:w-10 text-gray-400" />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-4">Wasted Potential</h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed flex-grow">
                  Your neural data could help develop solutions for stress, focus, and mental wellness. But it remains untapped.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The Solution Preview */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">What if there was a better way?</h2>
            <p className="text-lg lg:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              A platform where YOU own your neural data, decide how it's used, and earn from its value.
            </p>
            <Badge className="bg-green-600 text-white px-8 py-3 text-lg lg:text-xl">
              <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
              That's SkyBrain
            </Badge>
          </div>
        </div>
      )
    },
    {
      id: 'blockchain',
      title: "Why Blockchain?",
      subtitle: "True ownership and transparent value creation",
      content: (
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          <div className="text-center space-y-8 lg:space-y-10">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white">Blockchain = Your Data Ownership</h2>
            <p className="text-lg lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We don't use blockchain because it's trendy. We use it to solve real problems: 
              <strong className="text-cyan-400"> data ownership, transparent monetization, and participant control</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
            {/* Problems We Solve */}
            <div className="space-y-8 lg:space-y-10">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">Problems We Solve</h3>
              
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="p-3 lg:p-4 bg-red-500/20 rounded-lg flex-shrink-0">
                      <Database className="h-6 w-6 lg:h-8 lg:w-8 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Data Exploitation</h4>
                      <p className="text-sm lg:text-base text-red-200 leading-relaxed">
                        Traditional model: Companies profit from your data while you get nothing. 
                        Your neural patterns have immense value - you should own and control them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="p-3 lg:p-4 bg-orange-500/20 rounded-lg flex-shrink-0">
                      <Eye className="h-6 w-6 lg:h-8 lg:w-8 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Lack of Transparency</h4>
                      <p className="text-sm lg:text-base text-orange-200 leading-relaxed">
                        Where does your data go? How is it used? Who profits? 
                        Participants deserve complete visibility into their data's journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blockchain Solutions */}
            <div className="space-y-8 lg:space-y-10">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">Our Blockchain Solutions</h3>
              
              <Card className="bg-blue-900/20 border-blue-500/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="p-3 lg:p-4 bg-blue-500/20 rounded-lg flex-shrink-0">
                      <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">NFT Data Ownership</h4>
                      <p className="text-sm lg:text-base text-blue-200 leading-relaxed">
                        Each session becomes an NFT that YOU own. Decide who can access it, 
                        for what purpose, and earn when it creates value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="p-3 lg:p-4 bg-green-500/20 rounded-lg flex-shrink-0">
                      <Link className="h-6 w-6 lg:h-8 lg:w-8 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Transparent Revenue</h4>
                      <p className="text-sm lg:text-base text-green-200 leading-relaxed">
                        Smart contracts automatically distribute earnings. See exactly 
                        where your data is used and how much value it generates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6">Not Just Technology - It's Ethics</h3>
            <p className="text-purple-200 max-w-5xl mx-auto text-lg lg:text-2xl leading-relaxed">
              Blockchain enables us to build a data economy where participants are <strong>partners, not products</strong>. 
              Your neural data helps advance human potential - and you should share in that success.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'nft-ownership',
      title: "Who Owns Your NFTs?",
      subtitle: "You do. Here's exactly how it works.",
      content: (
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">You Own 100% of Your Neural Data NFTs</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Every EEG session you contribute becomes a unique NFT in your digital wallet. 
              Here's what that means and what you contribute to science.
            </p>
          </div>

          {/* Ownership Model */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-blue-900/20 border-blue-500/30 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">You Own It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">
                  The NFT representing your neural session is minted directly to your wallet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-500/30 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-white text-xl">You Control It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-200">
                  Decide who can access your data, for what research, and at what price. 
                  You set the terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-500/30 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">You Profit From It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  Every time your data contributes to research or validation studies, 
                  you earn directly through smart contracts.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What You Contribute */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center">What Your Neural Data Contributes To</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-cyan-900/20 border-cyan-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Heart className="h-8 w-8 text-cyan-400" />
                    <h4 className="text-2xl font-semibold text-white">Mental Wellness Research</h4>
                  </div>
                  <div className="space-y-3 text-cyan-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Stress reduction techniques validation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Meditation and mindfulness effectiveness studies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sleep quality improvement research</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Zap className="h-8 w-8 text-purple-400" />
                    <h4 className="text-2xl font-semibold text-white">Cognitive Enhancement</h4>
                  </div>
                  <div className="space-y-3 text-purple-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Focus and attention training algorithms</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Learning optimization techniques</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Memory enhancement protocols</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Activity className="h-8 w-8 text-green-400" />
                    <h4 className="text-2xl font-semibold text-white">Wellness Product Validation</h4>
                  </div>
                  <div className="space-y-3 text-green-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Supplement effectiveness for brain health</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Wellness app impact verification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Functional food brain benefit studies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-900/20 border-orange-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Cpu className="h-8 w-8 text-orange-400" />
                    <h4 className="text-2xl font-semibold text-white">AI & Future Technology</h4>
                  </div>
                  <div className="space-y-3 text-orange-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Brain-computer interface development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Empathetic AI that understands human states</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Next-generation mental health solutions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Your Data, Your Impact, Your Reward</h3>
            <p className="text-blue-200 max-w-4xl mx-auto text-lg">
              Every neural session you contribute helps solve real human challenges. From reducing workplace stress 
              to enhancing learning capabilities - your brain patterns become the foundation for solutions that improve lives worldwide.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'physical-center',
      title: "Our Bengaluru Flagship Center",
      subtitle: "Where high-quality data meets scientific rigor",
      content: (
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">Physical Center First, Global Impact Second</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Unlike pure-digital approaches, we start with a physical flagship center in Bengaluru to create 
              the <strong className="text-cyan-400">gold-standard training dataset</strong> that powers everything else.
            </p>
          </div>

          {/* Center Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Flagship Research Center</h3>
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

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Why Physical Center First?</h3>
              
              <div className="space-y-6">
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

          {/* Data Collection Process */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center">What Happens in the Center</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-blue-400" />
                  <h4 className="font-semibold text-white">Baseline Metrics</h4>
                </div>
                <p className="text-sm text-slate-400">Resting-state neural activity, cardiovascular patterns, physiological baselines</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-green-400" />
                  <h4 className="font-semibold text-white">Task-Based Metrics</h4>
                </div>
                <p className="text-sm text-slate-400">Cognitive challenges, attention tasks, problem-solving responses</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-6 w-6 text-purple-400" />
                  <h4 className="font-semibold text-white">Intervention Outcomes</h4>
                </div>
                <p className="text-sm text-slate-400">Mindfulness, relaxation, cognitive exercises impact measurement</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < educationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/business-model');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle scroll-based header visibility
  useEffect(() => {
    let ticking = false;
    let prevScrollY = 0;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show header when scrolling up or at top, hide when scrolling down
          if (currentScrollY < prevScrollY || currentScrollY <= 50) {
            setHeaderVisible(true);
          } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
            setHeaderVisible(false);
          }
          
          prevScrollY = currentScrollY;
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial setup
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentStepData = educationSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Progress Header */}
      <div className={`sticky top-0 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-40 transition-all duration-300 ${
        headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/')}
                className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:scale-105 transition-transform"
              >
                <Brain className="h-6 w-6 text-white" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-white">SkyBrain Neural Data Platform</h1>
                <p className="text-sm text-gray-400">Understanding the Foundation</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {currentStep + 1} of {educationSteps.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex gap-2">
            {educationSteps.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  i <= currentStep ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-white">{currentStepData.title}</h2>
            <p className="text-gray-400">{currentStepData.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16 xl:py-20 transition-all duration-300 ${
        !headerVisible ? 'mt-16' : ''
      }`}>
        {currentStepData.content}
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-6">
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
            
            <div className="text-sm text-gray-500">
              Understanding the Neural Data Revolution
            </div>
            
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 flex items-center gap-2"
            >
              {currentStep === educationSteps.length - 1 ? 'View Business Model' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalLanding;