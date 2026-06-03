import React from 'react';
import { PORTFOLIO_DATA } from '../../data';

interface LineProps {
  num: number;
  children: React.ReactNode;
}

function CodeLine({ num, children }: LineProps) {
  return (
    <div className="code-line">
      <span className="code-num">{num}</span>
      <span className="code-text">{children}</span>
    </div>
  );
}

export default function Welcome() {
  const name = PORTFOLIO_DATA.profile.name;
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div style={{ marginBottom: '28px' }}>
        <h1
          className="plain"
          style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: '12px',
            letterSpacing: '-0.04em'
          }}
        >
          {name.toUpperCase()}<span style={{ color: 'var(--keyword)' }}>.DEV</span>
        </h1>
        <p style={{ color: 'var(--comment)', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Initializing Retro Portfolio...
        </p>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <CodeLine num={1}><span className="comment">/**</span></CodeLine>
        <CodeLine num={2}><span className="comment"> * Welcome to {name}'s VS Code Retro Portfolio!</span></CodeLine>
        <CodeLine num={3}><span className="comment"> * Clicking standard editor controls will change directories dynamically.</span></CodeLine>
        <CodeLine num={4}><span className="comment"> */</span></CodeLine>
        <CodeLine num={5}>
          <span className="kw">import</span> <span className="plain">{"{ about_me }"}</span> <span className="kw">from</span> <span className="str">"./portfolio/about_me.jsx"</span><span className="plain">;</span>
        </CodeLine>
        <CodeLine num={6}>
          <span className="kw">import</span> <span className="plain">{"{ skills }"}</span> <span className="kw">from</span> <span className="str">"./portfolio/skills.tsx"</span><span className="plain">;</span>
        </CodeLine>
        <CodeLine num={7}>
          <span className="kw">import</span> <span className="plain">{"{ projects }"}</span> <span className="kw">from</span> <span className="str">"./portfolio/projects.js"</span><span className="plain">;</span>
        </CodeLine>
        <CodeLine num={8}>
          <span className="kw">import</span> <span className="plain">{"{ contact }"}</span> <span className="kw">from</span> <span className="str">"./portfolio/contact.json"</span><span className="plain">;</span>
        </CodeLine>
        <CodeLine num={9}>
          <span className="kw">import</span> <span className="plain">{"{ resume }"}</span> <span className="kw">from</span> <span className="str">"./resume.pdf"</span><span className="plain">;</span>
        </CodeLine>
        <CodeLine num={10}><span className="plain"></span></CodeLine>
        <CodeLine num={11}>
          <span className="kw">const</span> <span className="fn">InitPortfolio</span> <span className="plain">{"= () => {"}</span>
        </CodeLine>
        <CodeLine num={12}>
          <span className="kw">  return</span> <span className="plain">{"("}</span>
        </CodeLine>
        <CodeLine num={13}>
          <span className="plain">    &lt;</span><span class="tag">VSCodeWorkspace</span><span className="plain">&gt;</span>
        </CodeLine>
        <CodeLine num={14}>
          <span className="plain">      &lt;</span><span class="tag">Preloader</span> <span class="attr" style={{ color: 'var(--type)' }}>anim</span><span class="plain">=</span><span class="str">"walkingRobot"</span> <span class="attr" style={{ color: 'var(--type)' }}>delay</span><span class="plain">=</span><span class="num">{"{2800}"}</span> <span class="plain">/&gt;</span>
        </CodeLine>
        <CodeLine num={15}>
          <span className="plain">      &lt;</span><span class="tag">DynamicExplorer</span> <span class="attr" style={{ color: 'var(--type)' }}>openFolders</span><span class="plain">=</span><span class="num">{"{true}"}</span> <span class="plain">/&gt;</span>
        </CodeLine>
        <CodeLine num={16}>
          <span className="plain">      &lt;</span><span class="tag">InteractiveStatusbar</span> <span class="attr" style={{ color: 'var(--type)' }}>lang</span><span class="plain">=</span><span class="str">"React TS"</span> <span class="plain">/&gt;</span>
        </CodeLine>
        <CodeLine num={17}>
          <span className="plain">    &lt;/</span><span class="tag">VSCodeWorkspace</span><span class="plain">&gt;</span>
        </CodeLine>
        <CodeLine num={18}>
          <span className="plain">  );</span>
        </CodeLine>
        <CodeLine num={19}>
          <span className="plain">{"};"}</span>
        </CodeLine>
        <CodeLine num={20}><span className="plain"></span></CodeLine>
        <CodeLine num={21}>
          <span className="kw">export default</span> <span className="fn">InitPortfolio</span><span className="plain">;</span>
        </CodeLine>
      </div>

      <div
        style={{
          marginTop: '20px',
          border: '1px dashed var(--comment)',
          borderRadius: '12px',
          padding: '30px 24px',
          textAlign: 'center',
          background: 'linear-gradient(145deg, var(--bg), #000)'
        }}
      >
        <div
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(10px,1.5vw,14px)',
            color: 'var(--string)',
            marginBottom: '16px',
            textShadow: '0 0 10px rgba(152,195,121,0.4)'
          }}
        >
          &gt; EXPLORING_MODE_ACTIVE_
        </div>
        <p style={{ color: 'var(--plain)', fontSize: '14px', lineHeight: 1.6, maxWidth: '550px', margin: '0 auto' }}>
          Browse files in the explorer sidebar to discover about me, skills, academic writing, projects, and contact channels.
        </p>
      </div>
    </div>
  );
}
