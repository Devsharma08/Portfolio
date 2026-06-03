import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data';
import resumePdf from '../../resume.pdf';

export default function Resume() {
  const name = PORTFOLIO_DATA.profile.name;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: "'JetBrains Mono', monospace"
      }}
    >
      <motion.div
        variants={itemVariants}
        style={{
          width: '80px',
          height: '80px',
          background: 'rgba(224,108,117,0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          border: '1px solid rgba(224,108,117,0.37)'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--tag)">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      </motion.div>
      
      <motion.section variants={itemVariants}>
        <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--plain)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
          Official Resume
        </h2>
        <p style={{ color: 'var(--comment)', fontSize: '13px', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 32px' }}>
          The file is a binary PDF document. You can open it in a new browser tab or download it to your disk.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'var(--tag)',
              color: 'var(--bg)',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'opacity .15s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View PDF ↗
          </a>
          <a
            href={resumePdf}
            download={`${name.replace(/ /g, '_')}_Resume.pdf`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'transparent',
              color: 'var(--tag)',
              padding: '12px 28px',
              borderRadius: '8px',
              border: '1px solid var(--tag)',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background-color .15s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(224,108,117,0.07)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Download PDF ↓
          </a>
        </div>
      </motion.section>

      {/* File metadata panel */}
      <motion.div
        variants={itemVariants}
        style={{
          marginTop: '40px',
          padding: '20px',
          borderRadius: '12px',
          background: 'var(--bg-tab)',
          border: '1px solid var(--border)'
        }}
      >
        <div style={{ color: 'var(--comment)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
          File Metadata
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', fontSize: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--comment)' }}>Format:</span>
            <span style={{ color: 'var(--string)', fontWeight: 600 }}>Portable Document Format (PDF)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--comment)' }}>Last Update:</span>
            <span style={{ color: 'var(--keyword)', fontWeight: 600 }}>2026-06-01</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--comment)' }}>Size:</span>
            <span style={{ color: 'var(--number)', fontWeight: 600 }}>~ 73 KB</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--comment)' }}>Verification:</span>
            <span style={{ color: 'var(--special)', fontWeight: 600 }}>Validated PDF File</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
