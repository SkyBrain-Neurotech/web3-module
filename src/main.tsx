import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import SimpleFallback from './components/SimpleFallback.tsx';
import './styles/globals.css';

// Global error handler
window.addEventListener('error', (event) => {
  console.error('🔥 Global error:', event.error);
  console.error('🔥 Error details:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔥 Unhandled promise rejection:', event.reason);
});

// Main app wrapper with fallback
const AppWrapper = () => {
  const [hasError, setHasError] = React.useState(false);
  const [errorInfo, setErrorInfo] = React.useState('');

  React.useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      setHasError(true);
      setErrorInfo(`${event.message} at ${event.filename}:${event.lineno}`);
    };

    const rejectionHandler = (event: PromiseRejectionEvent) => {
      setHasError(true);
      setErrorInfo(`Promise rejection: ${event.reason}`);
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', rejectionHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }, []);

  if (hasError) {
    console.log('🚨 Critical error detected, showing fallback');
    return <SimpleFallback />;
  }

  try {
    return <App />;
  } catch (error) {
    console.error('🚨 App component render error:', error);
    return <SimpleFallback />;
  }
};

// Initialize React app with robust error handling
try {
  console.log('🚀 Starting React app initialization');
  
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  console.log('✅ Root element found:', rootElement);
  
  const root = ReactDOM.createRoot(rootElement);
  console.log('✅ React root created');
  
  root.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
  
  console.log('✅ React app rendered successfully');
  
  // Register service worker for PWA functionality
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('❌ Service Worker registration failed:', error);
        });
    });
  }
} catch (error) {
  console.error('🔥 Critical initialization error:', error);
  
  // Emergency fallback - pure HTML/JS
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh;
        background-color: #0a0a0a;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, sans-serif;
        padding: 20px;
        text-align: center;
      ">
        <div>
          <h1 style="color: #00d4ff; margin-bottom: 16px;">🧠 SkyBrain NeuroBank</h1>
          <p style="margin-bottom: 16px;">Critical initialization error detected</p>
          <pre style="
            background: #1a1a1a;
            padding: 16px;
            border-radius: 8px;
            font-size: 12px;
            color: #ff6b6b;
            margin: 16px 0;
            text-align: left;
          ">${error instanceof Error ? error.message + '\n\n' + (error.stack || '') : String(error)}</pre>
          <button onclick="window.location.reload()" style="
            background: #3b82f6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
          ">🔄 Reload Application</button>
        </div>
      </div>
    `;
  }
}