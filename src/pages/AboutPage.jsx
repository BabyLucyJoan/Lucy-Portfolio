import GlowOrb from '../components/GlowOrb';
import { useInView } from '../hooks/useInView.jsx';
import { AUTHOR } from '../data/portfolioData';

const INFO = [
  ['📍', 'Location',   'Nigeria'],
  ['💼', 'Company',    'Xynder (Zealock Admin)'],
  ['✉',  'Email',     AUTHOR.email],
  ['📞', 'Phone',     AUTHOR.phone],
  ['🛠',  'Stack',    'React · TS · Vite · Node · MongoDB'],
  ['🧵', 'Off-Screen','Garment Construction & Fashion'],
];

export default function AboutPage() {
  const [ref, inView] = useInView();
  const appear = {
    opacity:   inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };

  return (
    <section id="about" className="section">
      <GlowOrb color="var(--acc3)" size={340} top="20%" left={-120} delay="1s" />
      <div className="inner" ref={ref} style={appear}>
        <p className="eyebrow">WHO I AM</p>
        <h2 className="section-title">About <em>Me</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.85, marginBottom: '1rem', fontSize: 'clamp(0.85rem,2vw,0.93rem)' }}>
              {AUTHOR.bio}
            </p>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.85, marginBottom: '2rem', fontSize: 'clamp(0.85rem,2vw,0.93rem)' }}>
              Outside my day role at <strong style={{ color: 'var(--text)' }}>Xynder</strong>, I freelance and
              founded the <strong style={{ color: 'var(--acc)' }}>Tech And Teach Community</strong> — 1,000+ tech
              learners from across Africa. Away from the screen, I have a deep love for{' '}
              <strong style={{ color: 'var(--acc)' }}>fashion design and garment construction</strong>.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.65rem', marginBottom: '2rem' }}>
              {INFO.map(([icon, label, value]) => (
                <div key={label} className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>{icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>{label}</p>
                    <p style={{ fontSize: '0.78rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="code-block" style={{ overflow: 'hidden' }}>
            <div className="code-header">
              <div className="dot" style={{ background: '#E87EC9' }} />
              <div className="dot" style={{ background: 'var(--acc)' }} />
              <div className="dot" style={{ background: 'var(--acc2)' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-3)', marginLeft: '0.5rem' }}>lucy.ts</span>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="kw">const</span> <span class="key">lucy</span> = {
  <span class="key">name</span>:      <span class="str">"Lucy Nwokoye"</span>,
  <span class="key">role</span>:      <span class="str">"Fullstack Web Developer"</span>,
  <span class="key">stack</span>:     [<span class="str">"React"</span>, <span class="str">"TypeScript"</span>, <span class="str">"JavaScript"</span>, <span class="str">"Node.js"</span>, <span class="str">"MongoDB"</span>],
  <span class="key">work</span>:      [<span class="str">"Xynder"</span>,  <span class="str">"SyncGrass"</span>],
  <span class="key">community</span>: <span class="str">"Tech And Teach (1k+ members)"</span>,
  <span class="key">hobbies</span>:  [<span class="str">"sewing"</span>, <span class="str">"fashion"</span>, <span class="str">"content creation"</span>],
  <span class="key">status</span>:   <span class="str">"available"</span>, <span class="cm">// open to opportunities</span>
};` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
