import type { Metadata } from 'next'
import './globals.css'
import { Cabin } from 'next/font/google'

export const metadata: Metadata = {
  title: 'miracleSCVP',
  description: 'Created with v0',
  generator: 'v0.dev',
}
const cabin = Cabin({ subsets: ['latin'], weight: ['400', '600', '700'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head></head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
          rel="stylesheet"
          precedence="default"  
        />
      <body className={`${cabin.className} antialiased`}>{children}</body>
    </html>
  )
}
