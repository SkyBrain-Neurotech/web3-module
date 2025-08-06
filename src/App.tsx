import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import NeuroDataEcosystemEnhanced from './components/NeuroDataEcosystemEnhanced';
import SessionTokenizer from './components/SessionTokenizer';
import EducationalLanding from './components/EducationalLanding';
import WellnessValidationLanding from './components/WellnessValidationLanding';
import { mockDataService, EEGSession } from './utils/mockDataService';
import { 
  ArrowLeft
} from 'lucide-react';

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
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="sticky top-0 bg-card/90 backdrop-blur-sm border-b border-border z-40">
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
              <h1 className="text-base md:text-lg font-bold text-foreground text-center">Demo Platform</h1>
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
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="sticky top-0 bg-card/90 backdrop-blur-sm border-b border-border z-40">
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
              <h1 className="text-base md:text-lg font-bold text-foreground text-center">Session Tokenizer</h1>
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

  useEffect(() => {
    try {
      // Ensure dark theme is applied
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      loadSessions();
      
      // Register service worker for PWA
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    } catch (err) {
      console.error('App initialization error:', err);
      setError('Failed to initialize app');
    }
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
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <SynapseNetwork className="h-12 w-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
          <h1 className="text-2xl font-bold mb-2">SkyBrain NeuroBank</h1>
          <p className="text-cyan-400">Loading neural ecosystem...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">SkyBrain NeuroBank</h1>
          <p className="text-red-400">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Reload App
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
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
        </Routes>
      </Router>
      <PWAInstallPrompt />
    </>
  );
}

export default App;