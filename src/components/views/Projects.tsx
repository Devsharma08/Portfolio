import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, Project } from '../../data';

interface ProjectsProps {
  onOpenFile: (key: string) => void;
}

export default function Projects({ onOpenFile }: ProjectsProps) {
  const { projects } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleCardClick = (project: Project) => {
    const key = `project_${project.name.toLowerCase().replace(/ /g, '-')}`;
    onOpenFile(key);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '850px' }}
    >
      <motion.h1
        variants={cardVariants}
        style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '-0.03em',
          color: 'var(--keyword)'
        }}
      >
        Featured Projects
      </motion.h1>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ x: 4 }}
            onClick={() => handleCardClick(proj)}
            style={{
              background: 'var(--bg-tab)',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              borderLeft: `3px solid ${proj.color}`,
              padding: '18px 20px',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: proj.color }}>{proj.name}</span>
              </div>
              <span
                style={{
                  fontSize: '9px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: `1px solid ${proj.color}`,
                  color: proj.color,
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                {proj.status}
              </span>
            </div>
            
            <p style={{ color: 'var(--plain)', fontSize: '14px', lineHeight: 1.6, marginBottom: '14px' }}>
              {proj.desc}
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {proj.stack.flatMap((s) => s.items).map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'var(--bg-sidebar)',
                    color: 'var(--special)',
                    border: '1px solid var(--border)'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div style={{ fontSize: '11px', color: 'var(--comment)', fontStyle: 'italic' }}>
              Click file to view technical specs & execution breakdown →
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
