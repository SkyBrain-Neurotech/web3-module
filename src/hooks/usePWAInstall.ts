import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isTabletMode, setIsTabletMode] = useState(false);
  const [userEngaged, setUserEngaged] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }
    
    // Check if app is running in standalone mode (iOS)
    if ((window.navigator as any).standalone === true) {
      setIsInstalled(true);
      return;
    }

    // Enhanced tablet detection
    const userAgent = navigator.userAgent;
    const isTablet = /iPad|Android(?=.*Tablet)|Tablet|KFAPWI|RIM Tablet|PlayBook|Silk/.test(userAgent) ||
      (window.innerWidth >= 768 && window.innerWidth <= 1024) ||
      (window.screen.width >= 768 && window.screen.width <= 1024);
    
    setIsTabletMode(isTablet);
    
    // Track user engagement (Chrome requires this)
    const engagementTimer = setTimeout(() => {
      setUserEngaged(true);
      console.log('✅ User engagement threshold met (30 seconds)');
    }, 30000);
    
    // Track user interaction
    const handleUserInteraction = () => {
      console.log('👆 User interaction detected');
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('🔥 beforeinstallprompt caught in hook!', e);
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      console.log('✅ PWA is now installable!');
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearTimeout(engagementTimer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const installApp = async (): Promise<boolean> => {
    // First priority: Use deferred prompt if available
    if (deferredPrompt) {
      try {
        // This triggers the actual browser install prompt
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
          setDeferredPrompt(null);
          setIsInstallable(false);
          setIsInstalled(true);
          return true;
        }
        
        return false;
      } catch (error) {
        console.error('Error during app installation:', error);
      }
    }
    
    // Fallback: Try to trigger install programmatically
    try {
      // Check if we can trigger installation via service worker
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        if (registration && 'prompt' in BeforeInstallPromptEvent.prototype) {
          // Some browsers might support this
          const installEvent = new BeforeInstallPromptEvent('beforeinstallprompt');
          installEvent.prompt();
          return true;
        }
      }
    } catch (error) {
      console.log('Programmatic installation not supported');
    }
    
    // No prompt available
    console.log('Installation prompt not available. Browser may not support PWA installation.');
    
    return false;
  };

  return {
    isInstallable,
    isInstalled,
    installApp,
    canInstall: isInstallable && !isInstalled,
    isTabletMode,
    deferredPrompt
  };
};