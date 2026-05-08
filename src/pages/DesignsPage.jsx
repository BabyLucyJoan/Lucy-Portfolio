import { useState, useEffect } from 'react';
import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { DESIGNS } from '../data/portfolioData';

const CATS = ['All', 'Social Media', 'Branding', 'Print Design', 'Presentations'];

/* ── Lightbox ── */
function Lightbox({ item, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.88)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem',
          animation: 'fadeIn 0.2s ease',
        }}
      >
        {/* Content — stop click propagation so clicking image doesn't close */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            maxWidth: '90vw', maxHeight: '90vh',
            display: 'flex', flexDirection: 'column',
            gap: '0.75rem',
            animation: 'scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: -14, right: -14, zIndex: 10,
              width: 34, height: 34, borderRadius: '50%',
              background: 'var(--acc)', border: 'none',
              color: '#fff', fontSize: '1rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            ✕
          </button>

          {/* Image */}
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              style={{
                maxWidth: '85vw', maxHeight: '78vh',
                objectFit: 'contain',
                borderRadius: 12,
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                display: 'block',
              }}
            />
          ) : (
            <div style={{
              width: 400, height: 300,
              background: item.color, borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '5rem',
            }}>
              {item.icon}
            </div>
          )}

          {/* Caption */}
          <div style={{
            background: 'rgba(16,16,26,0.9)',
            borderRadius: 10, padding: '0.75rem 1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '0.5rem',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)',
          }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '0.15rem' }}>{item.title}</p>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)' }}>{item.category} · Made with Canva</p>
            </div>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.6rem',
              padding: '0.2rem 0.65rem', borderRadius: 999,
              background: 'var(--glow1)', border: '1px solid var(--border-hi)',
              color: 'var(--acc)',
            }}>
              🎨 Canva
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
}

/* ── Design Card ── */
function DesignCard({ item, idx, onOpen }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="card"
      onClick={() => onOpen(item)}
      style={{
        overflow: 'hidden', cursor: 'pointer',
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = inView ? 'translateY(0)' : 'translateY(24px)'}
    >
      <div style={{
        height: 180, background: item.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Real image */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Icon fallback */}
        <span style={{
          fontSize: '3.5rem', opacity: 0.5,
          display: item.image ? 'none' : 'flex',
          alignItems: 'center', justifyContent: 'center',
          width: '100%', height: '100%',
          position: item.image ? 'absolute' : 'relative', inset: 0,
        }}>
          {item.icon}
        </span>

        {/* Hover overlay — "click to view" hint */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.25s',
          zIndex: 2,
        }}
          className="card-hover-overlay"
        >
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            color: '#fff', background: 'rgba(0,0,0,0.5)',
            padding: '0.4rem 0.9rem', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>
            🔍 View Full
          </span>
        </div>

        {/* Category pill */}
        <span style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
          padding: '0.2rem 0.65rem', borderRadius: 999,
          background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', backdropFilter: 'blur(4px)', zIndex: 3,
        }}>
          {item.category}
        </span>

        {/* Canva badge */}
        <span style={{
          position: 'absolute', bottom: '0.6rem', left: '0.75rem',
          fontFamily: 'var(--mono)', fontSize: '0.58rem',
          color: 'rgba(255,255,255,0.8)',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          background: 'rgba(0,0,0,0.35)', padding: '0.15rem 0.5rem',
          borderRadius: 999, backdropFilter: 'blur(4px)', zIndex: 3,
        }}>
          🎨 Made with Canva
        </span>
      </div>

      <div style={{ padding: '1.1rem 1.3rem' }}>
        <h3 style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.35rem' }}>{item.title}</h3>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6 }}>{item.desc}</p>
      </div>

      <style>{`
        .card:hover .card-hover-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  );
}

/* ── Page ── */
export default function DesignsPage() {
  const [ref, inView]   = useInView();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null); // lightbox item

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

      {/* Lightbox */}
      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}

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
            <DesignCard key={item.title} item={item} idx={i} onOpen={setSelected} />
          ))}
        </div>
      </div>
    </section>
  );
}
