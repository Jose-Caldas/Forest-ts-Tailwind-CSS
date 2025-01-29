import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forest-ts',
  description: 'Landing page tailwindCss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br" className="scroll-smooth">
      <body className="bg-verde-800">{children}</body>
    </html>
  )
}
