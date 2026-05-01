import { useState, useEffect } from 'react';
import GlowOrb from '../components/GlowOrb';
import { AUTHOR } from '../data/portfolioData';

// 📸 Profile photo: public/profile-pic.jpeg
// To swap: replace that file or update AUTHOR.avatar in src/data/portfolioData.js

export default function HomePage() {
  const [mounted,   setMounted]   = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="section home-section">
      <GlowOrb color="var(--acc)"  size={500} top={-200} right={-150} />
      <GlowOrb color="var(--acc2)" size={350} bottom={-100} left={-100} delay="2s" />

      <div className="inner home-inner">

        {/* ── LEFT: text ── */}
        <div className="home-text">

          {/* Eyebrow */}
          <p style={{ ...fade(150), fontFamily: 'var(--mono)', fontSize: 'clamp(0.68rem,1.8vw,0.78rem)', letterSpacing: '0.22em', color: 'var(--acc)', marginBottom: '0.6rem' }}>
            FULLSTACK WEB DEVELOPER
          </p>

          {/* Hero heading — large, two lines */}
          <h1 className="home-heading" style={fade(250)}>
            HI, I'M<br />
            <span style={{ color: 'var(--text)' }}>LUCY </span>
            <span className="home-highlight">NWOKOYE</span>
          </h1>

          {/* Bio */}
          <p style={{
            ...fade(420),
            color: 'var(--text-2)',
            fontSize: 'clamp(0.82rem, 1.6vw, 0.93rem)',
            lineHeight: 1.85,
            maxWidth: 500,
            marginBottom: '2.2rem',
          }}>
            {AUTHOR.bio}
          </p>

          {/* CTAs */}
          <div style={{ ...fade(550), display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.8rem' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ gap: '0.5rem', paddingInline: '1.8rem' }}
            >
              View Resume ↗
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline"
              style={{ paddingInline: '1.8rem' }}
            >
              ✉ Hire Me
            </button>
          </div>

          {/* Stats row */}
          <div style={{ ...fade(680), display: 'grid', gridTemplateColumns: 'repeat(3, auto)', columnGap: '2rem', rowGap: 0, width: 'fit-content', maxWidth: '100%' }}>
            {[['3+', 'Years Dev'], ['6+', 'Projects'], ['1k+', 'Community']].map(([num, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <span style={{
                  fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  background: 'linear-gradient(135deg, var(--acc), var(--acc2))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', lineHeight: 1,
                  whiteSpace: 'nowrap',
                }}>{num}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(0.58rem, 1.2vw, 0.65rem)', color: 'var(--text-3)', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: hexagon photo ── */}
        <div
          className="home-photo-col float-anim"
          style={{
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? 'scale(1)' : 'scale(0.88)',
            transition: 'opacity 0.9s cubic-bezier(0.34,1.56,0.64,1) 300ms, transform 0.9s cubic-bezier(0.34,1.56,0.64,1) 300ms',
          }}
        >
          {/* Outer accent hexagon ring */}
          <div className="hex-ring">
            <div className="hex-inner">
              {/* Photo */}
              <img
                src={AUTHOR.avatar}
                alt={AUTHOR.name}
                onLoad={() => setImgLoaded(true)}
                className="hex-img"
                style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
              />
              {/* Fallback */}
              {!imgLoaded && (
                <div className="hex-fallback">
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '4rem', color: '#fff' }}>L</span>
                </div>
              )}
            </div>
          </div>

          {/* Floating accent dots */}
          <div className="hex-dot hex-dot-1" />
          <div className="hex-dot hex-dot-2" />
          <div className="hex-dot hex-dot-3" />
        </div>

      </div>

      <style>{`
        .home-section {
          display: flex;
          align-items: center;
          min-height: 100vh;
        }

        /* Heading */
        .home-heading {
          font-family: var(--serif);
          font-size: clamp(2.4rem, 7vw, 5rem);
          font-weight: 400;
          line-height: 1.0;
          margin-bottom: 1.2rem;
          letter-spacing: -0.01em;
        }
        .home-highlight {
          position: relative;
          color: var(--acc);
          font-style: italic;
        }

        /* Layout */
        .home-inner {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          gap: 3rem;
          width: 100%;
        }
        .home-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        /* ── Hexagon photo ── */
        .home-photo-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Clip-path hexagon */
        .hex-ring {
          width: clamp(200px, 42vw, 310px);
          height: clamp(200px, 42vw, 310px);
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          background: linear-gradient(135deg, var(--acc), var(--acc2), var(--acc3));
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hex-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          background: var(--bg-card);
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hex-img {
          width: 108%;
          height: 108%;
          object-fit: cover;
          object-position: top center;
          position: absolute;
          top: -4%;
          left: -4%;
        }
        .hex-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--acc), var(--acc2));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Floating accent dots */
        .hex-dot {
          position: absolute;
          border-radius: 50%;
          background: var(--acc);
          opacity: 0.7;
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .hex-dot-1 { width: 14px; height: 14px; top: 8%;  right: 6%;  animation-delay: 0s;    }
        .hex-dot-2 { width: 9px;  height: 9px;  bottom: 12%; left: 8%;  animation-delay: 1s; background: var(--acc2); }
        .hex-dot-3 { width: 11px; height: 11px; top: 45%; right: -2%; animation-delay: 0.5s; background: var(--acc3); }

        /* ── Desktop: side by side ── */
        @media (min-width: 860px) {
          .home-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
          }
          .home-text {
            align-items: flex-start;
            text-align: left;
            flex: 1;
          }
          .hex-ring {
            width: 310px;
            height: 310px;
          }
        }

        @media (min-width: 1100px) {
          .hex-ring { width: 360px; height: 360px; }
        }
      `}</style>
    </section>
  );
}
