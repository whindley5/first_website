"use client";

import { useMemo, useState } from 'react'
import Link from 'next/link'

// ── Placeholder posts — replace with real data later ──────────────
const posts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with Next.js App Router',
    date: '2024-12-01',
    excerpt: 'What I learned setting up my first Next.js 14 project with the new App Router and how it differs from pages/.',
    tags: ['next.js', 'react'],
    category: 'tech',
    categoryLabel: 'Tech & Careers',
  },
  {
    slug: 'fastapi-on-vercel',
    title: 'Deploying FastAPI as Vercel serverless functions',
    date: '2024-11-15',
    excerpt: 'A quick guide to running Python backend code alongside a Next.js frontend on Vercel using Mangum.',
    tags: ['python', 'fastapi', 'vercel'],
    category: 'tech',
    categoryLabel: 'Tech & Careers',
  },
  {
    slug: 'why-i-started-writing',
    title: 'Why I started writing online',
    date: '2024-10-20',
    excerpt: 'Writing in public forces clarity. Here\'s why I finally decided to start.',
    tags: ['writing'],
    category: 'personal',
    categoryLabel: 'Personal',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Tech & Careers' },
  { id: 'uni', label: 'Uni' },
  { id: 'personal', label: 'Personal' },
]

function PostList({ posts }) {
  return (
    <ul style={{ listStyle: 'none', display: 'grid', gap: '0' }}>
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
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return posts
    }

    return posts.filter((post) => post.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="container">
      <header className="page-header">
        <h1>Blog</h1>
        <p>Writing about tech, school, and whatever else is on my mind.</p>
      </header>

      <section style={{ paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
          {categories.map((category) => {
            const isActive = selectedCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  borderRadius: '999px',
                  padding: '8px 16px',
                }}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <PostList posts={filteredPosts} />
      </section>
    </div>
  )
}