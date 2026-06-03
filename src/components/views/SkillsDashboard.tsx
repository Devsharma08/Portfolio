import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, Skill } from '../../data';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

// Helper to return colored SVGs representing each technology brand
function getTechIcon(name: string) {
  const normName = name.toLowerCase();

  // TypeScript / JavaScript
  if (normName.includes('typescript') || normName.includes('javascript')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M12 18.5V11H15V8.5H6V11H9V18.5H12ZM15 18.5H17.5V11.5H20V9H15V18.5Z" fill="white" />
      </svg>
    );
  }
  // Python
  if (normName.includes('python')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M11.9 2C6.5 2 6.8 4.3 6.8 5.7V8.5H12V9.2H4.9C3.5 9.2 2 10.2 2 12.3C2 14.6 3.2 15.1 4.5 15.1H6.1V13.8C6.1 11.7 7.7 9.8 9.9 9.8H15.1V6.9C15.1 6.9 15.3 2 11.9 2Z" fill="#3776AB" />
        <path d="M12.1 22C17.5 22 17.2 19.7 17.2 18.3V15.5H12V14.8H19.1C20.5 14.8 22 13.8 22 11.7C22 9.4 20.8 8.9 19.5 8.9H17.9V10.2C17.9 12.3 16.3 14.2 14.1 14.2H8.9V17.1C8.9 17.1 8.7 22 12.1 22Z" fill="#FFE873" />
      </svg>
    );
  }
  // C / C++
  if (normName.includes('c / c++') || normName.includes('c++')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM11.1 16.3C9 16.3 7.5 14.7 7.5 12.2S9 8.2 11.1 8.2C12.3 8.2 13.3 8.8 13.9 9.8L12.1 10.9C11.9 10.4 11.5 10.1 11 10.1C10 10.1 9.3 11 9.3 12.3S10 14.4 11 14.4C11.5 14.4 11.9 14.1 12.2 13.7L14 14.7C13.4 15.7 12.3 16.3 11.1 16.3ZM18.5 13H17.5V14H16.5V13H15.5V12H16.5V11H17.5V12H18.5V13ZM21 13H20V14H19V13H18V12H19V11H20V12H21V13Z" fill="#00599C" />
      </svg>
    );
  }
  // Java
  if (normName.includes('java')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M9.1 18.5C9.3 19 9.8 19.3 10.4 19.5C11.5 19.8 13 19.8 14.3 19.4C14.7 19.3 15.2 19 15.4 18.7C15.8 18 15.5 17.3 14.6 16.8C13.5 16.2 12.1 15.9 10.7 15.9C9.7 15.9 9 16.2 8.7 16.7C8.4 17.2 8.6 17.9 9.1 18.5ZM19.2 16C17.6 17 14.6 17.7 12.1 17.8C9.5 17.9 7.4 17.3 6.9 16.3C6.4 15.3 7.8 14.2 10.2 13.5C10.7 13.3 11.2 13.2 11.8 13.2C12 13.2 12.3 13.2 12.5 13.2C14.8 13.3 17 13.9 18.5 14.8C19.3 15.1 19.6 15.6 19.2 16ZM12.1 12.1C11.3 12.1 10.4 12.2 9.6 12.4C6.5 13.1 4.1 14.4 3.7 16.1C3.3 17.9 5 19.6 8.3 20.6C9.5 21 11 21.1 12.5 21.1C14 21.1 15.4 20.9 16.7 20.5C20.1 19.4 22 17.5 21.6 15.6C21.2 13.9 17.9 12.6 13.8 12.2C13.2 12.2 12.6 12.1 12.1 12.1Z" fill="#ea2d2e" />
        <path d="M12.9 8.2C13 8.2 13.1 8.3 13.2 8.3C13.6 8.5 13.9 8.9 14.1 9.4C14.7 11 13.3 12 11.8 12C11 12 10.2 11.7 9.8 11.2C9.4 10.7 9.2 10.1 9.4 9.5C9.7 8.3 11.4 8.2 12.9 8.2Z" fill="#0073B7" />
        <path d="M14.6 1.6C14.3 2.5 13.5 3.3 12.8 4C12 4.8 11.3 5.7 11.1 6.8C11 7.2 11.1 7.7 11.4 8C11.8 8.4 12.3 8.4 12.8 8.2C14.2 7.7 15.4 6.6 16 5.3C16.6 4 16.7 2.6 16.3 1.2C16.2 1 16 0.8 15.8 0.8C15.5 0.9 15 1.2 14.6 1.6Z" fill="#ea2d2e" />
      </svg>
    );
  }
  // SQL
  if (normName === 'sql') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2C6.5 2 2 4.2 2 7V17C2 19.8 6.5 22 12 22S22 19.8 22 17V7C22 4.2 17.5 2 12 2ZM20 7C20 8.3 16.4 10 12 10S4 8.3 4 7S7.6 4 12 4S20 5.7 20 7ZM20 12C20 13.3 16.4 15 12 15S4 13.3 4 12V9.5C5.8 11 8.8 11.8 12 11.8C15.2 11.8 18.2 11 20 9.5V12ZM20 17C20 18.3 16.4 20 12 20S4 18.3 4 17V14.5C5.8 16 8.8 16.8 12 16.8C15.2 16.8 18.2 16 20 14.5V17Z" fill="#00758F" />
      </svg>
    );
  }
  // React
  if (normName.includes('react')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }
  // Next.js
  if (normName.includes('next.js')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, background: '#fff', borderRadius: '50%' }}>
        <circle cx="12" cy="12" r="12" fill="black" />
        <path d="M16.5 8.5L10 16.2H8.5V8.5H10V14.3L15.3 8.5H16.5Z" fill="white" />
        <rect x="15" y="8.5" width="1.5" height="7.7" fill="white" />
      </svg>
    );
  }
  // Tailwind
  if (normName.includes('tailwind')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 6C8.7 6 6.7 7.7 6 11C8.7 10.3 10.3 11 11 13C12.3 11.7 13.7 11.3 15 12C15.7 10 14.7 8.3 12 6ZM6 13C2.7 13 0.7 14.7 0 18C2.7 17.3 4.3 18 5 20C6.3 18.7 7.7 18.3 9 19C9.7 17 8.7 15.3 6 13Z" fill="#38BDF8" transform="scale(0.9) translate(2, 2)" />
      </svg>
    );
  }
  // Angular
  if (normName.includes('angular')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2L2 5.5L3.5 17.5L12 22L20.5 17.5L22 5.5L12 2Z" fill="#DD0031" />
        <path d="M12 2L12 22L20.5 17.5L22 5.5L12 2Z" fill="#C3002F" />
        <path d="M12 5.2L6.3 16.7H8.7L10 13.5H14L15.3 16.7H17.7L12 5.2ZM12 8.7L13.3 11.7H10.7L12 8.7Z" fill="white" />
      </svg>
    );
  }
  // Node / Express
  if (normName.includes('node.js') || normName.includes('express.js')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" fill="#339933" />
        <path d="M12 5.5L6.5 8.7V13.8L12 17L17.5 13.8V8.7L12 5.5ZM11 8.5H13V13.5H11V8.5Z" fill="white" />
      </svg>
    );
  }
  // AWS
  if (normName.includes('aws')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#232F3E" />
        <path d="M12 6.5C8.4 6.5 5.5 8.2 5.5 10.3C5.5 11.5 6.9 12.5 9 13L9.5 11.8C8.1 11.5 7 10.9 7 10.3C7 9.1 9.2 8 12 8C14.8 8 17 9.1 17 10.3C17 10.9 15.9 11.5 14.5 11.8L15 13C17.1 12.5 18.5 11.5 18.5 10.3C18.5 8.2 15.6 6.5 12 6.5ZM9 14.5C10.5 15.8 13.5 15.8 15 14.5L16 15.5C14 17.5 10 17.5 8 15.5L9 14.5Z" fill="#FF9900" />
      </svg>
    );
  }
  // Docker
  if (normName.includes('docker')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M2 11V14.5C2 17.5 5.5 19 12 19S22 17.5 22 14.5V11C22 11.2 21.8 13 12 13S2 11.2 2 11Z" fill="#2496ED" />
        <rect x="5" y="7" width="3" height="3" fill="#2496ED" />
        <rect x="9" y="7" width="3" height="3" fill="#2496ED" />
        <rect x="13" y="7" width="3" height="3" fill="#2496ED" />
        <rect x="9" y="3" width="3" height="3" fill="#2496ED" />
      </svg>
    );
  }
  // Kubernetes
  if (normName.includes('kubernetes')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2ZM12 5.5L6.5 8.7V15.3L12 18.5L17.5 15.3V8.7L12 5.5Z" fill="#326CE5" />
      </svg>
    );
  }
  // PostgreSQL / MySQL
  if (normName.includes('postgres') || normName.includes('mysql')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2C6.5 2 3 5.5 3 10C3 15.5 8 18 8 21.5H9.5C9.5 19.5 8.5 18 10 16.5C12.5 18 16.5 17 18.5 14C20.5 11 20 7.5 18.5 5.5C17 3.5 14.5 2 12 2Z" fill="#336791" />
        <circle cx="10" cy="9" r="1.5" fill="white" />
      </svg>
    );
  }
  // MongoDB
  if (normName.includes('mongodb')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2C12 2 7 8 7 13C7 16.8 9.2 19 12 21.5C14.8 19 17 16.8 17 13C17 8 12 2 12 2ZM12 18C10.3 18 9 16.5 9 14.5C9 12 12 8 12 8C12 8 15 12 15 14.5C15 16.5 13.7 18 12 18Z" fill="#47A248" />
      </svg>
    );
  }
  // Prisma
  if (normName.includes('prisma')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#0C344B" />
        <path d="M12 4L18.5 16.5H5.5L12 4ZM12 7.5L8.5 14.5H15.5L12 7.5Z" fill="white" />
      </svg>
    );
  }
  // Redis
  if (normName.includes('redis')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2L2 6.5V11L12 15.5L22 11V6.5L12 2Z" fill="#DC382D" />
        <path d="M2 12.5V17L12 21.5L22 17V12.5L12 17L2 12.5Z" fill="#A41E15" />
      </svg>
    );
  }
  // Vercel / Render / Linux
  if (normName.includes('vercel') || normName.includes('render') || normName.includes('linux')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 2L2 19H22L12 2Z" fill="#000" stroke="#fff" strokeWidth="1.5" />
      </svg>
    );
  }

  // Fallback default command code symbol
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect width="24" height="24" rx="4" fill="#2c313c" />
      <path d="M8 8.5L12 12L8 15.5M13 15H17" stroke="var(--special)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SkillsDashboard() {
  const { skills, otherSkills, certifications, achievements } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { text: 'DevOS Skill-Terminal v1.5.0 (Type "help" to start)', type: 'success' },
    { text: 'visitor@devsharma.dev:~$ ', type: 'input' }
  ]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory];
    // Replace the last empty prompt line
    if (newHistory.length > 0 && newHistory[newHistory.length - 1].text === 'visitor@devsharma.dev:~$ ') {
      newHistory[newHistory.length - 1].text = `visitor@devsharma.dev:~$ ${terminalInput}`;
    } else {
      newHistory.push({ text: `visitor@devsharma.dev:~$ ${terminalInput}`, type: 'input' });
    }

    // Process commands
    switch (cmd) {
      case 'help':
        newHistory.push({
          text: 'Available Commands:\n  help           - Display this helper\n  skills         - List core technical proficiencies\n  certifications - Print cloud certifications\n  hackathon      - Details on hackathon success\n  campusfinder   - Inspect the CampusFinder project specs\n  supabase       - Supabase Realtime details\n  about          - Print professional synopsis\n  [techname]     - Type any technology (e.g. "docker", "react", "webrtc")\n  clear          - Clear console buffer',
          type: 'output'
        });
        break;
      case 'clear':
        setTerminalHistory([{ text: 'visitor@devsharma.dev:~$ ', type: 'input' }]);
        setTerminalInput('');
        return;
      case 'skills':
        const skillsText = skills
          .map((g) => `${g.label.toUpperCase()}:\n  ` + g.skills.map((s) => `${s.name} (${s.pct}%)`).join(', '))
          .join('\n');
        newHistory.push({ text: skillsText, type: 'output' });
        break;
      case 'certifications':
        newHistory.push({
          text: certifications.map((c) => `[OCI] ${c}`).join('\n'),
          type: 'success'
        });
        break;
      case 'hackathon':
        newHistory.push({
          text: '🏆 National Hackathon Finalist:\n  Led team DeepShiva to the national finals.\n  Trained a tourism recommendation engine and presented the solution prototype directly to the State Governor.',
          type: 'success'
        });
        break;
      case 'campusfinder':
        newHistory.push({
          text: '🎓 CampusFinder Project Specs:\n  - Frontend: React 19, TypeScript, Tailwind CSS v4, Framer Motion\n  - Backend: Node.js, Express, PostgreSQL, Prisma ORM\n  - AI Admission Predictor: Gemini 1.5 Flash API evaluates user scores & predicts probabilities\n  - Live Q&A: Supabase Realtime Channels allow instant student discussion threads',
          type: 'success'
        });
        break;
      case 'supabase':
        newHistory.push({
          text: '📡 Supabase Integrations:\n  - PostgreSQL: Relational database hosting with high-performance querying.\n  - Realtime: Subscribes to database changes instantly to synchronize student Q&A boards without polling.',
          type: 'success'
        });
        break;
      case 'about':
        newHistory.push({
          text: PORTFOLIO_DATA.profile.summary,
          type: 'output'
        });
        break;
      // Technology-specific matching cases
      case 'docker':
      case 'kubernetes':
      case 'docker compose':
        newHistory.push({
          text: 'Docker Containerization:\n  - Architected a decoupled 3-tier microservice runtime inside isolated Docker containers for the BraceRCE project.\n  - Enforced security controls (read-only mounts, stripped capabilities, tmpfs) within Docker nodes to prevent execution leaks.\n  - Employed Kubernetes during DevOps configurations to verify cluster orchestration scalability.',
          type: 'success'
        });
        break;
      case 'react':
      case 'react.js':
      case 'next.js':
      case 'typescript':
      case 'javascript':
        newHistory.push({
          text: 'React & JavaScript Stack:\n  - Refactored react render paths dropping response time by 20% at Eascode.\n  - Built BraceRCE sandbox client with Monaco editor, and GifLab natively client-side using Vite and React.\n  - Upgraded CampusFinder to React 19 and Tailwind CSS v4.',
          type: 'success'
        });
        break;
      case 'aws':
      case 's3':
      case 'ec2':
      case 'lambda':
      case 'ecr':
        newHistory.push({
          text: 'Amazon Web Services (AWS):\n  - Standardized EC2 instances for virtual server hosting.\n  - Configured secure S3 buckets for object storage.\n  - Applied AWS Lambda for serverless function deployments and ECR for container image registries.',
          type: 'success'
        });
        break;
      case 'webrtc':
      case 'socket.io':
        newHistory.push({
          text: 'Realtime Web Technologies:\n  - Experience implementing P2P signaling setups using WebRTC.\n  - Integrated Socket.IO channels to broadcast live telemetry streams, execution outputs, and active status updates.',
          type: 'success'
        });
        break;
      case 'postgresql':
      case 'mongodb':
      case 'prisma':
      case 'mongoose':
        newHistory.push({
          text: 'Databases & ORMs:\n  - Implemented 2-layer role access structures with PostgreSQL and MongoDB.\n  - Leveraged Prisma ORM schemas inside NodeJS backends to run database queries.\n  - Employed Redis keys to cache active execution histories and database queries.',
          type: 'success'
        });
        break;
      case 'ffmpeg':
      case 'ffmpeg wasm':
      case 'wasm':
        newHistory.push({
          text: 'FFmpeg WebAssembly:\n  - Integrated FFmpeg WebAssembly modules into the GifLab project to perform video edits directly on client browsers.\n  - Handled video conversion, sticker layers, filters, and rendering without backend API round-trips.',
          type: 'success'
        });
        break;
      default:
        // Try searching skills or other list
        const matchedSkill = skills
          .flatMap((g) => g.skills)
          .find((s) => s.name.toLowerCase().includes(cmd));
        if (matchedSkill) {
          newHistory.push({
            text: `Skill match: ${matchedSkill.name} (${matchedSkill.pct}% proficiency).\nUsed extensively across Dev Sharma's projects and MERN internships.`,
            type: 'output'
          });
        } else {
          newHistory.push({
            text: `Command not found: "${cmd}". Type "help" for options.`,
            type: 'error'
          });
        }
    }

    newHistory.push({ text: 'visitor@devsharma.dev:~$ ', type: 'input' });
    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const getSkillProjectMatch = (skillName: string) => {
    const list: string[] = [];
    PORTFOLIO_DATA.projects.forEach((proj) => {
      const match = proj.stack.some((st) =>
        st.items.some((item) => item.toLowerCase().includes(skillName.toLowerCase()))
      );
      if (match) list.push(proj.name);
    });
    return list;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '850px' }}>
      <h1
        style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '-0.03em',
          color: 'var(--fn)'
        }}
      >
        Technical Proficiencies
      </h1>

      {/* Stack of skill categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {skills.map((group, gIdx) => {
          const isExpanded = selectedGroup === group.label;
          return (
            <div
              key={gIdx}
              className="glowing-card"
              style={{
                background: 'var(--bg-tab)',
                border: '1px solid var(--border)',
                borderLeft: `3px solid ${group.color}`,
                borderRadius: '10px',
                padding: '20px 24px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={() => setSelectedGroup(isExpanded ? null : group.label)}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: group.color
                  }}
                >
                  // {group.label.replace(/_/g, ' ')}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--comment)' }}>
                  {isExpanded ? '[ collapse ]' : '[ click to expand ]'}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                style={{ overflow: 'hidden', marginTop: isExpanded ? '20px' : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {group.skills.map((s, sIdx) => {
                  const projectMatches = getSkillProjectMatch(s.name);
                  const isSkillSelected = selectedSkill?.name === s.name;
                  return (
                    <div
                      key={sIdx}
                      style={{
                        marginBottom: '16px',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        background: isSkillSelected ? 'rgba(255,255,255,0.02)' : 'transparent'
                      }}
                      onClick={() => setSelectedSkill(isSkillSelected ? null : s)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {getTechIcon(s.name)}
                          <span style={{ fontSize: '14px', color: 'var(--plain)', fontWeight: 600 }}>{s.name}</span>
                        </div>
                        <span style={{ fontSize: '12px', color: 'var(--comment)' }}>{s.pct}%</span>
                      </div>
                      <div style={{ height: '6px', width: '100%', background: 'var(--bg-sidebar)', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${s.pct}%`,
                            background: `linear-gradient(90deg, ${group.color}88, ${group.color})`,
                            borderRadius: '10px',
                            boxShadow: `0 0 15px ${group.color}33`
                          }}
                        />
                      </div>

                      {/* Display projects using this skill dynamically */}
                      <AnimatePresence>
                        {isSkillSelected && projectMatches.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{ marginTop: '10px', paddingLeft: '10px', borderLeft: `2px solid ${group.color}` }}
                          >
                            <span style={{ fontSize: '11px', color: 'var(--comment)' }}>Used in project: </span>
                            {projectMatches.map((pName, pIdx) => (
                              <span
                                key={pIdx}
                                style={{
                                  fontSize: '11px',
                                  padding: '1px 6px',
                                  borderRadius: '4px',
                                  background: 'rgba(255,255,255,0.06)',
                                  color: 'var(--special)',
                                  marginRight: '6px',
                                  border: '1px solid var(--border)'
                                }}
                              >
                                {pName}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Other Skills badges with SVG fallback */}
      <div>
        <div style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: '12px', color: 'var(--string)' }}>
          // Other Essential Tools & Frameworks
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
          {otherSkills.map((s, idx) => (
            <div
              key={idx}
              className="glowing-card"
              style={{
                background: 'var(--bg-tab)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.15s'
              }}
            >
              <div style={{ fontSize: '20px' }}>{s.emoji}</div>
              <div style={{ color: 'var(--plain)', fontWeight: 600, fontSize: '13px' }}>{s.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications and Achievements Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* Certifications */}
        <div
          style={{
            background: 'var(--bg-tab)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '20px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--keyword)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            // Certifications
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 14px',
                  background: 'var(--bg-sidebar)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: 'var(--plain)',
                  borderLeft: '3px solid var(--keyword)'
                }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          style={{
            background: 'var(--bg-tab)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '20px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--special)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            // Achievements & Activities
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 14px',
                  background: 'var(--bg-sidebar)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: 'var(--plain)',
                  borderLeft: '3px solid var(--special)'
                }}
              >
                {ach}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Command Terminal */}
      <div
        style={{
          background: '#0d1117',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          height: '240px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}
      >
        <div style={{ display: 'flex', borderBottom: '1px solid #21252b', paddingBottom: '8px', marginBottom: '12px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '6px', marginRight: '16px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <span style={{ fontSize: '11px', color: 'var(--comment)', fontFamily: 'monospace' }}>
            bash - skill_telemetry_terminal.sh
          </span>
        </div>

        {/* Scrollable output container */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {terminalHistory.map((line, idx) => {
            const isPrompt = line.text.startsWith('visitor@devsharma.dev:~$');
            let color = 'var(--plain)';
            if (line.type === 'error') color = '#f87171';
            else if (line.type === 'success') color = 'var(--string)';
            else if (line.type === 'input') color = 'var(--fn)';

            if (isPrompt) {
              const textVal = line.text.substring(24);
              return (
                <div key={idx} className="terminal-output" style={{ fontSize: '12px' }}>
                  <span className="terminal-prompt">visitor@devsharma.dev:~$</span>
                  <span style={{ color: 'var(--plain)', marginLeft: '6px' }}>{textVal}</span>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="terminal-output"
                style={{
                  color,
                  fontSize: '12px',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.4'
                }}
              >
                {line.text}
              </div>
            );
          })}
          <div ref={consoleEndRef} />
        </div>

        {/* Console Input Line */}
        <form onSubmit={handleTerminalSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <span className="terminal-prompt" style={{ fontSize: '12px' }}>visitor@devsharma.dev:~$</span>
          <input
            type="text"
            className="terminal-input-field"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            placeholder="Type 'help'..."
            style={{
              marginLeft: '6px',
              fontSize: '12px'
            }}
          />
        </form>
      </div>
    </div>
  );
}
