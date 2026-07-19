import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Schedule a call with Edutech…',
}

export default function BookCallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}