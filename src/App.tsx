import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from './data';

// Components
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Titlebar from './components/Titlebar';
import Sidebar, { FileItem } from './components/Sidebar';
import TabBar from './components/TabBar';
import Breadcrumbs from './components/Breadcrumbs';
import StatusBar from './components/StatusBar';

// Views
import Welcome from './components/views/Welcome';
import AboutMe from './components/views/AboutMe';
import SkillsDashboard from './components/views/SkillsDashboard';
import Projects from './components/views/Projects';
import SingleProject from './components/views/SingleProject';
import Contact from './components/views/Contact';
import Resume from './components/views/Resume';

// Files database mapping
const filesList: Record<string, FileItem & { path: string; lang: string }> = {
  app: { key: 'app', name: 'app.jsx', ext: 'jsx', folder: 'root', path: '#/', lang: 'JavaScript React' },
  aboutMe: { key: 'aboutMe', name: 'about_me.jsx', ext: 'jsx', folder: 'portfolio', path: '#/about-me', lang: 'JavaScript React' },
  skills: { key: 'skills', name: 'skills.tsx', ext: 'tsx', folder: 'portfolio', path: '#/skills', lang: 'TypeScript React' },
  projects: { key: 'projects', name: 'projects.js', ext: 'js', folder: 'portfolio', path: '#/projects', lang: 'JavaScript' },
  contact: { key: 'contact', name: 'contact.json', ext: 'json', folder: 'portfolio', path: '#/contact', lang: 'JSON' },
  resume: { key: 'resume', name: 'resume.pdf', ext: 'pdf', folder: 'root', path: '#/resume', lang: 'PDF', labelColor: '#e06c75' },
  project_campusfinder: { key: 'project_campusfinder', name: 'campusfinder.js', ext: 'js', folder: 'projects', path: '#/projects/campusfinder', lang: 'JavaScript' },
  project_bracerce: { key: 'project_bracerce', name: 'bracerce.js', ext: 'js', folder: 'projects', path: '#/projects/bracerce', lang: 'JavaScript' },
  project_giflab: { key: 'project_giflab', name: 'giflab.js', ext: 'js', folder: 'projects', path: '#/projects/giflab', lang: 'JavaScript' }
};

// Frame favicon blinking/animation grids
const j = [97, 175, 239];   // Blue
const M = [30, 35, 41];     // Dark
const Hr = [229, 192, 123]; // Yellow
const Ur = [75, 82, 99];     // Gray
const N = [152, 195, 121];  // Green
const P = [198, 120, 221];  // Purple
const F = null;             // Transparent

const Kr = [
  // Frame 1
  [
    [F,F,F,M,M,M,M,M,M,M,F,F,F,F,F,F],
    [F,F,M,j,j,j,j,j,j,j,M,F,F,F,F,F],
    [F,M,j,j,j,j,j,j,j,j,j,M,F,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,Hr,Hr,j,j,j,Hr,Hr,j,j,M,F,F,F],
    [M,j,j,Hr,Hr,j,j,j,Hr,Hr,j,j,M,F,F,F],
    [M,j,j,M,M,j,j,j,M,M,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,N,j,N,j,N,j,N,j,j,M,F,F,F],
    [M,j,j,j,N,j,N,j,N,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [F,M,j,P,j,j,j,j,j,j,P,j,M,F,F,F],
    [F,F,M,j,j,j,j,j,j,j,j,M,F,F,F,F],
    [F,F,F,M,M,M,M,M,M,M,F,F,F,F,F,F],
    [F,F,P,F,P,F,F,F,P,F,P,F,F,F,F,F],
    [F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F]
  ],
  // Frame 2
  [
    [F,F,F,M,M,M,M,M,M,M,F,F,F,F,F,F],
    [F,F,M,j,j,j,j,j,j,j,M,F,F,F,F,F],
    [F,M,j,j,j,j,j,j,j,j,j,M,F,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,Ur,Ur,j,j,j,Ur,Ur,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,N,j,N,j,N,j,N,j,j,M,F,F,F],
    [M,j,j,j,N,j,N,j,N,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [F,M,j,P,j,j,j,j,j,j,P,j,M,F,F,F],
    [F,F,M,j,j,j,j,j,j,j,j,M,F,F,F,F],
    [F,F,F,M,M,M,M,M,M,M,F,F,F,F,F,F],
    [F,F,P,F,P,F,F,F,P,F,P,F,F,F,F,F],
    [F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F]
  ],
  // Frame 3
  [
    [F,F,F,M,M,M,M,M,M,M,F,F,F,F,F,F],
    [F,F,M,j,j,j,j,j,j,j,M,F,F,F,F,F],
    [F,M,j,j,j,j,j,j,j,j,j,M,F,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,M,M,M,j,j,M,M,M,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [M,j,j,N,j,N,j,N,j,N,j,j,M,F,F,F],
    [M,j,j,j,N,j,N,j,N,j,j,j,M,F,F,F],
    [M,j,j,j,j,j,j,j,j,j,j,j,M,F,F,F],
    [F,M,j,P,j,j,j,j,j,j,P,j,M,F,F,F],
    [F,F,M,j,j,j,j,j,j,j,j,M,F,F,F,F],
    [F,F,F,M,M,M,M,M,M,M,F,F,F,F,F,F],
    [F,F,P,F,P,F,F,F,P,F,P,F,F,F,F,F],
    [F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F]
  ]
];
const frameDelays = [800, 80, 800];

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState('app');
  const [openTabKeys, setOpenTabKeys] = useState<string[]>(['app']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(true);

  // Favicon loops
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    let favLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!favLink) {
      favLink = document.createElement('link');
      favLink.rel = 'icon';
      document.head.appendChild(favLink);
    }

    let frameIdx = 0;
    let timerId: NodeJS.Timeout;

    const drawPixelArtFavicon = (grid: any[][]) => {
      ctx.clearRect(0, 0, 32, 32);
      grid.forEach((row, rIdx) => {
        row.forEach((pixel, cIdx) => {
          if (pixel) {
            ctx.fillStyle = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
            ctx.fillRect(cIdx * 2, rIdx * 2, 2, 2);
          }
        });
      });
    };

    const updateFavicon = () => {
      const currentGrid = Kr[frameIdx];
      drawPixelArtFavicon(currentGrid);
      favLink.href = canvas.toDataURL('image/png');
      const delay = frameDelays[frameIdx % frameDelays.length];
      frameIdx = (frameIdx + 1) % Kr.length;
      timerId = setTimeout(updateFavicon, delay);
    };

    updateFavicon();
    return () => clearTimeout(timerId);
  }, []);

  // Hash Router Synchronizer
  useEffect(() => {
    const syncRouter = () => {
      const hash = window.location.hash || '#/';
      const matchedEntry = Object.entries(filesList).find(([_, f]) => f.path === hash);
      if (matchedEntry) {
        const key = matchedEntry[0];
        setActiveTabKey(key);
        setOpenTabKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
      } else {
        setActiveTabKey('app');
      }
    };

    window.addEventListener('hashchange', syncRouter);
    // Initial sync
    syncRouter();

    return () => window.removeEventListener('hashchange', syncRouter);
  }, []);

  // Scroll to top when active tab changes (resets scroll position to start)
  useEffect(() => {
    const codeArea = document.querySelector('.code-area');
    if (codeArea) {
      codeArea.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [activeTabKey]);

  const openFile = (key: string) => {
    if (!filesList[key]) return;
    setActiveTabKey(key);
    setOpenTabKeys((prev) => (prev.includes(key) ? prev : [...prev, key]));
    window.location.hash = filesList[key].path;
    setIsSidebarOpen(false);

    // Scroll workspace back to top
    const codeArea = document.querySelector('.code-area');
    if (codeArea) codeArea.scrollTop = 0;
  };

  const closeTab = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    e.preventDefault();
    if (key === 'app') return; // app cannot close

    const newOpenTabs = openTabKeys.filter((t) => t !== key);
    setOpenTabKeys(newOpenTabs);

    if (activeTabKey === key) {
      const nextActive = newOpenTabs[newOpenTabs.length - 1] || 'app';
      openFile(nextActive);
    }
  };

  const renderActiveView = () => {
    switch (activeTabKey) {
      case 'app':
        return <Welcome />;
      case 'aboutMe':
        return <AboutMe />;
      case 'skills':
        return <SkillsDashboard />;
      case 'projects':
        return <Projects onOpenFile={openFile} />;
      case 'project_bracerce':
        return <SingleProject project={PORTFOLIO_DATA.projects[0]} onBack={() => openFile('projects')} />;
      case 'project_campusfinder':
        return <SingleProject project={PORTFOLIO_DATA.projects[1]} onBack={() => openFile('projects')} />;
      case 'project_giflab':
        return <SingleProject project={PORTFOLIO_DATA.projects[2]} onBack={() => openFile('projects')} />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <Welcome />;
    }
  };

  const toggleMobileSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const activeFile = filesList[activeTabKey] || filesList.app;

  return (
    <div className={useCustomCursor ? 'custom-cursor-active' : ''}>
      {/* 1. Custom Mouse Cursor */}
      {useCustomCursor && <Cursor />}

      {/* 2. Preloader Page */}
      {!preloaderDone && (
        <Preloader devName={PORTFOLIO_DATA.profile.name} onDone={() => setPreloaderDone(true)} />
      )}

      {/* 3. Main Workspace Area */}
      {preloaderDone && (
        <div className="app-root">
          {/* A. Titlebar */}
          <Titlebar onMenuClick={toggleMobileSidebar} isSidebarOpen={isSidebarOpen} />

          {/* B. Dynamic Editor Body */}
          <div className="workspace">
            {/* Actbar indicator */}
            <div className="actbar">
              <div className="actbar-item active" title="Explorer">
                <div className="actbar-indicator" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.5l1.5-1.5V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38H2.5V7.5H7v9.07L8.5 18H14.5v4.5zm6-6H8.5V1.5h7.5v4.5l1.5 1.5H20.5v9z" />
                </svg>
              </div>
            </div>

            {/* Sidebar Folder explorer */}
            <Sidebar
              activeTabKey={activeTabKey}
              onOpenFile={openFile}
              files={filesList}
              isMobileOpen={isSidebarOpen}
            />

            {/* Drawer Overlay for Mobile */}
            {isSidebarOpen && (
              <div
                className="mobile-overlay"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Editor Area */}
            <div className="editor-area">
              <TabBar
                activeTabKey={activeTabKey}
                openTabKeys={openTabKeys}
                onOpenFile={openFile}
                onCloseTab={closeTab}
                files={filesList}
              />
              <Breadcrumbs activeTabKey={activeTabKey} files={filesList} />
              
              <div className="code-area">
                <div className="code-wrapper">
                  <motion.div
                    key={activeTabKey}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    {renderActiveView()}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* C. Statusbar */}
          <StatusBar
            activeTabLanguage={activeFile.lang}
            useCustomCursor={useCustomCursor}
            onToggleCursor={() => setUseCustomCursor(!useCustomCursor)}
          />
        </div>
      )}
    </div>
  );
}
