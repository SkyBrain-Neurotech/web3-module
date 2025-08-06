import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Eye } from 'lucide-react';

// Custom distinctive neuroscience icons
const QuantumCoin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.7"/>
  </svg>
);

const BioElectric = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L6 8l4 4-4 4 2 6h8l-2-6 4-4-4-4 2-6H8z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.8"/>
    <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
  </svg>
);

const EEGElectrode = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="14.5" cy="9.5" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="14.5" cy="14.5" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="9.5" cy="14.5" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="9.5" cy="9.5" r="1" fill="currentColor" opacity="0.6"/>
    <path d="M12 4v4M20 12h-4M12 20v-4M4 12h4" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
  </svg>
);

const NeuralWave = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2zM18 12c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" fill="currentColor" opacity="0.6"/>
    <path d="M6 12c1.5-4 3-4 4.5 0S13 16 14.5 12s3-4 4.5 0" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="4" cy="8" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="20" cy="16" r="1" fill="currentColor" opacity="0.4"/>
  </svg>
);
import { mockDataService, EEGSession } from '../utils/mockDataService';

interface SessionTokenizerProps {
  sessions: EEGSession[];
  onSessionUpdate: () => void;
}

const SessionTokenizer: React.FC<SessionTokenizerProps> = ({ sessions, onSessionUpdate }) => {
  const [tokenizing, setTokenizing] = useState<string | null>(null);
  const [listing, setListing] = useState<string | null>(null);

  const handleTokenize = async (sessionId: string) => {
    setTokenizing(sessionId);
    try {
      const result = await mockDataService.tokenizeSession(sessionId);
      console.log('Tokenization successful:', result);
      onSessionUpdate();
    } catch (error) {
      console.error('Tokenization failed:', error);
    } finally {
      setTokenizing(null);
    }
  };

  const handleListOnMarketplace = async (sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId);
    if (!session || !session.price) return;

    setListing(sessionId);
    try {
      const result = await mockDataService.listOnMarketplace(sessionId, session.price);
      console.log('Listed on marketplace:', result);
      onSessionUpdate();
    } catch (error) {
      console.error('Listing failed:', error);
    } finally {
      setListing(null);
    }
  };

  const getMentalStateConfig = (state: string) => {
    const configs = {
      meditation: { 
        gradient: 'from-purple-400/20 via-purple-600/30 to-indigo-500/20',
        border: 'border-purple-400/40',
        glow: 'shadow-purple-500/20',
        text: 'text-purple-300',
        badge: 'bg-purple-500/80'
      },
      focused: { 
        gradient: 'from-blue-400/20 via-cyan-500/30 to-blue-600/20',
        border: 'border-blue-400/40',
        glow: 'shadow-blue-500/20',
        text: 'text-blue-300',
        badge: 'bg-blue-500/80'
      },
      relaxed: { 
        gradient: 'from-green-400/20 via-emerald-500/30 to-teal-500/20',
        border: 'border-green-400/40',
        glow: 'shadow-green-500/20',
        text: 'text-green-300',
        badge: 'bg-green-500/80'
      },
      stressed: { 
        gradient: 'from-red-400/20 via-rose-500/30 to-pink-500/20',
        border: 'border-red-400/40',
        glow: 'shadow-red-500/20',
        text: 'text-red-300',
        badge: 'bg-red-500/80'
      },
      creative: { 
        gradient: 'from-orange-400/20 via-amber-500/30 to-yellow-500/20',
        border: 'border-orange-400/40',
        glow: 'shadow-orange-500/20',
        text: 'text-orange-300',
        badge: 'bg-orange-500/80'
      }
    };
    return configs[state as keyof typeof configs] || {
      gradient: 'from-gray-400/20 via-slate-500/30 to-gray-600/20',
      border: 'border-gray-400/40',
      glow: 'shadow-gray-500/20',
      text: 'text-gray-300',
      badge: 'bg-gray-500/80'
    };
  };

  const getWaveBarHeight = (value: number, max: number = 100) => {
    const percentage = (value / max) * 100;
    return Math.max(20, Math.min(100, percentage));
  };

  const WaveVisualization = ({ wavePatterns }: { wavePatterns: any }) => {
    const waves = [
      { name: 'Delta', value: wavePatterns.delta, color: 'from-purple-500 to-purple-400', textColor: 'text-purple-300' },
      { name: 'Theta', value: wavePatterns.theta, color: 'from-blue-500 to-blue-400', textColor: 'text-blue-300' },
      { name: 'Alpha', value: wavePatterns.alpha, color: 'from-green-500 to-green-400', textColor: 'text-green-300' },
      { name: 'Beta', value: wavePatterns.beta, color: 'from-yellow-500 to-yellow-400', textColor: 'text-yellow-300' },
      { name: 'Gamma', value: wavePatterns.gamma, color: 'from-red-500 to-red-400', textColor: 'text-red-300' }
    ];

    return (
      <div className="grid grid-cols-5 gap-3">
        {waves.map((wave, index) => (
          <div 
            key={wave.name}
            className="relative group animate-organic-scale neural-stagger-item"
            style={{ '--index': index } as React.CSSProperties}
          >
            {/* Wave container with organic shape */}
            <div className={`neural-glass rounded-organic p-3 h-20 flex flex-col justify-between items-center 
              transition-all duration-500 hover:scale-105 hover:rotate-1
              border border-white/10 backdrop-blur-md relative overflow-hidden`}>
              
              {/* Flowing background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${wave.color} opacity-20 
                animate-neural-flow rounded-organic`} />
              
              {/* Wave bar visualization */}
              <div className="relative w-full flex-1 flex items-end justify-center">
                <div 
                  className={`w-8 bg-gradient-to-t ${wave.color} rounded-flow animate-brain-wave
                    shadow-lg transition-all duration-700 group-hover:scale-110`}
                  style={{ 
                    height: `${getWaveBarHeight(wave.value)}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
              
              {/* Wave label and value */}
              <div className="relative z-10 text-center">
                <div className={`text-xs font-medium ${wave.textColor} neural-glow-text`}>
                  {wave.name}
                </div>
                <div className="text-xs font-mono text-white/90 mt-1">
                  {wave.value.toFixed(1)}
                </div>
              </div>

              {/* Pulsing border effect */}
              <div className={`absolute inset-0 rounded-organic border bg-gradient-to-r ${wave.color} 
                opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="neural-card-primary animate-neural-fade-in">
      <CardHeader className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-teal-400 rounded-t-neural opacity-60" />
        <CardTitle className="neural-text-gradient flex items-center gap-3 text-sm md:text-base font-bold justify-center">
          <div className="p-2 neural-glass rounded-neural">
            <QuantumCoin className="h-6 w-6 text-cyan-300 animate-synapse-flicker" />
          </div>
          <div>
            <div className="text-sm font-semibold text-center">Neural Session Tokenizer</div>
            <div className="text-xs font-normal text-slate-400 mt-1 text-center">
              Transform EEG consciousness data into unique NFTs
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {sessions.length === 0 ? (
          <div className="neural-card-secondary p-8 text-center animate-organic-scale">
            <EEGElectrode className="h-16 w-16 mx-auto text-slate-400 mb-4 animate-organic-float" />
            <p className="text-slate-400 text-sm text-center">No neural sessions recorded yet</p>
            <p className="text-slate-500 text-xs mt-2 text-center">Start recording to create tokenizable consciousness data</p>
          </div>
        ) : (
          <div className="space-y-6">
            {sessions.map((session, index) => {
              const stateConfig = getMentalStateConfig(session.mentalState);
              
              return (
                <div
                  key={session.id}
                  className={`neural-card-accent rounded-neural p-6 relative overflow-hidden
                    bg-gradient-to-br ${stateConfig.gradient} backdrop-blur-lg
                    border ${stateConfig.border} hover:${stateConfig.glow} hover:shadow-2xl
                    transition-all duration-500 hover:scale-[1.02] hover:rotate-1
                    animate-neural-fade-in neural-stagger-item group`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    '--index': index 
                  } as React.CSSProperties}
                >
                  {/* Floating neural particles background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-synapse-flicker" />
                    <div className="absolute bottom-6 left-12 w-1 h-1 bg-purple-400 rounded-full animate-synapse-flicker" 
                         style={{ animationDelay: '1s' }} />
                    <div className="absolute top-12 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-synapse-flicker" 
                         style={{ animationDelay: '2s' }} />
                  </div>

                  {/* Session header with improved hierarchy */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="space-y-3">
                      {/* Participant name and duration */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 neural-glass rounded-neural">
                          <NeuralWave className="h-5 w-5 text-cyan-300 animate-neural-pulse" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-bold text-white neural-glow-text text-center">
                            {session.participantName}
                          </h3>
                          <p className="text-slate-300 text-xs text-center">
                            {session.duration}s Neural Session
                          </p>
                        </div>
                      </div>
                      
                      {/* Mental state and timestamp */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className={`${stateConfig.badge} text-white font-medium px-3 py-1 rounded-flow
                          hover:scale-110 transition-transform duration-300`}>
                          <EEGElectrode className="h-3 w-3 mr-1" />
                          {session.mentalState}
                        </Badge>
                        <span className="text-xs text-slate-400 bg-black/20 px-2 py-1 rounded-flow">
                          {new Date(session.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* NFT status display */}
                    <div className="text-right">
                      {session.isTokenized && (
                        <div className="space-y-2 neural-glass rounded-neural p-3">
                          <Badge variant="outline" 
                                 className="text-green-400 border-green-400/60 bg-green-500/10 rounded-flow
                                 animate-neural-pulse">
                            NFT #{session.tokenId}
                          </Badge>
                          <div className="text-sm font-bold neural-text-gradient text-center">
                            {session.price} SKY
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Brain wave visualization */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-red-500 rounded-full animate-neural-pulse" />
                      <h4 className="text-xs font-medium text-white/90 text-center">Neural Wave Pattern Analysis</h4>
                    </div>
                    <WaveVisualization wavePatterns={session.wavePatterns} />
                  </div>

                  {/* Action buttons with neural styling */}
                  <div className="flex gap-3 relative z-10">
                    {!session.isTokenized ? (
                      <button
                        onClick={() => handleTokenize(session.id)}
                        disabled={tokenizing === session.id}
                        className="neural-btn-primary flex-1 flex items-center justify-center gap-2
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <BioElectric className={`h-4 w-4 ${tokenizing === session.id ? 'animate-spin' : 'animate-synapse-flicker'}`} />
                        {tokenizing === session.id ? 'Minting Neural NFT...' : 'Tokenize Neural Session'}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleListOnMarketplace(session.id)}
                        disabled={listing === session.id}
                        className="neural-btn-accent flex-1 flex items-center justify-center gap-2
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Download className={`h-4 w-4 ${listing === session.id ? 'animate-bounce' : ''}`} />
                        {listing === session.id ? 'Listing on Marketplace...' : 'List on Neural Marketplace'}
                      </button>
                    )}
                    
                    <button className="neural-btn-secondary px-4 py-2 flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span className="hidden sm:inline">Neural Details</span>
                    </button>
                  </div>

                  {/* Organic flowing border effect */}
                  <div className="absolute inset-0 rounded-neural bg-gradient-to-r from-transparent via-white/5 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default SessionTokenizer;