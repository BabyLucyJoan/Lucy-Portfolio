import { useState } from 'react';
import GlowOrb from '../components/GlowOrb';
import SkillBar from '../components/SkillBar';
import { useInView } from '../hooks/useInView.jsx';
import { SKILLS, CAT_COLORS } from '../data/portfolioData';

const CATS = ['all', 'frontend', 'tooling', 'design'];

export default function SkillsPage() {
  const [ref, inView] = useInView(0.05);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? SKILLS : SKILLS.filter(s => s.cat === filter);

  const filterBtnStyle = (cat) => ({
    padding: '0.35rem 1rem',
    borderRadius: 999,
    border: '1px solid',
    fontSize: '0.7rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'var(--mono)',
    background:   filter === cat ? 'var(--glow1)'     : 'transparent',
    borderColor:  filter === cat ? 'var(--border-hi)' : 'var(--border)',
    color:        filter === cat ? 'var(--acc)'        : 'var(--text-3)',
  });

  return (
    <section id="skills" className="section">
      <GlowOrb color="var(--acc2)" size={300} top="10%" right={-100} delay="0.5s" />

      <div className="inner" ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <p className="eyebrow">WHAT I KNOW</p>
        <h2 className="section-title">My <em>Skills</em></h2>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={filterBtnStyle(cat)}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div>
          {filtered.map((s, i) => (
            <SkillBar
              key={s.name}
              name={s.name}
              pct={s.pct}
              delay={i * 50}
              inView={inView}
              accent={CAT_COLORS[s.cat]}
            />
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          {Object.entries(CAT_COLORS).map(([cat, color]) => (
            <span key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'inline-block' }} />
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
