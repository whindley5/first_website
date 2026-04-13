import Link from 'next/link'

// ── Placeholder posts — replace with real data later ──────────────
const techPosts = [
  {
    slug:    'getting-started-with-nextjs',
    title:   'Getting started with Next.js App Router',
    date:    '2024-12-01',
    excerpt: 'What I learned setting up my first Next.js 14 project with the new App Router and how it differs from pages/.',
    tags:    ['next.js', 'react'],
  },
  {
    slug:    'fastapi-on-vercel',
    title:   'Deploying FastAPI as Vercel serverless functions',
    date:    '2024-11-15',
    excerpt: 'A quick guide to running Python backend code alongside a Next.js frontend on Vercel using Mangum.',
    tags:    ['python', 'fastapi', 'vercel'],
  },
]

const personalPosts = [
  {
    slug:    'why-i-started-writing',
    title:   'Why I started writing online',
    date:    '2024-10-20',
    excerpt: 'Writing in public forces clarity. Here\'s why I finally decided to start.',
    tags:    ['writing'],
  },
]

function PostList({ posts }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
      {posts.map((post) => (
        <li key={post.slug} style={{ borderBottom: '1px solid var(--border)' }}>
          <Link
            href={`/blog/${post.slug}`}
            style={{ display: 'block', padding: '24px 0', transition: 'opacity 0.15s' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
                  {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <time style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', marginTop: '2px' }}>
                {post.date}
              </time>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function BlogPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1>Blog</h1>
        <p>Writing about tech, school, and whatever else is on my mind.</p>
      </header>

      <section>
        <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
          Tech & Careers
        </h2>
        <PostList posts={techPosts} />
      </section>

      <hr className="divider" />

      <section style={{ paddingBottom: '80px' }}>
        <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
          Personal
        </h2>
        <PostList posts={personalPosts} />
      </section>
    </div>
  )
}