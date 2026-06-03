import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data';

export default function AboutMe() {
  const { profile, education, experience } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
      style={{ display: 'flex', flexDirection: 'column', gap: '36px', maxWidth: '850px' }}
    >
      {/* 1. Header / Intro */}
      <motion.section variants={itemVariants}>
        <div style={{ marginBottom: '24px' }}>
          <h1
            style={{
              fontSize: 'clamp(44px, 8vw, 72px)',
              fontWeight: 900,
              lineHeight: 0.95,
              margin: 0,
              letterSpacing: '-0.04em',
              color: 'var(--keyword)'
            }}
          >
            ABOUT<br />
            <span style={{ color: 'var(--fn)' }}>DEV SHARMA</span>
          </h1>
        </div>
        <div style={{ fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.6, color: 'var(--plain)', marginBottom: '16px' }}>
          Hi! I'm <span style={{ color: 'var(--keyword)', fontWeight: 700 }}>Dev Sharma</span>, a full-stack engineer
          specializing in building <span style={{ color: 'var(--fn)' }}>scalable web applications</span>, designing robust{' '}
          <span style={{ color: 'var(--special)' }}>REST APIs</span>, and configuring automated <span style={{ color: 'var(--string)' }}>DevOps workflows</span>.
        </div>
        <p style={{ color: 'var(--comment)', fontSize: '14px', lineHeight: 1.7, maxWidth: '750px' }}>
          {profile.summary}
        </p>
      </motion.section>

      {/* 2. Specialized Roles */}
      <motion.section variants={itemVariants}>
        <div style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: '12px', color: 'var(--keyword)' }}>
          // Specialized Roles & Focus Areas
        </div>
        <div style={{ background: 'var(--bg-tab)', borderLeft: '3px solid var(--keyword)', borderRadius: '4px', padding: '20px 24px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {profile.roles.map((role, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: 'var(--keyword)', fontWeight: 'bold' }}>→</span>
                <span style={{ color: 'var(--plain)', fontSize: '15px' }}>{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* 3. Education */}
      <motion.section variants={itemVariants}>
        <div style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: '12px', color: 'var(--fn)' }}>
          // Education & Academics
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glowing-card"
              style={{
                width: '100%',
                background: 'var(--bg-tab)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: '200px' }}>
                <div style={{ fontSize: '11px', color: 'var(--comment)', textTransform: 'uppercase' }}>{edu.level}</div>
                <div style={{ fontWeight: 700, fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'var(--plain)' }}>{edu.school}</div>
                <div style={{ fontSize: '12px', color: 'var(--type)' }}>{edu.desc}</div>
              </div>
              <div style={{ fontSize: 'clamp(15px, 2.5vw, 20px)', fontWeight: 800, color: 'var(--string)' }}>{edu.score}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. Experience Timeline */}
      <motion.section variants={itemVariants}>
        <div style={{ marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: '12px', color: 'var(--string)' }}>
          // Work Experience (Internships)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="glowing-card"
              style={{
                background: 'var(--bg-tab)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--string)',
                padding: '20px 24px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--string)' }}>{exp.company}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--plain)', fontWeight: 600 }}>{exp.role}</div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '12px' }}>
                  <div style={{ color: 'var(--type)', fontWeight: 600 }}>{exp.duration}</div>
                  <div style={{ color: 'var(--comment)' }}>{exp.location}</div>
                </div>
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ color: 'var(--plain)', fontSize: '13px', lineHeight: 1.5 }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
