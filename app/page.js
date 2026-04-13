import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className="container">
      <section className="page-header" style={{ paddingTop: '96px', paddingBottom: '96px', borderBottom: 'none' }}>
        <p style={{ color: 'var(--muted)', fontSize: '13px', fontFamily: 'var(--font-mono)', marginBottom: '24px' }}>
          Hello, I'm
        </p>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: '300', letterSpacing: '-0.04em', lineHeight: '1.05' }}>
          Your Name {/* ← change this */}
        </h1>
        <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '16px', maxWidth: '480px', lineHeight: '1.7' }}>
          CS student, developer, occasional writer. I build things for the web
          and write about what I'm learning along the way.
          {/* ← update your bio */}
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
          <Link href="/projects" className="btn btn-primary">View projects</Link>
          <Link href="/blog" className="btn btn-outline">Read blog</Link>
        </div>
      </section>

      {/* Quick links row */}
      <section style={{ borderTop: '1px solid var(--border)', paddingTop: '48px', paddingBottom: '80px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {[
          { label: 'GitHub',   href: 'https://github.com/yourhandle'  },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
          { label: 'Resume',   href: '/resume' },
          { label: 'Email',    href: 'mailto:you@example.com' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{ fontSize: '14px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {label} <span style={{ fontSize: '11px' }}>↗</span>
          </a>
        ))}
      </section>
    </div>
  )
}