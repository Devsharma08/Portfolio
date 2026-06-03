import React, { useState, useEffect, useRef } from 'react';

interface TitlebarProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

interface Puff {
  id: number;
  left: number;
}

export default function Titlebar({ onMenuClick, isSidebarOpen }: TitlebarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(40);
  const [dir, setDir] = useState(1);
  const [step, setStep] = useState(0);
  const [puffs, setPuffs] = useState<Puff[]>([]);
  const puffIdCounter = useRef(0);

  useEffect(() => {
    let lastTime = Date.now();
    let frameTimer = 0;
    let animId: number;

    const loop = () => {
      const now = Date.now();
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 300;
      const maxX = containerWidth - 20;

      setX((prevX) => {
        let nextX = prevX + dir * 0.04 * dt;
        if (nextX >= maxX) {
          nextX = maxX;
          setDir(-1);
        } else if (nextX <= 0) {
          nextX = 0;
          setDir(1);
        }
        return nextX;
      });

      frameTimer += dt;
      if (frameTimer >= 160) {
        frameTimer = 0;
        setStep((prevStep) => 1 - prevStep);

        // Spawn puff dust trail behind walking robot
        setX((currentX) => {
          const puffX = dir > 0 ? Math.round(currentX) - 4 : Math.round(currentX) + 16;
          puffIdCounter.current++;
          const newPuff = { id: puffIdCounter.current, left: puffX };
          setPuffs((prev) => [...prev, newPuff]);
          setTimeout(() => {
            setPuffs((prev) => prev.filter((p) => p.id !== newPuff.id));
          }, 550);

          return currentX;
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [dir]);

  const getMiniRobotSvg = (flip: boolean, stepIdx: number) => {
    const isOdd = stepIdx === 0;
    const rX = isOdd ? 3 : 4;
    const lX = isOdd ? 7 : 6;
    const rW = isOdd ? 2 : 3;
    const lW = isOdd ? 8 : 7;
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 12 14"
        style={{
          imageRendering: 'pixelated',
          transform: `scaleX(${flip ? -1 : 1})`,
          display: 'block'
        }}
      >
        <rect x="3" y="0" width="6" height="1" fill="#e06c75"/>
        <rect x="2" y="1" width="8" height="4" fill="#2c313a"/>
        <rect x="4" y="2" width="1" height="1" fill="#e5c07b"/>
        <rect x="7" y="2" width="1" height="1" fill="#e5c07b"/>
        <rect x="2" y="1" width="8" height="1" fill="#e06c75"/>
        <rect x="3" y="5" width="6" height="1" fill="#61afef"/>
        <rect x="3" y="6" width="6" height="4" fill="#1e2329"/>
        <rect x={isOdd ? 0 : 1} y={isOdd ? 7 : 6} width="3" height="1" fill="#2c313a"/>
        <rect x="9" y={isOdd ? 6 : 7} width="3" height="1" fill="#2c313a"/>
        <rect x="3" y="9" width="6" height="1" fill="#e5c07b"/>
        <rect x={rX} y="10" width="2" height="3" fill="#1e2329"/>
        <rect x={lX} y="10" width="2" height="3" fill="#1e2329"/>
        <rect x={rW} y="13" width="3" height="1" fill="#0d1117"/>
        <rect x={lW} y="13" width="3" height="1" fill="#0d1117"/>
      </svg>
    );
  };

  return (
    <div className="titlebar">
      {/* Mobile Burger Menu Button */}
      <button
        id="mobile-menu-btn"
        onClick={onMenuClick}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--plain)',
          padding: '4px',
          flexDirection: 'column',
          gap: '4px',
          marginRight: '4px'
        }}
      >
        <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--plain)', borderRadius: '1px', transition: 'all .2s', transform: isSidebarOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}></span>
        <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--plain)', borderRadius: '1px', transition: 'all .2s', opacity: isSidebarOpen ? 0 : 1 }}></span>
        <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--plain)', borderRadius: '1px', transition: 'all .2s', transform: isSidebarOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}></span>
      </button>

      {/* Mac Window Dots */}
      <div className="window-controls" id="window-dots">
        <div className="window-dot" style={{ background: '#ff5f57' }} />
        <div className="window-dot" style={{ background: '#ffbd2e' }} />
        <div className="window-dot" style={{ background: '#27c93f' }} />
      </div>

      {/* Titlebar Robot Walk Path */}
      <div
        ref={containerRef}
        id="titlebar-robot-container"
        style={{
          flex: 1,
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          marginLeft: '20px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: `${Math.round(x)}px`,
            lineHeight: 0,
            pointerEvents: 'none'
          }}
        >
          {getMiniRobotSvg(dir < 0, step)}
        </div>

        {puffs.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              top: '50%',
              left: `${p.left}px`,
              transform: 'translateY(-60%)',
              pointerEvents: 'none',
              animation: 'dustPuff .55s ease-out forwards'
            }}
          >
            <svg width="10" height="8" viewBox="0 0 5 4" style={{ display: 'block', imageRendering: 'pixelated' }}>
              <rect x="1" y="2" width="1" height="1" fill="#abb2bf"/>
              <rect x="0" y="1" width="1" height="1" fill="#abb2bf99"/>
              <rect x="2" y="1" width="1" height="1" fill="#abb2bf66"/>
              <rect x="3" y="2" width="1" height="1" fill="#abb2bf44"/>
              <rect x="1" y="3" width="2" height="1" fill="#abb2bf33"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
