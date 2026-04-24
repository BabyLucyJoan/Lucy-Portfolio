import { useState, useEffect } from 'react';
import GlowOrb from '../components/GlowOrb';
import { AUTHOR } from '../data/portfolioData';

// ── Profile photo is at: public/avatar.jpg
// ── To change it: replace public/avatar.jpg with your new photo (same filename)
// ── Or update AUTHOR.avatar in src/data/portfolioData.js to a different path

const STATS = [
  ['3+',  'Years Dev'],
  ['6+',  'Projects'],
  ['1k+', 'Community'],
];

export default function HomePage() {
  const [mounted,   setMounted]   = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section id="home" className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <GlowOrb color="var(--acc)"  size={500} top={-180} right={-180} />
      <GlowOrb color="var(--acc2)" size={360} bottom={-100} left={-120} delay="2s" />

      <div className="inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1rem 0' }}>

        {/* ── Avatar ──
            📸 To change your profile picture:
               1. Replace  /public/avatar.jpg  with your new photo
               2. Or edit AUTHOR.avatar in /src/data/portfolioData.js
        */}
        <div
          className="float-anim"
          style={{
            marginBottom: '2rem',
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? 'scale(1)' : 'scale(0.85)',
            transition: 'opacity 0.8s cubic-bezier(0.34,1.56,0.64,1), transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <div style={{ position: 'relative', width: 'clamp(150px, 25vw, 200px)', height: 'clamp(150px, 25vw, 200px)' }}>
            <div style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              background: 'conic-gradient(var(--acc), var(--acc2), var(--acc3), var(--acc))',
              animation: 'spin 6s linear infinite',
            }} />
            <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', background: 'var(--bg)' }} />
            <img
              src={AUTHOR.avatar}
              alt={AUTHOR.name}
              onLoad={() => setImgLoaded(true)}
              style={{
                position: 'absolute', inset: 7,
                borderRadius: '50%',
                width: 'calc(100% - 14px)', height: 'calc(100% - 14px)',
                objectFit: 'cover', objectPosition: 'top center',
                opacity: imgLoaded ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            />
            {!imgLoaded && (
              <div style={{
                position: 'absolute', inset: 7, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--acc), var(--acc2))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,6vw,3rem)', color: '#fff' }}>L</span>
              </div>
            )}
          </div>
        </div>

        <p className="eyebrow" style={fade(200)}>HELLO, I'M</p>

        <h1 style={{
          ...fade(300),
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 400, lineHeight: 1.1,
          marginBottom: '0.4rem',
        }}>
          {AUTHOR.name}
        </h1>

        <p style={{
          ...fade(400),
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(0.95rem, 3vw, 1.4rem)',
          color: 'var(--acc)', fontStyle: 'italic',
          marginBottom: '1rem',
        }}>
          {AUTHOR.title}
        </p>

        <p style={{
          ...fade(550),
          color: 'var(--text-2)', fontSize: 'clamp(0.82rem, 2vw, 0.92rem)',
          lineHeight: 1.8, maxWidth: 560, marginBottom: '2rem',
          padding: '0 0.5rem',
        }}>
          {AUTHOR.bio}
        </p>

        {/* CTAs */}
        <div style={{ ...fade(650), display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <a
            href="#contact"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            ✉ Get in Touch
          </a>
          <a href={AUTHOR.socials.github}   target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub ↗</a>
          <a href={AUTHOR.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn ↗</a>
        </div>

        {/* Stats */}
        <div style={{
          ...fade(750),
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '0.75rem', width: '100%', maxWidth: 400,
        }}>
          {STATS.map(([num, label]) => (
            <div key={label} className="card" style={{ padding: 'clamp(0.8rem,2vw,1.2rem) 0.5rem', textAlign: 'center' }}>
              <p className="grad" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem,4vw,2rem)', marginBottom: '0.2rem' }}>{num}</p>
              <p style={{ fontSize: 'clamp(0.6rem,1.5vw,0.68rem)', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
