import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function BlogPost({ params }) {
  const { slug } = params

  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${slug}.md`)

  // Check if the markdown file exists
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  // Read the markdown file and parse its frontmatter
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)

  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <div style={{ marginBottom: '32px' }}>
        <Link href="/blog" style={{ color: 'var(--muted)', fontSize: '14px' }}>
          ← Back to all posts
        </Link>
      </div>

      <header className="page-header" style={{ marginBottom: '40px', paddingBottom: '32px' }}>
        <h1 style={{ marginBottom: '16px' }}>{frontmatter.title}</h1>
        <div style={{ display: 'flex', gap: '16px', color: 'var(--muted)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
          <time>{frontmatter.date}</time>
          {frontmatter.category && (
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {frontmatter.category}
            </span>
          )}
        </div>
      </header>

      {/* The article body */}
      <article style={{ lineHeight: '1.8', fontSize: '16px' }}>
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <h2 style={{ fontSize: '24px', marginTop: '40px', marginBottom: '16px', fontWeight: '500' }} {...props} />,
            h2: ({node, ...props}) => <h3 style={{ fontSize: '20px', marginTop: '32px', marginBottom: '16px', fontWeight: '500' }} {...props} />,
            p: ({node, ...props}) => <p style={{ marginBottom: '20px' }} {...props} />,
            ul: ({node, ...props}) => <ul style={{ marginBottom: '20px', paddingLeft: '24px' }} {...props} />,
            ol: ({node, ...props}) => <ol style={{ marginBottom: '20px', paddingLeft: '24px' }} {...props} />,
            li: ({node, ...props}) => <li style={{ marginBottom: '8px' }} {...props} />,
            a: ({node, ...props}) => <a style={{ color: 'var(--accent)', textDecoration: 'underline' }} {...props} />
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
