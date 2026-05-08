import { useState } from 'react';
import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { AUTHOR } from '../data/portfolioData';

const SOCIALS = [
  { icon: '🐙', label: 'GitHub',    href: AUTHOR.socials.github    },
  { icon: '💼', label: 'LinkedIn',  href: AUTHOR.socials.linkedin  },
  { icon: '🎵', label: 'TikTok',   href: AUTHOR.socials.tiktok    },
  { icon: '✈',  label: 'Telegram', href: AUTHOR.socials.telegram  },
  { icon: '📘', label: 'Facebook', href: AUTHOR.socials.facebook  },
  { icon: '📸', label: 'Instagram',href: AUTHOR.socials.instagram },
];

// ── To activate the contact form ──
// 1. Sign up free at https://emailjs.com
// 2. Create a service + template, copy your IDs below
// 3. Replace the simulate block with the real fetch call (commented out below)
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export default function ContactPage() {
  const [ref, inView] = useInView();
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) { alert('Please fill in all fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email.'); return; }

    setStatus('sending');

    // ── Real send (uncomment when EmailJS is configured) ──
    // try {
    //   const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //     method: 'POST', headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       service_id: EMAILJS_SERVICE_ID, template_id: EMAILJS_TEMPLATE_ID,
    //       user_id: EMAILJS_PUBLIC_KEY,
    //       template_params: { from_name: name, from_email: email, subject, message },
    //     }),
    //   });
    //   setStatus(res.ok ? 'sent' : 'error');
    // } catch { setStatus('error'); }

    // ── Simulated (remove when EmailJS is live) ──
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');

    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section">
      <GlowOrb color="var(--acc)" size={360} bottom={-100} right={-100} delay="2.5s" />
      <div className="inner" ref={ref} style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <p className="eyebrow">LET'S TALK</p>
        <h2 className="section-title">Get In <em>Touch</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* Direct contact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <a href={`mailto:${AUTHOR.email}`} className="card"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1rem' }}>
              <span style={{ fontSize: '1.2rem' }}>✉</span>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>Email</p>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{AUTHOR.email}</p>
              </div>
            </a>
            <a href={`tel:${AUTHOR.phone}`} className="card"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📞</span>
              <div>
                <p style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>Phone</p>
                <p style={{ fontSize: '0.78rem', fontWeight: 600 }}>{AUTHOR.phone}</p>
              </div>
            </a>
          </div>

          {/* Socials */}
          <div>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontFamily: 'var(--mono)', marginBottom: '0.8rem', letterSpacing: '0.15em' }}>
              FIND ME ON
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SOCIALS.map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="card"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.5rem 0.9rem', borderRadius: 999, fontSize: '0.78rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hi)'; e.currentTarget.style.color = 'var(--acc)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
                >
                  <span style={{ fontSize: '0.85rem' }}>{icon}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem' }}>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="card" style={{ padding: 'clamp(1.2rem, 4vw, 2rem)' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '1.5rem' }}>
              Send a <em style={{ color: 'var(--acc)' }}>Message</em>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              {[['name','Name','Your name'],['email','Email','your@email.com']].map(([n,l,ph]) => (
                <div key={n}>
                  <label style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontFamily: 'var(--mono)', display: 'block', marginBottom: '0.4rem' }}>{l.toUpperCase()}</label>
                  <input className="contact-input" name={n} type={n==='email'?'email':'text'} value={form[n]} onChange={handleChange} placeholder={ph} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontFamily: 'var(--mono)', display: 'block', marginBottom: '0.4rem' }}>SUBJECT</label>
              <input className="contact-input" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontFamily: 'var(--mono)', display: 'block', marginBottom: '0.4rem' }}>MESSAGE</label>
              <textarea className="contact-input" name="message" value={form.message} onChange={handleChange} rows={5}
                placeholder="Let's build something amazing together..." style={{ resize: 'vertical' }} />
            </div>

            <button onClick={handleSubmit} disabled={status === 'sending'} className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
              {status === 'sending' ? 'Sending...' : 'Send Message ↗'}
            </button>

            {status === 'sent' && (
              <p style={{ marginTop: '1rem', fontSize: '0.82rem', textAlign: 'center', fontFamily: 'var(--mono)', color: 'var(--acc2)' }}>
                ✓ Message sent! I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ marginTop: '1rem', fontSize: '0.82rem', textAlign: 'center', fontFamily: 'var(--mono)', color: 'var(--acc3)' }}>
                ✗ Something went wrong. Try emailing me directly.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
