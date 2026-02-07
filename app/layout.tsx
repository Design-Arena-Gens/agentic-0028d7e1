import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '100 Revolutionary App Ideas - Professional eBook',
  description: 'Discover 100 innovative app ideas across multiple categories with detailed descriptions and market insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
