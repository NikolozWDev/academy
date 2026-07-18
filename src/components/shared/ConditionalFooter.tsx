'use client'
import { usePathname } from 'next/navigation'
import { Footer } from '@/components/layout/Footer'

export function ConditionalFooter() {
  const pathname = usePathname()

  // Pages that should NOT show the footer
  if (pathname === '/book-call') return null

  // All known routes
  const knownRoutes = ['/', '/about', '/blog', '/tutorials', '/legal']
  const isKnownRoute = knownRoutes.includes(pathname)
  const isBlogPost = pathname.startsWith('/blog/')

  // If it's not a known route and not a blog post, it's a 404 → hide footer
  if (!isKnownRoute && !isBlogPost) return null

  return <Footer />
}
