import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

// Mock child
const Child = () => <div>Test Child</div>

// Mock all components used in the layout
jest.mock('@/components/layout/Navbar', () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>,
}))
jest.mock('@/components/shared/ConditionalFooter', () => ({
  ConditionalFooter: () => <footer data-testid="footer">Footer</footer>,
}))
jest.mock('@/components/shared/LenisProvider', () => ({
  LenisProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))
jest.mock('@/components/shared/ScrollRevealProvider', () => ({
  ScrollRevealProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))
jest.mock('@/components/shared/PageTransitionProvider', () => ({
  PageTransitionProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))
jest.mock('@/components/shared/ScrollToTop', () => ({
  ScrollToTop: () => null,
}))
jest.mock('next/script', () => {
  const MockScript = ({ src, strategy }: { src: string; strategy: string }) => (
    <div data-testid="script" data-src={src} data-strategy={strategy} />
  )

  MockScript.displayName = 'MockScript'

  return MockScript
})

describe('RootLayout', () => {
  it('renders Navbar and Footer', () => {
    render(
      <RootLayout>
        <Child />
      </RootLayout>
    )
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <RootLayout>
        <Child />
      </RootLayout>
    )
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})
