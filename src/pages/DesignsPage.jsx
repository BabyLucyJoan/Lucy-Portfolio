import { useState } from 'react';
import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { DESIGNS } from '../data/portfolioData';

const CATS = ['All', 'Social Media', 'Branding', 'Print Design', 'Presentations'];

function DesignCard({ item, idx }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="card"
      style={{
        overflow: 'hidden',
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
      }}
    >
      <div style={{
        height: 140, background: item.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <span style={{ fontSize: '3.5rem', opacity: 0.5 }}>{item.icon}</span>
        <span style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
          padding: '0.2rem 0.65rem', borderRadius: 999,
          background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
        }}>
          {item.category}
        </span>
        <span style={{
          position: 'absolute', bottom: '0.6rem', left: '0.75rem',
          fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
        }}>
          🎨 Made with Canva
        </span>
      </div>
      <div style={{ padding: '1.1rem 1.3rem' }}>
        <h3 style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.35rem' }}>{item.title}</h3>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6 }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function DesignsPage() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? DESIGNS : DESIGNS.filter(d => d.category === filter);

  const filterStyle = (cat) => ({
    padding: '0.3rem 0.85rem', borderRadius: 999, border: '1px solid',
    fontSize: 'clamp(0.62rem, 1.8vw, 0.7rem)', cursor: 'pointer',
    transition: 'all 0.2s', fontFamily: 'var(--mono)', whiteSpace: 'nowrap',
    background:  filter === cat ? 'var(--glow1)'     : 'transparent',
    borderColor: filter === cat ? 'var(--border-hi)' : 'var(--border)',
    color:       filter === cat ? 'var(--acc)'       : 'var(--text-3)',
  });

  return (
    <section id="designs" className="section">
      <GlowOrb color="var(--acc3)" size={320} top="10%" left={-100} delay="1s" />
      <GlowOrb color="var(--acc)"  size={260} bottom="5%" right={-80} delay="0.5s" />

      <div className="inner" ref={ref} style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <p className="eyebrow">CREATIVE WORK</p>
        <h2 className="section-title">My <em>Designs</em></h2>

        <p style={{ color: 'var(--text-2)', fontSize: 'clamp(0.82rem,2vw,0.9rem)', lineHeight: 1.75, maxWidth: 560, marginBottom: '1.5rem' }}>
          Alongside web development, I create visual content using{' '}
          <strong style={{ color: 'var(--acc)' }}>Canva</strong> — from brand graphics and social media
          templates to event flyers and presentation decks.
        </p>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={filterStyle(cat)}>{cat}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((item, i) => (
            <DesignCard key={item.title} item={item} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
