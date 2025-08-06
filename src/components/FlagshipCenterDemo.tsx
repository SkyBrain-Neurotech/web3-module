import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Brain, 
  Building2, 
  Users, 
  MapPin,
  Target,
  BarChart3,
  Microscope,
  Clock,
  CheckCircle,
  Activity,
  Zap,
  Heart,
  ArrowLeft,
  Play,
  Pause,
  MonitorSpeaker,
  Waves,
  TrendingUp
} from 'lucide-react';

const FlagshipCenterDemo = () => {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(true);
  const [currentDemo, setCurrentDemo] = useState('overview');
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionProgress, setSessionProgress] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle scroll-based header visibility
  useEffect(() => {
    let ticking = false;
    let prevScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;
    
    const isTablet = /iPad|Android(?=.*Tablet)|Tablet|KFAPWI|RIM Tablet|PlayBook|Silk/.test(navigator.userAgent) ||
      (window.innerWidth >= 768 && window.innerWidth <= 1024);
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - prevScrollY;
          
          clearTimeout(scrollTimeout);
          
          const hideThreshold = isTablet ? 50 : 50;
          const showThreshold = isTablet ? 30 : 25;
          
          if (isTablet) {
            scrollTimeout = setTimeout(() => {
              if (currentScrollY <= hideThreshold) {
                setHeaderVisible(true);
              } else if (scrollDelta > showThreshold) {
                setHeaderVisible(false);
              } else if (scrollDelta < -showThreshold) {
                setHeaderVisible(true);
              }
            }, 100);
          } else {
            if (currentScrollY < prevScrollY || currentScrollY <= hideThreshold) {
              setHeaderVisible(true);
            } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
              setHeaderVisible(false);
            }
          }
          
          prevScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Demo session simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionProgress(prev => {
          if (prev >= 100) {
            setIsSessionActive(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isSessionActive]);

  const startSession = () => {
    setIsSessionActive(true);
    setSessionProgress(0);
  };

  const stopSession = () => {
    setIsSessionActive(false);
    setSessionProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Navigation Header */}
      <div className={`sticky top-0 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-40 transition-all duration-300 ${
        headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                className="p-2 hover:bg-gray-800"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">SkyBrain Flagship Center</h1>
                  <p className="text-sm text-gray-400">Bengaluru Research Facility</p>
                </div>
              </div>
            </div>
            <Badge className="bg-green-600 text-white">
              Live Demo
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16 xl:py-20 pb-32">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-900/20 text-blue-400 px-6 py-3 rounded-full mb-6">
            <MapPin className="h-5 w-5" />
            Bengaluru, India
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Experience Our
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Flagship Research Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Step into the future of neural data collection with our state-of-the-art facility 
            where cutting-edge technology meets scientific precision.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-xl p-2 flex gap-2">
            <Button
              onClick={() => setCurrentDemo('overview')}
              variant={currentDemo === 'overview' ? 'default' : 'ghost'}
              className="px-6"
            >
              Overview
            </Button>
            <Button
              onClick={() => setCurrentDemo('equipment')}
              variant={currentDemo === 'equipment' ? 'default' : 'ghost'}
              className="px-6"
            >
              Equipment
            </Button>
            <Button
              onClick={() => setCurrentDemo('session')}
              variant={currentDemo === 'session' ? 'default' : 'ghost'}
              className="px-6"
            >
              Live Session
            </Button>
          </div>
        </div>

        {/* Demo Content */}
        {currentDemo === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Facility Stats */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Facility Overview</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-blue-900/20 border-blue-500/30">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">3-5</div>
                    <div className="text-sm text-blue-300">Recording Booths</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-900/20 border-green-500/30">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-green-300">Operations</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-900/20 border-purple-500/30">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-sm text-purple-300">Sessions/Month</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-cyan-900/20 border-cyan-500/30">
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-cyan-300">Data Quality</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8">Virtual Tour</h2>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300">360° Virtual Tour</p>
                      <p className="text-sm text-gray-500">Experience our facility from anywhere</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600">
                    <Play className="h-4 w-4 mr-2" />
                    Start Virtual Tour
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentDemo === 'equipment' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Research-Grade Equipment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-blue-900/20 border-blue-500/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-center">64-Channel EEG</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-200 mb-4">High-density electrode arrays for precise neural signal capture</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-blue-200">1000Hz sampling rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-blue-200">Low noise amplifiers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-white text-center">ECG Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-200 mb-4">Cardiac rhythm analysis for stress and wellness correlations</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-200">Real-time HRV analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-200">Stress indicators</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-500/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-center">PPG Sensors</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-purple-200 mb-4">Photoplethysmography for blood flow and oxygenation</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-purple-200">SpO2 monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-purple-200">Perfusion index</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentDemo === 'session' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Live Session Simulation</h2>
              <p className="text-gray-300 mb-8">Experience a real-time neural data collection session</p>
            </div>

            {/* Session Controls */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-xl p-4 flex items-center gap-4">
                <Button
                  onClick={isSessionActive ? stopSession : startSession}
                  className={`px-6 py-3 ${isSessionActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {isSessionActive ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Stop Session
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Session
                    </>
                  )}
                </Button>
                
                {isSessionActive && (
                  <div className="text-white">
                    Progress: {sessionProgress.toFixed(0)}%
                  </div>
                )}
              </div>
            </div>

            {/* Live Data Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Waves className="h-5 w-5 text-cyan-400" />
                    Neural Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-900/50 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      {isSessionActive ? (
                        <>
                          <Waves className="h-12 w-12 text-cyan-400 mx-auto mb-2 animate-pulse" />
                          <p className="text-cyan-300">Recording brain waves...</p>
                        </>
                      ) : (
                        <>
                          <MonitorSpeaker className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                          <p className="text-gray-400">Ready to record</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Alpha Waves</span>
                      <span className="text-cyan-400">{isSessionActive ? '8-12 Hz' : '--'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Beta Waves</span>
                      <span className="text-blue-400">{isSessionActive ? '12-30 Hz' : '--'}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Theta Waves</span>
                      <span className="text-purple-400">{isSessionActive ? '4-8 Hz' : '--'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    Wellness Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Stress Level</span>
                        <span className="text-green-400">{isSessionActive ? 'Low' : '--'}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: isSessionActive ? `${30 + (sessionProgress * 0.2)}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Focus Score</span>
                        <span className="text-blue-400">{isSessionActive ? `${Math.floor(70 + sessionProgress * 0.3)}%` : '--'}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: isSessionActive ? `${70 + (sessionProgress * 0.3)}%` : '0%' }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Relaxation</span>
                        <span className="text-purple-400">{isSessionActive ? `${Math.floor(60 + sessionProgress * 0.4)}%` : '--'}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: isSessionActive ? `${60 + (sessionProgress * 0.4)}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {sessionProgress >= 100 && (
                    <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-semibold">Session Complete!</span>
                      </div>
                      <p className="text-green-200 text-sm mt-1">
                        High-quality neural data captured successfully
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a visit to our Bengaluru flagship center and see how cutting-edge neuroscience 
            meets real-world wellness applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500">
              Schedule Visit
            </Button>
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Overview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagshipCenterDemo;