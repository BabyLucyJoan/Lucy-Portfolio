import { useEffect, useRef } from 'react';

export default function SkillBar({ name, pct, delay = 0, inView, accent = 'var(--acc)' }) {
  const fillRef = useRef(null);

  useEffect(() => {
    if (!fillRef.current) return;
    if (inView) {
      const t = setTimeout(() => {
        fillRef.current.style.transform = `scaleX(${pct / 100})`;
      }, delay);
      return () => clearTimeout(t);
    } else {
      fillRef.current.style.transform = 'scaleX(0)';
    }
  }, [inView, pct, delay]);

  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
          {pct}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{
            transform: 'scaleX(0)',
            background: `linear-gradient(90deg, ${accent}, var(--acc2))`,
          }}
        />
      </div>
    </div>
  );
}
