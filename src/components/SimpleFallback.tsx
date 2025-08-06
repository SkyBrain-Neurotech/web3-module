import { useState, useEffect } from 'react';

const SimpleFallback = () => {
  const [mounted, setMounted] = useState(false);
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    setMounted(true);
    
    // Collect debug information
    const info = {
      href: window.location.href,
      origin: window.location.origin,
      pathname: window.location.pathname,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      hasReact: typeof window.React !== 'undefined',
      hasRouter: typeof window.ReactRouter !== 'undefined'
    };
    
    setDebugInfo(JSON.stringify(info, null, 2));
    console.log('🔍 SimpleFallback Debug Info:', info);
  }, []);

  if (!mounted) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '16px', color: '#00d4ff' }}>SkyBrain NeuroBank</h1>
          <p style={{ color: '#888' }}>Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          marginBottom: '16px', 
          color: '#00d4ff' 
        }}>
          🧠 SkyBrain NeuroBank
        </h1>
        
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '16px' }}>
            Decentralized Neural Data Ecosystem
          </h2>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            Transform your brain data into valuable NFTs and contribute to groundbreaking neuroscience research.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '20px'
          }}>
            <div style={{ padding: '12px', backgroundColor: '#2a2a2a', borderRadius: '6px' }}>
              <strong style={{ color: '#4ade80' }}>EEG → NFT</strong>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Convert brain data sessions</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#2a2a2a', borderRadius: '6px' }}>
              <strong style={{ color: '#f59e0b' }}>Research Match</strong>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Submit to universities</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#2a2a2a', borderRadius: '6px' }}>
              <strong style={{ color: '#8b5cf6' }}>SKY Rewards</strong>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Earn tokens for data</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '12px'
          }}
        >
          🔄 Reload App
        </button>

        <button 
          onClick={() => {
            const elem = document.getElementById('debug-info');
            if (elem) {
              elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
            }
          }}
          style={{
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          🔍 Debug Info
        </button>

        <div 
          id="debug-info" 
          style={{
            display: 'none',
            marginTop: '20px',
            backgroundColor: '#1f2937',
            padding: '16px',
            borderRadius: '6px',
            textAlign: 'left',
            fontSize: '0.8rem',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            color: '#d1d5db'
          }}
        >
          {debugInfo}
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          border: '1px solid #333'
        }}>
          <h3 style={{ color: '#f59e0b', marginBottom: '12px' }}>
            ⚠️ App Loading Issue Detected
          </h3>
          <p style={{ marginBottom: '12px', fontSize: '0.9rem' }}>
            The main application components couldn't load properly. This fallback interface is working.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#888' }}>
            This indicates the build was successful and basic React is working. 
            The issue may be with component imports, routing, or runtime JavaScript errors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleFallback;