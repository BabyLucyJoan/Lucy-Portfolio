import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { EDUCATION } from '../data/portfolioData';

function EduCard({ item, idx }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: '1.5rem',
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`,
      }}
    >
      {/* Year badge */}
      <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        {item.year}
      </span>

      <div style={{ marginBottom: '0.4rem', fontSize: '0.75rem', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
        {item.degree}
      </div>

      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--acc)', marginBottom: '0.6rem' }}>
        {item.field}
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1rem' }}>🎓</span>
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.85rem', color: 'var(--text-2)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
          >
            {item.institution} ↗
          </a>
        ) : (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>{item.institution}</span>
        )}
      </div>
    </div>
  );
}

export default function EducationPage() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section">
      <GlowOrb color="var(--acc2)" size={300} top="10%" right={-100} delay="0.5s" />

      <div
        className="inner"
        ref={ref}
        style={{
          opacity:    inView ? 1 : 0,
          transform:  inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p className="eyebrow">BACKGROUND</p>
        <h2 className="section-title">My <em>Education</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.2rem' }}>
          {EDUCATION.map((item, i) => (
            <EduCard key={`${item.institution}-${item.year}`} item={item} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
