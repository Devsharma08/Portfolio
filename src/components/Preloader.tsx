import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onDone: () => void;
  devName: string;
}

export default function Preloader({ onDone, devName }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [frameIdx, setFrameIdx] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Walk cycle frame updater
    const frameInterval = setInterval(() => {
      setFrameIdx((prev) => (prev + 1) % 2);
    }, 180);

    // Eased progress updater
    const startTime = Date.now();
    const duration = 2800; // 2.8s

    let animFrameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      const easeRatio = 1 - Math.pow(1 - ratio, 3); // easeOutCubic
      const nextProgress = Math.floor(easeRatio * 100);

      setProgress(nextProgress);

      if (ratio < 1) {
        animFrameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            onDone();
          }, 600); // 600ms fade transition
        }, 400);
      }
    };

    animFrameId = requestAnimationFrame(updateProgress);

    return () => {
      clearInterval(frameInterval);
      cancelAnimationFrame(animFrameId);
    };
  }, [onDone]);

  const getRobotSvg = (frame: number) => {
    const isOdd = frame % 2 === 0;
    const bodyColor = '#61afef';
    const eyeColor = '#e5c07b';
    
    return (
      <svg width="24" height="24" viewBox="0 0 12 14" style={{ imageRendering: 'pixelated', transform: 'scale(1.8)' }}>
        <rect x="3" y="0" width="6" height="1" fill="#e06c75"/>
        <rect x="2" y="1" width="8" height="4" fill="#2c313a"/>
        <rect x="4" y="2" width="1" height="1" fill={eyeColor}/>
        <rect x="7" y="2" width="1" height="1" fill={eyeColor}/>
        <rect x="2" y="1" width="8" height="1" fill="#e06c75"/>
        <rect x="3" y="5" width="6" height="1" fill={bodyColor}/>
        <rect x="3" y="6" width="6" height="4" fill="#1e2329"/>
        <rect x={isOdd ? 0 : 1} y={isOdd ? 7 : 6} width="3" height="1" fill="#2c313a"/>
        <rect x="9" y={isOdd ? 6 : 7} width="3" height="1" fill="#2c313a"/>
        <rect x="3" y="9" width="6" height="1" fill={eyeColor}/>
        <rect x={isOdd ? 3 : 4} y="10" width="2" height="3" fill="#1e2329"/>
        <rect x={isOdd ? 7 : 6} y="10" width="2" height="3" fill="#1e2329"/>
        <rect x={isOdd ? 2 : 3} y="13" width="3" height="1" fill="#0d1117"/>
        <rect x={isOdd ? 8 : 7} y="13" width="3" height="1" fill="#0d1117"/>
      </svg>
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999999,
        background: '#0d1117',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        opacity: fade ? 0 : 1,
        transition: 'opacity .6s ease',
        pointerEvents: fade ? 'none' : 'auto'
      }}
    >
      {/* Scanline overlay effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          zIndex: 1
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Glitch Header */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(22px, 4vw, 36px)',
            fontWeight: 900,
            letterSpacing: '0.15em',
            marginBottom: '8px',
            color: '#c678dd',
            animation: 'pixelGlitch 4s infinite',
            imageRendering: 'pixelated'
          }}
        >
          {devName.toUpperCase()}.DEV
        </div>
        
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#61afef', letterSpacing: '0.3em', marginBottom: '56px', opacity: .7 }}>
          INITIALIZING PORTFOLIO...
        </div>
        
        {/* Interactive Progress Bar Wrapper */}
        <div style={{ position: 'relative', width: '320px', margin: '0 auto' }}>
          {/* Walking Character Wrapper */}
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              marginBottom: '12px',
              left: `calc(${progress}% - 22px)`,
              transition: 'left .06s linear',
              lineHeight: 0
            }}
          >
            {getRobotSvg(frameIdx)}
          </div>
          
          <div style={{ width: '320px', height: '12px', background: '#1e2329', borderRadius: '2px', border: '2px solid #30363d', overflow: 'hidden', imageRendering: 'pixelated' }}>
            {/* Moving bar */}
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'repeating-linear-gradient(90deg, #c678dd 0px, #c678dd 8px, #9d50bb 8px, #9d50bb 12px)',
                transition: 'width .06s linear',
                boxShadow: '0 0 8px #c678dd88'
              }}
            />
          </div>
          
          {/* Percentage load counter */}
          <div style={{ marginTop: '14px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#abb2bf', letterSpacing: '0.1em' }}>
            <span style={{ color: '#c678dd' }}>{progress}</span>
            <span style={{ opacity: .5 }}>% loaded</span>
          </div>
        </div>
      </div>
      
      {/* One Dark border corners */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 2, width: '20px', height: '20px', borderTop: '2px solid rgba(198,120,221,0.27)', borderLeft: '2px solid rgba(198,120,221,0.27)' }} />
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 2, width: '20px', height: '20px', borderTop: '2px solid rgba(198,120,221,0.27)', borderRight: '2px solid rgba(198,120,221,0.27)' }} />
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2, width: '20px', height: '20px', borderBottom: '2px solid rgba(198,120,221,0.27)', borderLeft: '2px solid rgba(198,120,221,0.27)' }} />
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 2, width: '20px', height: '20px', borderBottom: '2px solid rgba(198,120,221,0.27)', borderRight: '2px solid rgba(198,120,221,0.27)' }} />
    </div>
  );
}
