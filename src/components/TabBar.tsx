import React from 'react';
import { FileItem, getFileBadge } from './Sidebar';

interface TabBarProps {
  activeTabKey: string;
  openTabKeys: string[];
  onOpenFile: (key: string) => void;
  onCloseTab: (e: React.MouseEvent, key: string) => void;
  files: Record<string, FileItem>;
}

export default function TabBar({ activeTabKey, openTabKeys, onOpenFile, onCloseTab, files }: TabBarProps) {
  return (
    <div className="tab-bar" id="tab-bar">
      {openTabKeys.map((key) => {
        const f = files[key];
        if (!f) return null;
        const isActive = key === activeTabKey;
        const isApp = key === 'app';

        return (
          <div
            key={key}
            className={`tab-item ${isActive ? 'active' : ''}`}
            onClick={() => onOpenFile(key)}
            title={f.name}
          >
            {getFileBadge(f.ext)}
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.name}</span>
            
            {!isApp && (
              <span
                className="tab-close"
                onClick={(e) => onCloseTab(e, key)}
              >
                <svg width="10" height="10" viewBox="0 0 16 16" fill="var(--plain)">
                  <path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.647.707.707z"/>
                </svg>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
