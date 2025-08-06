import { useState, useEffect, ErrorBoundary } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import NeuroDataEcosystemEnhanced from './components/NeuroDataEcosystemEnhanced';
import SessionTokenizer from './components/SessionTokenizer';
import EducationalLanding from './components/EducationalLanding';
import WellnessValidationLanding from './components/WellnessValidationLanding';
import FlagshipCenterDemo from './components/FlagshipCenterDemo';
import { mockDataService, EEGSession } from './utils/mockDataService';
import { 
  ArrowLeft
} from 'lucide-react';
import { Component, ReactNode } from 'react';

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
import './styles/globals.css';
import PWAInstallPrompt from './components/PWAInstallPrompt';

// Error Boundary Component
class AppErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('React Error Boundary caught error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error Boundary Details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <SynapseNetwork className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-red-400">App Error Detected</h1>
            <p className="text-gray-300 mb-4">Something went wrong with the application.</p>
            <div className="bg-gray-800 p-4 rounded-lg mb-4 text-left">
              <p className="text-sm font-mono text-red-300">
                {this.state.error?.name}: {this.state.error?.message}
              </p>
            </div>
            <button 
              onClick={() => {
                this.setState({ hasError: false, error: undefined });
                window.location.reload();
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Landing Page Component - Now starts with Education
function LandingPage() {
  return <EducationalLanding />;
}

// Business Model Page Component - Shows wellness validation service
function BusinessModelPage() {
  return <WellnessValidationLanding />;
}

// Demo Interface Page Component - The actual platform demo
function DemoInterfacePage({ sessions, loadSessions }: { sessions: EEGSession[], loadSessions: () => void }) {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle scroll-based header visibility
  useEffect(() => {
    let ticking = false;
    let prevScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;
    
    // Detect tablet/touch device
    const isTablet = /iPad|Android(?=.*Tablet)|Tablet|KFAPWI|RIM Tablet|PlayBook|Silk/.test(navigator.userAgent) ||
      (window.innerWidth >= 768 && window.innerWidth <= 1024);
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - prevScrollY;
          
          clearTimeout(scrollTimeout);
          
          const hideThreshold = isTablet ? 30 : 50;
          const showThreshold = isTablet ? 10 : 25;
          
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
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className={`sticky top-0 bg-card/90 backdrop-blur-sm border-b border-border z-40 transition-all duration-300 ${
        headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/')}
                className="btn-primary-enhanced p-2 bg-gradient-to-r from-neural-cyan to-neural-purple rounded-xl hover:scale-105 transition-transform shadow-neural-sm"
              >
                <SynapseNetwork className="h-4 w-4 text-white" />
              </button>
              <Button 
                onClick={() => navigate('/business-model')}
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm"
              >
                <ArrowLeft className="h-3 w-3 mr-2" />
                <span className="hidden sm:inline">Back to Business Model</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-base md:text-lg font-bold text-white leading-tight">Demo Platform</h1>
              <Button
                onClick={() => navigate('/tokenizer')}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-3 py-2 text-sm"
              >
                <span className="hidden sm:inline">Session Tokenizer</span>
                <span className="sm:hidden">Tokenizer</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <NeuroDataEcosystemEnhanced 
          sessions={sessions} 
          onSessionUpdate={loadSessions} 
        />
      </div>
    </div>
  );
}

// Tokenizer Page Component
function TokenizerPage({ sessions, loadSessions }: { sessions: EEGSession[], loadSessions: () => void }) {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle scroll-based header visibility
  useEffect(() => {
    let ticking = false;
    let prevScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;
    
    // Detect tablet/touch device
    const isTablet = /iPad|Android(?=.*Tablet)|Tablet|KFAPWI|RIM Tablet|PlayBook|Silk/.test(navigator.userAgent) ||
      (window.innerWidth >= 768 && window.innerWidth <= 1024);
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - prevScrollY;
          
          clearTimeout(scrollTimeout);
          
          const hideThreshold = isTablet ? 30 : 50;
          const showThreshold = isTablet ? 10 : 25;
          
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
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className={`sticky top-0 bg-card/90 backdrop-blur-sm border-b border-border z-40 transition-all duration-300 ${
        headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/')}
                className="btn-primary-enhanced p-2 bg-gradient-to-r from-neural-cyan to-neural-purple rounded-xl hover:scale-105 transition-transform shadow-neural-sm"
              >
                <SynapseNetwork className="h-4 w-4 text-white" />
              </button>
              <Button 
                onClick={() => navigate('/business-model')}
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm"
              >
                <ArrowLeft className="h-3 w-3 mr-2" />
                <span className="hidden sm:inline">Back to Business Model</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-base md:text-lg font-bold text-white leading-tight">Session Tokenizer</h1>
              <Button
                onClick={() => navigate('/demo-interface')}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-3 py-2 text-sm"
              >
                <span className="hidden sm:inline">Demo Platform</span>
                <span className="sm:hidden">Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SessionTokenizer sessions={sessions} onSessionUpdate={loadSessions} />
      </div>
    </div>
  );
}

function App() {
  const [sessions, setSessions] = useState<EEGSession[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<string>('');

  useEffect(() => {
    const initApp = async () => {
      try {
        console.log('🚀 App initialization started');
        console.log('Current URL:', window.location.href);
        console.log('User Agent:', navigator.userAgent);
        
        // Add debug info
        setDebugInfo(`URL: ${window.location.href} | UA: ${navigator.userAgent.slice(0, 50)}`);
        
        // Ensure dark theme is applied
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        console.log('✅ Dark theme applied');
        
        // Load sessions with timeout
        const sessionLoadPromise = loadSessions();
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Session load timeout')), 10000)
        );
        
        await Promise.race([sessionLoadPromise, timeoutPromise]);
        console.log('✅ Sessions loaded successfully');
        
        // Register service worker for PWA (non-blocking)
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('✅ SW registered:', registration);
            })
            .catch((registrationError) => {
              console.warn('⚠️ SW registration failed:', registrationError);
              // Don't fail the app for SW issues
            });
        }
        
        // Listen for PWA events globally
        window.addEventListener('beforeinstallprompt', (e) => {
          console.log('🎯 beforeinstallprompt event fired in App!', e);
          // Don't prevent default here - let usePWAInstall hook handle it
        });
        
        window.addEventListener('appinstalled', () => {
          console.log('✅ App was installed successfully!');
        });
        
        console.log('🎉 App initialization completed successfully');
      } catch (err) {
        console.error('❌ App initialization error:', err);
        setError(`Failed to initialize app: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    };
    
    initApp();
  }, []);

  const loadSessions = async () => {
    try {
      const data = await mockDataService.getSessions();
      setSessions(data);
    } catch (err) {
      console.error('Failed to load sessions:', err);
      setError('Failed to load sessions');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <SynapseNetwork className="h-12 w-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
          <h1 className="text-2xl font-bold mb-2">SkyBrain NeuroBank</h1>
          <p className="text-cyan-400 mb-4">Loading neural ecosystem...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">SkyBrain NeuroBank</h1>
          <p className="text-red-400 mb-4">Error: {error}</p>
          <div className="space-y-2">
            <button 
              onClick={() => {
                setError(null);
                setIsLoading(true);
                window.location.reload();
              }} 
              className="block w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
            >
              Reload App
            </button>
            <button 
              onClick={() => {
                console.log('Manual session load attempt');
                setError(null);
                setIsLoading(true);
                loadSessions();
              }} 
              className="block w-full px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-colors"
            >
              Retry Load
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AppErrorBoundary>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage />} 
          />
          <Route 
            path="/business-model" 
            element={<BusinessModelPage />} 
          />
          <Route 
            path="/demo-interface" 
            element={<DemoInterfacePage sessions={sessions} loadSessions={loadSessions} />} 
          />
          <Route 
            path="/tokenizer" 
            element={<TokenizerPage sessions={sessions} loadSessions={loadSessions} />} 
          />
          <Route 
            path="/flagship-center" 
            element={<FlagshipCenterDemo />} 
          />
        </Routes>
      </Router>
      <PWAInstallPrompt />
    </AppErrorBoundary>
  );
}

export default App;