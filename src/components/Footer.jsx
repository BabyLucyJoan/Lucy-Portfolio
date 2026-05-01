import { AUTHOR } from '../data/portfolioData';

const SOCIALS = [
  { label: 'GitHub',    href: AUTHOR.socials.github,    emoji: '🐙' },
  { label: 'LinkedIn',  href: AUTHOR.socials.linkedin,  emoji: '💼' },
  { label: 'TikTok',   href: AUTHOR.socials.tiktok,    emoji: '🎵' },
  { label: 'Telegram', href: AUTHOR.socials.telegram,  emoji: '✈'  },
  { label: 'Instagram',href: AUTHOR.socials.instagram, emoji: '📸' },
  { label: 'Facebook', href: AUTHOR.socials.facebook,  emoji: '📘' },
];

const scrollTo = (id) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '1.25rem 1.5rem',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

        {/* Row 1 — name + socials */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.6rem' }}>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '1rem',
            background: 'linear-gradient(135deg, var(--acc), var(--acc2))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Lucy Nwokoye
          </p>

          {/* Social icons row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
            {SOCIALS.map(({ label, href, emoji }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{
                  width: 30, height: 30, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hi)'; e.currentTarget.style.background = 'var(--glow1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg)'; }}
              >
                {emoji}
              </a>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
              style={{ fontSize: '0.7rem', padding: '0.35rem 0.9rem', marginLeft: '0.25rem' }}
            >
              Hire Me ↗
            </button>
          </div>
        </div>

        {/* Row 2 — copyright */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: '0.75rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.3rem',
        }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text-3)' }}>
            © {year} Lucy Nwokoye · All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text-3)' }}>
            Crafted with <span style={{ color: 'var(--acc)' }}>♡</span> using React & Vite
          </p>
        </div>

      </div>
    </footer>
  );
}
