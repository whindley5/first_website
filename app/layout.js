import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

export const metadata = {
  title: 'Your Name',
  description: 'Developer, writer, tinkerer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}