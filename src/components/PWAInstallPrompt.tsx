import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Tablet, Smartphone, X, Sparkles } from 'lucide-react';

const PWAInstallPrompt: React.FC = () => {
  const { canInstall, installApp, isInstalled, isTabletMode } = usePWAInstall();
  const [isVisible, setIsVisible] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsTablet(isTabletMode);
    
    // Show prompt for testing - force it to appear
    if (!isInstalled) {
      // Show prompt after a delay
      const timer = setTimeout(() => {
        console.log('📱 Forcing PWA prompt to show for testing');
        setIsVisible(true);
      }, 3000); // Show after 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [canInstall, isInstalled, isTabletMode]);

  const handleInstall = async () => {
    const success = await installApp();
    // Always hide the prompt after attempting installation
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-dismissed', 'true');
  };

  // Don't show if dismissed in this session
  if (sessionStorage.getItem('pwa-dismissed') === 'true') {
    return null;
  }

  if (!isVisible || isInstalled) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/30 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        <CardHeader className="relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg text-white">Install NeuroBank</CardTitle>
              <Badge className="bg-cyan-600 text-white text-xs mt-1">
                Tablet Optimized
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-center">
            <Tablet className="h-16 w-16 text-cyan-400 mx-auto mb-3 animate-pulse" />
            <p className="text-white font-semibold mb-2">
              Get the best experience on your tablet
            </p>
            <p className="text-sm text-muted-foreground">
              Install NeuroBank as an app for faster access, offline functionality, 
              and a native tablet experience optimized for neural data management.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center">
              <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Download className="h-4 w-4 text-green-400" />
              </div>
              <p className="text-xs text-muted-foreground">Quick Access</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Tablet className="h-4 w-4 text-blue-400" />
              </div>
              <p className="text-xs text-muted-foreground">Tablet UI</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
              </div>
              <p className="text-xs text-muted-foreground">Offline Mode</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={handleDismiss}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Not Now
            </Button>
            <Button
              onClick={handleInstall}
              className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Install App
            </Button>
          </div>
          
          <p className="text-xs text-center text-muted-foreground">
            This will add NeuroBank to your home screen for easy access
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;