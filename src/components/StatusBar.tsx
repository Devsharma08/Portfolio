import React from 'react';

interface StatusBarProps {
  activeTabLanguage: string;
  useCustomCursor: boolean;
  onToggleCursor: () => void;
}

export default function StatusBar({ activeTabLanguage, useCustomCursor, onToggleCursor }: StatusBarProps) {
  return (
    <div className="status-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L6.5 1.5l6 6-6 6L8 15l7.5-7.5L8 0z"/>
        </svg>
        <span>main*</span>
      </div>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Toggle Custom Cursor */}
        <div
          onClick={onToggleCursor}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.1)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '10px'
          }}
          title="Toggle between Custom Retro Cursor and System native cursor"
        >
          <span>🖱️ Cursor: {useCustomCursor ? 'Retro' : 'Native'}</span>
        </div>

        <span>{activeTabLanguage}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>✌</span>
          <span>Prettier</span>
        </div>
      </div>
    </div>
  );
}
