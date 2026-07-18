// src/app/not-found.tsx
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFoundPage() {
  return (
    <section
      className="legal-section legal-last-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: 120,
        paddingBottom: 120,
      }}
    >
      <div className="section-container" style={{ maxWidth: 600 }}>
        <div className="status-badge" style={{ marginBottom: 24 }}>
          <span>404</span>
        </div>
        <h1 className="section-title" style={{ marginBottom: 16 }}>
          Oops, page <i className="serif">not found</i>.
        </h1>
        <p className="section-sub" style={{ marginBottom: 40, maxWidth: '100%' }}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-pill btn-primary btn-lg">
          Back to home
        </Link>
      </div>
    </section>
  )
}
