'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',        label: 'Home'     },
  { href: '/blog',     label: 'Blog'     },
  { href: '/projects', label: 'Projects' },
  { href: '/resume',   label: 'Resume'   },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          will. Hi  {/* ← change this */}
        </Link>
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}