import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogList from './BlogList'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  
  // Ensure the directory exists to prevent crash if no posts yet
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory)
  }
  
  const filenames = fs.readdirSync(postsDirectory)

  // Read all files, parse frontmatter, and build posts array
  const posts = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled',
        date: data.date || '1970-01-01',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        category: data.category || 'misc',
      }
    })

  return (
    <div className="container">
      <header className="page-header">
        <h1>Blog</h1>
        <p>Writing about tech, school, and whatever else is on my mind.</p>
      </header>

      {/* Render the interactive client component, passing the statically generated posts */}
      <BlogList initialPosts={posts} />
    </div>
  )
}
