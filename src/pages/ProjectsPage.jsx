import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { PROJECTS } from '../data/portfolioData';

function ProjectCard({ project, idx }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="card proj-card"
      style={{
        overflow: 'hidden',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`,
      }}
    >
      <div className="proj-img-wrap">
        <div style={{ width: '100%', height: '100%', background: project.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '3rem', opacity: 0.45 }}>{project.icon}</span>
        </div>
        <div className="proj-overlay">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="proj-link" style={{ background: project.accent }} title="Live Demo">
              ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="proj-link" style={{ background: 'var(--acc2)' }} title="GitHub">
              ⌥
            </a>
          )}
        </div>
      </div>

      <div style={{ padding: '1.2rem 1.4rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{project.title}</h3>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.67rem', color: project.accent, marginBottom: '0.6rem' }}>{project.tech}</p>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{project.desc}</p>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.9rem', fontSize: '0.75rem', color: project.accent, fontFamily: 'var(--mono)' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View Live ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section id="projects" className="section">
      <GlowOrb color="var(--acc3)" size={380} top={-100} right={-150} delay="0.8s" />

      <div className="inner">
        <p className="eyebrow">WHAT I'VE BUILT</p>
        <h2 className="section-title">My <em>Projects</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
