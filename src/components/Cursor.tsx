import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function Cursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isDown, setIsDown] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [particleId, setParticleId] = useState(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsDown(true);
      setParticleId((prev) => prev + 1);
      const newParticle = { id: particleId, x: e.clientX, y: e.clientY };
      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 450);
    };

    const onMouseUp = () => {
      setIsDown(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [particleId]);

  // Cursor SVGs
  const normalCursorSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="0" width="2" height="2" fill="#c678dd"/>
      <rect x="2" y="2" width="2" height="2" fill="#c678dd"/>
      <rect x="2" y="4" width="2" height="2" fill="#c678dd"/>
      <rect x="2" y="6" width="2" height="2" fill="#c678dd"/>
      <rect x="2" y="8" width="2" height="2" fill="#c678dd"/>
      <rect x="2" y="10" width="2" height="2" fill="#c678dd"/>
      <rect x="2" y="12" width="2" height="2" fill="#c678dd"/>
      <rect x="4" y="2" width="2" height="2" fill="#c678dd"/>
      <rect x="4" y="4" width="2" height="2" fill="#c678dd"/>
      <rect x="4" y="6" width="2" height="2" fill="#c678dd"/>
      <rect x="4" y="8" width="2" height="2" fill="#c678dd"/>
      <rect x="4" y="10" width="2" height="2" fill="#c678dd"/>
      <rect x="6" y="4" width="2" height="2" fill="#c678dd"/>
      <rect x="6" y="6" width="2" height="2" fill="#c678dd"/>
      <rect x="6" y="8" width="2" height="2" fill="#c678dd"/>
      <rect x="8" y="6" width="2" height="2" fill="#c678dd"/>
      <rect x="8" y="8" width="2" height="2" fill="#c678dd"/>
      <rect x="10" y="8" width="2" height="2" fill="#c678dd"/>
      <rect x="0" y="0" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="2" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="4" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="6" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="8" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="10" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="12" width="2" height="2" fill="#abb2bf"/>
      <rect x="0" y="14" width="2" height="2" fill="#abb2bf"/>
      <rect x="2" y="14" width="2" height="2" fill="#abb2bf"/>
      <rect x="4" y="12" width="2" height="2" fill="#abb2bf"/>
      <rect x="6" y="10" width="2" height="2" fill="#abb2bf"/>
      <rect x="6" y="12" width="2" height="2" fill="#abb2bf"/>
      <rect x="8" y="10" width="2" height="2" fill="#abb2bf"/>
      <rect x="10" y="6" width="2" height="2" fill="#abb2bf"/>
      <rect x="10" y="10" width="2" height="2" fill="#abb2bf"/>
      <rect x="12" y="8" width="2" height="2" fill="#abb2bf"/>
      <rect x="2" y="0" width="2" height="2" fill="#abb2bf" opacity="0.3"/>
    </svg>
  );

  const clickCursorSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="6" width="2" height="2" fill="#61afef"/>
      <rect x="6" y="4" width="2" height="2" fill="#61afef"/>
      <rect x="8" y="4" width="2" height="2" fill="#61afef"/>
      <rect x="10" y="4" width="2" height="2" fill="#61afef"/>
      <rect x="6" y="6" width="2" height="2" fill="#61afef"/>
      <rect x="8" y="6" width="2" height="2" fill="#61afef"/>
      <rect x="10" y="6" width="2" height="2" fill="#61afef"/>
      <rect x="4" y="8" width="2" height="2" fill="#61afef"/>
      <rect x="6" y="8" width="2" height="2" fill="#61afef"/>
      <rect x="8" y="8" width="2" height="2" fill="#61afef"/>
      <rect x="10" y="8" width="2" height="2" fill="#61afef"/>
      <rect x="4" y="10" width="2" height="2" fill="#61afef"/>
      <rect x="6" y="10" width="2" height="2" fill="#61afef"/>
      <rect x="8" y="10" width="2" height="2" fill="#61afef"/>
      <rect x="10" y="10" width="2" height="2" fill="#61afef"/>
      <rect x="6" y="12" width="2" height="2" fill="#61afef"/>
      <rect x="8" y="12" width="2" height="2" fill="#61afef"/>
      <rect x="0" y="0" width="2" height="2" fill="#e5c07b"/>
      <rect x="12" y="0" width="2" height="2" fill="#e5c07b"/>
      <rect x="0" y="12" width="2" height="2" fill="#e5c07b"/>
      <rect x="14" y="6" width="2" height="2" fill="#98c379"/>
      <rect x="2" y="2" width="2" height="2" fill="#98c379"/>
      <rect x="4" y="4" width="2" height="2" fill="#abb2bf"/>
      <rect x="2" y="6" width="2" height="2" fill="#abb2bf"/>
      <rect x="2" y="8" width="2" height="2" fill="#abb2bf"/>
      <rect x="2" y="10" width="2" height="2" fill="#abb2bf"/>
      <rect x="4" y="12" width="2" height="2" fill="#abb2bf"/>
      <rect x="10" y="12" width="2" height="2" fill="#abb2bf"/>
      <rect x="12" y="10" width="2" height="2" fill="#abb2bf"/>
      <rect x="12" y="6" width="2" height="2" fill="#abb2bf"/>
      <rect x="10" y="2" width="2" height="2" fill="#abb2bf"/>
      <rect x="6" y="2" width="2" height="2" fill="#abb2bf"/>
    </svg>
  );

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          transform: isDown ? 'translate(-2px, -2px) scale(1.3)' : 'translate(-2px, -2px) scale(1)',
          display: 'block'
        }}
      >
        {isDown ? clickCursorSvg : normalCursorSvg}
      </div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="cursor-particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`
          }}
        />
      ))}
    </>
  );
}
