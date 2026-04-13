'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      {/* 2. Hero */}
      <section style={{ padding: '56px 40px 48px', display: 'grid', gridTemplateColumns: '1fr 220px', gap: '32px' }}>
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            <span style={{ background: '#EEEDFE', color: '#3C3489', borderRadius: '20px', padding: '5px 12px', fontSize: '12px', fontWeight: 500 }}>Engineer</span>
            <span style={{ background: '#E1F5EE', color: '#085041', borderRadius: '20px', padding: '5px 12px', fontSize: '12px', fontWeight: 500 }}>Designer</span>
            <span style={{ background: '#FAECE7', color: '#712B13', borderRadius: '20px', padding: '5px 12px', fontSize: '12px', fontWeight: 500 }}>Writer</span>
          </div>
          
          <h1 style={{ fontSize: '42px', fontWeight: 500, color: '#111', lineHeight: '1.12', marginBottom: '20px' }}>
            William Hindley
          </h1>
          
          <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', maxWidth: '420px', marginBottom: '32px' }}>
            CS student, developer, occasional writer. I build things for the web and write about what I'm learning along the way.
          </p>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/projects" style={{ background: '#534AB7', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
              Primary action
            </Link>
            <Link href="/blog" style={{ border: '0.5px solid #ccc', color: '#444', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
              Secondary action
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#F1EFE8', borderRadius: '10px', padding: '16px 18px' }}>
             <div style={{ fontSize: '24px', fontWeight: 500, color: '#2C2C2A' }}>25</div>
             <div style={{ fontSize: '12px', color: '#888780', marginTop: '3px', fontWeight: 500 }}>Projects Shipped</div>
          </div>
          <div style={{ background: '#EEEDFE', borderRadius: '10px', padding: '16px 18px' }}>
             <div style={{ fontSize: '24px', fontWeight: 500, color: '#3C3489' }}>1M+</div>
             <div style={{ fontSize: '12px', color: '#534AB7', marginTop: '3px', fontWeight: 500 }}>Lines of Code</div>
          </div>
          <div style={{ background: '#E1F5EE', borderRadius: '10px', padding: '16px 18px' }}>
             <div style={{ fontSize: '24px', fontWeight: 500, color: '#085041' }}>10k</div>
             <div style={{ fontSize: '12px', color: '#0F6E56', marginTop: '3px', fontWeight: 500 }}>Happy Users</div>
          </div>
        </div>
      </section>

      {/* 3. Selected work */}
      <section style={{ padding: '0 40px 48px' }}>
        <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', fontWeight: 500, marginBottom: '16px', margin: 0, paddingBottom: '14px' }}>
          Selected Work
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {[
            { tag: 'Engineering', title: 'Web App', desc: 'A complex dashboard.', fill: '#EEEDFE' },
            { tag: 'Design', title: 'Brand Identity', desc: 'Logo and system.', fill: '#E1F5EE' },
            { tag: 'Writing', title: 'Blog Series', desc: 'Deep dive into tech.', fill: '#FAECE7' },
          ].map((item, i) => (
            <div key={i} style={{ border: '0.5px solid #e8e8e8', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ height: '120px', background: item.fill }}></div>
              <div style={{ padding: '16px' }}>
                <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 500 }}>{item.tag}</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#111', marginBottom: '2px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: '#777' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Divider */}
      <div style={{ height: '0.5px', background: '#e8e8e8', margin: '0 40px' }} />

      {/* 5. About + Experience */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '48px 40px', gap: '40px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 500, color: '#111', marginBottom: '16px', marginTop: 0 }}>About</h2>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '16px', marginTop: 0 }}>
            I am a software engineer and designer. I specialize in building high-quality, scalable web applications that are as beautiful as they are functional.
          </p>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '24px', marginTop: 0 }}>
            When I'm not coding, you can find me writing, exploring new technologies, or enjoying a good book.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['React', 'Next.js', 'Node.js', 'Figma', 'TypeScript'].map(skill => (
              <span key={skill} style={{ background: '#F1EFE8', color: '#444441', borderRadius: '6px', padding: '5px 12px', fontSize: '12px', fontWeight: 500 }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', fontWeight: 500, marginBottom: '20px', marginTop: 0 }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
               { company: 'Tech Corp', role: 'Senior Developer', date: '2022 – Present' },
               { company: 'Startup Inc', role: 'Software Engineer', date: '2020 – 2022' }
            ].map((job, idx, arr) => (
               <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '8px' }}>
                     <div style={{ width: '8px', height: '8px', background: '#534AB7', borderRadius: '50%', marginTop: '6px' }}></div>
                     {idx !== arr.length - 1 && <div style={{ width: '1px', background: '#e0ddf8', flex: 1, margin: '2px 0' }}></div>}
                  </div>
                  <div style={{ paddingBottom: idx === arr.length - 1 ? '0' : '24px' }}>
                     <div style={{ fontSize: '14px', fontWeight: 500, color: '#111', lineHeight: 1 }}>{job.company}</div>
                     <div style={{ fontSize: '13px', color: '#555', marginTop: '4px', lineHeight: 1 }}>{job.role}</div>
                     <div style={{ fontSize: '12px', color: '#888', marginTop: '4px', lineHeight: 1 }}>{job.date}</div>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA banner */}
      <section style={{ background: '#EEEDFE', borderRadius: '12px', margin: '0 40px 40px', padding: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
           <div style={{ fontSize: '22px', fontWeight: 500, color: '#26215C', margin: 0, paddingBottom: '4px' }}>Let's build something together</div>
           <div style={{ fontSize: '14px', color: '#534AB7', margin: 0 }}>I'm currently available for freelance work.</div>
        </div>
        <button style={{ background: '#534AB7', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
          Contact me
        </button>
      </section>

      {/* 7. Footer */}
      <footer style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '0.5px solid #e8e8e8' }}>
        <div style={{ fontSize: '13px', color: '#888' }}>
          William Hindley · London, UK
        </div>
        <div style={{ display: 'flex', gap: '18px' }}>
          {['LinkedIn', 'Dribbble', 'GitHub'].map(link => (
            <a key={link} href="#" style={{ fontSize: '13px', color: '#888', textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
