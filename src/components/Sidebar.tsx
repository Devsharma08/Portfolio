import React, { useState } from 'react';

export interface FileItem {
  key: string;
  name: string;
  ext: string;
  folder: 'root' | 'portfolio' | 'projects' | 'publications';
  labelColor?: string;
}

interface SidebarProps {
  activeTabKey: string;
  onOpenFile: (key: string) => void;
  files: Record<string, FileItem>;
  isMobileOpen?: boolean;
}

const extColors: Record<string, { color: string; letter: string; dark?: boolean }> = {
  html: { color: '#e34c26', letter: 'H' },
  tsx: { color: '#3178c6', letter: 'T' },
  jsx: { color: '#61dafb', letter: 'R' },
  js: { color: '#f7df1e', letter: 'J', dark: true },
  json: { color: '#6bd0f4', letter: '{' },
  md: { color: '#8b949e', letter: 'M' },
  css: { color: '#264de4', letter: 'C' },
  pdf: { color: '#e06c75', letter: 'P' }
};

export function getFileBadge(ext: string) {
  const c = extColors[ext] || { color: '#8b949e', letter: '?' };
  return (
    <span
      className="file-badge"
      style={{
        background: c.color,
        color: c.dark ? '#000' : '#fff',
        marginRight: '6px'
      }}
    >
      {c.letter}
    </span>
  );
}

export default function Sidebar({ activeTabKey, onOpenFile, files, isMobileOpen }: SidebarProps) {
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  // Group files by folder
  const rootFiles = Object.entries(files).filter(([_, f]) => f.folder === 'root');
  const portfolioFiles = Object.entries(files).filter(([_, f]) => f.folder === 'portfolio');
  const projectFiles = Object.entries(files).filter(([_, f]) => f.folder === 'projects');

  const renderFileNode = (key: string, f: FileItem, paddingLeft: number) => {
    const isActive = key === activeTabKey;
    return (
      <div
        key={key}
        className={`tree-node-file ${isActive ? 'active' : ''}`}
        onClick={() => onOpenFile(key)}
        style={{
          padding: `6px 12px 6px ${paddingLeft}px`
        }}
      >
        {getFileBadge(f.ext)}
        <span style={{ fontSize: '13px', color: f.labelColor || 'inherit' }}>{f.name}</span>
      </div>
    );
  };

  return (
    <div className={`sidebar ${isMobileOpen ? 'sidebar-mobile-open' : 'sidebar-mobile-hidden'}`} id="sidebar">
      <div className="sidebar-title">Explorer</div>
      <div className="sidebar-explorer">
        {/* Render Root Files */}
        {rootFiles.map(([key, f]) => renderFileNode(key, f, 18))}

        {/* Render Portfolio Files */}
        {portfolioFiles.map(([key, f]) => renderFileNode(key, f, 18))}

        {/* Projects Folder Header */}
        <div
          className="tree-node-folder"
          onClick={() => setProjectsExpanded(!projectsExpanded)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="var(--comment)"
            style={{
              transform: projectsExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform .1s',
              marginRight: '4px'
            }}
          >
            <path d="M6 4l4 4-4 4V4z"/>
          </svg>
          <span style={{ fontWeight: 600, fontSize: '11px', color: 'var(--plain)', textTransform: 'lowercase' }}>
            projects
          </span>
        </div>

        {/* Render Projects List */}
        {projectsExpanded && (
          <div style={{ display: 'block' }}>
            {projectFiles.map(([key, f]) => renderFileNode(key, f, 28))}
          </div>
        )}
      </div>
    </div>
  );
}
