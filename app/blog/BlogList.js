"use client";

import { useMemo, useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Tech & Careers' },
  { id: 'uni', label: 'Uni' },
  { id: 'personal', label: 'Personal' },
]

function PostList({ posts }) {
  if (posts.length === 0) {
    return <p style={{ color: 'var(--muted)', marginTop: '20px' }}>No posts found.</p>
  }

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
                  {post.tags?.map(t => <span key={t} className="tag">{t}</span>)}
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

export default function BlogList({ initialPosts }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortDesc, setSortDesc] = useState(true) // true = newest first

  const filteredAndSortedPosts = useMemo(() => {
    // 1. Filter
    let result = selectedCategory === 'all'
      ? [...initialPosts]
      : initialPosts.filter((post) => post.category === selectedCategory)

    // 2. Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortDesc ? dateB - dateA : dateA - dateB
    })

    return result
  }, [initialPosts, selectedCategory, sortDesc])

  return (
    <section style={{ paddingBottom: '80px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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

        {/* Sort Toggle */}
        <button
          type="button"
          onClick={() => setSortDesc(!sortDesc)}
          className="btn btn-outline"
          style={{
            borderRadius: '999px',
            padding: '8px 16px',
            fontSize: '13px',
            whiteSpace: 'nowrap'
          }}
        >
          Sort: {sortDesc ? 'Newest First ↓' : 'Oldest First ↑'}
        </button>

      </div>

      <PostList posts={filteredAndSortedPosts} />
    </section>
  )
}
