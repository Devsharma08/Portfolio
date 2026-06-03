import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data';

export default function Contact() {
  const { socials, profile } = PORTFOLIO_DATA;

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
        paddingBottom: '40px',
        maxWidth: '800px'
      }}
    >
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '-0.03em',
          color: 'var(--keyword)'
        }}
      >
        Get in Touch
      </motion.h1>

      {/* Connectivity Status Panel */}
      <motion.div
        variants={itemVariants}
        style={{
          background: '#0d1117',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--string)',
          borderRadius: '8px',
          padding: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', right: '20px', top: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            className="pulse-dot"
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--string)',
              boxShadow: '0 0 10px var(--string)'
            }}
          />
          <span style={{ color: 'var(--string)', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
            SERVER_ONLINE
          </span>
        </div>

        <h3 style={{ margin: '0 0 16px 0', color: 'var(--plain)', fontSize: '16px', fontWeight: 600 }}>
          Connection Status
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'monospace' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: 'var(--comment)', width: '100px' }}>available:</span>
            <span style={{ color: 'var(--string)' }}>true</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: 'var(--comment)', width: '100px' }}>responseTime:</span>
            <span style={{ color: 'var(--string)' }}>"{profile.responseTime}"</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: 'var(--comment)', width: '100px' }}>timezone:</span>
            <span style={{ color: 'var(--fn)' }}>"{profile.timezone}"</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: 'var(--comment)', width: '100px' }}>openTo:</span>
            <span style={{ color: 'var(--keyword)' }}>["internships", "full-time", "collaborations"]</span>
          </div>
        </div>
      </motion.div>

      {/* Social Cards Grid */}
      <motion.div
        variants={itemVariants}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        {socials.map((s, idx) => (
          <motion.a
            key={idx}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 6, borderColor: s.color, background: `${s.color}11` }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: 'var(--bg-tab)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '16px 20px',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.2s, background-color 0.2s'
            }}
          >
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: s.color }} />
            
            <svg width="18" height="18" viewBox="0 0 24 24" fill={s.color} style={{ flexShrink: 0 }}>
              <path d={s.path} />
            </svg>
            
            <span style={{ color: 'var(--comment)', fontSize: '14px', minWidth: '90px', fontWeight: 600 }}>
              {s.label}
            </span>
            <span style={{ color: s.color, fontSize: '14px', fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {s.value}
            </span>
            
            <span style={{ marginLeft: 'auto', color: s.color, fontSize: '12px', fontFamily: 'monospace' }}>
              → execute
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Awaiting Input Box */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'linear-gradient(145deg, var(--bg-tab), #000000)',
          border: '1px dashed var(--comment)',
          borderRadius: '12px',
          padding: '30px 24px',
          textAlign: 'center',
          marginTop: '10px',
          position: 'relative'
        }}
      >
        <div
          className="blink"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(10px, 1.5vw, 14px)',
            color: 'var(--string)',
            marginBottom: '16px',
            lineHeight: 1.6,
            textShadow: '0 0 10px rgba(152,195,121,0.4)'
          }}
        >
          &gt; AWAITING_INPUT_
        </div>
        <div style={{ color: 'var(--plain)', fontSize: '14px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>
          Have an interesting project in mind or need a reliable developer?<br />
          <span style={{ marginTop: '8px', display: 'inline-block', color: 'var(--keyword)', fontWeight: 700 }}>
            Shoot me an email, and let's build something extraordinary together.
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
