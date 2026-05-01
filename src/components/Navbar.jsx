import { useState, useEffect } from 'react';
import { NAV } from '../data/portfolioData';
import { useTheme } from '../hooks/useTheme.jsx';

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        padding: '0.8rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'rgba(255,255,255,0.04)'}`,
        transition: 'border-color 0.3s ease',
      }}>

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          title="Home"
        >
          <img
            src="/logo.jpeg"
            alt="NJL Splendour Logo"
            className="nav-logo"
            onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <span style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            height: 36, paddingInline: '0.75rem', borderRadius: 8,
            border: '1.5px dashed var(--border-hi)',
            fontFamily: 'var(--mono)', fontSize: '0.72rem',
            color: 'var(--text-3)', letterSpacing: '0.1em', whiteSpace: 'nowrap',
          }}>
            [ your logo ]
          </span>
        </button>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem', minWidth: 0 }}>

          {/* Desktop: pill text buttons */}
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="nav-pill"
              data-active={active === n.id ? 'true' : 'false'}
            >
              {n.label}
            </button>
          ))}

          {/* Mobile: icon buttons */}
          {NAV.map(n => (
            <button
              key={`m-${n.id}`}
              onClick={() => scrollTo(n.id)}
              className="nav-icon-btn"
              data-active={active === n.id ? 'true' : 'false'}
              title={n.label}
            >
              {n.icon}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            title={dark ? 'Light mode' : 'Dark mode'}
            style={{
              marginLeft: '0.4rem',
              width: 34, height: 34, borderRadius: '50%',
              background: 'var(--glow1)', border: '1px solid var(--border-hi)',
              color: 'var(--acc)', fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', cursor: 'pointer', flexShrink: 0,
            }}
          >
            {dark ? '☀' : '☽'}
          </button>
        </div>
      </nav>

      <style>{`
        /* Logo */
        .nav-logo {
          height: 42px;
          width: auto;
          object-fit: contain;
          border-radius: 4px;
          /* Dark mode: screen blend strips black bg, keeps white art */
          mix-blend-mode: screen;
          filter: brightness(1.15) contrast(1.05);
        }
        /* Light mode: logo has black bg + white art — invert makes it black art on white */
        [data-theme="light"] .nav-logo {
          mix-blend-mode: multiply;
          filter: brightness(0) contrast(1);
        }

        .nav-pill {
          display: none;
          align-items: center;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-family: var(--mono);
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-3);
          white-space: nowrap;
        }
        .nav-pill[data-active="true"] {
          background: var(--glow1);
          border-color: var(--border-hi);
          color: var(--acc);
        }
        .nav-pill:hover {
          color: var(--text);
        }
        .nav-pill[data-active="true"]:hover {
          color: var(--acc);
        }

        .nav-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-3);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .nav-icon-btn[data-active="true"] {
          background: var(--glow1);
          border-color: var(--border-hi);
          color: var(--acc);
        }
        .nav-icon-btn:hover { color: var(--text); }

        @media (min-width: 640px) {
          .nav-pill     { display: inline-flex; }
          .nav-icon-btn { display: none; }
        }
      `}</style>
    </>
  );
}
