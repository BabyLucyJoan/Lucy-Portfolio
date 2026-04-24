import { AUTHOR } from '../data/portfolioData';

const SOCIALS = [
  { label: 'GitHub',    href: AUTHOR.socials.github,    emoji: '🐙' },
  { label: 'LinkedIn',  href: AUTHOR.socials.linkedin,  emoji: '💼' },
  { label: 'TikTok',   href: AUTHOR.socials.tiktok,    emoji: '🎵' },
  { label: 'Telegram', href: AUTHOR.socials.telegram,  emoji: '✈'  },
  { label: 'Instagram',href: AUTHOR.socials.instagram, emoji: '📸' },
  { label: 'Facebook', href: AUTHOR.socials.facebook,  emoji: '📘' },
];

const NAV_LINKS = [
  { label: 'Home',       id: 'home'       },
  { label: 'About',      id: 'about'      },
  { label: 'Skills',     id: 'skills'     },
  { label: 'Education',  id: 'education'  },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects'   },
  { label: 'Contact',    id: 'contact'    },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer-root {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          padding: 2rem 1.25rem 1.25rem;
        }
        .footer-inner { max-width: 960px; margin: 0 auto; }

        /* ── Top: brand row ── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
        }
        .footer-brand-name {
          font-family: var(--serif);
          font-size: 1.2rem;
          background: linear-gradient(135deg, var(--acc), var(--acc2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }
        .footer-brand-desc {
          font-size: 0.78rem;
          color: var(--text-3);
          line-height: 1.6;
        }
        .footer-brand-email {
          font-family: var(--mono);
          font-size: 0.68rem;
          color: var(--acc);
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        /* ── Mid: links + socials ── */
        .footer-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) {
          .footer-cols {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer-social-pills { display: none; }
        }
        .footer-col-heading {
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          color: var(--text-3);
          margin-bottom: 0.6rem;
        }
        .footer-col-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .footer-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-3);
          font-size: 0.8rem;
          text-align: left;
          padding: 0;
          font-family: var(--sans);
          transition: color 0.2s;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-link-btn:hover { color: var(--acc); }

        /* Social pills — shown only on mobile */
        .footer-social-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }
        .footer-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text-3);
          font-family: var(--mono);
          font-size: 0.65rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .footer-pill:hover {
          border-color: var(--border-hi);
          color: var(--acc);
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.35rem;
        }
        .footer-bottom p {
          font-family: var(--mono);
          font-size: 0.6rem;
          color: var(--text-3);
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <p className="footer-brand-name">Lucy Nwokoye</p>
            <p className="footer-brand-desc">
              Fullstack Web Developer · Open to new opportunities and collaborations.
            </p>
            <a href={`mailto:${AUTHOR.email}`} className="footer-brand-email">
              ✉ {AUTHOR.email}
            </a>
          </div>

          {/* Links + Socials columns */}
          <div className="footer-cols">
            {/* Quick links */}
            <div>
              <p className="footer-col-heading">LINKS</p>
              <div className="footer-col-links">
                {NAV_LINKS.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="footer-link-btn"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Socials — text list, visible on all sizes */}
            <div>
              <p className="footer-col-heading">CONNECT</p>
              <div className="footer-col-links">
                {SOCIALS.map(({ label, href, emoji }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-btn"
                  >
                    <span style={{ fontSize: '0.78rem' }}>{emoji}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA col — desktop only (3rd column) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="footer-col-heading">HIRE ME</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6, marginBottom: '0.4rem' }}>
                Open to new opportunities. Let's build something great.
              </p>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}
              >
                Get in Touch ↗
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p>© {year} Lucy Nwokoye. All rights reserved.</p>
            <p>Crafted with <span style={{ color: 'var(--acc)' }}>♡</span> using React & Vite</p>
          </div>

        </div>
      </footer>
    </>
  );
}
