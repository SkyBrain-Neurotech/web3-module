import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import NeuroDataEcosystemEnhanced from './components/NeuroDataEcosystemEnhanced';
import SessionTokenizer from './components/SessionTokenizer';
import EducationalLanding from './components/EducationalLanding';
import WellnessValidationLanding from './components/WellnessValidationLanding';
import { mockDataService, EEGSession } from './utils/mockDataService';
import { 
  ArrowLeft,
  Brain
} from 'lucide-react';
import './styles/globals.css';

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
        <div className="container-responsive py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="btn-primary-enhanced p-2 bg-gradient-to-r from-neural-cyan to-neural-purple rounded-xl hover:scale-105 transition-transform shadow-neural-sm"
              >
                <Brain className="h-5 w-5 text-white" />
              </button>
              <Button 
                onClick={() => navigate('/business-model')}
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground tablet-optimized"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Business Model
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-lg tablet:text-xl font-bold text-foreground tablet-optimized">Demo Platform</h1>
              <Button
                onClick={() => navigate('/tokenizer')}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Session Tokenizer
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-0">
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
        <div className="container-responsive py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="btn-primary-enhanced p-2 bg-gradient-to-r from-neural-cyan to-neural-purple rounded-xl hover:scale-105 transition-transform shadow-neural-sm"
              >
                <Brain className="h-5 w-5 text-white" />
              </button>
              <Button 
                onClick={() => navigate('/business-model')}
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground tablet-optimized"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Business Model
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-lg tablet:text-xl font-bold text-foreground tablet-optimized">Session Tokenizer</h1>
              <Button
                onClick={() => navigate('/demo-interface')}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Demo Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-responsive py-6">
        <SessionTokenizer sessions={sessions} onSessionUpdate={loadSessions} />
      </div>
    </div>
  );
}

function App() {
  const [sessions, setSessions] = useState<EEGSession[]>([]);

  useEffect(() => {
    // Ensure dark theme is applied
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    loadSessions();
  }, []);

  const loadSessions = async () => {
    const data = await mockDataService.getSessions();
    setSessions(data);
  };

  return (
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
  );
}

export default App;