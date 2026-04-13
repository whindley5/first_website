export default function ResumePage() {
  return (
    <div className="container">
      {/* 1. Header section removed */}

      {/* Download buttons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', marginTop: '20px' }}>
        <a
          href="/William_Hindley_Work_CV.pdf"
          download
          className="btn btn-primary"
        >
          ↓ Download PDF
        </a>
        <a
          href="/William_Hindley_Work_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Open in browser ↗
        </a>
      </div>

      {/* Inline PDF viewer */}
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
          /* 2. Path updated to point to the root public directory */
          src="/public/William_Hindley_Work_CV.pdf#toolbar=0"
          width="100%"
          height="900"
          style={{ display: 'block', border: 'none' }}
          title="Resume"
        />
      </div>
    </div>
  )
}