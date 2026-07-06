import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, UiSample } from '../../data';

interface UiSamplesProps {
  onOpenFile: (key: string) => void;
}

export default function UiSamples({ onOpenFile }: UiSamplesProps) {
  const { uiSamples } = PORTFOLIO_DATA;

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

  const handleCardClick = (sample: UiSample) => {
    let key = '';
    if (sample.name.includes("OH Studio")) {
      key = 'ui_oh_studio';
    } else if (sample.name.includes("Basic Agency")) {
      key = 'ui_basic_agency';
    } else if (sample.name.includes("Backstage Talks")) {
      key = 'ui_backstage_talks';
    } else if (sample.name.includes("Brainwave")) {
      key = 'ui_brainwave';
    } else if (sample.name.includes("Apple")) {
      key = 'ui_apple_iphone15';
    }

    if (key) {
      onOpenFile(key);
    }
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
        Frontend UI Samples
      </motion.h1>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {uiSamples.map((sample, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ x: 4 }}
            onClick={() => handleCardClick(sample)}
            style={{
              background: 'var(--bg-tab)',
              borderRadius: '10px',
              border: sample.featured ? `1px solid ${sample.color}66` : '1px solid var(--border)',
              borderLeft: `3px solid ${sample.color}`,
              padding: '18px 20px',
              cursor: 'pointer',
              boxShadow: sample.featured ? `0 0 18px ${sample.color}1c` : '0 0 10px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: sample.color }}>{sample.name}</span>
                {sample.featured && (
                  <span
                    style={{
                      fontSize: '9px',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: `${sample.color}1c`,
                      border: `1px solid ${sample.color}77`,
                      color: sample.color,
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textShadow: `0 0 8px ${sample.color}88`
                    }}
                  >
                    ★ {sample.highlightTag || 'TOP'}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: '9px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: `1px solid ${sample.color}`,
                  color: sample.color,
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                {sample.status}
              </span>
            </div>
            
            <p style={{ color: 'var(--plain)', fontSize: '14px', lineHeight: 1.6, marginBottom: '14px' }}>
              {sample.desc}
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {sample.stack.flatMap((s) => s.items).map((item, itemIdx) => (
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
              Click file to view technical specs & engineering breakdown →
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
