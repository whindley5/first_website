export default function ResumePage() {
    return (
      <div className="container">
        <header className="page-header">
          <h1>Resume</h1>
          <p>Last updated December 2024.</p>
        </header>
  
        {/* Download button — just links to the file in /public */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary"
          >
            ↓ Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Open in browser ↗
          </a>
        </div>
  
        {/* Inline PDF viewer (works on desktop browsers) */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '80px',
            background: 'var(--bg2)',
          }}
        >
          <iframe
            src="/resume.pdf"
            width="100%"
            height="900"
            style={{ display: 'block', border: 'none' }}
            title="Resume"
          />
        </div>
      </div>
    )
  }