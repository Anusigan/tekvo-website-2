import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tekvo Labs',
  description: 'Bringing Real time solutions to your businesss',
  generator: 'v0.dev',
  icons: {
    icon: '/tekvo1.png',        // This will be used as favicon
    apple: '/tekvo1.png',       // Correct path without 'images/' prefix
    shortcut: '/tekvo1.png',    // Adding shortcut for better compatibility
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
