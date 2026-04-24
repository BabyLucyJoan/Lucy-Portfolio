import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { EXPERIENCE } from '../data/portfolioData';

export default function ExperiencePage() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section">
      <GlowOrb color="var(--acc)" size={320} bottom="10%" left={-100} delay="1.5s" />

      <div
        className="inner"
        ref={ref}
        style={{
          opacity:   inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <p className="eyebrow">WHERE I'VE BEEN</p>
        <h2 className="section-title">My <em>Experience</em></h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div className="timeline-line" />

          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company} style={{ position: 'relative', marginBottom: i < EXPERIENCE.length - 1 ? '2.5rem' : 0 }}>
              <div className="timeline-dot" style={{ background: exp.accent }} />
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.8rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>{exp.role}</h3>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: exp.accent }}>{exp.company}</p>
                  </div>
                  <span className="tag" style={{ borderColor: `${exp.accent}55`, color: exp.accent, background: `${exp.accent}18` }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {exp.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag" style={{ borderColor: `${exp.accent}55`, color: exp.accent, background: `${exp.accent}18` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
