import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crow Business - Transform Your Service Business',
  description: 'The all-in-one scheduling and business management platform built for service professionals.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <ErrorBoundary>
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <main>{children}</main>
          </Suspense>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
