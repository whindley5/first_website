const projects = [
    {
      title:       'This website',
      description: 'Personal portfolio built with Next.js 14 and FastAPI, deployed on Vercel.',
      tags:        ['next.js', 'python', 'vercel'],
      href:        'https://github.com/yourhandle/first_website',
      status:      'live',
    },
    // Add more projects here
  ]
  
  export default function ProjectsPage() {
    return (
      <div className="container">
        <header className="page-header">
          <h1>Projects</h1>
          <p>Things I've built or am building.</p>
        </header>
  
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0', paddingBottom: '80px' }}>
          {projects.map((p) => (
            <li
              key={p.title}
              style={{ borderBottom: '1px solid var(--border)', padding: '28px 0' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '-0.01em' }}>{p.title}</h3>
                    {p.status === 'live' && (
                      <span style={{
                        fontSize: '10px', fontFamily: 'var(--font-mono)',
                        background: 'rgba(100,200,120,0.12)', color: '#6dc87a',
                        border: '1px solid rgba(100,200,120,0.2)',
                        padding: '2px 8px', borderRadius: '4px',
                      }}>live</span>
                    )}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', maxWidth: '500px' }}>{p.description}</p>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: '12px', padding: '7px 14px' }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }