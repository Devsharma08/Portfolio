import React from 'react';
import { motion } from 'framer-motion';
import { UiSample } from '../../data';

interface SingleUiSampleProps {
  sample: UiSample;
  onBack: () => void;
}

export default function SingleUiSample({ sample, onBack }: SingleUiSampleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
        gap: '0px',
        maxWidth: '900px',
        fontFamily: "'JetBrains Mono', monospace"
      }}
    >
      <motion.div
        variants={itemVariants}
        onClick={onBack}
        whileHover={{ x: -2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--comment)',
          fontSize: '12px',
          cursor: 'pointer',
          marginBottom: '28px',
          width: 'fit-content',
          userSelect: 'none'
        }}
      >
        ← back to ui samples
      </motion.div>

      {/* Hero Banner */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'var(--bg-tab)',
          border: `1px solid ${sample.color}44`,
          borderRadius: '16px',
          padding: 'clamp(24px, 4vw, 48px)',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 0 20px ${sample.color}0a`
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `${sample.color}1c`,
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
        />
        <h1
          style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 900,
            lineHeight: 1,
            margin: '0 0 20px 0',
            letterSpacing: '-0.04em',
            color: sample.color
          }}
        >
          {sample.name}
        </h1>
        <p style={{ color: 'var(--plain)', fontSize: 'clamp(14px, 2vw, 17px)', lineHeight: 1.7, margin: 0, maxWidth: '720px' }}>
          {sample.desc}
        </p>
      </motion.div>

      {/* Technical Overview */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'var(--bg-tab)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: 'clamp(20px, 3vw, 36px)',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            fontSize: 'clamp(9px, 1.4vw, 11px)',
            fontWeight: 400,
            color: 'var(--fn)',
            letterSpacing: '0.05em',
            fontFamily: "'Press Start 2P', monospace",
            textShadow: '0 0 10px rgba(97,175,239,0.5)',
            lineHeight: 1.8,
            marginBottom: '16px'
          }}
        >
          // Technical Overview
        </div>
        <div style={{ height: '1px', width: '100%', margin: '8px 0', background: 'linear-gradient(90deg, var(--fn)55, transparent)' }} />
        <p style={{ color: 'var(--plain)', fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.9, marginTop: '16px' }}>
          {sample.fullDesc}
        </p>
      </motion.div>

      {/* Features & Interactions */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'var(--bg-tab)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: 'clamp(20px, 3vw, 36px)',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            fontSize: 'clamp(9px, 1.4vw, 11px)',
            fontWeight: 400,
            color: 'var(--string)',
            letterSpacing: '0.05em',
            fontFamily: "'Press Start 2P', monospace",
            textShadow: '0 0 10px rgba(152,195,121,0.5)',
            lineHeight: 1.8,
            marginBottom: '16px'
          }}
        >
          // Features & Interactions
        </div>
        <div style={{ height: '1px', width: '100%', margin: '8px 0', background: 'linear-gradient(90deg, var(--string)55, transparent)' }} />
        <ul style={{ color: 'var(--plain)', fontSize: '14px', lineHeight: 1.8, marginTop: '20px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {sample.features.map((feat, fIdx) => (
            <li key={fIdx} style={{ listStyleType: 'square' }}>
              {feat}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tech Stack Modules */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'var(--bg-tab)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: 'clamp(20px, 3vw, 36px)',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            fontSize: 'clamp(9px, 1.4vw, 11px)',
            fontWeight: 400,
            color: 'var(--keyword)',
            letterSpacing: '0.05em',
            fontFamily: "'Press Start 2P', monospace",
            textShadow: '0 0 10px rgba(198,120,221,0.5)',
            lineHeight: 1.8,
            marginBottom: '16px'
          }}
        >
          // Architecture & Tech Stack
        </div>
        <div style={{ height: '1px', width: '100%', margin: '8px 0', background: 'linear-gradient(90deg, var(--keyword)55, transparent)' }} />
        <div style={{ marginTop: '20px' }}>
          {sample.stack.map((s, sIdx) => (
            <div key={sIdx} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '3px', height: '20px', borderRadius: '4px', background: `linear-gradient(180deg, ${sample.color}, ${sample.color}44)`, flexShrink: 0 }} />
                <span style={{ color: sample.color, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {s.label}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingLeft: '13px' }}>
                {s.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    style={{
                      fontSize: '13px',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      background: `${sample.color}12`,
                      color: sample.color,
                      border: `1px solid ${sample.color}40`,
                      fontWeight: 600,
                      fontFamily: 'monospace',
                      letterSpacing: '0.03em'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Engineering Challenges & Solutions */}
      {sample.challenges && sample.challenges.length > 0 && (
        <motion.div
          variants={itemVariants}
          style={{
            background: 'var(--bg-tab)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: 'clamp(20px, 3vw, 36px)',
            marginBottom: '24px'
          }}
        >
          <div
            style={{
              fontSize: 'clamp(9px, 1.4vw, 11px)',
              fontWeight: 400,
              color: 'var(--type)',
              letterSpacing: '0.05em',
              fontFamily: "'Press Start 2P', monospace",
              textShadow: '0 0 10px rgba(229,192,123,0.5)',
              lineHeight: 1.8,
              marginBottom: '16px'
            }}
          >
            // Engineering Challenges & Solutions
          </div>
          <div style={{ height: '1px', width: '100%', margin: '8px 0', background: 'linear-gradient(90deg, var(--type)55, transparent)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            {sample.challenges.map((challenge, cIdx) => (
              <div
                key={cIdx}
                style={{
                  background: 'var(--bg-sidebar)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '16px 18px'
                }}
              >
                <div style={{ color: 'var(--type)', fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>
                  {cIdx + 1}. {challenge.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', lineHeight: 1.6 }}>
                  <div>
                    <span style={{ color: 'var(--keyword)', fontWeight: 600 }}>Issue:</span>{' '}
                    <span style={{ color: 'var(--plain)' }}>{challenge.issue}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--special)', fontWeight: 600 }}>Solution:</span>{' '}
                    <span style={{ color: 'var(--plain)' }}>{challenge.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Deployment / Source code block */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'var(--bg-tab)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: 'clamp(20px, 3vw, 36px)',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            fontSize: 'clamp(9px, 1.4vw, 11px)',
            fontWeight: 400,
            color: 'var(--special)',
            letterSpacing: '0.05em',
            fontFamily: "'Press Start 2P', monospace",
            textShadow: '0 0 10px rgba(86,182,194,0.5)',
            lineHeight: 1.8,
            marginBottom: '16px'
          }}
        >
          // Deployment & Source
        </div>
        <div style={{ height: '1px', width: '100%', margin: '8px 0', background: 'linear-gradient(90deg, var(--special)55, transparent)' }} />
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--bg-sidebar)',
              borderRadius: '10px',
              padding: '10px 18px',
              border: '1px solid var(--border)',
              flex: 1,
              minWidth: '220px'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--plain)">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span style={{ color: 'var(--special)', fontSize: '13px', wordBreak: 'break-all' }}>
              {sample.github.replace('https://', '')}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={sample.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: `${sample.color}15`,
                border: `1px solid ${sample.color}40`,
                color: sample.color,
                borderRadius: '10px',
                padding: '10px 20px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              Source Code ↗
            </a>
            <a
              href={sample.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--special)15',
                border: '1px solid var(--special)40',
                color: 'var(--special)',
                borderRadius: '10px',
                padding: '10px 20px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
