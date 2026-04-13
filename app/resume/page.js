export const metadata = {
  robots: { index: false, follow: false }
};

export default function ResumePage() {
  // Define variables outside the return block
  const resumePath = "/WilliamHindley_Work_CV.pdf";

  return (
    <div className="container">
      {/* Download buttons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', marginTop: '20px' }}>
        <a
          href={resumePath}
          download
          className="btn btn-primary"
        >
          ↓ Download PDF
        </a>
        <a
          href={resumePath}
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
          // Using a template literal for cleaner string joining
          src={`${resumePath}#view=FitH&toolbar=0`}
          width="100%"
          height="900"
          style={{ display: 'block', border: 'none' }}
          title="Resume"
        />
      </div>
    </div>
  );
}